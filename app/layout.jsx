import "./globals.css";

export const metadata = {
  title: "Ebook 4D",
  description: "Ebook gratuito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
