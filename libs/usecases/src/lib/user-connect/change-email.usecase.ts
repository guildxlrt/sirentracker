import { DatabaseServices } from "Infra-backend"
import { ChangeEmailDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class ChangeEmailUsecase extends BaseUsecase<ChangeEmailDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ChangeEmailDTO): Promise<ResponseDTO<boolean>> {
		const email = params.isValid()

		if (email) return await this.service.userConnect.changeEmail(email)
		else throw Error(email)
	}
}
