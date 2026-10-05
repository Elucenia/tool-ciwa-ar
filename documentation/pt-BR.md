<!-- ELUCENIA technical documentation · ciwa-ar · pt-BR · no clinical/professional/rights approval -->

# CIWA-Ar

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/ciwa-ar)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Náuseas e vômitos

`nausea`

- `0` — 0 – Sem náusea e sem vômito
- `1` — 1 – Náusea leve, sem vômito
- `2` — 2
- `3` — 3
- `4` — 4 – Náusea intermitente com ânsia de vômito
- `5` — 5
- `6` — 6
- `7` — 7 – Náusea constante, ânsia frequente e vômitos

### Tremor (braços estendidos e dedos afastados)

`tremor`

- `0` — 0 – Sem tremor
- `1` — 1 – Não visível, mas sentido ponta a ponta dos dedos
- `2` — 2
- `3` — 3
- `4` — 4 – Moderado, com os braços estendidos
- `5` — 5
- `6` — 6
- `7` — 7 – Grave, mesmo com os braços não estendidos

### Sudorese paroxística

`sudorese`

- `0` — 0 – Sem suor visível
- `1` — 1 – Suor quase imperceptível, palmas úmidas
- `2` — 2
- `3` — 3
- `4` — 4 – Gotas de suor evidentes na testa
- `5` — 5
- `6` — 6
- `7` — 7 – Sudorese profusa

### Ansiedade

`ansiedade`

- `0` — 0 – Sem ansiedade, à vontade
- `1` — 1 – Levemente ansioso
- `2` — 2
- `3` — 3
- `4` — 4 – Moderadamente ansioso ou reservado (ansiedade inferida)
- `5` — 5
- `6` — 6
- `7` — 7 – Equivalente a estado de pânico agudo

### Agitação

`agitacao`

- `0` — 0 – Atividade normal
- `1` — 1 – Um pouco mais de atividade que o normal
- `2` — 2
- `3` — 3
- `4` — 4 – Moderadamente inquieto
- `5` — 5
- `6` — 6
- `7` — 7 – Anda de um lado para o outro ou se debate constantemente

### Distúrbios táteis (coceira, formigamento, queimação, sensação de insetos na pele)

`tatil`

- `0` — 0 – Ausente
- `1` — 1 – Muito leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinações moderadamente graves
- `5` — 5 – Alucinações graves
- `6` — 6 – Alucinações extremamente graves
- `7` — 7 – Alucinações contínuas

### Distúrbios auditivos (sons mais altos ou ásperos, ouvir coisas que não existem)

`auditivo`

- `0` — 0 – Ausente
- `1` — 1 – Muito leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinações moderadamente graves
- `5` — 5 – Alucinações graves
- `6` — 6 – Alucinações extremamente graves
- `7` — 7 – Alucinações contínuas

### Distúrbios visuais (luz mais forte, cores diferentes, ver coisas que não existem)

`visual`

- `0` — 0 – Ausente
- `1` — 1 – Muito leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinações moderadamente graves
- `5` — 5 – Alucinações graves
- `6` — 6 – Alucinações extremamente graves
- `7` — 7 – Alucinações contínuas

### Cefaleia ou sensação de cabeça cheia

`cefaleia`

- `0` — 0 – Ausente
- `1` — 1 – Muito leve
- `2` — 2 – Leve
- `3` — 3 – Moderada
- `4` — 4 – Moderadamente grave
- `5` — 5 – Grave
- `6` — 6 – Muito grave
- `7` — 7 – Extremamente grave

### Orientação e sensório

`orientacao`

- `0` — 0 – Orientado e faz adições seriadas
- `1` — 1 – Não faz adições seriadas ou incerto quanto à data
- `2` — 2 – Desorientado quanto à data por até 2 dias
- `3` — 3 – Desorientado quanto à data por mais de 2 dias
- `4` — 4 – Desorientado quanto ao lugar e/ou à pessoa

## Edição do método

CIWAAr/Sullivan 1989:10 itens, total 0–67; orientação 0–4

## Fórmula documentada

Nove itens de 0 a 7 (náuseas/vômitos, tremor, sudorese, ansiedade, agitação, distúrbios táteis, auditivos e visuais, cefaleia) e orientação de 0 a 4. Total: 0 a 67. Os textos das opções são as âncoras do instrumento; valores intermediários ficam a critério do examinador.

## Limites e população

A CIWA-Ar de 1989 quantifica a gravidade da abstinência alcoólica por 10 itens. A disponibilidade do total não confirma indicação ou dose de benzodiazepínico, nível de cuidado ou aplicabilidade a pacientes que não possam ser avaliados adequadamente. Esses elementos requerem o protocolo clínico e a população da versão utilizada.

## Referências

- [Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict, 1989.](https://doi.org/10.1111/j.1360-0443.1989.tb00737.x)

- [Laranjeira R et al. Consenso sobre a Síndrome de Abstinência do Álcool (SAA) e o seu tratamento. Rev Bras Psiquiatr, 2000.](https://doi.org/10.1590/S1516-44462000000200006)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
