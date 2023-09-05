import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const fanCtrl = controllers.fan

export default async function (route: FastifyInstance) {
	route.post("/fan", fanCtrl.create)
	route.put("/fan", fanCtrl.modify)
}
