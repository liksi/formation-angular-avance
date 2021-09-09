import { Individu } from "./individu.model";

export interface Artist extends Individu {
    id: number,
    birthdate: string,
    type: ArtistTypeEnum;
}

export enum ArtistTypeEnum {
    BAND = 'BAND',
    SOLO = 'SOLO',
}