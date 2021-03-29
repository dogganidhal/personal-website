


export default interface User {
	readonly firstName: string;
	readonly lastName: string;
	readonly age: string;
	readonly position: string;
	readonly description: UserDescription;
}


interface UserDescription {
	readonly aboutMarkdown: string;
}
