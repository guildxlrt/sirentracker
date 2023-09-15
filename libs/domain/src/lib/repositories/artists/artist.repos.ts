import { GenreType } from "Shared-utils"
import { Artist, ArtistId, UserAuthEmail } from "../../entities"
import { IResponse, BaseReposUser, BaseReposGenred, InputsLayer } from "../../../assets"

export abstract class ArtistRepository implements BaseReposUser<Artist>, BaseReposGenred<Artist> {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract modify(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract getById(inputs: InputsLayer<ArtistId, Artist>): Promise<IResponse<Artist>>

	abstract getByEmail(inputs: InputsLayer<UserAuthEmail, Artist>): Promise<IResponse<Artist>>

	abstract getAll(inputs: InputsLayer<unknown, Artist[]>): Promise<IResponse<Artist[]>>

	abstract findManyByGenre(inputs: InputsLayer<GenreType, Artist[]>): Promise<IResponse<Artist[]>>
}
