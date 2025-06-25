
export const fetchAPI = async (endpoint: string, revalidateTime?: number) => {
    try {
        const res = await fetch(`${endpoint}`, {
            method: "GET",
            // cache: "no-cache",
            // Revalidate every after 1 day seconds
            next: { revalidate: revalidateTime ? revalidateTime : 24 * 60 * 60 },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            // mode: 'cors',
            credentials: "same-origin",
        });
        return res.json();
    } catch (err) {
        console.error(err + "Failed to fetch data");
    }
};