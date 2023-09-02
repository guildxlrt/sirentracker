import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const orderCtrl = controllers.order

export default async function (route: FastifyInstance) {
	route.post("/order", orderCtrl.make)
	route.get("/order/:id", orderCtrl.get)
}
