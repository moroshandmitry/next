'use client';

import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

import { Button } from './button';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { UserIcon, KeyIcon } from '@heroicons/react/24/outline';

import { poppins } from '@/app/ui/fonts';

const LoginForm: React.FC = () => {
  const [_, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-neutral-900 px-6 pb-4 pt-8">
        <h1 className={`${poppins.className} mb-3 text-3xl text-white`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              htmlFor="email"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <div className="relative">
              <input
                required
                id="email"
                name="email"
                type="email"
                defaultValue="user@mail.com"
                placeholder="Enter your email"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-12 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-sky-700 peer-focus:text-sky-700" />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                required
                id="password"
                minLength={6}
                type="password"
                name="password"
                defaultValue="123456"
                placeholder="Enter your password"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-12 text-sm outline-2 placeholder:text-gray-500"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-sky-700 peer-focus:text-sky-700" />
            </div>
          </div>
        </div>
        <LoginButton />
      </div>
    </form>
  );
};

const LoginButton = () => (
  <Button className="mt-8 w-full">
    Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
  </Button>
);

export default LoginForm;
