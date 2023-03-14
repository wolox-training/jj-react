import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { getBooksById } from '../../../../services/BooksServices';

import bookDetailsImage from './assets/bookDetails.png';
import styles from './styles.module.scss';

function Details() {
  const { id } = useParams();
  let bookDetails: any = {};
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ['bookById', id],
    queryFn: ({ queryKey }) => getBooksById(queryKey[1])
  });

  if (isSuccess) {
    bookDetails = data.data;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <button className={styles.back} onClick={goBack} type="button">
        🔙
      </button>
      <div className={`row ${styles.container}`}>
        <img src={bookDetailsImage} alt="bookDetails" />
        <div className="column space-around">
          <div className={`row ${styles.content}`}>
            <h1 className={styles.title}>{bookDetails.title}</h1>
            <h2 className={styles.genre}>{`(${bookDetails.genre})`}</h2>
          </div>
          <div className="row">
            <label className={styles.label}>Autor del Libro:</label>
            <h3 className={styles.text}>{bookDetails.author}</h3>
          </div>
          <div className="row">
            <label className={styles.label}>Editorial:</label>
            <h3 className={styles.text}>Panamericana</h3>
          </div>
          <div className="row">
            <label className={styles.label}>Año de publicación:</label>
            <h3 className={styles.text}>{bookDetails.year}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
