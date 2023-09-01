import { DatabaseServices } from "Infra-backend"
import { EmailDTO, ResponseDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../../assets"

export class GetFanByEmailUsecase extends BaseUsecase<EmailDTO, ResponseDTO<Fan>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: EmailDTO): Promise<ResponseDTO<Fan>> {
		return await this.service.fan.getByEmail(email)
	}
}
