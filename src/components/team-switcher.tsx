import { createSignal, For } from "solid-js";
import { useSidebar } from "~/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

interface Team {
  name: string;
  logo: string; // Assuming this is a character or icon name
  plan: string;
}

interface TeamSwitcherProps {
  teams: Team[];
}

export function TeamSwitcher(props: TeamSwitcherProps) {
  const sidebar = useSidebar();
  const [activeTeam, setActiveTeam] = createSignal(props.teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu
          placement={sidebar.isMobile() ? "bottom-start" : "right-start"}
        >
          <DropdownMenuTrigger
            as={SidebarMenuButton}
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              {/* Replace with your Icon component or a simple span */}
              <span class="text-xs font-bold">{activeTeam().logo}</span>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{activeTeam().name}</span>
              <span class="truncate text-xs">{activeTeam().plan}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-auto size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-56 w-[--kb-dropdown-menu-trigger-width] rounded-lg">
            <DropdownMenuLabel class="text-xs text-muted-foreground">
              Entities
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <For each={props.teams}>
              {(team, index) => (
                <DropdownMenuItem
                  class="gap-2 p-2 cursor-pointer"
                  onSelect={() => setActiveTeam(team)}
                >
                  <div class="size-6 flex items-center justify-center border rounded-sm">
                    <span class="text-[10px]">{team.logo}</span>
                  </div>
                  <span class="flex-1">{team.name}</span>
                  <DropdownMenuShortcut>
                    ⌘{index() + 1}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}
            </For>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}