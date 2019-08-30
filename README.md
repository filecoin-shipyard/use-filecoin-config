@filecoin-shipyard/use-filecoin-config
======================================

React hook to load config via Filecoin API

Uses [js-filecoin-api-client](https://github.com/filecoin-shipyard/js-filecoin-api-client) to
connect to the go-filecoin HTTP API running on localhost.

Note: Even though it is a React hook, it was built to be used in command-line apps
that run in a Node.js environment, it has not yet been used in the browser.

# Example

From [filecoin-big-head](https://github.com/filecoin-shipyard/filecoin-big-head) which
uses React with [Ink](https://github.com/vadimdemedes/ink) in a Node.js interactive
command-line app:

```js
import useFilecoinConfig from '@filecoin-shipyard/use-filecoin-config'

const Main = () => {
  const [nickError, nickname] = useFilecoinConfig('heartbeat.nickname')

  return <Box>{nickname && nickname}</Box>
}
```

# API

### `useFilecoinConfig(key, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| key | `String` | Dot separated key to config value to retrieve |
| options | `Object` | Optional options |
| options.interval | `Number` | Requery the config value every `interval` milliseconds (Default: 1000) |

#### Returns

Returns an array of values, like other React hooks.

| Index | Type | Description |
|-------|------|-------------|
| 0     | `Error` | Error object or null |
| 1     | `?` | Value from config |

# License

MIT/Apache-2 ([Permissive License Stack](https://protocol.ai/blog/announcing-the-permissive-license-stack/))
