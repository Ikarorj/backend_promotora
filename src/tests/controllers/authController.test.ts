import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

import { loginController } from "../../controllers/auth.controller";

describe(
  "Auth Controller",
  () => {

    it(
      "deve retornar erro 400 se email e senha não forem enviados",
      async () => {

        const mockRequest = {
          body: {},
        } as any;

        const mockReply = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        } as any;

        await loginController(
          mockRequest,
          mockReply
        );

        expect(
          mockReply.status
        ).toHaveBeenCalledWith(400);

        expect(
          mockReply.send
        ).toHaveBeenCalledWith({
          error:
            "Email e senha obrigatórios",
        });

      }
    )
  });