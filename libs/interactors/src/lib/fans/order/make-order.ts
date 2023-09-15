import { DatabaseServices } from "Infra-backend"
import { MakeOrderDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class MakeOrderUsecase extends BaseUsecase<MakeOrderDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: MakeOrderDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.order.make(params)
	}
}
