import { useState } from 'react';
import { weekDays } from '../../constants';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { 
  cn,
  convertNumberToArrayOfDays, 
  verifyTodayDate 
} from '../../utils';
import { Day } from '../Day';

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
          const isToday = verifyTodayDate(monthId, day);
          const isPreviousMonth = firstDayIndex > index

          return(
            <Day 
              key={day + Math.random() * index}
              day={day}
              title={isToday ? 'Hoje' : ''}
              isToday={isToday}
              isPreviousMonth={isPreviousMonth}
              className={cn(
                isPreviousMonth ? styles.previous : '',
                isToday ? styles.today : ''
              )} 
              disabled={isPreviousMonth}
            />
          )
        })}
      </div>
    </div>
  )
}