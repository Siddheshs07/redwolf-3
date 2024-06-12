import Image from "next/image";
import goOnTop from "/public/assets/images/deadpool-go-to-top-5.png";
import Link from "next/link";

const GoOnTop = () => {
  return (
    <div className="relative z-50 bottom-0 right-0">
      <Link href="/">
        <Image
          src={goOnTop}
          alt="goOnTop"
          width={75}
          height={75}
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default GoOnTop;
