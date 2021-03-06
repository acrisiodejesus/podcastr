import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';
import { PlayerContext, PlayerContextPorvider } from '../contexts/PlayerContext';
import styles from '../styles/app.module.scss';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextPorvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />

      </div>
    </PlayerContextPorvider>

  )
}

export default MyApp
