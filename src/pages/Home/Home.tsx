import React from 'react';
import NavMenu from './components/NavMenu';
import UserBlock from './components/UserBlock';
import InfoTabs from './components/InfoTabs';
import styles from './sass/Home.module.scss';

const Home = (): JSX.Element => (
  <section className={styles.container}>
    <NavMenu />
    <div className={styles.secondBlockContainer}>
      <UserBlock name="Jerome Bell" lastActivity="2 Jan 2020 at 09:00 AM" />
      <InfoTabs />
    </div>
  </section>
);

export default Home;
