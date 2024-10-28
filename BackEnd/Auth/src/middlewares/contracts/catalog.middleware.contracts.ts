
import { validateRequest } from "../../middlewares/validateRequest";
import { loadBalancer } from "../loadBalanerMiddleware";
import { rateLimiter } from "../rateLimittingMiddleware";

export const catalogGetMiddleWare = [validateRequest, loadBalancer, rateLimiter];
