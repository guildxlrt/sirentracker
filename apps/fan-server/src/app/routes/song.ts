import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const songCtrl = controllers.song

export default async function (route: FastifyInstance) {
	route.get("/song/:id", songCtrl.get)
	route.get("/song/:id", songCtrl.findManyByArtist)
	route.get("/song/:id", songCtrl.findManyByRelease)
}
