const productos = [
    //Prendas Hombre
    {
        id: 1,
        title: "Chomba Manga Corta Hombre Premium",
        description: "GHY POLO CLUB PREMIUM - MARINA MILITARE - 100% Algodón - Color Azul,Blanco y Negro - Amplia variedad en talles",
        stock: 25,
        type: "Hombre",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_831464-MLA70192567850_062023-F.webp",
        },
        price: 16000,
    },

    {
        id: 2,
        title: "Chomba Manga Corta Hombre Clasica",
        description: "GHY POLO CLUB CLÁSICA - 100% Algodón - Disponible en colores ROJO, NEGRO y VERDE - Talles S, M y L",
        stock: 7,
        type: "Hombre",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_999538-MLA70081028099_062023-F.webp",
        
        },
        price: 12000,
    },

    {
        id: 3,
        title: "Pantalon Cargo Hombre ",
        description: "Joggins Cargo - Excelente calce y confección - Material: Algodón Rustico - Color: Negro - Talles: M, L, XS, XM",
        stock: 14,
        type: "Hombre",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_961005-MLA42528532158_072020-F.webp",
        
        },
        price: 9600,
    },

    {
        id: 4,
        title: "Pantalones Mom Jogger Hombre",
        description: "Pantalones Mom Jogger Casual Cintura Puño Jean - Disponible solo en esta presentación - Tenemos todos los talles",
        stock: 32,
        type: "Hombre",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_711344-MLA53974282671_022023-F.webp",
    
        },
        price: 12000,      
    },

    //Prendas Mujer
    {
        id: 5,
        title: "Pantalon Wide Leg Cargo Mujer ",
        description: "Prenda de tela rígida - Corte de pierna ancho - Único color disponile - Talles del 34 al 46",
        stock: 17,
        type: "Mujer",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_863196-MLA70420575566_072023-F.webp",
        
        },
        price: 22400,      
    },


    {
        id: 6,
        title: "Bubucha Jogger Dama ",
        description: "Bubucha Jogger Dama Casual Rustico Pantalón Elástico Rústico - Colores: Rosado , Blanco, Negro y Gris - Todos los talles disponibles",
        stock: 21,
        type: "Mujer",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_820541-MLA46911064938_072021-F.webp",
        
        },
        price: 7000,      
    },

    {
        id: 7,
        title: "Top Mujer Paisana Manga Larga",
        description: "Top Mujer Paisana Manga Larga Frunce Busto 100 - Disponible en color Negro y Marrón - Talles S y M",
        stock: 6,
        type: "Mujer",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_984876-MLA69613109705_052023-F.webp"
        },
        price: 11000,      
    },


    {
        id: 8,
        title: "Remera Cruzada Mujer Morley Viscosa",
        description: "Remera Cruzada Hombro Caido De Mujer Morley Viscosa - Disponible en color Rosa, Blanco y Negro - Tenemos todos los talles ",
        stock: 25,
        type: "Mujer",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_811481-MLA71324342325_082023-F.webp",
        
        },
        price: 15000,      
    },
   //Prendas Niños
    {
        id: 9,
        title: "Campera Futbol Infantil Niño Afa Argentina",
        description: "Campera Futbol Infantil Niño Afa Argentina - Alta durabilidad - Único modelo disponible - Tenemos todos los talles",
        stock: 27,
        type: "Niños",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_700105-MLA70572704686_072023-F.webp",
        
        },
        price: 14000,      
    },

    {
        id: 10,
        title: "Campera Liviana niña Con Capucha ",
        description:"Campera Liviana para niñas con capucha abrigada - Colores disponibles: Rosa y Blanco - Tenemos todos los talles",
        stock: 16,
        type: "Niños",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_811484-MLA69949833358_062023-F.webp",
        
        },
        price: 16000,      
    },
    {
        id: 11,
        title: "Remera Stumble Unisex Mangas Largas ",
        description: "Remera Stumble Unisex Mangas Largas 100% Algodón Peinado - Disponible en color Negro - Tenemos todos los talees ",
        stock: 27,
        type: "Niños",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_957888-MLA70194182812_062023-F.webp",
        
        },
        price: 8700,      
    },
    {
        id: 12,
        title: "Campera Liviana niño Con Capucha",
        description: "Campera Liviana para niños con capucha abrigada - Disponible en color azul - Tenemos todos los talles",
        stock: 17,
        type: "Niños",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_839485-MLA44946438483_022021-F.webp",
        
        },  
        price: 16000,   
    },
    //Accesorios
    {
        id: 13,
        title: "Reloj Unisex Gadnic ",
        description: "Reloj Unisex Gadnic Cronometro Alarma Luz Gold - Malla de silicona - Tipo: Digital",
        stock: 11,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_865410-MLA50598589747_072022-F.webp",
        
        },
        price: 13000,      
    },
    {
        id: 14,
        title: "Pulsera Hombre Cuero 4 En 1 Cuero Pulseras ",
        description: "Pulsera Hombre Cuero genuino - Color negro - Con dige de Infinito y cuentas de semillas ",
        stock: 3,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_656648-MLA50981397054_082022-F.webp",
        
        },
        price: 6500,      
    },
    {
        id: 15,
        title: "Reloj Swatch Skinrosee Para Mujer Syxg101",
        description: "Reloj elegante para Mujer - color champagne - Malla de silicona blanda",
        stock: 5,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_908104-MLA50598750737_072022-F.webp",
        
        },
        price: 21000,      
    },
    {
        id: 16,
        title: "Cartera Via Fina Token Original",
        description: "Cartera espaciosa de curo geniuno - Posee cuatro compartimientos con cierre - Importada",
        stock: 5,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_749793-MLA53736232956_022023-F.webp",
        
        },
        price: 31000,      
    },
]

export default productos;
