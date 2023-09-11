import { DatabaseServices } from "Infra-backend"
import { CleanEmailDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class ChangeEmailUsecase extends BaseUsecase<CleanEmailDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanEmailDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.userConnect.changeEmail(params)
	}
}
