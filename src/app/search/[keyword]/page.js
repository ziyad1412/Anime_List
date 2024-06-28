import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=8`
  );
  const SearchAnime = await response.json();
  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title="Populer Anime" />
        <AnimeList api={SearchAnime} />
      </section>
    </>
  );
};

export default Page;
