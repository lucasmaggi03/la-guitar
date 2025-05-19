export type Guitar = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type CartItem = Guitar & {
  quantity: number;
}