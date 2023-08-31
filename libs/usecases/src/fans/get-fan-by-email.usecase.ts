import { DatabaseServices } from "Infra-backend"
import { EmailDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetFanByEmailUsecase extends BaseUsecase<EmailDTO, Fan> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: EmailDTO): Promise<Fan> {
		return await this.service.fan.getByEmail(email)
	}
}
