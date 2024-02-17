import { useContext } from "react";

import { CursorContext } from "@/contexts/CursorContext";

export const useCursorContext = () => useContext(CursorContext);
