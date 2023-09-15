import { Artist, ArtistId } from "Domain"
import { ErrorMsg, GenreType, GenresArray } from "Shared-utils"
import validator from "validator"
import { BasicDTO, NewUserMethods, UserMethods } from "../../assets"
import { UserEmail } from "../commons"

// CREATE ARTIST
interface NewArtist {
	email: string
	password: string
	confirmEmail: string
	confirmPass: string
	name: string
	bio: string
	members: string[]
	genres: GenresArray
	avatar?: File
}

export class CreateArtistDTO implements BasicDTO<NewArtist, boolean>, NewUserMethods {
	data: NewArtist
	storage?: boolean
	error?: string

	constructor(data: NewArtist) {
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

	verifyImgFormat(): void {
		const { avatar } = this.data

		console.log(avatar)

		return
	}
}

// MODIFY ARTIST
interface ArtistData {
	name: string
	bio: string
	members: string[]
	genres: GenresArray
	avatar?: File | null
}
interface IArtistData {
	user: ArtistData
	storage: boolean
}

export class ModifyArtistDTO implements BasicDTO<IArtistData, boolean>, UserMethods {
	data: IArtistData
	storage?: boolean
	error?: string

	constructor(data: IArtistData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	verifyImgFormat(): void {
		const { avatar } = this.data.user

		console.log(avatar)

		return
	}
}

// GET ALL
export class GetAllArtistsDTO implements BasicDTO<void, Artist[]> {
	data: void
	storage?: Artist[]
	error?: string

	constructor(data: void) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// ARTISTS BY GENRE
export class FindArtistsByGenreDTO implements BasicDTO<GenreType, Artist[]> {
	data: GenreType
	storage?: Artist[]
	error?: string

	constructor(data: GenreType) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// ARTIST BY ID
export class GetArtistByIdDTO implements BasicDTO<ArtistId, Artist> {
	data: ArtistId
	storage?: Artist
	error?: string

	constructor(data: ArtistId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// ARTIST BY EMAIL
export class GetArtistByEmailDTO implements BasicDTO<UserEmail, Artist> {
	data: UserEmail
	storage?: Artist
	error?: string

	constructor(data: UserEmail) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}
