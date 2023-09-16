import { Order, OrderRepository } from "Domain"
import { FindOrdersByUserDTO, GetOrderByIdDTO, GetUserOrdersDTO, MakeOrderDTO } from "Dto"

export class OrderImplement implements OrderRepository {
	async make(inputs: MakeOrderDTO): Promise<MakeOrderDTO> {
		const dbRes: any = {}

		inputs.putInStorage(dbRes)

		return inputs
	}

	async get(inputs: GetOrderByIdDTO): Promise<GetOrderByIdDTO> {
		const dbRes: any = {}

		inputs.putInStorage(dbRes)

		return inputs
	}

	async findManyByUser(inputs: FindOrdersByUserDTO): Promise<FindOrdersByUserDTO> {
		const dbRes: Order[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}

	async getUserOrders(inputs: GetUserOrdersDTO): Promise<GetUserOrdersDTO> {
		const dbRes: Order[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}
}
