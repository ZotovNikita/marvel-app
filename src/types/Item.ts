export interface Item {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  link: { [id: number]: string };
}
