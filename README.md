# Basic Vue SPA

## Development

I used the `pnpm` package manager, but `npm` should work just fine as well.

### Prerequisites

I set the node version to 18, but 16 should work just fine as well. If you have `nvm`, type `nvm use` in the project root to switch to the correct version automatically.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
VITE_API_ACCESS_TOKEN_KEY=your-header-key
VITE_API_ACCESS_TOKEN_VALUE=your-header-token
VITE_API_HOST=your-api-host.net
VITE_DEBUG=0 # 0 or 1
```

### Install

```bash
pnpm install
```

### Run w/ HMR

```bash
pnpm run dev
```

## Build

```bash
pnpm run build
```

