import { UserConnect } from "Domain"
import validator from "validator"

export type EmailDTO = string

export type LoginDTO = Pick<UserConnect, "email" | "password">

// EMAIL
export interface CleanEmailDTO extends Pick<UserConnect, "email"> {
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
export interface CleanPassDTO extends Pick<UserConnect, "password"> {
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

// CREATE
// export type CleanSignupDTO =
export interface CleanSignupDTO extends Pick<UserConnect, "email" | "password"> {
	readonly email: string
	readonly password: string
	readonly error?: string
}

export class SignupDTO {
	readonly email: string
	readonly password: string
	readonly confirmEmail: string
	readonly confirmPass: string

	constructor(email: string, password: string, confirmEmail: string, confirmPass: string) {
		this.email = email
		this.password = password
		this.confirmEmail = confirmEmail
		this.confirmPass = confirmPass
	}

	validate(): CleanSignupDTO {
		const validEmail = validator.isEmail(this.email)
		const validPass = validator.isStrongPassword(this.password)

		if (validEmail) return { email: "", password: "", error: " | invalid email format" }
		if (this.email !== this.confirmEmail)
			return { email: "", password: "", error: " | emails don't match" }
		if (validPass) return { email: "", password: "", error: " | weak Password" }
		if (this.password !== this.confirmPass)
			return { email: "", password: "", error: " | passwords don't match" }
		else
			return {
				email: this.email,
				password: this.password,
			}
	}
}
