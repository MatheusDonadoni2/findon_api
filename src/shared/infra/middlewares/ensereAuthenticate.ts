import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(301).json({
            mensage: "Token missing"
        })
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "f1443caede92a8gGe26d6d1edeb0b89c") as IPayLoad
        request.id_user = sub;
        next();
    } catch (error) {
        return response.status(401).json({ mensage: "Invalid token" });
    }

}