import { useContext } from "react";
import { MoodContext } from "../contexts/MoodContext";

export function useGlobalContext(){
  return useContext(MoodContext);
}