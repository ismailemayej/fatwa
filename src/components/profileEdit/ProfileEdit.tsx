import { Button, Input } from "@nextui-org/react";

const ProfileEdit = ({ user }: any) => {
  return (
    <form className="flex-col my-2 lg:mt-8 lg:mx-auto lg:w-3/5 mx-3">
      <Input type="text" defaultValue={user?.name} />
      <Input type="text" defaultValue={user?.phone} className="my-2" />
      <Input type="text" defaultValue={user?.email} />
      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default ProfileEdit;
