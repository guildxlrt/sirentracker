import { ArtistId, Release, ReleaseId } from "../../entities"
import { IResponse, BaseReposArtistItem, BaseReposGenred, InputsLayer } from "../../../assets"
import { GenreType } from "Shared-utils"

export abstract class ReleaseRepository
	implements BaseReposArtistItem<Release>, BaseReposGenred<Release>
{
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract modifyPrice(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract get(inputs: InputsLayer<ReleaseId, Release>): Promise<IResponse<Release>>

	abstract getAll(inputs: InputsLayer<unknown, Release[]>): Promise<IResponse<Release[]>>

	abstract findManyByArtist(
		inputs: InputsLayer<ArtistId, Release[]>
	): Promise<IResponse<Release[]>>

	abstract findManyByGenre(
		inputs: InputsLayer<GenreType, Release[]>
	): Promise<IResponse<Release[]>>

	abstract getUserReleases(inputs: InputsLayer<unknown, Release[]>): Promise<IResponse<Release[]>>
}
