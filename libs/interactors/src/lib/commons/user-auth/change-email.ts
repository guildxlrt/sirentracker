import { DatabaseServices } from "Infra-backend"
import { ChangeEmailDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ChangeEmailUsecase extends BaseUsecase<ChangeEmailDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ChangeEmailDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.userAuth.changeEmail(params)
	}
}
