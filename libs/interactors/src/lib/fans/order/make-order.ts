import { DatabaseServices } from "Infra-backend"
import { MakeOrderDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class MakeOrderUsecase extends BaseUsecase<MakeOrderDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: MakeOrderDTO): Promise<MakeOrderDTO> {
		return await this.service.order.make(params)
	}
}
