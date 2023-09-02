import { DatabaseServices } from "Infra-backend"
import { FanIdDTO, OrderIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"
import { Order } from "Domain"

export class FindOrdersByUserUsecase extends BaseUsecase<OrderIdDTO, ResponseDTO<Order[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: FanIdDTO): Promise<ResponseDTO<Order[]>> {
		return await this.service.order.findManyByUser(params)
	}
}
