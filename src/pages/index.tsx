import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aegis RWA Dashboard</title>
      </Head>
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          Tokenize Real-World Assets <br/>
          <span className="text-aegis-brand">Securely on Stellar.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          An institutional-grade compliance and tokenization engine utilizing Soroban smart contracts for seamless, trustless B2B trading.
        </p>
        <div className="flex space-x-4 mt-8">
          <Link href="/portfolio" className="bg-aegis-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition shadow-sm">
            Launch App
          </Link>
          <a href="https://github.com/AegisRWA" target="_blank" rel="noreferrer" className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition shadow-sm">
            View GitHub
          </a>
        </div>
      </div>
    </>
  );
}