import { userInformation } from "@/components/DataAction/DataHandle";
import ProfileEdit from "@/components/profileEdit/ProfileEdit";
import React from "react";
const EditPage = async () => {
  const user = await userInformation();
  return (
    <div>
      <ProfileEdit user={user} />
    </div>
  );
};

export default EditPage;
