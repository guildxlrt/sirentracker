import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../../assets"
import { GetUserOrdersDTO } from "Dto"

export class GetUserOrdersUsecase extends BaseUsecase<GetUserOrdersDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetUserOrdersDTO): Promise<GetUserOrdersDTO> {
		return await this.service.order.getUserOrders(inputs)
	}
}
