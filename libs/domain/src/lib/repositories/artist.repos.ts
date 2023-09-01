import { GenreType } from "Shared-utils"
import { Artist, ArtistId, UserConnectEmail } from "../entities"
import { BaseReposResponse, BaseReposSearch, BaseReposUser } from "../../assets"

export abstract class ArtistRepository implements BaseReposUser<Artist>, BaseReposSearch<Artist> {
	abstract fetchAll(): Promise<BaseReposResponse<Artist[]>>

	abstract findManyByGenre(genre: GenreType): Promise<BaseReposResponse<Artist[]>>

	abstract create(params: unknown): Promise<BaseReposResponse<boolean>>

	abstract modify(params: unknown): Promise<BaseReposResponse<boolean>>

	abstract getById(id: ArtistId): Promise<BaseReposResponse<Artist>>

	abstract getByEmail(email: UserConnectEmail): Promise<BaseReposResponse<Artist>>
}
