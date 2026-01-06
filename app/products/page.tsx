export const revalidate = 60;

export default async function Products() {
  const data = await fetch(
    'https://dummyjson.com/posts'
  ).then(res => res.json());

  return (
    <div>
      <h1>Products – Hybrid Rendering (ISR)</h1>
      {data.posts.slice(0, 5).map((p: any) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
