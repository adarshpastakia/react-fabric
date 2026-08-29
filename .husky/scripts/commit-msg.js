const fs = require("fs");

// Get the commit message file path from Git argument
const commitMsgFile = process.argv[2];

if (!commitMsgFile) {
  console.error("\x1b[31mError:\x1b[0m No commit message file provided.");
  process.exit(1);
}

const commitMsg = fs.readFileSync(commitMsgFile, "utf8").trim();

// Official Conventional Commits regex pattern
const conventionalCommitRegex =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert|ops|i18n)(?:\(([^)]+)\))?(!)?:\s(.+)/;

// Skip validation for automatic merge commits or release commits if needed
if (commitMsg.startsWith("WIP") || commitMsg.startsWith("chore(release)")) {
  process.exit(0);
}

if (!conventionalCommitRegex.test(commitMsg)) {
  console.error(
    `\n\x1b[31m[ERROR] Invalid Commit Message Format\x1b[0m\n\n` +
      `  Your message: "${commitMsg}"\n\n` +
      `  Conventional Commits require this format:\n` +
      `  \x1b[32m<type>(<scope>): <description>\x1b[0m\n\n` +
      `  Examples:\n` +
      `    feat(auth): add login button\n` +
      `    fix: resolve memory leak\n\n` +
      `  Allowed types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, ops, i18n\n`,
  );
  process.exit(1);
}

process.exit(0);
