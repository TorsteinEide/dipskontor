interface Like {
    createdBy: User;
}

interface User {
    name: string;
    picture?: string;
}

export interface Idea {
    title: string;
    description: string;
    createdBy: User;
    likes: Like[];
}

export interface IEvent {
    id: number;
    title: string;
    description: string;
    location: string;
    createdBy: User;
    createdAt: Date;
}