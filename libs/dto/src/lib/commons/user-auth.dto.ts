import { UserAuth } from "Domain"
import validator from "validator"

export type EmailDTO = string

export type LoginDTO = Pick<UserAuth, "email" | "password">

// EMAIL
export interface CleanEmailDTO extends Pick<UserAuth, "email"> {
	readonly email: string
	readonly error?: string
}

export class ChangeEmailDTO {
	readonly actual: string
	readonly newEmail: string
	readonly confirm: string

	constructor(actual: string, newPass: string, confirm: string) {
		this.actual = actual
		this.newEmail = newPass
		this.confirm = confirm
	}

	validate(): CleanEmailDTO {
		const validEmail = validator.isEmail(this.newEmail)

		if (validEmail) return { email: "", error: " | invalid email format" }
		if (this.newEmail !== this.confirm) return { email: "", error: " | emails don't match" }
		else return { email: this.newEmail }
	}
}

// PASSWORD
export interface CleanPassDTO extends Pick<UserAuth, "password"> {
	readonly password: string
	readonly error?: string
}

export class ChangePassDTO {
	readonly actual: string
	readonly newPass: string
	readonly confirm: string

	constructor(actual: string, newPass: string, confirm: string) {
		this.actual = actual
		this.newPass = newPass
		this.confirm = confirm
	}

	validate(): CleanPassDTO {
		const validPass = validator.isEmail(this.newPass)

		if (validPass) return { password: "", error: " | weak Password" }
		if (this.newPass !== this.confirm)
			return { password: "", error: " | passwords don't match" }
		else return { password: this.newPass }
	}
}
