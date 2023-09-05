import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const artistCtrl = controllers.artist

export default async function (route: FastifyInstance) {
	route.get("/artists", artistCtrl.getAll)
	route.get("/artists/:genre", artistCtrl.findManyByGenre)
	route.get("/artist/:id", artistCtrl.getById)
}
