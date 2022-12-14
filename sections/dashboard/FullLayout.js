import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="flex">
        {/******** Sidebar **********/}
        <aside className={`shadow`}>
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="">
          {/********header**********/}
          <Header />

          {/********Middle Content**********/}
          <div className="w-full ">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
