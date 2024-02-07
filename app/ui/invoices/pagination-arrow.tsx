import clsx from 'clsx';
import Link from 'next/link';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface IPaginationArrowProps {
  href: string;
  isDisabled?: boolean;
  direction: 'left' | 'right';
}

const PaginationArrow: React.FC<IPaginationArrowProps> = (props) => {
  const { href, direction, isDisabled } = props;

  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border',
    {
      'ml-2 md:ml-4': direction === 'right',
      'mr-2 md:mr-4': direction === 'left',
      'hover:bg-sky-700 text-white': !isDisabled,
      'pointer-events-none text-neutral-900': isDisabled,
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
};

export default PaginationArrow;
