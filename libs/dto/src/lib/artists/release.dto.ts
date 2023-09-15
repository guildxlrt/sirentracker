import { ArtistId, Release, ReleaseId } from "Domain"
import { NewSong } from "./song.dto"
import { GenreType, GenresArray, ReleaseType } from "Shared-utils"
import { BasicDTO } from "../../assets"

// CREATE RELEASE
interface NewRelease {
	artist_id: number
	title: string
	releaseType: ReleaseType
	descript: string | null
	price: number | null
	genres: GenresArray
	songs: NewSong[]
	cover?: File
}

export class CreateReleaseDTO implements BasicDTO<NewRelease, boolean> {
	readonly data: NewRelease
	storage?: boolean
	error?: string

	constructor(data: NewRelease) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	coverIsValid() {
		const { cover } = this.data

		if (cover) return true
		else return false
	}

	songsAreValid(): boolean {
		const { songs } = this.data

		const checking: boolean[] = songs.map((song) => {
			return song.isValid()
		})

		const checkingResult: boolean | undefined = checking.find((element) => element === false)

		if (checkingResult) return true
		else return false
	}
}

// MODIFY PRICE
interface NewPrice {
	id: Pick<Release, "id">["id"]
	newAmount: number
}

export class ModifyReleasePriceDTO implements BasicDTO<NewPrice, boolean> {
	readonly data: NewPrice
	storage?: boolean
	error?: string

	constructor(data: NewPrice) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET ARTIST
export class GetReleaseDTO implements BasicDTO<ReleaseId, Release> {
	readonly data: ReleaseId
	storage?: Release
	error?: string

	constructor(data: ReleaseId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET ALL
export class GetAllReleasesDTO implements BasicDTO<void, Release[]> {
	readonly data: void
	storage?: Release[]
	error?: string

	constructor(data: void) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND MANY BY GENRE
export class FindReleasesByGenreDTO implements BasicDTO<GenreType, Release[]> {
	readonly data: GenreType
	storage?: Release[]
	error?: string

	constructor(data: GenreType) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND MANY BY ARTIST
export class FindReleasesByArtistDTO implements BasicDTO<ArtistId, Release[]> {
	readonly data: ArtistId
	storage?: Release[]
	error?: string

	constructor(data: ArtistId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET USER RELEASES
export class GetUserReleasesDTO implements BasicDTO<void, Release[]> {
	readonly data: void
	storage?: Release[]
	error?: string

	constructor(data: void) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}
