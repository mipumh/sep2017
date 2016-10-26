##XXIII CONGRESO INTERNACIONAL de la SOCIEDAD ESPAÑOLA de PERIODÍSTICA

#“Mediamorfosis. Perspectivas sobre la innovación en periodismo”

_9 y 10 de junio 2017. Universidad Miguel Hernández de Elche_

## Web
Es un diseño creado por [Martín González](https://twitter.com/martgnz), a quien agradezco las cervezas que tomamos en Denia este verano 😀 🍻.

Usa [Bootstrap](http://getbootstrap.com/), el framework creado por [Mark Otto](https://twitter.com/mdo) y [Jacob Thorton](https://twitter.com/fat) para Twitter.

Si tienes que modificar los estilos, están en `main.css`. Antes de ir a producción se minifica con [uncss](https://github.com/giakki/uncss):

```bash
$ uncss http://localhost:8080 > style.min.css
```
El Javascript está concatenado, uso jQuery, [balance-text](https://github.com/adobe-webplatform/balance-text) y [unveil](https://github.com/luis-almeida/unveil).
