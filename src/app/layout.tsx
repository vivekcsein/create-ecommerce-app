import "../styles/globals.css";
import type { Metadata } from "next";

import { poppins, roboto } from "@/libs/configs/config.styles";

import FontsProvider from "@/components/providers/FontsProvider";
import StoreProvider from "@/components/providers/StoreProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LayoutProvider from "@/components/providers/LayoutProvider";

import { getRootLayoutAPI } from "@/libs/api/api.rootLayout";

export const metadata: Metadata = {
  title: "E-commerce app",
  description: "%{description} | Title",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootLayoutJson: Promise<rootLayoutData> = getRootLayoutAPI();
  const rootLayoutData = await rootLayoutJson;
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
            <FontsProvider>
              <LayoutProvider rootLayoutData={rootLayoutData}>
                {children}
              </LayoutProvider>
            </FontsProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
