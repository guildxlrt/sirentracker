import { DataServices } from "Infra-backend"
import { CreateFanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class CreateFanUsecase implements BaseUsecase<CreateFanDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: CreateFanDTO): Promise<boolean> {
		return await this.service.fan.create(params)
	}
}
