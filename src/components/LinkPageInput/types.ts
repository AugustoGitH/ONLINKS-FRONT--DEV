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
}
