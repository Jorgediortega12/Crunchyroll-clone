import bcryptjs from 'bcryptjs';

interface SeedUser {
    email: string; 
    password: string; 
    name: string; 
    role: 'premium' | 'free'
}

interface SeedData {
    users: SeedUser[]
}

export const intialData: SeedData = {
    users: [
        {
            email: 'jorge@google.com', 
            name: 'Jorge Diaz', 
            password: bcryptjs.hashSync('123456'), 
            role: 'free'
        },
        {
            email: 'luis@google.com', 
            name: 'luis Diaz', 
            password: bcryptjs.hashSync('123456'), 
            role: 'premium'
        }
    ]
}

interface SwiperAnimes {
    logo: string;
    dubbing: string;
    subtitle: string;
    image: string;
}

export const PrincipalSwiper: SwiperAnimes[] = [
    {
        logo: "/img/logo-one-piece.png",
        dubbing: "sub | dob",
        subtitle: "Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a surcar los mares y se convertirá en un capitán dispuesto a no darse por vencido jamás hasta hacerse con el mayor tesoro de la historia: el legendario One Piece.",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/a2f0200a-0562-41ea-bbba-f8777480e5e9.png"
    },
    {
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/cr/logo/da6a43c2-9359-4477-936a-7f602ac8dbef.png",
        dubbing: "sub | dob",
        subtitle: "Alcanza la lo más alto y todo será tuyo. En la cima de la torre encontrarás todo lo que existe en este mundo, y todo puede ser tuyo. Podrás ser un dios. Esta es la historia del inicio y el final de Rachel, la joven que...",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/f7bf6ecf-536e-421b-8fa0-c124890e30b2.png"
    },
    {
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/cr/logo/53e9c240-3200-4b4e-94ed-1f357554f712.png",
        dubbing: "sub | dob",
        subtitle: "En un mundo repleto de criaturas conocidas como Kaiju, Kafka Hibino siempre quiso ser parte del Cuerpo de Defensa. Junto a Mina Ashiro, su amiga de la infancia, prometen que ambos lograrán unirse, sin...",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/e07b68b9-58b8-4a6b-94c0-c2757e8531f1.png"
    },
    {
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/cr/logo/da6a43c2-9359-4477-936a-7f602ac8dbef.png",
        dubbing: "sub | dob",
        subtitle: "Alcanza la lo más alto y todo será tuyo. En la cima de la torre encontrarás todo lo que existe en este mundo, y todo puede ser tuyo. Podrás ser un dios. Esta es la historia del inicio y el final de Rachel, la joven que...",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/f7bf6ecf-536e-421b-8fa0-c124890e30b2.png"
    },
    {
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/cr/logo/d442c357-982a-4fdc-a95b-ed4de45e3177.png",
        dubbing: "sub | dob",
        subtitle: "2B es una unidad que participa en una misión que tristemente sale mal y eliminan a todo su equipo. Ella intenta seguir con su misión, donde conoce a 9S...",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/3292018d-aebe-449d-97f7-7573fc2dc390.png"
    },
    {
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/cr/logo/e710b42c-1063-42ad-83f8-ddff9c7f0bdf.png",
        dubbing: "sub | dob",
        subtitle: "Satoru Mikami es un hombre de 37 años que tiene un trabajo que no le gusta, sin salida y que no es feliz con la vida que lleva, pero cuando muere a manos de un ladrón y piensa que es su fin, se despierta descubriendo...",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/d81af839-2972-499b-a12e-240b94e79bd5.png"
    }
];


interface AnimesRecomendados {
    image: string;
    title: string;
    subtitle: string;
    titleHover: string;
    ratingHover: number;
    seasonHover: number;
    descriptionHover: string;
}

export const recomendationAnimes: AnimesRecomendados[] = [
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpg',
        title: 'NieR:Automata Ver1.1a',
        subtitle: 'sub | dob',
        titleHover: 'NieR:Automata Ver1.1a',
        ratingHover: 4.9,
        seasonHover: 1,
        descriptionHover: '2B es una unidad que participa en una misión que tristemente sale mal y eliminan a todo su equipo. Ella intenta seguir con su misión, donde conoce a 9S...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/935ad8e1c044f1164c2af8e18042c2e6.jpg',
        title: 'Tower of God',
        subtitle: 'sub | dob',
        titleHover: 'Tower of God',
        ratingHover: 4.9,
        seasonHover: 2,
        descriptionHover: 'Alcanza la lo más alto y todo será tuyo. En la cima de la torre encontrarás todo lo que existe en este mundo, y todo puede ser tuyo. Podrás ser un dios. Esta es la historia del inicio y el final de Rachel, la joven que ascendió la torre para poder ver las estrellas, y Bam, el joven que lo único que necesitaba era estar con ella...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/18638d44e180fd1b51870106b88e46e4.jpe',
        title: 'Fairy tail',
        subtitle: 'subtitulada',
        titleHover: 'Fairy tail',
        ratingHover: 4.9,
        seasonHover: 5,
        descriptionHover: 'Lucy Heartfilia es una joven decidida a unirse al gremio de magos Fairy Tail. En su recorrido conocerá a Natsu, que es parte del gremio y que le ofrece entrar a formar parte de sus filas. Una historia de amistad, superación, combates mágicos, humor y muchos retos que superar, siempre con mucha acción de por medio...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d35a0f9c7d10fd3b1c8173b563354a6c.jpe',
        title: 'Our Last Crusade or the Rise of a New World',
        subtitle: 'sub | dob',
        titleHover: 'Our Last Crusade or the Rise of a New World',
        ratingHover: 4.2,
        seasonHover: 2,
        descriptionHover: 'Dos enemigos enfrentados en un conflicto encuentran una base común, lo que los convierte en potenciales traidores para sus países y amantes desgarrados por la guerra...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d117d6da529adb8ee4d972af79024365.jpg',
        title: 'SHY',
        subtitle: 'subtitulada',
        titleHover: 'SHY',
        ratingHover: 4.9,
        seasonHover: 1,
        descriptionHover: 'Estando el mundo al borde de una tercera Guerra Mundial, surgieron superhéroes. Dotados de poderes extraordinarios, su aparición marcó el inicio de una era de paz global. Cada héroe escogió un país para habitar, proteger y servir a sus ciudadanos...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ab22932625b71d760d7c844c6b822fa4.jpg',
        title: 'The café Terrace and Its Goddesses',
        subtitle: 'subtitulada',
        titleHover: 'The café Terrace and Its Goddesses',
        ratingHover: 4.9,
        seasonHover: 3,
        descriptionHover: 'Cuando la abuela de Hayato fallece, el joven tiene por plan deshacerse del café que esta tenía en la playa, pero cuando regresa a casa, ¡¿descubre que hay cinco jóvenes viviendo allí y que dicen ser familia de su abuela?! Las chicas intentan...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/5b17f6825dee3e161e959b5b3d64539c.jpg',
        title: 'Spice And Wolf: MERCHANT MEETS THE WISE WOLF',
        subtitle: 'sub | dob',
        titleHover: 'Spice And Wolf: MERCHANT MEETS THE WISE WOLF',
        ratingHover: 4.6,
        seasonHover: 1,
        descriptionHover: 'Lawrence, a traveling merchant, finds a nude girl with the ears and tail of a wolf asleep in his cart. She is Holo, a harvest goddess with an untamed beast lurking inside. Armed with his street smarts and her animal instincts, a simple peddler and a forgotten deity journey through the countryside while reaping the riches of happiness and exposing the bankruptcy which dwells in the human heart...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a30d7186097866e311f55708caf90038.jpg',
        title: 'My Hero academia',
        subtitle: 'sub | dob',
        titleHover: 'My Hero academia',
        ratingHover: 4.9,
        seasonHover: 4,
        descriptionHover: 'En un mundo en el que la mayor parte de la población nace con un Don, una habilidad extraordinaria diferente en cada cual, no tardaron en aparecer tanto villanos como héroes dispuestos a detenerlos...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ebf137866cc45a05c7401148fe1d6d20.jpg',
        title: 'That Time I Got Reincarnated a as Slime',
        subtitle: 'subtitulada',
        titleHover: 'That Time I Got Reincarnated a as Slime',
        ratingHover: 4.2,
        seasonHover: 2,
        descriptionHover: 'Satoru Mikami es un hombre de 37 años que tiene un trabajo que no le gusta, sin salida y que no es feliz con la vida que lleva, pero cuando muere a manos de un ladrón y piensa que es su fin, se despierta descubriendo que se ha reencarnado en un mundo de magia y espada… ¡pero como un slime! Ahora tendrá que acostumbrarse a su nueva vida, aunque po...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f4c8dd3886ccee3526b42b6b6230c63e.jpg',
        title: 'DEAD DEAD DEMONS DEDEDEDE DESTRUCTION',
        subtitle: 'subtitulada',
        titleHover: 'DEAD DEAD DEMONS DEDEDEDE DESTRUCTION',
        ratingHover: 4.5,
        seasonHover: 3,
        descriptionHover: 'Mientras el mundo se ve amenazado por la repentina aparición de una nave nodriza extraterrestre, Kadode Koyama y Oran "Ontan" Nakagawa, dos mejores amigas, siguen sus vidas como estudiantes de preparatoria. A medida que crecen, se enfrentan a preguntas existenciales, descubren lo complejo que es ser adultas y que la verdadera amenaza podría no estar sobre sus cabezas...'
    }
]

interface AnimesFree {
    image: string;
    title: string;
    subtitle: string;
    titleHover: string;
    ratingHover: number;
    seasonHover: number;
    descriptionHover: string;

}

export const FreeAnimes: AnimesFree[] = [
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe',
        title: 'Chainsaw Man',
        subtitle: 'sub | dob',
        titleHover: 'Chainsaw Man',
        ratingHover: 4.9,
        seasonHover: 1,
        descriptionHover: 'Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Para pagar la deuda que le dejó su padre tras su muerte, ha tenido que ganarse el pan como puede matando demonios y vendiendo sus cadáverse a la mafia, aunque su vida siempre ha sido miserable...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe',
        title: 'Jujutsu kaisen',
        subtitle: 'sub | dob',
        titleHover: 'Jujutsu kaisen',
        ratingHover: 4.9,
        seasonHover: 3,
        descriptionHover: '¡Sigue al joven Yuji Itadori en esta serie de acción sobrenatural mientras entrena como hechicero y explora el violento mundo de las maldiciones! Yuji Itadori se traga un dedo maldito para salvar a alguien de su clase y ahora Ryomen Sukuna, un poderoso hechicero malvado conocido como el Rey de las Maldiciones...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpg',
        title: 'Bungo Stray Dogs',
        subtitle: 'subtitulada',
        titleHover: 'Bungo Stray Dogs',
        ratingHover: 4.9,
        seasonHover: 6,
        descriptionHover: 'Habiendo sido expulsado del orfanato y estando a punto de morir de hambre, Atsushi Nakajima conoce a unos hombres. Ambos son miembros de la Agencia Armada de Detectives que se dice que puede resolver cualquier incidente, incluso aquellos que la policía y el ejército no se atreven a investigar...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe',
        title: 'Ranking of Kings',
        subtitle: 'sub | dob',
        titleHover: 'Ranking of Kings',
        ratingHover: 4.9,
        seasonHover: 2,
        descriptionHover: 'Incapaz de oír, hablar o incluso de empuñar una espada, el príncipe Bojji no parece el típico heredero al trono, algo que todo su reino comparte. Pero un encuentro con una misteriosa sombra hace que consiga su primer amigo verdadero. Ambos partirán a una gran aventura y forjarán un vínculo capaz de superar cualquier obstáculo... incluso la dificultad de convertirse en rey...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpe',
        title: 'One Piece',
        subtitle: 'sub | dob',
        titleHover: 'One Piece',
        ratingHover: 4.9,
        seasonHover: 25,
        descriptionHover: 'Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a surcar los mares y se convertirá en un capitán dispuesto a no darse por vencido jamás hasta hacerse con el mayor tesoro de la historia: el legendario One Piece...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe',
        title: 'Vinland Saga: Season 2',
        subtitle: 'subtitulada',
        titleHover: 'Vinland Saga: Season 2',
        ratingHover: 4.9,
        seasonHover: 2,
        descriptionHover: 'Cuando Thors, un gran guerrero viking muere asesinado en batalla a manos de Askeladd, un mercenario, su hijo, Thorfinn, jura vengarse. Para ello tendrá que demostrar su valía antes de ganarse el derecho a retar a un duelo al asesino de su padre...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/095217fdb4f228410df09b18f151be28.jpe',
        title: 'Spy x Family',
        subtitle: 'sub | dob',
        titleHover: 'Spy x Family',
        ratingHover: 4.9,
        seasonHover: 2,
        descriptionHover: 'Todo el mundo tiene una parte de sí mismos que no puede mostrar a los demás. En una era en la que las naciones de todo el mundo se encuentran involucradas en una feroz guerra de información a puerta cerrada...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a624f140a1c8be841889d3fcca597f5a.jpe',
        title: 'Yona of the Dawn',
        subtitle: 'sub | dob',
        titleHover: 'Yona of the Dawn',
        ratingHover: 4.8,
        seasonHover: 1,
        descriptionHover: 'Yona es la única princesa de un gran reino, su pacifista padre la ha criado entre algodones y siempre ha estado protegida por su amigo de la infancia y guardían Hak. Sin embargo, el día que cumple 16 años su destino cambia por completo...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpe',
        title: 'Code Geass',
        subtitle: 'subtitulada',
        titleHover: 'Code Geass',
        ratingHover: 4.9,
        seasonHover: 3,
        descriptionHover: 'Año 2017 del calendario imperial. Lelouch, un joven cuyo derecho de sucesión al trono le fue arrebatado, se convierte en "Zero", el hombre enmascarado, y conduce una insurrección a gran escala, la "Rebelión Negra", contra su propia patria, la superpotencia del Sacro Imperio de Britannia. Mientras el sentimiento anti Britannia se hace más fuerte...'
    },
    {
        image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpg',
        title: 'My Dress-Up Darling',
        subtitle: 'subtitulada',
        titleHover: 'My Dress-Up Darling',
        ratingHover: 4.9,
        seasonHover: 1,
        descriptionHover: 'Gojo Wakana es un estudiante de preparatoria que quiere convertirse en un maestro del tradicional arte de crear muñecas Hina. Aunque adora ese arte, no sabe nada de las últimas tendencias y eso hace que le cueste encajar con sus compañeros de clase...'
    }
]