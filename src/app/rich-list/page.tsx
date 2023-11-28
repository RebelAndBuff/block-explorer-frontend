

export default async function RichList() {
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
          <p className="text-xs italic text-slate-800">Current block  22343</p>
        </div>
      </div>
    </main>
  );
}
