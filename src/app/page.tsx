import { EpicReactSearch } from '@/components/01-epic-react-search/epic-react-search';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <EpicReactSearch />
      </main>
    </div>
  );
}
