---
name: create-issue
description: Draft and create a well-structured GitHub issue.
argument-hint: "<title or summary>"
user-invocable: true
---

# Create Issue

Draft and create a GitHub issue on the `BHC-IT/dosimex_site` repository.

## Process

1. **Gather input** from `$ARGUMENTS`:
   - If brief (a few words), ask clarifying questions to build a well-defined issue
   - If coming from a brainstorm convergence, use the feature summary to structure the issue
   - If empty, ask the user what issue they want to create

2. **Explore the codebase**: Before drafting, use Read, Grep, and Glob to understand the relevant parts of the codebase. Ground the issue in technical reality — reference actual file paths, patterns, and constraints.

3. **Draft the issue** with GitHub Flavored Markdown:

   - **Title**: Clear, actionable, concise (imperative mood preferred)
   - **Description** structured as:

     ```
     ## Context
     [Why this is needed — user problem or business motivation]

     ## Problem
     [What's wrong or missing — specific, observable symptoms]

     ## Proposed Solution
     [Concrete approach — reference files, patterns, APIs]

     ## Acceptance Criteria
     - [ ] Criterion 1
     - [ ] Criterion 2
     - [ ] All quality checks pass (lint, test, typecheck)

     ## Technical Notes
     [Relevant files, patterns, constraints]

     ## Out of Scope
     [What's explicitly deferred to keep scope tight]
     ```

   - **Labels**: Assign appropriate labels if they exist on the repo.

4. **Show the draft** to the user for review and approval. Wait for explicit confirmation before creating.

5. **Create the issue**: Use `gh issue create` via Bash with the drafted title, body, and labels.

6. **Report**: Show the issue URL and number.

7. **Suggest next steps**:
   - `/blueprint <goal> --issue #N` — to plan the implementation
   - `/brainstorm #N` — if more refinement is needed first

## Rules

- **Always show draft before creating** — never create without user confirmation
- Always use repository `BHC-IT/dosimex_site`
- Ground technical notes in actual codebase exploration, not guesses
