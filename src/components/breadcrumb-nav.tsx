import { useLocation } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";

export function BreadcrumbNav() {
  const location = useLocation();

  const links = createMemo(() => {
    const path = location.pathname;
    if (path === "/") {
      return [{ title: "Home", href: "/", last: true }];
    }

    const segments = path.split("/").filter((item) => item !== "");
    const breadcrumbs = segments.map((item, index) => {
      const title = item
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

      return {
        title,
        href: `/${segments.slice(0, index + 1).join("/")}`,
        last: index === segments.length - 1,
      };
    });

    return [{ title: "Home", href: "/", last: false }, ...breadcrumbs];
  });

  return (
    <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div class="flex items-center gap-2">
        <SidebarTrigger class="-ml-1" />

        <Breadcrumb>
          <BreadcrumbList>
            <For each={links()}>
              {(link) => (
                <>
                  <BreadcrumbItem>
                    {link.last ? (
                      <div>{link.title}</div>
                    ) : (
                      <BreadcrumbLink href={link.href}>{link.title}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!link.last && <BreadcrumbSeparator />}
                </>
              )}
            </For>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}