import { FastifyReply, FastifyRequest } from "fastify"
import { ErrorMsg, apiError } from "Shared-utils"
import { CreateAdminDTO } from "Dto"
import { CreateAdminUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"

const createAdmin = new CreateAdminUsecase(databaseServices)

interface IAdminController {
	create(request: unknown, reply: unknown): Promise<never>
}

export class AdminController implements IAdminController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateAdminDTO = request.body as CreateAdminDTO

			// Validate Credentials
			inputs.validAuths()

			const { data, error } = await createAdmin.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error: ErrorMsg | any) {
			if (error?.status) return reply.status(error.status).send({ error: error.message })

			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
