"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useWallets, ConnectedWallet } from "@privy-io/react-auth";
import { ethers } from "ethers";

interface WalletDetails {
  signer: ethers.Signer | null;
  w0: ConnectedWallet | null;
  address: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialWalletState: WalletDetails = {
  signer: null,
  w0: null,
  address: null,
  isLoading: true,
  error: null,
};

const WalletContext = createContext<WalletDetails>(initialWalletState);

export const useWalletContext = (): WalletDetails => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalletContext must be used within a WalletProvider");
  }
  return context;
};

interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const { wallets } = useWallets();
  const [mounted, setMounted] = useState(false);
  const [walletDetails, setWalletDetails] =
    useState<WalletDetails>(initialWalletState);

  // Handle mounting state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initializeWallet = async () => {
      if (wallets.length > 0) {
        const w0 = wallets[0];
        try {
          const provider = await w0.getEthereumProvider();
          const ethersProvider = new ethers.providers.Web3Provider(provider);
          const signer = ethersProvider.getSigner();
          const address = w0.address;

          setWalletDetails({
            signer,
            w0,
            address,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          console.error("Error initializing wallet:", error);
          setWalletDetails((prev) => ({
            ...prev,
            isLoading: false,
            error: "Failed to initialize wallet",
          }));
        }
      } else {
        setWalletDetails((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    };

    initializeWallet();
  }, [wallets, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <WalletContext.Provider value={walletDetails}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
