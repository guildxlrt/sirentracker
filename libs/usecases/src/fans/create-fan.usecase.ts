import { DatabaseServices } from "Infra-backend"
import { CreateFanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class CreateFanUsecase extends BaseUsecase<CreateFanDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateFanDTO): Promise<boolean> {
		return await this.service.fan.create(params)
	}
}
