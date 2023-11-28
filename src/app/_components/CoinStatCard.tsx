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
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.43384 11.0714H9.42313C9.52908 11.0709 9.63252 11.0297 9.72037 10.9532C9.80821 10.8767 9.87653 10.7683 9.91667 10.6416C9.9568 10.515 9.96697 10.3758 9.94587 10.2417C9.92477 10.1076 9.87335 9.98456 9.79813 9.88819L6.80884 6.02704C6.75904 5.96218 6.69979 5.9107 6.63451 5.87557C6.56923 5.84044 6.49921 5.82236 6.42849 5.82236C6.35777 5.82236 6.28774 5.84044 6.22246 5.87557C6.15718 5.9107 6.09793 5.96218 6.04813 6.02704L3.05884 9.88819C2.98362 9.98456 2.9322 10.1076 2.91111 10.2417C2.89001 10.3758 2.90017 10.515 2.94031 10.6416C2.98045 10.7683 3.04876 10.8767 3.13661 10.9532C3.22446 11.0297 3.32789 11.0709 3.43384 11.0714Z"
            fill="#21CA12"
          />
        </svg>
      </div>
      <div className="mt-1">
        {/* <p className="text-green-700">${priceInUSD}</p> */}
        <p className="text-xs text-slate-400 font-light">
          +1000000% from yesterday
        </p>
      </div>
    </li>
  );
}
