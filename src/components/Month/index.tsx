import { weekDays } from '../../constants';
import { convertNumberToArrayOfDays } from '../../utils/convertNumberToArrayOfDays';

import styles from './styles.module.scss';

interface monthProps{
  title: string;
  monthDays: number;
  startWeekDay?: Date;
}

export function Month({ title, monthDays }: monthProps){
  const days = convertNumberToArrayOfDays(monthDays);

  console.log(days)

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
            <button type="button" key={day + index}>
              <span>{day}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}