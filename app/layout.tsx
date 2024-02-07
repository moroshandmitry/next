import { poppins } from './ui/fonts';

import '@/app/ui/global.css';

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
