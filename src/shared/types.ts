export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  OurServices = "ourservices",
  ContactUs = "contactus",
}

export type SelectedPageType = {
  page?: string;
  isTopOfPage?: boolean;
  handleClick?: () => void;
};

export interface IBlueBoxType {
  image: string;
  title: string;
  backgroundColor?: boolean;
}
