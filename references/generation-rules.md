# Generation Rules

Turn interview answers, code samples, and existing project patterns into a compact local frontend style harness.

## Priority

When signals disagree, use this order:

1. The user's final explicit confirmation.
2. Code samples the user wrote during the interview.
3. Selectable interview answers.
4. Existing project patterns, if inspection was approved.
5. Conservative defaults.

If the current project has a strong existing pattern that conflicts with the user answer, show the conflict and ask which one should win.

## Platform Mapping

Codex:

- Create or update `AGENTS.md` as a short entry point.
- Create `.codex/skills/frontend-style/SKILL.md`.

Claude Code:

- Create or update `CLAUDE.md` as a short entry point.
- Create `.claude/skills/frontend-style/SKILL.md`.

Both:

- Create both entry files and both local skills.

Always create or update `ai-style-examples/`, unless the user chooses another conflict strategy.

## Entry File Rules

`AGENTS.md` and `CLAUDE.md` must stay short.

They should include only:

- this project uses a generated frontend style harness
- use the local `frontend-style` skill before React, Next.js, TypeScript, or TailwindCSS work
- use `ai-style-examples/` when style decisions are unclear

Do not duplicate the full style guide in entry files.

## Local Skill Rules

The generated local `SKILL.md` is the detailed style guide.

It should include:

- when to use the skill
- confirmed user style summary
- concrete rules by topic
- examples to check by task type
- before editing checklist
- while editing guidance
- after editing self-review checklist

Keep examples out of the local skill when they can live in `ai-style-examples/`.

## Extracted Style Areas

Generate rules for these areas when signal exists:

- TypeScript function declaration style
- React component declaration style
- `type` vs `interface`
- props typing style
- export style
- conditional rendering
- list rendering
- form state
- event handler naming and typing
- Next.js App Router server components
- client component boundaries
- TailwindCSS class order and formatting
- conditional className style
- component splitting
- custom hook splitting
- utility function extraction

## Code Sample Analysis

For the TypeScript function sample, look for:

- `function` vs arrow function
- function and parameter naming
- return type annotation
- inline object return vs named result variable
- empty input handling
- `reduce` vs loop
- separate type alias/interface for the return shape

For the React list sample, look for:

- component declaration style
- props type style
- props destructuring location
- empty state handling
- `map` placement
- item component extraction
- condition placement
- TailwindCSS class style
- price formatting approach

For the form sample, look for:

- separate `useState` calls vs object state
- submit handler naming
- event type annotation
- derived disabled value
- reset behavior
- inline handlers vs named handlers

For the button sample, look for:

- props type style
- optional prop defaults
- `disabled` attribute use
- `onClick` wrapping
- conditional className technique
- TailwindCSS class ordering

## Philosophy Summary

Do not ask the user to choose a coding philosophy at the start.

After analysis, write a short human-readable summary such as:

- "You seem to prefer keeping simple UI flow visible in one component until reuse or complexity justifies extraction."
- "You seem to prefer named types and explicit component boundaries."
- "You seem to prefer helper-based class composition for stateful UI."

Treat this as a summary, not a rigid label.

## Example Generation

Examples must reflect the confirmed style:

- If the user prefers function components, examples use function components.
- If the user prefers arrow components, examples use arrow components.
- If the user prefers `type`, examples use `type`.
- If the user prefers `interface`, examples use `interface`.
- If the user prefers direct JSX conditionals, examples show that.
- If the user prefers `cn`, examples may use `cn`, but do not introduce a `cn` dependency into an existing project without approval.

If there is no clear signal, choose readable, conservative code and mention that the rule is a default.

