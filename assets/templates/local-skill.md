---
name: frontend-style
description: Apply this project's generated frontend coding style for React, Next.js, TypeScript, and TailwindCSS work.
---

# Frontend Style

## When To Use

Use this skill before creating or modifying React, Next.js, TypeScript, or TailwindCSS code in this project.

## Style Summary

{{STYLE_SUMMARY}}

## Confirmed Rules

### TypeScript

{{TYPESCRIPT_RULES}}

### React

{{REACT_RULES}}

### Next.js App Router

{{NEXTJS_RULES}}

### TailwindCSS

{{TAILWIND_RULES}}

### Splitting And Abstraction

{{SPLITTING_RULES}}

## Examples To Check

- Lists and empty states: `ai-style-examples/simple-list.tsx`
- Loading, error, empty, and success states: `ai-style-examples/conditional-rendering.tsx`
- Form state and handlers: `ai-style-examples/form-state.tsx`
- Server component data loading: `ai-style-examples/server-component.tsx`
- Client component state and events: `ai-style-examples/client-component.tsx`
- Splitting decisions: `ai-style-examples/component-splitting.md`
- Avoided patterns: `ai-style-examples/bad-vs-good.md`

## Before Editing

- Read the closest example before choosing a style pattern.
- Prefer the confirmed project style over generic best practices.
- If the user gives a direct instruction that conflicts with this style, follow the user's current instruction.
- If the existing file strongly follows a different local pattern, preserve that local pattern unless the user asks to change it.

## While Editing

- Keep code easy for this project's owner to scan.
- Do not add helper functions, hooks, or generic components unless the confirmed rules justify it.
- Keep related UI flow close together unless splitting improves readability or matches the confirmed splitting rules.
- Use TailwindCSS in the confirmed className style.

## After Editing

Check:

- Does the code match the generated examples?
- Did you avoid unnecessary abstraction?
- Did you preserve existing project conventions where they are stronger than the generic rule?
- Are new names consistent with the user's samples?
- Are TypeScript and TailwindCSS patterns consistent with this skill?

