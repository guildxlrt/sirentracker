import { ArtistId } from "./artist"
import { BaseEntity } from "../base-entity"
import { UserConnectId } from "./user-connect"
import { ReleaseId } from "./release"

export class Song extends BaseEntity {
	user_id: UserConnectId
	release_id: ReleaseId
	title: string
	lyrics: string
	audioUrl: string
	duration: string
	featuring: ArtistId[] | null

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_id: UserConnectId,
		release_id: ReleaseId,
		title: string,
		lyrics: string,
		audioUrl: string,
		duration: string,
		featuring: ArtistId[] | null
	) {
		super(id, createdAt, updatedAt)

		this.release_id = release_id
		this.user_id = user_id
		this.title = title
		this.lyrics = lyrics
		this.audioUrl = audioUrl
		this.duration = duration

		if (featuring !== null && featuring.length >= 1) {
			this.featuring = featuring
		} else {
			this.featuring = null
		}
	}
}

export type SongId = Pick<Song, "id">["id"]
