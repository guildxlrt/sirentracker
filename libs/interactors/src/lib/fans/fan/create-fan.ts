import { DatabaseServices } from "Infra-backend"
import { CreateFanDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class CreateFanUsecase extends BaseUsecase<CreateFanDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateFanDTO): Promise<CreateFanDTO> {
		return await this.service.fan.create(params)
	}
}
