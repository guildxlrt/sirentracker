import { DatabaseServices } from "Infra-backend"
import { ModifyFanDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ModifyFanUsecase extends BaseUsecase<ModifyFanDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ModifyFanDTO): Promise<ModifyFanDTO> {
		return await this.service.fan.modify(params)
	}
}
