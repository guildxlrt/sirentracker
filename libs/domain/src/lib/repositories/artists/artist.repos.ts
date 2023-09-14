import { GenreType } from "Shared-utils"
import { Artist, ArtistId, UserAuthEmail } from "../../entities"
import { IResponse, BaseReposUser, BaseReposGenred } from "../../../assets"

export abstract class ArtistRepository implements BaseReposUser<Artist>, BaseReposGenred<Artist> {
	abstract create(params: unknown): Promise<IResponse<boolean>>

	abstract modify(params: unknown): Promise<IResponse<boolean>>

	abstract getById(id: ArtistId): Promise<IResponse<Artist>>

	abstract getByEmail(email: UserAuthEmail): Promise<IResponse<Artist>>

	abstract getAll(): Promise<IResponse<Artist[]>>

	abstract findManyByGenre(genre: GenreType): Promise<IResponse<Artist[]>>
}
