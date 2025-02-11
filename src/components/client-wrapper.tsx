"use client";
import { useWalletContext } from "@/privy/walletContext";
import { WalletDetailsCard } from "./wallet-details-card";
import Loader from "./loader";
import { usePrivy } from "@privy-io/react-auth";

export default function ClientWrapper() {
  const { logout, authenticated, login } = usePrivy();
  const { signer, w0, address, isLoading, error } = useWalletContext();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full space-y-6 p-8 rounded-lg border border-black/[.08] dark:border-white/[.145]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please login to view your wallet details
            </p>
            <button
              onClick={login}
              className="px-6 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-6 p-8 rounded-lg border border-black/[.08] dark:border-white/[.145]">
        <div className="w-full flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Wallet Details</h1>
          <button
            onClick={logout}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4">
          <WalletDetailsCard
            label="Wallet Address"
            value={address || "No wallet connected"}
            className="break-all"
          />

          <WalletDetailsCard
            label="Wallet Status"
            value={w0 ? "Connected" : "Not Connected"}
          />

          <WalletDetailsCard
            label="Signer Status"
            value={signer ? "Available" : "Not Available"}
          />

          {w0 && (
            <WalletDetailsCard
              label="Wallet Type"
              value={w0.walletClientType}
            />
          )}
        </div>
      </div>
    </div>
  );
}
