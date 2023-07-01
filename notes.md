<!-- 1. User klickt Zahl an
2. (optional) User klickt weitere Zahlen an
3. User klickt einen Operator an (+, -, /, *)
4. (optional) User klickt Zahl an
5. User klickt weitere Zahl an
6. User klickt auf das "="-Zeichen
    1. Kalkuliere das Ergebnis auf Basis des User Inputs
6. User klickt auf einen weiteren Rechen-Operator (+, -, /, *)
    1. 


Mögliche, finale Strings:

1. 1+2*2/4+1 = 

2*2=4
4/4=1 -->

1. Solange User Zahlen und Operatoren eingibt, erstelle einen String mit all seinen Input
2. Wenn das "="-Zeichen gedrückt wurde, eruiere folgendes
    1. Suche nach dem ersten Vorkommen eines Operators (+, -, /, *)
    2. Eruiere die Zahl VOR dem Operator und NACH dem Operator
    3. Berechne das Ergebnis aus den beiden ermittelten Zahlen + dem Operator und speichere dieses Ergebnis zwischen
    4. Suche nach dem zweiten Vorkommen des nächsten/zweiten Operators (+, -, /, *)
    5. Eruiere die Zahl NACH diesem Operator und berechne das Ergebnis auf Basis des zuvor errechneten Werts und der neuen Zahl, respektive des aktuellen Operators und speichere auch dieses Ergebnis wieder zwischen
    6. Wiederhole Schritt 4-5
