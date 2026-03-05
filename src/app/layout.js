import { Manrope } from 'next/font/google'
import "./globals.css";
import { LayoutContainer } from "@/components/atoms/Layout/LayoutContainer.jsx";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: "In",
  description: "Медиа-платформа для помощи психологам",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </body>
    </html>
  );
}
