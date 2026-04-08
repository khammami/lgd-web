"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { logEvent, getAnalytics } from "firebase/analytics";
import { createFirebaseApp } from "@components/firebase/clientApp";

export const FirebaseContext = createContext();

export default function FirebaseTrackingProvider({ children }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    try {
      const app = createFirebaseApp();
      if (!app) return;
      const analytics = getAnalytics(app);
      if (!analytics) return;

      logEvent(analytics, "page_view", {
        page_location: pathname,
        page_title: document?.title,
      });
    } catch (e) {
      // Firebase analytics may not be available
    }
  }, [pathname]);

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useFirebase = () => useContext(FirebaseContext);
