import { useNavigate } from "@solidjs/router"
import { Button } from "~/components/ui/button"
import { Title } from "@solidjs/meta"

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main class="h-svh flex">
      <Title>404 - Page Not Found</Title>
      <div class="m-auto h-full w-full flex flex-col items-center justify-center gap-2">
        {/* Large 404 text */}
        <h1 class="text-[7rem] font-bold leading-tight tracking-tighter">
          404
        </h1>
        
        <span class="font-medium text-xl">Oops! Page Not Found!</span>
        
        <p class="text-center text-muted-foreground max-w-[300px]">
          It seems like the page you're looking for does not exist or might have been removed.
        </p>

        <div class="mt-6 flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          
          <Button 
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}