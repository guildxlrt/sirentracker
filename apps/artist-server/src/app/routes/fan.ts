import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const fanCtrl = controllers.fan

export default async function (route: FastifyInstance) {
	route.get("/fan/:id", fanCtrl.getById)
}
