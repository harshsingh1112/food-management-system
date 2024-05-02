import { useContext } from "react";
import { MyCreatedAuth } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const authHook = useContext(MyCreatedAuth)
    return authHook
};

export default useAuth;