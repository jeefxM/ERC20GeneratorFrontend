import React from "react";

function UserGuide() {
  return (
    <div className=" leading-10 mx-10">
      <p className="text-2xl font-semibold max-md:text-lg max-sm:text-base">
        Dapp Guide:
      </p>
      <ul className="list-disc">
        <li>Token name field: Input the desired name of the Token</li>
        <li>Symobl field: Input the desiered symbol of the Token</li>
        <li>
          Total supply field: Input the desiered total supply of the Token
        </li>
        <li>
          After the deployment: open up the metamask extansion Metamask | Assets
          | Import tokens | Insert address | Add custom token
        </li>
      </ul>
    </div>
  );
}

export default UserGuide;
