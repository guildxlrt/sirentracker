import { DatabaseServices } from "Infra-backend"
import { SignupDTO, CleanSignupDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class SignUpUsecase extends BaseUsecase<SignupDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: SignupDTO): Promise<ResponseDTO<boolean>> {
		const { email, password } = params

		const validData: CleanSignupDTO = { email: email, password: password }

		return await this.service.userConnect.signup(validData)
	}
}
