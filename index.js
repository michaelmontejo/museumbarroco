
// titulo 1 //
const title = document.querySelector("#title");
const eventType = "onclick"

function controlFunction() {
	title.style.color = "red";
}

function paintToGivenColor(color) {
	title.style.color = color;
}

// about picture//

const card2picture = document.querySelector("#picture");
const eventType2 = "onclick2"

function controlFunctionpicture() {
	picture.style.color = "black";
}

function paintToGivenColorpicture(color) {
	picture.style.color = color;
}

// about architecture //

const card3architecture = document.querySelector("#architecture");
const eventType3 = "onclick3"

function controlFunctionarchitecture() {
	architecture.style.color = "black";
}

function paintToGivenColorarchitecture(color) {
	architecture.style.color = color;
}

// about music//

const card4music = document.querySelector("#music");
const eventType4 = "onclick4"

function controlFunctionmusic() {
	music.style.color = "black";
}

function paintToGivenColormusic(color) {
	music.style.color = color;
}

//card meninas

const card5music = document.querySelector("#meninas");
const eventType5 = "onclick5"


function bigmeninas(x) {
	x.style.height = "600px";

}

function normalmeninas(x) {
	x.style.height = "400px";

}

// church card 1


function on_card1(id) {
	card1 = document.getElementById('card1').textContent = 'La iglesia de San Nicolás de Bari es uno de los templos góticos del centro de Valencia. Sin embargo, las reformas acontecidas a finales del XVII convirtieron esta iglesia en uno de las obras maestras del arte barroco en España. Particularmente, los frescos que ocupan la totalidad de la bóveda del templo. Son unos 2000 metros cuadros de pinturas, que fueron ejecutados por Dionís Vidal, aunque la idea fue diseñada por Antonio Palomino, pintor de cámara de Carlos II, quien revolucionó el arte de la pintura barroca al fresco en Valencia (se encargó también de los frescos de la cúpula de la Basílica de la Virgen de los Desamparados y los de la Iglesia de los Santos Juanes). Esta serie de pinturas relatan la vida de San Nicolás de Bari y de San Pedro Mártir, los dos santos titulares del templo';

}

function off_card1(id) {
	card1 = document.getElementById('card1').textContent = '';
}


// church card 2


function on_card2(id) {
	card2 = document.getElementById('card2').textContent = ' La Abadía de Melk, en el Valle del Danubio, es uno de los monasterios más famosos de Austria. Aunque fue alzado originariamente en el siglo XI, lo que realmente la convierte en una de las joyas del arte barroco en Europa es su reforma realizada a partir de principios del siglo XVIII. En este cenobio alzado en lo alto de un suave montículo desde el que se domina el río Danubio, se puede conocer tanto la iglesia abacial, cubierta con frescos de Johann Michael Rottmayr, como la fabulosa biblioteca, que es otra de las grandes joyas del arte barroco en Europa, o las conocidas como Habitaciones Imperiales, que eran las usadas por la Familia Imperial cuando acudían a Melk. Una de las estancias más impresionantes del Monasterio de Melk es la Sala de Mármol, destinada a celebraciones especiales y donde domina la decoración en estuco, aunque por el nombre de la sala podríamos pensar que se trata de mármol.  La fantástica pintura que decora el techo muestra a los Habsburgo como símbolo de la sabiduría y la templanza. Es un fresco obra de Gaetano Fanti. ';

}

function off_card2(id) {
	card2 = document.getElementById('card2').textContent = '';
}

// church card 3


function on_card3(id) {
	card3 = document.getElementById('card3').textContent = ' La primera piedra se colocó el 19 de Julio de 1575 en manos del mismo Arzobispo de Lima D. Jerónimo de Loayza y desde entonces ha sufrido el paso del tiempo y del hombre. Caída ante varios terremotos y vuelta a levantar se concluyó la fachada en 1720,  145 años después, bellamente recargada al estilo Rococó Churrigueresgo, cargada de adornos y labrada en piedra, En las hornacinas de esta fachada hay 10 imágenes, además de la imágen central de San Agustín quien ocupa la ubicación estelar, ya en 1895 fue destruida la torre y gran parte de la fachada por un cañonazo de las fuerzas Caceristas quienes luchaban la guerra civil contra los Pierolistas, posteriormente se intento reconstruir pero fue hecho con desmedro de la fachada original, ya que se altero el diseño agregándole una imagen humana y un ventanal circular los que discordaban estéticamente con el estilo original. Su importancia también radica en que es una de las dos portadas de estilo churrigueresco que quedan en Lima, junto a la portada de la Basílica de La Merced. Del templo antiguo, sólo ha quedado el frontispicio y los muros laterales. También existen obras de gran valor como la sillería del coro, la cajonería de la sacristía, el artesonado de la antisacristía, su colección pictórica y el patio del claustro principal con bellos portales. Llama la atención en la sala capitular, con su antigua cátedra tallada y algunos lienzos de la escuela Italiana, y la escultura de La Muerte, hecha por Baltazar Gavilán, a comienzos del siglo XVIII.  ';

}

function off_card3(id) {
	card3 = document.getElementById('card3').textContent = '';
}


// church card 4


function on_card4(id) {
	card4 = document.getElementById('card4').textContent = ' Este convento ostenta el primer puesto entre todas las casas de la Provincia, por haber sido el primero que se fundó en 1550 cuando llegaron de España los religiosos que venían a organizar formalmente la presencia de la Orden Franciscana en el Nuevo Reino de Granada. Por esta razón se conoce como "el Convento Máximo". Pero también se le llama "Convento de la Purificación" por ser este su titular. La primera sede que tuvo fue en el lugar que hoy se conoce como la Parroquia de las Nieves, en la carrera séptima, por muy poco tiempo. Luego estuvo en el mismo sitio que actualmente ocupa la iglesia de San Agustín. Pero en 1557 se trasladaron al emplazamiento actual, a las casas que les donó el arzobispo Fray Juan de los Barrios, también franciscano, que este compró al comerciante Juan Muñoz de Collantes. Aquí se dedicaron a construir el convento, que llegó a tener dos manzanas. En este convento tuvo su sede la Curia Provincial hasta finales de 1861 cuando el decreto de extinción de las comunidades religiosas en Nueva Granada, dejó sin legitimidad a los frailes. El convento pensó en ser utilizado como cárcel pública, pero no habiendo prosperado la idea, en 1862 se instaló la gobernación de Cundinamarca. Con motivo de los temblores de agosto de 1917, el edificio de la gobernación sufrió serios daños por lo cual fue demolido. Esto dio orígen a la construcción del actual palacio de la Gobernación, que se inició en 1918 y terminó en 1933, de conformidad con los planos que hizo el arquitecto francés Gastón Lelarge. ';


}

function off_card4(id) {
	card4 = document.getElementById('card4').textContent = '';
}



//page picture 1

function on_picture1(id) {
	picture1 = document.getElementById("picture1").innerHTML = '<img src="./pictures/picturespage/Rendicion_de_Breda_de_Velazquez.jpg" />';
}

//page picture 2

function on_picture2(id) {
	picture2 = document.getElementById("picture2").innerHTML = '<img src="./pictures/picturespage/barroco-totenart-Caravaggio.jpg" />';
}

//page picture 3

function on_picture3(id) {
	picture3 = document.getElementById("picture3").innerHTML = '<img src="./pictures/picturespage/jacob_jordaens_preview.jpg" />';
	
}


