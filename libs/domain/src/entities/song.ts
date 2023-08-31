import { ArtistId } from "./artist"
import { BaseEntity } from "../base-entity"

export class Song extends BaseEntity {
	title: string
	lyrics: string
	featuring: ArtistId[] | null
	audioUrl: string
	duration: string

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		title: string,
		lyrics: string,
		featuring: ArtistId[] | null,
		audioUrl: string,
		duration: string
	) {
		super(id, createdAt, updatedAt)

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
