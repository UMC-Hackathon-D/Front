import z from "zod";

export const missionRegistercSchema = z.object({
    targetUserID: z.string(),
    missionID: z.string(),
});
