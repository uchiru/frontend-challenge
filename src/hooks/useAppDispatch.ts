import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
