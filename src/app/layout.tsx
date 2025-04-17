import { Provider } from "@/components/ui/provider";
export const metadata = {
  title: "NBATracker",
  description:
    "Death. Taxes. NBA2k. - It's not an addiction, it's a lifestyle.",
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
