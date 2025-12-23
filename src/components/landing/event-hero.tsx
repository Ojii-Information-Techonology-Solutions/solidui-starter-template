import { createSignal, createEffect, For } from "solid-js";
import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";

// 1. Define your company themes/slides
const slides = [
  {
    name: "TicketBux Original",
    image: "https://your-image-url.jpg", // The image you uploaded
    primary: "#FFD200", // The yellow from your logo
    secondary: "#000000"
  },
  {
    name: "Midnight Pulse",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    primary: "#00F2FF", // Cyan/Electric Blue
    secondary: "#000000"
  }
];

export default function EventLanding() {
  const [current, setCurrent] = createSignal(0);

  // 2. The Global Theme Injector
  createEffect(() => {
    const theme = slides[current()];
    document.documentElement.style.setProperty('--primary', theme.primary);
    // You can also update the favicon or metadata here if needed
  });

  return (
    <div class="relative min-h-screen w-full overflow-hidden bg-black text-white">
      
      {/* 3. Background Image Layer (Crossfade) */}
      <div class="absolute inset-0 z-0">
        <For each={slides}>
          {(slide, i) => (
            <div 
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ 
                opacity: current() === i() ? 1 : 0,
                "background-image": `url(${slide.image})`,
                "background-size": "cover",
                "background-position": "center"
              }}
            >
              {/* Overlay for better text readability */}
              <div class="absolute inset-0 bg-black/20" />
            </div>
          )}
        </For>
      </div>

      {/* 4. Navbar (Glassmorphism) */}
      <nav class="relative z-20 flex items-center justify-between px-10 py-6">
        <div class="flex items-center gap-12">
          {/* Logo with dynamic border color */}
          <div class="border-2 border-[var(--primary)] px-3 py-1 text-xl font-bold">
            ticket<span class="text-[var(--primary)]">bux</span>
          </div>
          <div class="flex gap-6 font-medium">
            <A href="/" class="border-b-2 border-[var(--primary)]">Home</A>
            <A href="/about" class="hover:text-[var(--primary)] transition-colors">About</A>
          </div>
        </div>
        <Button class="bg-[var(--primary)] text-black font-bold hover:opacity-90">
          LOGIN
        </Button>
      </nav>

      {/* 5. Hero Content & Timer */}
      <main class="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4">
        
        {/* Carousel Trigger (Hidden or as dots) */}
        <div class="absolute bottom-10 flex gap-2">
           <For each={slides}>
             {(_, i) => (
               <button 
                onClick={() => setCurrent(i())}
                class="size-3 rounded-full transition-all"
                style={{ "background-color": current() === i() ? 'var(--primary)' : '#555' }}
               />
             )}
           </For>
        </div>

        {/* The Countdown Container */}
        <div class="mt-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 flex gap-8 items-center">
          <div class="text-center">
            <div class="text-4xl font-bold">00</div>
            <div class="text-[10px] uppercase text-gray-400">Days</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold">00</div>
            <div class="text-[10px] uppercase text-gray-400">Hours</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold">00</div>
            <div class="text-[10px] uppercase text-gray-400">Minutes</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--primary)]">00</div>
            <div class="text-[10px] uppercase text-gray-400">Seconds</div>
          </div>
        </div>
      </main>
    </div>
  );
}