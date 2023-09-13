import { Artist } from "Domain"

type ArtistData = Omit<Artist, "avatarUrl">
type Updates = Partial<Omit<Artist, "id" | "avatarUrl">>

export interface ModifyArtistDTO {
	data: ArtistData
	updates: Updates
	avatar?: File
}

export type ArtistIdDTO = Pick<Artist, "id">["id"]
