import "dotenv/config";
import cookie from "@fastify/cookie";
import fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./routes/auth.route";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty"
    }
  }
});

app.register(cookie, {
  secret:
    process.env.COOKIE_SECRET,
});

app.get('/', async (request, reply) => {
  return reply.send({ message: "Bem-vindo ao Backend dos cria!" });
})

app.register(cors, {
  origin: true,
});

app.register(authRoutes);

app.listen(
  { port: 3000, host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log("Server running at", address);
  }
);