<!-- ELUCENIA technical documentation · ciwa-ar · it · no clinical/professional/rights approval -->

# CIWA-Ar

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/ciwa-ar)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Nausea e vomito

`nausea`

- `0` — 0 – Nessuna nausea né vomito
- `1` — 1 – Nausea lieve senza vomito
- `2` — 2
- `3` — 3
- `4` — 4 – Nausea intermittente con conati
- `5` — 5
- `6` — 6
- `7` — 7 – Nausea costante, conati frequenti e vomito

### Tremore (braccia tese e dita divaricate)

`tremor`

- `0` — 0 – Nessun tremore
- `1` — 1 – Non visibile, ma percepibile al contatto tra le punte delle dita
- `2` — 2
- `3` — 3
- `4` — 4 – Moderato con le braccia tese
- `5` — 5
- `6` — 6
- `7` — 7 – Grave anche senza estendere le braccia

### Sudorazione parossistica

`sudorese`

- `0` — 0 – Nessuna sudorazione visibile
- `1` — 1 – Sudorazione appena percepibile, palmi umidi
- `2` — 2
- `3` — 3
- `4` — 4 – Gocce di sudore evidenti sulla fronte
- `5` — 5
- `6` — 6
- `7` — 7 – Sudorazione profusa

### Ansia

`ansiedade`

- `0` — 0 – Nessuna ansia, a proprio agio
- `1` — 1 – Lievemente ansioso
- `2` — 2
- `3` — 3
- `4` — 4 – Moderatamente ansioso o riservato (ansia dedotta)
- `5` — 5
- `6` — 6
- `7` — 7 – Equivalente a uno stato di panico acuto

### Agitazione

`agitacao`

- `0` — 0 – Attività normale
- `1` — 1 – Attività leggermente superiore al normale
- `2` — 2
- `3` — 3
- `4` — 4 – Moderatamente irrequieto
- `5` — 5
- `6` — 6
- `7` — 7 – Cammina avanti e indietro o si agita continuamente

### Disturbi tattili (prurito, formicolio, bruciore, sensazione di insetti sulla pelle)

`tatil`

- `0` — 0 – Assente
- `1` — 1 – Molto lieve
- `2` — 2 – Lieve
- `3` — 3 – Moderato
- `4` — 4 – Allucinazioni moderatamente gravi
- `5` — 5 – Allucinazioni gravi
- `6` — 6 – Allucinazioni estremamente gravi
- `7` — 7 – Allucinazioni continue

### Disturbi uditivi (suoni più forti o aspri, udire cose inesistenti)

`auditivo`

- `0` — 0 – Assente
- `1` — 1 – Molto lieve
- `2` — 2 – Lieve
- `3` — 3 – Moderato
- `4` — 4 – Allucinazioni moderatamente gravi
- `5` — 5 – Allucinazioni gravi
- `6` — 6 – Allucinazioni estremamente gravi
- `7` — 7 – Allucinazioni continue

### Disturbi visivi (luce più intensa, colori diversi, vedere cose inesistenti)

`visual`

- `0` — 0 – Assente
- `1` — 1 – Molto lieve
- `2` — 2 – Lieve
- `3` — 3 – Moderato
- `4` — 4 – Allucinazioni moderatamente gravi
- `5` — 5 – Allucinazioni gravi
- `6` — 6 – Allucinazioni estremamente gravi
- `7` — 7 – Allucinazioni continue

### Cefalea o sensazione di testa piena

`cefaleia`

- `0` — 0 – Assente
- `1` — 1 – Molto lieve
- `2` — 2 – Lieve
- `3` — 3 – Moderata
- `4` — 4 – Moderatamente grave
- `5` — 5 – Grave
- `6` — 6 – Molto grave
- `7` — 7 – Estremamente grave

### Orientamento e stato di coscienza

`orientacao`

- `0` — 0 – Orientato ed esegue addizioni in serie
- `1` — 1 – Non esegue addizioni in serie o è incerto sulla data
- `2` — 2 – Disorientato sulla data fino a 2 giorni
- `3` — 3 – Disorientato sulla data per più di 2 giorni
- `4` — 4 – Disorientato nello spazio e/o rispetto alla persona

## Edizione del metodo

CIWA-Ar/Sullivan 1989: 10 item, totale 0–67; orientamento 0–4

## Formula documentata

Nove item 0–7 (nausea/vomito, tremore, sudorazione, ansia, agitazione, disturbi tattili, uditivi e visivi, cefalea), orientamento 0–4. Totale 0–67. I testi sono ancoraggi dello strumento; valori intermedi a giudizio dell’esaminatore.

## Limiti e popolazione

La CIWA-Ar del 1989 quantifica la gravità dell’astinenza alcolica mediante 10 item. La disponibilità del totale non conferma l’indicazione o la dose di una benzodiazepina, il livello assistenziale o l’applicabilità a pazienti che non possono essere valutati adeguatamente. Questi elementi richiedono il protocollo clinico e la popolazione della versione utilizzata.

## Riferimenti

- [Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict, 1989.](https://doi.org/10.1111/j.1360-0443.1989.tb00737.x)

- [Laranjeira R et al. Consenso sobre a Síndrome de Abstinência do Álcool (SAA) e o seu tratamento. Rev Bras Psiquiatr, 2000.](https://doi.org/10.1590/S1516-44462000000200006)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
