import { months } from "../../constants"
import { Month } from "../Month"

import styles from './styles.module.scss';

export function Calendar(){
  return(
    <div className={styles.calendars__wrapper}>
      {months.map((month, index) =>{
        return(
          <Month 
            key={month.title + index}
            monthId={month.id}
            title={month.title} 
            monthDays={month.days} 
          />
        )
      })}
    </div>
  )
}