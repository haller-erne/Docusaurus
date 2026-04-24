"""
Fix frontmatter tags that were incorrectly converted to fenced code blocks.
Pattern: tags:\n\n```\n- tag1\n- tag2\n```
Should be: tags:\n    - tag1\n    - tag2
"""
import re, os, glob

OGS_DIR = os.path.join(os.path.dirname(__file__), 'ogs-docs')

def fix_frontmatter_tags(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern: inside frontmatter (between --- delimiters), find tags followed by fenced code block
    # Match: tags:\n\n```\n- tag1\n- tag2\n...\n```
    pattern = r'(tags:)\s*\n\n```\n((?:- .+\n)+)```'
    
    def replace_tags(m):
        tags_header = m.group(1)
        tag_lines = m.group(2)
        # Re-indent tag lines with 4 spaces
        fixed_lines = ''
        for line in tag_lines.splitlines():
            fixed_lines += f'    {line}\n'
        return f'{tags_header}\n{fixed_lines}'
    
    new_content = re.sub(pattern, replace_tags, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    md_files = glob.glob(os.path.join(OGS_DIR, '**', '*.md'), recursive=True)
    mdx_files = glob.glob(os.path.join(OGS_DIR, '**', '*.mdx'), recursive=True)
    all_files = sorted(md_files + mdx_files)

    fixed = []
    for fp in all_files:
        rel = os.path.relpath(fp, OGS_DIR)
        if fix_frontmatter_tags(fp):
            fixed.append(rel)
            print(f'  FIXED: {rel}')

    print(f'\n--- {len(fixed)} files fixed ---')

if __name__ == '__main__':
    main()
