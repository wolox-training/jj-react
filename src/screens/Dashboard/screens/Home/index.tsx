import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import woloxLogo from '../../../../assets/wolox-logo.png';
import LocalStorageService from '../../../../services/LocalStorageService';

import logo from './assets/logo.svg';
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

  return (
    <div className={styles.app}>
      <nav className="row middle space-around">
        <img src={woloxLogo} alt="woloxLogo" />
        <a href="/login" onClick={handleLogout}>
          Logout
        </a>
      </nav>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
      </header>
    </div>
  );
}

export default Home;
