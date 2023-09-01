import { ArtistId } from "./artist"
import { BaseEntity } from "../../assets"
import { UserConnectId } from "./user-connect"
import { ReleaseId } from "./release"

export class Song extends BaseEntity {
	user_id: UserConnectId
	release_id: ReleaseId
	title: string
	audioUrl: string
	featuring: ArtistId[] | null
	lyrics?: string

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_id: UserConnectId,
		release_id: ReleaseId,
		title: string,
		audioUrl: string,
		featuring: ArtistId[] | null,
		lyrics?: string
	) {
		super(id, createdAt, updatedAt)

		this.user_id = user_id
		this.release_id = release_id
		this.title = title
		this.audioUrl = audioUrl
		this.lyrics = lyrics

		if (featuring !== null && featuring.length >= 1) {
			this.featuring = featuring
		} else {
			this.featuring = null
		}
	}
}

export type SongId = Pick<Song, "id">["id"]
