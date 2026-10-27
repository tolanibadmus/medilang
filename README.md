## medilang
A TypeScript based npm package for translating medical diagnoses from **English** to **Yoruba**, **Hausa**, or **Igbo**. Designed for healthcare applications, telemedicine platforms, and accessibility tools in Nigeria and globally.

## Who it's for
- Developers building health, telemedicine or patient-facing apps for Nigerian users
- Clinics and community health tools that need to explain a diagnosis in a patient's first language
- Accessibility and localisation projects working with Nigerian languages

## Built with
- TypeScript (strict mode)
- [tsup](https://tsup.egoist.dev/) for bundling to CommonJS and ES modules with type declarations
- A JSON dictionary of diagnoses (`src/diagnoses.json`) as the data source
- No runtime dependencies

## Installation
**NPM**

```
  npm install medilang
```
## Usage

```
  import { Medilang } from 'medilang' ;

  const convertDiagnosis = Medilang.getDiagnosisInOtherLanguage("hypertension", "yoruba") ;
```

`getDiagnosisInOtherLanguage(diagnosis, language)` is case-insensitive and returns the translated term, or `null` if the diagnosis is not in the dictionary yet. Supported languages are `"yoruba"`, `"igbo"` and `"hausa"`.

## Current coverage
The dictionary currently has 19 common diagnoses (including malaria, hypertension, diabetes, tuberculosis and cholera) with Yoruba translations. Igbo and Hausa translations are in progress — see [ROADMAP.md](ROADMAP.md).

## Running locally
Requires Node.js 18+ and npm.

```
git clone https://github.com/tolanibadmus/medilang.git
cd medilang
npm install
npm run build   # outputs dist/ (CJS, ESM and .d.ts)
npm start       # runs src/index.ts with ts-node
```

## Contributing
Translation contributions from Yoruba, Igbo and Hausa speakers are very welcome. Open an issue or pull request with the English term, the translation and, where possible, a source.

## Roadmap
See [ROADMAP.md](ROADMAP.md).

## Licence
MIT — see [LICENSE](LICENSE).

## Author
Tolani Badmus

## Keywords
medical translator, medical diagnosis(Nigerian), translate medical diagnosis
