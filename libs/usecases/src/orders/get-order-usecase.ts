import { DatabaseServices } from "Infra-backend"
import { OrderIdDTO } from "Dto"

import { BaseUsecase } from "../base-usecase"
import { Order } from "libs/domain/src/entities/order"

export class GetOrderUsecase extends BaseUsecase<OrderIdDTO, Order> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: OrderIdDTO): Promise<Order> {
		return await this.service.order.get(params)
	}
}
