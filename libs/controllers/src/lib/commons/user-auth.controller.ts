import { FastifyReply, FastifyRequest } from "fastify"
import { ErrorMsg, apiError } from "Shared-utils"
import { ChangeEmailDTO, ChangePassDTO, LoginDTO, LogoutDTO } from "Dto"
import { ChangeEmailUsecase, ChangePassUsecase, LoginUsecase, LogoutUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"

const login = new LoginUsecase(databaseServices)
const logout = new LogoutUsecase(databaseServices)
const changeEmail = new ChangeEmailUsecase(databaseServices)
const changePassword = new ChangePassUsecase(databaseServices)

interface IUserAuthController {
	login(request: unknown, reply: unknown): Promise<never>
	logout(request: unknown, reply: unknown): Promise<never>
	changeEmail(request: unknown, reply: unknown): Promise<never>
	changePass(request: unknown, reply: unknown): Promise<never>
}

export class UserAuthController implements IUserAuthController {
	async login(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: LoginDTO = request.body as LoginDTO

			const { data, error } = await login.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async logout(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: LogoutDTO = request.body as LogoutDTO

			const { data, error } = await logout.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changeEmail(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ChangeEmailDTO = request.body as ChangeEmailDTO

			inputs.validate()

			const { data, error } = await changeEmail.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error: ErrorMsg | any) {
			if (error?.status) return reply.status(error.status).send({ error: error.message })
			else return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changePass(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ChangePassDTO = request.body as ChangePassDTO

			inputs.validate()

			const { data, error } = await changePassword.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
