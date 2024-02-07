import clsx from 'clsx';
import Link from 'next/link';

interface IPaginationNumberProps {
  href: string;
  isActive: boolean;
  page: number | string;
  position?: 'first' | 'last' | 'middle' | 'single';
}

const PaginationNumber: React.FC<IPaginationNumberProps> = (props) => {
  const { page, href, isActive, position } = props;

  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'text-neutral-900': position === 'middle',
      'z-10 bg-white border-white text-neutral-900': isActive,
      'rounded-r-md': position === 'last' || position === 'single',
      'rounded-l-md': position === 'first' || position === 'single',
      'hover:bg-sky-700 text-white': !isActive && position !== 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
};

export default PaginationNumber;
