import { Artist } from "Domain"

type NewData = Omit<Artist, "id" | "avatarUrl">
type ArtistData = Omit<Artist, "avatarUrl">
type Updates = Partial<Omit<Artist, "id" | "avatarUrl">>

export interface CreateArtistDTO {
	data: NewData
	avatar?: File
}

export interface ModifyArtistDTO {
	data: ArtistData
	updates: Updates
	avatar?: File
}

export type ArtistIdDTO = Pick<Artist, "id">["id"]
