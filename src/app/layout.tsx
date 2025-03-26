import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "./client-layout";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Ratnesh Maurya - Software Engineer",
  description:
    "Ratnesh Maurya is  a Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.",
  openGraph: {
    title: "Ratnesh Maurya - Software Engineer",
    description:
      "Ratnesh Maurya is  Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.",
    url: "https://ratn.tech",
    siteName: "Ratnesh Maurya Portfolio",
    images: [
      {
        url: "https://ratn.tech/ratn.jpg",
        width: 1200,
        height: 630,
        alt: "Ratnesh Maurya Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnesh Maurya - Software Engineer",
    description:
      "Ratnesh Maurya is a Software Engineer with experience in backend development, cloud solutions, and web technologies.",
    creator: "@RatneshMaurya",
    images: ["https://ratn.tech/ratn.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://ratn.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gidole&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`mx-auto font-sans bg-[url('/we.jpg')] dark:bg-gray-950 dark:bg-[url('/bg.gif')] bg-fixed bg-cover bg-center ${GeistSans.variable} font-gidole`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="pt-auto ">
            <PageTransition>
              {children}
            </PageTransition>
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>

        {/* ✅ Move Client Scripts to a Separate Component */}
        <ClientLayout />
      </body>
    </html>
  );
}
