export class RouterLinkModel {
  constructor(
    public link: string,
    public text: string
  ) {
  }
}

export const routerLinks: RouterLinkModel[] = [
  {link: '/home', text: 'Home'},
  {link: '/about', text: 'About Us'},
  {link: '/contact', text: 'Contact Us'},
  {link: '#', text: '|'},
  {link: '/products', text: 'Products'},
  {link: '/login', text: 'Login'},
  {link: '/protected', text: 'Protected'}
];
