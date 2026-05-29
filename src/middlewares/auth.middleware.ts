import {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import { supabase }
from "../config/supabase/client";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {

  try {

    console.log(
      "🛡️ Middleware de autenticação iniciado"
    );

    const authHeader =
      request.headers.authorization;

    // sem token
    if (!authHeader) {

      console.log(
        "❌ Token não enviado"
      );

      return reply
        .status(401)
        .send({
          error:
            "Token não fornecido",
        });
    }

    // Bearer TOKEN
    const token =
      authHeader.split(" ")[1];

    if (!token) {

      console.log(
        "❌ Formato inválido"
      );

      return reply
        .status(401)
        .send({
          error:
            "Token inválido",
        });
    }

    console.log(
      "🔍 Validando token no Supabase..."
    );

    const {
      data,
      error,
    } = await supabase.auth.getUser(
      token
    );

    if (error || !data.user) {

      console.log(
        "❌ Token rejeitado pelo Supabase"
      );

      return reply
        .status(401)
        .send({
          error:
            "Não autorizado",
        });
    }

    console.log(
      "✅ Usuário autenticado:",
      data.user.email
    );

    // adiciona usuário no request
    (request as any).user = data.user;

  } catch (err) {

    console.log(
      "💥 Erro interno middleware:",
      err
    );

    return reply
      .status(500)
      .send({
        error:
          "Erro interno de autenticação",
      });
  }
}