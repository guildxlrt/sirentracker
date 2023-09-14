import { UserAuthId } from "Domain"
import { ErrorMsg } from "Shared-utils"
import validator from "validator"

export abstract class ModifyUserDTO {
	abstract user: any
	abstract readonly updates: any
	abstract avatarUrl: string | null
	abstract readonly avatar?: File | null

	verifyImgFormat(): void {}

	treatingUsrData(): unknown {
		return
	}
}

// CREATE USER

export abstract class UserAuthDTO {
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

	validAuths(): void {
		const validEmail = validator.isEmail(this.email)
		const validPass = validator.isStrongPassword(this.password)

		if (!validEmail) throw new ErrorMsg(400, "invalid email format")

		if (this.email !== this.confirmEmail) throw new ErrorMsg(400, "emails don't match")

		if (validPass) throw new ErrorMsg(400, "weak Password")
		if (this.password !== this.confirmPass) throw new ErrorMsg(400, "passwords don't match")
		else return
	}
}

export abstract class CreateUserDTO extends UserAuthDTO {
	user_credential: UserAuthId | null
	avatarUrl: string | null
	readonly avatar?: File

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		avatar?: File
	) {
		super(email, password, confirmPass, confirmEmail)

		this.user_credential = null

		this.avatar = avatar
		this.avatarUrl = null
	}

	verifyImgFormat(): void {
		//
		//

		return
	}

	addingCredId(user_credential: UserAuthId | undefined): void {
		if (typeof user_credential === "undefined") throw Error("internal error")
		else {
			this.user_credential = user_credential
			return
		}
	}
}
