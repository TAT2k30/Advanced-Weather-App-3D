// auth.middleware.contracts.js
import { validateRequest } from "../validateRequest";
import {
  authenticated,
  isRoleAdmin,
  isRoleUser,
} from "../roleMiddleWare";
import {
  registerValidation,
  loginValidation,
  refreshTokenValidation,
} from "../../validations/auth.schema.validation";
import { loadBalancer } from "../loadBalanerMiddleware";
import { rateLimiter } from "../rateLimittingMiddleware";

// Middleware cho đăng nhập
export const loginMiddlewares = [loginValidation, validateRequest, loadBalancer, rateLimiter];

// Middleware cho đăng ký
export const registerMiddlewares = [registerValidation, validateRequest, loadBalancer, rateLimiter];

// Middleware cho refresh token
export const refreshTokenMiddlewares = [refreshTokenValidation, validateRequest, loadBalancer, rateLimiter];

// Middleware cho logout
export const logoutMiddlewares = [validateRequest, authenticated, loadBalancer, rateLimiter];

// Middleware cho getAllUser với quyền admin
export const getAllUserMiddlewares = [
  validateRequest, // Nếu cần kiểm tra dữ liệu đầu vào
  authenticated,
  isRoleAdmin,
  loadBalancer,
  rateLimiter
];

// Middleware cho một route chỉ yêu cầu người dùng là "user"
export const userMiddlewares = [
  validateRequest,
  authenticated,
  isRoleUser,
  loadBalancer,
  rateLimiter
];
