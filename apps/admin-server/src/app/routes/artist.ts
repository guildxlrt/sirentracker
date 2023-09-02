import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const artistCtrl = controllers.artist

export default async function (route: FastifyInstance) {
	route.get("/artist/:id", artistCtrl.getById)
	route.get("/artist/:email", artistCtrl.getByEmail)
}
