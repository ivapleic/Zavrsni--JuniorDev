import { createContext } from "react";

const UserRoleContext = createContext({
  userRole: "user",
  setUserRole: () => {},
});

export default UserRoleContext;
