import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { apiError } from "Shared-utils"
import {} from "Domain"
import { ChangeEmailDTO, ChangePassDTO, ResponseDTO, SignupDTO, UserConnectDTO } from "Dto"
import {
	ChangeEmailUsecase,
	ChangePassUsecase,
	LoginUsecase,
	LogoutUsecase,
	SignUpUsecase,
} from "interactors"
import { databaseServices } from "Infra-backend"

const signUp = new SignUpUsecase(databaseServices)
const login = new LoginUsecase(databaseServices)
const logout = new LogoutUsecase(databaseServices)
const changeEmail = new ChangeEmailUsecase(databaseServices)
const changePassword = new ChangePassUsecase(databaseServices)

interface IAuthorController {
	signUp(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	login(request: unknown, reply: unknown): Promise<ResponseDTO<Credential>>
	logout(request: unknown, reply: unknown): Promise<ResponseDTO<unknown>>
	changeEmail(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	changePass(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class AuthorController implements IAuthorController {
	async signUp(
		request: FastifyRequest<IParams<SignupDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await signUp.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async login(
		request: FastifyRequest<IParams<UserConnectDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Credential>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await login.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async logout(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await logout.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changeEmail(
		request: FastifyRequest<IParams<ChangeEmailDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await changeEmail.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changePass(
		request: FastifyRequest<IParams<ChangePassDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await changePassword.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
