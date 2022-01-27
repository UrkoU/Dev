## Cripto Examen
En este [repositorio de GitHub](https://github.com/srlopez/CriptoExamen) encontrarás dos proyecto, uno de base de datos, y otro de una webapi que lee de la base de datos.

En el primero, se te proporciona el esquema de una base de datos con dos tablas, `Moneda` y `Cartera`.
La `Moneda` representa una *CriptoMoneda* con su *Identificador*, el *valor máximo* alcanzado y el *valor actual*.
La `Cartera` representa una cuenta en un determinado *Exchange*.

En el segundo encontrarás un controlador web a rellenar.

En **CriptoDB**, debes crear una tabla `Contrato` que relacione cada `Cartera` con las `Monedas` que tiene contratadas.
Se te proporciona los datos de la tablas de de `Monedas` y `Carteras`. Y se te pide que crees los `Contratos` con los valores indicados:

Esta es la lista de los contratos en la que se indica la cartere, y emparejada la moneda y la cantidad (en una tupla).  
- Cartera #1: ("Bitcoin",2),("Litecoin",3),("Polkadot",4)
- Cartera #2: ("Dogecoin",3),("ShibaInu",4),("Litecoin",3)
- Cartera #3: ("Etherum",4),("Cardano",2),("Stellar",1),("Dogecoin",4)
- Cartera #4: ("Bitcoin",2),("ShibaInu",3),("Stellar",4),("Litecoin",3)
- Cartera #5: ("Polkadot",3),("Cardano",1)
- Cartera #6: ("Etherum",4),("Litecoin",2),("Polkadot",1)
- Cartera #7: ("ShibaInu",2),("Stellar",4)

En el proyecto **CriptDB**:  
Codifica en los archivos que correspondan del directorio `Data` los siguientes requerimientos:  
1. En la definición de las entidades añade las propiedades de navegación que estimes oportunas y un método para obtener el string del objeto.  
1. En la definición de Contrato: 
    - decide cómo vas a implementar la clave primaria
    - decide si debe ser única la relación cartera-moneda y cómo la implementarías
    - añade las propiedades de navegación  

1. Implementa las migraciones en la base de datos  
1. Responde a las cuestiones abajo indicadas, en las que la respuesta se te porporcina a continuación.

En el proyecto **CriptoAPI**, se te porporciona un modelo de API para nuestra base de datos, y ambos proyectos están relacionados, así que comparten Modelos y Contexto.

1. Crea unas métodos en el controlodor proporcionado que repondan a las mismas preguntas que antes
1. Proporciona parámetors para que las api se interactiva através de swagger.
1. Los métodos deben ser asincronos. Usa async, await, Task y los cualquier método async que necesites, donde corresponda.

### Preguntas
**Una tabla** 
1.- Monedas con valor actual superior a 50€ ordenadas alfabéticamente  
```
Bitcoin Act=70.00€ Max=80.00€
Etherum Act=60.00€ Max=70.00€
Litecoin Act=60.00€ Max=60.00€
```
2.- Carteras con más de 2 monedas contratadas  
```
{ CarteraId = 1, TotalMonedas = 3 }
{ CarteraId = 2, TotalMonedas = 3 }
{ CarteraId = 3, TotalMonedas = 4 }
{ CarteraId = 4, TotalMonedas = 4 }
{ CarteraId = 6, TotalMonedas = 3 }
```
3.- Exchanges ordenados por números de carteras
```
{ Exchange = Binance, TotalCarteras = 3 }
{ Exchange = Kucoin, TotalCarteras = 2 }
{ Exchange = Coinbase, TotalCarteras = 1 }
{ Exchange = Kraken, TotalCarteras = 1 }
```
**Dos Entidades**
4.- Exchanges ordenados por cantidad de monedas
```
{ Exchange = Binance, TotalMonedas = 7 }
{ Exchange = Kucoin, TotalMonedas = 6 }
{ Exchange = Coinbase, TotalMonedas = 4 }
{ Exchange = Kraken, TotalMonedas = 4 }
```
5.- Monedas en contratos ordenadas por valor total actual
```
{ Moneda = Bitcoin, Contrato = Bitcoin1, ValorContrato = 140.0000 }
{ Moneda = Bitcoin, Contrato = Bitcoin4, ValorContrato = 140.0000 }
{ Moneda = Cardano, Contrato = Cardano3, ValorContrato = 80.0000 }
{ Moneda = Cardano, Contrato = Cardano5, ValorContrato = 40.0000 }
{ Moneda = Dogecoin, Contrato = Dogecoin2, ValorContrato = 60.0000 }
{ Moneda = Dogecoin, Contrato = Dogecoin3, ValorContrato = 80.0000 }
{ Moneda = Etherum, Contrato = Etherum6, ValorContrato = 240.0000 }
{ Moneda = Etherum, Contrato = Etherum3, ValorContrato = 240.0000 }
{ Moneda = Litecoin, Contrato = Litecoin2, ValorContrato = 180.0000 }
{ Moneda = Litecoin, Contrato = Litecoin6, ValorContrato = 120.0000 }
{ Moneda = Litecoin, Contrato = Litecoin4, ValorContrato = 180.0000 }
{ Moneda = Litecoin, Contrato = Litecoin1, ValorContrato = 180.0000 }
{ Moneda = Polkadot, Contrato = Polkadot1, ValorContrato = 160.0000 }
{ Moneda = Polkadot, Contrato = Polkadot5, ValorContrato = 120.0000 }
{ Moneda = Polkadot, Contrato = Polkadot6, ValorContrato = 40.0000 }
```

6.- Monedas en contratos ordenadas por valor actual total en todos los contratos
```
{ Moneda = Litecoin, ValorTotal = 660.0000 }
{ Moneda = Etherum, ValorTotal = 480.0000 }
{ Moneda = Polkadot, ValorTotal = 320.0000 }
{ Moneda = Bitcoin, ValorTotal = 280.0000 }
{ Moneda = Stellar, ValorTotal = 180.0000 }
{ Moneda = Dogecoin, ValorTotal = 140.0000 }
{ Moneda = Cardano, ValorTotal = 120.0000 }
{ Moneda = ShibaInu, ValorTotal = 90.0000 }
```
7.- Idem contando en cuantos contratos aparecen y ordenado por número de contratos
```
{ Moneda = ShibaInu, ValorTotal = 90.0000, Contratos = 3 }
{ Moneda = Cardano, ValorTotal = 120.0000, Contratos = 2 }
{ Moneda = Dogecoin, ValorTotal = 140.0000, Contratos = 2 }
{ Moneda = Stellar, ValorTotal = 180.0000, Contratos = 3 }
{ Moneda = Bitcoin, ValorTotal = 280.0000, Contratos = 2 }
{ Moneda = Polkadot, ValorTotal = 320.0000, Contratos = 3 }
{ Moneda = Etherum, ValorTotal = 480.0000, Contratos = 2 }
{ Moneda = Litecoin, ValorTotal = 660.0000, Contratos = 4 }
```
**Tres Modelos**
8.- Idem pero con Exchanges ordenados por valor total
```
{ Moneda = Binance, ValorTotal = 740.0000, Contratos = 7 }
{ Moneda = Kucoin, ValorTotal = 680.0000, Contratos = 6 }
{ Moneda = Coinbase, ValorTotal = 430.0000, Contratos = 4 }
{ Moneda = Kraken, ValorTotal = 420.0000, Contratos = 4 }
```
9.- Las Contratos y Monedas de Binance con monedas cuyo valor actual es inferior al 90% del valor máximo
```
{ Moneda = Bitcoin, Contrato = Bitcoin1, Máximo = 80.00, Actual = 70.00, Porcentaje = 87.5000000000000000 }
{ Moneda = Cardano, Contrato = Cardano5, Máximo = 50.00, Actual = 40.00, Porcentaje = 80.0000000000000000 }
{ Moneda = Stellar, Contrato = Stellar7, Máximo = 30.00, Actual = 20.00, Porcentaje = 66.6666666666666666 }
```

