import { ArtistId } from "./artist"
import { BaseEntity } from "../../assets"
import { UserConnectId } from "./user-auth"
import { ReleaseId } from "./release"

export class Song extends BaseEntity {
	artist_id: UserConnectId
	release_id: ReleaseId
	title: string
	audioUrl: string
	featuring: ArtistId[]
	lyrics?: string

	constructor(
		id: number,
		createdAt: Date,
		artist_id: UserConnectId,
		release_id: ReleaseId,
		title: string,
		audioUrl: string,
		featuring: ArtistId[],
		lyrics?: string
	) {
		super(id, createdAt)

		this.artist_id = artist_id
		this.release_id = release_id
		this.title = title
		this.audioUrl = audioUrl
		this.lyrics = lyrics

		if (featuring !== null && featuring.length >= 1) {
			this.featuring = featuring
		} else {
			this.featuring = []
		}
	}
}

export type SongId = Pick<Song, "id">["id"]
