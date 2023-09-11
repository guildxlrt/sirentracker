import { Release } from "Domain"
import { NewSongDTO } from "./song.dto"
import { GenresArray, ReleaseType } from "Shared-utils"

type INewRelease = Omit<
	Release,
	"id" | "createdAt" | "updatedAt" | "coverUrl" | "totalTime" | "songs"
>

export class CreateReleaseDTO implements INewRelease {
	user_id: number
	title: string
	releaseType: ReleaseType
	descript: string | null
	price: number | null
	genres: GenresArray
	private readonly songs: NewSongDTO[]
	private readonly cover?: File

	constructor(
		user_id: number,
		title: string,
		releaseType: ReleaseType,
		descript: string | null,
		price: number | null,
		genres: GenresArray,
		songs: NewSongDTO[],
		cover?: File
	) {
		this.user_id = user_id
		this.title = title
		this.releaseType = releaseType
		this.price = price
		this.songs = songs
		this.descript = descript
		this.genres = genres
		this.cover = cover
	}

	coverIsValid() {
		if (this.cover) return true
		else return false
	}

	songsAreValid(): boolean {
		const checking: boolean[] = this.songs.map((song) => {
			return song.isValid()
		})

		const checkingResult: boolean | undefined = checking.find((element) => element === false)

		if (checkingResult) return true
		else return false
	}
}

export type ReleaseIdDTO = Pick<Release, "id">["id"]
export type ReleasePriceDTO = Pick<Release, "price">["price"]

export type ModifyReleasePriceDTO = {
	id: Pick<Release, "id">["id"]
	newAmount: number
}
