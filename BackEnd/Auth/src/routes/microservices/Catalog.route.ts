import { Router } from "express";
import { getItems } from "../../controllers/Catalog.Controller";
import { authenticated } from "../../middlewares/roleMiddleWare";
import { catalogGetMiddleWare } from "../../middlewares/contracts/catalog.middleware.contracts";

const router = Router();

router.get("/items", ...catalogGetMiddleWare, getItems);


export default router;
