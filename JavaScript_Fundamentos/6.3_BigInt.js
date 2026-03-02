/* 
BigInt es esencial cuando necesitas precisión en enteros grandes. Suele usarse en temas de criptografía o financieros, ya que es importante no perder información al hacer operaciones con números muy grandes.

-Enteros muy grandes: Más allá de Number.MAX_SAFE_INTEGER
-Precisión exacta: Sin pérdida de precisión en enteros

Limitaciones importantes:

-No se mezcla con Number sin conversión explícita
-No funciona con Math
-No se serializa automáticamente en JSON
-Sólo para enteros (no decimales)
-Soporte limitado en navegadores antiguos

BigInt es una herramienta poderosa para casos específicos donde la precisión de enteros grandes es crítica. */

