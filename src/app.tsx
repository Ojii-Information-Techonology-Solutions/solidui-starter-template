import { createAsync, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createMemo, ErrorBoundary } from "solid-js"; // Added ErrorBoundary
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { Toaster } from "~/components/ui/sonner";


import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./app.css";


import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core";
import { getCookie } from "vinxi/http";
import { isServer } from "solid-js/web";

function getServerCookies() {
  "use server"
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
}


export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)

  return (
    <MetaProvider>
      <Title>Ojii ITS</Title>
      <Router
        root={(props) => {

          return (
            <ErrorBoundary fallback={(err) => {
              console.error("Global Error:", err);
              return <div class="p-4 text-red-500">Something went wrong. Check console.</div>
            }}>
              <ColorModeScript storageType={storageManager.type} />
              <ColorModeProvider storageManager={storageManager}>
                <Suspense>{props.children}</Suspense>
                <Toaster />
              </ColorModeProvider>
            </ErrorBoundary>
          );
        }}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}