import { BaseEntity } from "../../../assets"
import { ReleaseId } from "../artists"
import { FanId } from "./fan"

export class Order extends BaseEntity {
	release_id: ReleaseId
	fan_id: FanId
	amount: number

	constructor(id: number, createdAt: Date, release_id: ReleaseId, fan_id: FanId, amount: number) {
		super(id, createdAt)

		this.release_id = release_id
		this.fan_id = fan_id
		this.amount = amount
	}
}

export type OrderId = Pick<Order, "id">["id"]
