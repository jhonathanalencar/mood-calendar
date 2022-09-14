import { weekDays } from '../../constants';
import { convertNumberToArrayOfDays } from '../../utils/convertNumberToArrayOfDays';

import styles from './styles.module.scss';

interface monthProps{
  monthId: number;
  title: string;
  monthDays: number;
}

export function Month({ title, monthDays, monthId }: monthProps){
  const days = convertNumberToArrayOfDays(monthDays, monthId);
  const firstDayIndex = days.findIndex((day) => day === 1);

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
          return(
            <button 
              key={day + Math.random() * index}
              type="button"
              className={firstDayIndex > index ? styles.previous : ''} 
            >
              <span>{day}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}