export interface LinkPagePublic {
  title: string;
  subTitle: string | null;
  description: string | null;
  profile: string | null;
  banner: string | null;
  theme: string;
  isDefault: boolean;
  order: number;
  userId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateLinkPage extends Partial<CreateLinkPage> {}

export interface CreateLinkPage {
  title: string;
  order: number;
  isDefault: boolean;
  subTitle?: string;
  description?: string;
  profile?: string;
  banner?: string;
}
