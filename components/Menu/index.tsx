
import { useState } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailabeThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailabeThemes>('dark')

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ){
        event.preventDefault();
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
        console.log('Clicado')
    }

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}><HouseIcon/></a>
            <a href="" className={styles.menuLink}><HistoryIcon/></a>
            <a href="" className={styles.menuLink}><SettingsIcon/></a>
            <a href="#" onClick={handleThemeChange} className={styles.menuLink}><SunIcon/></a>
        </nav>
    );
}
