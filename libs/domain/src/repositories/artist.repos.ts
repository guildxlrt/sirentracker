import { GenreType } from "Shared-utils"
import { Artist, ArtistId, UserConnectEmail } from "../entities"
import { BaseRepositorySearch, BaseRepositoryUser } from "../base-repos"

export abstract class ArtistRepository
	implements BaseRepositoryUser<Artist>, BaseRepositorySearch<Artist>
{
	abstract getAll(): Promise<Artist[]>

	abstract findManyByGenre(genre: GenreType): Promise<Artist[]>

	abstract create(params: any): Promise<boolean>

	abstract modify(params: any): Promise<boolean>

	abstract getById(id: ArtistId): Promise<Artist>

	abstract getByEmail(email: UserConnectEmail): Promise<Artist>
}
