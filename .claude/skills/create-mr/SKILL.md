---
name: create-mr
description: Create a GitHub pull request from the current branch with CI tracking.
argument-hint: "[title or description]"
user-invocable: true
---

# Create Pull Request

Create a GitHub pull request from the current branch into `master` on `BHC-IT/dosimex_site`.

## Process

1. **Validate branch state**:
   - Run `git branch --show-current` — must NOT be `master`
   - Run `git log master..HEAD --oneline` — must have commits ahead of `master`
   - If on `master` or no commits ahead, report and stop

2. **Check remote state**:
   - Run `git remote -v` and `git rev-parse --abbrev-ref --symbolic-full-name @{u}` to check if branch tracks a remote
   - If not pushed: ask the user for confirmation, then `git push -u origin <branch>`
   - If pushed but behind: ask user before pushing new commits

3. **Generate PR title and description**:
   - **Title**: From `$ARGUMENTS` if provided, otherwise from branch name or commit summary. Use conventional format (`type(scope): description`).
   - **Description**:

     ```
     ## Summary
     [Bullet points summarizing the changes from commit messages]

     ## Issue
     Closes #N (if an issue ref is known from plan YAML or user input)

     ## Changes
     [File-level summary of what changed, grouped by area]

     ## Test Plan
     - [ ] Tests pass locally (`pnpm test:run`)
     - [ ] Lint passes (`pnpm lint:check`)
     - [ ] Type checks pass (`pnpm check-types`)
     ```

   - **Detect issue refs**: Check `.claude/plans/*.yaml` for any plan with `done: false` tasks that has an `issue` field. Also accept `--issue <number>` in `$ARGUMENTS`.

4. **Show draft** to user for approval. Wait for confirmation.

5. **Create the PR**: Use `gh pr create` with the drafted title, body, base branch `master`.

6. **Report**: Show the PR URL.

## Rules

- **Always confirm before pushing or creating** — never force-push
- Target branch is always `master`
- Detect issue refs from plan YAML files if available
- Never force-push (`--force` or `--force-with-lease`)
