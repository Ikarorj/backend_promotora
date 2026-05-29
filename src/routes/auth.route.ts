import { FastifyInstance }
from "fastify";

import {
  loginController,
  forgotPasswordController,
} from "../controllers/auth.controller";

import {
  authMiddleware,
} from "../middlewares/auth.middleware";

export async function authRoutes(
  app: FastifyInstance
) {

  // LOGIN
  app.post(
    "/login",
    loginController
  );

  // RECURPERAÇÃO DE SENHA
  app.post(
  "/forgot-password",
  forgotPasswordController
);

  // TESTE DE ROTA PROTEGIDA
  app.get(
    "/profile",
    {
      preHandler:
        authMiddleware,
    },

    async (request, reply) => {

      return reply.send({

        message:
          "Rota protegida funcionando",

        user:
          (request as any)
            .authUser,
      });
    }
  );
}

  