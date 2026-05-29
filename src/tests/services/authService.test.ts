import {
  loginService,
} from "../../services/auth.service";

describe(
  "Auth Service",
  () => {

    it(
      "deve retornar token e usuário",
      async () => {

        const result =
          await loginService(

            "admin@gmail.com",

            "Ikaro12345%$#@!"
          );

        expect(
          result
        ).toHaveProperty(
          "token"
        );

        expect(
          result
        ).toHaveProperty(
          "user"
        );

        expect(
          result.user.email
        ).toBe(
          "admin@gmail.com"
        );

      }
    );

    it(
      "deve lançar erro para email inválido",
      async () => {

        await expect(

          loginService(

            "emailfake@gmail.com",

            "Admin@123"

          )

        ).rejects.toThrow(

          "Email ou senha inválidos"

        );

      }
    );

    it(
      "deve lançar erro para senha inválida",
      async () => {

        await expect(

          loginService(

            "admin@gmail.com",

            "senhaErrada"

          )

        ).rejects.toThrow(

          "Email ou senha inválidos"

        );

      }
    );

  }
);