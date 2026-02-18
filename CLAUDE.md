# wopr-plugin-feishu

Feishu/Lark channel plugin for WOPR using the official @larksuiteoapi/node-sdk.

## Commands

```bash
npm run build     # tsc
npm run check     # biome check + tsc --noEmit (run before committing)
npm run lint:fix  # biome check --fix src/
npm run format    # biome format --write src/
npm test          # vitest run
```

## Architecture

```
src/
  index.ts   # Plugin entry — exports WOPRPlugin default, wires Lark SDK
  types.ts   # Plugin-local types + FeishuConfig
```

## Key Details

- **SDK**: @larksuiteoapi/node-sdk (official ByteDance SDK)
- **Connection modes**: WebSocket (default, no public URL needed) or Webhook (HTTP)
- **Domain**: Feishu (China) or Lark (international)
- Bot credentials configured via plugin config schema (appId, appSecret)
- EventDispatcher handles webhook URL verification automatically
- Interactive message cards for rich responses

## Plugin Contract

Imports only from @wopr-network/plugin-types. Never import from @wopr-network/wopr core.

## Issue Tracking

All issues in **Linear** (team: WOPR). Issue descriptions start with `**Repo:** wopr-network/wopr-plugin-feishu`.
