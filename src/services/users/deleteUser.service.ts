import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"

const deleteUserService = async (idUser: string): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            id: idUser
        }
    });

    await userRepository.softRemove(user!)

}

export { deleteUserService }