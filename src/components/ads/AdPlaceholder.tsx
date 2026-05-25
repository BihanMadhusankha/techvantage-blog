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
    <div
      suppressHydrationWarning
      aria-hidden="true"
      role="none"
      className={`flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-700 rounded overflow-hidden ${styles[type]}`}
    >
      <span suppressHydrationWarning className="text-[10px] uppercase text-neutral-600 dark:text-neutral-400 mb-1">{description}</span>
      <div suppressHydrationWarning className="text-xs text-neutral-600 dark:text-neutral-400 font-mono italic">
        [Adsense Unit Placeholder]
      </div>
    </div>
  );
}
