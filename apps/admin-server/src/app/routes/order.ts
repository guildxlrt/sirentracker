import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const orderCtrl = controllers.order

export default async function (route: FastifyInstance) {
	route.get("/order/:id", orderCtrl.get)
}
