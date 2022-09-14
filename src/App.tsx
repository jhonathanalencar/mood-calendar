import { FaRegSadTear, FaRegMeh, FaRegLaughBeam, FaRegAngry, FaRegTired } from 'react-icons/fa';

import styles from './App.module.scss';
import { Calendar } from './components/Calendar';

export function App() {
  return (
    <main className={styles.container}>
      <div className={styles.calendar__heading}>
        <h1>Calendário de humor | 2022</h1>
        <strong >Como você está se sentindo?</strong>
        <span>Pinte os dias do mês baseado no seu humor naquele dia.</span>
      </div>
      <div className={styles.calendar__mood}>
        <span>Selecione seu humor: </span>
        <div className={styles.calendar__mood_options}>
          <button>
            <FaRegLaughBeam />
          </button>
          <button>
            <FaRegTired />
          </button>
          <button>
            <FaRegMeh />
          </button>
          <button>
            <FaRegAngry />
          </button>
          <button>
            <FaRegSadTear />
          </button>
        </div>
      </div>

      <Calendar />
    </main>
  )
}
