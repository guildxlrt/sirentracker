import { DatabaseServices } from "Infra-backend"
import { CreateFanDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateFanUsecase extends BaseUsecase<CreateFanDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateFanDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.fan.create(params)
	}
}
