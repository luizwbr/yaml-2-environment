# yaml-2-env
Yaml file to environment variables. Based on https://github.com/jrwells/env-yaml

## Usage

```javascript
require('yaml-2-env').config();
```

It loads a `.env.yml` file in the root directory of your project, and parses to add as environment variables.

Example:
```yaml
base_url: google.com.br
```

```node
process.env.base_url: 'google.com.br'
```

## Options

### Path

Default: `.env.yml`

You can specify a custom path if your file containing environmnet variables is named or located differently.

```javascript
require('yaml-2-env').config({ path: '/custom/path/to/your/yaml/env/vars' });
```

### Encoding

Default: `utf8`

You may specify the encoding of your file containing environment variables
using this option.

```javascript
require('yaml-2-env').config({ encoding: 'base64' });
```
### Namespace

Default: null

You may specify a namespace in which to fetch your environment variables. Useful when you want to store environment specific values within the same files.

```javascript
require('yaml-2-env').config({ namespace: 'development' });
