type SearchPageProps = {
  searchParams: { query?: string } | undefined;
};

const Search = async ({ searchParams }: SearchPageProps) => {
  const search = await searchParams;
  if (!search) return;

  const searchQuery = typeof search === "object" && search.query;

  if (!searchQuery) {
    return;
  }

  return <div className="w-full min-h-screen ">{searchQuery}</div>;
};

export default Search;
