import { User } from "firebase/auth";
import { createContext } from "react";


type UserContext = {
  user: User | null | undefined
}
export const UserContext = createContext<UserContext>({ user: null })