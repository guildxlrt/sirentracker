import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { GenreType, apiError } from "Shared-utils"
import { Fan } from "Domain"
import { FanIdDTO, CreateFanDTO, EmailDTO, ModifyFanDTO, ResponseDTO } from "Dto"
import {
	CreateFanUsecase,
	GetFanByEmailUsecase,
	GetFanByIdUsecase,
	ModifyFanUsecase,
} from "interactors"
import { databaseServices } from "Infra-backend"

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
	async create(
		request: FastifyRequest<IParams<CreateFanDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await createFan.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(
		request: FastifyRequest<IParams<ModifyFanDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await modifyFan.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(
		request: FastifyRequest<IParams<FanIdDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Fan>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getFanById.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(
		request: FastifyRequest<IParams<EmailDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Fan>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getFanByEmail.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
