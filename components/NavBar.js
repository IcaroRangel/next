import Link from 'next/link';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/products">Produtos</Link>
      <br />
      <Link href="/about">Sobre</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/products/pants">Calça</Link>
    </div>
  );
};

export default NavBar;
