type SearchPageProps = {
  searchParams: Promise<{ query: string } | undefined>;
};

const Search = async ({ searchParams }: SearchPageProps) => {
  const search = await searchParams;
  if (!search) return;

  const searchQuery = search.query as string;

  if (!searchQuery) {
    return;
  }

  return <div className="w-full min-h-screen ">{searchQuery}</div>;
};

export default Search;
