import type { ReqUser } from "../services/auth.ts";

declare global {
  namespace Express {
    interface Request {
      user?: ReqUserUser;
    }
  }
}
