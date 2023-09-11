import { DatabaseServices } from "Infra-backend"
import { CleanSignupDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class SignUpUsecase extends BaseUsecase<CleanSignupDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanSignupDTO): Promise<ResponseDTO<boolean>> {
		// const { email, password } = params

		// const validData: CleanSignupDTO = { email: email, password: password }

		return await this.service.userConnect.signUp(params)
	}
}
