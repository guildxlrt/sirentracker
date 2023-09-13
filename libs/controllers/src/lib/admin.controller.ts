import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { CleanNewAdminDTO, CreateAdminDTO, ResponseDTO } from "Dto"
import { CreateAdminUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"

const createAdmin = new CreateAdminUsecase(databaseServices)

interface IAdminController {
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class AdminController implements IAdminController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateAdminDTO = request.body as CreateAdminDTO

			const auths = inputs.validAuths()
			if (auths.error) reply.status(apiError.e400.status).send({ error: auths.error })

			const cleanedData: CleanNewAdminDTO = inputs.completData(auths)

			const { data, error, status } = await createAdmin.execute(cleanedData)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}
