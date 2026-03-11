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

## Session Memory

At the start of every WOPR session, **read `~/.wopr-memory.md` if it exists.** It contains recent session context: which repos were active, what branches are in flight, and how many uncommitted changes exist. Use it to orient quickly without re-investigating.

The `Stop` hook writes to this file automatically at session end. Only non-main branches are recorded — if everything is on `main`, nothing is written for that repo.
## Version Control: Prefer jj

Use `jj` (Jujutsu) for all VCS operations instead of `git`:
- `jj status`, `jj diff`, `jj log` for inspection
- `jj new` to start a change, `jj describe` to set the message
- `jj commit` to commit, `jj push` to push
- `jj squash`, `jj rebase`, `jj edit` for history manipulation

Fall back to `git` only for operations not yet supported by `jj`.

