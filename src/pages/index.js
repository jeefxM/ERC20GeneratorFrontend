import ERC20Generator from "./components/ERC20Generator";
import ConnectMetamask from "./components/connectMetamask";
import { useState } from "react";

export default function Home() {
  const [activeAccount, setActiveAccount] = useState(null);
  const [balance, setBalance] = useState("");
  const [chainId, setChainId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  return (
    <div className="flex justify-center">
      <ConnectMetamask
        activeAccount={activeAccount}
        setActiveAccount={setActiveAccount}
        setBalance={setBalance}
        setChainId={setChainId}
      />
      <ERC20Generator
        activeAccount={activeAccount}
        chainId={chainId}
        balance={balance}
        setContractAddress={setContractAddress}
        contractAddress={contractAddress}
        setTransactionHash={setTransactionHash}
        transactionHash={transactionHash}
      />
    </div>
  );
}
