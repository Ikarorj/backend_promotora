import {
  describe,
  expect,
  it,
} from "@jest/globals";

import fastify from "fastify";

import {
  authRoutes,
} from "../../routes/auth.route";

describe(
  "Auth Routes",
  () => {

    const app = fastify();

    app.register(authRoutes);

    it(
      "deve realizar login com sucesso",
      async () => {

        const response =
          await app.inject({
            method: "POST",
            url: "/login",

            payload: {
              email: "admin@gmail.com",
              password: "Ikaro12345%$#@!",
            },
          });

        expect(response.statusCode)
          .toBe(200);

        const body =
          JSON.parse(response.body);

        expect(body)
          .toHaveProperty("token");


      }
    );

  }
);