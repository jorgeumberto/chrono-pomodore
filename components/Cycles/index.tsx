import styles from './styles.module.css';
export function Cycles(){
    return (
        <div className={styles.cycles}>
        <span>Ciclos</span>
        <div className={styles.cyclesDots}>
            <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
            <span className={`${styles.cycleDot} ${styles.shrortBreak}`}></span>
            <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
            <span className={`${styles.cycleDot} ${styles.longBreak}`}></span>
            <span className={`${styles.cycleDot} ${styles.shrortBreak}`}></span>
            <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
            <span className={`${styles.cycleDot} ${styles.shrortBreak}`}></span>
            <span className={`${styles.cycleDot} ${styles.longBreak}`}></span>
        </div>
        </div>
    );
}