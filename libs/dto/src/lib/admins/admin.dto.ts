import { ErrorMsg } from "Shared-utils"
import { BasicDTO } from "../../assets"
import validator from "validator"

// CREATE ADMIN
interface INewAdminData {
	name: string
	email: string
	password: string
	confirmEmail: string
	confirmPass: string
}

export class CreateAdminDTO implements BasicDTO<INewAdminData, boolean> {
	data: INewAdminData
	storage?: boolean
	error?: string

	constructor(data: INewAdminData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	validAuths(): void {
		const { email, password, confirmEmail, confirmPass } = this.data

		const validEmail = validator.isEmail(email)
		const validPass = validator.isStrongPassword(password)

		if (!validEmail) throw new ErrorMsg(400, "invalid email format")

		if (email !== confirmEmail) throw new ErrorMsg(400, "emails don't match")

		if (validPass) throw new ErrorMsg(400, "weak Password")
		if (password !== confirmPass) throw new ErrorMsg(400, "passwords don't match")
		else return
	}
}
