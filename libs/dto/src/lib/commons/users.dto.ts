import { UserAuthId } from "Domain"
import { ErrorMsg } from "Shared-utils"
import validator from "validator"

export abstract class VerifyUserImgDTO {
	abstract avatar?: File | null

	verifyImgFormat(): void {}
}

interface UserAuths {
	email: string
	password: string
}

export abstract class CleanUserDTO {
	error?: string

	constructor(error?: string) {
		this.error = error
	}
}

export interface CreateUserMethodsDTO<T> {
	treatingData(id: number | undefined): T
}

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

	getAuths(): UserAuths {
		return { email: this.email, password: this.password }
	}
}

// CREATE USER
export abstract class CreateUserDTO extends UserAuthDTO implements VerifyUserImgDTO {
	user_auth_id: UserAuthId | null
	avatarUrl: string | null
	avatar?: File

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		avatar?: File
	) {
		super(email, password, confirmPass, confirmEmail)

		this.user_auth_id = null

		this.avatar = avatar
		this.avatarUrl = null
	}

	verifyImgFormat(): void {
		console.log(this.avatar)

		return
	}
}

// MODIFY USER
export interface ModifyUserMethodsDTO<T> {
	treatingUpdates(): T
}

export abstract class ModifyUserDTO<User, UserUpdate> implements VerifyUserImgDTO {
	user: User
	readonly updates: UserUpdate
	readonly avatar?: File | null

	constructor(user: User, updates: UserUpdate, avatar?: File | null) {
		this.user = user
		this.updates = updates
		this.avatar = avatar
	}

	verifyImgFormat(): void {
		console.log(this.avatar)

		return
	}
}
