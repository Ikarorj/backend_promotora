import {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import {
  loginService,
  forgotPasswordService,
} from "../services/auth.service";

export async function loginController(
  request: FastifyRequest,
  reply: FastifyReply
) {

  console.log(
    "📨 Requisição recebida do frontend"
  );

  const {
    email,
    password,
  } = request.body as {
    email: string;
    password: string;
  };

  try {

    console.log(
      "🔐 Tentando autenticar usuário..."
    );

    if (!email || !password) {

      return reply
        .status(400)
        .send({
          error:
            "Email e senha obrigatórios"
        });
    }

    const result =
      await loginService(
        email,
        password
      );

    console.log(
      "✅ Login realizado"
    );

    return reply
      .status(200)
      .send(result);

  } catch (error: any) {

    console.log(
      "❌ Erro de autenticação:",
      error.message
    );

    return reply
      .status(401)
      .send({
        error:
          error.message,
      });
  }
}

export async function
  forgotPasswordController(
    request: any,
    reply: any
  ) {

  try {

    const { email } =
      request.body;

    if (!email) {

      return reply
        .status(400)
        .send({
          error:
            "Email obrigatório"
        });
    }

    const response =
      await forgotPasswordService(
        email
      );

    return reply
      .status(200)
      .send(response);

  } catch (error: any) {

  console.log(
    "❌ Erro recuperação:",
    error.message
  );

  if (
    error.message
      .toLowerCase()
      .includes("rate limit")
  ) {

    return reply
      .status(429)
      .send({
        error:
          "Muitas tentativas. Aguarde alguns minutos."
      });
  }

  return reply
    .status(500)
    .send({
      error:
        error.message
    });
}}