# MkDocs → Docusaurus Conversion Patterns

Quick-reference for search-and-replace conversions. Each section shows the MkDocs source pattern, the Docusaurus target, and notes on edge cases.

---

## 1. Standard Admonitions (`!!!`)

**MkDocs (pymdownx.admonition)**:
```markdown
!!! note "Optional Title"
    Content inside the admonition.
    Can span multiple lines.
```

**Docusaurus**:
```markdown
:::note[Optional Title]

Content inside the admonition.
Can span multiple lines.

:::
```

**Regex (find)**:
```
^(!{3})\s+(note|tip|info|warning|danger|caution|important)\s*"([^"]*)"\s*$
```

**Rules**:
- Replace `!!!` header with `:::type[Title]`
- Un-indent the body (remove leading 4 spaces)
- Add blank line after opening `:::type[...]` and before closing `:::`
- Close with `:::` on its own line
- If no title: `!!! note` → `:::note` (no brackets)
- Supported types: `note`, `tip`, `info`, `warning`, `danger`, `caution`
- MkDocs `abstract`, `example`, `quote`, `bug`, `success`, `failure`, `question` → map to closest Docusaurus type or use `:::info[Original Type: abstract]`

---

## 2. Collapsible Admonitions (`???`)

**MkDocs (pymdownx.details)**:
```markdown
??? warning "Click to expand"
    Hidden content here.
```

**Docusaurus (MDX `<details>`)**:
```mdx
<details className="admonition admonition-warning">
<summary>Click to expand</summary>

Hidden content here.

</details>
```

**Regex (find)**:
```
^(\?{3})\+?\s+(note|tip|info|warning|danger)\s*"([^"]*)"\s*$
```

**Rules**:
- `???` = collapsed by default → `<details>`
- `???+` = open by default → `<details open>`
- Blank line required after `<summary>` and before `</details>` for MDX to parse inner Markdown
- Add `className="admonition admonition-TYPE"` to inherit Docusaurus admonition CSS
- Un-indent body content (remove leading 4 spaces)

---

## 3. Tabbed Content (`pymdownx.tabbed`)

**MkDocs**:
```markdown
=== "Tab One"

    Content for tab one.

=== "Tab Two"

    Content for tab two.
```

**Docusaurus (MDX)**:
```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="tab-one" label="Tab One">

Content for tab one.

  </TabItem>
  <TabItem value="tab-two" label="Tab Two">

Content for tab two.

  </TabItem>
</Tabs>
```

**Regex (find tab headers)**:
```
^===\s+"([^"]+)"\s*$
```

**Rules**:
- File MUST be renamed `.md` → `.mdx`
- Add `import` statements at top of file (once, before first usage)
- Generate `value` from label: lowercase, spaces → hyphens
- Blank lines around inner content for MDX Markdown parsing
- Nested tabs: supported but verbose — consider simplifying

---

## 4. Code Blocks

### Line Highlighting

**MkDocs** (`pymdownx.superfences` + `pymdownx.highlight`):
```markdown
```python hl_lines="1 3-5"
code here
​```
```

**Docusaurus**:
```markdown
```python {1,3-5}
code here
​```
```

**Regex (find)**:
```
^```(\w+)\s+hl_lines="([\d\s\-]+)"
```

**Conversion**: `hl_lines="1 3-5"` → `{1,3-5}` (spaces → commas, append to language tag).

### Title / Filename

**MkDocs**: `title="config.yaml"` attribute in fence
**Docusaurus**: `title="config.yaml"` — same syntax, works natively.

### Annotations

**MkDocs**: `{.annotate}` class on code fence with numbered annotations below.
**Docusaurus**: No direct equivalent. Convert to inline comments within code or a note below the block.

---

## 5. Icon Shortcodes

**MkDocs** (Material icons):
```markdown
:material-account-circle: Profile
:fontawesome-brands-github: GitHub
:octicons-repo-24: Repository
```

**Docusaurus (default — strip)**:
```markdown
Profile
GitHub
Repository
```

**Regex (find)**:
```
:(material|fontawesome|octicons)-[a-z0-9-]+:\s*
```

**Docusaurus (opt-in Iconify mapping)**:
```mdx
<IIcon icon="mdi:account-circle" /> Profile
<IIcon icon="fa6-brands:github" /> GitHub
<IIcon icon="octicon:repo-24" /> Repository
```

**Rules**:
- Default: strip shortcodes entirely (decorative)
- If user opts into Iconify: map `material-*` → `mdi:*`, `fontawesome-*` → `fa6-*:*`, `octicons-*` → `octicon:*`
- Requires `src/theme/MDXComponents` wiring — not something the migration should assume

---

## 6. Definition Lists

**MkDocs** (`def_list`):
```markdown
Term
:   Definition of the term.

Another term
:   Another definition.
```

**Docusaurus Option A — Plain Markdown**:
```markdown
**Term**: Definition of the term.

**Another term**: Another definition.
```

**Docusaurus Option B — rehype plugin**:
Add `remark-definition-list` to docs plugin config. Keeps original syntax.

**Regex (find)**:
```
^:   \S
```

---

## 7. Keys / Keyboard Shortcuts

**MkDocs** (`pymdownx.keys`):
```markdown
++ctrl+alt+delete++
```

**Docusaurus**:
```markdown
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Delete</kbd>
```

**Regex (find)**:
```
\+\+([a-z+]+)\+\+
```

---

## 8. Task Lists

**MkDocs** (`pymdownx.tasklist`):
```markdown
- [x] Done
- [ ] Not done
```

**Docusaurus**: Identical syntax — GFM task lists supported natively. No conversion needed.

---

## Batch Conversion Order

Apply conversions in this order to avoid conflicts:

1. Standard admonitions (`!!!`) — most common, no rename
2. Collapsible admonitions (`???`) — no rename, but MDX-sensitive
3. Tabs (`===`) — triggers `.mdx` rename
4. Code block metadata — in-place
5. Icon shortcodes — strip or map
6. Definition lists — in-place or plugin
7. Keyboard shortcuts — in-place
8. Remaining edge cases — manual review
