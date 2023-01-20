export type Post = {
	id: number,
	title: string,
	url: string,
	imageUrl: string,
	newsSite: string,
	summary: string,
	publishedAt: string,
	updatedAt: string,
	featured: boolean,
	launches: any[],
	events: string[]
};

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

export interface initialStateType {
	status: Status,
	posts: Post[],
}