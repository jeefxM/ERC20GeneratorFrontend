import React from "react";

function UserGuide() {
  return (
    <div className=" leading-10 mx-10">
      <p className="text-2xl font-semibold max-md:text-lg max-sm:text-base">
        Dapp Guide:
      </p>
      <ul>
        <li>Token name field: Input the desired name of the Token</li>
        <li>Symobl field: Input the desiered symbol of the Token</li>
        <li>
          Total supply field: Input the desiered total supply of the Token
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default UserGuide;
