import { useLocation } from "@solidjs/router";
import { createMemo, For, Show } from "solid-js";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export function BreadcrumbNav() {
  const location = useLocation();

  const links = createMemo(() => {
    const path = location.pathname;

    // Dashboard is the home - show only "Dashboard"
    if (path === "/" || path === "/dashboard") {
      return [{ title: "Dashboard", href: "/dashboard", last: true }];
    }

    const segments = path.split("/").filter((item) => item !== "");
    const breadcrumbs = segments.map((item, index) => {
      // Format title: kebab-case to Title Case
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

    // Always start with Dashboard link
    return [{ title: "Dashboard", href: "/dashboard", last: false }, ...breadcrumbs];
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <For each={links()}>
          {(link) => (
            <>
              <BreadcrumbItem>
                <Show
                  when={link.last}
                  fallback={<BreadcrumbLink href={link.href}>{link.title}</BreadcrumbLink>}
                >
                  <span class="font-medium">{link.title}</span>
                </Show>
              </BreadcrumbItem>
              <Show when={!link.last}>
                <BreadcrumbSeparator />
              </Show>
            </>
          )}
        </For>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
