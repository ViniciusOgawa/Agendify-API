import { hash } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { TUSerResponse, TUserRequest } from "../../interfaces/users.interfaces"
import { userSchemaResponse } from "../../schemas/users.schema"


const createUserService = async ({ name, email, password, phoneNumber }: TUserRequest): Promise<TUSerResponse> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber
    })

    await userRepository.save(user)

    return userSchemaResponse.parse(user)

}

export { createUserService }