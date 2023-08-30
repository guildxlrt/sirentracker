import { ArtistId } from "./Artist"
import { Song } from "./Song"
import { EntityGenres, GenreType, ReleaseType } from "Shared-utils"

export class Release {
	id: number
	title: string
	releaseType: ReleaseType
	songs: Song[]
	totalTime: string
	price: null | number
	featuring: ArtistId[] | null
	genres: EntityGenres
	coverUrl?: string
	descript?: string

	constructor(
		id: number,
		title: string,
		releaseType: ReleaseType,
		songs: Song[],
		totalTime: string,
		price: null | number,
		featuring: ArtistId[] | null,
		genre1: GenreType,
		genre2?: GenreType,
		genre3?: GenreType,
		coverUrl?: string,
		descript?: string
	) {
		this.id = id
		this.title = title
		this.releaseType = releaseType
		this.songs = songs
		this.totalTime = totalTime
		this.price = price

		if (featuring !== null && featuring.length >= 1) {
			this.featuring = featuring
		} else {
			this.featuring = null
		}

		this.genres = [genre1, genre2, genre3]
		this.coverUrl = coverUrl
		this.descript = descript
	}
}
