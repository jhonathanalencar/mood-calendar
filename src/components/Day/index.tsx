import { useState, ButtonHTMLAttributes } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";

interface DaysProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  day: number;
  isToday: boolean;
  isPreviousMonth: boolean;
}

export function Day({ day, isToday, isPreviousMonth, ...rest }: DaysProps){
  const { moodColor } = useGlobalContext();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');

  const isSameColor = moodColor === selectedMood;

  function handleColorDayWithCurrentMood(){
    if(!moodColor){ return; }
    
    if(isSelected && !isSameColor){
      setSelectedMood(moodColor);
    }else{
      setIsSelected(prev => !prev);
      setSelectedMood(moodColor);
    }
  }

  return(
    <button 
      type="button"
      onClick={handleColorDayWithCurrentMood}
      style={{
        backgroundColor: isSelected && !isPreviousMonth ? selectedMood : 'var(--gray-200)',
        borderColor: isSelected && !isPreviousMonth ? 'var(--gray-100)': '',
        outlineColor: isSelected && !isPreviousMonth ? 'var(--gray-100)': '',
      }}
      {...rest}
    >
      <span
        style={{color: isSelected && !isToday ? 'var(--gray-100)': ''}}
      >
        {String(day).padStart(2, '0')}
      </span>
    </button>
  )
}