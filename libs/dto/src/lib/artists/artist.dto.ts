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

export class CreateArtistDTO extends BasicDTO<NewArtist, boolean> implements NewUserMethods {
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

export class ModifyArtistDTO extends BasicDTO<IArtistData, boolean> implements UserMethods {
	verifyImgFormat(): void {
		const { avatar } = this.data.user

		console.log(avatar)

		return
	}
}

// GET ALL
export class GetAllArtistsDTO extends BasicDTO<void, Artist[]> {}

// ARTISTS BY GENRE
export class FindArtistsByGenreDTO extends BasicDTO<GenreType, Artist[]> {}

// ARTIST BY ID
export class GetArtistByIdDTO extends BasicDTO<ArtistId, Artist> {}

// ARTIST BY EMAIL
export class GetArtistByEmailDTO extends BasicDTO<UserEmail, Artist> {}
