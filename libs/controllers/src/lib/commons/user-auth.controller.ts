import { FastifyReply, FastifyRequest } from "fastify"
import { ErrorMsg, apiError } from "Shared-utils"
import { ChangeEmailDTO, ChangePassDTO, LoginDTO, LogoutDTO, ResponseDTO } from "Dto"
import { ChangeEmailUsecase, ChangePassUsecase, LoginUsecase, LogoutUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"

const login = new LoginUsecase(databaseServices)
const logout = new LogoutUsecase(databaseServices)
const changeEmail = new ChangeEmailUsecase(databaseServices)
const changePassword = new ChangePassUsecase(databaseServices)

interface IUserAuthController {
	login(request: unknown, reply: unknown): Promise<ResponseDTO<Credential>>
	logout(request: unknown, reply: unknown): Promise<ResponseDTO<unknown>>
	changeEmail(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	changePass(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class UserAuthController implements IUserAuthController {
	async login(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Credential>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: LoginDTO = request.body as LoginDTO

			const { data, error, status } = await login.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async logout(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: LogoutDTO = request.body as LogoutDTO

			const { data, error, status } = await logout.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changeEmail(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ChangeEmailDTO = request.body as ChangeEmailDTO

			inputs.validate()

			const { data, error, status } = await changeEmail.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error: ErrorMsg | any) {
			if (error?.status) return reply.status(error.status).send({ error: error.message })
			else return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changePass(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ChangePassDTO = request.body as ChangePassDTO

			inputs.validate()

			const { data, error, status } = await changePassword.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
