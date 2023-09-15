import { UserAuthRepository } from "Domain"
import { LoginDTO, ResponseDTO, LogoutDTO, ChangeEmailDTO, ChangePassDTO } from "Dto"

export class UserAuthImplement implements UserAuthRepository {
	async login(inputs: LoginDTO): Promise<ResponseDTO<Credential>> {
		const dbRes: any = {}

		return dbRes
	}

	async logout(inputs: LogoutDTO): Promise<ResponseDTO<unknown>> {
		const res = new ResponseDTO(200, null)

		return res
	}

	async changeEmail(inputs: ChangeEmailDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async changePass(inputs: ChangePassDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}
}
