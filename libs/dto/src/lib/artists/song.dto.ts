import { ArtistId, ReleaseId, Song, UserAuthId } from "Domain"
import { BasicDTO } from "../../assets"

export type SongIdDTO = Pick<Song, "id">["id"]

type INewSong = Omit<Song, "id" | "createdAt" | "updatedAt" | "audioUrl" | "duration">

export class NewSong implements INewSong {
	artist_id: UserAuthId
	release_id: ReleaseId
	title: string
	private readonly audio: File
	featuring: ArtistId[] | null
	lyrics?: string

	constructor(
		artist_id: UserAuthId,
		release_id: ReleaseId,
		title: string,
		audio: File,
		featuring: ArtistId[] | null,
		lyrics?: string
	) {
		this.release_id = release_id
		this.artist_id = artist_id
		this.title = title
		this.audio = audio
		this.lyrics = lyrics

		if (featuring !== null && featuring.length >= 1) {
			this.featuring = featuring
		} else {
			this.featuring = null
		}
	}

	isValid(): boolean {
		// Verify if audio is conform
		// ...
		if (this.audio) return true
		else return false
	}
}

// GET SONG
export class GetSongDTO extends BasicDTO<ReleaseId, Song> {}

// FIND MANY BY ARTIST
export class FindSongsByArtistDTO extends BasicDTO<ArtistId, Song[]> {}

// FIND MANY BY RELEASE
export class FindSongsByReleaseDTO extends BasicDTO<ArtistId, Song[]> {}
