<!-- ELUCENIA technical documentation · ciwa-ar · en · no clinical/professional/rights approval -->

# CIWA-Ar

[conditions, sources and permissions](https://elucenia.org/en/tools/ciwa-ar)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Nausea and vomiting

`nausea`

- `0` — 0 – No nausea or vomiting
- `1` — 1 – Mild nausea without vomiting
- `2` — 2
- `3` — 3
- `4` — 4 – Intermittent nausea with dry heaves
- `5` — 5
- `6` — 6
- `7` — 7 – Constant nausea, frequent dry heaves and vomiting

### Tremor (arms extended and fingers spread)

`tremor`

- `0` — 0 – No tremor
- `1` — 1 – Not visible, but felt fingertip to fingertip
- `2` — 2
- `3` — 3
- `4` — 4 – Moderate with arms extended
- `5` — 5
- `6` — 6
- `7` — 7 – Severe even with arms not extended

### Paroxysmal sweating

`sudorese`

- `0` — 0 – No visible sweating
- `1` — 1 – Barely perceptible sweating, moist palms
- `2` — 2
- `3` — 3
- `4` — 4 – Obvious beads of sweat on the forehead
- `5` — 5
- `6` — 6
- `7` — 7 – Profuse sweating

### Anxiety

`ansiedade`

- `0` — 0 – No anxiety, at ease
- `1` — 1 – Mildly anxious
- `2` — 2
- `3` — 3
- `4` — 4 – Moderately anxious or guarded (anxiety inferred)
- `5` — 5
- `6` — 6
- `7` — 7 – Equivalent to acute panic state

### Agitation

`agitacao`

- `0` — 0 – Normal activity
- `1` — 1 – Slightly more activity than normal
- `2` — 2
- `3` — 3
- `4` — 4 – Moderately restless
- `5` — 5
- `6` — 6
- `7` — 7 – Paces back and forth or constantly thrashes about

### Tactile disturbances (itching, tingling, burning, sensation of insects on the skin)

`tatil`

- `0` — 0 – Absent
- `1` — 1 – Very mild
- `2` — 2 – Mild
- `3` — 3 – Moderate
- `4` — 4 – Moderately severe hallucinations
- `5` — 5 – Severe hallucinations
- `6` — 6 – Extremely severe hallucinations
- `7` — 7 – Continuous hallucinations

### Auditory disturbances (sounds louder or harsher, hearing things that are not there)

`auditivo`

- `0` — 0 – Absent
- `1` — 1 – Very mild
- `2` — 2 – Mild
- `3` — 3 – Moderate
- `4` — 4 – Moderately severe hallucinations
- `5` — 5 – Severe hallucinations
- `6` — 6 – Extremely severe hallucinations
- `7` — 7 – Continuous hallucinations

### Visual disturbances (brighter light, different colors, seeing things that are not there)

`visual`

- `0` — 0 – Absent
- `1` — 1 – Very mild
- `2` — 2 – Mild
- `3` — 3 – Moderate
- `4` — 4 – Moderately severe hallucinations
- `5` — 5 – Severe hallucinations
- `6` — 6 – Extremely severe hallucinations
- `7` — 7 – Continuous hallucinations

### Headache or fullness in the head

`cefaleia`

- `0` — 0 – Absent
- `1` — 1 – Very mild
- `2` — 2 – Mild
- `3` — 3 – Moderate
- `4` — 4 – Moderately severe
- `5` — 5 – Severe
- `6` — 6 – Very severe
- `7` — 7 – Extremely severe

### Orientation and sensorium

`orientacao`

- `0` — 0 – Oriented and performs serial additions
- `1` — 1 – Unable to perform serial additions or uncertain about the date
- `2` — 2 – Disoriented about the date by up to 2 days
- `3` — 3 – Disoriented about the date by more than 2 days
- `4` — 4 – Disoriented to place and/or person

## Method edition

CIWA-Ar/Sullivan 1989: 10 items, total 0–67; orientation 0–4

## Documented formula

Nine items 0–7 (nausea/vomiting, tremor, sweating, anxiety, agitation, tactile, auditory and visual disturbances, headache), and orientation 0–4. Total 0–67. Option texts are instrument anchors; intermediate values are left to the examiner.

## Limits and population

The 1989 CIWA-Ar quantifies alcohol withdrawal severity using 10 items. Availability of the total does not establish a benzodiazepine indication or dose, level of care, or applicability to patients who cannot be adequately assessed. These elements require the clinical protocol and population for the version used.

## References

- [Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict, 1989.](https://doi.org/10.1111/j.1360-0443.1989.tb00737.x)

- [Laranjeira R et al. Consenso sobre a Síndrome de Abstinência do Álcool (SAA) e o seu tratamento. Rev Bras Psiquiatr, 2000.](https://doi.org/10.1590/S1516-44462000000200006)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
