import { userInformation } from "@/utils/LocalStore";

export const UserInfo = async () => {
  const user = await userInformation();
  return user;
};
