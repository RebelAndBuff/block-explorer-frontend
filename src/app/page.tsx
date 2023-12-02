import CoinStats from "./_components/CoinStats";
import LatestBlocks from "./_components/LatestBlocks";
import BlockCount from "./_components/BlockCount";

export default async function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center">
      {/* Logo */}
      <div className="px-4 pt-8 pb-2 flex items-center lg:hidden">
        <img
          src="./freicoin-logo.png"
          className="mr-1 h-10 w-10"
          alt="freicoin logo"
        />
        <div>
          <p className="text-3xl italic text-gray-600 font-semibold">
            Freicoin
          </p>
          <p className="text-xs italic text-slate-800">
            Current block <BlockCount />
          </p>
        </div>
      </div>

      <div className="hidden lg:px-8 lg:pt-8 lg:pb-4 lg:w-full lg:flex lg:justify-between lg:items-center">
        <h2 className="text-2xl text-slate-800 font-medium">
          Block height: <BlockCount />
        </h2>
        <button
          type="button"
          title="refresh stats"
          className="px-8 py-1 rounded text-sm border border-slate-300"
        >
          Refresh
        </button>
      </div>

      {/* Coin Stats section */}
      <CoinStats />

      {/* Latest Blocks section */}
      <LatestBlocks />
    </main>
  );
}
