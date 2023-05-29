import { Request, Response } from "express"
import { createTokenService } from "../services/login/createToken.service"

const createTokenController = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const reponse = await createTokenService({ email, password })

    return res.json(reponse)

}

export { createTokenController }