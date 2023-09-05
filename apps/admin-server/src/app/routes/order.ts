import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const orderCtrl = controllers.order

export default async function (route: FastifyInstance) {
	route.get("/user-orders/:id", orderCtrl.findManyByUser)
}
