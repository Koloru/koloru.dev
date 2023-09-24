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
  ];
  return (
    <div className="z-40 mt-36 flex h-full w-full flex-col items-center justify-center gap-12">
      <h1 className="text-4xl font-bold">
        Projects
        <p className="mt-2 text-center text-sm font-light italic">
          May not be up to date due to other commitments.
        </p>
      </h1>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-[50%]">
        {data.map((e) => (
          <a
            href={e.link}
            className="group flex h-full min-h-[150px] w-full flex-col gap-2 rounded-md border-2 border-white p-4 hover:border-slate-800 hover:text-slate-800 "
          >
            <h1 className="max-h-[100%] overflow-hidden text-clip whitespace-nowrap text-lg font-semibold">
              {e.name}
            </h1>
            <p className="line-clamp-3 text-ellipsis text-sm">{e.desc}</p>
            <p className="ml-auto mt-auto flex gap-2 overflow-hidden">
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
