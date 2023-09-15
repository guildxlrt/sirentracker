import { DatabaseServices } from "Infra-backend"
import { GetFanByIdDTO, ResponseDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../../../assets"

export class GetFanByIdUsecase extends BaseUsecase<GetFanByIdDTO, ResponseDTO<Fan>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: GetFanByIdDTO): Promise<ResponseDTO<Fan>> {
		return await this.service.fan.getById(id)
	}
}
