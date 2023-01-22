import React from "react";
import { Button } from "@mui/material";
import { ethers } from "ethers/lib";
import { useEffect } from "react";

const getEthereumObject = () => window.ethereum;

const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      alert("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Connects the user to web3 with metamask
function ConnectMetamask(props) {
  async function connectMetamask() {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const address = await provider.getSigner().getAddress();
      props.setActiveAccount(address);

      const balance = await provider.getBalance(address);
      const balanceInEther = ethers.utils.formatEther(balance);
      props.setBalance(balanceInEther);

      const chainId = provider.network.name;
      props.setChainId(chainId);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  }

  const getAccount = async () => {
    //Checks if the account is already connected
    const account = await findMetaMaskAccount();
    if (account !== null) {
      connectMetamask();
    }
  };

  //Runs useEffect everytime activeAccount changes
  useEffect(() => {
    getAccount();
  }, [props.activeAccount]);

  return (
    <div>
      {!props.activeAccount && (
        <Button
          variant="contained"
          className="absolute bg-orange-400 h-10 right-2 top-2"
          style={{ backgroundColor: "rgb(251 146 60 / var(--tw-bg-opacity))" }}
          onClick={connectMetamask}
        >
          Log in with metamask
        </Button>
      )}
    </div>
  );
}

export default ConnectMetamask;
