export default function Cars({ params }: { params: { slug: string } }) {
  console.log("balls");
  return <h1>Car Page {params.slug}</h1>;
}
