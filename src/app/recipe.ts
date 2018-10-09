export class Recipe {
  id: number;
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
  categories: number[];
  difficulties: number[];
  allergies: number[];
  featured_media: number;
}
