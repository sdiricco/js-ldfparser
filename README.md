# ldf-parser

## Python:

- Installa il modulo `ldfparser`
```bash
pip install ldfparser
```

- Puoi convertire un .ldf in .json file usando lo script

```bash
ldfparser --ldf <file> export [--output <output>]
```

**Nota**: Lo script non crea il file di output, quindi dovrai crearlo prima di lanciare lo script

Esempio:

```bash
touch myOutput.json
ldfparser --ldf .\myInput.ldf export --output .\myOutput.json
```