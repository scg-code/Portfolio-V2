import Link from "next/link";
import Image from "next/image";

const DarkLogo = () => {
  return (
    <Link href="/">
      <Image src="/dark-logo.png" width={150} height={94} priority alt="" />
    </Link>
  );
};

export default DarkLogo;
