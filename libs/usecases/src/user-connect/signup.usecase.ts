import { DataServices } from "Infra-backend"
import { SignupCleanDTO, SignupUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class SignUpUsecase implements BaseUsecase<SignupUncleanDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: SignupUncleanDTO): Promise<boolean> {
		const { email, password } = params

		const validData: SignupCleanDTO = { email: email.field, password: password.field }

		return await this.service.userConnect.signup(validData)
	}
}
