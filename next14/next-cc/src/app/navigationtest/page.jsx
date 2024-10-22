"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  console.log(q);

  console.log(pathname);

  const HandleClick = () => {
    console.log("clicked");
    router.push("/");
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here{" "}
      </Link>
      <button onClick={HandleClick}>Write and ReDirect</button>
    </div>
  );
};

export default NavigationTest;
