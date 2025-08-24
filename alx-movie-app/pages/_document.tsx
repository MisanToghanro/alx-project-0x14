import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to your manifest.json */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color (used on Android’s address bar, etc.) */}
        <meta name="theme-color" content="#0070f3" />

        {/* Optional: Add Apple-specific PWA tags */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
