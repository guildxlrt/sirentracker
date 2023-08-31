import { GenreType } from "Shared-utils"
import { ArtistId, Release, ReleaseId, ReleasePrice } from "../entities"
import { BaseRepositorySearch } from "../base-repos"

export abstract class ReleaseRepository implements BaseRepositorySearch<Release> {
	abstract getAll(): Promise<Release[]>

	abstract findManyByGenre(genre: GenreType): Promise<Release[]>

	abstract findManyByArtist(id: ArtistId): Promise<Release[]>

	abstract create(params: any): Promise<boolean>

	abstract get(id: ReleaseId): Promise<Release>

	abstract modifyPrice(price: ReleasePrice): Promise<boolean>
}
