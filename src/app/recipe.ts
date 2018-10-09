export class Recipe {
  id: number;
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
  categories: number[];
  featured_media: number;
}
