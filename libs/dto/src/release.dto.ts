import { Release, Song } from "Domain"

type NewRelease = Omit<Release, "id" | "coverUrl" | "audioUrl" | "totalTime" | "songs">
type NewSong = Omit<Song, "id" | "audioUrl" | "duration">

export interface CreateReleaseDTO {
	data: NewRelease
	songs: {
		song: NewSong
		file: File
	}
	cover?: File
}

export type ReleaseIdDTO = Pick<Release, "id">["id"]
export type ReleasePriceDTO = Pick<Release, "price">["price"]
