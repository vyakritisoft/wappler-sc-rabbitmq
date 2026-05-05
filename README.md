# @vyakriti/wappler_sc_rabbitmq

Wappler Server Connect extension for RabbitMQ queue management using [amqplib](https://www.npmjs.com/package/amqplib).

## Installation

```bash
npm install @vyakriti/wappler_sc_rabbitmq
```

## Requirements

- RabbitMQ server accessible from your Wappler application
- Node.js 18+

## Actions

### Add Job

Sends a message to a RabbitMQ queue with optional delay and retry logic.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `hostname` | string | yes | `rabbit` | RabbitMQ server hostname/IP |
| `username` | string | no | — | RabbitMQ username |
| `password` | string | no | — | RabbitMQ password |
| `queue_name` | string | yes | — | Target queue name |
| `job_data` | object | yes | — | Key-value pairs sent as JSON message |
| `delay_ms` | number | no | `0` | Delay in ms before job can be processed |
| `max_retries` | number | no | `0` | Max retry attempts with exponential backoff |
| `intial_delay` | number | no | `1000` | Initial retry delay in ms |

### Get Jobs

Retrieves messages from a queue without consuming them.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hostname` | string | yes | RabbitMQ server hostname/IP |
| `username` | string | no | RabbitMQ username |
| `password` | string | no | RabbitMQ password |
| `queue_name` | string | yes | Queue to inspect |

### Health Check

Validates RabbitMQ connectivity and queue existence.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `hostname` | string | yes | `rabbit` | RabbitMQ server hostname/IP |
| `username` | string | no | — | RabbitMQ username |
| `password` | string | no | — | RabbitMQ password |
| `timeout` | number | yes | `5000` | Connection timeout in ms |
| `queues` | string | yes | — | Comma-separated queue names to validate |

**Returns:** `{ status: boolean, message_count: number }`

## Development

```bash
npm install
npm run lint        # ESLint check
npm run build       # Rollup bundle
```

## License

MIT
