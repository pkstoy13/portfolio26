type SectionLayoutProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLayout({
  title,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section
      className={`max-w-3xl mx-auto sm:py-16 space-y-6 px-4 sm:px-6 py-12  ${className ?? ""}`}
    >
      <h2 className='text-2xl sm:text-3xl font-semibold border-b pb-2'>
        {title}
      </h2>

      {children}
    </section>
  );
}
