import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../app/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
