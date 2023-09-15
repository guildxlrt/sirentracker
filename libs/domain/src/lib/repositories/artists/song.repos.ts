import { BaseReposArtistItem, IResponse, InputsLayer } from "../../../assets"
import { ArtistId, ReleaseId, Song, SongId } from "../../entities"

export abstract class SongRepository implements Omit<BaseReposArtistItem<Song>, "getAll"> {
	abstract get(inputs: InputsLayer<SongId, Song>): Promise<IResponse<Song>>

	abstract findManyByArtist(inputs: InputsLayer<ArtistId, Song[]>): Promise<IResponse<Song[]>>

	abstract findManyByRelease(inputs: InputsLayer<ReleaseId, Song[]>): Promise<IResponse<Song[]>>
}
