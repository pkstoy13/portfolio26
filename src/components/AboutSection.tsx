import { SectionLayout } from "./SectionLayout";

export function AboutSection() {
  return (
    <SectionLayout title='About Me'>
      <>
        <p className='text-muted-foreground leading-relaxed'>
          I’m a software engineer focused on backend systems, data-driven
          products, and building clean APIs. I enjoy working at the intersection
          of music, analytics, and developer tooling.
        </p>

        <p className='text-muted-foreground leading-relaxed'>
          Recently, I’ve been building an underground artist discovery platform
          and working with .NET, PostgreSQL, and modern frontend frameworks.
        </p>
      </>
    </SectionLayout>
  );
}
