var iNoticias = 4;
var aNoticias = new Array();

var sNoticia1 =
  "<p>Donald John Trump (Nueva York, 14 de junio de 1946) es un empresario, político, personalidad televisiva y escritor estadounidense. Tras su triunfo en las elecciones presidenciales, es quien tiene la más alta probabilidad de convertirse en el próximo presidente de los Estados Unidos, una vez que se haya pronunciado el Colegio Electoral. Si resulta elegido, asumirá el cargo como 45.° presidente de la Unión el 20 de enero de 2017. Es presidente de la Trump Organization y fundador de la empresa de hotel y juegos de azar Trump Entertainment Resorts, que es ahora propiedad de Carl Icahn. Trump es una celebridad televisiva, y entre otras cosas fue el presentador del programa de telerrealidad The Apprentice, de la NBC, entre 2004 y 2015. Es hijo de un acaudalado promotor inmobiliario de Nueva York, en cuya empresa, Elizabeth Trump & Son, trabajó mientras estudiaba en la Escuela de Negocios Wharton de la Universidad de Pensilvania. En 1968, se unió oficialmente a esa sociedad, que controla desde 1971, cuando la renombró Trump Organization. En los años 1990 la empresa entró en bancarrota comercial, pero en la década siguiente se recuperó, lo que le reportó una fortuna de varios miles de millones de dólares.</p>";

var sNoticia2 =
  "<p>Hillary Diane Rodham Clinton, más conocida como Hillary Clinton (Chicago, 26 de octubre de 1947), es una política estadounidense, candidata por el Partido Demócrata a la presidencia de los Estados Unidos en las elecciones de noviembre de 2016. Es la primera mujer candidata en obtener ese estatus de parte de uno de los partidos más importantes de Estados Unidos. Se desempeñó como la sexagésima séptima secretaria de Estado de los Estados Unidos de 2009 a 2013, senadora junior de los Estados Unidos representando a Nueva York de 2001 a 2009, primera dama de los Estados Unidos de 1993 a 2001 y primera dama de Arkansas de 1983 a 1992.</p><p>Hillary Rodham creció en el área de Chicago. Asistió al Wellesley College, donde se graduó en 1969 y obtuvo su título de la Facultad de Derecho de Yale en 1973. Luego de ejercer como asesora parlamentaria en temas legales, se mudó a Arkansas, casándose con Bill Clinton en 1975. En 1977, Rodham cofundó Defensores para Niños y Familias de Arkansas, una organización sin fines de lucro. Se convirtió en la primera mujer en presidir la Corporación de Servicios Legales en 1978 y, al año siguiente, fue nombrada como la primera socia mujer en el Rose Law Firm. Como primera dama de Arkansas (1979-81, 1983-92), dirigió un grupo de trabajo cuyas recomendaciones ayudaron a reformar las escuelas públicas de Arkansas, e integró juntas directivas de corporaciones, incluyendo Wal-Mart.</p>";

var sNoticia3 =
  "<p>Bernard Sanders (Nueva York, 8 de septiembre de 1941) es un político estadounidense, senador junior de los Estados Unidos por el estado de Vermont y recandidato del Partido Demócrata para las elecciones presidenciales de 2016 en dicho país. Aunque es demócrata desde 2015, sostiene el récord como el independiente con más antigüedad en la historia del Congreso de EE. UU.5 Es el líder de la oposición en el Comité del Presupuesto del Senado desde enero de 2015. </p><p>Sanders nació y creció en Brooklyn, Nueva York. De estudiante, fue miembro de la Liga Socialista de la Juventud (YPSL por sus siglas en inglés), activista y organizador de protestas como parte del Movimiento por los Derechos Civiles para el Congreso de Igualdad Racial y el Comité Coordinador Estudiantil No Violento. En 1963, participó en la Marcha sobre Washington por el Trabajo y la Libertad donde Martin Luther King Jr. pronunció su histórico discurso 'Yo tengo un sueño'.</p>";

var sNoticia4 =
  "<p>Abraham Lincoln (Hodgenville, Kentucky, 12 de febrero de 1809 - Washington D. C., 15 de abril de 1865) fue un político estadounidense, decimosexto presidente de los Estados Unidos y primero por el Partido Republicano.</p> <p> Como un fuerte oponente de la expansión de la esclavitud en los Estados Unidos, Lincoln ganó la nominación del Partido Republicano en 1860 y fue elegido presidente a finales de ese año. Durante su período, ayudó a preservar los Estados Unidos por la derrota de los secesionistas Estados Confederados de América en la Guerra Civil estadounidense.4 5 Introdujo medidas que dieron como resultado la abolición de la esclavitud, con la emisión de su Proclamación de Emancipación en 1863 y la promoción de la aprobación de la Decimotercera Enmienda a la Constitución en 1865.</p> <p> Lincoln supervisó estrechamente el resultado de la guerra hasta que llegó a su fin, en particular la selección de los mejores generales, incluyendo a Ulysses S. Grant. Lincoln movilizó con éxito a la opinión pública a través de su retórica y discursos; su discurso de Gettysburg es sólo un ejemplo de ello. Al finalizar la guerra, Lincoln estableció la reconstrucción, tratando de reunir rápidamente al país a través de una generosa política de reconciliación. Su asesinato en 1865 fue el primer magnicidio en Estados Unidos.</p>";

for (i = 0; i < iNoticias; i++) {
  aNoticias[i] = new Array(4);
}

aNoticias[0][0] = "Donald Trump";
aNoticias[0][1] = sNoticia1;
aNoticias[0][2] = "Fotos/Trump.png";

aNoticias[1][0] = "Hillary Clinton";
aNoticias[1][1] = sNoticia2;
aNoticias[1][2] = "Fotos/Hillary.png";

aNoticias[2][0] = "Bernard Sanders";
aNoticias[2][1] = sNoticia3;
aNoticias[2][2] = "Fotos/Bernard.png";

aNoticias[3][0] = "Abraham Lincoln";
aNoticias[3][1] = sNoticia4;
aNoticias[3][2] = "Fotos/Lincoln.png";
