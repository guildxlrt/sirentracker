import { DatabaseServices } from "Infra-backend"
import { OrderIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class MakeOrderUsecase extends BaseUsecase<OrderIdDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: OrderIdDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.order.make(params)
	}
}
