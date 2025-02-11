import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-6 p-8 rounded-lg border border-black/[.08] dark:border-white/[.145] animate-pulse">
        <h1 className="text-2xl font-bold mb-8">Wallet Details</h1>
        <div className="space-y-4">
          {["Wallet Address", "Wallet Status", "Signer Status"].map((label) => (
            <div key={label} className="space-y-2">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                {label}
              </h2>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
