export abstract class AutoEntity {
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}

export interface User extends AutoEntity {
  id: number;
  username: string;
}

export interface Article extends AutoEntity {
  id: number;
  user?: User;
  title: string;
  content?: string;
}
