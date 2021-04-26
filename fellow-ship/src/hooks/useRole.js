import { useEffect, useState } from "react";
import { store } from "../services/storage";

const useRole = (session) => {
  const [role, setRole] = useState();

  useEffect(() => {
    const { sessions } = JSON.parse(store.user);
    const [{ role }] = sessions.filter(({ id }) => id === session);
    setRole(role);
  }, []);

  return role;
};

export default useRole;
