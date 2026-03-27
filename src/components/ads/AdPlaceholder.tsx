interface AdPlaceholderProps {
  description?: string;
  type?: 'header' | 'sidebar' | 'content';
}

export function AdPlaceholder({ description = 'Advertisement', type = 'content' }: AdPlaceholderProps) {
  const styles = {
    header: 'h-[90px] w-full max-w-[728px] mx-auto mb-8',
    sidebar: 'h-[600px] w-full max-w-[300px] mx-auto',
    content: 'h-[250px] w-full max-w-[728px] mx-auto my-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-700 rounded overflow-hidden ${styles[type]}`}>
      <span className="text-[10px] uppercase text-neutral-400 mb-1">{description}</span>
      <div className="text-xs text-neutral-300 dark:text-neutral-600 font-mono italic">
        [Adsense Unit Placeholder]
      </div>
    </div>
  );
}
