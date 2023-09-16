import { DatabaseServices } from "Infra-backend"
import { GetFanByEmailDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class GetFanByEmailUsecase extends BaseUsecase<GetFanByEmailDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: GetFanByEmailDTO): Promise<GetFanByEmailDTO> {
		return await this.service.fan.getByEmail(email)
	}
}
