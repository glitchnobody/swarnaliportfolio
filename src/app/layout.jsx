import GlobalNavBar from './GlobalNavBar';
import GlobalFooter from './GlobalFooter';
import './globals.css';

export const metadata = {
  title: 'Swarnali Nag',
  description:
    'Swarnali Nag, a dedicated and passionate Kathak dancer whose journey in the enchanting world of Indian classical dance spans over a decade.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=' font-sans   '>
        <GlobalNavBar />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
