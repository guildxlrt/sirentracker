import { Order, OrderRepository } from "Domain"
import { OrderIdDTO, ResponseDTO } from "Dto"

export class OrderImplement implements OrderRepository {
	async make(id: OrderIdDTO): Promise<ResponseDTO<boolean>> {
		const dbRes: any = {}

		return dbRes
	}

	async get(id: OrderIdDTO): Promise<ResponseDTO<Order>> {
		const dbRes: any = {}

		return dbRes
	}
}
