import { OrderRepository } from "Domain"
import { OrderIdDTO } from "Dto"
import { Order } from "libs/domain/src/entities/order"

export class OrderImplement implements OrderRepository {
	async make(id: OrderIdDTO): Promise<boolean> {
		const dbRes: any = {}

		return dbRes
	}

	async get(id: OrderIdDTO): Promise<Order> {
		const dbRes: any = {}

		return dbRes
	}
}
