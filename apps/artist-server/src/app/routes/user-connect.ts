import { FastifyInstance } from "fastify"
import { controllers } from "Controllers"

const userConnectCtrl = controllers.userConnect

export default async function (route: FastifyInstance) {
	route.post("/signup", userConnectCtrl.signUp)
	route.post("/login", userConnectCtrl.login)
	route.delete("/logout", userConnectCtrl.logout)
	route.put("/email", userConnectCtrl.changeEmail)
	route.put("/password", userConnectCtrl.changePass)
}
