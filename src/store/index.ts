import userInfo from './userInfo';

const store = {
  userInfo,
};

export default store;

// 导出每个store的类型
export type StoreType = typeof store;
export type UserStoreType = typeof store.userInfo;

