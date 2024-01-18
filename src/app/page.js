"use client";

import { useModal } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";

export default function Home() {
  const { isConnected, isConnecting, address } = useAccount();
  const { setOpen } = useModal();
  const { disconnect } = useDisconnect();

  if (isConnecting) return <div>Connecting...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {isConnected ? (
        <div>
          <p>Connected Wallet: {address}</p>
          <button
            className="bg-black px-4 py-2 rounded-md text-white"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="bg-black px-4 py-2 rounded-md text-white"
          onClick={() => setOpen(true)}
        >
          Open Modal
        </button>
      )}
    </div>
  );
}
