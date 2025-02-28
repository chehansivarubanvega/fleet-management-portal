type EmptyContentProps = {
  title?: string;
  description?: string;
  isError?: boolean;
  icon?: 'error' | 'search' | 'filter';
};

export function EmptyContent({ 
  title = 'No Data', 
  description,
  isError = false,
  icon = 'error'
}: EmptyContentProps) {
  const icons = {
    error: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    search: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    filter: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  };

  return (
    <div className="h-full flex items-center justify-center flex-col p-12">
      <div className={`mb-6 p-4 rounded-full ${
        isError 
          ? 'bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400' 
          : 'bg-gray-50 text-gray-400 dark:bg-gray-800 dark:text-gray-500'
      }`}>
        {icons[icon]}
      </div>
      <h6 className={`text-xl font-semibold mb-3 ${
        isError ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-gray-100'
      }`}>
        {title}
      </h6>
      {description && (
        <p className={`text-sm max-w-sm text-center ${
          isError 
            ? 'text-red-500 dark:text-red-300' 
            : 'text-gray-500 dark:text-gray-400'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
