import { DatabaseServices } from "Infra-backend"
import { Order } from "Domain"
import { BaseUsecase } from "../../../assets"
import { GetUserOrdersDTO, ResponseDTO } from "Dto"

export class GetUserOrdersUsecase extends BaseUsecase<GetUserOrdersDTO, ResponseDTO<Order[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetUserOrdersDTO): Promise<ResponseDTO<Order[]>> {
		return await this.service.order.getUserOrders(inputs)
	}
}
