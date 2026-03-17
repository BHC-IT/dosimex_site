---
name: fetch-issue
description: Fetch a GitHub issue and display its details for context.
argument-hint: "<issue-number or URL>"
user-invocable: true
---

# Fetch Issue

Fetch a GitHub issue from the `BHC-IT/dosimex_site` repository and present it as structured context.

## Process

1. **Parse the issue number** from `$ARGUMENTS`:
   - Strip `#` prefix if present (e.g. `#42` -> `42`)
   - Extract from GitHub URL if a full URL is given
   - If no argument, ask the user for an issue number

2. **Fetch the issue**: Use `gh issue view <number>` via Bash.

3. **Fetch related data** (in parallel where possible):
   - Related pull requests via `gh pr list --search "<issue number>"`
   - Comments via `gh issue view <number> --comments`

4. **Present structured output**:

   ### Issue #N: <Title>

   **Status**: open/closed | **Labels**: label1, label2 | **Assignees**: @user1

   #### Description
   <Full markdown description>

   #### Related Pull Requests
   - #PR-number: title (status)

   #### Comments
   - N comments total
   - Most recent: @user — "comment preview..." (date)

5. **Store context**: Mention that this issue context is now available for other skills (`/brainstorm #N`, `/blueprint --issue N`).

## Rules

- **Read-only** — never modify the issue
- Always use repository `BHC-IT/dosimex_site`
- If the issue doesn't exist, report clearly and stop
