import {
	BaseReposArtistItem,
	BaseReposRemovableItem,
	IResponse,
	InputsLayer,
} from "../../../assets"
import { ArtistId, Post, PostId } from "../../entities"

export abstract class PostRepository implements BaseReposArtistItem<Post>, BaseReposRemovableItem {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract delete(inputs: InputsLayer<PostId, unknown>): Promise<IResponse<unknown>>

	abstract get(inputs: InputsLayer<PostId, Post>): Promise<IResponse<Post>>

	abstract getAll(inputs: InputsLayer<unknown, Post[]>): Promise<IResponse<Post[]>>

	abstract findManyByArtist(inputs: InputsLayer<ArtistId, Post[]>): Promise<IResponse<Post[]>>
}
