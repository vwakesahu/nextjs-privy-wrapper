"use client";
import React, { ReactNode } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { privyConfig } from "./config";
import WalletProvider from "./walletContext";

interface PrivyWrapperProps {
  children: ReactNode;
}

const PrivyWrapper = ({ children }: PrivyWrapperProps): React.ReactElement => {
  return (
    <PrivyProvider appId={privyConfig.appId} config={privyConfig.config}>
      <WalletProvider>{children}</WalletProvider>
    </PrivyProvider>
  );
};

export default PrivyWrapper;
