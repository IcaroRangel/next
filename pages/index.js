import styles from '../styles/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Home</title>
        <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
        <meta name="description" content="Encontre a melhor roupa"></meta>
      </Head>
      <h1 className={styles.title}>Hello World</h1>
    </>
  );
}
