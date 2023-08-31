import { ArtistId } from "./artist"
import { BaseEntity } from "../base-entity"
import { Song } from "./song"
import { EntityGenres, GenreType, ReleaseType } from "Shared-utils"
import { UserConnectId } from "./user-connect"

export class Release extends BaseEntity {
	user_id: UserConnectId
	title: string
	releaseType: ReleaseType
	songs: Song[]
	totalTime: string
	price: null | number
	genres: EntityGenres
	coverUrl?: string
	descript?: string

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_id: UserConnectId,
		title: string,
		releaseType: ReleaseType,
		songs: Song[],
		totalTime: string,
		price: null | number,
		genre1: GenreType,
		genre2?: GenreType,
		genre3?: GenreType,
		coverUrl?: string,
		descript?: string
	) {
		super(id, createdAt, updatedAt)

		this.user_id = user_id
		this.title = title
		this.releaseType = releaseType
		this.songs = songs
		this.totalTime = totalTime
		this.price = price
		this.genres = [genre1, genre2, genre3]
		this.coverUrl = coverUrl
		this.descript = descript
	}
}

export type ReleaseId = Pick<Release, "id">["id"]
export type ReleasePrice = Pick<Release, "price">["price"]
