import { GenreType } from "Shared-utils"
import { Artist } from "../entities"

export interface ArtistRepository {
	getAll(): Promise<Artist[]>

	findManyByGenre(genre: GenreType): Promise<Artist[]>

	create(data: any): Promise<boolean>

	modify(data: any): Promise<boolean>

	getById(id: number): Promise<Artist>

	getByEmail(id: string): Promise<Artist>
}
