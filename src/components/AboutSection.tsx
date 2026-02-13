import { SectionLayout } from "./SectionLayout";

export function AboutSection() {
  return (
    <SectionLayout title='About Me' className='mb-6'>
      <>
        <p className='text-muted-foreground leading-relaxed'>
          If you're here, then you're at the right place. My name is Phil, and
          I'm a software developer. I pride myself on my technical expertise,
          and the ability to still have a normal conversation with you. I've had
          the opportunity to work on a lot of technical projects, and what I
          find most enjoyable is brainstorming and implementing not code that
          just works, but code that is modular, readable, and optimized for
          performance.
        </p>

        <p className='text-muted-foreground leading-relaxed'>
          Additionally, I am a creative, and have a lot of interests outside of
          just software engineering. Like music, which is a big passion of mine,
          and I would love to one day learn how to play guitar.
        </p>
      </>
    </SectionLayout>
  );
}
