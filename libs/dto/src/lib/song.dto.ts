import { ArtistId, ReleaseId, Song, UserConnectId } from "Domain"

export type SongIdDTO = Pick<Song, "id">["id"]

type INewSong = Omit<Song, "id" | "createdAt" | "updatedAt" | "audioUrl" | "duration">

export class NewSongDTO implements INewSong {
	user_id: UserConnectId
	release_id: ReleaseId
	title: string
	private readonly audio: File
	featuring: ArtistId[] | null
	lyrics?: string

	constructor(
		user_id: UserConnectId,
		release_id: ReleaseId,
		title: string,
		audio: File,
		featuring: ArtistId[] | null,
		lyrics?: string
	) {
		this.release_id = release_id
		this.user_id = user_id
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
