import { BaseReposResponse } from "../../assets"
import { ArtistId, ReleaseId, Song, SongId } from "../entities"

export abstract class SongRepository {
	abstract get(id: SongId): Promise<BaseReposResponse<Song>>

	abstract findManyByArtist(id: ArtistId): Promise<BaseReposResponse<Song[]>>
	abstract findManyByRelease(id: ReleaseId): Promise<BaseReposResponse<Song[]>>
}
