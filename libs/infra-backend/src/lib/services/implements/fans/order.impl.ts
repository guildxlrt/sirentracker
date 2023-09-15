import { Order, OrderRepository } from "Domain"
import {
	FindOrdersByUserDTO,
	GetOrderByIdDTO,
	GetUserOrdersDTO,
	MakeOrderDTO,
	ResponseDTO,
} from "Dto"

export class OrderImplement implements OrderRepository {
	async make(inputs: MakeOrderDTO): Promise<ResponseDTO<boolean>> {
		const dbRes: any = {}

		return dbRes
	}

	async get(inputs: GetOrderByIdDTO): Promise<ResponseDTO<Order>> {
		const dbRes: any = {}

		return dbRes
	}

	async findManyByUser(inputs: FindOrdersByUserDTO): Promise<ResponseDTO<Order[]>> {
		const dbRes: Order[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getUserOrders(inputs: GetUserOrdersDTO): Promise<ResponseDTO<Order[]>> {
		const dbRes: Order[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}
