type Props = {
  type: "currency" | "stat";
  title: string;
  data: any;
};

export default async function CoinStatCard({ title, data, type }: Props) {
  return (
    <li className="p-2 min-w-[9rem] h-20 flex flex-col gap-0.5 flex-none rounded-md shadow-sm border border-slate-300">
      <p className="text-slate-700">{title}</p>
      <span className="">{data}</span>
    </li>
  );
}
