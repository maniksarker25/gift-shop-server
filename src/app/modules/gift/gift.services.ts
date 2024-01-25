import { TGift } from './gift.interface';
import { Gift } from './gift.model';

const createGiftIntoDB = async (payload: TGift) => {
  const result = await Gift.create(payload);
  return result;
};

// get gifts from db
const getGiftsFromDB = async () => {
  const result = await Gift.find();
  return result;
};

export const giftServices = {
  createGiftIntoDB,
  getGiftsFromDB,
};
