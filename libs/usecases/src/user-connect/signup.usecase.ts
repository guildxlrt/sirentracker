import { DatabaseServices } from "Infra-backend"
import { SignupCleanDTO, SignupUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class SignUpUsecase extends BaseUsecase<SignupUncleanDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: SignupUncleanDTO): Promise<boolean> {
		const { email, password } = params

		const validData: SignupCleanDTO = { email: email.field, password: password.field }

		return await this.service.userConnect.signup(validData)
	}
}
