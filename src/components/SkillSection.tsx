import { SectionLayout } from "./SectionLayout";
import { SkillCard } from "./SkillCard";
import { skills } from "./data/skills.data";

export function SkillSection() {
  return (
    <>
      <SectionLayout title='Skills'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
