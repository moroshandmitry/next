import clsx from 'clsx';

interface IButtonProps
  extends React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, className, ...restButtonProps } = props;

  return (
    <button
      className={clsx(
        'flex h-10 items-center rounded-lg bg-sky-700 px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 active:bg-sky-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
      {...restButtonProps}
    >
      {children}
    </button>
  );
};
