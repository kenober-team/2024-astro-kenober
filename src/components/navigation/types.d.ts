type NavElement = {
  name: string;
  path: string;
  title?: string;
  target?: string;
  isButton: boolean;
  children?: NavElement[];
};

type NavClassConfig = {
  navRoot: string;
  ulList: string;
  link?: (isButton: boolean) => array;
  menu?: {
    button?: string;
    ulList?: string;
  };
  mobileButton?: {
    button?: string;
    svg?: string;
  };
};
