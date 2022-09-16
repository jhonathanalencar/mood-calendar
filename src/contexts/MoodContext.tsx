import { createContext, ReactNode, useState } from "react";

interface MoodContextData{
  moodColor: string;
  changeMoodColor: (color: string) => void;
}

interface MoodContextProviderProps{
  children: ReactNode;
}

export const MoodContext = createContext({} as MoodContextData);

export function MoodContextProvider({ children }: MoodContextProviderProps){
  const [moodColor, setMoodColor] = useState('');

  function changeMoodColor(color: string){
    setMoodColor(color);
  }

  return(
    <MoodContext.Provider value={{
      moodColor,
      changeMoodColor,
    }}>
      {children}
    </MoodContext.Provider>
  )
}