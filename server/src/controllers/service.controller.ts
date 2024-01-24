import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import config from "../config";
import { getRedirectUrlForService, validateService } from "../utilities/service.utility";
import { hrServiceCheck, hrUserInfo } from "../utilities/hr.utility";
import { createServiceTokenStore, findServiceTokenStore } from "../models/serviceTokenStore/serviceTokenStore.query";
import { JwtReqInterface } from "../interfaces/JwtReqInterface";

export async function redirectToService(req: JwtReqInterface, res: Response) {
  try {
    const user = req.user;
    const service = req.params.service;

    if (user && validateService(service)) {
      const checkAccess = await hrServiceCheck({ userId: user.id, service: service.toUpperCase() });

      if (checkAccess.auth) {
        const token = jwt.sign({ id: user.id, service, restaurantId: user.restaurantId }, config.JWT_SECRET, {
          expiresIn: "7d",
        });
        const store = await createServiceTokenStore(token);
        const url = await getRedirectUrlForService(service, store._id.toString());
        res.send({ status: "success", redirect: url });
      } else res.status(403).send({ message: "User does not have access to this service." });
    } else res.status(400).send({ message: "Invalid service." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export async function getTokenFromStore(req: Request, res: Response) {
  try {
    const code = req.params.code;
    const tokenStore = await findServiceTokenStore(code);
    if (tokenStore) {
      res.setHeader("Authorization", "Bearer " + tokenStore.token);
      res.send({ status: "success", auth: true });
    } else res.status(401).send({ status: "fail", auth: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export async function getUserInfoByToken(req: JwtReqInterface, res: Response) {
  try {
    const user = req.user;
    if (!user) return res.send({ message: 'Unauthorized.' });

    const userData = await hrUserInfo(user.id);
    res.send(userData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export function generateJwtTokenForClientApps(req: Request, res: Response) {
  const token = jwt.sign({ id: 0, service: "clientFacingApps", restaurantId: 0 }, config.JWT_SECRET, {});
  res.setHeader("Authorization", "Bearer " + token);
  res.send({ status: "success", token });
}
