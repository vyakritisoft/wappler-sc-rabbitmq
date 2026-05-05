# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wappler Server Connect extension for RabbitMQ queue management. Uses `amqplib` to offload task execution via message queues. Published as `@vyakriti/wappler_sc_rabbitmq`.

## Architecture

- **Extension type**: Wappler Server Connect module (ESM)
- **Core logic**: `server_connect/rabbitmq_queues.js` — exports `add_job`, `get_jobs`, `check_rabbitmq_health`
- **UI definition**: `server_connect/rabbitmq_queues.hjson` — Wappler action panel schema (properties, groups, icons)
- **Transport**: `amqplib` ^0.10.3 (AMQP 0-9-1 protocol)

### Action flow

Each exported action receives an `options` object, parses params via `this.parseRequired`/`this.parse`/`this.parseOptional` (Wappler Server Connect context methods), opens a connection+channel to RabbitMQ, performs work, returns result.

Connection pattern: `amqp://[user:pass@]hostname` with race-based timeout. Retry uses exponential backoff (`initialDelay * 2^retryCount`).

## Commands

```bash
npm install          # install dependencies
npm run build        # rollup bundle (requires rollup config)
npm run publish-dry-run  # test npm publish without pushing
```

## Wappler Extension Conventions

- Module name in hjson `module` field must match JS filename without extension
- Each action's `type` field follows pattern: `{module}_{action}`
- `usedModules.node` declares npm deps Wappler auto-installs
- `serverDataBindings: true` enables dynamic expressions in Wappler UI
- `dataPickObject: true` makes action output available in data picker

## Known Issues

- `get_jobs` has bug: `connection` variable not captured from `connect()` return value (line 136)
- `intial_delay` option name is misspelled (should be `initial_delay`) — preserved for backward compat
- `.hjson` health check entry missing comma after `defaultValue: 5000` (line 244)
