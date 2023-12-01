type Props = {
  type: "currency" | "stat";
  title: string;
  data: any;
};

export default async function CoinStatCard({ title, data, type }: Props) {
  return (
    <li className="p-2 min-w-[9rem] h-20 flex-none rounded-md shadow-sm border">
      <div className="flex items-center justify-between">
        <p className="text-slate-800">{title}</p>
      </div>
      <div className="mt-1">
        <p className="">{data}</p>
      </div>
    </li>
  );
}
