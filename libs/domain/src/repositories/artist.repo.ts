import { GenreType } from "Shared-utils"
import { Artist } from "../entities"

export interface ArtistRepository {
	getAll(): Promise<Artist[]>

	findManyByGenre(genre: GenreType): Promise<Artist[]>

	create(data: any): Promise<boolean>

	get(id: number): Promise<Artist | null>

	modify(data: any): Promise<boolean>
}
