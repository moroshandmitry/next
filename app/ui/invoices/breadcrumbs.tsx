import { clsx } from 'clsx';

import Link from 'next/link';

import { poppins } from '@/app/ui/fonts';

type Breadcrumb = {
  href: string;
  label: string;
  active?: boolean;
};

interface IBreadcrumbProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<IBreadcrumbProps> = (props) => {
  const { breadcrumbs } = props;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx(poppins.className, 'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => {
          const { href, label, active } = breadcrumb;

          return (
            <li
              key={href}
              aria-current={active}
              className={clsx(active ? 'text-neutral-50' : 'text-neutral-200')}
            >
              <Link href={href}>{label}</Link>
              {index < breadcrumbs.length - 1 ? (
                <span className="mx-3 inline-block">/</span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
