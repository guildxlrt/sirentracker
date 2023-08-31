import { ArtistId, ReleaseId, Song, SongId } from "../entities"

export abstract class SongRepository {
	abstract get(id: SongId): Promise<Song>

	abstract findManyByArtist(id: ArtistId): Promise<Song[]>

	abstract findManyByRelease(id: ReleaseId): Promise<Song[]>
}
