import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import woloxLogo from '../../../../assets/wolox-logo.png';
import LocalStorageService from '../../../../services/LocalStorageService';
import { getBooks } from '../../../../services/BooksServices';
import BookList from '../../../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    function isAuthorized() {
      const tokenId = LocalStorageService.getValue('Token');

      if (!tokenId) {
        navigate('/login');
      }
    }
    isAuthorized();
  });

  const handleLogout = () => {
    LocalStorageService.removeValue('Token');
    navigate('/login');
  };

  const listBooks: any[] = [];

  const { status, data } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'success') {
    listBooks.push(data.data);
  }

  return (
    <>
      <nav className={`row middle space-around ${styles.appNav}`}>
        <img src={woloxLogo} alt="woloxLogo" />
        <a href="/login" onClick={handleLogout}>
          Logout
        </a>
      </nav>
      <header className="row wrap">
        <BookList list={listBooks[0]} />
      </header>
    </>
  );
}

export default Home;
