// File: src/app/layout.tsx created by the developer @vivekcsein
import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins, roboto } from "@/libs/configs/config.styles";

//import all providers to wrap the app
import Fontsprovider from "@/components/provider/Fontsprovider";
import Themesprovider from "@/components/provider/Themesprovider";
import Layoutprovider from "@/components/provider/Layoutprovider";
import Storeprovider from "@/components/provider/Storeprovider";

// call rootlayout API
import { getRootLayoutAPI } from "@/libs/api/api.fetch";
import { ProductDetails } from "@/types/products";
import { getHomePageProducts } from "@/libs/api/api.products";

export const metadata: Metadata = {
  title: "Six Teal",
  description: "%{description} | Six Teal a fashion brand",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [rootLayoutData, homepageProductsData]: [
    rootLayoutData,
    ProductDetails[],
  ] = await Promise.all([getRootLayoutAPI(), getHomePageProducts()]);

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Storeprovider>
          <Themesprovider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Fontsprovider>
              <Layoutprovider
                rootLayoutData={rootLayoutData}
                homepageProductsData={homepageProductsData}
              >
                {children}
              </Layoutprovider>
            </Fontsprovider>
          </Themesprovider>
        </Storeprovider>
      </body>
    </html>
  );
}
