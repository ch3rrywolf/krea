import { adminRoutes } from "./adminRoutes";
import { archiRouters } from "./archiRoutes";

export const privateRoutes = [
    ...adminRoutes,
    ...archiRouters
]