import { DatabaseServices } from "Infra-backend"
import { FanIdDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetFanByIdUsecase extends BaseUsecase<FanIdDTO, Fan> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FanIdDTO): Promise<Fan> {
		return await this.service.fan.getById(id)
	}
}
