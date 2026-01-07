 
"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./backLink.scss";
const BackLink = ({ backLinkName }) => {
  const router = useRouter();
  return (
    <div className="backLink-container">
      <div className="backlink" onClick={() => router.back()}>
        <IoIosArrowRoundBack size={25} />
        <span>{backLinkName}</span>
      </div>
    </div>
  );
};

export default BackLink;
