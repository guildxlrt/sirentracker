import { DataServices } from "Infra-backend"
import { ModifyFanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class ModifyFanUsecase implements BaseUsecase<ModifyFanDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: ModifyFanDTO): Promise<boolean> {
		return await this.service.fan.modify(params)
	}
}
