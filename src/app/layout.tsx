import { Provider } from "@/components/ui/provider";
export const metadata = {
  title: "NBATracker",
  description: "JoMiPa",
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
