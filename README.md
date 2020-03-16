## Norm

The syntax is described inside the .prettierrc file. If you don't use Prettier or use an Editor that is not supporting it, please refer to the Syntax part.

### Syntax

- A tab width is 2 spaces.
- The indentation is 1 tab for each line.
- Semicolons are required at the end of a line.
- Use double quotes for simple strings. You can use backticks.
- One line is 120 characters.

### Syntaxic choices

#### Naming

- Any function name is in camelCase.
- Any React Component name is in PascalCase. (This is conventionnal)
- Any data name is a one word name.
- Any name should describe the target the more accurately with the less possible word. If possible, use only one word.

#### Declaration

- Any variable or function needs to be a _const_. If you think you can't use a _const_, ask your colleagues first to make sure.
- Fixed variables used multiple times in several functions should be declared as `const GLOBAL_VARIABLE=[value]`
- Use arrow functions.
- As much as possible, destructure your variable in your parameter declaration.
- Don't use _if_ unless you can't use a ternary. Never use _else_.
- If a function returns the value on first line, don't use brackets.
- Choose _import_ over _require_.

#### Prototype functions

- Never use _for_.
- Use _forEach_, _map_ and _reduce_ appropriately.
  -- _forEach_ loops on an array and returns nothing.
  -- _map_ loops on an array and returns each time.
  -- _reduce_ loops on an array and can achieve everything you want. **_Everything_**.

### Design Pattern

Follow the design pattern specified for each stack of the project.

[FrontEnd](https://github.com/VincentLinet/FellowShip/tree/master/fellow-ship)

[BackEnd](https://github.com/VincentLinet/FellowShip/tree/master/fellow-ship-api)

## Git

### Commit Message

- Specify the stack you are pushing for.
- Describe the feature the more accurrately, and try to stick it in less than 50 characters.
- Use lowercase only unless you refer to a function or component.

### Tree

- You are welcome to use branches for medium features and forks for large features.
- You are welcome to ask for a pull request.
- Try making one commit per feature.
- Before committing, consider the following combo beforehand:

```
git stash
git pull
git stash pop
git commit -m ""
...
```

⋅⋅⋅This will result to avoid the default merge behaviour that is splashing unreadable data and useless commit messages to the tree.
