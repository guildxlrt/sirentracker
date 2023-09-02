import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const artistCtrl = controllers.artist

export default async function (route: FastifyInstance) {
	route.post("/artist", artistCtrl.create)
	route.put("/artist", artistCtrl.modify)
}
