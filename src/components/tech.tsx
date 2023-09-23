import { techData } from "@/data/tech";

const Tech = () => {
  return (
    <div className="z-40 mt-36 flex h-full w-full flex-col items-center justify-center gap-12">
      <h1 className="text-4xl font-bold">Stuff that I use</h1>
      <div className="grid grid-cols-4 gap-y-16">
        {techData.map((tech, index) => (
          <div key={index}>
            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center hover:text-green-400"
            >
              <tech.icon size={50} />
              <p className="text-lg font-bold">{tech.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tech;
