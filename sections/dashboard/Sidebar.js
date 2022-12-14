import Link from "next/link";

const Sidebar = ({ showMobilemenu }) => {
  return (
    <div className="py-24">
      <div className="">
        <h1>logo</h1>
      </div>
      <div className="pt-4 mt-2">
        <h2>sidebar</h2>
        <Link href={"/"}>home</Link>
        <Link href={"/dashboard/profile"}>profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
