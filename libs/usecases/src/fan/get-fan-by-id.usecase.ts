import { DataServices } from "Infra-backend"
import { FanIdDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetFanByIdUsecase implements BaseUsecase<FanIdDTO, Fan> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(id: FanIdDTO): Promise<Fan> {
		return await this.service.fan.getById(id)
	}
}
