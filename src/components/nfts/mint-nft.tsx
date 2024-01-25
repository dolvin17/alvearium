import React, { useEffect, useState } from "react";
import FormButton from "../ui/form-button";
import FormInput from "../ui/form-input";
import CardLabel from "../ui/card-label";
import { getNftContract } from "../../utils/contracts";

const MintNft = () => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(!name);
  const contract = getNftContract();
  const publicAddress = localStorage.getItem("user");

  useEffect(() => {
    setDisabled(!name);
  }, [name]);

  const mintNFT = async () => {
    try {
      setDisabled(true);
      const gas = await contract.methods
        .mint(name)
        .estimateGas({ from: publicAddress });
      contract.methods
        .mint(name)
        .send({
          from: publicAddress,
          gas
        })
        .on("transactionHash", (hash: string) => {
          console.log("Transaction hash:", hash);
        })
        .then((receipt: any) => {
          setName("");
          console.log("Transaction receipt:", receipt);
        })
        .catch((error: any) => {
          setDisabled(false);
          console.error(error);
        });
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <div>
      <CardLabel leftHeader="Upload your NFT" />
      <FormInput
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        placeholder="NFT Name"
      />
      <FormButton onClick={mintNFT} disabled={!name || disabled}>
        Publish
      </FormButton>
    </div>
  );
};

export default MintNft;
