import QueryBuilder from '../../builder/QueryBuilder';
import { TGift } from './gift.interface';
import { Gift } from './gift.model';

const createGiftIntoDB = async (payload: TGift) => {
  const result = await Gift.create(payload);
  return result;
};

// get gifts from db--------------
const getGiftsFromDB = async (query: Record<string, unknown>) => {
  const giftQuery = new QueryBuilder(Gift.find(), query)
    .search(['name', 'recipient'])
    .filter();
  const result = await giftQuery.modelQuery;
  return result;
};
// update gift from db ------------------
const updateGiftFromDB = async (id: string, payload: Partial<TGift>) => {
  const result = await Gift.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
// delete gift from db---------------------
const deleteSingleGiftFromDB = async (id: string) => {
  const result = await Gift.findByIdAndDelete(id);
  return result;
};
// delete multiple gift from db
const deleteMultipleGiftFromDB = async (ids: string[]) => {
  console.log(ids);
  const result = await Gift.deleteMany({ _id: { $in: ids } });
  return result;
};
export const giftServices = {
  createGiftIntoDB,
  getGiftsFromDB,
  updateGiftFromDB,
  deleteSingleGiftFromDB,
  deleteMultipleGiftFromDB,
};
