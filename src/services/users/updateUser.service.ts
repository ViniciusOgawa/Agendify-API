import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUSerResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";
import bcrypt from "bcryptjs";

const updateUserService = async (
  userData: TUserUpdate,
  userId: string
): Promise<TUSerResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: userId,
  });

  let hashPassword = "";

  if (userData.password) {
    hashPassword = bcrypt.hashSync(userData.password, 10);
    userData.password = hashPassword;
  }

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updatedUser = userSchemaResponse.parse(user);

  return updatedUser;
};

export { updateUserService };
