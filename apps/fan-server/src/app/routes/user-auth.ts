import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const userAuthCtrl = controllers.userAuth

export default async function (route: FastifyInstance) {
	route.post("/login", userAuthCtrl.login)
	route.delete("/logout", userAuthCtrl.logout)
	route.put("/email", userAuthCtrl.changeEmail)
	route.put("/password", userAuthCtrl.changePass)
}
