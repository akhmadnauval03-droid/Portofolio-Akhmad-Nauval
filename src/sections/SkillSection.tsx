import SectionHeader from "@/components/ui/SectionHeader";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js"]
  },
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript"]
  },
  {
    category: "Tools",
    items: ["VS Code", "GitHub", "Figma"]
  },
  {
    category: "Database",
    items: ["MySQL", "supabase"]
  }
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-24">
      <div className="w-[90%] mx-w-6xl mx-auto space-y-12">
        <SectionHeader
        title="My"
        higlight="Skill"
        badge="Skill"
        description="Teknologi dan tools yang saya gunakan dalam pengembangan website."/>

        {/* Card Skill */}
        <div data-aos="fade-up" data-aos-delay="100"data-aos-anchor-placement="top-center" className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-2xl border border-slate-800 hover:border-primary transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-text">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 rounded-lg text-sm text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}