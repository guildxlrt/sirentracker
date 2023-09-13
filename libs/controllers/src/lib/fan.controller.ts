import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { Fan } from "Domain"
import { CleanNewFanDTO, CreateFanDTO, ModifyFanDTO, ResponseDTO } from "Dto"
import {
	CreateFanUsecase,
	GetFanByEmailUsecase,
	GetFanByIdUsecase,
	ModifyFanUsecase,
	SignUpUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsEmail, ParamsId } from "../assets"

const signUp = new SignUpUsecase(databaseServices)
const createFan = new CreateFanUsecase(databaseServices)
const modifyFan = new ModifyFanUsecase(databaseServices)
const getFanById = new GetFanByIdUsecase(databaseServices)
const getFanByEmail = new GetFanByEmailUsecase(databaseServices)

interface IFanController {
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	modify(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	getById(request: unknown, reply: unknown): Promise<ResponseDTO<Fan>>
	getByEmail(request: unknown, reply: unknown): Promise<ResponseDTO<Fan>>
}

export class FanController implements IFanController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateFanDTO = request.body as CreateFanDTO

			const validateAuths = inputs.validAuths()
			const auths = await signUp.execute(validateAuths)
			if (auths.error) reply.status(auths.status).send({ error: auths.error })

			const cleanedData: CleanNewFanDTO = inputs.completData(auths.data)

			const { data, error, status } = await createFan.execute(cleanedData)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const inputs: ModifyFanDTO = request.body as ModifyFanDTO

		try {
			const { data, error, status } = await modifyFan.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Fan>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { id } = request.params

		try {
			const { data, error, status } = await getFanById.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(
		request: FastifyRequest<ParamsEmail>,
		reply: FastifyReply
	): Promise<ResponseDTO<Fan>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { email } = request.params

		try {
			const { data, error, status } = await getFanByEmail.execute(email)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
