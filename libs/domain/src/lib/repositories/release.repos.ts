import { ArtistId, Release, ReleaseId, ReleasePrice } from "../entities"
import { IResponse, BaseReposSearch } from "../../assets"
import { GenreType } from "Shared-utils"

export abstract class ReleaseRepository implements BaseReposSearch<Release> {
	abstract fetchAll(): Promise<IResponse<Release[]>>

	abstract findManyByGenre(genre: GenreType): Promise<IResponse<Release[]>>

	abstract findManyByArtist(id: ArtistId): Promise<IResponse<Release[]>>

	abstract create(params: any): Promise<IResponse<boolean>>

	abstract get(id: ReleaseId): Promise<IResponse<Release>>

	abstract modifyPrice(params: any): Promise<IResponse<boolean>>
}
