import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/products">Produtos</Link>
      <br />
      <Link href="/about">Sobre</Link>
    </div>
  );
}
