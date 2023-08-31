import { DataServices } from "Infra-backend"
import { EmailCleanDTO, EmailUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class EmailUpdateUsecase implements BaseUsecase<EmailUncleanDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: EmailUncleanDTO): Promise<boolean> {
		const { email, confirm } = params

		const validData: EmailCleanDTO = email

		return await this.service.userConnect.emailUpdate(validData)
	}
}
