import { UserAuthDTO } from "../commons"

// CREATE ADMIN
export interface CleanNewAdminDTO {
	email: string
	password: string
	name: string
	error?: string
}

export class CreateAdminDTO extends UserAuthDTO {
	name: string

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		name: string
	) {
		super(email, password, confirmPass, confirmEmail)

		this.name = name
	}
}
