import { UserAuth } from "Domain"
import { ErrorMsg } from "Shared-utils"
import validator from "validator"

export type UserEmail = string

// LOGIN
interface ILogin {
	readonly email: string
	readonly password: string
}

export class LoginDTO {
	data: ILogin
	storage?: Credential
	error?: string

	constructor(data: ILogin) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// LOGOUT
export class LogoutDTO {
	data: void
	storage?: void
	error?: string

	constructor(data: void) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// EMAIL
interface IChangeEmailData {
	readonly actual: string
	readonly newEmail: string
	readonly confirm: string
}
export class ChangeEmailDTO {
	data: IChangeEmailData
	storage?: boolean
	error?: string

	constructor(data: IChangeEmailData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	validate(): void {
		const { actual, confirm, newEmail } = this.data
		const validEmail = validator.isEmail(newEmail)

		if (!validEmail) throw new ErrorMsg(400, "invalid email format")
		if (newEmail !== confirm)
			throw new ErrorMsg(400, "new and confirmation emails must be the same")
		if (newEmail === actual) throw new ErrorMsg(400, "new and old emails must be different")
		else return
	}
}

// PASSWORD
interface IChangePassData {
	readonly actual: string
	readonly newPass: string
	readonly confirm: string
}
export class ChangePassDTO {
	data: IChangePassData
	storage?: boolean
	error?: string

	constructor(data: IChangePassData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	validate(): void {
		const { actual, confirm, newPass } = this.data

		// NEED A STRENGTH VALIDATION
		//const validPass = (newPass)

		// if (!validPass) throw new ErrorMsg(400, "invalid email format")
		if (newPass !== confirm)
			throw new ErrorMsg(400, "new and confirmation emails must be the same")
		if (newPass === actual) throw new ErrorMsg(400, "new and old emails must be different")
		else return
	}
}
