import { FanId, Order, OrderId, ReleaseId, UserAuthId } from "Domain"
import { BasicDTO } from "../../assets"

// MAKE ORDER
interface INewOrderData {
	release_id: ReleaseId
	fan_id: UserAuthId
	amount: number
}

export class MakeOrderDTO implements BasicDTO<INewOrderData, boolean> {
	data: INewOrderData
	storage?: boolean
	error?: string

	constructor(data: INewOrderData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET ORDER
export class GetOrderByIdDTO implements BasicDTO<OrderId, Order> {
	data: OrderId
	storage?: Order
	error?: string

	constructor(data: OrderId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND MANY BY USER
export class FindOrdersByUserDTO implements BasicDTO<FanId, Order[]> {
	readonly data: FanId
	storage?: Order[]
	error?: string

	constructor(data: FanId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND MANY BY USER
export class GetUserOrdersDTO implements BasicDTO<FanId, Order[]> {
	readonly data: FanId
	storage?: Order[]
	error?: string

	constructor(data: FanId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}
