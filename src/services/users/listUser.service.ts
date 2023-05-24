import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserArray } from "../../interfaces/users.interfaces";
import { userSchemaArray } from "../../schemas/users.schema";

const listUserService = async (): Promise<TUserArray> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUsers: Array<User> = await userRepository.find()

    const users = userSchemaArray.parse(findUsers);

    return users;

};

export { listUserService }