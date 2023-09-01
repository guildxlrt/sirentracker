import { UserConnectRepository } from "Domain"
import { UserConnectDTO, CleanPassDTO, CleanEmailDTO, CleanSignupDTO, ResponseDTO } from "Dto"

export class UserConnectImplement implements UserConnectRepository {
	async signUp(params: CleanSignupDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async login(params: UserConnectDTO): Promise<ResponseDTO<Credential>> {
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
