import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href="/products">Produtos</Link>
      <br />
      <Link href="/about">Sobre</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default NavBar;
