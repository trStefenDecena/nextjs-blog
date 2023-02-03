import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Stefen Genoa Decena.</b> I'm a 4th year BS in Computer Science student, and currently I'm a dev intern at TwistResources. Nice to meet you!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <p>This link takes you to a sample project I made: <Link href="/posts/caesar">Caesar Cipher</Link>.</p>
      </section>
    </Layout>
  );
}