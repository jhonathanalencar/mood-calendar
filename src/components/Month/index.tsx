import { weekDays } from '../../constants';
import { 
  convertNumberToArrayOfDays, 
  verifyTodayDate 
} from '../../utils';

import styles from './styles.module.scss';

interface monthProps{
  monthId: number;
  title: string;
  monthDays: number;
}

export function Month({ title, monthDays, monthId }: monthProps){
  const days = convertNumberToArrayOfDays(monthDays, monthId);
  const firstDayIndex = days.findIndex((day) => day === 1);
  
  function cn(...classes: string[]){
    return classes.filter(Boolean).join(' ');
  }

  return(
    <div className={styles.calendar}>
      <header>
        <strong>{title}</strong>
        <div className={styles.days}>
          {weekDays.map((day, index) =>{
            return (
              <span key={day + index}>{day}</span>
            )
          })}
        </div>
      </header>
      <div className={styles.month}>
        {days.map((day, index) =>{
          const isToday = verifyTodayDate(monthId, day);

          return(
            <button 
              key={day + Math.random() * index}
              type="button"
              className={cn(
                firstDayIndex > index ? styles.previous : '',
                isToday ? styles.today : ''
              )} 
            >
              <span>{String(day).padStart(2, '0')}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}