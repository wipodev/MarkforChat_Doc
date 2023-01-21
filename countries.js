const countries = [
  {
    name: "Afganistán",
    phone_code: "93",
  },
  {
    name: "Albania",
    phone_code: "355",
  },
  {
    name: "Alemania",
    phone_code: "49",
  },
  {
    name: "Algeria",
    phone_code: "213",
  },
  {
    name: "Andorra",
    phone_code: "376",
  },
  {
    name: "Angola",
    phone_code: "244",
  },
  {
    name: "Anguila",
    phone_code: "1 264",
  },
  {
    name: "Antártida",
    phone_code: "672",
  },
  {
    name: "Antigua y Barbuda",
    phone_code: "1 268",
  },
  {
    name: "Antillas Neerlandesas",
    phone_code: "599",
  },
  {
    name: "Arabia Saudita",
    phone_code: "966",
  },
  {
    name: "Argentina",
    phone_code: "54",
  },
  {
    name: "Armenia",
    phone_code: "374",
  },
  {
    name: "Aruba",
    phone_code: "297",
  },
  {
    name: "Australia",
    phone_code: "61",
  },
  {
    name: "Austria",
    phone_code: "43",
  },
  {
    name: "Azerbayán",
    phone_code: "994",
  },
  {
    name: "Bélgica",
    phone_code: "32",
  },
  {
    name: "Bahamas",
    phone_code: "1 242",
  },
  {
    name: "Bahrein",
    phone_code: "973",
  },
  {
    name: "Bangladesh",
    phone_code: "880",
  },
  {
    name: "Barbados",
    phone_code: "1 246",
  },
  {
    name: "Belice",
    phone_code: "501",
  },
  {
    name: "Benín",
    phone_code: "229",
  },
  {
    name: "Bhután",
    phone_code: "975",
  },
  {
    name: "Bielorrusia",
    phone_code: "375",
  },
  {
    name: "Birmania",
    phone_code: "95",
  },
  {
    name: "Bolivia",
    phone_code: "591",
  },
  {
    name: "Bosnia y Herzegovina",
    phone_code: "387",
  },
  {
    name: "Botsuana",
    phone_code: "267",
  },
  {
    name: "Brasil",
    phone_code: "55",
  },
  {
    name: "Brunéi",
    phone_code: "673",
  },
  {
    name: "Bulgaria",
    phone_code: "359",
  },
  {
    name: "Burkina Faso",
    phone_code: "226",
  },
  {
    name: "Burundi",
    phone_code: "257",
  },
  {
    name: "Cabo Verde",
    phone_code: "238",
  },
  {
    name: "Camboya",
    phone_code: "855",
  },
  {
    name: "Camerún",
    phone_code: "237",
  },
  {
    name: "Canadá",
    phone_code: "1",
  },
  {
    name: "Chad",
    phone_code: "235",
  },
  {
    name: "Chile",
    phone_code: "56",
  },
  {
    name: "China",
    phone_code: "86",
  },
  {
    name: "Chipre",
    phone_code: "357",
  },
  {
    name: "Ciudad del Vaticano",
    phone_code: "39",
  },
  {
    name: "Colombia",
    phone_code: "57",
  },
  {
    name: "Comoras",
    phone_code: "269",
  },
  {
    name: "Congo",
    phone_code: "242",
  },
  {
    name: "Congo",
    phone_code: "243",
  },
  {
    name: "Corea del Norte",
    phone_code: "850",
  },
  {
    name: "Corea del Sur",
    phone_code: "82",
  },
  {
    name: "Costa de Marfil",
    phone_code: "225",
  },
  {
    name: "Costa Rica",
    phone_code: "506",
  },
  {
    name: "Croacia",
    phone_code: "385",
  },
  {
    name: "Cuba",
    phone_code: "53",
  },
  {
    name: "Dinamarca",
    phone_code: "45",
  },
  {
    name: "Dominica",
    phone_code: "1 767",
  },
  {
    name: "Ecuador",
    phone_code: "593",
  },
  {
    name: "Egipto",
    phone_code: "20",
  },
  {
    name: "El Salvador",
    phone_code: "503",
  },
  {
    name: "Emiratos Árabes Unidos",
    phone_code: "971",
  },
  {
    name: "Eritrea",
    phone_code: "291",
  },
  {
    name: "Eslovaquia",
    phone_code: "421",
  },
  {
    name: "Eslovenia",
    phone_code: "386",
  },
  {
    name: "España",
    phone_code: "34",
  },
  {
    name: "Estados Unidos de América",
    phone_code: "1",
  },
  {
    name: "Estonia",
    phone_code: "372",
  },
  {
    name: "Etiopía",
    phone_code: "251",
  },
  {
    name: "Filipinas",
    phone_code: "63",
  },
  {
    name: "Finlandia",
    phone_code: "358",
  },
  {
    name: "Fiyi",
    phone_code: "679",
  },
  {
    name: "Francia",
    phone_code: "33",
  },
  {
    name: "Gabón",
    phone_code: "241",
  },
  {
    name: "Gambia",
    phone_code: "220",
  },
  {
    name: "Georgia",
    phone_code: "995",
  },
  {
    name: "Ghana",
    phone_code: "233",
  },
  {
    name: "Gibraltar",
    phone_code: "350",
  },
  {
    name: "Granada",
    phone_code: "1 473",
  },
  {
    name: "Grecia",
    phone_code: "30",
  },
  {
    name: "Groenlandia",
    phone_code: "299",
  },
  {
    name: "Guadalupe",
    phone_code: "",
  },
  {
    name: "Guam",
    phone_code: "1 671",
  },
  {
    name: "Guatemala",
    phone_code: "502",
  },
  {
    name: "Guayana Francesa",
    phone_code: "",
  },
  {
    name: "Guernsey",
    phone_code: "",
  },
  {
    name: "Guinea",
    phone_code: "224",
  },
  {
    name: "Guinea Ecuatorial",
    phone_code: "240",
  },
  {
    name: "Guinea-Bissau",
    phone_code: "245",
  },
  {
    name: "Guyana",
    phone_code: "592",
  },
  {
    name: "Haití",
    phone_code: "509",
  },
  {
    name: "Honduras",
    phone_code: "504",
  },
  {
    name: "Hong kong",
    phone_code: "852",
  },
  {
    name: "Hungría",
    phone_code: "36",
  },
  {
    name: "India",
    phone_code: "91",
  },
  {
    name: "Indonesia",
    phone_code: "62",
  },
  {
    name: "Irán",
    phone_code: "98",
  },
  {
    name: "Irak",
    phone_code: "964",
  },
  {
    name: "Irlanda",
    phone_code: "353",
  },
  {
    name: "Isla Bouvet",
    phone_code: "",
  },
  {
    name: "Isla de Man",
    phone_code: "44",
  },
  {
    name: "Isla de Navidad",
    phone_code: "61",
  },
  {
    name: "Isla Norfolk",
    phone_code: "",
  },
  {
    name: "Islandia",
    phone_code: "354",
  },
  {
    name: "Islas Bermudas",
    phone_code: "1 441",
  },
  {
    name: "Islas Caimán",
    phone_code: "1 345",
  },
  {
    name: "Islas Cocos (Keeling)",
    phone_code: "61",
  },
  {
    name: "Islas Cook",
    phone_code: "682",
  },
  {
    name: "Islas de Åland",
    phone_code: "",
  },
  {
    name: "Islas Feroe",
    phone_code: "298",
  },
  {
    name: "Islas Georgias del Sur y Sandwich del Sur",
    phone_code: "",
  },
  {
    name: "Islas Heard y McDonald",
    phone_code: "",
  },
  {
    name: "Islas Maldivas",
    phone_code: "960",
  },
  {
    name: "Islas Malvinas",
    phone_code: "500",
  },
  {
    name: "Islas Marianas del Norte",
    phone_code: "1 670",
  },
  {
    name: "Islas Marshall",
    phone_code: "692",
  },
  {
    name: "Islas Pitcairn",
    phone_code: "870",
  },
  {
    name: "Islas Salomón",
    phone_code: "677",
  },
  {
    name: "Islas Turcas y Caicos",
    phone_code: "1 649",
  },
  {
    name: "Islas Ultramarinas Menores de Estados Unidos",
    phone_code: "",
  },
  {
    name: "Islas Vírgenes Británicas",
    phone_code: "1 284",
  },
  {
    name: "Islas Vírgenes de los Estados Unidos",
    phone_code: "1 340",
  },
  {
    name: "Israel",
    phone_code: "972",
  },
  {
    name: "Italia",
    phone_code: "39",
  },
  {
    name: "Jamaica",
    phone_code: "1 876",
  },
  {
    name: "Japón",
    phone_code: "81",
  },
  {
    name: "Jersey",
    phone_code: "",
  },
  {
    name: "Jordania",
    phone_code: "962",
  },
  {
    name: "Kazajistán",
    phone_code: "7",
  },
  {
    name: "Kenia",
    phone_code: "254",
  },
  {
    name: "Kirgizstán",
    phone_code: "996",
  },
  {
    name: "Kiribati",
    phone_code: "686",
  },
  {
    name: "Kuwait",
    phone_code: "965",
  },
  {
    name: "Líbano",
    phone_code: "961",
  },
  {
    name: "Laos",
    phone_code: "856",
  },
  {
    name: "Lesoto",
    phone_code: "266",
  },
  {
    name: "Letonia",
    phone_code: "371",
  },
  {
    name: "Liberia",
    phone_code: "231",
  },
  {
    name: "Libia",
    phone_code: "218",
  },
  {
    name: "Liechtenstein",
    phone_code: "423",
  },
  {
    name: "Lituania",
    phone_code: "370",
  },
  {
    name: "Luxemburgo",
    phone_code: "352",
  },
  {
    name: "México",
    phone_code: "52",
  },
  {
    name: "Mónaco",
    phone_code: "377",
  },
  {
    name: "Macao",
    phone_code: "853",
  },
  {
    name: "Macedônia",
    phone_code: "389",
  },
  {
    name: "Madagascar",
    phone_code: "261",
  },
  {
    name: "Malasia",
    phone_code: "60",
  },
  {
    name: "Malawi",
    phone_code: "265",
  },
  {
    name: "Mali",
    phone_code: "223",
  },
  {
    name: "Malta",
    phone_code: "356",
  },
  {
    name: "Marruecos",
    phone_code: "212",
  },
  {
    name: "Martinica",
    phone_code: "",
  },
  {
    name: "Mauricio",
    phone_code: "230",
  },
  {
    name: "Mauritania",
    phone_code: "222",
  },
  {
    name: "Mayotte",
    phone_code: "262",
  },
  {
    name: "Micronesia",
    phone_code: "691",
  },
  {
    name: "Moldavia",
    phone_code: "373",
  },
  {
    name: "Mongolia",
    phone_code: "976",
  },
  {
    name: "Montenegro",
    phone_code: "382",
  },
  {
    name: "Montserrat",
    phone_code: "1 664",
  },
  {
    name: "Mozambique",
    phone_code: "258",
  },
  {
    name: "Namibia",
    phone_code: "264",
  },
  {
    name: "Nauru",
    phone_code: "674",
  },
  {
    name: "Nepal",
    phone_code: "977",
  },
  {
    name: "Nicaragua",
    phone_code: "505",
  },
  {
    name: "Niger",
    phone_code: "227",
  },
  {
    name: "Nigeria",
    phone_code: "234",
  },
  {
    name: "Niue",
    phone_code: "683",
  },
  {
    name: "Noruega",
    phone_code: "47",
  },
  {
    name: "Nueva Caledonia",
    phone_code: "687",
  },
  {
    name: "Nueva Zelanda",
    phone_code: "64",
  },
  {
    name: "Omán",
    phone_code: "968",
  },
  {
    name: "Países Bajos",
    phone_code: "31",
  },
  {
    name: "Pakistán",
    phone_code: "92",
  },
  {
    name: "Palau",
    phone_code: "680",
  },
  {
    name: "Palestina",
    phone_code: "",
  },
  {
    name: "Panamá",
    phone_code: "507",
  },
  {
    name: "Papúa Nueva Guinea",
    phone_code: "675",
  },
  {
    name: "Paraguay",
    phone_code: "595",
  },
  {
    name: "Perú",
    phone_code: "51",
  },
  {
    name: "Polinesia Francesa",
    phone_code: "689",
  },
  {
    name: "Polonia",
    phone_code: "48",
  },
  {
    name: "Portugal",
    phone_code: "351",
  },
  {
    name: "Puerto Rico",
    phone_code: "1",
  },
  {
    name: "Qatar",
    phone_code: "974",
  },
  {
    name: "Reino Unido",
    phone_code: "44",
  },
  {
    name: "República Centroafricana",
    phone_code: "236",
  },
  {
    name: "República Checa",
    phone_code: "420",
  },
  {
    name: "República Dominicana",
    phone_code: "1 809",
  },
  {
    name: "Reunión",
    phone_code: "",
  },
  {
    name: "Ruanda",
    phone_code: "250",
  },
  {
    name: "Rumanía",
    phone_code: "40",
  },
  {
    name: "Rusia",
    phone_code: "7",
  },
  {
    name: "Sahara Occidental",
    phone_code: "",
  },
  {
    name: "Samoa",
    phone_code: "685",
  },
  {
    name: "Samoa Americana",
    phone_code: "1 684",
  },
  {
    name: "San Bartolomé",
    phone_code: "590",
  },
  {
    name: "San Cristóbal y Nieves",
    phone_code: "1 869",
  },
  {
    name: "San Marino",
    phone_code: "378",
  },
  {
    name: "San Martín (Francia)",
    phone_code: "1 599",
  },
  {
    name: "San Pedro y Miquelón",
    phone_code: "508",
  },
  {
    name: "San Vicente y las Granadinas",
    phone_code: "1 784",
  },
  {
    name: "Santa Elena",
    phone_code: "290",
  },
  {
    name: "Santa Lucía",
    phone_code: "1 758",
  },
  {
    name: "Santo Tomé y Príncipe",
    phone_code: "239",
  },
  {
    name: "Senegal",
    phone_code: "221",
  },
  {
    name: "Serbia",
    phone_code: "381",
  },
  {
    name: "Seychelles",
    phone_code: "248",
  },
  {
    name: "Sierra Leona",
    phone_code: "232",
  },
  {
    name: "Singapur",
    phone_code: "65",
  },
  {
    name: "Siria",
    phone_code: "963",
  },
  {
    name: "Somalia",
    phone_code: "252",
  },
  {
    name: "Sri lanka",
    phone_code: "94",
  },
  {
    name: "Sudáfrica",
    phone_code: "27",
  },
  {
    name: "Sudán",
    phone_code: "249",
  },
  {
    name: "Suecia",
    phone_code: "46",
  },
  {
    name: "Suiza",
    phone_code: "41",
  },
  {
    name: "Surinám",
    phone_code: "597",
  },
  {
    name: "Svalbard y Jan Mayen",
    phone_code: "",
  },
  {
    name: "Swazilandia",
    phone_code: "268",
  },
  {
    name: "Tadjikistán",
    phone_code: "992",
  },
  {
    name: "Tailandia",
    phone_code: "66",
  },
  {
    name: "Taiwán",
    phone_code: "886",
  },
  {
    name: "Tanzania",
    phone_code: "255",
  },
  {
    name: "Territorio Británico del Océano Índico",
    phone_code: "",
  },
  {
    name: "Territorios Australes y Antárticas Franceses",
    phone_code: "",
  },
  {
    name: "Timor Oriental",
    phone_code: "670",
  },
  {
    name: "Togo",
    phone_code: "228",
  },
  {
    name: "Tokelau",
    phone_code: "690",
  },
  {
    name: "Tonga",
    phone_code: "676",
  },
  {
    name: "Trinidad y Tobago",
    phone_code: "1 868",
  },
  {
    name: "Tunez",
    phone_code: "216",
  },
  {
    name: "Turkmenistán",
    phone_code: "993",
  },
  {
    name: "Turquía",
    phone_code: "90",
  },
  {
    name: "Tuvalu",
    phone_code: "688",
  },
  {
    name: "Ucrania",
    phone_code: "380",
  },
  {
    name: "Uganda",
    phone_code: "256",
  },
  {
    name: "Uruguay",
    phone_code: "598",
  },
  {
    name: "Uzbekistán",
    phone_code: "998",
  },
  {
    name: "Vanuatu",
    phone_code: "678",
  },
  {
    name: "Venezuela",
    phone_code: "58",
  },
  {
    name: "Vietnam",
    phone_code: "84",
  },
  {
    name: "Wallis y Futuna",
    phone_code: "681",
  },
  {
    name: "Yemen",
    phone_code: "967",
  },
  {
    name: "Yibuti",
    phone_code: "253",
  },
  {
    name: "Zambia",
    phone_code: "260",
  },
  {
    name: "Zimbabue",
    phone_code: "263",
  },
];

const country = document.querySelector("#country-list");

countries.forEach((e) => {
  if (e.name === "Perú") {
    country.innerHTML += `<option value='${e.phone_code}' selected>${e.name}</option>`;
  } else {
    country.innerHTML += `<option value='${e.phone_code}'>${e.name}</option>`;
  }
});
