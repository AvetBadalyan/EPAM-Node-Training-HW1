# Node.js Greetings Command-Line Tool

## Homework Description

Create a Node.js command-line tool that provides customizable greetings. The tool should:

- Accept a `--name` or `-n` argument for the name.
- Accept a `--level` or `-l` argument to specify the verbosity level (1 or 2).
- Accept an optional `--greeting` or `-g` argument for a custom greeting message.
- Accept an optional `--language` or `-lang` argument to specify the language of the greeting.

### Additional Settings

- If a custom greeting isn’t provided, use a default greeting value. The default value should be `Hello`.
- Similarly, if a name is not provided, use a default name. The default value should be `Guest`.
- The verbosity level (`--level` or `-l`) controls the amount of information in the log:
  - For level 1, the log should be simple: `Hello Guest`.
  - For level 2, the log should include more information: `Hello Guest (Date and Time: YYYY-MM-DD HH:MM:SS)`.

### Supported Languages

- English (default)
- Spanish
- French
- Armenian (Barev)
- Russian (Privet)

## Usage

You can run the CLI tool using the following commands:

```bash
node index.js
# Output: Hello, Guest

node index.js --name Avet
# Output: Hello, Avet

node index.js --greeting "Greetings from Node.js"
# Output: Greetings from Node.js, Guest

node index.js --level 2
# Output: Hello, Guest (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --language Spanish
# Output: Hola! Hello, Guest!

node index.js --name Alice --greeting "Greetings from Node.js"
# Output: Greetings from Node.js, Alice

node index.js --greeting "Greetings from Node.js" --level 2
# Output: Greetings from Node.js, Guest (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --greeting "Greetings from Node.js" --language Spanish
# Output: Hola! Greetings from Node.js, Guest

node index.js --name Alice --greeting "Greetings from Node.js" --level 2
# Output: Greetings from Node.js, Alice (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --name Alice --greeting "Greetings from Node.js" --language Spanish
# Output: Hola! Greetings from Node.js, Alice

node index.js --greeting "Greetings from Node.js" --level 2 --language Spanish
# Output: Hola! Greetings from Node.js, Guest (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --name Alice --greeting "Greetings from Node.js" --level 2 --language Spanish
# Output: Hola! Greetings from Node.js, Alice (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --name Alice --level 2 --language Spanish
# Output: Hola! Hello, Alice (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --name Alice --level 2
# Output: Hello, Alice (Date and Time: YYYY-MM-DD HH:MM:SS)

node index.js --greeting "Greetings from Node.js" --language Spanish
# Output: Hola! Greetings from Node.js, Guest

node index.js --name Alice --language Spanish
# Output: Hola! Hello, Alice
```
