// JavaScript Document

let aArticulos=[];

aArticulos[0]=new Articulo("001","Conserva de Atun",2.5,'Atun');
aArticulos[1]=new Articulo("002","Pulpo al ajillo",4,'Pulpo');
aArticulos[2]=new Articulo("A03","Navajas gallegas",1.25,'Navajas');
aArticulos[3]=new Articulo("B02","Almejas de Hondarribi",2.5,'Almejas');
aArticulos[4]=new Articulo("D02","Mejillones de roca",4,'Mejillones');
aArticulos[5]=new Articulo("W02","Anchoas de Bermeo",6,'Anchoas');

function Articulo(id,nombre,precio,imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
	this.imagen=imagen;
	this.src=function(){
		return 'Mercado/' + this.imagen + '.jpg';
	};
}
