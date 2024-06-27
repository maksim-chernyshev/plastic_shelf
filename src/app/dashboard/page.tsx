import Image from 'next/image';
import Link from 'next/link';
import {IMasterRelease, IReleaseArtist} from "src/types/release";
import {apiUrl, TOKEN} from "src/constants/constants";
import React from "react";
import noCoverImage from '../../../public/assets/img/no-cover.svg';

export default async function DashboardPage() {
    const randomId = (Math.floor(Math.random() * 10000)).toString();

    const getRelease = async (id: string): Promise<IMasterRelease> => {
        const releaseData = await fetch(`${apiUrl}/masters/${id}?token=${TOKEN}`);

        return await releaseData.json();
    };

    const release = await getRelease(randomId);

    const renderArtists = (release: IMasterRelease) => {
        const result: any[] = [];

        if (!release.artists) {
            return (
                <div>Артистов не найдено!</div>
            );
        }

        return release.artists.map((artist) => (
            <Link
                href={`/artists/${artist.id}`}
                key={artist.id}
                className="p-6 font-bold hover:text-amber-400 transition-colors"
            >
                {artist.name}
            </Link>
        ));
    };

    const artists = renderArtists(release);

    const releaseImage = release.images.filter((item: { type: string }) => {
        if (!item) {
            return [];
        }

        return item.type === 'primary';
    });

    return (
        <div className="grid place-content-center w-full h-dvh">
            <div className='flex place-content-center'>
                {artists ? artists : 'Артисты не найдены'}
            </div>
            
            { releaseImage[0]?.uri && <Image
                src={releaseImage[0].uri || noCoverImage}
                className="m-auto"
                width={500}
                height={500}
                alt={release.title}
            /> }

            <Link
                href={`/releases/${release.id}`}
                className="flex place-content-center p-6 hover:text-amber-400 transition-colors"
            >
                {release.title}
            </Link>
        </div>
    );
}

// 8254 - два артиста