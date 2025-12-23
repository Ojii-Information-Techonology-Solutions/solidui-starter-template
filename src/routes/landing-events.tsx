import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { 
  IconTicket, 
  IconCalendar, 
  IconHome, 
  IconRocket 
} from "~/components/icons";

export default function EventLanding() {
  return (
    <div class="flex flex-col min-h-screen bg-background">
      {/* --- HERO SECTION --- */}
      <section class="relative flex h-[90vh] items-center justify-center overflow-hidden bg-black">
        {/* Background Image/Overlay */}
        <div class="absolute inset-0 z-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop" 
            alt="Concert Crowd" 
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div class="container relative z-10 flex flex-col items-center text-center px-4">
          <span class="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
            World Tour 2025
          </span>
          <h1 class="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            NEON NIGHTS <span class="text-primary text-glow">LIVE</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Experience the electrifying fusion of synth-pop and digital art. One night only in the heart of the city.
          </p>
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" class="h-12 px-8 text-lg font-bold">
              <IconTicket class="mr-2 size-5" /> Get Tickets
            </Button>
            <Button size="lg" variant="outline" class="h-12 px-8 text-lg font-bold text-white border-white hover:bg-white hover:text-black">
              View Lineup
            </Button>
          </div>
        </div>
      </section>

      {/* --- EVENT INFO GRID --- */}
      <section class="container py-24 px-4">
        <div class="grid gap-8 md:grid-cols-3">
          <div class="flex flex-col items-center p-6 text-center border rounded-xl bg-card">
            <div class="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <IconCalendar class="size-8" />
            </div>
            <h3 class="text-xl font-bold">When</h3>
            <p class="text-muted-foreground mt-2">August 15, 2025<br />Doors open @ 6:00 PM</p>
          </div>

          <div class="flex flex-col items-center p-6 text-center border rounded-xl bg-card">
            <div class="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <IconHome class="size-8" />
            </div>
            <h3 class="text-xl font-bold">Where</h3>
            <p class="text-muted-foreground mt-2">The Grand Arena<br />Manila, Philippines</p>
          </div>

          <div class="flex flex-col items-center p-6 text-center border rounded-xl bg-card">
            <div class="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <IconRocket class="size-8" />
            </div>
            <h3 class="text-xl font-bold">Vibe</h3>
            <p class="text-muted-foreground mt-2">Immersive Visuals<br />4D Sound System</p>
          </div>
        </div>
      </section>

      {/* --- TICKET PRICING --- */}
      <section class="bg-muted/30 py-24">
        <div class="container px-4">
          <h2 class="text-3xl font-bold text-center mb-12 sm:text-5xl">Choose Your Experience</h2>
          <div class="grid max-w-5xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-2">
            
            {/* General Admission */}
            <div class="flex flex-col p-8 bg-background border rounded-2xl shadow-sm relative overflow-hidden">
              <h4 class="text-xl font-bold">General Admission</h4>
              <div class="mt-4 text-4xl font-bold">$89</div>
              <ul class="mt-6 space-y-4 text-muted-foreground">
                <li class="flex items-center"><IconRocket class="mr-2 size-4 text-primary" /> Standing Area Access</li>
                <li class="flex items-center"><IconRocket class="mr-2 size-4 text-primary" /> Standard Audio Quality</li>
              </ul>
              <Button class="mt-8 w-full" variant="secondary">Select GA</Button>
            </div>

            {/* VIP Pass */}
            <div class="flex flex-col p-8 bg-background border-2 border-primary rounded-2xl shadow-xl relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground uppercase tracking-widest">Best Value</div>
              <h4 class="text-xl font-bold">VIP Backstage</h4>
              <div class="mt-4 text-4xl font-bold">$249</div>
              <ul class="mt-6 space-y-4 text-muted-foreground">
                <li class="flex items-center"><IconRocket class="mr-2 size-4 text-primary" /> Front Row Access</li>
                <li class="flex items-center"><IconRocket class="mr-2 size-4 text-primary" /> Meet & Greet Pass</li>
                <li class="flex items-center"><IconRocket class="mr-2 size-4 text-primary" /> Exclusive Merch Bundle</li>
              </ul>
              <Button class="mt-8 w-full">Select VIP</Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}