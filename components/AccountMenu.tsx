import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if(!visible) {
        return null;
    }
    return (
      <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap-3"> 

        </div>
      </div>
      )
}
export default AccountMenu;