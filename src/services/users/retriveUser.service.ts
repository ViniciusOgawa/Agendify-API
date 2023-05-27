import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors"
import { TUSerResponse } from "../../interfaces/users.interfaces"
import { userSchemaResponse } from "../../schemas/users.schema"


const retriveUserService = async (userId: string): Promise<TUSerResponse> => {

    const userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not exists", 404)
    }

    return userSchemaResponse.parse(user)

}

export { retriveUserService }