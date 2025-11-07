import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontUrbanist } from "@/config/fonts";

export const metadata: Metadata = {
  title: "estatein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontUrbanist.variable,
        )}
      >
        <Providers>
          <div>hi</div>
        </Providers>
      </body>
    </html>
  );
}
