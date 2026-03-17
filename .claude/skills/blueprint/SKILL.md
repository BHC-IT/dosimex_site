---
name: blueprint
description: Generate a structured YAML plan for multi-step implementation tasks.
argument-hint: '<goal description>'
user-invocable: true
tags: [universal]
---

# Blueprint

Generate a structured YAML plan for the given goal. The plan will be executed by `/plan-run`, which dispatches tasks to specialized agents, runs checks after each task, and commits on success.

## Process

1. **Understand the goal**: Read and analyze `$ARGUMENTS`. Explore the codebase to understand the current state, relevant files, patterns, and conventions.
   - **Issue-aware input**: If `$ARGUMENTS` contains `#<number>` or `--issue <number>`, use `/fetch-issue` to load the issue first for context. Extract the issue number for inclusion in the plan YAML.

2. **Identify checks**: The following quality checks must run after each task:
   ```bash
   pnpm test:run       # Run all tests (NEVER use pnpm test — hangs)
   pnpm lint:check     # 0 warnings required
   pnpm check-types    # 0 TypeScript errors required
   ```

3. **Ripple analysis — what else is affected?** Before writing any tasks, trace the full impact of the change:
    - **Grep for references**: Search for every type, function, constant, and pattern you plan to modify. Who calls it? Who imports it?
    - **Check translations**: If adding/modifying UI text, both `src/lang/fr.ts` and `src/lang/en.ts` need updates matching the `ILang` interface in `src/lang/interface.ts`.
    - **Check responsive design**: If modifying components, consider mobile/desktop variants using `useIsMobile`/`useMobile` hooks and `BREAKPOINTS` from `src/types/styling.ts`.
    - **Walk the boundaries**: If the change crosses a boundary (component -> page, hook -> component, lang -> interface), check both sides.
    - **Flag uncertainty to the user**: If you find something that MIGHT need updating but you're not sure, say so before writing the plan.

4. **Break the work into steps and tasks**:
    - **Steps** are logical groupings (e.g. "Setup", "Core logic", "Tests").
    - **Tasks** are atomic units of work. Each task runs in a **specialized agent** with no prior context, so every task prompt must be **self-contained** — include all necessary context, file paths, function signatures, and conventions.
    - Each task should produce changes that pass all checks independently.
    - Keep tasks small enough that checks can validate them, but large enough to be meaningful.

5. **Write self-contained task prompts**: Each prompt must include:
    - What to do (specific, actionable instructions)
    - Where to do it (exact file paths)
    - How to do it (patterns to follow, functions to use, conventions to respect)
    - What NOT to do (no `any` types, no `pnpm test` in watch mode)

6. **Write the plan file**: Write the YAML plan to `.claude/plans/<descriptive-name>.yaml` using the Write tool.
    - The file MUST be written to the `.claude/plans/` directory (create it if it doesn't exist)
    - Use a short, kebab-case name derived from the goal (e.g. `add-carousel.yaml`, `fix-navbar.yaml`)
    - Do NOT just output the YAML in the conversation — it must be a file on disk
    - The file will be executed via: `/plan-run .claude/plans/<name>.yaml`

Use this exact schema:

```yaml
goal: "<one-line description of what we're building>"
issue: 42  # optional — GitHub issue number (from #N or --issue N)
checks:
    - name: tests
      command: 'pnpm test:run'
    - name: lint
      command: 'pnpm lint:check'
    - name: types
      command: 'pnpm check-types'
steps:
    - name: '<step name>'
      tasks:
          - id: '<step.task>'
            summary: '<short task description — used as context for auto-generated commit messages>'
            prompt: |
                <self-contained instructions for a specialized agent>
            files: [optional/list/of/relevant/files.ts]
            done: false
```

## Rules

- The plan MUST be written to `.claude/plans/<name>.yaml` — never output it inline.
- Task IDs must be hierarchical: `1.1`, `1.2`, `2.1`, etc.
- Task prompts must be self-contained — assume no prior context from earlier tasks.
- The `files` field is optional hints for Claude to read first, not a restriction.
- Check commands must work from the project root.
- The `summary` field is a short description used as context when auto-generating commit messages — keep it concise and descriptive.
- Always set `done: false` on new tasks. `plan-run` flips this to `true` when a task passes all checks. On re-run, tasks with `done: true` are skipped.
- If an issue number is known (from `$ARGUMENTS`), include it as the `issue` field in the YAML. This enables `/plan-run` and `/commit` to automatically reference it.
- At the end, if no issue exists yet, suggest `/create-issue` to create one for tracking.
