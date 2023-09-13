import { BaseReposArtistItem, BaseReposRemovableItem, IResponse } from "../../assets"
import { ArtistId, Post, PostId } from "../entities"

export abstract class PostRepository implements BaseReposArtistItem<Post>, BaseReposRemovableItem {
	abstract create(params: any): Promise<IResponse<boolean>>

	abstract delete(id: PostId): Promise<IResponse<unknown>>

	abstract get(id: PostId): Promise<IResponse<Post>>

	abstract getAll(): Promise<IResponse<Post[]>>

	abstract findManyByArtist(id: ArtistId): Promise<IResponse<Post[]>>
}
