import { Order, OrderRepository } from "Domain"
import { FanIdDTO, MakeOrderDTO, OrderIdDTO, ResponseDTO } from "Dto"

export class OrderImplement implements OrderRepository {
	async make(params: MakeOrderDTO): Promise<ResponseDTO<boolean>> {
		const dbRes: any = {}

		return dbRes
	}

	async get(id: OrderIdDTO): Promise<ResponseDTO<Order>> {
		const dbRes: any = {}

		return dbRes
	}

	async findManyByUser(id: FanIdDTO): Promise<ResponseDTO<Order[]>> {
		const dbRes: any = {}

		return dbRes
	}
}
