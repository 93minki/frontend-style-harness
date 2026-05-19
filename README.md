# Frontend Style Harness

`frontend-style-harness` is a Codex skill that interviews a frontend developer and generates a project-local coding style harness for React, Next.js, TypeScript, and TailwindCSS.

The generated harness helps Codex or Claude Code write code in a style that is easier for the project owner to understand.

## What It Generates

Depending on the selected target, the skill creates:

```txt
AGENTS.md
CLAUDE.md
ai-style-examples/
.codex/
  skills/
    frontend-style/
      SKILL.md
.claude/
  skills/
    frontend-style/
      SKILL.md
```

`AGENTS.md` and `CLAUDE.md` stay short. They point the agent to the local `frontend-style` skill and `ai-style-examples/`.

The detailed rules live in the generated local skill. Concrete examples live in `ai-style-examples/`.

## Installation

Clone this repository:

```bash
git clone https://github.com/93minki/frontend-style-harness.git
```

Move it into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
mv frontend-style-harness ~/.codex/skills/frontend-style-harness
```

The installed structure should look like this:

```txt
~/.codex/skills/frontend-style-harness/
  SKILL.md
  agents/
  assets/
  references/
```

Restart Codex or start a new Codex session so the skill can be discovered.

## Usage

Open the frontend project where you want to generate a style harness.

Then ask Codex:

```txt
Use $frontend-style-harness to create a frontend style harness for this project.
```

Korean example:

```txt
$frontend-style-harness 스킬을 사용해서 이 프로젝트에 맞는 프론트엔드 스타일 하네스를 만들어줘.
```

## Interview Flow

The skill will ask about:

- target tool: Codex, Claude Code, or both
- generated document language
- whether it may inspect the current project
- TypeScript function style
- React component style
- `type` vs `interface`
- props typing style
- conditional rendering
- list rendering
- form state
- Next.js App Router data loading
- TailwindCSS className style
- component and hook splitting preferences

It also asks for two required code samples:

- a TypeScript function
- a React list component

Two optional samples improve accuracy:

- a small form component
- a conditional TailwindCSS button

These samples are not tests. They are used to observe naming, typing, JSX, state, and TailwindCSS patterns.

## Safety

The skill is designed not to damage existing projects.

It must:

- ask before reading the project
- ask again before writing files
- never overwrite existing files automatically
- show a file plan before generation
- show conflicts when files already exist
- keep `AGENTS.md` and `CLAUDE.md` short

If existing files are found, the skill should ask whether to update, back up, skip, or use a different name.

## After Generation

After approval, the target project will contain a local style harness.

For Codex:

```txt
AGENTS.md
ai-style-examples/
.codex/
  skills/
    frontend-style/
      SKILL.md
```

For Claude Code:

```txt
CLAUDE.md
ai-style-examples/
.claude/
  skills/
    frontend-style/
      SKILL.md
```

For both tools, both sets are generated.

When creating or editing frontend code later, ask the agent to follow the local `frontend-style` skill and `ai-style-examples/`.

