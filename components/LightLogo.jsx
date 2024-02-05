import Link from "next/link";
import Image from "next/image";

const LightLogo = () => {
  return (
    <Link href="/">
      <Image src="/light-logo.png" width={150} height={94} priority alt="" />
    </Link>
  );
};

export default LightLogo;
