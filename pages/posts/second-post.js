import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="first-post">Testing first page</Link>
      </h2>
    </>
  );
}