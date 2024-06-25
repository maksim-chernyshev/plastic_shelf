'use client';

import {usePathname} from "next/navigation";

export default function ArtistPage() {
    const pathname = usePathname();
    const id = pathname.split('/').pop();




    return (
        <div>{`Artist page: ${id}`}</div>
    );
}
