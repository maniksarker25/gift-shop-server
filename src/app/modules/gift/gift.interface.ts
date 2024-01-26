export type TOccasion = 'Birthday' | 'Anniversary' | 'Holiday';
export type TCategory = 'Home decor' | 'Gadget' | 'Accessories';
export type TTheme = 'Vintage' | 'Romantic' | 'Modern';
export type TBrand = 'GiftCraft' | 'JoyFusion' | 'ElegantGiftery';
export type TGift = {
  name: string;
  price: number;
  quantity: number;
  occasion: TOccasion;
  recipient: string;
  category: TCategory;
  theme: TTheme;
  brand: TBrand;
  color: string;
};
