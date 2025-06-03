
import styles from './styles.module.css'; // Assuming you have a CSS file for styles

export function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
}