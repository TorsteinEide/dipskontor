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