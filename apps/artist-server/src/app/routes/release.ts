import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const releaseCtrl = controllers.release

export default async function (route: FastifyInstance) {
	route.post("/release", releaseCtrl.create)
	route.put("/release/price", releaseCtrl.modifyPrice)
	route.get("/releases", releaseCtrl.getUserReleases)
	route.get("/release/:id", releaseCtrl.get)
}
