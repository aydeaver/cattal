cattal - IAC automation and analysis tool
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cattal
$ cattal COMMAND
running command...
$ cattal (--version)
cattal/0.0.0 linux-x64 node-v18.13.0
$ cattal --help [COMMAND]
USAGE
  $ cattal COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cattal hello PERSON`](#cattal-hello-person)
* [`cattal hello world`](#cattal-hello-world)
* [`cattal help [COMMANDS]`](#cattal-help-commands)
* [`cattal plugins`](#cattal-plugins)
* [`cattal plugins:install PLUGIN...`](#cattal-pluginsinstall-plugin)
* [`cattal plugins:inspect PLUGIN...`](#cattal-pluginsinspect-plugin)
* [`cattal plugins:install PLUGIN...`](#cattal-pluginsinstall-plugin-1)
* [`cattal plugins:link PLUGIN`](#cattal-pluginslink-plugin)
* [`cattal plugins:uninstall PLUGIN...`](#cattal-pluginsuninstall-plugin)
* [`cattal plugins:uninstall PLUGIN...`](#cattal-pluginsuninstall-plugin-1)
* [`cattal plugins:uninstall PLUGIN...`](#cattal-pluginsuninstall-plugin-2)
* [`cattal plugins update`](#cattal-plugins-update)
* [`cattal task [FILE]`](#cattal-task-file)

## `cattal hello PERSON`

Say hello

```
USAGE
  $ cattal hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Workspace/cattal/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cattal hello world`

Say hello world

```
USAGE
  $ cattal hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cattal hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Workspace/cattal/blob/v0.0.0/dist/commands/hello/world.ts)_

## `cattal help [COMMANDS]`

Display help for cattal.

```
USAGE
  $ cattal help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cattal.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `cattal plugins`

List installed plugins.

```
USAGE
  $ cattal plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cattal plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/index.ts)_

## `cattal plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cattal plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cattal plugins add

EXAMPLES
  $ cattal plugins:install myplugin 

  $ cattal plugins:install https://github.com/someuser/someplugin

  $ cattal plugins:install someuser/someplugin
```

## `cattal plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cattal plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cattal plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/inspect.ts)_

## `cattal plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cattal plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cattal plugins add

EXAMPLES
  $ cattal plugins:install myplugin 

  $ cattal plugins:install https://github.com/someuser/someplugin

  $ cattal plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/install.ts)_

## `cattal plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cattal plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cattal plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/link.ts)_

## `cattal plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cattal plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cattal plugins unlink
  $ cattal plugins remove
```

## `cattal plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cattal plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cattal plugins unlink
  $ cattal plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/uninstall.ts)_

## `cattal plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cattal plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cattal plugins unlink
  $ cattal plugins remove
```

## `cattal plugins update`

Update installed plugins.

```
USAGE
  $ cattal plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.5.0/src/commands/plugins/update.ts)_

## `cattal task [FILE]`

describe the command here

```
USAGE
  $ cattal task [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ cattal task
```

_See code: [dist/commands/task.ts](https://github.com/Workspace/cattal/blob/v0.0.0/dist/commands/task.ts)_
<!-- commandsstop -->
