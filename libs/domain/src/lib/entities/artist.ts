import { EntityGenres, GenreType } from "Shared-utils"
import { UserConnectId } from "./user-connect"
import { BaseEntity } from "../../assets"

export class Artist extends BaseEntity {
	user_credential: UserConnectId
	name: string
	bio: string
	avatarUrl: string
	members: string[] | null
	genres: EntityGenres

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_credential: number,
		name: string,
		bio: string,
		avatarUrl: string,
		members: string[] | null,
		genre1: GenreType,
		genre2?: GenreType,
		genre3?: GenreType
	) {
		super(id, createdAt, updatedAt)

		this.user_credential = user_credential
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl

		if (members !== null && members.length >= 1) this.members = members
		else this.members = null

		this.genres = [genre1, genre2, genre3]
	}
}

export type ArtistId = Pick<Artist, "id">["id"]
