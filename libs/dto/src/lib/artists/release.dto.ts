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

export class CreateReleaseDTO extends BasicDTO<NewRelease, boolean> {
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

export class ModifyReleasePriceDTO extends BasicDTO<NewPrice, boolean> {}

// GET ARTIST
export class GetReleaseDTO extends BasicDTO<ReleaseId, Release> {}

// GET ALL
export class GetAllReleasesDTO extends BasicDTO<void, Release[]> {}

// FIND MANY BY GENRE
export class FindReleasesByGenreDTO extends BasicDTO<GenreType, Release[]> {}

// FIND MANY BY ARTIST
export class FindReleasesByArtistDTO extends BasicDTO<ArtistId, Release[]> {}

// GET USER RELEASES
export class GetUserReleasesDTO extends BasicDTO<void, Release[]> {}
