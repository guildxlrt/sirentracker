import { DatabaseServices } from "Infra-backend"
import { Order } from "Domain"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class GetUserOrdersUsecase extends BaseUsecase<void, ResponseDTO<Order[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<ResponseDTO<Order[]>> {
		return await this.service.order.getUserOrders()
	}
}
