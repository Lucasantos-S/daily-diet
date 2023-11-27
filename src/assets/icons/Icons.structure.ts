export interface IIconProps extends Props {
  name: keyof IIcons;
}
export interface Props {
  color?: string;
}
export interface IIcons {
  Logo: JSX.Element;
  OpenIcon: JSX.Element;
  PositiveIcon: JSX.Element;
  NegativeIcon: JSX.Element;
  Edit: JSX.Element;
  Delete: JSX.Element;
}
