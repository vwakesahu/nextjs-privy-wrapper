interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

interface RpcUrls {
  http: string[];
  webSocket?: string[];
}

interface BlockExplorer {
  name: string;
  url: string;
}

export interface Chain {
  id: number;
  network: string;
  name: string;
  nativeCurrency: NativeCurrency;
  rpcUrls: {
    [key: string]: RpcUrls;
    default: RpcUrls;
    privyWalletOverride: RpcUrls;
  };
  blockExplorers: {
    default: BlockExplorer;
  };
}

interface ChainNames {
  inco: string;
}

export const chainsName: ChainNames = { inco: "Inco" };

export const incoNetwork: Chain = {
  id: 21097,
  network: "Rivest",
  name: "Rivest Testnet",
  nativeCurrency: {
    name: "INCO",
    symbol: "INCO",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://validator.rivest.inco.org"],
    },
    public: {
      http: ["https://validator.rivest.inco.org"],
    },
    privyWalletOverride: {
      http: ["https://validator.rivest.inco.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.rivest.inco.org",
    },
  },
};
