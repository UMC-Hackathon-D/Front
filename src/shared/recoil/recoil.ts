import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
    key: "localStorage",
    storage: localStorage,
});

export const loginState = atom({
    key: "loginState",
    // 이 부분만 변경하면 됨
    default: {},
    effects_UNSTABLE: [persistAtom],
});
