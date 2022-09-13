import { FaRegSadTear, FaRegMeh, FaRegLaughBeam, FaRegSmile, FaRegAngry, FaRegTired } from 'react-icons/fa';

import styles from './App.module.scss';

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
      <div className={styles.calendars__wrapper}>
        <div className={styles.calendar}>
          <header>
            <strong>January</strong>
            <div className={styles.days}>
              <span>Dom</span>
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
              <span>Sab</span>
            </div>
          </header>
          <div className={styles.month}>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
          </div>
        </div>
        <div className={styles.calendar}>
          <header>
            <strong>January</strong>
            <div className={styles.days}>
              <span>Dom</span>
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
              <span>Sab</span>
            </div>
          </header>
          <div className={styles.month}>
            <button>
              <span>1</span>
            </button>
            <button>
              <span>2</span>
            </button>
            <button>
              <span>3</span>
            </button>
            <button>
              <span>4</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
          </div>
        </div>
        <div className={styles.calendar}>
          <header>
            <strong>January</strong>
            <div className={styles.days}>
              <span>Dom</span>
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
              <span>Sab</span>
            </div>
          </header>
          <div className={styles.month}>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>31</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
            <button>
              <span>21</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
