import { BaseEntity } from "../../assets"
import { Song } from "./song"
import { EntityGenres, ReleaseType } from "Shared-utils"
import { UserConnectId } from "./user-connect"

export class Release extends BaseEntity {
	user_id: UserConnectId
	title: string
	releaseType: ReleaseType
	descript: string | null
	price: null | number
	genres: EntityGenres
	songs: Song[]
	coverUrl?: string

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_id: UserConnectId,
		title: string,
		releaseType: ReleaseType,
		descript: string | null,
		price: null | number,
		genres: EntityGenres,
		songs: Song[],
		coverUrl?: string
	) {
		super(id, createdAt, updatedAt)

		this.user_id = user_id
		this.title = title
		this.releaseType = releaseType
		this.descript = descript
		this.price = price
		this.genres = genres
		this.songs = songs
		this.coverUrl = coverUrl
	}
}

export type ReleaseId = Pick<Release, "id">["id"]
export type ReleasePrice = Pick<Release, "price">["price"]
