type SkillCardProps = {
  title: string;
  items: {
    name: string;
    icon: React.ElementType;
  }[];
};

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className='rounded-xl border border-muted/40 bg-background/60 p-5 shadow-sm'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>

      <ul className='grid grid-cols-3 gap-4'>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.name}
              className='flex flex-col items-center gap-1 text-sm text-muted-foreground'
            >
              <Icon className='h-6 w-6' />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
