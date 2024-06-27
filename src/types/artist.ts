export interface IArtist {
    aliases?: IArtistAlias[];
    name?: string;
    namevariations: string[];
    realname?: string;
    profile: string;
    releases_url: string;
    resource_url: string;
    uri: string;
    urls: string[];
    data_quality: string;
    id: number;
    images: IArtistImage[];
    members?: IArtistMember[];
}

interface IArtistAlias {
    id: number;
    name: string;
    resource_url: string;
    thumbnail_url: string;
}

interface IArtistImage {
    height: number;
    resource_url: string;
    type: string;
    uri: string;
    uri150: string;
    width: number;
}

interface IArtistMember {
    active: boolean;
    id: number;
    name: string;
    resource_url: string;
}
