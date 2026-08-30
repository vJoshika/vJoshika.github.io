import "./globals.css";

export const metadata = {
  title: "Joshika V - Software Engineer",
  description: "Portfolio of Joshika V",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
