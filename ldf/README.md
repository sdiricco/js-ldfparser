# Quale ldf?

Con la pompa a disposizione fornita dal cliente, il file .ldf funzionante è "EWAPUPEM_EWP23.LDF". Questo file tuttavia no viene parserizzato correttamente dallo script python a causa della riga:

```txt
Channel_name = "_M-LIN_2";
```

 Esiste quindi il file "EWAPUPEM_EWP23Modified.LDF" da me modificato in cui semplicemente viene cancellata la riga e risulta funzionante con lo script python