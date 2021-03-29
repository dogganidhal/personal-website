


export default interface User {
	readonly firstName: string;
	readonly lastName: string;
	readonly age: string;
	readonly position: string;
	readonly pictureUrl: string;
	readonly description: UserDescription;
}


interface UserDescription {
	readonly aboutMarkdown: string;
}
