import { SectionLayout } from "./SectionLayout";
import { experience } from "./data/experience.data";

export function WorkExperienceSection() {
  return (
    <SectionLayout title='Work Experience'>
      <div className='space-y-6'>
        {experience.map((job, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 rounded-xl border border-muted/40 bg-background/60 p-6 shadow-sm sm:flex-row sm:items-start'
          >
            {/* Logo */}
            <img
              src={job.icon}
              alt={`${job.company} logo`}
              className='h-14 w-14 rounded-md bg-muted/30 p-2 object-contain'
            />

            {/* Content */}
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
                <div>
                  <h3 className='text-lg font-semibold'>{job.role}</h3>
                  <p className='text-sm text-muted-foreground'>{job.company}</p>
                </div>

                <span className='text-sm text-muted-foreground'>
                  {job.time}
                </span>
              </div>

              <ul className='list-disc pl-4 text-sm text-muted-foreground space-y-1'>
                {job.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
