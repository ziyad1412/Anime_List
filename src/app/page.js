import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const TopAnime = await response.json();
  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Populer Anime"
          linkHref="/populer"
          linkTitle="View All"
        />
        <AnimeList api={TopAnime} />
      </section>
    </>
  );
};

export default Page;
