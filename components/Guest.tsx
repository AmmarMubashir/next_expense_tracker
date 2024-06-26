import { SignInButton } from "@clerk/nextjs";

const Guest = async () => {
  return (
    <div className="guest">
      <h1>Welcome</h1>
      <p>Please Sign In to manage your transaction</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
