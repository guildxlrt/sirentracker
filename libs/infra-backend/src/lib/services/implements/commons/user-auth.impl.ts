import { UserAuthRepository } from "Domain"
import { LoginDTO, CleanPassDTO, CleanEmailDTO, ResponseDTO } from "Dto"

export class UserAuthImplement implements UserAuthRepository {
	async login(params: LoginDTO): Promise<ResponseDTO<Credential>> {
		const dbRes: any = {}

		return dbRes
	}

	async logout(): Promise<ResponseDTO<unknown>> {
		const res = new ResponseDTO(200, null)

		return res
	}

	async changeEmail(params: CleanEmailDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async changePass(params: CleanPassDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}
}
