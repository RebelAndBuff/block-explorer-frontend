async function getBlockcount() {
  const res = await fetch("https://blockspotter.com/api/rpc/getblockcount", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlockCount() {
  const { blockcount } = await getBlockcount();

  return <span>{blockcount}</span>;
}
