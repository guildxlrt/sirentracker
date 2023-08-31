import { DataServices } from "Infra-backend"
import { EmailDTO } from "Dto"
import { Fan } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetFanByEmailUsecase implements BaseUsecase<EmailDTO, Fan> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(email: EmailDTO): Promise<Fan> {
		return await this.service.fan.getByEmail(email)
	}
}
