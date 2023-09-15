import { DatabaseServices } from "Infra-backend"
import { GetFanByEmailDTO, ResponseDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../../../assets"

export class GetFanByEmailUsecase extends BaseUsecase<GetFanByEmailDTO, ResponseDTO<Fan>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: GetFanByEmailDTO): Promise<ResponseDTO<Fan>> {
		return await this.service.fan.getByEmail(email)
	}
}
