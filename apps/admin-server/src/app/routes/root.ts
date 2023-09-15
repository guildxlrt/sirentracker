import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { apiError, apiMsg } from "Shared-utils"

export default async function (route: FastifyInstance) {
	route.get("/", async function (request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		return reply.status(200).send(apiMsg.hello.admin)
	})
}
