
export const fetchAPI = async (endpoint: string, revalidateTime?: number) => {
    try {
        let res = await fetch(`${endpoint}`, {
            method: "GET",
            // cache: "no-cache",
            // Revalidate every 60 seconds
            next: { revalidate: revalidateTime ? revalidateTime : 60 * 60 },
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