import { DatabaseServices } from "Infra-backend"
import { GetFanByIdDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class GetFanByIdUsecase extends BaseUsecase<GetFanByIdDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: GetFanByIdDTO): Promise<GetFanByIdDTO> {
		return await this.service.fan.getById(id)
	}
}
