import { BaseEntity } from "../../assets"
import { ReleaseId } from "./release"
import { UserConnectId } from "./user-auth"

export class Order extends BaseEntity {
	release_id: ReleaseId
	user_id: UserConnectId
	amount: number

	constructor(
		id: number,
		createdAt: Date,
		release_id: ReleaseId,
		user_id: UserConnectId,
		amount: number
	) {
		super(id, createdAt)

		this.release_id = release_id
		this.user_id = user_id
		this.amount = amount
	}
}

export type OrderId = Pick<Order, "id">["id"]
