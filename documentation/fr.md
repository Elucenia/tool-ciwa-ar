<!-- ELUCENIA technical documentation · ciwa-ar · fr · no clinical/professional/rights approval -->

# CIWA-Ar

[conditions, sources et autorisations](https://elucenia.org/fr/outils/ciwa-ar)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Nausées et vomissements

`nausea`

- `0` — 0 – Aucune nausée ni aucun vomissement
- `1` — 1 – Nausée légère sans vomissement
- `2` — 2
- `3` — 3
- `4` — 4 – Nausées intermittentes avec haut-le-cœur
- `5` — 5
- `6` — 6
- `7` — 7 – Nausées constantes, haut-le-cœur fréquents et vomissements

### Tremblement (bras tendus et doigts écartés)

`tremor`

- `0` — 0 – Aucun tremblement
- `1` — 1 – Non visible, mais perceptible au contact des bouts des doigts
- `2` — 2
- `3` — 3
- `4` — 4 – Modéré avec les bras tendus
- `5` — 5
- `6` — 6
- `7` — 7 – Sévère même sans tendre les bras

### Sueurs paroxystiques

`sudorese`

- `0` — 0 – Aucune sueur visible
- `1` — 1 – Sueur à peine perceptible, paumes humides
- `2` — 2
- `3` — 3
- `4` — 4 – Gouttes de sueur visibles sur le front
- `5` — 5
- `6` — 6
- `7` — 7 – Sueurs profuses

### Anxiété

`ansiedade`

- `0` — 0 – Aucune anxiété, à l’aise
- `1` — 1 – Légèrement anxieux
- `2` — 2
- `3` — 3
- `4` — 4 – Modérément anxieux ou réservé (anxiété déduite)
- `5` — 5
- `6` — 6
- `7` — 7 – Équivalent à un état de panique aiguë

### Agitation

`agitacao`

- `0` — 0 – Activité normale
- `1` — 1 – Activité un peu supérieure à la normale
- `2` — 2
- `3` — 3
- `4` — 4 – Modérément agité
- `5` — 5
- `6` — 6
- `7` — 7 – Fait les cent pas ou se débat constamment

### Troubles tactiles (démangeaisons, picotements, brûlures, sensation d’insectes sur la peau)

`tatil`

- `0` — 0 – Absent
- `1` — 1 – Très léger
- `2` — 2 – Léger
- `3` — 3 – Modéré
- `4` — 4 – Hallucinations modérément sévères
- `5` — 5 – Hallucinations sévères
- `6` — 6 – Hallucinations extrêmement sévères
- `7` — 7 – Hallucinations continues

### Troubles auditifs (sons plus forts ou plus rudes, entendre des choses inexistantes)

`auditivo`

- `0` — 0 – Absent
- `1` — 1 – Très léger
- `2` — 2 – Léger
- `3` — 3 – Modéré
- `4` — 4 – Hallucinations modérément sévères
- `5` — 5 – Hallucinations sévères
- `6` — 6 – Hallucinations extrêmement sévères
- `7` — 7 – Hallucinations continues

### Troubles visuels (lumière plus forte, couleurs différentes, voir des choses inexistantes)

`visual`

- `0` — 0 – Absent
- `1` — 1 – Très léger
- `2` — 2 – Léger
- `3` — 3 – Modéré
- `4` — 4 – Hallucinations modérément sévères
- `5` — 5 – Hallucinations sévères
- `6` — 6 – Hallucinations extrêmement sévères
- `7` — 7 – Hallucinations continues

### Céphalée ou sensation de tête pleine

`cefaleia`

- `0` — 0 – Absent
- `1` — 1 – Très léger
- `2` — 2 – Léger
- `3` — 3 – Modérée
- `4` — 4 – Modérément sévère
- `5` — 5 – Sévère
- `6` — 6 – Très sévère
- `7` — 7 – Extrêmement sévère

### Orientation et état de conscience

`orientacao`

- `0` — 0 – Orienté et effectue des additions successives
- `1` — 1 – N’effectue pas d’additions successives ou est incertain de la date
- `2` — 2 – Erreur sur la date allant jusqu’à 2 jours
- `3` — 3 – Erreur sur la date de plus de 2 jours
- `4` — 4 – Désorienté dans le lieu et/ou sur les personnes

## Édition de la méthode

CIWA-Ar/Sullivan 1989 : 10 items, total 0–67 ; orientation 0–4

## Formule documentée

Neuf items 0–7 (nausées/vomissements, tremblement, sueurs, anxiété, agitation, troubles tactiles, auditifs, visuels, céphalées) et orientation 0–4. Total 0–67. Les textes sont les ancrages de l’instrument ; valeurs intermédiaires au jugement de l’examinateur.

## Limites et population

La CIWA-Ar de 1989 quantifie la sévérité du sevrage alcoolique à l’aide de 10 items. La disponibilité du total ne confirme pas l’indication ou la dose d’une benzodiazépine, le niveau de soins ou l’applicabilité chez des patients ne pouvant être correctement évalués. Ces éléments nécessitent le protocole clinique et la population de la version utilisée.

## Références

- [Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict, 1989.](https://doi.org/10.1111/j.1360-0443.1989.tb00737.x)

- [Laranjeira R et al. Consenso sobre a Síndrome de Abstinência do Álcool (SAA) e o seu tratamento. Rev Bras Psiquiatr, 2000.](https://doi.org/10.1590/S1516-44462000000200006)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
