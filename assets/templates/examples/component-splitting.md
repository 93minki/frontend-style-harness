# Component Splitting

Use this document to record the user's confirmed splitting preferences.

## Keep Together

Keep code in the same component when:

- the UI is still easy to read
- the JSX is only used once
- extracting it would hide the main flow
- the extracted name would not add meaning

## Split Into A Component

Split into a component when:

- the JSX has a clear independent meaning
- the same UI appears in more than one place
- the parent component is hard to scan
- props form a clear boundary

## Avoid

- extracting tiny JSX only because it could be reused later
- creating render helpers for simple `map` or conditional rendering
- creating generic components before the repeated use case is real

## Confirmed Project Preference

{{COMPONENT_SPLITTING_SUMMARY}}

