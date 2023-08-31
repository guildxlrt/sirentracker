import { DatabaseServices } from "Infra-backend"
import { OrderIdDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class MakeOrderUsecase extends BaseUsecase<OrderIdDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: OrderIdDTO): Promise<boolean> {
		return await this.service.order.make(params)
	}
}
