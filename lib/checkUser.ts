import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

const checkUser = async () => {
  const user = await currentUser();
  //   console.log(user);

  //   check for current logged in clerk user
  if (!user) {
    return null;
  }

  //   check if user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  //   If not in database, create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};

export default checkUser;