interface IVideo {
    duration: number;
    description: string;
    embed: boolean;
    uri: string;
    title: string;
}

export interface IReleaseArtist {
    join: string;
    name: string;
    anv: string;
    tracks: string;
    role: string;
    resource_url: string;
    id: number;
}

interface IImage {
    height: number;
    width: number;
    resource_url: string;
    type: string;
    uri: string;
    uri150: string;
}

interface ITracklist {
    duration: string;
    position: string;
    type_: string;
    title: string;
    extraartists?: IExtraArtist[];
}

interface IExtraArtist {
    join: string;
    name: string;
    anv: string;
    tracks: string;
    role: string;
    resource_url: string;
    id: number;
}

export interface IMasterRelease {
    styles: string[];
    genres: string[];
    videos: IVideo[];
    title: string;
    main_release: number;
    main_release_url: string;
    uri: string;
    artists: IReleaseArtist[];
    versions_url: string;
    year: number;
    images: IImage[];
    resource_url: string;
    tracklist: ITracklist[];
    id: number;
    num_for_sale: number;
    lowest_price: number;
    data_quality: string;
}
