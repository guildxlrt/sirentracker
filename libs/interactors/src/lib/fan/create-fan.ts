import { DatabaseServices } from "Infra-backend"
import { CleanNewFanDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateFanUsecase extends BaseUsecase<CleanNewFanDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanNewFanDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.fan.create(params)
	}
}
