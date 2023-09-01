export const GenresEnum = {
	rock: "rock",
	metal: "metal",
	electro: "electro",
} as const

export type GenreType = (typeof GenresEnum)[keyof typeof GenresEnum]

export type EntityGenres = [GenreType, GenreType | undefined, GenreType | undefined]
