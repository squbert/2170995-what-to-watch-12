import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// components
import UserBlock from '../../components/UserBlock';
import MainLogo from '../../components/logo/Main-logo';
import Footer from '../../components/Footer';

// styles
import styles from './not-found-page.module.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <section className={styles.notFound}>
        <Helmet>
          <title>WTW Page not found</title>
        </Helmet>
        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <MainLogo />
          <UserBlock />
        </header>
        <div className={styles.notFoundTitleWrapper}>
          <h1>Page not found</h1>
          <h2 className={styles.notFoundTitle}>404</h2>
          <Link className={styles.notFoundLink} to='/'>
            Go to main page
          </Link>
        </div>
      </section>
      <div className='page-content'>
        <Footer />
      </div>
    </>
  );
}
