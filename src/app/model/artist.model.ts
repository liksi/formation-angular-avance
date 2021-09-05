export interface Artist {
    id: number,
    firstname: string,
    surname: string,
    birthdate: string,
    type: ArtistTypeEnum;
}

export enum ArtistTypeEnum {
    BAND = 'BAND',
    SOLO = 'SOLO',
}