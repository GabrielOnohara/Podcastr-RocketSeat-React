import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import styles from "./styles.module.scss";
export function Header(){

  const currentDate = format(
    new Date(), 'EEEEEE, d MMMM',
    { locale: ptBr, },
  );

  return (
    <header className={styles.headerContainer}>
      <a href="/">
      <img src="/logo.svg" alt="Podcastr logo"/>
      </a>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}