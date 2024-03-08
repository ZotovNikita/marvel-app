export interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: { [id: number]: string };
}
