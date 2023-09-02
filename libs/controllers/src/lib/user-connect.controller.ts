import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import {} from "Domain"
import { ChangeEmailDTO, ChangePassDTO, LoginDTO, ResponseDTO, SignupDTO } from "Dto"
import {
	ChangeEmailUsecase,
	ChangePassUsecase,
	LoginUsecase,
	LogoutUsecase,
	SignUpUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"

const signUp = new SignUpUsecase(databaseServices)
const login = new LoginUsecase(databaseServices)
const logout = new LogoutUsecase(databaseServices)
const changeEmail = new ChangeEmailUsecase(databaseServices)
const changePassword = new ChangePassUsecase(databaseServices)

interface IUserConnectController {
	signUp(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	login(request: unknown, reply: unknown): Promise<ResponseDTO<Credential>>
	logout(request: unknown, reply: unknown): Promise<ResponseDTO<unknown>>
	changeEmail(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	changePass(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class UserConnectController implements IUserConnectController {
	async signUp(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const body: SignupDTO = request.body as SignupDTO

			const { data, error, status } = await signUp.execute(body)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async login(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Credential>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const body: LoginDTO = request.body as LoginDTO

			const { data, error, status } = await login.execute(body)
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

	async changeEmail(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const body: ChangeEmailDTO = request.body as ChangeEmailDTO

		try {
			const { data, error, status } = await changeEmail.execute(body)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changePass(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const body: ChangePassDTO = request.body as ChangePassDTO

		try {
			const { data, error, status } = await changePassword.execute(body)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
