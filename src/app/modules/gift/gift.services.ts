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
// update gift from db
const updateGiftFromDB = async (id: string, payload: Partial<TGift>) => {
  const result = await Gift.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const giftServices = {
  createGiftIntoDB,
  getGiftsFromDB,
  updateGiftFromDB,
};
