import { ReactNode } from "react";

export type DirectionIconLink = "left" | "right";
export interface ValueLinkPageInput {
  title: string | null;
  subTitle: string | null;
  description: string | null;
  profile: File | string | null;
  banner: File | string | null;
  isDefault: boolean;
  links: Record<string, ValueLinkInput> | null;
}

export interface ValueLinkInput {
  href: string;
  title: string;
  order: number;
  icon: [DirectionIconLink, string, string] | null;
}

export type ErrorsLinkPage = Partial<
  Record<
    keyof Omit<ValueLinkPageInput, "links">,
    { message: string | ReactNode }
  > & {
    links: Record<string, { message: string | ReactNode }>;
  }
>;
