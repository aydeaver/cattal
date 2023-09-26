cattal - IAC automation and analysis tool
=================

Reference implementation of a percipio tool for managing build, deployment, and
promotion activities. This tool provides a common task execution framework with
a command line interface for executing tasks. It was inspired by Gradle.

## tool framework design requirements

- [x] executes tasks from the command line
- [x] responds with an exit status of 0 (success) or non-zero (failure)
- [x] is bundled as a standalone executable
- [x] is bundled as an npm package
- [x] is deployed to private repository
- [x] works as an npx command
- [ ] works on mac, windows, and linux
- [x] provides a task framework for implementing tasks
- [x] allows the grouping tasks into categories
- [x] task framework supports dependent tasks that run when the dependee is run
- [x] task framework supports up-to-date check to determine if task should run
- [x] provides core libraries for common task actions, e.g. shell exec, docker, logging
- [x] core libraries support global options, e.g. verbose, silent, force, log to file
- [ ] task property values can be expressed as custom functions, e.g. update check can be a file name or a function
- [ ] supports externally defined tasks, e.g. can include package in npm project and use to write custom tasks
- [ ] dependent tasks can be run synchronously or in parallel
- [ ] can display task graph for a task of its dependencies
- [x] provides working examples

## tool task requirements

- [x] creates jenkins local sandbox
- [x] creates kubernetes local sandbox
- [ ] generates deployment manifest files
- [ ] updates deployment manifest files
- [ ] performs promotions
- [ ] validates deployment manifest files
- [ ] runs environment smoke tests (api health, selenium ui, kubernetes health)
- [x] performs container vulnerability scan
- [ ] performs static analysis scan
- [ ] performs dynamic analysis scan

## system requirements

- Currently reference-tool only supports MacOS.
- Node is required.
- Must be configured to use Skillsoft's private NPM repo (see https://skillsoftdev.atlassian.net/wiki/spaces/devops/pages/21332146/Nexus%2B-%2BMaven%2BGradle%2Bnpm%2BRepo_).


-- IGNORE EVERYTHING BELOW HERE. BEING REWRITTEN --


## usage

Install reference-tool with the following.

```
npm install -g reference-tool
```

Commands are structured as shown below. Options can appear anywhere in the
command after the tool name.

Command structure

```
reference-tool <command-category> <command> <options>
```

For help

```
reference-tool -h
reference-tool <command-category> -h
reference-tool <command-category> <command> -h
```

reference-tool can also be run without installing using npx. When using npx the
scope prefix, @skillsoft, must be included.

```
npx @skillsoft/reference-tool -h
```

## dependencies

reference-tool requires the following to be fully functional. Some command tasks
will continue to function when dependencies are missing. Tasks will report that
it relies on a missing dependency when executed. Not all commands require these
dependencies. Commands will emit an error when trying to execute a command with
missing dependencies.

- aws cli
- docker
- kind
- node

## command tasks

### jenkins

kubernetes commands support development of jenkins configurations and pipelines.
See...

```
reference-tool jenkins -h
```

#### jenkins sandboxtemplate, sandboxup, sandboxdown

Creates a local Jenkins sandbox running in docker with configuration as code
plugin pre-configured. Exports templates for configuring Jenkins into local
workspace that can be edited and applied to sandbox instance. Worflow is roughly
the following.

```
# create plugins.txt, jenkins.yaml, and Dockerfile in your local workspace with...
npx @skillsoft/reference-tool jenkins sandboxtemplate

# edit the template files then bring up sandbox with the following.
# should automatically open browser to localhost:8080
npx @skillsoft/reference-tool jenkins sandboxup

# edit templates and restart by bringing sandbox down and back uop.
# Note: jenkins.yaml can be reloaded without rebuilding from within jenkins
npx @skillsoft/reference-tool jenkins sandboxdown

# and back up
npx @skillsoft/reference-tool jenkins sandboxup
```

### kubernetes

kubernetes commands support development of deployment manifests, scripts, and
packages. See...

```
reference-tool kubernetes -h
```

### scan

Scan commands perform security assurance scanning tasks. See...

```
reference-tool scan -h
```

## development

### design

reference-tool implements a framework for creating a command line tool for
executing command tasks and command tasks to assist with build, deploy, and test
activities. reference-tool extends tj/commander.js with its documentation
largely applicable to reference-tool. The extensions to commander provide the
following:

- merging of options contexts so that parent options are avaialble to
  subcommands
  Note: .enablePositionalOptions() and pass-through-options.js will
  interfere with this feature and should not be used.
- an up-to-date hook to check if a command task should be skipped
- ability to have command tasks depend on each other
- additional logging

### setup

Clone the project and cd into the project directory. Run the following to
symlink reference-tool from the global npm modules cache so changes are
reflected immediately from any directory in your workstation.

```
npm link
```

To unlink use the following. This may be used to test the install process to
ensure the system is referencing the installed version and not the project under
development.

```
npm unlink
```

### examples

Examples are provided in the src/examples directory. They are working examples
and can be run as any other command - see reference-tool -h. Examples include
basic command creation, commands using libraries returning promises, running
dependent tasks, up-to-date checks, and command groupings.

### references

#### commander node command line

https://github.com/tj/commander.js

#### external process execution

https://github.com/sindresorhus/execa
