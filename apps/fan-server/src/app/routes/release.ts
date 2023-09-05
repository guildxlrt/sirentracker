import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const releaseCtrl = controllers.release

export default async function (route: FastifyInstance) {
	route.get("/release/:id", releaseCtrl.get)
	route.get("/releases", releaseCtrl.getAll)
	route.get("/releases/:genre", releaseCtrl.findManyByGenre)
	route.get("/releases/artist/:id", releaseCtrl.findManyByGenre)
}
