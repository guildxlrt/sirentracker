import { UserAuth, UserAuthId } from "Domain"
import { GenresArray } from "Shared-utils"
import validator from "validator"

export interface CleanSignupDTO extends Pick<UserAuth, "email" | "password"> {
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

	validAuths(): CleanSignupDTO {
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

// CREATE ADMIN
export interface CleanNewAdminDTO {
	email: string
	password: string
	name: string
	error?: string
}

export class CreateAdminDTO extends SignupDTO {
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

	completData(data: CleanSignupDTO): CleanNewAdminDTO {
		const { email, password } = data

		if (typeof email === "undefined" || typeof password === "undefined")
			throw Error("internal error")
		else
			return {
				email: this.email,
				password: this.password,
				name: this.name,
			}
	}
}

// CREATE FAN
export interface CleanNewFanDTO {
	name: string
	bio: string
	user_credential?: UserAuthId
	error?: string
}

export class CreateFanDTO extends SignupDTO {
	name: string
	bio: string

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		name: string,
		bio: string
	) {
		super(email, password, confirmPass, confirmEmail)

		this.name = name
		this.bio = bio
	}

	completData(user_credential: UserAuthId | undefined): CleanNewFanDTO {
		if (typeof user_credential === "undefined") throw Error("internal error")
		else
			return {
				name: this.name,
				bio: this.bio,
				user_credential: user_credential,
			}
	}
}

// CREATE ARTIST
export interface CleanNewArtistDTO {
	name: string
	bio: string
	members: string[]
	genres: GenresArray
	user_credential?: UserAuthId
	error?: string
}

export class CreateArtistDTO extends SignupDTO {
	name: string
	bio: string
	members: string[]
	genres: GenresArray

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		name: string,
		bio: string,
		members: string[],
		genres: GenresArray
	) {
		super(email, password, confirmPass, confirmEmail)

		this.name = name
		this.bio = bio
		this.members = members
		this.genres = genres
	}

	completData(user_credential: UserAuthId | undefined): CleanNewArtistDTO {
		if (typeof user_credential === "undefined") throw Error("internal error")
		else
			return {
				name: this.name,
				bio: this.bio,
				members: this.members,
				genres: this.genres,
				user_credential: user_credential,
			}
	}
}
