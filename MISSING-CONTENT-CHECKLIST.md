# ctrlX Apps Docs — Missing Content Checklist

> Generated from audit on May 11, 2026

---

## Opex-GWK: Missing Images (Build Warnings)

These 3 images are referenced but don't exist in `docs/shared/opex-gwk/img/`:

- [ ] **Licensing Generate Code.png** — Screenshot of the OPEX license generation step (`licensing.md:10`)
- [ ] **Licensing upload Lic.png** — Screenshot of the OPEX license upload step (`licensing.md:12`)
- [ ] **Licensing Status.png** — Screenshot of the OPEX license status view (`licensing.md:14`)

## Opex-GWK: Placeholder Content (TODO markers)

These files have `<!-- TODO: Update screenshot for OPEX-GWK -->` markers indicating content was copied from Stahlwille but not yet updated:

- [ ] **user-guide.md:15** — Missing: `/img/user-guide/overview-architecture.png` (high-level data flow diagram)
- [ ] **troubleshooting.md:21** — Missing: `/img/user-guide/logbook-error.png` (error entry example)
- [ ] **troubleshooting.md:22** — Missing: `/img/user-guide/config-diff.png` (before/after config diff)
- [ ] **quick-reference.md:14** — Generic image placeholder note (needs OPEX-specific screenshot)
- [ ] **licensing.md:10–14** — All 3 licensing screenshots (same as build warnings above)

## Opex-GWK: Content Review

- [ ] **overview.md** — Contains only "Coming Soon" placeholder. Needs actual product overview content.

## heOPTester: All Screenshots Present ✅

All 24 screenshots in `heOPTester/screenshots/` are real images (non-zero bytes). No action needed.

Optional cleanup: 23 `<!-- SCREENSHOT: ... -->` HTML comments remain in heOPTester docs as developer notes. These are invisible to users.

---

**Summary**: 8 action items for Opex-GWK (3 images + 4 placeholders + 1 content page). heOPTester is complete.
