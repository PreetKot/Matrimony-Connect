import Lottie from "lottie-react";
import LottieLodingMN from "../assets/lottie/Loding.json";

const LottieLoding = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-50">
  <Lottie
    animationData={LottieLodingMN}
    loop
    className="absolute inset-0 h-full w-full object-cover"
  />
</div>

    );
};

export default LottieLoding;