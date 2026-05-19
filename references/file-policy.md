# File Policy

This skill must be careful with user files. A style harness is supposed to protect a project, not damage it.

## Core Rules

- Separate read approval from write approval.
- Do not inspect the project until the user approves reading.
- Do not create or edit files until the user approves the final file plan.
- Never overwrite existing files automatically.
- Show conflicts clearly.
- Prefer appending a short managed block to existing entry files over replacing them.

## Existing Entry Files

For `AGENTS.md` and `CLAUDE.md`:

- If missing, create the file from the matching template.
- If present, summarize the existing file first.
- Propose adding a short managed block.
- Show the exact block before writing.
- Do not replace unrelated existing guidance.

Use markers for appended blocks:

```md
<!-- frontend-style-harness:start -->
...
<!-- frontend-style-harness:end -->
```

If a managed block already exists, propose updating only that block.

## Existing Local Skills

For `.codex/skills/frontend-style/SKILL.md` and `.claude/skills/frontend-style/SKILL.md`:

- If missing, create it.
- If present, summarize it and ask how to proceed.

Offer:

- update the existing skill
- back it up and regenerate
- choose a different local skill name
- cancel this part

Do not overwrite without explicit approval.

## Existing Example Files

For `ai-style-examples/`:

- If missing, create it.
- If present, list existing files.
- If a target file already exists, ask whether to update, back up, skip, or use a different folder.

Possible alternative folder names:

- `ai-style-examples.generated`
- `ai-style-examples.frontend-style`

## File Plan

Before writing, show a plan like:

```txt
Will create:
- AGENTS.md
- .codex/skills/frontend-style/SKILL.md
- ai-style-examples/simple-list.tsx

Will update:
- none

Conflicts:
- ai-style-examples/form-state.tsx already exists. Choose update, backup, skip, or alternate folder.
```

Only proceed after the user approves the plan and resolves conflicts.

## Post-Write Summary

After writing, report:

- created files
- updated files
- skipped files
- any backups
- how to use the generated harness next

