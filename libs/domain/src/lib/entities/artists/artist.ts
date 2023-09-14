import { GenresArray, GenreType } from "Shared-utils"
import { UserAuthId } from "../commons/user-auth"
import { BaseEntity } from "../../../assets"

export class Artist extends BaseEntity {
	readonly user_credential: UserAuthId
	name: string
	bio: string
	avatarUrl: string | null
	members: string[]
	genres: GenresArray

	constructor(
		id: number,
		createdAt: Date,
		user_credential: number,
		name: string,
		bio: string,
		avatarUrl: string | null,
		members: string[] | null,
		genre1: GenreType,
		genre2?: GenreType,
		genre3?: GenreType
	) {
		super(id, createdAt)

		this.user_credential = user_credential
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl

		if (members !== null && members.length >= 1) this.members = members
		else this.members = []

		this.genres = [genre1, genre2, genre3]
	}
}

export type ArtistId = Pick<Artist, "id">["id"]
