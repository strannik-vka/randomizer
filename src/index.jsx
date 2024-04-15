import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/index'

import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://198d57551cd7b2c6b03167cd7c2386e0@o4507090870075392.ingest.us.sentry.io/4507090883379200",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Performance Monitoring 
    tracesSampleRate: 1.0, //  Capture 100% of the transactions 
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled 
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay 
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production. 
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur. 
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
