export interface Team {
    id?: string;
    name: string;
    country: string;
}

export interface Player {
    id?: string;
    name: string;
    position: string;
    teamId: string;
}
