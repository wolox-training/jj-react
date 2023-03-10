import styles from './styles.module.scss';
import logo from './assets/logo.svg';

interface Props {
  list: { title: string; author: string; id: number }[];
}

function BookList({ list }: Props) {
  const books = list.map(({ title, id, author }) => (
    <div className={styles.container} key={`item-${id}`}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <label className={styles.mainText}>Título:</label>
      <h1>{title}</h1>
      <label className={styles.mainText}>Autor:</label>
      <h2>{author}</h2>
    </div>
  ));
  return <>{books}</>;
}

export default BookList;
