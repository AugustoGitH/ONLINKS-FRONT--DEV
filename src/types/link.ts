export interface Link {
  title: string;
  href: string;
  icon: string | null;
  linkPageId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;
  _id: string;
}

export interface CreateLink
  extends Pick<Link, "title" | "href" | "icon" | "order" | "linkPageId"> {}
export interface UpdateLink extends Partial<Omit<CreateLink, "linkPageId">> {}
