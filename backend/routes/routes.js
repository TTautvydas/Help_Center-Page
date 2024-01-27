import express from "express";
import {
  deleteRequest,
  fallBackRoute,
  getRequestById,
  getRequests,
  submitRequest,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/submit", submitRequest);

router.get("/requests", getRequests);

router.get("/requests/:id", getRequestById);

router.delete("/requests/:id", deleteRequest);

router.get("*", fallBackRoute);

export default router;
