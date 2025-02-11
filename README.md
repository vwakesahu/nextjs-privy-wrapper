# Next.js Privy Integration

This project demonstrates integration of Privy authentication with Next.js 15, providing a simple way to handle wallet connections.

## Features

- Wallet connection using Privy
- Wallet state management
- TypeScript support
- Loading states and error handling

## Prerequisites

- Node.js
- npm or yarn
- A Privy account and App ID

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vwakesahu/nextjs-privy-wrapper.git
cd nextjs-privy-wrapper
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Privy App ID:

```
NEXT_PUBLIC_PRIVY_APP_ID=your-privy-app-id
```

A sample environment file `.env.sample` is provided for reference.

## Project Structure

```
src/
  ├── privy/
  │   ├── privyProvider.tsx    # Privy provider wrapper
  │   ├── walletContext.tsx    # Wrapper made on top of Privy to simplify things
  │   ├── config.ts           # Privy configuration
  │   └── chains.ts           # Chain configuration
  ├── app/
  │   ├── layout.tsx          # Root layout with hydration handling
  │   └── page.tsx            # Main page component
  └── components/
      └── ClientWrapper.tsx   # Client-side wallet UI component
```

## Usage

1. Import and use the PrivyProvider in your app:

```typescript
import PrivyWrapper from "@/privy/privyProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
      >
        <PrivyWrapper>{children}</PrivyWrapper>
      </body>
    </html>
  );
}
```

2. Access wallet data using the context:

```typescript
import { useWalletContext } from "./privy/walletContext";

function YourComponent() {
  const { signer, w0, address, isLoading, error } = useWalletContext();
  // Use wallet data...
}
```

### Checking if a User is Connected

To determine if a user has connected their wallet, use:

```typescript
import { usePrivy } from "@privy-io/react-auth";

function WalletStatus() {
  const { logout, authenticated, login } = usePrivy();

  return (
    <div>
      {authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}
```

## Configuration

### Privy Configuration

The Privy configuration is set in `src/privy/config.ts`:

```typescript
export const privyConfig = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
  config: {
    // ... configuration options
  },
};
```

### Chain Configuration

Chain configuration for the network is defined in `src/privy/chains.ts`:

```typescript
export const incoNetwork = {
  id: 21097,
  network: "Rivest",
  // ... other chain configuration
};
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Acknowledgments

- [Privy Documentation](https://docs.privy.io/)
- [Next.js Documentation](https://nextjs.org/docs)

