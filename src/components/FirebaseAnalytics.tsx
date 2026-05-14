import { useEffect } from 'react';
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.PUBLIC_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function createFirebaseApp(): FirebaseApp | null {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
    return null;
  }

  if (getApps().length > 0) {
    return getApps()[0] as FirebaseApp;
  }

  return initializeApp(firebaseConfig);
}

export default function FirebaseAnalytics() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const setup = async () => {
      const app = createFirebaseApp();
      if (!app || !(await isSupported())) return;

      const analytics = getAnalytics(app);
      const trackPageView = () => {
        logEvent(analytics, 'page_view', {
          page_location: window.location.pathname,
          page_title: document.title,
        });
      };

      trackPageView();
      document.addEventListener('astro:page-load', trackPageView);
      cleanup = () => document.removeEventListener('astro:page-load', trackPageView);
    };

    setup().catch(() => {});

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
