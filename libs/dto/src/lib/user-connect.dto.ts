import { UserConnect } from "Domain"

export type EmailDTO = string

export type UserConnectDTO = Pick<UserConnect, "email" | "password">

// EMAIL
export type CleanEmailDTO = Pick<UserConnect, "password">["password"]

export class ChangeEmailDTO {
	readonly actual: string
	readonly newEmail: string
	readonly confirm: string

	constructor(actual: string, newPass: string, confirm: string) {
		this.actual = actual
		this.newEmail = newPass
		this.confirm = confirm
	}

	isValid(): CleanEmailDTO {
		if (this.actual === this.newEmail) return "New email must be different from email"
		if (this.newEmail !== this.confirm)
			return "New email must be the same than the confirmation"
		else return this.newEmail
	}
}

// PASSWORD
export type CleanPassDTO = Pick<UserConnect, "email">["email"]

export class ChangePassDTO {
	readonly actual: string
	readonly newPass: string
	readonly confirm: string

	constructor(actual: string, newPass: string, confirm: string) {
		this.actual = actual
		this.newPass = newPass
		this.confirm = confirm
	}

	isValid(): CleanPassDTO {
		if (this.actual === this.newPass) return "New password must be different from password"
		if (this.newPass !== this.confirm)
			return "New password must be the same than the confirmation"
		else return this.newPass
	}
}

// CREATE
export type CleanSignupDTO = Pick<UserConnect, "email" | "password">

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

	isValid(): CleanSignupDTO | string {
		if (this.email !== this.confirmEmail) return "emails must be same"
		if (this.password !== this.confirmPass) return " password must be same"
		else
			return {
				email: this.email,
				password: this.password,
			}
	}
}
