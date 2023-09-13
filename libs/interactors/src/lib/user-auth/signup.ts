import { DatabaseServices } from "Infra-backend"
import { CleanSignupDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class SignUpUsecase extends BaseUsecase<CleanSignupDTO, ResponseDTO<number>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanSignupDTO): Promise<ResponseDTO<number>> {
		return await this.service.userAuth.signUp(params)
	}
}
