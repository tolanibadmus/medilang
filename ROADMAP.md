# Roadmap

## Translations
- [ ] Add Igbo translations for all existing diagnoses
- [ ] Add Hausa translations for all existing diagnoses
- [ ] Grow the dictionary from 19 to 100+ common diagnoses and symptoms
- [ ] Record a source or reviewer for each translation
- [ ] Fix spelling of existing keys (e.g. `conjuctivitis` → `conjunctivitis`) while keeping the old key as an alias

## API
- [ ] Support synonyms and aliases (e.g. "high blood pressure" → hypertension, "sugar" → diabetes)
- [ ] Trim whitespace and handle simple typos with fuzzy matching
- [ ] Reverse lookup: Yoruba / Igbo / Hausa → English
- [ ] `listSupportedDiagnoses()` and `isSupported()` helpers
- [ ] Return `null` (not an empty string) when a translation is missing for a language

## Quality
- [ ] Unit tests (Vitest) for lookups, casing and missing entries
- [ ] JSON schema check so every entry has all three languages
- [ ] GitHub Actions workflow: build, test and lint on every push
- [ ] Sync the repo version with the latest npm release and add a CHANGELOG

## Docs
- [ ] Full API reference in the README
- [ ] A small demo page showing translations
- [ ] Contribution guide for translators
