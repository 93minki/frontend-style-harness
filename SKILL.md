---
name: frontend-style-harness
description: Interview a frontend developer and generate a project-local coding style harness for React, Next.js, TypeScript, and TailwindCSS. Use when the user wants Codex or Claude Code to create AGENTS.md/CLAUDE.md, local frontend-style skills, and ai-style-examples that reflect their personal frontend coding style.
---

# Frontend Style Harness

## Overview

This skill creates a project-local frontend style harness from a short interview and a few targeted code samples.

The generated harness teaches Codex and/or Claude Code how to write React, Next.js, TypeScript, and TailwindCSS code in the user's preferred style.

## Non-Negotiable Rules

- Default to Korean. Use English only when the user asks for English or continues in English.
- Do not read the current project before the user approves reading it.
- Do not create or edit files before the user approves the final file plan.
- Never overwrite existing files automatically.
- Run the interview in small topic groups. Never ask the full style questionnaire in one message.
- Show concrete, friendly code examples for style choices. Prefer "Which example is closer?" over abstract labels.
- Keep `AGENTS.md` and `CLAUDE.md` short. They are entry points, not full style guides.
- Put detailed style rules in the generated local skill.
- Put concrete code style examples in `ai-style-examples/`.
- If answers, code samples, and existing project patterns conflict, show the conflict and ask which one should win.

## Workflow

1. Confirm the user wants to generate a frontend style harness.
2. Decide the output language.
   - Korean by default.
   - English if requested.
3. Ask which tool target to support:
   - Codex
   - Claude Code
   - Both
4. Ask whether you may inspect the current project.
   - If yes, check existing `AGENTS.md`, `CLAUDE.md`, `ai-style-examples/`, `.codex/skills/`, `.claude/skills/`, and a small sample of frontend source files.
   - If no, continue from interview answers only.
5. Run the staged interview from `references/interview-flow.md`.
   - Ask the opening/setup questions first.
   - Then ask one topic group at a time: TypeScript, React structure, state/data, TailwindCSS, splitting boundaries, and code samples.
   - Ask at most 3-4 selectable questions in a turn.
   - Ask at most one required code sample in a turn unless the user explicitly asks for a one-shot interview.
   - Briefly summarize what was learned before moving to the next topic group.
6. Analyze answers and samples using `references/generation-rules.md`.
7. Apply the safety rules in `references/file-policy.md`.
8. Present a generation summary:
   - selected platform targets
   - inferred style rules
   - conflicts or weak signals
   - exact files to create or update
   - any existing-file handling choices
9. Wait for explicit write approval.
10. Generate files from `assets/templates/`, adapting them to the confirmed style.
11. Validate the created harness:
   - required files exist for the selected platform target
   - entry files are short
   - local skill contains the detailed rules
   - examples reflect confirmed preferences
12. Report the created files and each file's purpose.

## Reference Map

Read only what is needed:

- `references/interview-flow.md`: question order, selectable questions, required and optional code sample prompts.
- `references/generation-rules.md`: how to turn answers and code samples into style rules.
- `references/file-policy.md`: read/write approvals, existing-file handling, conflict choices.

## Output Templates

Use these as starting points. Adapt them to the user's confirmed style and language:

- `assets/templates/agents-entry.md`
- `assets/templates/claude-entry.md`
- `assets/templates/local-skill.md`
- `assets/templates/examples/simple-list.tsx`
- `assets/templates/examples/conditional-rendering.tsx`
- `assets/templates/examples/form-state.tsx`
- `assets/templates/examples/server-component.tsx`
- `assets/templates/examples/client-component.tsx`
- `assets/templates/examples/component-splitting.md`
- `assets/templates/examples/bad-vs-good.md`
