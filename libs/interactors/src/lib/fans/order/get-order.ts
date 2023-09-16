import { DatabaseServices } from "Infra-backend"
import { GetOrderByIdDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class GetOrderUsecase extends BaseUsecase<GetOrderByIdDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: GetOrderByIdDTO): Promise<GetOrderByIdDTO> {
		return await this.service.order.get(params)
	}
}
