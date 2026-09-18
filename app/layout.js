import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'ETech — Future-Ready Tech Solutions',
  description:
    'ETech delivers cutting-edge software, cloud, and AI solutions that help ambitious businesses move faster and smarter.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
