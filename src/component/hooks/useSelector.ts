import { TypedUseSelectorHook, useSelector as useNavigateSelector } from "react-redux";

import store from "../../store/store";

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useNavigateSelector;
