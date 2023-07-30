import { OccurrenceController } from "../controllers/occurrence.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";
import { Router } from "express";

const occurrencesRouter = Router();

occurrencesRouter.post("/:timelineId", authMiddlewares, OccurrenceController.createOccurrence);
occurrencesRouter.get("/", authMiddlewares, OccurrenceController.findOccurrences);
occurrencesRouter.patch("/:id", authMiddlewares, OccurrenceController.updateOccurrence);
occurrencesRouter.delete("/:id", authMiddlewares, OccurrenceController.deleteOccurrence);

export default occurrencesRouter;
