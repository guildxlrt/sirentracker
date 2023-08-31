import { UserConnectRepository } from "Domain"
import { UserConnectDTO, EmailCleanDTO, PassCleanDTO, SignupCleanDTO } from "Dto"

export class UserConnectImplement implements UserConnectRepository {
	async signup(params: SignupCleanDTO): Promise<boolean> {
		return true
	}

	async login(params: UserConnectDTO): Promise<Credential> {
		const dbRes: any = {}

		return dbRes
	}

	async logout(): Promise<void> {
		return
	}

	async emailUpdate(params: EmailCleanDTO): Promise<boolean> {
		//
		return true
	}

	async passUpdate(params: PassCleanDTO): Promise<boolean> {
		//
		return true
	}
}
