import { ArtistId, Release, ReleaseId, ReleasePrice } from "../entities"
import { BaseReposResponse, BaseReposSearch } from "../../assets"
import { GenreType } from "Shared-utils"

export abstract class ReleaseRepository implements BaseReposSearch<Release> {
	abstract fetchAll(): Promise<BaseReposResponse<Release[]>>

	abstract findManyByGenre(genre: GenreType): Promise<BaseReposResponse<Release[]>>

	abstract findManyByArtist(id: ArtistId): Promise<BaseReposResponse<Release[]>>

	abstract create(params: any): Promise<BaseReposResponse<boolean>>

	abstract get(id: ReleaseId): Promise<BaseReposResponse<Release>>

	abstract modifyPrice(price: ReleasePrice): Promise<BaseReposResponse<boolean>>
}
