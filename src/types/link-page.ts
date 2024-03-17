export interface LinkPagePublic {
  title: string;
  subTitle: string | null;
  description: string | null;
  profile: string | null;
  banner: string | null;
  theme: string;
  isDefault: boolean;
  userId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLinkPage {
  title: string;
  isDefault: boolean;
  subTitle?: string;
  description?: string;
  profile?: string;
  banner?: string;
}
