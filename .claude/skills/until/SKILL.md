---
name: until
description: Run a command repeatedly, fixing failures automatically, until it exits 0.
argument-hint: "<command>"
user-invocable: true
---

# Until

Run `$ARGUMENTS` and keep fixing failures until the command exits successfully.

## Process

1. **Parse the command**: Use `$ARGUMENTS` as the shell command to run (e.g. `make test`, `pnpm run lint`, `make lint`). If no argument is given, ask the user what command to run.

2. **Run the command**: Execute it with the Bash tool. Capture both stdout and stderr.

3. **If it exits 0**: Report success and stop. Done.

4. **If it fails**:
   - Read the full error output carefully
   - Identify the **root cause** — read the relevant source files to understand context
   - Fix the issue directly (Edit the files, do not run workarounds)
   - Run the command again
   - Repeat from step 3

5. **Iteration cap**: After **10 consecutive failures without progress**, stop and report what you tried, what remains broken, and what needs human judgment. Do not loop forever on the same error.

## Rules

- **Never skip or weaken the command** — do not change `make test` to `make test -run SomeTest` to make it easier to pass
- **Never add `|| true` or similar bypasses** — the command must genuinely exit 0
- **Fix root causes** — not symptoms. If a test fails because of a missing field, add the field. Don't delete the test.
- **Read files before editing** — understand the code before changing it
- **One fix at a time** — after each fix, run the command again immediately. Don't batch-guess multiple fixes.
- **Report what you fixed** — after each iteration, briefly say what changed and why
- **If the same error repeats 3 times** — stop, explain the situation, and ask the user for guidance
- **Do not ask permission to fix things** — just fix them and report what you did

## Progress detection

Between iterations, check whether the error output changed:
- If the error changed → progress is being made, continue
- If the exact same error repeats → you are stuck. After 3 stuck iterations, stop and ask the user.

## Output format

After each iteration:

```
[Iteration N] Command: <command>
Status: FAILED
Error: <short summary of what failed>
Fix applied: <one sentence describing the change>
```

When done:

```
[Iteration N] Command: <command>
Status: PASSED ✓
Summary: Fixed N issues: <brief list>
```

## Examples

```
/until make test
/until pnpm run lint
/until make lint
/until pnpm run test:ci
/until pnpm run check
```

---

# EXECUTION PROMPT

You are now executing `/until` for the command: **$ARGUMENTS**

Run the command now. If it fails, fix the root cause and run it again. Do not stop until it exits 0 or you are genuinely stuck (same error 3 times in a row). Do not ask for permission before fixing — just fix, run, report.
