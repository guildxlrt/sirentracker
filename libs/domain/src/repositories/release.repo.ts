import { GenreType } from "Shared-utils"
import { Release } from "../entities"

export interface ReleaseRepository {
	getAll(): Promise<Release[]>

	findManyByGenre(genre: GenreType): Promise<Release[]>

	create(params: any): Promise<boolean>

	get(id: number): Promise<Release | null>
}
