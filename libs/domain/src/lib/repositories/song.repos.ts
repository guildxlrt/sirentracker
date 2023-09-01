import { IResponse } from "../../assets"
import { ArtistId, ReleaseId, Song, SongId } from "../entities"

export abstract class SongRepository {
	abstract get(id: SongId): Promise<IResponse<Song>>
	abstract findManyByArtist(id: ArtistId): Promise<IResponse<Song[]>>
	abstract findManyByRelease(id: ReleaseId): Promise<IResponse<Song[]>>
}
