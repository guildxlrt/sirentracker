import { ArtistId } from "./Artist"

export class Song {
	id: number
	title: string
	lyrics: string
	featuring: ArtistId[] | null
	audioUrl: string
	duration: string

	constructor(
		id: number,
		title: string,
		lyrics: string,
		featuring: ArtistId[] | null,
		audioUrl: string,
		duration: string
	) {
		this.id = id
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
