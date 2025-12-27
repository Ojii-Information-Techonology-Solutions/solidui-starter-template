# SolidStarter

A modern port of [solid-ui](https://solid-ui.com) components to Tailwind CSS v4 - the SolidJS equivalent of shadcn/ui.

## Overview

SolidStarter provides beautifully designed, accessible components built with SolidJS and styled with Tailwind CSS v4. Copy, paste, and customize components to build your next SolidJS application.

## Features

- 🎨 **Tailwind v4** - Built with the latest Tailwind CSS
- ⚡ **SolidJS** - Fast, reactive UI components
- 📦 **Copy & Paste** - Own your components, no npm packages
- ♿ **Accessible** - ARIA-compliant components out of the box
- 🎯 **Type-safe** - Full TypeScript support
- 🔧 **Customizable** - Easily adapt components to your design system

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 22+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ojii-Information-Techonology-Solutions/solid-starter.git
cd solid-starter
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Development

### Known Issues

**Bun Development Mode:** There's a known bug in SolidStart where `"use server"` directives don't work properly in development mode when using Bun. 

**Workaround:** Build and run the production version instead:

```bash
bun run build && bun start
```

Alternatively, you can use Node.js for development:

```bash
npm run dev
```

## Building for Production

```bash
bun run build
bun start
```


## To add components from solid-ui.com just do

```bash
bunx solidui-cli@latest add button
```

## Project Structure

```
solidstarter/
├── src/
│   ├── components/    # UI components
│   ├── routes/        # Application routes
│   └── styles/        # Global styles
├── public/            # Static assets
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Acknowledgments

- [solid-ui](https://solid-ui.com) - Original component library
- [shadcn/ui](https://ui.shadcn.com) - Design inspiration
- [SolidJS](https://www.solidjs.com) - The reactive framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## Resources

- [Documentation](https://solid-ui.com)
- [SolidJS Docs](https://docs.solidjs.com)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

---

