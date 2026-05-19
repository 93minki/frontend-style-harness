# Frontend Style Harness

`frontend-style-harness`는 프론트엔드 개발자의 코드 취향을 인터뷰한 뒤, 프로젝트 안에 로컬 코드 스타일 하네스를 생성하는 Codex 스킬입니다.

대상 기술은 React, Next.js, TypeScript, TailwindCSS입니다.

목표는 “가장 추상화가 잘 된 코드”가 아니라, **프로젝트 소유자가 빠르게 이해하고 유지보수할 수 있는 코드 스타일**을 에이전트가 따르도록 돕는 것입니다.

## 생성되는 것

선택한 대상에 따라 아래 파일이 생성됩니다.

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

`AGENTS.md`와 `CLAUDE.md`는 짧은 진입점 역할만 합니다.

상세한 코드 스타일 규칙은 생성된 로컬 `frontend-style` 스킬에 들어가고, 실제 코드 예제는 `ai-style-examples/`에 들어갑니다.

## 설치 방법

레포를 클론합니다.

```bash
git clone https://github.com/93minki/frontend-style-harness.git
```

Codex 전역 스킬 폴더로 옮깁니다.

```bash
mkdir -p ~/.codex/skills
mv frontend-style-harness ~/.codex/skills/frontend-style-harness
```

설치 후 구조는 아래처럼 보이면 됩니다.

```txt
~/.codex/skills/frontend-style-harness/
  SKILL.md
  agents/
  assets/
  references/
```

그 다음 Codex를 재시작하거나 새 세션을 열어 스킬이 인식되도록 합니다.

## 사용 방법

하네스를 만들고 싶은 프론트엔드 프로젝트를 Codex에서 엽니다.

그 다음 이렇게 요청합니다.

```txt
$frontend-style-harness 스킬을 사용해서 이 프로젝트에 맞는 프론트엔드 스타일 하네스를 만들어줘.
```

영어로 요청할 수도 있습니다.

```txt
Use $frontend-style-harness to create a frontend style harness for this project.
```

## 인터뷰 흐름

스킬은 대략 아래 내용을 묻습니다.

- Codex에서 쓸지, Claude Code에서 쓸지, 둘 다 쓸지
- 생성 문서 언어
- 현재 프로젝트 파일을 읽어도 되는지
- TypeScript 함수 작성 방식
- React 컴포넌트 작성 방식
- `type` / `interface` 선호
- props 타입 작성 방식
- 조건부 렌더링 방식
- 리스트 렌더링 방식
- 폼 상태 관리 방식
- Next.js App Router 데이터 요청 방식
- TailwindCSS className 작성 방식
- 컴포넌트와 custom hook 분리 기준

선택형 질문만으로 끝내지 않고, 패턴을 찾기 위한 코드 샘플도 요청합니다.

필수 샘플:

- TypeScript 함수
- React 리스트 컴포넌트

선택 샘플:

- 작은 폼 컴포넌트
- 조건부 TailwindCSS 버튼

이 샘플은 테스트가 아닙니다.

함수명, 타입 작성 방식, JSX 구성, 상태 관리, TailwindCSS className 작성 방식 같은 실제 습관을 보기 위한 자료입니다.

## 안전 정책

이 스킬은 기존 프로젝트 파일을 함부로 변경하지 않도록 설계되어 있습니다.

스킬은 반드시:

- 프로젝트를 읽기 전에 먼저 물어봅니다.
- 파일을 쓰기 전에 다시 승인받습니다.
- 기존 파일을 자동으로 덮어쓰지 않습니다.
- 생성 전에 파일 계획을 보여줍니다.
- 이미 같은 파일이 있으면 충돌을 알려줍니다.
- `AGENTS.md`와 `CLAUDE.md`를 짧게 유지합니다.

기존 파일이 있으면 업데이트, 백업, 건너뛰기, 다른 이름 사용 중에서 선택하도록 안내해야 합니다.

## 생성 후 사용

승인 후 대상 프로젝트에는 로컬 스타일 하네스가 생성됩니다.

Codex용:

```txt
AGENTS.md
ai-style-examples/
.codex/
  skills/
    frontend-style/
      SKILL.md
```

Claude Code용:

```txt
CLAUDE.md
ai-style-examples/
.claude/
  skills/
    frontend-style/
      SKILL.md
```

둘 다 선택하면 두 구조가 모두 생성됩니다.

이후 프론트엔드 코드를 만들거나 수정할 때는 로컬 `frontend-style` 스킬과 `ai-style-examples/`를 기준으로 작업하도록 요청하면 됩니다.

예:

```txt
이 프로젝트의 frontend-style 스킬과 ai-style-examples 기준으로 컴포넌트를 만들어줘.
```

## English Summary

`frontend-style-harness` is a Codex skill that interviews a frontend developer and generates a project-local coding style harness for React, Next.js, TypeScript, and TailwindCSS.

Install it into `~/.codex/skills/frontend-style-harness`, restart Codex, open a target frontend project, and ask:

```txt
Use $frontend-style-harness to create a frontend style harness for this project.
```

The generated harness keeps `AGENTS.md` and `CLAUDE.md` short, stores detailed rules in a local `frontend-style` skill, and stores concrete style examples in `ai-style-examples/`.

