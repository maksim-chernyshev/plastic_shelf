import { cache } from "react";
import { apiUrl, TOKEN } from "src/constants/constants";
import { IMasterRelease } from "src/types/release";

export const fetchRelease = async (id: string): Promise<IMasterRelease> => {
    const releaseData = await fetch(`${apiUrl}/masters/${id}?token=${TOKEN}`, {
        cache: "force-cache",
        next: {
            revalidate: 200,
        },
    });

    return releaseData.json();
};

export const getRelease = cache(fetchRelease);
