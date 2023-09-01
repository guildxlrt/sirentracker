import { DatabaseServices } from "Infra-backend"
import { FanIdDTO, ResponseDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../../assets"

export class GetFanByIdUsecase extends BaseUsecase<FanIdDTO, ResponseDTO<Fan>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FanIdDTO): Promise<ResponseDTO<Fan>> {
		return await this.service.fan.getById(id)
	}
}
