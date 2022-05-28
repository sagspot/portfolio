export type AuthModalViewType = 'signin' | 'resetPassword';

export interface AuthModalType {
  view: AuthModalViewType;
  open: boolean;
}
