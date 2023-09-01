import { DatabaseServices } from "Infra-backend"
import { OrderIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"
import { Order } from "Domain"

export class GetOrderUsecase extends BaseUsecase<OrderIdDTO, ResponseDTO<Order>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: OrderIdDTO): Promise<ResponseDTO<Order>> {
		return await this.service.order.get(params)
	}
}
