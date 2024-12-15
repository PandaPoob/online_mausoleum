export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(params);

  return <div>test pls</div>;
}
