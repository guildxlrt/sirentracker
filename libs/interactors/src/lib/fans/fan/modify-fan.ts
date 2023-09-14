import { DatabaseServices } from "Infra-backend"
import { CleanFanDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ModifyFanUsecase extends BaseUsecase<CleanFanDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanFanDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.fan.modify(params)
	}
}
