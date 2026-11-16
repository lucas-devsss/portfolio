import { poppins400, poppins500 } from "../../../fonts";

const skillGroups = [
  {
    label: "Linguagens",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Bibliotecas",
    skills: ["React", "React Hook Form", "Zod", "shadcn/ui"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "Tailwind CSS"],
  },
  {
    label: "Ferramentas",
    skills: ["Git", "GitHub", "Figma"],
  },
];

export default function SkillsList() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
      {skillGroups.map(({ label, skills }) => (
        <li key={label} className="flex flex-col gap-4">
          <h4
            className={` ${poppins500.className} text-zinc-500 text-sm uppercase after:flex-1 flex items-center gap-3`}
          >
            {label}
          </h4>
          <ul
            className={`${poppins400.className} flex flex-col gap-3 text-lg text-zinc-200`}
          >
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
