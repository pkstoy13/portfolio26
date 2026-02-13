import Diploma from "../assets/diploma.png";
import { SectionLayout } from "./SectionLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function EducationSection() {
  return (
    <SectionLayout title='Education'>
      <div className='flex flex-col gap-6 rounded-xl border border-muted/40 bg-background/60 p-6 shadow-sm sm:flex-row sm:items-center'>
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={Diploma}
              alt='Diploma'
              className='h-24 w-24 cursor-pointer object-contain transition hover:scale-105'
            />
          </DialogTrigger>

          <DialogContent className='max-w-3xl p-0'>
            <img
              src={Diploma}
              alt='Diploma full size'
              className='w-full h-auto rounded-lg'
            />
          </DialogContent>
        </Dialog>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>B.S. in Computer Science</h3>

          <p className='text-sm text-muted-foreground'>
            2021 – 2025 | GPA 3.6 | Dean’s List (6×)
          </p>

          <p className='text-sm text-muted-foreground'>
            Relevant Coursework: Advanced Web Tech, Secure Software Design, Web
            App Security, Operating Systems, Parallel Programming, Software
            Engineering Principles & Practice
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
