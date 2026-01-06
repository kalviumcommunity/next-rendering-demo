export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const data = await fetch(
    'https://dummyjson.com/posts/1',
    { cache: 'no-store' }
  ).then(res => res.json());

  return (
    <div>
      <h1>Dashboard – Dynamic Rendering (SSR)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
