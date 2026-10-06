<!-- ELUCENIA technical documentation · ciwa-ar · es · no clinical/professional/rights approval -->

# CIWA-Ar

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/ciwa-ar)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Náuseas y vómitos

`nausea`

- `0` — 0 – Sin náuseas ni vómitos
- `1` — 1 – Náuseas leves sin vómitos
- `2` — 2
- `3` — 3
- `4` — 4 – Náuseas intermitentes con arcadas
- `5` — 5
- `6` — 6
- `7` — 7 – Náuseas constantes, arcadas frecuentes y vómitos

### Temblor (brazos extendidos y dedos separados)

`tremor`

- `0` — 0 – Sin temblor
- `1` — 1 – No visible, pero perceptible al juntar las puntas de los dedos
- `2` — 2
- `3` — 3
- `4` — 4 – Moderado con los brazos extendidos
- `5` — 5
- `6` — 6
- `7` — 7 – Grave incluso sin extender los brazos

### Sudoración paroxística

`sudorese`

- `0` — 0 – Sin sudor visible
- `1` — 1 – Sudor apenas perceptible, palmas húmedas
- `2` — 2
- `3` — 3
- `4` — 4 – Gotas de sudor evidentes en la frente
- `5` — 5
- `6` — 6
- `7` — 7 – Sudoración profusa

### Ansiedad

`ansiedade`

- `0` — 0 – Sin ansiedad, tranquilo
- `1` — 1 – Ligeramente ansioso
- `2` — 2
- `3` — 3
- `4` — 4 – Moderadamente ansioso o reservado (ansiedad inferida)
- `5` — 5
- `6` — 6
- `7` — 7 – Equivalente a un estado de pánico agudo

### Agitación

`agitacao`

- `0` — 0 – Actividad normal
- `1` — 1 – Algo más de actividad de lo normal
- `2` — 2
- `3` — 3
- `4` — 4 – Moderadamente inquieto
- `5` — 5
- `6` — 6
- `7` — 7 – Camina de un lado a otro o se agita constantemente

### Alteraciones táctiles (picor, hormigueo, ardor, sensación de insectos en la piel)

`tatil`

- `0` — 0 – Ausente
- `1` — 1 – Muy leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinaciones moderadamente graves
- `5` — 5 – Alucinaciones graves
- `6` — 6 – Alucinaciones extremadamente graves
- `7` — 7 – Alucinaciones continuas

### Alteraciones auditivas (sonidos más fuertes o ásperos, oír cosas que no existen)

`auditivo`

- `0` — 0 – Ausente
- `1` — 1 – Muy leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinaciones moderadamente graves
- `5` — 5 – Alucinaciones graves
- `6` — 6 – Alucinaciones extremadamente graves
- `7` — 7 – Alucinaciones continuas

### Alteraciones visuales (luz más intensa, colores diferentes, ver cosas que no existen)

`visual`

- `0` — 0 – Ausente
- `1` — 1 – Muy leve
- `2` — 2 – Leve
- `3` — 3 – Moderado
- `4` — 4 – Alucinaciones moderadamente graves
- `5` — 5 – Alucinaciones graves
- `6` — 6 – Alucinaciones extremadamente graves
- `7` — 7 – Alucinaciones continuas

### Cefalea o sensación de plenitud en la cabeza

`cefaleia`

- `0` — 0 – Ausente
- `1` — 1 – Muy leve
- `2` — 2 – Leve
- `3` — 3 – Moderada
- `4` — 4 – Moderadamente grave
- `5` — 5 – Grave
- `6` — 6 – Muy grave
- `7` — 7 – Extremadamente grave

### Orientación y estado de conciencia

`orientacao`

- `0` — 0 – Orientado y realiza sumas seriadas
- `1` — 1 – No realiza sumas seriadas o no está seguro de la fecha
- `2` — 2 – Desorientado respecto a la fecha por hasta 2 días
- `3` — 3 – Desorientado respecto a la fecha por más de 2 días
- `4` — 4 – Desorientado en lugar y/o persona

## Edición del método

CIWA-Ar/Sullivan 1989: 10 ítems, total 0–67; orientación 0–4

## Fórmula documentada

Nueve ítems 0–7 (náuseas/vómitos, temblor, sudoración, ansiedad, agitación, alteraciones táctiles, auditivas y visuales, cefalea), y orientación 0–4. Total 0–67. Los textos son anclajes; valores intermedios quedan al examinador.

## Límites y población

La CIWA-Ar de 1989 cuantifica la gravedad de la abstinencia alcohólica mediante 10 ítems. La disponibilidad del total no confirma la indicación o dosis de una benzodiazepina, el nivel asistencial ni la aplicabilidad a pacientes que no puedan evaluarse adecuadamente. Estos elementos requieren el protocolo clínico y la población de la versión utilizada.

## Referencias

- [Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict, 1989.](https://doi.org/10.1111/j.1360-0443.1989.tb00737.x)

- [Laranjeira R et al. Consenso sobre a Síndrome de Abstinência do Álcool (SAA) e o seu tratamento. Rev Bras Psiquiatr, 2000.](https://doi.org/10.1590/S1516-44462000000200006)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Abstinencia leve (< 10)

Por lo general no requiere medicación adicional; mantener la reevaluación periódica.


### 2

Abstinencia leve (< 10)

Por lo general no requiere medicación adicional; mantener la reevaluación periódica.


### 3

Abstinencia moderada (10 a 19)

Benzodiacepina guiada por síntomas y reevaluación frecuente de la escala.


### 4

Abstinencia grave (≥ 20)

Tratamiento en ambiente hospitalario, con benzodiacepina y vigilancia de convulsiones y delirium tremens.

