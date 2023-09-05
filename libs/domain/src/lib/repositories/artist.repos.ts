import { GenreType } from "Shared-utils"
import { Artist, ArtistId, UserConnectEmail } from "../entities"
import { IResponse, BaseReposSearch, BaseReposUser } from "../../assets"

export abstract class ArtistRepository implements BaseReposUser<Artist>, BaseReposSearch<Artist> {
	abstract getAll(): Promise<IResponse<Artist[]>>

	abstract findManyByGenre(genre: GenreType): Promise<IResponse<Artist[]>>

	abstract create(params: unknown): Promise<IResponse<boolean>>

	abstract modify(params: unknown): Promise<IResponse<boolean>>

	abstract getById(id: ArtistId): Promise<IResponse<Artist>>

	abstract getByEmail(email: UserConnectEmail): Promise<IResponse<Artist>>
}
