import { GoogleAnalytics } from '@next/third-parties/google'
import { getMetaData } from "@/util/getMetaData";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

export const metadata = getMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="UA-155119309-1" />
    </html>
  );
}
