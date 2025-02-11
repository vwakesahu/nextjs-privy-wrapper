import { Chain } from "./chains";
import { incoNetwork } from "./chains";

type WalletType = "metamask" | "detected_wallets" | "rainbow";
type LoginMethod = "wallet";
type EmbeddedWalletCreation = "users-without-wallets";
type ThemeType = "dark" | "light";

interface AppearanceConfig {
  walletList: WalletType[];
  theme: ThemeType;
}

interface PrivyConfigOptions {
  logo: string;
  appearance: AppearanceConfig;
  loginMethods: LoginMethod[];
  defaultChain: Chain;
  supportedChains: Chain[];
  embeddedWallets: {
    createOnLogin: EmbeddedWalletCreation;
  };
}

interface PrivyConfiguration {
  appId: string;
  config: PrivyConfigOptions;
}

// you will have to replace this with your own Privy App ID or use an .env file inside the root of your project
const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;

export const privyConfig: PrivyConfiguration = {
  appId: PRIVY_APP_ID,
  config: {
    logo: "https://your.logo.url",
    appearance: {
      walletList: ["metamask", "detected_wallets", "rainbow"],
      theme: "dark",
    },
    loginMethods: ["wallet"],
    defaultChain: incoNetwork,
    supportedChains: [incoNetwork],
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
    },
  },
};
