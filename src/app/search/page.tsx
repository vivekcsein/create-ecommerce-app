import Search_content from "@/components/content/searchpage/Search_content";
import Searchpage from "@/components/content/searchpage/Searchpage";

type SearchPageProps = {
  searchParams: Promise<{ query: string } | undefined>;
};

const Search = async ({ searchParams }: SearchPageProps) => {
  const search = await searchParams;
  if (!search) return;

  const searchQuery = search.query as string;

  if (!searchQuery) {
    return <Searchpage />;
  }

  return (
    <div className="w-full min-h-screen ">
      <Search_content query={searchQuery} />
    </div>
  );
};

export default Search;
