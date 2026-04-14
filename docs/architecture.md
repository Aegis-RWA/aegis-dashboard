# Frontend Architecture

## Component Hierarchy
The UI is strictly separated into pages and reusable components:
- `pages/`: Handles routing and route-level authorization (e.g., checking if the wallet is connected).
- `components/`: Contains isolated UI elements (`AssetCard`, `TransferModal`). State should be kept as local as possible unless required globally.

## State Management
- **Wallet State:** Handled globally using `zustand` in `src/hooks/useWallet.ts`. This allows any component to access the connected Stellar address.
- **Contract State:** Interactions with the Soroban RPC are abstracted into `src/hooks/useAegis.ts`, which currently wraps the `@aegis/sdk`.