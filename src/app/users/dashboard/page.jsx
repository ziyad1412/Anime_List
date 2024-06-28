import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Page;
