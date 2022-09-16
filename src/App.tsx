import { Calendar } from './components/Calendar';
import { Moods } from './components/Moods';

import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.container}>
      <div className={styles.calendar__heading}>
        <h1>Calendário de humor | 2022</h1>
        <strong >Como você está se sentindo?</strong>
        <span>Pinte os dias do mês baseado no seu humor naquele dia.</span>
      </div>

      <Moods />

      <Calendar />
    </main>
  )
}
