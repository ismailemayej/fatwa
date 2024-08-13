import { useForm, SubmitHandler } from "react-hook-form";
type TInputs = {
  name: string;
  email: string;
  phone: number;
};
const ProfileEdit = ({ user }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true })}
        defaultValue={user?.name}
      />
      {errors.name && <span>This field is required</span>}
      <input
        {...register("email", { required: true })}
        defaultValue={user?.email}
      />
      {errors.email && <span>This field is required</span>}
      <input
        {...register("phone", { required: true })}
        defaultValue={user?.phone}
      />
      {errors.phone && <span>This field is required</span>}
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileEdit;
