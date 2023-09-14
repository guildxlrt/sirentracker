import { Artist, UserAuthId } from "Domain"
import { GenresArray } from "Shared-utils"
import { CreateUserDTO, ModifyUserDTO } from "../commons"

type ArtistData = Omit<Artist, "createdAt">
type Updates = Partial<Omit<Artist, "id" | "createdAt" | "user_credential" | "avatarUrl">>

export type ArtistIdDTO = Pick<Artist, "id">["id"]

// MODIFY ARTIST
export interface CleanArtistDTO {
	name: string
	bio: string
	members: string[]
	genres: GenresArray
	avatarUrl: string | null
	error?: string
}

export class ModifyArtistDTO implements ModifyUserDTO {
	user: ArtistData
	updates: Updates
	avatarUrl: string | null
	avatar?: File | null

	constructor(user: ArtistData, updates: Updates, avatar?: File | null) {
		this.user = user
		this.updates = updates
		this.avatar = avatar
		this.avatarUrl = user.avatarUrl
	}

	verifyImgFormat(): void {
		//
		//

		return
	}

	treatingUsrData(): CleanArtistDTO {
		const data = this.user

		const { name, bio, members, genres } = this.updates
		if (name) data.name = name
		if (bio) data.bio = bio
		if (members) data.members = members
		if (genres) data.genres = genres
		if (this.avatar !== undefined) data.avatarUrl = this.avatarUrl

		return data
	}
}

// CREATE ARTIST
export interface CleanNewArtistDTO {
	user_credential?: UserAuthId
	name: string
	bio: string
	members: string[]
	genres: GenresArray
	avatarUrl: string | null
	error?: string
}

export class CreateArtistDTO extends CreateUserDTO {
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
		genres: GenresArray,
		avatar?: File
	) {
		super(email, password, confirmPass, confirmEmail, avatar)

		this.name = name
		this.bio = bio
		this.members = members
		this.genres = genres
	}
}
