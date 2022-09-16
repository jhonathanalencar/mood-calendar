import { FaRegSadTear, FaRegMeh, FaRegLaughBeam, FaRegAngry, FaRegTired } from 'react-icons/fa';
import { Mood } from '../Mood';

import styles from './styles.module.scss';

export function Moods(){
  return(
    <div className={styles.calendar__mood}>
      <span>Selecione seu humor: </span>
      <div className={styles.calendar__mood_options}>
        <Mood 
          mood="Feliz"
          color="green"
          icon={<FaRegLaughBeam />}
        />

        <Mood 
          mood="Cansado"
          color="yellow"
          icon={<FaRegTired />}
        />

        <Mood 
          mood="Normal"
          color="purple"
          icon={<FaRegMeh />}
        />

        <Mood 
          mood="Bravo"
          color="red"
          icon={<FaRegAngry />}
        />

        <Mood 
          mood="Triste"
          color="blue"
          icon={<FaRegSadTear />}
        />
      </div>
    </div>
  )
}