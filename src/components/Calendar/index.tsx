import { months } from "../../constants"
import { Month } from "../Month"

import styles from './styles.module.scss';

export function Calendar(){
  return(
    <div className={styles.calendars__wrapper}>
      {months.map((month, index) =>{
        return(
          <Month title={month.title} monthDays={month.days} key={month.title + index} />
        )
      })}
    </div>
  )
}