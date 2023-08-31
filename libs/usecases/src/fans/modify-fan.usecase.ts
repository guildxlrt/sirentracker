import { DatabaseServices } from "Infra-backend"
import { ModifyFanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class ModifyFanUsecase extends BaseUsecase<ModifyFanDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ModifyFanDTO): Promise<boolean> {
		return await this.service.fan.modify(params)
	}
}
