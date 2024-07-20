const DEFAULT_NAME = "Guest";
const DEFAULT_GREETING = "Hello";
const DEFAULT_LANGUAGE = "English";

const arguments = process.argv.slice(2);
let userName = DEFAULT_NAME;
let customGreeting = null;
let verbosityLevel = 1;
let language = DEFAULT_LANGUAGE;

const getArgumentValue = (argName, defaultValue) => {
  const index = arguments.indexOf(argName);
  return index !== -1 && arguments[index + 1]
    ? arguments[index + 1]
    : defaultValue;
};

const hasArgument = (argName) => arguments.indexOf(argName) !== -1;

if (hasArgument("--name") || hasArgument("-n")) {
  userName = getArgumentValue("--name", getArgumentValue("-n", DEFAULT_NAME));
}

if (hasArgument("--greeting") || hasArgument("-g")) {
  customGreeting = getArgumentValue("--greeting", getArgumentValue("-g", null));
}

if (hasArgument("--level") || hasArgument("-l")) {
  verbosityLevel = parseInt(
    getArgumentValue("--level", getArgumentValue("-l", 1)),
    10
  );
}

if (hasArgument("--language") || hasArgument("-lang")) {
  language = getArgumentValue(
    "--language",
    getArgumentValue("-lang", DEFAULT_LANGUAGE)
  );
}

const getCurrentDateTime = () => {
  const now = new Date();
  return now.toISOString().replace("T", " ").substring(0, 19);
};

const greetings = {
  English: "Hello",
  Spanish: "Hola",
  French: "Bonjour",
  Armenian: "Barev",
  Russian: "Privet",
};

const generateGreetingMessage = (name, customGreeting, level, lang) => {
  const languageGreeting = greetings[lang] || DEFAULT_GREETING;
  let message = "";

  if (languageGreeting !== DEFAULT_GREETING) {
    message += `${languageGreeting}! `;
  }

  message += customGreeting || DEFAULT_GREETING;
  message += `, ${name || DEFAULT_NAME}!`;

  if (level === 2) {
    message += ` (Date and Time: ${getCurrentDateTime()})`;
  }

  return message.trim();
};

console.log(
  generateGreetingMessage(userName, customGreeting, verbosityLevel, language)
);
