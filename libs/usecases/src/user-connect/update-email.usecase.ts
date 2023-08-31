import { DatabaseServices } from "Infra-backend"
import { EmailCleanDTO, EmailUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class UpdateEmailUsecase extends BaseUsecase<EmailUncleanDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: EmailUncleanDTO): Promise<boolean> {
		const { email, confirm } = params

		const validData: EmailCleanDTO = email

		return await this.service.userConnect.updateEmail(validData)
	}
}
