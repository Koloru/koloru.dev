const Projects = () => {
  const data = [
    {
      name: "My Animelist API",
      link: "https://mal-api-app-one.vercel.app/",
      desc: "Small app that searches for an anime on MyAnimeList.net",
      tags: ["React", "Vite", "Zustand", "Tailwind", "Axios", "Typescript"],
    },
    {
      name: "Idolmaster Random idol",
      link: "https://idolmaster-random-idol.vercel.app/",
      desc: "Small app that shows a random idol from the game idolm@ster",
      tags: ["React", "Vite", "Zustand", "Tailwind", "Axios", "Typescript"],
    },
    {
      name: "Arknights Spark Calculator",
      link: "https://arknights-spark-calculator.vercel.app/",
      desc: "A currency calculator for Arknights(a mobile game)",
      tags: ["React", "Vite", "Tailwind", "Typescript"],
    },
    {
      name: "Anime/Manga series list",
      link: "https://anime.koloru.dev/",
      desc: "Personal MyAnimeList.net clone to keep track of things I'm watching/reading",
      tags: [
        "Next",
        "Tailwind",
        "Typescript",
        "Express",
        "Node",
        "Prisma",
        "Postgresql",
      ],
    },
  ];
  return (
    <div className="z-40 mt-36 flex h-full w-full flex-col items-center justify-center gap-12">
      <h1 className="text-center text-4xl font-bold">
        Projects
        <p className="mt-2 text-center text-sm font-light italic">
          May not be up to date due to other commitments.
        </p>
      </h1>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:max-w-[70%] lg:max-w-[50%] lg:grid-cols-2 overflow-hidden">
        {data.map((e) => (
          <a
            href={e.link}
            className="group flex h-full min-h-[150px] w-full flex-col gap-2 rounded-md border-2 border-white p-4 hover:border-slate-800 hover:text-slate-800 "
          >
            <h1 className="max-h-[100%] overflow-hidden text-clip whitespace-nowrap text-center text-xl font-semibold md:text-left md:text-lg">
              {e.name}
            </h1>
            <p className="line-clamp-3 text-ellipsis text-center text-sm md:text-left ">
              {e.desc}
            </p>
            <p className="mt-auto flex flex-wrap justify-center gap-2 overflow-hidden md:ml-auto md:flex-nowrap w-max">
              {e.tags.map((tag) => (
                <p className="line-clamp-1 rounded-md p-1 text-xs group-hover:text-slate-800 ">
                  {tag}
                </p>
              ))}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Projects;
