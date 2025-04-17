import { Provider } from "@/components/ui/provider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NBATracker",
  description:
    "Death. Taxes. NBA2k. - It's not an addiction, it's a lifestyle.",
  metadataBase: new URL("https://twokaytracker.onrender.com"),
  openGraph: {
    images: ["opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children} </Provider>
      </body>
    </html>
  );
}
