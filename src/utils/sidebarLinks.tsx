interface ILink {
  text: string;
  icon: string;
  to: string;
}

export const links: ILink[] = [
  {
    text: "Home",
    icon: "/assets/Home.svg",
    to: "/dashboard",
  },
  {
    text: "Ingresos",
    icon: "/assets/Reports.svg",
    to: "/dashboard",
  },
  {
    text: "Gastos",
    icon: "/assets/Page.svg",
    to: "/dashboard",
  },
];
