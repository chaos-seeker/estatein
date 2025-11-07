"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers(props: PropsWithChildren) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {props.children}
    </HeroUIProvider>
  );
}
