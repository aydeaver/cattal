import {Command} from '@oclif/core'

export default class Help extends Command {
  static description = 'show task definition help'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static manual = `
  Task Dictionary parameters

--------------------------

Tasks are defined by functions starting with the string 'task'.
It must return a object describing the task with the following fields:

actions [required]:
  - type: Javascript-Task -> callable function or class method
  - type: Cmd-Task -> string or list of strings. Shell command.
  - type: Group-Task -> None.
`;
  // name [required for sub-task]:
  //   - type: string. sub-task identifier

  // file_dep:
  //   - type: list. items:
  //     * file (string) path relative to the dodo file

  // task_dep:
  //   - type: list. items:
  //     * task name (string)

  // setup:
  //  - type: list. items:
  //    * task name (string)

  // targets:
  //   - type: list of strings
  //   - each item is file-path relative to the dodo file (accepts both files and folders)

  // uptodate:
  //   - type: list. items:
  //     * None - None values are just ignored
  //     * bool - False indicates task is not up-to-date
  //     * callable - returns bool or None. must take 2 positional parameters (task, values)

  // calc_dep:
  //   - type: list. items:
  //     * task name (string)

  // getargs:
  //   - type: dictionary
  //     * key: string with the name of the function argument (used in a python-action)
  //     * value: tuple of (<task-name>, <variable-name>)

  // teardown:
  //  - type: (list) of actions (see above)

  // doc:
  //  - type: string -> the description text

  // clean:
  //  - type: (True bool) remove target files
  //  - type: (list) of actions (see above)

  // params:
  //  - type: (list) of dictionaries containing:
  //    - name [required] (string) parameter identifier
  //    - default [required] default value for parameter
  //    - short [optional] (string - 1 letter) short option string
  //    - long [optional] (string) long option string
  //    - type [optional] (callable) the option will be converted to this type
  //    - env_var [optional] (string) name OS environment variable
  //    - choices [optional] (list of 2-tuple str) limit option values,
  //           second tuple element is a help description for value
  //    - help [optional] (string) description displayed by help command
  //    - inverse [optional] (string) for a bool parameter set value to False

  // pos_arg:
  //  - type: string -> name of the function argument to receive list of positional arguments

  // verbosity:
  //  - type: int
  //    -  0: capture (do not print) stdout/stderr from task.
  //    -  1: (default) capture stdout only.
  //    -  2: do not capture anything (print everything immediately).

  // io:
  //  - type: dict
  //    - capture (bool): If False task stdout/stderr is not captured/saved internally
  //                      [default: True]

  // title:
  //  - type: callable taking one parameter as argument (the task reference)

  // meta:
  //  - type: dict. Extra info from user/plugin not directly used by doit

  // watch:
  //  - type: list. items:
  //    * (string) path to be watched when using the \`auto\` command
  // `;
  public async run(): Promise<void> {
    await this.parse(Help)

    this.log(Help.manual)
  }
}
