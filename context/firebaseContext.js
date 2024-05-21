import { useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { logEvent, getAnalytics } from "firebase/analytics";
import { createFirebaseApp } from "@components/firebase/clientApp";

export const FirebaseContext = createContext();

export default function FirebaseTrackingProvider({ children }) {
  const router = useRouter();
  useEffect(() => {
    const app = createFirebaseApp();
    const analytics = getAnalytics(app);

    const handleRouteChange = (url) => {
      if (!analytics) {
        return;
      }

      logEvent(analytics, "page_view", {
        page_location: url,
        page_title: document?.title,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useFirebase = () => useContext(FirebaseContext);
