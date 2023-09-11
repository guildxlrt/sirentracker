import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
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

interface IUserAuthController {
	signUp(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	login(request: unknown, reply: unknown): Promise<ResponseDTO<Credential>>
	logout(request: unknown, reply: unknown): Promise<ResponseDTO<unknown>>
	changeEmail(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	changePass(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class UserAuthController implements IUserAuthController {
	async signUp(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: SignupDTO = request.body as SignupDTO

			const validate = inputs.validate()
			if (validate.error) return reply.status(400).send({ error: apiError.e400.msg })

			const { data, error, status } = await signUp.execute(validate)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

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
			const { data, error, status } = await logout.execute()
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

			const validate = inputs.validate()
			if (validate.error) return reply.status(400).send({ error: apiError.e400.msg })

			const { data, error, status } = await changeEmail.execute(validate)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async changePass(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ChangePassDTO = request.body as ChangePassDTO

			const validate = inputs.validate()
			if (validate.error) return reply.status(400).send({ error: apiError.e400.msg })

			const { data, error, status } = await changePassword.execute(validate)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
