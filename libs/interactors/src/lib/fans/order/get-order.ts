import { DatabaseServices } from "Infra-backend"
import { GetOrderByIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"
import { Order } from "Domain"

export class GetOrderUsecase extends BaseUsecase<GetOrderByIdDTO, ResponseDTO<Order>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: GetOrderByIdDTO): Promise<ResponseDTO<Order>> {
		return await this.service.order.get(params)
	}
}
