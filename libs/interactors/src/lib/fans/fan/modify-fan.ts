import { DatabaseServices } from "Infra-backend"
import { ModifyFanDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ModifyFanUsecase extends BaseUsecase<ModifyFanDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ModifyFanDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.fan.modify(params)
	}
}
