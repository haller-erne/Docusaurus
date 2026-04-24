"""
Convert MkDocs-style 4-space indented code blocks to fenced code blocks.
Skips content already inside fenced code blocks.
"""
import re, os, glob

OGS_DIR = os.path.join(os.path.dirname(__file__), 'ogs-docs')

def detect_language(block_text):
    """Heuristic language detection for code blocks."""
    text = block_text.strip()
    # INI-style config sections
    if re.search(r'^\[[\w_]+\]', text, re.MULTILINE):
        return 'ini'
    # Lua patterns
    if re.search(r'\bfunction\b|\blocal\b|\breturn\b|\brequire\b|\bend\b', text):
        return 'lua'
    # PowerShell
    if re.search(r'\bparam\b|\bfunction\b.*\{|\$\w+|\bGet-\w+|\bSet-\w+|ConvertTo-|ConvertFrom-', text):
        return 'powershell'
    # Bash/shell
    if re.search(r'^(openssl|curl|wget|apt|pip|npm|git|sudo|chmod|mkdir|cd|echo|export)\b', text, re.MULTILINE):
        return 'bash'
    # C-style
    if re.search(r'^(enum|struct|typedef|#define|#include)\b', text, re.MULTILINE):
        return 'c'
    # Mermaid (stateDiagram, graph, etc.)
    if re.search(r'stateDiagram|graph\s+(TD|LR|TB|BT)', text):
        return 'mermaid'
    return ''

def convert_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    result = []
    i = 0
    in_fenced = False
    changed = False

    while i < len(lines):
        line = lines[i]

        # Track fenced code blocks (``` or ~~~)
        stripped = line.strip()
        if stripped.startswith('```') or stripped.startswith('~~~'):
            in_fenced = not in_fenced
            result.append(line)
            i += 1
            continue

        if in_fenced:
            result.append(line)
            i += 1
            continue

        # Check for 4-space indented code block (not inside a list or blockquote context)
        # A code block starts with 4-space indent after a blank line (or start of meaningful text)
        if line.startswith('    ') and not line.startswith('     ') or line.startswith('    '):
            # Check if previous non-empty line is a blank line or we're at the start
            prev_non_empty = ''
            for j in range(len(result) - 1, -1, -1):
                if result[j].strip():
                    prev_non_empty = result[j]
                    break

            # Skip if this looks like a list continuation (previous line is a list item or indented list)
            if prev_non_empty.strip().startswith(('-', '*', '+')) and not line.startswith('    ['):
                # Check if this is a list continuation (description text under a list item)
                # Only skip if the indented text doesn't look like code
                indent_content = line[4:]
                if not re.match(r'[\[\{]|^\w+\s*=|^#|^;|^\$|^function|^local|^return|^end|^if|^for|^while|^DRIVER|^DIRECTORY|^\d+=', indent_content.strip()):
                    result.append(line)
                    i += 1
                    continue

            # Collect all consecutive indented lines (including blank lines between them)
            block_lines = []
            j = i
            while j < len(lines):
                if lines[j].startswith('    '):
                    block_lines.append(lines[j][4:])  # Remove 4-space indent
                    j += 1
                elif lines[j].strip() == '' and j + 1 < len(lines) and lines[j + 1].startswith('    '):
                    block_lines.append('\n')
                    j += 1
                else:
                    break

            if block_lines:
                # Detect language
                block_text = ''.join(block_lines)
                lang = detect_language(block_text)

                # Ensure blank line before the fence
                if result and result[-1].strip() != '':
                    result.append('\n')

                result.append(f'```{lang}\n')
                # Remove trailing blank lines from block
                while block_lines and block_lines[-1].strip() == '':
                    block_lines.pop()
                result.extend(block_lines)
                if block_lines and not block_lines[-1].endswith('\n'):
                    result.append('\n')
                result.append('```\n')

                # Ensure blank line after
                if j < len(lines) and lines[j].strip() != '':
                    result.append('\n')

                i = j
                changed = True
                continue

        result.append(line)
        i += 1

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(result)
        return True
    return False

def main():
    md_files = glob.glob(os.path.join(OGS_DIR, '**', '*.md'), recursive=True)
    mdx_files = glob.glob(os.path.join(OGS_DIR, '**', '*.mdx'), recursive=True)
    all_files = sorted(md_files + mdx_files)

    converted = []
    for fp in all_files:
        rel = os.path.relpath(fp, OGS_DIR)
        if convert_file(fp):
            converted.append(rel)
            print(f'  CONVERTED: {rel}')
        else:
            print(f'  skipped:   {rel}')

    print(f'\n--- {len(converted)} files converted ---')
    for f in converted:
        print(f'  {f}')

if __name__ == '__main__':
    main()
