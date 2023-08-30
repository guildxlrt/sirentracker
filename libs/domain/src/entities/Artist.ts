import { EntityGenres, GenreType } from "Shared-utils"

export class Artist {
	id: number
	email: string
	name: string
	bio: string
	avatarUrl: string
	genres: EntityGenres
	members: string[] | null

	constructor(
		id: number,
		email: string,
		name: string,
		bio: string,
		avatarUrl: string,
		members: string[] | null,
		genre1: GenreType,
		genre2?: GenreType,
		genre3?: GenreType
	) {
		this.id = id
		this.email = email
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
		this.genres = [genre1, genre2, genre3]

		if (members !== null && members.length >= 1) {
			this.members = members
		} else {
			this.members = null
		}
	}
}

export type ArtistId = Pick<Artist, "id">["id"]
