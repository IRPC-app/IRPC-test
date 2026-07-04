import { createContext, useContext, useMemo, useState } from "react";

const AiDaeeContext = createContext(null);

export function AiDaeeProvider({ children }) {
  const [pendingQuestion, setPendingQuestion] = useState(null);
  const value = useMemo(() => ({ pendingQuestion, setPendingQuestion }), [pendingQuestion]);
  return <AiDaeeContext.Provider value={value}>{children}</AiDaeeContext.Provider>;
}

export function useAiDaee() {
  const ctx = useContext(AiDaeeContext);
  if (!ctx) throw new Error("useAiDaee must be used within an AiDaeeProvider");
  return ctx;
}
