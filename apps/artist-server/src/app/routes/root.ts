import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { apiError, apiMsg } from "Shared-utils"
import { controllers } from "Controllers"

const artistCtrl = controllers.artist

export default async function (route: FastifyInstance) {
	route.post("/", artistCtrl.create)
	route.put("/", artistCtrl.modify)

	route.get("/", async function (request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		return reply.status(200).send(apiMsg.hello.artist)
	})
}
