import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins, roboto } from "@/libs/configs/config.styles";
import FontsProvider from "@/components/providers/FontsProvider";
import StoreProvider from "@/components/providers/StoreProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "E-commerce app",
  description: "%{description} | Title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FontsProvider>{children}</FontsProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
