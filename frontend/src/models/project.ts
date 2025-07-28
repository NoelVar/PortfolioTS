interface ProjectDate {
    start: string | null,
    end: string | null,
}

export interface Project {
    _id: string,
    title: string,
    content: string,
    image?: string | null,
    date: ProjectDate | null,
    link?: string,
    createdAt: string,
    updatedAt: string
}