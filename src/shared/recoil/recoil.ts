import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 로컬스토리지에 데이터를 저장
  storage: localStorage,
});

export const loginState = atom({
  key: "loginState",
  default: {
    success: null,
    isLoggedIn: false,
  }, // 기본값은 로그인되지 않은 상태
  effects_UNSTABLE: [persistAtom],
});
