import meme from "../../assets/meme.jpeg";
import Image from "next/image";

export default function Sec3() {
  return (
    <div className="sec3-container">
      <div className="img-box">
        <Image src={meme} />
      </div>
      <h1>3</h1>
    </div>
  );
}
