export interface IIconProps extends Props {
  name: keyof IIcons;
}
export interface Props {
  color?: string;
}
export interface IIcons {
  Logo: JSX.Element;
  OpenIcon: JSX.Element;
}
