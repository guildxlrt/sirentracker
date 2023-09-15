import { FastifyReply, FastifyRequest } from "fastify"
import { ErrorMsg, apiError } from "Shared-utils"
import { CreateFanDTO, GetFanByEmailDTO, GetFanByIdDTO, ModifyFanDTO } from "Dto"
import {
	CreateFanUsecase,
	GetFanByEmailUsecase,
	GetFanByIdUsecase,
	ModifyFanUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsId } from "../../assets"

const createFan = new CreateFanUsecase(databaseServices)
const modifyFan = new ModifyFanUsecase(databaseServices)
const getFanById = new GetFanByIdUsecase(databaseServices)
const getFanByEmail = new GetFanByEmailUsecase(databaseServices)

interface IFanController {
	create(request: unknown, reply: unknown): Promise<never>
	modify(request: unknown, reply: unknown): Promise<never>
	getById(request: unknown, reply: unknown): Promise<never>
	getByEmail(request: unknown, reply: unknown): Promise<never>
}

export class FanController implements IFanController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateFanDTO = request.body as CreateFanDTO

			// Verify image format
			inputs.verifyImgFormat()

			// Saveing Credentials
			inputs.validAuths()

			// Saving Profile
			const { data, error, status } = await createFan.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error: ErrorMsg | any) {
			if (error?.status) return reply.status(error.status).send({ error: error.message })
			else return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ModifyFanDTO = request.body as ModifyFanDTO

			inputs.verifyImgFormat()

			const { data, error, status } = await modifyFan.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetFanByIdDTO = new GetFanByIdDTO(id)

			const { data, error, status } = await getFanById.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetFanByEmailDTO = request.body as GetFanByEmailDTO

			const { data, error, status } = await getFanByEmail.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
