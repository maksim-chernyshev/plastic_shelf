'use client';

import { useState, useEffect } from "react";
import {usePathname} from "next/navigation";
import { apiUrl, TOKEN } from "src/constants/constants";

function ArtistPage() {
    const [artist, setArtist] = useState({});

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    useEffect(() => {
        const artistData = fetch(`${apiUrl}/artists/${id}?token=${TOKEN}`)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setArtist(result);
            }) ;
    }, [id]);

    return (
        <div>{`Artist page: ${id}`}</div>
    );
}

export default ArtistPage;