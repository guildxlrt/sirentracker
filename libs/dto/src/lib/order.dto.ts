import { Order, ReleaseId, UserConnectId } from "Domain"

export type OrderIdDTO = ReleaseId

type IMakeOrder = Omit<Order, "id" | "createdAt" | "updatedAt">

export class MakeOrderDTO implements IMakeOrder {
	release_id: ReleaseId
	fan_id: UserConnectId
	amount: number

	constructor(release_id: ReleaseId, user_id: UserConnectId, amount: number) {
		this.release_id = release_id
		this.fan_id = user_id
		this.amount = amount
	}
}
