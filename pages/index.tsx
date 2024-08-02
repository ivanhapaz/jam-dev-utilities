import HomeCard from "../components/HomeCard";
import Header from "../components/Header";
import { CMDK } from "../components/CMDK";
import { tools } from "../components/tools-list";

export default function Home() {
  return (
    <main className="pb-8">
      <Header />

      <div className="container text-center mb-14">
        <div className="flex justify-center items-center mb-4">
          <img
            className="rounded-2xl"
            src="https://jam.dev/page-icon.png"
            width="64"
            height="64"
            alt="Logo"
          />
        </div>

        <h1 className="text-3xl font-bold mb-5">Dev Utilities</h1>

        <p className="text-lg text-muted-foreground mb-7 leading-6 font-light">
          Jam exists to make developers lives easier.
          <br />
          Here are fast, free, open source, ad-free tools.
        </p>
        <CMDK showSearch />
      </div>

      <div className="container grid grid-cols-3 gap-6">
        {tools.map((card) => (
          <HomeCard
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </main>
  );
}
