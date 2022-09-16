import { ButtonHTMLAttributes, ReactNode } from "react"
import { moodColors } from "../../constants";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { cn } from "../../utils";

type MoodColorsProps = keyof typeof moodColors;

interface MoodProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  mood: string;
  color: MoodColorsProps;
  icon: ReactNode;
}

import styles from './styles.module.scss';

export function Mood({ mood, color, icon, ...rest }: MoodProps){
  const { changeMoodColor, moodColor } = useGlobalContext();

  function handleChangeMoodColor(color: string){
    changeMoodColor(color);
  }

  return(
    <button
      type="button"
      title={mood}
      className={cn(
        `${styles.mood}`, styles[`${color}`],
        moodColor === moodColors[color] ? styles.selectedMood : ''
      )}
      onClick={() => handleChangeMoodColor(moodColors[color])}
      {...rest}
    >
      {icon}
    </button>
  )
}