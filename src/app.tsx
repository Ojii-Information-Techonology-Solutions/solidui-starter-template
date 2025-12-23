import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // Semibold
import "@fontsource/inter/700.css"; // Bold
import "./app.css";
import { AppSidebar } from "~/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar"
import { BreadcrumbNav } from "./components/breadcrumb-nav";
import { Toaster } from "~/components/ui/sonner";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <Title>Ojii Information Technology Solutions</Title>
      <Link rel="icon" href="/favicon.ico" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Router
        root={props => (
          <>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <BreadcrumbNav />
                <Suspense>{props.children}</Suspense>
              </SidebarInset>
            </SidebarProvider>
            <Toaster />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
