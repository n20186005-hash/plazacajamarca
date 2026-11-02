// Topic registry for plazacajamarca.com — data-driven long-tail pages.
// Each topic is bilingual (es/en) and renders through TopicPage.astro.
// Adding a page = adding an entry here; routes, sitemap and the homepage
// cluster pick it up automatically.

export interface TopicSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export const GROUPS = {
  visita: { es: "Cómo visitar", en: "How to visit" },
  historia: { es: "Historia y cultura", en: "History & culture" },
  lugares: { es: "Lugares cercanos", en: "Nearby places" },
  comer: { es: "Comer y beber", en: "Food & drink" },
  rutas: { es: "Rutas y circuitos", en: "Routes & itineraries" },
} as const;

export type GroupKey = keyof typeof GROUPS;

export interface Topic {
  slug: string;
  group: GroupKey;
  related: string[];
  es: TopicContent;
  en: TopicContent;
}

export const TOPICS: Topic[] = [
  // 01 — Cómo llegar
  {
    slug: "como-llegar",
    group: "visita",
    related: ["aeropuerto-a-plaza", "horarios-y-entrada", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Cómo llegar a la Plaza de Armas de Cajamarca: opciones y rutas",
      metaDescription:
        "Formas de llegar a la Plaza de Armas de Cajamarca: avión, bus interprovincial, taxi y a pie desde el centro. Distancias y consejos para orientarse.",
      h1: "Cómo llegar a la Plaza de Armas de Cajamarca",
      lead: "La plaza se encuentra en el centro de la ciudad de Cajamarca, a 2.722 m de altitud. Es el punto de partida natural para recorrer el centro histórico a pie.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Desde el aeropuerto",
          paragraphs: [
            "El Aeropuerto de Cajamarca (CJA) conecta la ciudad con Lima y otras plazas del país. Desde ahí, el traslado al centro depende del tráfico y del medio que elija.",
            "Un taxi autorizado en el módulo del aeropuerto o un transporte coordinado de antemano son las opciones más directas. El trayecto hasta la plaza suele tomar entre 10 y 20 minutos, según la hora.",
          ],
          bullets: ["Confirme el punto de descenso antes de salir.", "Pregunte o acuerde la tarifa si es posible."],
        },
        {
          heading: "En bus interprovincial",
          paragraphs: [
            "Las empresas de transporte terrestre llegan a los terminales de la ciudad. Desde la terminal, puede tomar un taxi, un vehículo urbano o caminar según su equipaje y el horario.",
            "El centro histórico es compacto; desde varios puntos urbanos la plaza queda a distancia caminable.",
          ],
        },
        {
          heading: "Dentro del centro",
          paragraphs: [
            "La Plaza de Armas está en el casco central. El acceso peatonal es el tramo final: baje en una calle cercana y camine por rutas iluminadas, especialmente al anochecer.",
            "Indique «Plaza de Armas de Cajamarca» como destino si usa aplicaciones de transporte; la plaza es un referente conocido.",
          ],
        },
        {
          heading: "Cómo orientarse al llegar",
          paragraphs: [
            "Al llegar, ubique la pileta octogonal en el centro y la Catedral frente a ella. Ese eje le sirve de brújula para el resto del recorrido a pie.",
          ],
          bullets: ["Lleve el mapa de la guía a mano.", "Empiece por el borde de la plaza antes de entrar a los edificios."],
        },
      ],
      faqs: [
        {
          question: "¿La plaza está lejos del aeropuerto?",
          answer:
            "No mucho: el Aeropuerto de Cajamarca está en las afueras de la ciudad, y el centro queda a unos 10–20 minutos en vehículo según el tráfico. Confirme el tiempo el día de su viaje.",
        },
        {
          question: "¿Puedo ir a pie desde la terminal de buses?",
          answer:
            "Depende de la terminal y su equipaje. Muchas terminales quedan a distancia caminable o a un corto trayecto en taxi del centro histórico.",
        },
        {
          question: "¿Qué dirección dar a un taxista?",
          answer: "Indique «Plaza de Armas de Cajamarca». Es un punto de referencia conocido en el centro de la ciudad.",
        },
        {
          question: "¿Conviene rentar auto?",
          answer:
            "Para recorrer solo el centro histórico no es necesario. Si planea excursiones a Baños del Inca, Cumbemayo o Granja Porcón, un vehículo o tour le da más flexibilidad.",
        },
        {
          question: "¿Cómo llego desde Lima?",
          answer:
            "En avión hasta el Aeropuerto de Cajamarca, o en bus interprovincial de larga distancia hasta la terminal de la ciudad. Desde ahí, continúe hacia el centro como se describe arriba.",
        },
      ],
    },
    en: {
      metaTitle: "How to get to Plaza de Armas de Cajamarca: routes & options",
      metaDescription:
        "Ways to reach Plaza de Armas de Cajamarca: flights, interprovincial buses, taxis and walking from the centre. Distances and orientation tips.",
      h1: "How to get to Plaza de Armas de Cajamarca",
      lead: "The square sits in the centre of Cajamarca, at 2,722 m elevation. It is the natural starting point for walking the historic centre.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "From the airport",
          paragraphs: [
            "Cajamarca Airport (CJA) connects the city with Lima and other destinations. From there, the transfer to the centre depends on traffic and the option you choose.",
            "An authorised taxi at the airport stand or pre-arranged transport are the most direct options. The trip to the square usually takes 10–20 minutes depending on the hour.",
          ],
          bullets: ["Confirm your drop-off point before leaving.", "Ask about or agree on the fare if possible."],
        },
        {
          heading: "By interprovincial bus",
          paragraphs: [
            "Long-distance bus companies arrive at the city terminals. From the terminal you can take a taxi, an urban vehicle or walk, depending on your luggage and schedule.",
            "The historic centre is compact; from several urban points the square is within walking distance.",
          ],
        },
        {
          heading: "Within the centre",
          paragraphs: [
            "Plaza de Armas is in the central district. Pedestrian access is the final stretch: alight on a nearby street and walk along lit routes, especially after dusk.",
            "Give «Plaza de Armas de Cajamarca» as your destination if you use ride apps; the square is a well-known landmark.",
          ],
        },
        {
          heading: "How to orient on arrival",
          paragraphs: [
            "On arrival, locate the octagonal fountain in the centre and the Cathedral facing it. That axis serves as your compass for the rest of the walk.",
          ],
          bullets: ["Keep the guide map at hand.", "Start from the edge of the square before entering the buildings."],
        },
      ],
      faqs: [
        {
          question: "Is the square far from the airport?",
          answer:
            "Not far: Cajamarca Airport is on the outskirts, and the centre is about 10–20 minutes by vehicle depending on traffic. Confirm the time on your travel day.",
        },
        {
          question: "Can I walk from the bus terminal?",
          answer:
            "It depends on the terminal and your luggage. Many terminals are within walking distance or a short taxi ride from the historic centre.",
        },
        {
          question: "What address do I give a taxi driver?",
          answer: "Give «Plaza de Armas de Cajamarca». It is a well-known landmark in the city centre.",
        },
        {
          question: "Is it worth renting a car?",
          answer:
            "For the historic centre alone it is not necessary. If you plan excursions to Baños del Inca, Cumbemayo or Granja Porcón, a vehicle or tour gives more flexibility.",
        },
        {
          question: "How do I get from Lima?",
          answer:
            "Fly to Cajamarca Airport, or take a long-distance interprovincial bus to the city terminal. From there, continue to the centre as described above.",
        },
      ],
    },
  },

  // 02 — Aeropuerto a Plaza
  {
    slug: "aeropuerto-a-plaza",
    group: "visita",
    related: ["como-llegar", "horarios-y-entrada"],
    es: {
      metaTitle: "Del Aeropuerto de Cajamarca a la Plaza de Armas: distancia y traslado",
      metaDescription:
        "Cómo ir del Aeropuerto de Cajamarca (CJA) a la Plaza de Armas: distancia aproximada, opciones de taxi y consejos de llegada al centro.",
      h1: "Del aeropuerto de Cajamarca a la Plaza de Armas",
      lead: "El Aeropuerto de Cajamarca (código CJA) es la puerta aérea de la ciudad. Desde ahí, el centro histórico y la plaza quedan a un traslado corto en vehículo.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Distancia y tiempo",
          paragraphs: [
            "El aeropuerto está en las afueras de la ciudad, no lejos del centro. El tiempo de traslado varía con el tráfico y el punto exacto de descenso, pero suele rondar los 10 a 20 minutos.",
            "No hay una cifra fija: confirme el trayecto el mismo día, porque el tránsito urbano y las obras pueden modificarlo.",
          ],
          bullets: ["El centro es compacto; el destino final es la Plaza de Armas.", "Lleve a mano el mapa para indicar el punto de bajada."],
        },
        {
          heading: "Opciones de traslado",
          paragraphs: [
            "En el módulo del aeropuerto puede contratar un taxi autorizado. También es común coordinar un transporte privado de antemano, sobre todo si llega de noche.",
            "Las aplicaciones de transporte pueden no estar siempre disponibles, así que conviene acordar el recorrido y, si es posible, una tarifa antes de subir.",
          ],
          bullets: ["Taxi autorizado en el aeropuerto.", "Transporte privado acordado con anticipación."],
        },
        {
          heading: "Al bajar en el centro",
          paragraphs: [
            "Pida que lo dejen en una calle cercana a la plaza. Desde ahí, el tramo hasta la Plaza de Armas es peatonal y breve.",
            "La plaza está señalizada como referente central; indicar su nombre suele bastar para orientar al conductor.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuánto dura el viaje del aeropuerto a la plaza?",
          answer:
            "Generalmente entre 10 y 20 minutos en vehículo, según el tráfico y el punto de descenso. Confirme el tiempo el día de su viaje.",
        },
        {
          question: "¿Hay buses del aeropuerto al centro?",
          answer:
            "El aeropuerto es pequeño y el traslado habitual es en taxi o transporte privado. Consulte en la terminal qué opciones operan el día de su llegada.",
        },
        {
          question: "¿Conviene acordar la tarifa?",
          answer:
            "Sí. Si usa taxi, acordar el recorrido y la tarifa antes de subir evita sorpresas, porque las apps no siempre están disponibles.",
        },
        {
          question: "¿El aeropuerto queda en la ciudad?",
          answer: "Está en las afueras de Cajamarca, a un corto trayecto del centro histórico.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca Airport to Plaza de Armas: distance & transfer",
      metaDescription:
        "How to get from Cajamarca Airport (CJA) to Plaza de Armas: approximate distance, taxi options and arrival tips for the city centre.",
      h1: "From Cajamarca Airport to Plaza de Armas",
      lead: "Cajamarca Airport (code CJA) is the city's air gateway. From there, the historic centre and the square are a short vehicle transfer away.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Distance and time",
          paragraphs: [
            "The airport is on the outskirts of the city, not far from the centre. Transfer time varies with traffic and your exact drop-off, but is usually around 10–20 minutes.",
            "There is no fixed figure: confirm the route on the day, as urban traffic and works can change it.",
          ],
          bullets: ["The centre is compact; your final destination is Plaza de Armas.", "Keep the map handy to indicate the drop-off point."],
        },
        {
          heading: "Transfer options",
          paragraphs: [
            "At the airport stand you can hire an authorised taxi. Arranging private transport in advance is also common, especially for night arrivals.",
            "Ride apps may not always be available, so it helps to agree on the route and, if possible, a fare before getting in.",
          ],
          bullets: ["Authorised taxi at the airport.", "Private transport arranged in advance."],
        },
        {
          heading: "Arriving in the centre",
          paragraphs: [
            "Ask to be dropped on a street near the square. From there, the stretch to Plaza de Armas is pedestrian and short.",
            "The square is a signposted central landmark; giving its name is usually enough to orient the driver.",
          ],
        },
      ],
      faqs: [
        {
          question: "How long is the airport-to-square trip?",
          answer: "Generally 10–20 minutes by vehicle, depending on traffic and drop-off. Confirm on your travel day.",
        },
        {
          question: "Are there buses from the airport to the centre?",
          answer:
            "The airport is small and the usual transfer is by taxi or private transport. Ask at the terminal what operates on your arrival day.",
        },
        {
          question: "Should I agree on the fare?",
          answer:
            "Yes. With a taxi, agreeing the route and fare before getting in avoids surprises, since apps are not always available.",
        },
        {
          question: "Is the airport in the city?",
          answer: "It is on the outskirts of Cajamarca, a short ride from the historic centre.",
        },
      ],
    },
  },

  // 06 — Horarios y entrada
  {
    slug: "horarios-y-entrada",
    group: "visita",
    related: ["como-llegar", "cuarto-del-rescate", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Horarios y entrada de la Plaza de Armas de Cajamarca: ¿es gratis?",
      metaDescription:
        "¿La Plaza de Armas de Cajamarca tiene entrada? ¿Está abierta todo el día? Diferencias con iglesias, museos y sitios cercanos que sí tienen horario.",
      h1: "Horarios y entrada de la Plaza de Armas",
      lead: "La plaza es un espacio público y peatonal del centro de Cajamarca. No funciona como un recinto de pago: se recorre libremente, aunque los edificios a su alrededor sí tienen sus propias condiciones.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "La plaza es de acceso libre",
          paragraphs: [
            "La ficha pública de MINCETUR registra ingreso libre y una referencia de acceso durante las 24 horas para la plaza como espacio abierto.",
            "Esto significa que puede caminar por ella y sentarse en sus bancas en cualquier momento, dentro del uso cotidiano del espacio urbano.",
          ],
          bullets: ["Sin taquilla ni costo de admisión para recorrer la plaza.", "El horario «24 horas» corresponde al espacio público, no a los edificios."],
        },
        {
          heading: "Lo que tiene horario propio",
          paragraphs: [
            "La Catedral, la Iglesia de San Francisco, el Cuarto del Rescate y el Conjunto Monumental Belén tienen sus propios horarios y, en algunos casos, costo de entrada.",
            "Estos sitios dependen de programación religiosa, de museo o de gestión cultural, por lo que pueden cerrar los lunes, en feriados o por mantenimiento.",
          ],
          bullets: ["Confirme horario y costo en la fuente oficial de cada sitio.", "El Cuarto del Rescate suele tener entrada administrada; verifíquela antes."],
        },
        {
          heading: "Cómo planear sin sorpresas",
          paragraphs: [
            "Si su objetivo es solo la plaza y su entorno inmediato, puede ir en cualquier franja del día. Si quiere entrar a iglesias o museos, apunte a la mañana o la tarde y verifique antes.",
            "El clima de altura también influye: las mañanas y tardes suelen ser más cómodas para caminar.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿La Plaza de Armas de Cajamarca tiene entrada?",
          answer:
            "No para recorrerla: la ficha de MINCETUR registra ingreso libre. Es un espacio público; los edificios cercanos tienen sus propias condiciones.",
        },
        {
          question: "¿Está abierta todo el día?",
          answer:
            "Como espacio público, la referencia de acceso es de 24 horas. Iglesias, museos y actividades tienen horarios distintos que conviene confirmar.",
        },
        {
          question: "¿Cuánto cuesta entrar?",
          answer:
            "Recorrer la plaza no tiene costo. Sitios como el Cuarto del Rescate pueden tener entrada administrada; confirme el monto vigente en la fuente oficial.",
        },
        {
          question: "¿Qué día es mejor para visitar los edificios?",
          answer: "Mañana o tarde, verificando horarios. Varios museos y monumentos cierran ciertos días; chequee antes de ir.",
        },
        {
          question: "¿La plaza cierra por lluvia?",
          answer:
            "No como espacio abierto, pero las visitas a interiores dependen de cada sitio. Planee con margen si el clima es inestable.",
        },
      ],
    },
    en: {
      metaTitle: "Plaza de Armas de Cajamarca hours & entry: is it free?",
      metaDescription:
        "Does Plaza de Armas de Cajamarca charge entry? Is it open all day? How it differs from nearby churches, museums and sites that do have hours.",
      h1: "Plaza de Armas hours & entry",
      lead: "The square is a public, pedestrian space in the centre of Cajamarca. It is not a paid enclosure: you walk it freely, though the buildings around it have their own conditions.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The square is free to access",
          paragraphs: [
            "MINCETUR's public record lists free entry and a 24-hour access reference for the square as an open space.",
            "This means you can walk through it and sit on its benches at any time, within the square's everyday urban use.",
          ],
          bullets: ["No ticket office or admission cost to walk the square.", "The «24 hours» refers to the public space, not the buildings."],
        },
        {
          heading: "What has its own hours",
          paragraphs: [
            "The Cathedral, San Francisco Church, the Ransom Room and the Belén Monumental Complex have their own schedules and, in some cases, entry cost.",
            "These sites depend on religious, museum or cultural programming, so they may close on Mondays, holidays or for maintenance.",
          ],
          bullets: ["Confirm hours and cost at each site's official source.", "The Ransom Room usually has a managed entry; verify it beforehand."],
        },
        {
          heading: "Planning without surprises",
          paragraphs: [
            "If your goal is just the square and its immediate surroundings, you can go at any time of day. If you want to enter churches or museums, aim for morning or afternoon and check first.",
            "High-altitude weather also matters: mornings and afternoons are usually more comfortable for walking.",
          ],
        },
      ],
      faqs: [
        {
          question: "Does Plaza de Armas de Cajamarca charge entry?",
          answer:
            "Not to walk it: MINCETUR's record lists free entry. It is a public space; the nearby buildings have their own conditions.",
        },
        {
          question: "Is it open all day?",
          answer:
            "As a public space, the access reference is 24 hours. Churches, museums and activities have different hours worth confirming.",
        },
        {
          question: "How much does it cost to enter?",
          answer:
            "Walking the square costs nothing. Sites like the Ransom Room may have a managed entry; confirm the current amount at the official source.",
        },
        {
          question: "Which day is best to visit the buildings?",
          answer: "Morning or afternoon, checking hours. Several museums and monuments close certain days; check before going.",
        },
        {
          question: "Does the square close for rain?",
          answer:
            "Not as an open space, but indoor visits depend on each site. Plan with margin if the weather is unstable.",
        },
      ],
    },
  },

  // 12 — Historia de la Plaza
  {
    slug: "plaza-de-armas",
    group: "historia",
    related: ["atahualpa-y-1532", "catedral-de-cajamarca", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Historia de la Plaza de Armas de Cajamarca: del incario al centro colonial",
      metaDescription:
        "La Plaza de Armas de Cajamarca a través del tiempo: trazado andino, periodo colonial, la pileta octogonal y su declaratoria como Monumento Histórico en 1972.",
      h1: "Historia de la Plaza de Armas de Cajamarca",
      lead: "La plaza reúne capas de historia andina y colonial en el valle norteño del Perú. No es un escenario fijo, sino un espacio que ha cambiado de sentido a lo largo de los siglos.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Antes de la colonia",
          paragraphs: [
            "En el mundo andino, el espacio que hoy es la plaza ya era un nudo de encuentro. El trazado inca y el colonial se superponen en el centro de Cajamarca, y esa herencia se lee aún en su planta.",
            "No se trataba solo de un vacío urbano: era un lugar de intercambio, ceremonia y organización del territorio.",
          ],
        },
        {
          heading: "El periodo colonial",
          paragraphs: [
            "Tras el encuentro de 1532, la plaza se convirtió en el centro cívico y religioso de la ciudad que creció a su alrededor. Templos de los siglos XVII al XIX definen hoy su borde.",
            "La Catedral de Cajamarca frente a la fuente, y la Iglesia de San Francisco con su acervo de arte religioso, son parte de ese borde construido.",
          ],
        },
        {
          heading: "La pileta octogonal",
          paragraphs: [
            "En el centro permanece la pileta de piedra, de forma octogonal, que las fuentes públicas sitúan a fines del siglo XVII.",
            "Fue declarada Monumento Histórico por resolución estatal en 1972, según la ficha oficial de inventario. Es la pieza más antigua y visible del centro de la plaza.",
          ],
        },
        {
          heading: "La plaza hoy",
          paragraphs: [
            "Hoy la plaza es un espacio público vivo: paso peatonal, descanso y vida cotidiana, además de punto de partida para recorrer el centro histórico.",
            "Leerla con contexto permite entenderla como patrimonio, no como un decorado inmóvil.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuándo se construyó la plaza?",
          answer:
            "Su trazado combina herencia andina y colonial; no hay una fecha única. Los edificios de su borde son de los siglos XVII al XIX.",
        },
        {
          question: "¿Qué edad tiene la pileta?",
          answer: "Las fuentes públicas la sitúan a fines del siglo XVII, y fue declarada Monumento Histórico en 1972.",
        },
        {
          question: "¿Por qué es importante?",
          answer:
            "Porque concentra historia andina, colonial y vida cotidiana, y porque el encuentro de 1532 ocurrió en sus inmediaciones.",
        },
        {
          question: "¿La plaza es patrimonio?",
          answer:
            "La pileta octogonal tiene declaratoria de Monumento Histórico (1972). El conjunto forma parte del centro histórico de Cajamarca.",
        },
      ],
    },
    en: {
      metaTitle: "History of Plaza de Armas de Cajamarca: from Inca times to the colonial centre",
      metaDescription:
        "Plaza de Armas de Cajamarca through time: Andean layout, colonial period, the octagonal fountain and its 1972 Historic Monument declaration.",
      h1: "History of Plaza de Armas de Cajamarca",
      lead: "The square gathers layers of Andean and colonial history in Peru's northern valley. It is not a fixed stage but a space whose meaning has changed over the centuries.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Before the colony",
          paragraphs: [
            "In the Andean world, the ground that is now the square was already a meeting point. Inca and colonial layouts overlap in the centre of Cajamarca, and that heritage is still read in its plan.",
            "It was not merely an urban void: it was a place of exchange, ceremony and territorial organisation.",
          ],
        },
        {
          heading: "The colonial period",
          paragraphs: [
            "After the 1532 encounter, the square became the civic and religious heart of the city that grew around it. Churches from the 17th to 19th centuries now define its edge.",
            "Cajamarca Cathedral facing the fountain, and San Francisco Church with its colonial religious art, are part of that built edge.",
          ],
        },
        {
          heading: "The octagonal fountain",
          paragraphs: [
            "At the centre stands the stone basin, octagonal in shape, that public sources date to the late 17th century.",
            "It was declared a Historic Monument by a 1972 state resolution, according to the official inventory record. It is the oldest and most visible piece at the centre of the square.",
          ],
        },
        {
          heading: "The square today",
          paragraphs: [
            "Today the square is a living public space: pedestrian passage, rest and daily life, and the starting point to walk the historic centre.",
            "Reading it in context lets you understand it as heritage, not as a static backdrop.",
          ],
        },
      ],
      faqs: [
        {
          question: "When was the square built?",
          answer:
            "Its layout blends Andean and colonial heritage; there is no single date. The buildings on its edge date from the 17th to 19th centuries.",
        },
        {
          question: "How old is the fountain?",
          answer: "Public sources date it to the late 17th century, and it was declared a Historic Monument in 1972.",
        },
        {
          question: "Why is it important?",
          answer:
            "Because it concentrates Andean, colonial and daily-life history, and because the 1532 encounter occurred nearby.",
        },
        {
          question: "Is the square heritage?",
          answer:
            "The octagonal fountain has a Historic Monument declaration (1972). The ensemble is part of Cajamarca's historic centre.",
        },
      ],
    },
  },

  // 13 — Atahualpa y 1532
  {
    slug: "atahualpa-y-1532",
    group: "historia",
    related: ["cuarto-del-rescate", "plaza-de-armas", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Atahualpa y 1532: el encuentro de Cajamarca y el Cuarto del Rescate",
      metaDescription:
        "Qué ocurrió en Cajamarca en 1532 entre Atahualpa y Francisco Pizarro, y cómo se vincula la plaza con el Cuarto del Rescate. Historia con fuentes.",
      h1: "Atahualpa y 1532: el encuentro de Cajamarca",
      lead: "El encuentro entre las fuerzas de Francisco Pizarro y el inca Atahualpa ocurrió en noviembre de 1532 en las inmediaciones de la plaza. Es el capítulo histórico más citado de Cajamarca.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El contexto de 1532",
          paragraphs: [
            "En noviembre de 1532, Atahualpa llegó a Cajamarca con su ejército tras la guerra civil inca. Poco después ocurrió el encuentro con las fuerzas de Pizarro en el área de la plaza.",
            "La tradición local vincula este espacio con el llamado Cuarto del Rescate, donde —según las crónicas— se reunió oro y plata para pagar la libertad del inca.",
          ],
        },
        {
          heading: "El Cuarto del Rescate",
          paragraphs: [
            "A pocos minutos a pie de la plaza se encuentra la sala inca de piedra conocida como Cuarto del Rescate. Las fuentes la describen como el recinto donde Atahualpa habría sido retenido.",
            "Hoy es un monumento visitable gestionado por una entidad cultural; tiene su propio horario y costo de entrada, distintos a los de la plaza abierta.",
          ],
        },
        {
          heading: "Leer la historia con cuidado",
          paragraphs: [
            "Este hecho fue un punto de quiebre para el mundo andino y para la historia del Perú. Conviene distinguir lo que registran las crónicas de las versiones populares y evitar tratarlo como espectáculo.",
            "La guía no dramatiza ni inventa detalles: se apoya en fuentes públicas y en la memoria del lugar.",
          ],
        },
        {
          heading: "Cómo visitarlo",
          paragraphs: [
            "Puede combinar la plaza, el Cuarto del Rescate y otros hitos en una caminata de memoria. El circuito histórico de 3 horas de esta guía propone un orden sensato.",
          ],
          bullets: ["Empiece en la plaza para ubicar el contexto.", "Continúe al Cuarto del Rescate a pocos minutos a pie.", "Verifique horario y entrada del monumento antes de ir."],
        },
      ],
      faqs: [
        {
          question: "¿Qué pasó en Cajamarca en 1532?",
          answer:
            "Ocurrió el encuentro entre las fuerzas de Pizarro y el inca Atahualpa, en noviembre de 1532, en las inmediaciones de la plaza.",
        },
        {
          question: "¿Dónde está el Cuarto del Rescate?",
          answer: "A pocos minutos a pie de la Plaza de Armas. Es una sala inca de piedra que las fuentes vinculan con Atahualpa.",
        },
        {
          question: "¿Fue un espectáculo?",
          answer:
            "No. Fue un hecho histórico de quiebre. Esta guía lo trata con seriedad y se apoya en fuentes públicas, sin inventar detalles.",
        },
        {
          question: "¿El Cuarto del Rescate tiene entrada?",
          answer:
            "Sí, suele tener una entrada administrada por la entidad gestora. Confirme el monto y horario vigentes en la fuente oficial.",
        },
        {
          question: "¿Cuánto tiempo necesito?",
          answer: "Una visita conjunta plaza–Cuarto del Rescate cabe en el circuito de 3 horas de esta guía.",
        },
      ],
    },
    en: {
      metaTitle: "Atahualpa and 1532: the Cajamarca encounter and the Ransom Room",
      metaDescription:
        "What happened in Cajamarca in 1532 between Atahualpa and Francisco Pizarro, and how the square links to the Ransom Room (Cuarto del Rescate). Sourced history.",
      h1: "Atahualpa and 1532: the Cajamarca encounter",
      lead: "The encounter between the forces of Francisco Pizarro and the Inca Atahualpa occurred in November 1532 near the square. It is the most cited historical chapter of Cajamarca.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The context of 1532",
          paragraphs: [
            "In November 1532, Atahualpa arrived in Cajamarca with his army after the Inca civil war. Soon after, the encounter with Pizarro's forces took place in the area of the square.",
            "Local tradition links this space to the so-called Ransom Room (Cuarto del Rescate), where — according to the chronicles — gold and silver were gathered to pay for the Inca's freedom.",
          ],
        },
        {
          heading: "The Ransom Room",
          paragraphs: [
            "A few minutes' walk from the square is the Inca stone chamber known as the Cuarto del Rescate. Sources describe it as the room where Atahualpa was held.",
            "Today it is a visitable monument managed by a cultural institution; it has its own schedule and entry fee, different from the open square.",
          ],
        },
        {
          heading: "Reading the history carefully",
          paragraphs: [
            "This event was a turning point for the Andean world and for the history of Peru. It helps to distinguish what the chronicles record from popular versions, and to avoid treating it as spectacle.",
            "This guide does not dramatise or invent details: it relies on public sources and the memory of the place.",
          ],
        },
        {
          heading: "How to visit it",
          paragraphs: [
            "You can combine the square, the Ransom Room and other landmarks on a memory walk. This guide's 3-hour historical circuit suggests a sensible order.",
          ],
          bullets: ["Start at the square to set the context.", "Continue to the Ransom Room a few minutes away.", "Check the monument's schedule and entry before going."],
        },
      ],
      faqs: [
        {
          question: "What happened in Cajamarca in 1532?",
          answer:
            "The encounter between Pizarro's forces and the Inca Atahualpa occurred in November 1532 near the square.",
        },
        {
          question: "Where is the Ransom Room?",
          answer: "A few minutes' walk from Plaza de Armas. It is an Inca stone chamber that sources link to Atahualpa.",
        },
        {
          question: "Was it a spectacle?",
          answer:
            "No. It was a historical turning point. This guide treats it seriously and relies on public sources, without inventing details.",
        },
        {
          question: "Does the Ransom Room charge entry?",
          answer:
            "Yes, it usually has an entry fee managed by the institution. Confirm the current amount and schedule at the official source.",
        },
        {
          question: "How much time do I need?",
          answer: "A combined square–Ransom Room visit fits the 3-hour circuit in this guide.",
        },
      ],
    },
  },

  // 16 — Catedral
  {
    slug: "catedral-de-cajamarca",
    group: "lugares",
    related: ["iglesia-san-francisco", "plaza-de-armas", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Catedral de Cajamarca: historia, arquitectura y visita",
      metaDescription:
        "La Catedral de Cajamarca frente a la Plaza de Armas: historia, fachada y consejos de visita. Horario y entrada, confirme en la fuente oficial.",
      h1: "Catedral de Cajamarca",
      lead: "La Catedral de Cajamarca se alza frente a la pileta de la plaza, definiendo uno de los bordes más visibles del centro histórico.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "En el borde de la plaza",
          paragraphs: [
            "El templo está situado en el lado de la plaza opuesto a otros edificios coloniales, y es un referente visual central del conjunto.",
            "Su fachada y torre se leen como parte del perfil cotidiano de la plaza, no como un recinto aislado.",
          ],
        },
        {
          heading: "Historia y arquitectura",
          paragraphs: [
            "Como muchas iglesias del centro, combina elementos coloniales y reformas posteriores. Las fuentes la describen dentro del conjunto de templos de los siglos XVII al XIX de Cajamarca.",
            "No se atribuyen aquí fechas precisas de cada etapa sin documentación; lo relevante es su papel en el borde construido de la plaza.",
          ],
        },
        {
          heading: "Visita y horarios",
          paragraphs: [
            "El ingreso a la iglesia suele ser libre para el culto y la visita breve, pero el horario depende de la programación religiosa local.",
            "Si desea entrar, apunte a la mañana o la tarde y confirme el horario vigente en la fuente oficial o en la propia parroquia.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿La Catedral de Cajamarca tiene entrada?",
          answer:
            "El ingreso para culto y visita breve suele ser libre; el horario depende de la programación local. Confirme antes de ir.",
        },
        {
          question: "¿Está abierta todo el día?",
          answer: "No necesariamente. Las iglesias tienen horarios propios ligados a misas y actividades; verifique.",
        },
        {
          question: "¿Cuánto tiempo se necesita?",
          answer: "Una vista exterior y una entrada breve caben en 15–30 minutos dentro de un recorrido a pie.",
        },
        {
          question: "¿Por qué está frente a la plaza?",
          answer: "Porque forma parte del borde colonial de la Plaza de Armas, junto a otros templos del centro histórico.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca Cathedral: history, architecture and visit",
      metaDescription:
        "Cajamarca Cathedral facing Plaza de Armas: history, façade and visiting tips. Hours and entry — confirm at the official source.",
      h1: "Cajamarca Cathedral",
      lead: "Cajamarca Cathedral rises opposite the square's fountain, defining one of the most visible edges of the historic centre.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "On the edge of the square",
          paragraphs: [
            "The church stands on the side of the square opposite other colonial buildings, and is a central visual reference of the ensemble.",
            "Its façade and tower read as part of the square's everyday profile, not as an isolated enclosure.",
          ],
        },
        {
          heading: "History and architecture",
          paragraphs: [
            "Like many churches in the centre, it blends colonial elements with later reforms. Sources place it among Cajamarca's 17th–19th century temples.",
            "No precise dates for each stage are asserted without documentation; what matters is its role in the built edge of the square.",
          ],
        },
        {
          heading: "Visit and hours",
          paragraphs: [
            "Entry for worship and a brief visit is usually free, but the schedule depends on local religious programming.",
            "If you want to enter, aim for morning or afternoon and confirm the current schedule at the official source or the parish itself.",
          ],
        },
      ],
      faqs: [
        {
          question: "Does Cajamarca Cathedral charge entry?",
          answer: "Entry for worship and a brief visit is usually free; the schedule depends on local programming. Confirm before going.",
        },
        {
          question: "Is it open all day?",
          answer: "Not necessarily. Churches have their own hours tied to masses and activities; check.",
        },
        {
          question: "How much time do I need?",
          answer: "An exterior view and a brief entry fit in 15–30 minutes within a walking tour.",
        },
        {
          question: "Why is it opposite the square?",
          answer: "Because it is part of the colonial edge of Plaza de Armas, alongside other historic-centre churches.",
        },
      ],
    },
  },

  // 17 — San Francisco
  {
    slug: "iglesia-san-francisco",
    group: "lugares",
    related: ["catedral-de-cajamarca", "conjunto-monumental-belen", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Iglesia de San Francisco de Cajamarca: arte religioso y convento",
      metaDescription:
        "La Iglesia de San Francisco de Cajamarca: arquitectura colonial, acervo de arte religioso y su relación con el Conjunto Monumental Belén. Visita y horarios.",
      h1: "Iglesia de San Francisco de Cajamarca",
      lead: "La Iglesia de San Francisco es uno de los templos que ayudan a leer el borde urbano de la Plaza de Armas, con un acervo de arte religioso colonial.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Un templo del centro",
          paragraphs: [
            "San Francisco forma parte del conjunto de iglesias que definen el perímetro de la plaza y el centro histórico de Cajamarca.",
            "Su arquitectura y su acervo artístico lo vinculan con la tradición religiosa colonial de la ciudad.",
          ],
        },
        {
          heading: "Arte y convento",
          paragraphs: [
            "El conjunto incluye espacios de arte religioso que suelen visitarse como muestra del barroco andino. El horario y la entrada dependen de la gestión del recinto.",
            "Por su cercanía, se suele combinar con el Conjunto Monumental Belén en una misma caminata del centro.",
          ],
        },
        {
          heading: "Cómo visitarlo",
          paragraphs: [
            "Ubíquelo a pocos minutos a pie de la plaza. Confirme el horario de visita y, si aplica, el costo, en la fuente oficial o en el propio recinto.",
          ],
          bullets: ["Combínelo con Belén y la Catedral.", "Verifique horario antes de ir, pues puede cerrar ciertos días."],
        },
      ],
      faqs: [
        {
          question: "¿La Iglesia de San Francisco tiene entrada?",
          answer:
            "Depende del espacio: la iglesia suele permitir visita breve; las salas de arte pueden tener horario y costo propios. Confirme.",
        },
        {
          question: "¿Qué arte tiene?",
          answer: "Un acervo de arte religioso colonial relacionado con el barroco andino, según las fuentes locales.",
        },
        {
          question: "¿Está cerca de la plaza?",
          answer: "Sí, a pocos minutos a pie de la Plaza de Armas.",
        },
        {
          question: "¿Se visita con Belén?",
          answer:
            "Suele combinarse con el Conjunto Monumental Belén por su cercanía en el centro histórico.",
        },
      ],
    },
    en: {
      metaTitle: "San Francisco Church Cajamarca: colonial art and convent",
      metaDescription:
        "San Francisco Church of Cajamarca: colonial architecture, religious art collection and its link to the Belén Monumental Complex. Visit and hours.",
      h1: "San Francisco Church of Cajamarca",
      lead: "San Francisco Church is one of the temples that helps read the urban edge of Plaza de Armas, with a collection of colonial religious art.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "A church in the centre",
          paragraphs: [
            "San Francisco is part of the group of churches that define the perimeter of the square and Cajamarca's historic centre.",
            "Its architecture and art collection link it to the city's colonial religious tradition.",
          ],
        },
        {
          heading: "Art and convent",
          paragraphs: [
            "The complex includes religious-art spaces usually visited as an example of Andean baroque. Schedule and entry depend on the venue's management.",
            "Because of its proximity, it is often combined with the Belén Monumental Complex on the same centre walk.",
          ],
        },
        {
          heading: "How to visit",
          paragraphs: [
            "Locate it a few minutes' walk from the square. Confirm the visiting hours and, if applicable, the cost at the official source or the venue itself.",
          ],
          bullets: ["Combine it with Belén and the Cathedral.", "Check the schedule before going, as it may close certain days."],
        },
      ],
      faqs: [
        {
          question: "Does San Francisco Church charge entry?",
          answer:
            "It depends on the space: the church usually allows a brief visit; the art rooms may have their own hours and cost. Confirm.",
        },
        {
          question: "What art does it hold?",
          answer: "A collection of colonial religious art related to Andean baroque, per local sources.",
        },
        {
          question: "Is it near the square?",
          answer: "Yes, a few minutes' walk from Plaza de Armas.",
        },
        {
          question: "Is it visited with Belén?",
          answer:
            "It is often combined with the Belén Monumental Complex because of its proximity in the historic centre.",
        },
      ],
    },
  },

  // 18 — Cuarto del Rescate
  {
    slug: "cuarto-del-rescate",
    group: "lugares",
    related: ["atahualpa-y-1532", "circuito-historico-3-horas", "horarios-y-entrada"],
    es: {
      metaTitle: "Cuarto del Rescate de Cajamarca: historia y visita",
      metaDescription:
        "El Cuarto del Rescate de Cajamarca: la sala inca de piedra vinculada a Atahualpa, su historia y cómo visitarlo. Horario y entrada, confirme en la fuente oficial.",
      h1: "Cuarto del Rescate de Cajamarca",
      lead: "El Cuarto del Rescate es una sala inca de piedra a pocos minutos a pie de la Plaza de Armas, vinculada por la tradición al cautiverio de Atahualpa en 1532.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué es",
          paragraphs: [
            "Se trata de un recinto de muros de piedra muy bien labrada, atribuido a la arquitectura inca. Las fuentes lo describen como el espacio donde Atahualpa habría sido retenido tras el encuentro de 1532.",
            "Su valor es tanto arquitectónico como histórico: es uno de los pocos ejemplos visibles de mampostería inca en el centro de la ciudad.",
          ],
        },
        {
          heading: "Historia y memoria",
          paragraphs: [
            "La tradición lo vincula al «rescate»: la reunión de oro y plata para pagar la libertad del inca, según las crónicas.",
            "Esta guía trata el hecho con seriedad, distinguiendo lo que registran las fuentes de las versiones populares.",
          ],
        },
        {
          heading: "Visita y condiciones",
          paragraphs: [
            "Hoy es un monumento visitable gestionado por una entidad cultural. A diferencia de la plaza abierta, tiene horario y costo de entrada propios.",
            "Confirme el monto y el horario vigentes en la fuente oficial antes de su visita; pueden cambiar.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué es el Cuarto del Rescate?",
          answer: "Una sala inca de piedra cerca de la plaza, vinculada por la tradición al cautiverio de Atahualpa en 1532.",
        },
        {
          question: "¿Tiene entrada?",
          answer:
            "Sí, suele tener una entrada administrada por la entidad gestora. Confirme monto y horario en la fuente oficial.",
        },
        {
          question: "¿Cuánto tiempo se necesita?",
          answer: "Una visita cabe en 20–40 minutos, y se combina bien con la plaza en el circuito de 3 horas.",
        },
        {
          question: "¿Por qué es importante?",
          answer:
            "Porque conserva mampostería inca en el centro de Cajamarca y porque concentra la memoria del encuentro de 1532.",
        },
      ],
    },
    en: {
      metaTitle: "Ransom Room Cajamarca: history and visit",
      metaDescription:
        "The Ransom Room (Cuarto del Rescate) of Cajamarca: the Inca stone chamber linked to Atahualpa, its history and how to visit. Hours and entry — confirm at the official source.",
      h1: "Ransom Room of Cajamarca",
      lead: "The Ransom Room is an Inca stone chamber a few minutes' walk from Plaza de Armas, traditionally linked to Atahualpa's captivity in 1532.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What it is",
          paragraphs: [
            "It is a room of finely worked stone walls, attributed to Inca architecture. Sources describe it as the space where Atahualpa was held after the 1532 encounter.",
            "Its value is both architectural and historical: it is one of the few visible examples of Inca masonry in the city centre.",
          ],
        },
        {
          heading: "History and memory",
          paragraphs: [
            "Tradition links it to the «ransom»: the gathering of gold and silver to pay for the Inca's freedom, according to the chronicles.",
            "This guide treats the event seriously, distinguishing what sources record from popular versions.",
          ],
        },
        {
          heading: "Visit and conditions",
          paragraphs: [
            "Today it is a visitable monument managed by a cultural institution. Unlike the open square, it has its own schedule and entry fee.",
            "Confirm the current amount and schedule at the official source before your visit; they may change.",
          ],
        },
      ],
      faqs: [
        {
          question: "What is the Ransom Room?",
          answer: "An Inca stone chamber near the square, traditionally linked to Atahualpa's captivity in 1532.",
        },
        {
          question: "Does it charge entry?",
          answer:
            "Yes, it usually has an entry fee managed by the institution. Confirm amount and schedule at the official source.",
        },
        {
          question: "How much time do I need?",
          answer: "A visit fits in 20–40 minutes, and combines well with the square on the 3-hour circuit.",
        },
        {
          question: "Why is it important?",
          answer:
            "Because it preserves Inca masonry in the centre of Cajamarca and concentrates the memory of the 1532 encounter.",
        },
      ],
    },
  },

  // 19 — Conjunto Monumental Belén
  {
    slug: "conjunto-monumental-belen",
    group: "lugares",
    related: ["iglesia-san-francisco", "cuarto-del-rescate", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Conjunto Monumental Belén de Cajamarca: iglesia, hospital y museo",
      metaDescription:
        "El Conjunto Monumental Belén de Cajamarca: la iglesia, el antiguo hospital colonial y el Museo Arqueológico y Etnográfico. Cómo visitarlos en conjunto.",
      h1: "Conjunto Monumental Belén de Cajamarca",
      lead: "El Conjunto Monumental Belén reúne varios edificios del centro histórico: una iglesia, un antiguo hospital colonial y espacios de museo, a corta distancia de la plaza.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué incluye",
          paragraphs: [
            "El conjunto agrupa la Iglesia de Belén, el que fue hospital colonial y el Museo Arqueológico y Etnográfico, entre otros espacios de gestión cultural.",
            "No es un solo edificio, sino un conjunto que se recorre en orden; por eso conviene entenderlo como visita combinada.",
          ],
        },
        {
          heading: "La iglesia y el hospital",
          paragraphs: [
            "La Iglesia de Belén y el antiguo hospital forman un bloque de arquitectura colonial relevante en Cajamarca.",
            "El hospital es citado en fuentes como uno de los recintos hospitalarios coloniales de la ciudad; su recorrido permite leer la historia de la salud y la religión juntas.",
          ],
        },
        {
          heading: "El museo",
          paragraphs: [
            "El Museo Arqueológico y Etnográfico reúne piezas y contexto sobre la historia y las culturas de la región. Tiene su propio horario y, en algunos casos, costo de entrada.",
            "Para su visita, verifique el horario vigente y considere combinarlo con San Francisco y el Cuarto del Rescate.",
          ],
        },
        {
          heading: "Cómo planear la visita",
          paragraphs: [
            "Ubíquelo a pocos minutos a pie de la plaza. Dados los horarios distintos de cada espacio, confirme en la fuente oficial qué salas están abiertas el día de su visita.",
          ],
          bullets: ["Empiece por la plaza y camine hacia Belén.", "Verifique horario y entrada del museo.", "Combínelo con San Francisco y el Cuarto del Rescate."],
        },
      ],
      faqs: [
        {
          question: "¿Qué es el Conjunto Monumental Belén?",
          answer: "Un conjunto de edificios del centro histórico: iglesia, antiguo hospital colonial y museo, entre otros.",
        },
        {
          question: "¿El museo tiene entrada?",
          answer: "Suele tener su propio horario y, en algunos casos, costo. Confirme en la fuente oficial.",
        },
        {
          question: "¿Cuánto tiempo se necesita?",
          answer: "Una visita al conjunto puede tomar de 1 a 2 horas si incluye el museo.",
        },
        {
          question: "¿Está cerca de la plaza?",
          answer: "Sí, a pocos minutos a pie de la Plaza de Armas.",
        },
      ],
    },
    en: {
      metaTitle: "Belén Monumental Complex Cajamarca: church, hospital and museum",
      metaDescription:
        "The Belén Monumental Complex of Cajamarca: the church, the former colonial hospital and the Archaeological and Ethnographic Museum. How to visit them together.",
      h1: "Belén Monumental Complex of Cajamarca",
      lead: "The Belén Monumental Complex brings together several buildings of the historic centre: a church, a former colonial hospital and museum spaces, a short walk from the square.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What it includes",
          paragraphs: [
            "The complex groups the Belén Church, the former colonial hospital and the Archaeological and Ethnographic Museum, among other culturally managed spaces.",
            "It is not a single building but a set visited in order; that is why it is best understood as a combined visit.",
          ],
        },
        {
          heading: "The church and the hospital",
          paragraphs: [
            "Belén Church and the former hospital form a block of colonial architecture that matters in Cajamarca.",
            "The hospital is cited in sources as one of the city's colonial hospital enclosures; its route lets you read the history of health and religion together.",
          ],
        },
        {
          heading: "The museum",
          paragraphs: [
            "The Archaeological and Ethnographic Museum gathers pieces and context about the region's history and cultures. It has its own schedule and, in some cases, entry cost.",
            "For your visit, check the current schedule and consider combining it with San Francisco and the Ransom Room.",
          ],
        },
        {
          heading: "How to plan the visit",
          paragraphs: [
            "Locate it a few minutes' walk from the square. Given the different hours of each space, confirm at the official source which rooms are open on your visit day.",
          ],
          bullets: ["Start at the square and walk to Belén.", "Check the museum's schedule and entry.", "Combine it with San Francisco and the Ransom Room."],
        },
      ],
      faqs: [
        {
          question: "What is the Belén Monumental Complex?",
          answer: "A set of historic-centre buildings: church, former colonial hospital and museum, among others.",
        },
        {
          question: "Does the museum charge entry?",
          answer: "It usually has its own schedule and, in some cases, a cost. Confirm at the official source.",
        },
        {
          question: "How much time do I need?",
          answer: "A visit to the complex can take 1–2 hours if it includes the museum.",
        },
        {
          question: "Is it near the square?",
          answer: "Yes, a few minutes' walk from Plaza de Armas.",
        },
      ],
    },
  },

  // 24 — Restaurantes
  {
    slug: "restaurantes-cerca-de-la-plaza",
    group: "comer",
    related: ["cafeterias-cerca-de-la-plaza", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Restaurantes cerca de la Plaza de Armas de Cajamarca",
      metaDescription:
        "Dónde comer cerca de la plaza: opciones por tipo de comida, presupuesto y continuidad del recorrido. Puntos de partida para verificar in situ.",
      h1: "Restaurantes cerca de la Plaza de Armas",
      lead: "El entorno de la plaza reúne locales de comida peruana y cajamarquina. Esta guía describe tipos y algunos puntos de partida, sin recomendar un comercio sobre otro.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Cómo elegir",
          paragraphs: [
            "El centro de Cajamarca ofrece desde restaurantes formales hasta cafeterías y cocinas caseras. Para elegir, piense en el momento del día, su presupuesto y qué sitio queda de paso hacia el siguiente punto del recorrido.",
            "Esta guía no califica ni promociona negocios: describe tipos de servicio para que usted decida.",
          ],
        },
        {
          heading: "Puntos de partida para verificar",
          paragraphs: [
            "Algunos locales conocidos del centro pueden servirle de referencia para empezar a buscar: un restaurante de cocina peruana en el Jirón del Comercio, y un local de mariscos en el Jirón Cruz de Piedra, entre otros.",
            "Las direcciones y el nombre son solo una base: confirme horario de almuerzo/cena, si aceptan reservas y medios de pago el mismo día, porque cambian.",
          ],
          bullets: ["Pida la carta y el precio antes de sentarse.", "Verifique horario y forma de pago al llegar.", "Pregunte por alérgenos directamente al local."],
        },
        {
          heading: "Combinar con el recorrido",
          paragraphs: [
            "Si viene de visitar la plaza o el Cuarto del Rescate, elegir un local céntrico le ahorra traslados. Muchos quedan a pocos minutos a pie del casco central.",
            "Planee el almuerzo como parte del circuito de 3 horas, o la cena como cierre de la tarde en el centro.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Hay restaurantes cerca de la plaza?",
          answer: "Sí, el centro tiene locales de comida peruana y cajamarquina a corta distancia peatonal.",
        },
        {
          question: "¿Esta guía recomienda un restaurante?",
          answer: "No. Describe tipos de servicio y algunos puntos de partida, sin promocionar un comercio.",
        },
        {
          question: "¿Conviene reservar?",
          answer: "Depende del local y la hora. Confirme directamente con el establecimiento, porque los datos cambian.",
        },
        {
          question: "¿Qué comer en Cajamarca?",
          answer: "Platos cajamarquinos y peruanos típicos; vea la guía de comida típica y postres de esta misma sección.",
        },
        {
          question: "¿Hay opciones para cada presupuesto?",
          answer: "Sí: desde cocinas caseras hasta restaurantes formales en el centro.",
        },
      ],
    },
    en: {
      metaTitle: "Restaurants near Plaza de Armas of Cajamarca",
      metaDescription:
        "Where to eat near the square: options by cuisine, budget and route continuity. Starting points to verify on site.",
      h1: "Restaurants near Plaza de Armas",
      lead: "The area around the square gathers Peruvian and Cajamarca cuisine. This guide describes types and a few starting points, without recommending one business over another.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "How to choose",
          paragraphs: [
            "The centre of Cajamarca offers everything from formal restaurants to cafés and home-style kitchens. To choose, think about the time of day, your budget and which site lies on the way to your next stop.",
            "This guide does not rank or promote businesses: it describes service types so you can decide.",
          ],
        },
        {
          heading: "Starting points to verify",
          paragraphs: [
            "Some well-known central venues can serve as a base to start looking: a Peruvian-cuisine restaurant on Jirón del Comercio, and a seafood spot on Jirón Cruz de Piedra, among others.",
            "Names and addresses are only a base: confirm lunch/dinner hours, reservations and payment methods on the day, because they change.",
          ],
          bullets: ["Ask for the menu and price before sitting down.", "Check hours and payment on arrival.", "Ask about allergens directly with the venue."],
        },
        {
          heading: "Combine with the walk",
          paragraphs: [
            "If you come from the square or the Ransom Room, a central venue saves transfers. Many are a few minutes' walk from the central district.",
            "Plan lunch as part of the 3-hour circuit, or dinner as a close to the afternoon in the centre.",
          ],
        },
      ],
      faqs: [
        {
          question: "Are there restaurants near the square?",
          answer: "Yes, the centre has Peruvian and Cajamarca eateries within short walking distance.",
        },
        {
          question: "Does this guide recommend a restaurant?",
          answer: "No. It describes service types and a few starting points, without promoting a business.",
        },
        {
          question: "Should I book?",
          answer: "It depends on the venue and the hour. Confirm directly with the establishment, as details change.",
        },
        {
          question: "What to eat in Cajamarca?",
          answer: "Typical Cajamarca and Peruvian dishes; see this section's guides on typical food and desserts.",
        },
        {
          question: "Are there options for every budget?",
          answer: "Yes: from home-style kitchens to formal restaurants in the centre.",
        },
      ],
    },
  },

  // 25 — Cafeterías
  {
    slug: "cafeterias-cerca-de-la-plaza",
    group: "comer",
    related: ["restaurantes-cerca-de-la-plaza", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Cafeterías cerca de la Plaza de Armas de Cajamarca",
      metaDescription:
        "Dónde tomar café cerca de la plaza: cafés para una pausa corta y continuar el recorrido. Puntos de partida para verificar in situ.",
      h1: "Cafeterías cerca de la Plaza de Armas",
      lead: "Una pausa de café es una forma cómoda de descansar entre la plaza y los edificios históricos. El centro tiene varios locales a poca distancia.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "La pausa de café",
          paragraphs: [
            "El centro de Cajamarca reúne cafés y locales de especialidad donde puede descansar unos minutos y retomar el recorrido a pie.",
            "Una parada corta ayuda a distribuir la caminata, sobre todo a 2.722 m de altitud, donde conviene no apurarse.",
          ],
        },
        {
          heading: "Puntos de partida para verificar",
          paragraphs: [
            "Algunos cafés conocidos del centro pueden servirle de referencia: uno en la Plaza de Armas (San Martín), otro en el Jirón Amazonas y un tercero en el Jirón Ayacucho, entre otros.",
            "Use estos nombres como base y confirme horario, si tienen wifi o terraza, y medios de pago el mismo día, porque cambian.",
          ],
        },
        {
          heading: "Cómo encajarla en la ruta",
          paragraphs: [
            "Un café entra bien entre la plaza y un museo, o como inicio tranquilo antes de subir a Santa Apolonia más adelante.",
            "No lo trate como comida completa: es una pausa que suma al ritmo del recorrido.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Hay cafeterías cerca de la plaza?",
          answer: "Sí, el centro tiene cafés a pocos minutos a pie, ideales para una pausa.",
        },
        {
          question: "¿Esta guía recomienda uno?",
          answer: "No. Da puntos de partida y tipos, sin promocionar un local.",
        },
        {
          question: "¿Sirve para trabajar o estudiar?",
          answer: "Depende del local; confirme wifi y horario directamente.",
        },
        {
          question: "¿A qué hora abren?",
          answer: "Varía por local; verifique el mismo día, porque los horarios cambian.",
        },
        {
          question: "¿El café es de la zona?",
          answer: "Cajamarca tiene tradición cafetalera en su región; pregunte al local sobre el origen de su café.",
        },
      ],
    },
    en: {
      metaTitle: "Cafés near Plaza de Armas of Cajamarca",
      metaDescription:
        "Where to have coffee near the square: cafés for a short break and to continue the walk. Starting points to verify on site.",
      h1: "Cafés near Plaza de Armas",
      lead: "A coffee break is a comfortable way to rest between the square and the historic buildings. The centre has several venues a short distance away.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The coffee pause",
          paragraphs: [
            "The centre of Cajamarca gathers cafés and specialty venues where you can rest a few minutes and resume the walk.",
            "A short stop helps pace the walk, especially at 2,722 m elevation, where it is wise not to rush.",
          ],
        },
        {
          heading: "Starting points to verify",
          paragraphs: [
            "Some well-known central cafés can serve as reference: one on the Plaza de Armas (San Martín), another on Jirón Amazonas and a third on Jirón Ayacucho, among others.",
            "Use these names as a base and confirm hours, wifi or terrace, and payment on the day, because they change.",
          ],
        },
        {
          heading: "How to fit it into the route",
          paragraphs: [
            "A coffee fits well between the square and a museum, or as a calm start before later climbing to Santa Apolonia.",
            "Do not treat it as a full meal: it is a pause that adds to the rhythm of the walk.",
          ],
        },
      ],
      faqs: [
        {
          question: "Are there cafés near the square?",
          answer: "Yes, the centre has cafés a few minutes' walk away, ideal for a break.",
        },
        {
          question: "Does this guide recommend one?",
          answer: "No. It gives starting points and types, without promoting a venue.",
        },
        {
          question: "Is it good for working or studying?",
          answer: "Depends on the venue; confirm wifi and hours directly.",
        },
        {
          question: "What time do they open?",
          answer: "Varies by venue; check on the day, as schedules change.",
        },
        {
          question: "Is the coffee from the region?",
          answer: "Cajamarca has a coffee-growing tradition in its region; ask the venue about the origin of its coffee.",
        },
      ],
    },
  },

  // 33 — Circuito histórico 3 horas
  {
    slug: "circuito-historico-3-horas",
    group: "rutas",
    related: ["plaza-de-armas", "catedral-de-cajamarca", "cuarto-del-rescate", "atahualpa-y-1532"],
    es: {
      metaTitle: "Circuito histórico de 3 horas en Cajamarca desde la plaza",
      metaDescription:
        "Un recorrido de unas 3 horas por el centro histórico de Cajamarca: plaza, Catedral, San Francisco, Cuarto del Rescate y Belén. Orden y consejos.",
      h1: "Circuito histórico de 3 horas",
      lead: "Este recorrido parte de la Plaza de Armas y enlaza los hitos principales del centro histórico en unas tres horas, con ritmo pausado.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El orden sugerido",
          paragraphs: [
            "Empiece en la plaza para ubicar la pileta y la Catedral. Luego visite la Iglesia de San Francisco y continúe al Cuarto del Rescate, a pocos minutos a pie.",
            "Termine en el Conjunto Monumental Belén, que reúne iglesia, antiguo hospital y museo en un solo conjunto.",
          ],
          bullets: [
            "0:00 Plaza de Armas (contexto y pileta).",
            "0:30 Catedral de Cajamarca.",
            "1:00 Iglesia de San Francisco.",
            "1:45 Cuarto del Rescate.",
            "2:30 Conjunto Monumental Belén.",
          ],
        },
        {
          heading: "Consejos de ritmo",
          paragraphs: [
            "A 2.722 m, camine despacio y considere una pausa de café entre medias. El sol de altura y el frío de tarde también influyen en el ritmo.",
            "Deje margen para que los interiores tengan horario distinto al de la plaza; verifique antes.",
          ],
        },
        {
          heading: "Antes de salir",
          paragraphs: [
            "Confirme el horario y la entrada de los sitios de pago (Cuarto del Rescate, museo de Belén) el mismo día.",
            "Lleve agua, ropa por capas y el mapa de esta guía a mano.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Se hace en 3 horas?",
          answer:
            "Sí, con ritmo pausado y verificando horarios de interiores. Puede extenderse si entra a todos los museos.",
        },
        {
          question: "¿Es apto para todos?",
          answer:
            "El recorrido es mayormente urbano y peatonal; para dudas de accesibilidad, vea la guía de accesibilidad cuando esté disponible.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer: "Caminar la plaza es libre. Cuarto del Rescate y el museo de Belén pueden tener entrada; confirme montos.",
        },
        {
          question: "¿Se puede hacer solo?",
          answer: "Sí. La ruta es autoguiada y parte de la plaza, un punto fácil de ubicar.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Agua, ropa por capas, calzado cómodo y el mapa. A 2.722 m, no se apure.",
        },
      ],
    },
    en: {
      metaTitle: "3-hour historical circuit in Cajamarca from the square",
      metaDescription:
        "A roughly 3-hour walk through Cajamarca's historic centre: square, Cathedral, San Francisco, Ransom Room and Belén. Order and tips.",
      h1: "3-hour historical circuit",
      lead: "This route starts at Plaza de Armas and links the main landmarks of the historic centre in about three hours, at a relaxed pace.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The suggested order",
          paragraphs: [
            "Start at the square to locate the fountain and the Cathedral. Then visit San Francisco Church and continue to the Ransom Room, a few minutes' walk away.",
            "End at the Belén Monumental Complex, which groups church, former hospital and museum in one set.",
          ],
          bullets: [
            "0:00 Plaza de Armas (context and fountain).",
            "0:30 Cajamarca Cathedral.",
            "1:00 San Francisco Church.",
            "1:45 Ransom Room.",
            "2:30 Belén Monumental Complex.",
          ],
        },
        {
          heading: "Pace tips",
          paragraphs: [
            "At 2,722 m, walk slowly and consider a coffee break in between. High-altitude sun and afternoon cold also affect the pace.",
            "Leave margin for interiors having different hours than the square; check beforehand.",
          ],
        },
        {
          heading: "Before you go",
          paragraphs: [
            "Confirm the schedule and entry of paid sites (Ransom Room, Belén museum) on the day.",
            "Bring water, layers and this guide's map at hand.",
          ],
        },
      ],
      faqs: [
        {
          question: "Can it be done in 3 hours?",
          answer:
            "Yes, at a relaxed pace and checking interior hours. It can extend if you enter all museums.",
        },
        {
          question: "Is it suitable for everyone?",
          answer:
            "The route is mostly urban and pedestrian; for accessibility questions, see the accessibility guide when available.",
        },
        {
          question: "How much does it cost?",
          answer: "Walking the square is free. The Ransom Room and Belén museum may charge entry; confirm amounts.",
        },
        {
          question: "Can it be done alone?",
          answer: "Yes. The route is self-guided and starts at the square, an easy point to locate.",
        },
        {
          question: "What to bring?",
          answer: "Water, layers, comfortable shoes and the map. At 2,722 m, don't rush.",
        },
      ],
    },
  },

  // 13 — Estacionamiento cerca de la plaza
  {
    slug: "estacionamiento-cerca-de-la-plaza",
    group: "visita",
    related: ["como-llegar", "horarios-y-entrada", "mercado-central-de-cajamarca"],
    es: {
      metaTitle: "Dónde estacionar cerca de la Plaza de Armas de Cajamarca",
      metaDescription:
        "Opciones de estacionamiento cerca de la Plaza de Armas de Cajamarca: zonas, costo referencial y consejos para llegar en auto al centro histórico.",
      h1: "Estacionamiento cerca de la Plaza de Armas",
      lead: "El centro histórico de Cajamarca es compacto y peatonal en su núcleo. Si llega en auto, conviene dejar el vehículo en una zona cercana y recorrer la plaza a pie.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Dónde aparcar",
          paragraphs: [
            "Alrededor de la plaza y en las calles adyacentes hay zonas de estacionamiento público y parques habilitados, algunos con cobro y otros de rotación. Las cuadras más cercanas suelen llenarse en horas pico y los fines de semana.",
          ],
          bullets: ["Busque cupo en las calles laterales o parques señalizados.", "El centro es pequeño: estacionar a pocas cuadras equivale a una caminata corta."],
        },
        {
          heading: "En auto al centro",
          paragraphs: [
            "Desde el aeropuerto o la terminal, indicar «Plaza de Armas de Cajamarca» suele bastar para orientar al conductor. El acceso final es peatonal: conviene bajar en una calle cercana y caminar el tramo final.",
            "Si alquila auto para excursiones (Baños del Inca, Cumbemayo, Granja Porcón), el estacionamiento del centro le sirve como base para salir y regresar el mismo día.",
          ],
        },
        {
          heading: "Consejos prácticos",
          paragraphs: [
            "Guarde el comprobante si paga parque y no deje objetos a la vista. Las mañanas son mejores para encontrar cupo cerca de la plaza.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿La plaza tiene estacionamiento propio?",
          answer: "No como tal: es un espacio peatonal. El estacionamiento está en las calles y parques aledaños.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer: "Varía según la zona y el operador; algunos cobran por hora y otros son de rotación. Confirme el monto vigente en el lugar.",
        },
        {
          question: "¿Puedo dejar el auto todo el día?",
          answer: "En varias zonas sí, pero el cupo cercano a la plaza se llena. Para día completo, un parque a unas cuadras puede ser más cómodo.",
        },
        {
          question: "¿Conviene auto para el centro?",
          answer: "Para solo el centro, no. Para excursiones fuera de la ciudad, sí le da flexibilidad.",
        },
        {
          question: "¿Dónde bajar si voy en taxi?",
          answer: "En una calle cercana a la plaza; el tramo final hasta la Plaza de Armas es peatonal y breve.",
        },
      ],
    },
    en: {
      metaTitle: "Parking near Plaza de Armas of Cajamarca",
      metaDescription:
        "Parking options near Plaza de Armas of Cajamarca: areas, indicative cost and tips for driving to the historic centre.",
      h1: "Parking near Plaza de Armas",
      lead: "The historic centre of Cajamarca is compact and pedestrian at its core. If you arrive by car, park nearby and walk to the square.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Where to park",
          paragraphs: [
            "Around the square and on adjacent streets there are public parking areas and lots, some paid and some rotating. The closest blocks fill up at peak hours and on weekends.",
          ],
          bullets: ["Look for spaces on side streets or signed lots.", "The centre is small: parking a few blocks away is just a short walk."],
        },
        {
          heading: "Driving to the centre",
          paragraphs: [
            "From the airport or terminal, giving «Plaza de Armas de Cajamarca» is usually enough to orient the driver. The final access is pedestrian: drop off on a nearby street and walk the last stretch.",
            "If you rent a car for excursions (Baños del Inca, Cumbemayo, Granja Porcón), centre parking works as a base to leave and return the same day.",
          ],
        },
        {
          heading: "Practical tips",
          paragraphs: [
            "Keep the ticket if you pay, and don't leave items in sight. Mornings are best for finding a spot near the square.",
          ],
        },
      ],
      faqs: [
        {
          question: "Does the square have its own parking?",
          answer: "Not really: it is a pedestrian space. Parking is on surrounding streets and lots.",
        },
        {
          question: "How much does it cost?",
          answer: "It varies by area and operator; some charge per hour, others rotate. Confirm the current amount on site.",
        },
        {
          question: "Can I leave the car all day?",
          answer: "In several areas yes, but space near the square fills up. For a full day, a lot a few blocks away may be more comfortable.",
        },
        {
          question: "Is a car worth it for the centre?",
          answer: "For the centre alone, no. For excursions outside the city, yes, it gives flexibility.",
        },
        {
          question: "Where do I drop off in a taxi?",
          answer: "On a street near the square; the final stretch to Plaza de Armas is pedestrian and short.",
        },
      ],
    },
  },

  // 14 — Mejor época para visitar
  {
    slug: "mejor-epoca-para-visitar",
    group: "visita",
    related: ["clima-en-cajamarca", "circuito-historico-3-horas", "banos-del-inca"],
    es: {
      metaTitle: "Mejor época para visitar Cajamarca y la Plaza de Armas",
      metaDescription:
        "Cuándo ir a Cajamarca: estación seca y de lluvias, clima de altura, festivales y consejos para elegir la mejor época según lo que quiera hacer.",
      h1: "Mejor época para visitar Cajamarca",
      lead: "Cajamarca, a 2.722 m, tiene clima de sierra: días soleados y noches frías, con una estación seca y otra de lluvias. La mejor época depende de lo que prefiera hacer.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Estación seca (mayo a septiembre)",
          paragraphs: [
            "Es la ventana más cómoda para caminar el centro y hacer excursiones: lluvia escasa, cielos despejados y mejores caminos hacia Cumbemayo o los miradores. Las noches siguen frías.",
          ],
          bullets: ["Ideal para rutas a pie y fotografía de exteriores.", "Lleve ropa de abrigo para la noche aunque haga sol de día."],
        },
        {
          heading: "Estación de lluvias (octubre a abril)",
          paragraphs: [
            "Hay chubascos, sobre todo por tardes, y los caminos de altura pueden estar húmedos. El paisaje se ve más verde y hay menos turismo.",
            "Si viaja en estas fechas, apunte las visitas al centro y a sitios cubiertos a la mañana y deje margen por el clima.",
          ],
        },
        {
          heading: "Fechas y festivales",
          paragraphs: [
            "Cajamarca es conocida por la Semana Santa y las celebraciones de Carnaval, que llenan la ciudad. Confirme fechas y alojamiento con antelación si viaja en esos periodos.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué mes es mejor?",
          answer: "Mayo a septiembre suele ser el tramo más seco y cómodo para caminar y excursiones.",
        },
        {
          question: "¿Hay nieve?",
          answer: "No en la ciudad; la helada nocturna sí es posible en meses fríos, sobre todo a mayor altura.",
        },
        {
          question: "¿Cuándo evitar?",
          answer: "No hay mes que evitar, pero la lluvia de enero a marzo puede complicar caminos de altura.",
        },
        {
          question: "¿Y los festivales?",
          answer: "Carnaval y Semana Santa son los grandes eventos; la ciudad se llena, confirme alojamiento.",
        },
        {
          question: "¿Cuánto tiempo hacer?",
          answer: "Dos o tres días cubren la plaza, los monumentos y una excursión cercana.",
        },
      ],
    },
    en: {
      metaTitle: "Best time to visit Cajamarca & Plaza de Armas",
      metaDescription:
        "When to visit Cajamarca: dry and rainy seasons, highland climate, festivals and tips to choose the best time by activity.",
      h1: "Best time to visit Cajamarca",
      lead: "At 2,722 m, Cajamarca has a sierra climate: sunny days, cold nights, a dry season and a rainy one. The best time depends on what you want to do.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Dry season (May to September)",
          paragraphs: [
            "This is the most comfortable window to walk the centre and take excursions: little rain, clear skies and better roads toward Cumbemayo or the viewpoints. Nights remain cold.",
          ],
          bullets: ["Great for walking routes and outdoor photography.", "Bring warm clothing for the evening even if it's sunny by day."],
        },
        {
          heading: "Rainy season (October to April)",
          paragraphs: [
            "Showers, mostly in the afternoon, and highland paths can be damp. The landscape is greener and there are fewer tourists.",
            "If you travel then, aim centre visits and covered sites in the morning and leave margin for weather.",
          ],
        },
        {
          heading: "Dates and festivals",
          paragraphs: [
            "Cajamarca is known for Holy Week and Carnival celebrations that fill the city. Confirm dates and lodging ahead if you travel in those periods.",
          ],
        },
      ],
      faqs: [
        {
          question: "Which month is best?",
          answer: "May to September is usually the driest, most comfortable stretch for walking and excursions.",
        },
        {
          question: "Is there snow?",
          answer: "Not in the city; nighttime frost is possible in cold months, especially at higher elevation.",
        },
        {
          question: "When to avoid?",
          answer: "No month to avoid, but January–March rain can complicate highland roads.",
        },
        {
          question: "What about festivals?",
          answer: "Carnival and Holy Week are the big events; the city fills up, confirm lodging.",
        },
        {
          question: "How long to stay?",
          answer: "Two or three days cover the square, the monuments and a nearby excursion.",
        },
      ],
    },
  },

  // 15 — Clima en Cajamarca
  {
    slug: "clima-en-cajamarca",
    group: "visita",
    related: ["mejor-epoca-para-visitar", "como-llegar", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Clima en Cajamarca: temperatura, altura y qué llevar",
      metaDescription:
        "Cómo es el clima en Cajamarca a 2.722 m: temperaturas, sol fuerte, frío nocturno y qué ropa llevar para visitar la Plaza de Armas.",
      h1: "Clima en Cajamarca",
      lead: "Cajamarca está a 2.722 m, en la sierra norte del Perú. El clima es templado de altura: días con sol, noches frías y fuerte radiación solar.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Temperaturas y altura",
          paragraphs: [
            "Durante el día suele hacer un sol agradable, pero la temperatura baja mucho al anochecer por la altura. El cambio entre el día y la noche es marcado.",
          ],
          bullets: ["Lleve ropa por capas: una chaqueta ligera no basta para la noche.", "La altura puede notarse al caminar; vaya a paso calmado."],
        },
        {
          heading: "Sol y lluvia",
          paragraphs: [
            "El sol de altura quema más de lo que parece, incluso en días frescos; usar protección solar ayuda. La lluvia se concentra en ciertos meses y suele caer por la tarde.",
            "Un poncho o impermeable compacto cabe en cualquier mochila y sale a cuenta en temporada húmeda.",
          ],
        },
        {
          heading: "Qué llevar",
          paragraphs: [
            "Ropa de abrigo, calzado cómodo, sombrero o gorra, protector solar y una botella de agua. Así está listo para recorrer la plaza y los monumentos sin contratiempos.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Hace frío?",
          answer: "Las tardes-noches son frías; los días pueden ser soleados y templados. Lleve abrigo.",
        },
        {
          question: "¿Qué altura tiene Cajamarca?",
          answer: "Unos 2.722 m sobre el nivel del mar.",
        },
        {
          question: "¿Necesito acclimatarme?",
          answer: "Si viene de baja altura, camine despacio el primer día y manténgase hidratado.",
        },
        {
          question: "¿Llueve mucho?",
          answer: "Depende de la época; hay una estación más lluviosa con chubascos de tarde.",
        },
        {
          question: "¿Qué ropa llevar?",
          answer: "Capas, abrigo para la noche, calzado cómodo, sombrero y protector solar.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca weather: temperature, altitude & what to pack",
      metaDescription:
        "How the weather in Cajamarca works at 2,722 m: temperatures, strong sun, cold nights and what to wear to visit Plaza de Armas.",
      h1: "Cajamarca weather",
      lead: "Cajamarca sits at 2,722 m in Peru's northern highlands. The climate is highland temperate: sunny days, cold nights and strong solar radiation.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Temperatures and altitude",
          paragraphs: [
            "By day there is often pleasant sun, but the temperature drops sharply after dark because of the altitude. The day-to-night swing is marked.",
          ],
          bullets: ["Dress in layers: a light jacket isn't enough for the night.", "The altitude may be felt when walking; go at a calm pace."],
        },
        {
          heading: "Sun and rain",
          paragraphs: [
            "High-altitude sun burns more than it seems, even on cool days; sun protection helps. Rain concentrates in certain months and usually falls in the afternoon.",
            "A compact poncho or rain shell fits any backpack and pays off in the wet season.",
          ],
        },
        {
          heading: "What to pack",
          paragraphs: [
            "Warm clothing, comfortable shoes, a hat, sunscreen and a water bottle. That keeps you ready to walk the square and monuments without hassle.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is it cold?",
          answer: "Evenings and nights are cold; days can be sunny and mild. Bring warm layers.",
        },
        {
          question: "What's the altitude?",
          answer: "About 2,722 m above sea level.",
        },
        {
          question: "Do I need to acclimatise?",
          answer: "Coming from low elevation, walk slowly the first day and stay hydrated.",
        },
        {
          question: "Does it rain a lot?",
          answer: "It depends on the season; there is a rainier period with afternoon showers.",
        },
        {
          question: "What to wear?",
          answer: "Layers, warmth for the night, comfortable shoes, a hat and sunscreen.",
        },
      ],
    },
  },

  // 16 — Cajamarca en el incanato
  {
    slug: "cajamarca-en-el-incanato",
    group: "historia",
    related: ["atahualpa-y-1532", "plaza-de-armas", "ventanillas-de-otuzco"],
    es: {
      metaTitle: "Cajamarca en el incanato: el centro inca antes de 1532",
      metaDescription:
        "Qué fue Cajamarca en el Imperio inca: su rol administrativo, el Qhapaq Ñan y el encuentro con Atahualpa antes de la llegada española.",
      h1: "Cajamarca en el incanato",
      lead: "Antes de 1532, Cajamarca era un centro importante del Imperio inca. Su ubicación en la sierra la hacía nudo de caminos y de control regional.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Un nudo del Tawantinsuyo",
          paragraphs: [
            "Cajamarca formaba parte del Imperio inca y funcionaba como punto de administración y aprovisionamiento en la ruta hacia Quito. El sistema de caminos (Qhapaq Ñan) pasaba por la región.",
          ],
          bullets: ["Era una de las ciudades principales del norte inca.", "Su altura y valle la hacían apta para descanso y reagrupamiento."],
        },
        {
          heading: "Atahualpa y 1532",
          paragraphs: [
            "En 1532, el inca Atahualpa estaba en Cajamarca cuando ocurrió el encuentro con los españoles. Ese episodio, y el llamado Cuarto del Rescate, es parte central de la historia local que se cuenta en la plaza y sus monumentos.",
            "Para el contexto del encuentro y la figura de Atahualpa, véase la guía dedicada; aquí nos detenemos en el periodo inca previo.",
          ],
        },
        {
          heading: "Huellas que quedan",
          paragraphs: [
            "Aunque buena parte de la arquitectura inca fue transformada, el entorno y los sitios cercanos (como las ventanillas funerarias) reflejan la organización andina previa a la colonia.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Era Cajamarca inca?",
          answer: "Sí, era un centro del Imperio inca antes de 1532.",
        },
        {
          question: "¿Qué era el Qhapaq Ñan?",
          answer: "El sistema vial inca; Cajamarca estaba en una de sus rutas norteñas.",
        },
        {
          question: "¿Atahualpa nació aquí?",
          answer: "Atahualpa estaba en Cajamarca en 1532; su origen es otro tema. Véase la guía de Atahualpa y 1532.",
        },
        {
          question: "¿Quedan ruinas inca en la ciudad?",
          answer: "Pocas urbanas; los sitios arqueológicos cercanos conservan huellas andinas.",
        },
        {
          question: "¿Por qué fue importante?",
          answer: "Por su posición de control y descanso en la ruta serrana inca.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca under the Inca Empire: the Inca centre before 1532",
      metaDescription:
        "What Cajamarca was in the Inca Empire: its administrative role, the Qhapaq Ñan and Atahualpa's stay before the Spanish arrival.",
      h1: "Cajamarca under the Inca Empire",
      lead: "Before 1532, Cajamarca was an important centre of the Inca Empire. Its highland location made it a road junction and regional hub.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "A knot of the Tawantinsuyo",
          paragraphs: [
            "Cajamarca was part of the Inca Empire and worked as an administration and provisioning point on the route toward Quito. The road system (Qhapaq Ñan) ran through the region.",
          ],
          bullets: ["It was one of the principal cities of the northern Inca world.", "Its altitude and valley suited rest and regrouping."],
        },
        {
          heading: "Atahualpa and 1532",
          paragraphs: [
            "In 1532, the Inca Atahualpa was in Cajamarca when the encounter with the Spaniards took place. That episode, and the so-called Ransom Room, is central to the local history told at the square and its monuments.",
            "For the encounter context and Atahualpa's figure, see the dedicated guide; here we focus on the preceding Inca period.",
          ],
        },
        {
          heading: "Traces that remain",
          paragraphs: [
            "Although much Inca architecture was transformed, the surroundings and nearby sites (such as the funeral windows) reflect the Andean organisation before the colony.",
          ],
        },
      ],
      faqs: [
        {
          question: "Was Cajamarca Inca?",
          answer: "Yes, it was an Inca centre before 1532.",
        },
        {
          question: "What was the Qhapaq Ñan?",
          answer: "The Inca road system; Cajamarca lay on one of its northern routes.",
        },
        {
          question: "Was Atahualpa born here?",
          answer: "Atahualpa was in Cajamarca in 1532; his origin is another topic. See the Atahualpa and 1532 guide.",
        },
        {
          question: "Are there Inca ruins in the city?",
          answer: "Few urban ones; nearby archaeological sites keep Andean traces.",
        },
        {
          question: "Why was it important?",
          answer: "For its role as a control and rest point on the Inca highland route.",
        },
      ],
    },
  },

  // 17 — Colonia y época republicana
  {
    slug: "colonia-y-epoca-republicana",
    group: "historia",
    related: ["atahualpa-y-1532", "plaza-de-armas", "catedral-de-cajamarca"],
    es: {
      metaTitle: "Cajamarca colonial y republicana: de la conquista a hoy",
      metaDescription:
        "La Cajamarca colonial y republicana: la conquista de 1532, la arquitectura religiosa de la plaza y cómo se formó el centro histórico actual.",
      h1: "Cajamarca colonial y republicana",
      lead: "Tras 1532, Cajamarca se reorganizó en torno a una plaza a la española. La arquitectura religiosa que hoy rodea la Plaza de Armas es el legado más visible de esa etapa.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "De la conquista a la colonia",
          paragraphs: [
            "El encuentro de 1532 marcó el inicio de la presencia española. La ciudad adoptó el esquema de plaza mayor con iglesias y casas señoriales, muchas construidas con la técnica colonial de muros de adobe y portadas barrocas andinas.",
          ],
          bullets: ["La Plaza de Armas conserva ese trazado de plaza mayor.", "Catedral e iglesias vecinas son piezas clave de la etapa colonial."],
        },
        {
          heading: "Arquitectura religiosa",
          paragraphs: [
            "La Catedral, San Francisco y el Conjunto Monumental Belén muestran la fusión de mano de obra indígena y lenguaje barroco. Belén, en particular, reúne capilla, hospital y salas que hoy son museo.",
            "Estos edificios tienen horarios y, en algunos casos, entrada administrada; confírmelos antes de su visita.",
          ],
        },
        {
          heading: "Cajamarca republicana",
          paragraphs: [
            "En la etapa republicana la ciudad creció fuera del núcleo original y se afianzó como capital de su departamento, conservando el centro histórico como su rostro más visitado.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuándo empezó la etapa colonial?",
          answer: "Tras el encuentro de 1532, con la reorganización de la ciudad.",
        },
        {
          question: "¿Qué edificios coloniales ver?",
          answer: "Catedral, San Francisco y el Conjunto Monumental Belén, en y junto a la plaza.",
        },
        {
          question: "¿El barroco es local?",
          answer: "Es barroco andino, con aporte de mano de obra indígena.",
        },
        {
          question: "¿La plaza cambió?",
          answer: "Conserva el trazado de plaza mayor colonial, aunque su uso es hoy cotidiano y peatonal.",
        },
        {
          question: "¿Belén es museo?",
          answer: "Sí, el Conjunto Monumental Belén funciona como museo; confirme horario y entrada.",
        },
      ],
    },
    en: {
      metaTitle: "Colonial & republican Cajamarca: from conquest to today",
      metaDescription:
        "Colonial and republican Cajamarca: the 1532 conquest, the religious architecture of the square and how the current historic centre formed.",
      h1: "Colonial and republican Cajamarca",
      lead: "After 1532, Cajamarca was reorganised around a Spanish-style square. The religious architecture around Plaza de Armas today is the most visible legacy of that period.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "From conquest to colony",
          paragraphs: [
            "The 1532 encounter marked the start of Spanish presence. The city adopted a main-square layout with churches and manor houses, many built with colonial adobe walls and Andean baroque portals.",
          ],
          bullets: ["The Plaza de Armas keeps that main-square plan.", "The Cathedral and neighbouring churches are key colonial pieces."],
        },
        {
          heading: "Religious architecture",
          paragraphs: [
            "The Cathedral, San Francisco and the Belén Monumental Complex show the blend of indigenous labour and baroque language. Belén in particular gathers chapel, hospital and halls now used as a museum.",
            "These buildings have schedules and, in some cases, managed entry; confirm before your visit.",
          ],
        },
        {
          heading: "Republican Cajamarca",
          paragraphs: [
            "In the republican period the city grew beyond the original core and consolidated as its department's capital, keeping the historic centre as its most visited face.",
          ],
        },
      ],
      faqs: [
        {
          question: "When did the colonial period start?",
          answer: "After the 1532 encounter, with the city's reorganisation.",
        },
        {
          question: "Which colonial buildings to see?",
          answer: "Cathedral, San Francisco and the Belén Monumental Complex, on and by the square.",
        },
        {
          question: "Is the baroque local?",
          answer: "It is Andean baroque, with indigenous labour input.",
        },
        {
          question: "Did the square change?",
          answer: "It keeps the colonial main-square layout, though its use is now everyday and pedestrian.",
        },
        {
          question: "Is Belén a museum?",
          answer: "Yes, the Belén Monumental Complex works as a museum; confirm hours and entry.",
        },
      ],
    },
  },

  // 18 — Baños del Inca
  {
    slug: "banos-del-inca",
    group: "lugares",
    related: ["cumbe-mayo", "mejor-epoca-para-visitar", "como-llegar"],
    es: {
      metaTitle: "Baños del Inca en Cajamarca: termas, historia y cómo llegar",
      metaDescription:
        "Baños del Inca en Cajamarca: las aguas termales donde bañó Atahualpa, distancia desde la plaza, consejos de visita y transporte.",
      h1: "Baños del Inca",
      lead: "Baños del Inca es el balneario termal a las afueras de Cajamarca, ligado a la leyenda de Atahualpa. Está a pocos kilómetros del centro y es una de las excursiones más cercanas.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Las aguas termales",
          paragraphs: [
            "El complejo tiene pozas y baños de agua termal de origen natural. La zona es conocida por la tradición de baños de agua caliente, aunque las condiciones y el cuidado del sitio conviene confirmarlos en la fuente local.",
          ],
          bullets: ["Lleve traje de baño y toalla si planea usar las pozas.", "El agua sale caliente de la fuente; pruebe la temperatura antes."],
        },
        {
          heading: "Historia y leyenda",
          paragraphs: [
            "Se cuenta que Atahualpa habitó o se bañó en estas aguas antes de 1532. La historia exacta se mezcla con la leyenda local; el relato forma parte de la identidad de Cajamarca.",
            "Para el contexto del inca y 1532, véase la guía dedicada a Atahualpa y 1532.",
          ],
        },
        {
          heading: "Cómo llegar desde la plaza",
          paragraphs: [
            "Está a unos pocos kilómetros al este de la ciudad (la cifra exacta y el medio varían). Se llega en taxi, mototaxi o tour desde el centro; el traslado es corto.",
            "Es fácil combinarlo con una mañana en la plaza y volver a comer al centro.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuánto dista de la plaza?",
          answer: "A pocos kilómetros al este de Cajamarca; confirme el punto exacto el día de su visita.",
        },
        {
          question: "¿Tiene entrada?",
          answer: "El sitio suele tener acceso administrado; confirme el monto y horario vigentes en la fuente oficial.",
        },
        {
          question: "¿El agua es caliente?",
          answer: "Sí, de origen termal; pruebe la temperatura y siga las indicaciones del lugar.",
        },
        {
          question: "¿Cómo llegar?",
          answer: "En taxi, mototaxi o tour desde el centro; el viaje es corto.",
        },
        {
          question: "¿Vale la pena?",
          answer: "Es la excursión termal más cercana a la ciudad y una parada clásica cerca de Cajamarca.",
        },
      ],
    },
    en: {
      metaTitle: "Baños del Inca, Cajamarca: hot springs, history & how to get there",
      metaDescription:
        "Baños del Inca in Cajamarca: the thermal waters where Atahualpa bathed, distance from the square, visit tips and transport.",
      h1: "Baños del Inca",
      lead: "Baños del Inca is the thermal spa on the outskirts of Cajamarca, tied to the Atahualpa legend. It is a few kilometres from the centre and one of the closest excursions.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The thermal waters",
          paragraphs: [
            "The complex has pools and natural hot-water baths. The area is known for its hot-spring bathing tradition, though conditions and site care are best confirmed with the local source.",
          ],
          bullets: ["Bring swimwear and a towel if you plan to use the pools.", "Water comes out hot at the source; test the temperature first."],
        },
        {
          heading: "History and legend",
          paragraphs: [
            "It is said Atahualpa stayed or bathed in these waters before 1532. The exact history mixes with local legend; the story is part of Cajamarca's identity.",
            "For the Inca-and-1532 context, see the dedicated Atahualpa and 1532 guide.",
          ],
        },
        {
          heading: "How to get there from the square",
          paragraphs: [
            "It is a few kilometres east of the city (exact figure and means vary). Reach it by taxi, mototaxi or tour from the centre; the transfer is short.",
            "It is easy to combine with a morning at the square and return to the centre for lunch.",
          ],
        },
      ],
      faqs: [
        {
          question: "How far from the square?",
          answer: "A few kilometres east of Cajamarca; confirm the exact point on your visit day.",
        },
        {
          question: "Is there an entry fee?",
          answer: "The site usually has managed access; confirm current amount and hours with the official source.",
        },
        {
          question: "Is the water hot?",
          answer: "Yes, of thermal origin; test the temperature and follow on-site guidance.",
        },
        {
          question: "How to get there?",
          answer: "By taxi, mototaxi or tour from the centre; the trip is short.",
        },
        {
          question: "Is it worth it?",
          answer: "It is the closest thermal excursion to the city and a classic stop near Cajamarca.",
        },
      ],
    },
  },

  // 19 — Cumbemayo
  {
    slug: "cumbe-mayo",
    group: "lugares",
    related: ["banos-del-inca", "ventanillas-de-otuzco", "circuito-arqueologico"],
    es: {
      metaTitle: "Cumbemayo en Cajamarca: acueducto, bosque de piedras y cómo llegar",
      metaDescription:
        "Cumbemayo en Cajamarca: el acueducto inca, el bosque de piedras y el sitio arqueológico. Distancia, altura y consejos de visita.",
      h1: "Cumbemayo",
      lead: "Cumbemayo es un sitio arqueológico a las afueras de Cajamarca, famoso por un acueducto tallado en la roca y un paisaje de formaciones pétreas conocido como bosque de piedras.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El acueducto y el sitio",
          paragraphs: [
            "El acueducto de Cumbemayo es una obra de canalización labrada en la piedra, atribuida a la organización andina prehispánica. El recorrido permite ver la obra y el entorno de altura.",
          ],
          bullets: ["El sitio está a mayor altura que la ciudad; llueva o haga sol, lleve abrigo.", "El acceso y cuidado del sitio conviene confirmarlos en la fuente local."],
        },
        {
          heading: "Bosque de piedras",
          paragraphs: [
            "Las formaciones erosionadas parecen un bosque petrificado y son una de las imágenes más conocidas de Cajamarca. El camino es de altura y puede hacer frío o viento.",
            "Es una visita al aire libre; calzado cómodo y agua hacen la caminata más fácil.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Está a varios kilómetros al suroeste de la ciudad (la cifra exacta varía). Se visita en taxi, tour o vehículo propio; los caminos de altura pueden estar húmedos en temporada de lluvias.",
            "Combínalo con Ventanillas de Otuzco si va en la misma excursión de un día.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué es Cumbemayo?",
          answer: "Un sitio arqueológico con un acueducto tallado en roca y formaciones pétreas.",
        },
        {
          question: "¿A qué altura está?",
          answer: "Más alto que la ciudad (unos 3.400 m aproximados); lleve abrigo.",
        },
        {
          question: "¿Cuánto dista de Cajamarca?",
          answer: "Varios kilómetros al suroeste; confirme el punto exacto el día de su visita.",
        },
        {
          question: "¿Tiene entrada?",
          answer: "Suele tener acceso administrado; confirme monto y horario en la fuente oficial.",
        },
        {
          question: "¿Se puede ir por cuenta propia?",
          answer: "Sí en vehículo o tour; por transporte público es menos directo, confirme opciones.",
        },
      ],
    },
    en: {
      metaTitle: "Cumbemayo, Cajamarca: aqueduct, stone forest & how to get there",
      metaDescription:
        "Cumbemayo in Cajamarca: the Inca aqueduct, the stone forest and the archaeological site. Distance, altitude and visit tips.",
      h1: "Cumbemayo",
      lead: "Cumbemayo is an archaeological site outside Cajamarca, famous for a rock-carved aqueduct and a landscape of stone formations known as a stone forest.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The aqueduct and the site",
          paragraphs: [
            "The Cumbemayo aqueduct is a channel carved into rock, attributed to pre-Hispanic Andean organisation. The visit lets you see the work and the highland surroundings.",
          ],
          bullets: ["The site is higher than the city; bring warm clothing rain or shine.", "Access and site care are best confirmed with the local source."],
        },
        {
          heading: "Stone forest",
          paragraphs: [
            "The eroded formations look like a petrified forest and are one of Cajamarca's best-known images. The path is at altitude and can be cold or windy.",
            "It is an outdoor visit; comfortable shoes and water make the walk easier.",
          ],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "It is several kilometres southwest of the city (exact figure varies). Reach it by taxi, tour or your own vehicle; highland roads can be damp in the rainy season.",
            "Combine it with Ventanillas de Otuzco if doing the same day trip.",
          ],
        },
      ],
      faqs: [
        {
          question: "What is Cumbemayo?",
          answer: "An archaeological site with a rock-carved aqueduct and stone formations.",
        },
        {
          question: "At what altitude?",
          answer: "Higher than the city (around 3,400 m approx.); bring warm clothing.",
        },
        {
          question: "How far from Cajamarca?",
          answer: "Several kilometres southwest; confirm the exact point on your visit day.",
        },
        {
          question: "Is there an entry fee?",
          answer: "It usually has managed access; confirm amount and hours with the official source.",
        },
        {
          question: "Can I go on my own?",
          answer: "Yes by vehicle or tour; public transport is less direct, confirm options.",
        },
      ],
    },
  },

  // 20 — Ventanillas de Otuzco
  {
    slug: "ventanillas-de-otuzco",
    group: "lugares",
    related: ["cumbe-mayo", "circuito-arqueologico", "cajamarca-en-el-incanato"],
    es: {
      metaTitle: "Ventanillas de Otuzco en Cajamarca: tumbas y cómo llegar",
      metaDescription:
        "Ventanillas de Otuzco en Cajamarca: las tumbas funerarias en roca, su historia y cómo visitarlas desde la Plaza de Armas.",
      h1: "Ventanillas de Otuzco",
      lead: "Las Ventanillas de Otuzco son un conjunto de tumbas funerarias talladas en la roca, al norte de Cajamarca. Es un sitio arqueológico al aire libre cercano a la ciudad.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Las tumbas en la roca",
          paragraphs: [
            "El sitio muestra nichos y cámaras funerarias excavadas en el acantilado, atribuidas a sociedades andinas previas al incanato. Las «ventanillas» son las aberturas que dan nombre al lugar.",
          ],
          bullets: ["Es una vista panorámica y arqueológica a la vez.", "Lleve agua y calzado cómodo; el recorrido es de altura."],
        },
        {
          heading: "Historia y contexto",
          paragraphs: [
            "Forma parte del patrimonio funerario andino de la zona, junto con otros sitios cercanos. No se confunda con el periodo inca: su origen es previo y se complementa con la historia general de Cajamarca.",
            "Para el marco inca, véase la guía de Cajamarca en el incanato.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Está a unos pocos kilómetros al norte de la ciudad (la cifra exacta varía). Se visita en taxi, tour o vehículo propio; combine con Cumbemayo en una excursión de medio día.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué son las ventanillas?",
          answer: "Tumbas funerarias excavadas en roca, con nichos que parecen ventanas.",
        },
        {
          question: "¿De qué época son?",
          answer: "Previas al incanato; atribuidas a sociedades andinas locales.",
        },
        {
          question: "¿Cuánto distan de la plaza?",
          answer: "A pocos kilómetros al norte; confirme el punto exacto el día de su visita.",
        },
        {
          question: "¿Tienen entrada?",
          answer: "Suele tener acceso administrado; confirme monto y horario en la fuente oficial.",
        },
        {
          question: "¿Se combina con Cumbemayo?",
          answer: "Sí, ambos están en la misma zona y se visitan en una excursión de medio día.",
        },
      ],
    },
    en: {
      metaTitle: "Ventanillas de Otuzco, Cajamarca: tombs & how to visit",
      metaDescription:
        "Ventanillas de Otuzco in Cajamarca: the rock-cut funeral tombs, their history and how to visit them from Plaza de Armas.",
      h1: "Ventanillas de Otuzco",
      lead: "The Ventanillas de Otuzco are a set of funeral tombs carved into rock, north of Cajamarca. It is an open-air archaeological site near the city.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The tombs in the rock",
          paragraphs: [
            "The site shows niches and funeral chambers dug into the cliff, attributed to Andean societies before the Inca period. The «windows» are the openings that name the place.",
          ],
          bullets: ["It is both a panoramic and archaeological view.", "Bring water and comfortable shoes; the walk is at altitude."],
        },
        {
          heading: "History and context",
          paragraphs: [
            "It is part of the region's Andean funeral heritage, alongside other nearby sites. Don't confuse it with the Inca period: its origin is earlier and complements Cajamarca's general history.",
            "For the Inca frame, see the Cajamarca under the Inca Empire guide.",
          ],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "It is a few kilometres north of the city (exact figure varies). Reach it by taxi, tour or your own vehicle; combine with Cumbemayo on a half-day trip.",
          ],
        },
      ],
      faqs: [
        {
          question: "What are the ventanillas?",
          answer: "Funeral tombs dug into rock, with niches that look like windows.",
        },
        {
          question: "From what period?",
          answer: "Before the Inca period; attributed to local Andean societies.",
        },
        {
          question: "How far from the square?",
          answer: "A few kilometres north; confirm the exact point on your visit day.",
        },
        {
          question: "Is there an entry fee?",
          answer: "It usually has managed access; confirm amount and hours with the official source.",
        },
        {
          question: "Combine with Cumbemayo?",
          answer: "Yes, both are in the same area and visited on a half-day trip.",
        },
      ],
    },
  },

  // 21 — Granja Porcón
  {
    slug: "granja-porcon",
    group: "lugares",
    related: ["banos-del-inca", "ruta-de-aventura-cerca", "como-llegar"],
    es: {
      metaTitle: "Granja Porcón en Cajamarca: granja comunitaria, alojamiento y cómo llegar",
      metaDescription:
        "Granja Porcón en Cajamarca: la comunidad campesina, turismo rural, alojamiento, trucha y queso, y cómo visitarla.",
      h1: "Granja Porcón",
      lead: "Granja Porcón es una comunidad campesina cercana a Cajamarca conocida por el turismo rural: alojamiento, alimentación y actividades en el campo, a mayor altura que la ciudad.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Turismo rural comunitario",
          paragraphs: [
            "La comunidad ofrece alojamiento, comida típica y actividades en el campo, gestionadas por sus pobladores. Es una forma de conocer la vida rural de la sierra fuera del centro histórico.",
          ],
          bullets: ["Pruebe la trucha y los productos lácteos locales.", "Reserve con antelación; la oferta depende de la comunidad."],
        },
        {
          heading: "A mayor altura",
          paragraphs: [
            "Porcón está por encima de Cajamarca, así que hace más frío que en la ciudad. Lleve abrigo aunque vaya de día y confirme las condiciones antes de salir.",
            "Es apta para una escapada de medio día o noche, combinada con Baños del Inca o Cumbemayo.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Está a una distancia considerable al sur/este de la ciudad (la cifra exacta varía). Se visita en vehículo propio o tour; el transporte público es menos directo.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué es Granja Porcón?",
          answer: "Una comunidad campesina con turismo rural: alojamiento, comida y campo.",
        },
        {
          question: "¿A qué altura está?",
          answer: "Por encima de Cajamarca; hace más frío, lleve abrigo.",
        },
        {
          question: "¿Cuánto dista?",
          answer: "A una distancia considerable de la ciudad; confirme el punto exacto el día de su visita.",
        },
        {
          question: "¿Se puede dormir?",
          answer: "Sí, la comunidad ofrece alojamiento; reserve con antelación.",
        },
        {
          question: "¿Vale la pena?",
          answer: "Para quien quiera turismo rural y naturaleza cerca de Cajamarca, es una parada distinta al centro histórico.",
        },
      ],
    },
    en: {
      metaTitle: "Granja Porcón, Cajamarca: community farm, lodging & how to visit",
      metaDescription:
        "Granja Porcón in Cajamarca: the peasant community, rural tourism, lodging, trout and cheese, and how to visit.",
      h1: "Granja Porcón",
      lead: "Granja Porcón is a peasant community near Cajamarca known for rural tourism: lodging, food and farm activities, at higher elevation than the city.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Community rural tourism",
          paragraphs: [
            "The community offers lodging, typical food and farm activities, run by its residents. It is a way to experience rural highland life outside the historic centre.",
          ],
          bullets: ["Try the trout and local dairy products.", "Book ahead; the offer depends on the community."],
        },
        {
          heading: "At higher elevation",
          paragraphs: [
            "Porcón is above Cajamarca, so it is colder than the city. Bring warm clothing even by day and confirm conditions before leaving.",
            "It suits a half-day or overnight escape, combined with Baños del Inca or Cumbemayo.",
          ],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "It is a considerable distance south/east of the city (exact figure varies). Reach it by your own vehicle or tour; public transport is less direct.",
          ],
        },
      ],
      faqs: [
        {
          question: "What is Granja Porcón?",
          answer: "A peasant community with rural tourism: lodging, food and farm life.",
        },
        {
          question: "At what elevation?",
          answer: "Above Cajamarca; colder, bring warm clothing.",
        },
        {
          question: "How far?",
          answer: "A considerable distance from the city; confirm the exact point on your visit day.",
        },
        {
          question: "Can you stay overnight?",
          answer: "Yes, the community offers lodging; book ahead.",
        },
        {
          question: "Is it worth it?",
          answer: "For rural tourism and nature near Cajamarca, it is a different stop from the historic centre.",
        },
      ],
    },
  },

  // 22 — Mercado Central de Cajamarca
  {
    slug: "mercado-central-de-cajamarca",
    group: "comer",
    related: ["restaurantes-cerca-de-la-plaza", "cafeterias-cerca-de-la-plaza", "estacionamiento-cerca-de-la-plaza"],
    es: {
      metaTitle: "Mercado Central de Cajamarca: qué comprar y cómo llegar",
      metaDescription:
        "Mercado Central de Cajamarca: productos locales, artesanía, comida y cómo llegar desde la Plaza de Armas.",
      h1: "Mercado Central de Cajamarca",
      lead: "El Mercado Central es donde la ciudad hace sus compras diarias: comida fresca, productos de la sierra y artesanía. Está a poca distancia a pie de la Plaza de Armas.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué encontrar",
          paragraphs: [
            "En el mercado hay frutas y verduras de la zona, queso, embutidos, productos de la sierra y artesanía local. Es un buen lugar para ver la vida cotidiana de Cajamarca.",
          ],
          bullets: ["Pruebe productos locales como el queso de la zona.", "También hay puestos de comida preparada para un almuerzo sencillo."],
        },
        {
          heading: "Artesanía y recuerdos",
          paragraphs: [
            "Varios puestos ofrecen artesanía y recuerdos de la región. Compare y pregunte antes de comprar; los precios suelen ser negociables.",
            "Para comer en los alrededores de la plaza, véanse las guías de restaurantes y cafeterías cercanas.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Está a pocas cuadras de la Plaza de Armas, a caminata corta. Vaya por la mañana, cuando hay más movimiento y productos frescos.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Dónde está el mercado?",
          answer: "A pocas cuadras de la Plaza de Armas, a pie.",
        },
        {
          question: "¿Qué comprar?",
          answer: "Comida fresca de la sierra, queso, embutidos y artesanía local.",
        },
        {
          question: "¿Tiene comida?",
          answer: "Sí, hay puestos de comida preparada para almuerzos sencillos.",
        },
        {
          question: "¿Se puede pagar con tarjeta?",
          answer: "En el mercado predomina el efectivo; lleve billetes pequeños.",
        },
        {
          question: "¿Cuándo ir?",
          answer: "Por la mañana, con más movimiento y productos frescos.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca Central Market: what to buy & how to get there",
      metaDescription:
        "Cajamarca Central Market: local products, crafts, food and how to get there from Plaza de Armas.",
      h1: "Cajamarca Central Market",
      lead: "The Central Market is where the city does its daily shopping: fresh food, highland products and crafts. It is a short walk from Plaza de Armas.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What to find",
          paragraphs: [
            "At the market there are local fruits and vegetables, cheese, cold cuts, highland products and local crafts. It is a good place to see everyday Cajamarca life.",
          ],
          bullets: ["Try local products like the regional cheese.", "There are also prepared-food stalls for a simple lunch."],
        },
        {
          heading: "Crafts and souvenirs",
          paragraphs: [
            "Several stalls offer regional crafts and souvenirs. Compare and ask before buying; prices are often negotiable.",
            "For eating near the square, see the nearby restaurants and cafés guides.",
          ],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "It is a few blocks from Plaza de Armas, a short walk. Go in the morning, when there is more activity and fresh produce.",
          ],
        },
      ],
      faqs: [
        {
          question: "Where is the market?",
          answer: "A few blocks from Plaza de Armas, on foot.",
        },
        {
          question: "What to buy?",
          answer: "Fresh highland food, cheese, cold cuts and local crafts.",
        },
        {
          question: "Is there food?",
          answer: "Yes, prepared-food stalls for simple lunches.",
        },
        {
          question: "Can you pay by card?",
          answer: "Cash predominates at the market; bring small bills.",
        },
        {
          question: "When to go?",
          answer: "In the morning, with more activity and fresh produce.",
        },
      ],
    },
  },

  // 23 — Circuito arqueológico
  {
    slug: "circuito-arqueologico",
    group: "rutas",
    related: ["ventanillas-de-otuzco", "cumbe-mayo", "ruta-de-aventura-cerca"],
    es: {
      metaTitle: "Circuito arqueológico de Cajamarca: Cumbemayo y Ventanillas de Otuzco",
      metaDescription:
        "Circuito arqueológico de Cajamarca: cómo unir Cumbemayo, Ventanillas de Otuzco y sitios cercanos en una excursión de un día.",
      h1: "Circuito arqueológico de Cajamarca",
      lead: "El circuito arqueológico reúne los sitios prehispánicos cercanos a Cajamarca en una ruta de un día: Cumbemayo, Ventanillas de Otuzco y otros puntos de interés andino.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Los sitios clave",
          paragraphs: [
            "Cumbemayo (acueducto y bosque de piedras) y las Ventanillas de Otuzco (tumbas en roca) son los ejes del circuito. Ambos están fuera de la ciudad y se visitan mejor en vehículo o tour.",
          ],
          bullets: ["Empiece temprano para aprovechar el día.", "Lleve abrigo: los sitios están a mayor altura que la plaza."],
        },
        {
          heading: "Cómo armar el día",
          paragraphs: [
            "Una opción sensata es visitar Ventanillas de Otuzco por la mañana y Cumbemayo al mediodía, con regreso a la plaza para la tarde. Confirme horarios y acceso de cada sitio el día de su visita.",
            "Si quiere naturaleza y campo, añada Granja Porcón o una ruta de aventura cercana.",
          ],
        },
        {
          heading: "Consejos de altura",
          paragraphs: [
            "Camina despacio, hidrátate y protégete del sol. Los caminos de altura pueden estar húmedos en la estación de lluvias; llueva o haga sol, lleva abrigo.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué incluye el circuito?",
          answer: "Cumbemayo y Ventanillas de Otuzco, los ejes arqueológicos cercanos.",
        },
        {
          question: "¿Se hace en un día?",
          answer: "Sí, en un día cómodo con vehículo o tour.",
        },
        {
          question: "¿En transporte público?",
          answer: "Es menos directo; taxi o tour desde el centro es más práctico.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer: "Depende de transporte y entradas de cada sitio; confirme montos vigentes.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, calzado cómodo, agua, protector solar y algo de efectivo.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca archaeological circuit: Cumbemayo & Ventanillas de Otuzco",
      metaDescription:
        "Cajamarca archaeological circuit: how to combine Cumbemayo, Ventanillas de Otuzco and nearby sites in a one-day trip.",
      h1: "Cajamarca archaeological circuit",
      lead: "The archaeological circuit gathers the pre-Hispanic sites near Cajamarca into a one-day route: Cumbemayo, Ventanillas de Otuzco and other Andean points of interest.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The key sites",
          paragraphs: [
            "Cumbemayo (aqueduct and stone forest) and the Ventanillas de Otuzco (rock tombs) are the axes of the circuit. Both are outside the city and best visited by vehicle or tour.",
          ],
          bullets: ["Start early to make the most of the day.", "Bring warm clothing: the sites are higher than the square."],
        },
        {
          heading: "How to build the day",
          paragraphs: [
            "A sensible option is Ventanillas de Otuzco in the morning and Cumbemayo at midday, returning to the square for the afternoon. Confirm each site's hours and access on your visit day.",
            "If you want nature and countryside, add Granja Porcón or a nearby adventure route.",
          ],
        },
        {
          heading: "Altitude tips",
          paragraphs: [
            "Walk slowly, hydrate and protect from the sun. Highland paths can be damp in the rainy season; rain or shine, bring warm clothing.",
          ],
        },
      ],
      faqs: [
        {
          question: "What does the circuit include?",
          answer: "Cumbemayo and Ventanillas de Otuzco, the nearby archaeological axes.",
        },
        {
          question: "Can it be done in a day?",
          answer: "Yes, in a comfortable day with vehicle or tour.",
        },
        {
          question: "By public transport?",
          answer: "Less direct; taxi or tour from the centre is more practical.",
        },
        {
          question: "How much does it cost?",
          answer: "Depends on transport and each site's fees; confirm current amounts.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, comfortable shoes, water, sunscreen and some cash.",
        },
      ],
    },
  },

  // 24 — Ruta de aventura cerca
  {
    slug: "ruta-de-aventura-cerca",
    group: "rutas",
    related: ["granja-porcon", "banos-del-inca", "circuito-arqueologico"],
    es: {
      metaTitle: "Rutas de aventura cerca de Cajamarca: naturaleza y campo",
      metaDescription:
        "Rutas de aventura cerca de Cajamarca: caminatas, naturaleza y turismo rural como Granja Porcón, y cómo combinarlas con las termas.",
      h1: "Rutas de aventura cerca de Cajamarca",
      lead: "Alrededor de Cajamarca hay opciones de naturaleza y turismo rural para quien quiera salir del centro histórico: caminatas, campo y comunidades como Granja Porcón.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Naturaleza y campo",
          paragraphs: [
            "La sierra ofrece caminatas y paisajes de altura, con comunidades que reciben turismo rural. Granja Porcón es la opción más conocida para alojarse y recorrer el campo.",
          ],
          bullets: ["Lleve abrigo y calzado de caminata.", "Confirme la ruta y las condiciones con anticipación."],
        },
        {
          heading: "Combinar con termas y arqueología",
          paragraphs: [
            "Una escapada puede unir Baños del Inca por la mañana, un sitio arqueológico al mediodía y campo por la tarde. Así aprovecha el día sin recorrer la ciudad de nuevo.",
            "Para el circuito arqueológico completo, véase la guía dedicada.",
          ],
        },
        {
          heading: "Consejos de seguridad",
          paragraphs: [
            "En la altura, camine despacio e hidrátese; el clima cambia rápido. No se aleje de rutas conocidas sin guía local y confirme el estado de los caminos.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Qué rutas hay cerca?",
          answer: "Caminatas de altura, turismo rural en Granja Porcón y combinaciones con termas y arqueología.",
        },
        {
          question: "¿Se necesita guía?",
          answer: "Para rutas señalizadas no siempre, pero fuera de ellas conviene guía local.",
        },
        {
          question: "¿Apta para todos?",
          answer: "Depende de la ruta; consulte nivel y altura antes de elegir.",
        },
        {
          question: "¿Cómo combinar con Baños del Inca?",
          answer: "Termas por la mañana y campo o arqueología después, en un mismo día.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, calzado de caminata, agua, protector solar y efectivo.",
        },
      ],
    },
    en: {
      metaTitle: "Adventure routes near Cajamarca: nature & countryside",
      metaDescription:
        "Adventure routes near Cajamarca: hikes, nature and rural tourism like Granja Porcón, and how to combine them with the hot springs.",
      h1: "Adventure routes near Cajamarca",
      lead: "Around Cajamarca there are nature and rural-tourism options for those wanting to leave the historic centre: hikes, countryside and communities like Granja Porcón.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Nature and countryside",
          paragraphs: [
            "The highlands offer hikes and high-altitude landscapes, with communities that receive rural tourism. Granja Porcón is the best-known option to stay and walk the countryside.",
          ],
          bullets: ["Bring warm clothing and hiking shoes.", "Confirm the route and conditions in advance."],
        },
        {
          heading: "Combine with springs and archaeology",
          paragraphs: [
            "An escape can join Baños del Inca in the morning, an archaeological site at midday and countryside in the afternoon. That makes the day without revisiting the city.",
            "For the full archaeological circuit, see the dedicated guide.",
          ],
        },
        {
          heading: "Safety tips",
          paragraphs: [
            "At altitude, walk slowly and hydrate; the weather changes fast. Don't stray from known routes without a local guide and confirm trail conditions.",
          ],
        },
      ],
      faqs: [
        {
          question: "What routes are nearby?",
          answer: "Highland hikes, rural tourism at Granja Porcón and combos with springs and archaeology.",
        },
        {
          question: "Do I need a guide?",
          answer: "Not always for signed routes, but off them a local guide is wise.",
        },
        {
          question: "Suitable for everyone?",
          answer: "Depends on the route; check level and altitude before choosing.",
        },
        {
          question: "How to combine with Baños del Inca?",
          answer: "Springs in the morning and countryside or archaeology after, in one day.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, hiking shoes, water, sunscreen and cash.",
        },
      ],
    },
  },

  // 25 — Dónde dormir en Cajamarca
  {
    slug: "donde-dormir-en-cajamarca",
    group: "visita",
    related: ["como-llegar", "horarios-y-entrada", "plaza-de-armas"],
    es: {
      metaTitle: "Dónde dormir en Cajamarca: zonas y consejos para alojarse",
      metaDescription:
        "Dónde dormir en Cajamarca: el centro cerca de la Plaza de Armas, el área de Baños del Inca y el turismo rural, con consejos de altura y temporada.",
      h1: "Dónde dormir en Cajamarca",
      lead: "Cajamarca ofrece alojamiento en el centro histórico, en el área de las termas de Baños del Inca y en zonas rurales. Elegir bien la zona facilita moverse sin recorrer la ciudad de nuevo.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El centro histórico",
          paragraphs: [
            "La zona de la Plaza de Armas concentra la mayoría de hospedajes y está a pasos de la catedral, los museos y el paseo peatonal. Es la opción más cómoda para visitar la ciudad a pie.",
          ],
          bullets: ["Salga caminando a casi todo el centro.", "Reserve con antelación en fechas de Carnaval."],
        },
        {
          heading: "Baños del Inca y alrededores",
          paragraphs: [
            "A unos kilómetros de la plaza, el área de las termas suma hospedajes cerca de las aguas termales. Conviene si su plan gira en torno a las bañeras.",
          ],
          bullets: ["Añada tiempo de traslado al centro.", "Confirme el acceso y los horarios de las termas."],
        },
        {
          heading: "Turismo rural",
          paragraphs: [
            "Para una experiencia de campo, comunidades y haciendas como Granja Porcón ofrecen alojamiento rural. Es ideal para familias y quienes buscan naturaleza.",
          ],
          bullets: ["Lleve abrigo: la noche en el campo es fría.", "Verifique conexión y servicios antes de ir."],
        },
      ],
      faqs: [
        {
          question: "¿Dónde es mejor quedarse?",
          answer: "El centro, si quiere caminar; Baños del Inca, si prioriza las termas; el campo, para naturaleza.",
        },
        {
          question: "¿Afecta la altura?",
          answer: "Sí, Cajamarca está cerca de 2.700 m; descanse el primer día y camine despacio.",
        },
        {
          question: "¿Conviene reservar?",
          answer: "Sí en Carnaval y feriados, que la ciudad se llena.",
        },
        {
          question: "¿El centro es seguro para caminar?",
          answer: "El entorno de la plaza es peatonal y tranquilo de día.",
        },
        {
          question: "¿Cómo ir del hospedaje a la plaza?",
          answer: "A pie en el centro; en las otras zonas, en taxi o vehículo.",
        },
      ],
    },
    en: {
      metaTitle: "Where to stay in Cajamarca: areas & tips",
      metaDescription:
        "Where to stay in Cajamarca: the historic centre near the Plaza de Armas, the Baños del Inca hot-springs area and rural stays, with altitude and season tips.",
      h1: "Where to stay in Cajamarca",
      lead: "Cajamarca offers lodging in the historic centre, around the Baños del Inca hot springs and in rural areas. Picking the right area makes getting around easier.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The historic centre",
          paragraphs: [
            "The area around the Plaza de Armas holds most lodgings and is steps from the cathedral, the museums and the pedestrian promenade. It is the most convenient base to explore the city on foot.",
          ],
          bullets: ["Walk to almost everything in the centre.", "Book ahead for Carnival dates."],
        },
        {
          heading: "Baños del Inca and around",
          paragraphs: [
            "A few kilometres from the square, the hot-springs area adds lodgings near the thermal baths. Handy if your plan centres on the baths.",
          ],
          bullets: ["Add transfer time to the centre.", "Confirm access and bath hours."],
        },
        {
          heading: "Rural tourism",
          paragraphs: [
            "For a countryside experience, communities and haciendas like Granja Porcón offer rural lodging. Great for families and nature seekers.",
          ],
          bullets: ["Bring warm clothing: nights in the country are cold.", "Check signal and services before going."],
        },
      ],
      faqs: [
        {
          question: "Where is it best to stay?",
          answer: "The centre if you want to walk; Baños del Inca if you prioritise the baths; the countryside for nature.",
        },
        {
          question: "Does altitude matter?",
          answer: "Yes, Cajamarca is near 2,700 m; rest on day one and walk slowly.",
        },
        {
          question: "Should I book ahead?",
          answer: "Yes during Carnival and holidays, when the city fills up.",
        },
        {
          question: "Is the centre safe to walk?",
          answer: "The square's surroundings are pedestrian and calm by day.",
        },
        {
          question: "How to get from lodging to the square?",
          answer: "On foot in the centre; in other areas, by taxi or vehicle.",
        },
      ],
    },
  },

  // 26 — Cajamarca con niños
  {
    slug: "cajamarca-con-ninos",
    group: "visita",
    related: ["plaza-de-armas", "banos-del-inca", "granja-porcon"],
    es: {
      metaTitle: "Cajamarca con niños: qué hacer en familia",
      metaDescription:
        "Cajamarca con niños: la Plaza de Armas a pie, las termas de Baños del Inca, Granja Porcón y consejos de altura y sol para la familia.",
      h1: "Cajamarca con niños",
      lead: "La ciudad es apta para familias: una plaza peatonal para caminar, termas templadas y zonas rurales con animales y campo. Con pocos cuidados, los niños disfrutan el viaje.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "En el centro",
          paragraphs: [
            "La Plaza de Armas y su entorno peatonal permiten pasear sin tráfico. La Catedral, el Cuarto de Rescate y los Museos de Bellas Artes e Inca Garcilaso son visitas cortas y tranquilas.",
          ],
          bullets: ["Lleve agua y sombrero.", "Haga pausas cada pocas cuadras."],
        },
        {
          heading: "Termas y campo",
          paragraphs: [
            "Baños del Inca tiene bañeras de agua templada donde los niños suelen divertirse. Granja Porcón ofrece contacto con animales, senderos y actividades al aire libre.",
          ],
          bullets: ["Vigile a los niños en el agua en todo momento.", "Lleve ropa de cambio y toalla."],
        },
        {
          heading: "Cuidados de altura y sol",
          paragraphs: [
            "A cerca de 2.700 m, los niños pueden sentirse más cansados. Hidrátelos, protéjalos del sol fuerte de la sierra y evite grandes esfuerzos el primer día.",
          ],
          bullets: ["Usen protector solar y ropa de abrigo.", "La tarde puede enfriar pese al sol."],
        },
      ],
      faqs: [
        {
          question: "¿Qué hacer con niños?",
          answer: "Pasear la plaza, ir a las termas y visitar Granja Porcón.",
        },
        {
          question: "¿Las termas son aptas?",
          answer: "Sí, con supervisión; el agua está templada pero vigile siempre.",
        },
        {
          question: "¿Afecta la altura a los niños?",
          answer: "Puede cansarlos; descanse el primer día y manténgalos hidratados.",
        },
        {
          question: "¿Hay opciones al aire libre?",
          answer: "Granja Porcón y los miradores cercanos combinan campo y naturaleza.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, protector solar, gorra, agua y ropa de cambio.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca with kids: family things to do",
      metaDescription:
        "Cajamarca with kids: the pedestrian Plaza de Armas, the Baños del Inca hot springs, Granja Porcón and altitude-and-sun tips for families.",
      h1: "Cajamarca with kids",
      lead: "The city suits families: a pedestrian square to walk, warm thermal baths and rural areas with animals and countryside. With a few precautions, children enjoy the trip.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "In the centre",
          paragraphs: [
            "The Plaza de Armas and its pedestrian surroundings let you walk without traffic. The cathedral, the Ransom Room and the Fine Arts and Inca Garcilaso museums are short, calm visits.",
          ],
          bullets: ["Bring water and a hat.", "Take breaks every few blocks."],
        },
        {
          heading: "Springs and countryside",
          paragraphs: [
            "Baños del Inca has warm-water baths where kids usually have fun. Granja Porcón offers animal contact, trails and outdoor activities.",
          ],
          bullets: ["Watch children in the water at all times.", "Bring a change of clothes and a towel."],
        },
        {
          heading: "Altitude and sun care",
          paragraphs: [
            "At about 2,700 m, children may tire more easily. Keep them hydrated, protect them from the strong highland sun and avoid big efforts on day one.",
          ],
          bullets: ["Use sunscreen and warm clothing.", "Afternoons cool down despite the sun."],
        },
      ],
      faqs: [
        {
          question: "What to do with kids?",
          answer: "Walk the square, go to the springs and visit Granja Porcón.",
        },
        {
          question: "Are the springs suitable?",
          answer: "Yes, with supervision; the water is warm but always watch them.",
        },
        {
          question: "Does altitude affect kids?",
          answer: "It can tire them; rest on day one and keep them hydrated.",
        },
        {
          question: "Are there outdoor options?",
          answer: "Granja Porcón and nearby viewpoints mix countryside and nature.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, sunscreen, a cap, water and a change of clothes.",
        },
      ],
    },
  },

  // 27 — Presupuesto para Cajamarca
  {
    slug: "presupuesto-para-cajamarca",
    group: "visita",
    related: ["como-llegar", "donde-dormir-en-cajamarca", "horarios-y-entrada"],
    es: {
      metaTitle: "Presupuesto para Cajamarca: en qué gastar y consejos",
      metaDescription:
        "Presupuesto para Cajamarca: transporte, alojamiento, comida y entradas. Consejos para viajar sin sorpresas y confirmar montos vigentes.",
      h1: "Presupuesto para Cajamarca",
      lead: "El costo de un viaje a Cajamarca depende de la temporada, el transporte y el tipo de alojamiento. Aquí un desglose por rubros para armar su presupuesto.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Transporte",
          paragraphs: [
            "Llegar puede ser en avión al aeropuerto de Cajamarca o en bus desde Lima, Trujillo o Chiclayo. Dentro de la ciudad, taxi y a pie cubren casi todo; para sitios fuera del centro conviene tour o vehículo.",
          ],
          bullets: ["Compare vuelo vs. bus según su punto de origen.", "El centro se recorre caminando."],
        },
        {
          heading: "Alojamiento y comida",
          paragraphs: [
            "El alojamiento varía según la zona y la temporada; el centro suele ser más práctico. Para comer, el menú del día y el mercado son opciones económicas; los restaurantes de la plaza, más turísticas.",
          ],
          bullets: ["El menú del día suele ser la opción más económica.", "Reserve en Carnaval, que los precios suben."],
        },
        {
          heading: "Entradas y tours",
          paragraphs: [
            "Cada sitio (Baños del Inca, Cumbemayo, Ventanillas de Otuzco, museos) cobra por separado. Confirme los montos vigentes el día de su visita, pues cambian.",
          ],
          bullets: ["Pregunte precios antes de entrar.", "Los tours incluyen transporte y guía."],
        },
      ],
      faqs: [
        {
          question: "¿Cuánto se gasta por día?",
          answer: "Depende de alojamiento y transporte; presupueste por rubros, no de una cifra fija.",
        },
        {
          question: "¿Qué es lo más caro?",
          answer: "El transporte desde otras ciudades y el alojamiento en temporada alta.",
        },
        {
          question: "¿Se puede viajar económico?",
          answer: "Sí: bus, centro a pie, menú del día y entradas sueltas.",
        },
        {
          question: "¿Las entradas son caras?",
          answer: "Varían por sitio; confirme montos vigentes en cada lugar.",
        },
        {
          question: "¿Conviene tour o por cuenta propia?",
          answer: "Por cuenta propia en el centro; tour para sitios fuera de la ciudad.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca budget: what to spend & tips",
      metaDescription:
        "Cajamarca budget: transport, lodging, food and entrance fees. Tips to travel without surprises and confirm current amounts.",
      h1: "Cajamarca budget",
      lead: "The cost of a trip to Cajamarca depends on season, transport and lodging type. Here is a breakdown by category to plan your budget.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Transport",
          paragraphs: [
            "You can arrive by plane to Cajamarca airport or by bus from Lima, Trujillo or Chiclayo. In the city, taxi and walking cover almost everything; for sites outside the centre, a tour or vehicle helps.",
          ],
          bullets: ["Compare flight vs. bus from your origin.", "The centre is walkable."],
        },
        {
          heading: "Lodging and food",
          paragraphs: [
            "Lodging varies by area and season; the centre is usually most practical. For food, the set lunch menu and the market are budget options; the square's restaurants are more tourist-oriented.",
          ],
          bullets: ["The set lunch menu is usually the cheapest option.", "Book in Carnival, when prices rise."],
        },
        {
          heading: "Fees and tours",
          paragraphs: [
            "Each site (Baños del Inca, Cumbemayo, Ventanillas de Otuzco, museums) charges separately. Confirm current amounts on your visit day, as they change.",
          ],
          bullets: ["Ask prices before entering.", "Tours include transport and a guide."],
        },
      ],
      faqs: [
        {
          question: "How much per day?",
          answer: "Depends on lodging and transport; budget by category, not a fixed figure.",
        },
        {
          question: "What is most expensive?",
          answer: "Transport from other cities and high-season lodging.",
        },
        {
          question: "Can it be done on a budget?",
          answer: "Yes: bus, centre on foot, set lunch and single tickets.",
        },
        {
          question: "Are entrance fees high?",
          answer: "They vary by site; confirm current amounts at each place.",
        },
        {
          question: "Tour or on your own?",
          answer: "On your own in the centre; tour for sites outside the city.",
        },
      ],
    },
  },

  // 28 — Festividades de Cajamarca
  {
    slug: "festividades-de-cajamarca",
    group: "historia",
    related: ["plaza-de-armas", "mejor-epoca-para-visitar", "clima-en-cajamarca"],
    es: {
      metaTitle: "Festividades de Cajamarca: Carnaval, Semana Santa y tradiciones",
      metaDescription:
        "Festividades de Cajamarca: el Carnaval cajamarquino, la Semana Santa en la Plaza de Armas y tradiciones andinas que dan ritmo al año.",
      h1: "Festividades de Cajamarca",
      lead: "Cajamarca es famosa por su Carnaval, uno de los más conocidos del Perú y reconocido como parte del patrimonio cultural. La Semana Santa y otras fechas andinas también llenan la plaza de color.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El Carnaval cajamarquino",
          paragraphs: [
            "Durante varios días, comparsas, música y el juego del agua toman la ciudad. Es una fiesta declarada patrimonio cultural de la nación por su relevancia en la identidad regional.",
          ],
          bullets: ["Ocurre entre febrero y marzo.", "Lleve ropa que pueda mojarse."],
        },
        {
          heading: "Semana Santa y tradiciones",
          paragraphs: [
            "La Plaza de Armas es escenario de procesiones y actos religiosos. El año también incluye ferias y celebraciones andinas ligadas al calendario agrícola de la sierra.",
          ],
          bullets: ["Confirme fechas exactas cada año.", "La plaza se llena en esos días."],
        },
        {
          heading: "Consejos para visitar en fiestas",
          paragraphs: [
            "Reserve con semanas de antelación y preparese para aglomeraciones. El clima de la sierra puede refrescar por la noche, aun en verano.",
          ],
          bullets: ["Lleve abrigo para la noche.", "Guarde sus pertenencias en lugares concurridos."],
        },
      ],
      faqs: [
        {
          question: "¿Cuándo es el Carnaval?",
          answer: "Entre febrero y marzo, según el calendario cada año.",
        },
        {
          question: "¿Por qué es famoso?",
          answer: "Por sus comparsas y su reconocimiento como patrimonio cultural.",
        },
        {
          question: "¿Hay Semana Santa?",
          answer: "Sí, con procesiones en la Plaza de Armas.",
        },
        {
          question: "¿Conviene ir en fiestas?",
          answer: "Sí por la experiencia, pero reserve y espere gente.",
        },
        {
          question: "¿Qué clima hace?",
          answer: "Días templados y noches frías de sierra; lleve abrigo.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca festivals: Carnival, Holy Week & traditions",
      metaDescription:
        "Cajamarca festivals: the Cajamarca Carnival, Holy Week at the Plaza de Armas and Andean traditions that set the year's rhythm.",
      h1: "Cajamarca festivals",
      lead: "Cajamarca is famous for its Carnival, among Peru's best-known and recognised as part of the cultural heritage. Holy Week and other Andean dates also fill the square with colour.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The Cajamarca Carnival",
          paragraphs: [
            "For several days, comparsas, music and water play take over the city. It is a festival declared cultural heritage of the nation for its role in regional identity.",
          ],
          bullets: ["It happens between February and March.", "Wear clothes you can get wet."],
        },
        {
          heading: "Holy Week and traditions",
          paragraphs: [
            "The Plaza de Armas hosts processions and religious acts. The year also brings fairs and Andean celebrations tied to the highland farming calendar.",
          ],
          bullets: ["Confirm exact dates each year.", "The square gets crowded on those days."],
        },
        {
          heading: "Tips for festival visits",
          paragraphs: [
            "Book weeks ahead and prepare for crowds. Highland weather can cool at night even in summer.",
          ],
          bullets: ["Bring warm clothing for the night.", "Keep belongings safe in crowds."],
        },
      ],
      faqs: [
        {
          question: "When is Carnival?",
          answer: "Between February and March, per the calendar each year.",
        },
        {
          question: "Why is it famous?",
          answer: "For its comparsas and its recognition as cultural heritage.",
        },
        {
          question: "Is there Holy Week?",
          answer: "Yes, with processions at the Plaza de Armas.",
        },
        {
          question: "Worth visiting during festivals?",
          answer: "Yes for the experience, but book and expect crowds.",
        },
        {
          question: "What is the weather like?",
          answer: "Mild days and cold highland nights; bring warm clothing.",
        },
      ],
    },
  },

  // 29 — Cerro Santa Apolonia
  {
    slug: "cerro-santa-apolonia",
    group: "lugares",
    related: ["plaza-de-armas", "cumbe-mayo", "circuito-historico-3-horas"],
    es: {
      metaTitle: "Cerro Santa Apolonia: mirador e Inca de Cajamarca",
      metaDescription:
        "Cerro Santa Apolonia: el mirador sobre Cajamarca, la Silla del Inca y restos prehispánicos, a pocos pasos del centro.",
      h1: "Cerro Santa Apolonia",
      lead: "El Cerro Santa Apolonia es el mirador clásico de Cajamarca: desde sus escalinatas se ve toda la ciudad, y guarda la Silla del Inca y restos prehispánicos tallados en roca.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El mirador",
          paragraphs: [
            "Una escalinata sube al cerro y entrega una vista panorámica de la ciudad y el valle. Es una caminata corta desde la Plaza de Armas, ideal al atardecer.",
          ],
          bullets: ["Lleve calzado cómodo para las escaleras.", "Vaya temprano o al atardecer para mejor luz."],
        },
        {
          heading: "La Silla del Inca",
          paragraphs: [
            "En la cima hay una roca tallada conocida como la Silla del Inca, además de petroglifos y estructuras atribuidas a la ocupación prehispánica del sitio.",
          ],
          bullets: ["No trepe sobre las rocas talladas.", "Respete el sitio arqueológico."],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Se camina desde el centro en pocos minutos, o en taxi hasta la base. El acceso es público y forme parte habitual de las caminatas por la ciudad.",
          ],
          bullets: ["Confirme el estado de las escaleras.", "Evite la subida sola de noche."],
        },
      ],
      faqs: [
        {
          question: "¿Se camina desde la plaza?",
          answer: "Sí, en unos minutos por escalinatas.",
        },
        {
          question: "¿Qué es la Silla del Inca?",
          answer: "Una roca tallada en la cima, con petroglifos prehispánicos.",
        },
        {
          question: "¿Hay costo?",
          answer: "El cerro es de acceso público; confirme cualquier servicio local.",
        },
        {
          question: "¿Mejor horario?",
          answer: "Atardecer para la vista; mañana para menos gente.",
        },
        {
          question: "¿Apta para todos?",
          answer: "Las escaleras pueden exigir; vaya a su ritmo.",
        },
      ],
    },
    en: {
      metaTitle: "Cerro Santa Apolonia: viewpoint & Inca site of Cajamarca",
      metaDescription:
        "Cerro Santa Apolonia: the viewpoint over Cajamarca, the Inca's Throne and pre-Hispanic remains, a short walk from the centre.",
      h1: "Cerro Santa Apolonia",
      lead: "Cerro Santa Apolonia is Cajamarca's classic viewpoint: from its stairways you see the whole city, and it holds the Inca's Throne and pre-Hispanic rock carvings.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The viewpoint",
          paragraphs: [
            "A stairway climbs the hill and opens a panorama of the city and valley. It is a short walk from the Plaza de Armas, ideal at sunset.",
          ],
          bullets: ["Wear comfortable shoes for the stairs.", "Go early or at sunset for better light."],
        },
        {
          heading: "The Inca's Throne",
          paragraphs: [
            "At the top is a carved rock known as the Inca's Throne, plus petroglyphs and structures attributed to the pre-Hispanic occupation of the site.",
          ],
          bullets: ["Do not climb on the carved rocks.", "Respect the archaeological site."],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "Walk from the centre in a few minutes, or take a taxi to the base. Access is public and it is a usual part of city walks.",
          ],
          bullets: ["Confirm the stairs' condition.", "Avoid climbing alone at night."],
        },
      ],
      faqs: [
        {
          question: "Walk from the square?",
          answer: "Yes, in a few minutes up stairways.",
        },
        {
          question: "What is the Inca's Throne?",
          answer: "A carved rock at the top, with pre-Hispanic petroglyphs.",
        },
        {
          question: "Is there a fee?",
          answer: "The hill is public access; confirm any local service.",
        },
        {
          question: "Best time?",
          answer: "Sunset for the view; morning for fewer people.",
        },
        {
          question: "Suitable for everyone?",
          answer: "The stairs can be demanding; go at your own pace.",
        },
      ],
    },
  },

  // 30 — Laguna Huacariz
  {
    slug: "laguna-huacariz",
    group: "lugares",
    related: ["clima-en-cajamarca", "banos-del-inca", "mejor-epoca-para-visitar"],
    es: {
      metaTitle: "Laguna Huacariz: el embalse y paseo de Cajamarca",
      metaDescription:
        "Laguna Huacariz: el embalse que abastece a Cajamarca y el paseo de orilla que usan los locales, con consejos para visitarlo.",
      h1: "Laguna Huacariz",
      lead: "La Laguna Huacariz es el principal embalse de Cajamarca y un paseo habitual de los locales en la periferia. Su orilla permite caminar y observar aves, aunque es ante todo una infraestructura de agua.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué es",
          paragraphs: [
            "Es el reservorio que abastece de agua a la ciudad. Por eso, el acceso puede estar limitado en algunos tramos; conviene confirmar qué partes están abiertas al público.",
          ],
          bullets: ["No es una playa ni balneario.", "Confirme áreas habilitadas antes de ir."],
        },
        {
          heading: "El paseo de orilla",
          paragraphs: [
            "Quienes viven en Cajamarca usan sus alrededores para caminar y hacer ejercicio. El entorno es tranquilo y permite avistar aves de la zona.",
          ],
          bullets: ["Lleve abrigo, sopla viento.", "No deje basura."],
        },
        {
          heading: "Cuándo ir",
          paragraphs: [
            "En la estación seca los caminos están mejor. En lluvias, las orillas pueden estar húmedas; revise el clima antes de salir.",
          ],
          bullets: ["Mejor en la mañana.", "Evite días de lluvia fuerte."],
        },
      ],
      faqs: [
        {
          question: "¿Se puede bañar?",
          answer: "No; es reservorio de agua, no balneario.",
        },
        {
          question: "¿Está abierto al público?",
          answer: "Parcialmente; confirme las áreas habilitadas.",
        },
        {
          question: "¿Para qué sirve?",
          answer: "Abastece de agua a Cajamarca.",
        },
        {
          question: "¿Se llega a pie?",
          answer: "Queda en la periferia; taxi o vehículo es más práctico.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, agua y calzado cómodo.",
        },
      ],
    },
    en: {
      metaTitle: "Laguna Huacariz: the reservoir & walk of Cajamarca",
      metaDescription:
        "Laguna Huacariz: the reservoir that supplies Cajamarca and the shore walk locals use, with tips for visiting.",
      h1: "Laguna Huacariz",
      lead: "Laguna Huacariz is Cajamarca's main reservoir and a usual local walk on the outskirts. Its shore allows walking and birdwatching, though it is primarily water infrastructure.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What it is",
          paragraphs: [
            "It is the reservoir that supplies water to the city. Because of that, access may be limited in places; confirm which parts are open to the public.",
          ],
          bullets: ["Not a beach or resort.", "Confirm enabled areas before going."],
        },
        {
          heading: "The shore walk",
          paragraphs: [
            "Locals use its surroundings to walk and exercise. The setting is calm and allows watching local birds.",
          ],
          bullets: ["Bring warm clothing, it is windy.", "Do not leave litter."],
        },
        {
          heading: "When to go",
          paragraphs: [
            "In the dry season the paths are better. In rains, the shores can be damp; check the weather before leaving.",
          ],
          bullets: ["Best in the morning.", "Avoid heavy-rain days."],
        },
      ],
      faqs: [
        {
          question: "Can you swim?",
          answer: "No; it is a water reservoir, not a resort.",
        },
        {
          question: "Is it open to the public?",
          answer: "Partially; confirm the enabled areas.",
        },
        {
          question: "What is it for?",
          answer: "It supplies water to Cajamarca.",
        },
        {
          question: "Walkable from town?",
          answer: "It is on the outskirts; taxi or vehicle is more practical.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, water and comfortable shoes.",
        },
      ],
    },
  },

  // 31 — Tres Molinos
  {
    slug: "tres-molinos",
    group: "lugares",
    related: ["banos-del-inca", "cumbe-mayo", "circuito-arqueologico"],
    es: {
      metaTitle: "Tres Molinos: campo y naturaleza cerca de Cajamarca",
      metaDescription:
        "Tres Molinos: zona de campo en las afueras de Cajamarca para caminar, descansar y combinar con termas y arqueología.",
      h1: "Tres Molinos",
      lead: "Tres Molinos es una zona de campo en las afueras de Cajamarca, valorada por sus áreas verdes y el aire tranquilo. Se visita en combinación con Baños del Inca y los sitios arqueológicos.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El entorno",
          paragraphs: [
            "Sus praderas y caminos de tierra invitan a una salida de día, lejos del bullicio del centro. Es un punto de partida para quienes recorren la zona rural.",
          ],
          bullets: ["Lleve abrigo y calzado de campo.", "Confirme qué instalaciones están abiertas."],
        },
        {
          heading: "Combinar con termas y arqueología",
          paragraphs: [
            "Queda en ruta hacia Baños del Inca y sitios como Cumbemayo. Una misma salida puede unir campo, termas y arqueología.",
          ],
          bullets: ["Arme el día con tiempo de traslado.", "Lleve efectivo para entradas y buses."],
        },
        {
          heading: "Consejos",
          paragraphs: [
            "El clima de la sierra cambia rápido; lleve capas. Confirme el estado de los caminos, sobre todo en la estación de lluvias.",
          ],
          bullets: ["Salga temprano.", "No se aleje de rutas conocidas."],
        },
      ],
      faqs: [
        {
          question: "¿Qué se hace allí?",
          answer: "Caminar, descansar y usarla de base para la zona rural.",
        },
        {
          question: "¿Está lejos del centro?",
          answer: "Está en las afueras; en vehículo o tour es práctico.",
        },
        {
          question: "¿Se combina con Baños del Inca?",
          answer: "Sí, quedan en ruta y se unen en un mismo día.",
        },
        {
          question: "¿Hay servicios?",
          answer: "Limitados; confirme qué está abierto antes de ir.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, calzado de campo, agua y efectivo.",
        },
      ],
    },
    en: {
      metaTitle: "Tres Molinos: countryside & nature near Cajamarca",
      metaDescription:
        "Tres Molinos: a countryside area on Cajamarca's outskirts to walk, rest and combine with springs and archaeology.",
      h1: "Tres Molinos",
      lead: "Tres Molinos is a countryside area on Cajamarca's outskirts, valued for its green spaces and calm air. It is visited together with Baños del Inca and the archaeological sites.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The setting",
          paragraphs: [
            "Its meadows and dirt paths invite a day out, away from the centre's bustle. It is a starting point for those touring the rural area.",
          ],
          bullets: ["Bring warm clothing and country shoes.", "Confirm which facilities are open."],
        },
        {
          heading: "Combine with springs and archaeology",
          paragraphs: [
            "It lies on the route to Baños del Inca and sites like Cumbemayo. One outing can join countryside, springs and archaeology.",
          ],
          bullets: ["Plan the day with transfer time.", "Carry cash for fees and buses."],
        },
        {
          heading: "Tips",
          paragraphs: [
            "Highland weather changes fast; bring layers. Confirm trail conditions, especially in the rainy season.",
          ],
          bullets: ["Leave early.", "Do not stray from known routes."],
        },
      ],
      faqs: [
        {
          question: "What to do there?",
          answer: "Walk, rest and use it as a base for the rural area.",
        },
        {
          question: "Far from the centre?",
          answer: "It is on the outskirts; vehicle or tour is practical.",
        },
        {
          question: "Combine with Baños del Inca?",
          answer: "Yes, they are on route and join in one day.",
        },
        {
          question: "Are there services?",
          answer: "Limited; confirm what is open before going.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, country shoes, water and cash.",
        },
      ],
    },
  },

  // 32 — Hacienda La Colpa
  {
    slug: "la-colpa",
    group: "lugares",
    related: ["queso-y-productos-lacteos-cajamarca", "ruta-del-queso", "granja-porcon"],
    es: {
      metaTitle: "Hacienda La Colpa: las vacas bailarinas de Cajamarca",
      metaDescription:
        "Hacienda La Colpa: la famosa hacienda lechera con las vacas bailarinas, parte de la ruta del queso de Cajamarca.",
      h1: "Hacienda La Colpa",
      lead: "La Colpa es una hacienda lechera cercana a Cajamarca conocida por sus 'vacas bailarinas': al ordeño, las vacas entran al compás de la música. Es una parada clásica de la ruta del queso.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Las vacas bailarinas",
          paragraphs: [
            "En el ordeño tradicional, las vacas son guiadas al ritmo de una melodía, un espectáculo sencillo y muy propio de la zona lechera cajamarquina.",
          ],
          bullets: ["Pregunte el horario de ordeño al llegar.", "Respete el ganado y las instalaciones."],
        },
        {
          heading: "Leche y queso",
          paragraphs: [
            "La hacienda forma parte de la tradición láctea de Cajamarca. En la ruta del queso se conoce cómo se produce y se prueban productos locales.",
          ],
          bullets: ["Pruebe queso y manjar blanco de la zona.", "Completa con otras haciendas y el mercado."],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Queda fuera del centro, a pocos kilómetros, y se visita en vehículo o tour. Combínela con Granja Porcón y los pueblos lecheros.",
          ],
          bullets: ["Lleve abrigo.", "Confirme visitas y horarios."],
        },
      ],
      faqs: [
        {
          question: "¿Por qué bailan las vacas?",
          answer: "Es el ordeño al ritmo de la música, una costumbre local.",
        },
        {
          question: "¿Se puede visitar?",
          answer: "Sí, en horario de ordeño; confirme el día de su visita.",
        },
        {
          question: "¿Forma parte de la ruta del queso?",
          answer: "Sí, es una de sus paradas clásicas.",
        },
        {
          question: "¿Qué se prueba?",
          answer: "Queso, manjar blanco y otros derivados lácteos.",
        },
        {
          question: "¿Cómo llegar?",
          answer: "En vehículo o tour desde el centro.",
        },
      ],
    },
    en: {
      metaTitle: "Hacienda La Colpa: the dancing cows of Cajamarca",
      metaDescription:
        "Hacienda La Colpa: the famous dairy hacienda with the dancing cows, part of Cajamarca's cheese route.",
      h1: "Hacienda La Colpa",
      lead: "La Colpa is a dairy hacienda near Cajamarca known for its 'dancing cows': at milking time, the cows enter to the beat of music. It is a classic stop on the cheese route.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The dancing cows",
          paragraphs: [
            "In the traditional milking, the cows are guided to the rhythm of a tune, a simple show very typical of Cajamarca's dairy country.",
          ],
          bullets: ["Ask the milking time on arrival.", "Respect the cattle and facilities."],
        },
        {
          heading: "Milk and cheese",
          paragraphs: [
            "The hacienda is part of Cajamarca's dairy tradition. On the cheese route you learn how it is made and taste local products.",
          ],
          bullets: ["Taste local cheese and manjar blanco.", "Pair with other haciendas and the market."],
        },
        {
          heading: "How to get there",
          paragraphs: [
            "It lies outside the centre, a few kilometres away, and is visited by vehicle or tour. Combine it with Granja Porcón and the dairy villages.",
          ],
          bullets: ["Bring warm clothing.", "Confirm visits and hours."],
        },
      ],
      faqs: [
        {
          question: "Why do the cows dance?",
          answer: "It is milking to the rhythm of music, a local custom.",
        },
        {
          question: "Can you visit?",
          answer: "Yes, at milking time; confirm on your visit day.",
        },
        {
          question: "Part of the cheese route?",
          answer: "Yes, it is one of its classic stops.",
        },
        {
          question: "What do you taste?",
          answer: "Cheese, manjar blanco and other dairy products.",
        },
        {
          question: "How to get there?",
          answer: "By vehicle or tour from the centre.",
        },
      ],
    },
  },

  // 33 — Comida típica de Cajamarca
  {
    slug: "comida-tipica-de-cajamarca",
    group: "comer",
    related: ["restaurantes-cerca-de-la-plaza", "mercado-central-de-cajamarca", "cafeterias-cerca-de-la-plaza"],
    es: {
      metaTitle: "Comida típica de Cajamarca: platos y dulces que probar",
      metaDescription:
        "Comida típica de Cajamarca: cuy chactado, humitas, papa rellena y el dulce de queso helado, en restaurantes y mercado.",
      h1: "Comida típica de Cajamarca",
      lead: "La cocina cajamarquina mezcla sierra y leche: cuy chactado, papa rellena, humitas y tamales, más el famoso queso helado, un dulce de leche. Aquí qué probar y dónde.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Platos de sierra",
          paragraphs: [
            "El cuy chactado (cuy frito con papas y ají) es el plato más representativo. También son típicas la papa rellena, las humitas y los tamales, y el caldo de gallina para el frío.",
          ],
          bullets: ["El cuy chactado es el ícono local.", "Pida porciones si quiere probar varios."],
        },
        {
          heading: "La leche en dulce",
          paragraphs: [
            "Cajamarca es tierra de leche: queso fresco, mantequilla y manjar blanco. El 'queso helado' es un postre de leche (no es queso) dulce y refrescante que se vende en la plaza y el mercado.",
          ],
          bullets: ["Pruebe queso helado en la plaza.", "El mercado tiene versiones caseras."],
        },
        {
          heading: "Dónde comer",
          paragraphs: [
            "Los restaurantes cerca de la Plaza de Armas y el Mercado Central ofrecen platos típicos y menú del día. Las cafeterías dan opciones ligeras y desayunos.",
          ],
          bullets: ["El mercado es económico y variado.", "Confirme precios antes de pedir."],
        },
      ],
      faqs: [
        {
          question: "¿Qué plato probar?",
          answer: "El cuy chactado y la papa rellena, con humitas o tamales.",
        },
        {
          question: "¿Qué es el queso helado?",
          answer: "Un dulce de leche, no queso; típico de la plaza y el mercado.",
        },
        {
          question: "¿Dónde es más barato?",
          answer: "El Mercado Central y el menú del día.",
        },
        {
          question: "¿Hay opciones vegetarianas?",
          answer: "Humitas, papa rellena y tamales suelen ser opciones sin carne.",
        },
        {
          question: "¿Se come cuy fácilmente?",
          answer: "Sí, en restaurantes típicos del centro.",
        },
      ],
    },
    en: {
      metaTitle: "Typical food of Cajamarca: dishes & sweets to try",
      metaDescription:
        "Typical food of Cajamarca: cuy chactado, humitas, papa rellena and the cheese-helado sweet, at restaurants and the market.",
      h1: "Typical food of Cajamarca",
      lead: "Cajamarca's cuisine blends highlands and dairy: fried guinea pig, papa rellena, humitas and tamales, plus the famous 'queso helado', a milk sweet. Here is what to try and where.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Highland dishes",
          paragraphs: [
            "Cuy chactado (fried guinea pig with potatoes and chilli) is the most representative dish. Also typical are papa rellena, humitas and tamales, and chicken broth for the cold.",
          ],
          bullets: ["Cuy chactado is the local icon.", "Ask for small portions to sample several."],
        },
        {
          heading: "Milk as a sweet",
          paragraphs: [
            "Cajamarca is dairy country: fresh cheese, butter and manjar blanco. 'Queso helado' is a milk dessert (not cheese) that is sweet and refreshing, sold on the square and at the market.",
          ],
          bullets: ["Try queso helado on the square.", "The market has homemade versions."],
        },
        {
          heading: "Where to eat",
          paragraphs: [
            "Restaurants near the Plaza de Armas and the Central Market offer typical dishes and set lunch. Cafés give light options and breakfasts.",
          ],
          bullets: ["The market is cheap and varied.", "Confirm prices before ordering."],
        },
      ],
      faqs: [
        {
          question: "What dish to try?",
          answer: "Cuy chactado and papa rellena, with humitas or tamales.",
        },
        {
          question: "What is queso helado?",
          answer: "A milk dessert, not cheese; typical of the square and market.",
        },
        {
          question: "Where is cheapest?",
          answer: "The Central Market and the set lunch menu.",
        },
        {
          question: "Are there vegetarian options?",
          answer: "Humitas, papa rellena and tamales are often meat-free.",
        },
        {
          question: "Easy to eat cuy?",
          answer: "Yes, at typical restaurants in the centre.",
        },
      ],
    },
  },

  // 34 — Queso y productos lácteos de Cajamarca
  {
    slug: "queso-y-productos-lacteos-cajamarca",
    group: "comer",
    related: ["la-colpa", "ruta-del-queso", "mercado-central-de-cajamarca"],
    es: {
      metaTitle: "Queso y productos lácteos de Cajamarca: la ruta del queso",
      metaDescription:
        "Queso y productos lácteos de Cajamarca: por qué es la capital lechera del Perú, quesos, manjar blanco y dónde comprar.",
      h1: "Queso y productos lácteos de Cajamarca",
      lead: "Cajamarca es considerada la capital lechera del Perú. Sus quesos, mantequilla y manjar blanco se encuentran en el mercado, las haciendas y la ruta del queso.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Por qué Cajamarca",
          paragraphs: [
            "El clima y los pastos altos favorecen la ganadería lechera. Por eso la región produce buena parte de los lácteos del país y tiene una ruta dedicada a ellos.",
          ],
          bullets: ["Pregunte por queso fresco del día.", "La mantequilla local es muy usada."],
        },
        {
          heading: "Qué productos probar",
          paragraphs: [
            "Queso fresco, queso madurado, mantequilla y manjar blanco son los básicos. El manjar blanco, hecho de leche, es un dulce cremoso típico de la zona.",
          ],
          bullets: ["Pruebe manjar blanco con pan.", "Los quesos varían por maduración."],
        },
        {
          heading: "Dónde comprar",
          paragraphs: [
            "El Mercado Central reúne queserías y productos caseros. La ruta del queso y haciendas como La Colpa permiten ver la producción y comprar directo.",
          ],
          bullets: ["Lleve cooler si compra mucho.", "Confirme precios por kilo."],
        },
      ],
      faqs: [
        {
          question: "¿Por qué famosa la leche?",
          answer: "Por su ganadería de altura y producción láctea.",
        },
        {
          question: "¿Qué comprar?",
          answer: "Queso fresco, manjar blanco y mantequilla local.",
        },
        {
          question: "¿Dónde comprar?",
          answer: "Mercado Central, haciendas y la ruta del queso.",
        },
        {
          question: "¿Qué es el manjar blanco?",
          answer: "Un dulce de leche cremoso, típico de Cajamarca.",
        },
        {
          question: "¿Se visitan las queserías?",
          answer: "Sí en la ruta del queso; confirme visitas.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca cheese & dairy: the cheese route",
      metaDescription:
        "Cajamarca cheese & dairy: why it is Peru's dairy capital, its cheeses, manjar blanco and where to buy.",
      h1: "Cajamarca cheese & dairy",
      lead: "Cajamarca is considered Peru's dairy capital. Its cheeses, butter and manjar blanco are found at the market, the haciendas and the cheese route.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Why Cajamarca",
          paragraphs: [
            "The climate and high pastures favour dairy farming. That is why the region produces much of the country's dairy and has a route dedicated to it.",
          ],
          bullets: ["Ask for fresh cheese of the day.", "Local butter is widely used."],
        },
        {
          heading: "Products to try",
          paragraphs: [
            "Fresh cheese, aged cheese, butter and manjar blanco are the basics. Manjar blanco, made from milk, is a creamy sweet typical of the area.",
          ],
          bullets: ["Try manjar blanco with bread.", "Cheeses vary by ageing."],
        },
        {
          heading: "Where to buy",
          paragraphs: [
            "The Central Market gathers cheese shops and homemade products. The cheese route and haciendas like La Colpa let you see production and buy direct.",
          ],
          bullets: ["Bring a cooler if buying a lot.", "Confirm price per kilo."],
        },
      ],
      faqs: [
        {
          question: "Why famous for milk?",
          answer: "For its highland farming and dairy output.",
        },
        {
          question: "What to buy?",
          answer: "Fresh cheese, manjar blanco and local butter.",
        },
        {
          question: "Where to buy?",
          answer: "Central Market, haciendas and the cheese route.",
        },
        {
          question: "What is manjar blanco?",
          answer: "A creamy milk sweet typical of Cajamarca.",
        },
        {
          question: "Are dairies open to visit?",
          answer: "Yes on the cheese route; confirm visits.",
        },
      ],
    },
  },

  // 35 — Ruta del queso
  {
    slug: "ruta-del-queso",
    group: "rutas",
    related: ["queso-y-productos-lacteos-cajamarca", "la-colpa", "granja-porcon"],
    es: {
      metaTitle: "Ruta del queso de Cajamarca: haciendas y queserías",
      metaDescription:
        "Ruta del queso de Cajamarca: haciendas como La Colpa, queserías y degustación de lácteos en un día desde el centro.",
      h1: "Ruta del queso de Cajamarca",
      lead: "La ruta del queso recorre haciendas y queserías de la zona lechera: se conoce la producción, se prueban quesos y manjar blanco, y se visita La Colpa con sus vacas bailarinas.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El recorrido",
          paragraphs: [
            "Se parte del centro hacia las haciendas de los alrededores. La Colpa es la parada más conocida por el ordeño con música; otras fincas y queserías completan la ruta.",
          ],
          bullets: ["Vaya en vehículo o tour.", "Confirme horarios de ordeño y visitas."],
        },
        {
          heading: "Qué se prueba",
          paragraphs: [
            "Queso fresco, manjar blanco, mantequilla y derivados lácteos. En el mercado y las haciendas se compra directo de productor.",
          ],
          bullets: ["Lleve cooler para sus compras.", "Pruebe antes de comprar."],
        },
        {
          heading: "Cómo armar el día",
          paragraphs: [
            "Una mañana alcanza para dos o tres paradas. Combínela con Granja Porcón si busca naturaleza y campo en el mismo recorrido.",
          ],
          bullets: ["Empiece temprano.", "Lleve abrigo y efectivo."],
        },
      ],
      faqs: [
        {
          question: "¿Qué incluye la ruta?",
          answer: "Haciendas, queserías y degustación de lácteos.",
        },
        {
          question: "¿Se visita La Colpa?",
          answer: "Sí, es la parada clásica con las vacas bailarinas.",
        },
        {
          question: "¿En transporte público?",
          answer: "Es más práctico en tour o vehículo.",
        },
        {
          question: "¿Cuánto tiempo?",
          answer: "Una mañana para dos o tres paradas.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Abrigo, cooler, efectivo y calzado cómodo.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca cheese route: haciendas & dairies",
      metaDescription:
        "Cajamarca cheese route: haciendas like La Colpa, dairies and dairy tasting in a day from the centre.",
      h1: "Cajamarca cheese route",
      lead: "The cheese route tours haciendas and dairies of the dairy area: you learn the production, taste cheeses and manjar blanco, and visit La Colpa with its dancing cows.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The route",
          paragraphs: [
            "You leave the centre for the surrounding haciendas. La Colpa is the best-known stop for the milking to music; other farms and dairies complete the route.",
          ],
          bullets: ["Go by vehicle or tour.", "Confirm milking and visit times."],
        },
        {
          heading: "What you taste",
          paragraphs: [
            "Fresh cheese, manjar blanco, butter and dairy products. At the market and haciendas you buy direct from the producer.",
          ],
          bullets: ["Bring a cooler for purchases.", "Taste before buying."],
        },
        {
          heading: "How to build the day",
          paragraphs: [
            "A morning covers two or three stops. Pair it with Granja Porcón if you want nature and countryside on the same trip.",
          ],
          bullets: ["Start early.", "Bring warm clothing and cash."],
        },
      ],
      faqs: [
        {
          question: "What does the route include?",
          answer: "Haciendas, dairies and dairy tasting.",
        },
        {
          question: "Does it visit La Colpa?",
          answer: "Yes, it is the classic stop with the dancing cows.",
        },
        {
          question: "By public transport?",
          answer: "A tour or vehicle is more practical.",
        },
        {
          question: "How long?",
          answer: "A morning for two or three stops.",
        },
        {
          question: "What to bring?",
          answer: "Warm clothing, cooler, cash and comfortable shoes.",
        },
      ],
    },
  },

  // 36 — Ruta vinícola de Cajamarca
  {
    slug: "ruta-vinicola-cajamarca",
    group: "rutas",
    related: ["festividades-de-cajamarca", "mejor-epoca-para-visitar", "restaurantes-cerca-de-la-plaza"],
    es: {
      metaTitle: "Ruta vinícola de Cajamarca: vino de frutas y ponche",
      metaDescription:
        "Ruta vinícola de Cajamarca: la tradición del vino de frutas y el ponche, y dónde conocer bodegas y degustar en la región.",
      h1: "Ruta vinícola de Cajamarca",
      lead: "Cajamarca tiene una tradición vinícola propia, con vino de frutas y el ponche, un trago típico de fiestas. Algunas bodegas y pueblos reciben visitas para conocer y degustar.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Vino de frutas y ponche",
          paragraphs: [
            "Más que uva de mesa, la zona es conocida por el vino de frutas y el ponche cajamarquino, hecho con vino, leche, huevo y especias. Es típico en Navidad y Carnaval.",
          ],
          bullets: ["El ponche es bebida de fiestas.", "Confirme dónde lo preparan artesanalmente."],
        },
        {
          heading: "Bodegas y pueblos",
          paragraphs: [
            "Varias bodegas y pueblos de la provincia elaboran y ofrecen degustación. No todas reciben visitas, así que confirme con anticipación cuáles están abiertas.",
          ],
          bullets: ["Pregunte por bodegas que atienden al público.", "Vaya en vehículo o tour."],
        },
        {
          heading: "Cuándo ir",
          paragraphs: [
            "La temporada de fiestas (Carnaval, Navidad) resalta el ponche, pero las bodegas pueden visitarse durante el año. Revise horarios y disponibilidad.",
          ],
          bullets: ["Mejor con reserva.", "Lleve abrigo para la noche."],
        },
      ],
      faqs: [
        {
          question: "¿De qué es el vino?",
          answer: "De frutas; la zona es famosa por el vino de frutas.",
        },
        {
          question: "¿Qué es el ponche?",
          answer: "Un trago típico de fiestas, con vino, leche, huevo y especias.",
        },
        {
          question: "¿Se visitan bodegas?",
          answer: "Algunas sí; confirme cuáles reciben visitas.",
        },
        {
          question: "¿Mejor época?",
          answer: "Todo el año, con énfasis en Carnaval y Navidad.",
        },
        {
          question: "¿Cómo ir?",
          answer: "En vehículo o tour desde el centro.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca wine route: fruit wine & ponche",
      metaDescription:
        "Cajamarca wine route: the fruit-wine and ponche tradition, and where to find wineries and tastings in the region.",
      h1: "Cajamarca wine route",
      lead: "Cajamarca has its own wine tradition, with fruit wine and ponche, a typical festive drink. Some wineries and villages welcome visits to learn and taste.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Fruit wine and ponche",
          paragraphs: [
            "More than table grapes, the area is known for fruit wine and the Cajamarca ponche, made with wine, milk, egg and spices. It is typical at Christmas and Carnival.",
          ],
          bullets: ["Ponche is a festive drink.", "Confirm where it is made artisanally."],
        },
        {
          heading: "Wineries and villages",
          paragraphs: [
            "Several wineries and villages of the province make and offer tastings. Not all receive visits, so confirm in advance which are open.",
          ],
          bullets: ["Ask for wineries that serve the public.", "Go by vehicle or tour."],
        },
        {
          heading: "When to go",
          paragraphs: [
            "The festive season (Carnival, Christmas) highlights ponche, but wineries can be visited year-round. Check hours and availability.",
          ],
          bullets: ["Best with a reservation.", "Bring warm clothing for the night."],
        },
      ],
      faqs: [
        {
          question: "What is the wine made from?",
          answer: "Fruit; the area is famous for fruit wine.",
        },
        {
          question: "What is ponche?",
          answer: "A typical festive drink with wine, milk, egg and spices.",
        },
        {
          question: "Are wineries open to visit?",
          answer: "Some are; confirm which receive visits.",
        },
        {
          question: "Best season?",
          answer: "All year, with emphasis on Carnival and Christmas.",
        },
        {
          question: "How to get there?",
          answer: "By vehicle or tour from the centre.",
        },
      ],
    },
  },

  // 37 — Altura y soroche en Cajamarca
  {
    slug: "altura-y-soroche-en-cajamarca",
    group: "visita",
    related: ["clima-en-cajamarca", "cajamarca-con-ninos", "donde-dormir-en-cajamarca"],
    es: {
      metaTitle: "Altura y soroche en Cajamarca: cómo adaptarse",
      metaDescription:
        "Altura y soroche en Cajamarca: la ciudad está cerca de 2.700 m. Consejos para evitar el mal de altura, hidratarse y disfrutar sin contratiempos.",
      h1: "Altura y soroche en Cajamarca",
      lead: "Cajamarca se encuentra a unos 2.700 m sobre el nivel del mar. La altura puede provocar el soroche (mal de altura) los primeros días; con pocos cuidados, la mayoría se adapta sin problema.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué es el soroche",
          paragraphs: [
            "El soroche es la respuesta del cuerpo a la menor cantidad de oxígeno en la altura. Puede causar dolor de cabeza, cansancio, falta de aire al caminar y sueño.",
          ],
          bullets: ["Aparece sobre todo el primer día.", "Su intensidad varía según cada persona."],
        },
        {
          heading: "Cómo prevenirlo",
          paragraphs: [
            "Descanse el primer día, camine despacio y duerma bien. Hidrátese bebiendo agua a lo largo del día y pruebe infusiones de hoja de coca, comunes en la sierra.",
          ],
          bullets: ["Evite el alcohol las primeras 24 horas.", "Coma ligero y en varias veces."],
        },
        {
          heading: "Sol y frío",
          paragraphs: [
            "A la altura el sol es fuerte y las noches frescas. Use protector solar, gorra y ropa de abrigo en capas; la tarde puede enfriar pese al día soleado.",
          ],
          bullets: ["Lleve labial e hidratante.", "El cambio de temperatura es brusco."],
        },
      ],
      faqs: [
        {
          question: "¿A qué altura está Cajamarca?",
          answer: "Cerca de 2.700 m sobre el nivel del mar.",
        },
        {
          question: "¿Quién lo sufre más?",
          answer: "Quien llega de la costa o en vuelo directo; los niños y adultos mayores con precaución.",
        },
        {
          question: "¿La hoja de coca ayuda?",
          answer: "Es un uso tradicional de la sierra para el mal de altura; consúltelo si tiene dudas médicas.",
        },
        {
          question: "¿Cuánto dura el soroche?",
          answer: "Suele pasar en uno o dos días al adaptarse.",
        },
        {
          question: "¿Cuándo ver un médico?",
          answer: "Si hay falta de aire intensa, vómitos o no mejora, busque atención.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca altitude & soroche: how to adjust",
      metaDescription:
        "Cajamarca altitude & soroche: the city sits near 2,700 m. Tips to avoid altitude sickness, stay hydrated and enjoy without trouble.",
      h1: "Cajamarca altitude & soroche",
      lead: "Cajamarca sits around 2,700 m above sea level. The altitude can cause soroche (altitude sickness) in the first days; with a few precautions, most people adjust without issue.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What is soroche",
          paragraphs: [
            "Soroche is the body's response to less oxygen at altitude. It can cause headache, tiredness, breathlessness when walking and drowsiness.",
          ],
          bullets: ["It appears mainly on the first day.", "Intensity varies by person."],
        },
        {
          heading: "How to prevent it",
          paragraphs: [
            "Rest on day one, walk slowly and sleep well. Stay hydrated by drinking water through the day and try coca-leaf infusions, common in the highlands.",
          ],
          bullets: ["Avoid alcohol the first 24 hours.", "Eat light, in small amounts."],
        },
        {
          heading: "Sun and cold",
          paragraphs: [
            "At altitude the sun is strong and nights are cool. Use sunscreen, a cap and warm layered clothing; afternoons cool down despite a sunny day.",
          ],
          bullets: ["Bring lip balm and moisturiser.", "Temperature changes are sharp."],
        },
      ],
      faqs: [
        {
          question: "How high is Cajamarca?",
          answer: "Around 2,700 m above sea level.",
        },
        {
          question: "Who feels it most?",
          answer: "Those arriving from the coast or by direct flight; children and older adults with caution.",
        },
        {
          question: "Does coca leaf help?",
          answer: "It is a highland tradition for altitude sickness; check with a doctor if unsure.",
        },
        {
          question: "How long does soroche last?",
          answer: "Usually one or two days as you adjust.",
        },
        {
          question: "When to see a doctor?",
          answer: "If breathlessness is severe, with vomiting, or it does not improve, seek care.",
        },
      ],
    },
  },

  // 38 — Cajamarca en un día
  {
    slug: "cajamarca-en-un-dia",
    group: "visita",
    related: ["plaza-de-armas", "cuarto-del-rescate", "cumbe-mayo"],
    es: {
      metaTitle: "Cajamarca en un día: itinerario exprés",
      metaDescription:
        "Cajamarca en un día: la Plaza de Armas, el Cuarto del Rescate, Belén y Baños del Inca o Santa Apolonia en una sola jornada.",
      h1: "Cajamarca en un día",
      lead: "Si tiene solo un día, puede recorrer el centro histórico por la mañana y salir a las afueras por la tarde. Aquí un itinerario sencillo y realista.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Mañana en el centro",
          paragraphs: [
            "Empiece en la Plaza de Armas y visite la Catedral, el Cuarto del Rescate y el Conjunto Monumental Belén, todo a pocos pasos. El centro se recorre a pie.",
          ],
          bullets: ["Salga temprano.", "Lleve agua y calzado cómodo."],
        },
        {
          heading: "Tarde fuera del centro",
          paragraphs: [
            "Dedique la tarde a Baños del Inca (termas) o al Cerro Santa Apolonia (mirador). Ambos están a pocos minutos del centro en vehículo.",
          ],
          bullets: ["Elija uno para no apurarse.", "Confirme el acceso a las termas."],
        },
        {
          heading: "Consejos",
          paragraphs: [
            "La altura y el sol cansan; haga pausas. Si prefiere naturaleza, cambie la tarde por Cumbemayo (media jornada).",
          ],
          bullets: ["No sobrecargue el día.", "Lleve abrigo para la tarde."],
        },
      ],
      faqs: [
        {
          question: "¿Se puede en un día?",
          answer: "Sí, el centro y una salida cercana caben en un día.",
        },
        {
          question: "¿El centro se hace a pie?",
          answer: "Sí, la plaza y los museos están muy cerca.",
        },
        {
          question: "¿Qué priorizar?",
          answer: "Centro por la mañana; termas o mirador por la tarde.",
        },
        {
          question: "¿Cumbemayo en un día?",
          answer: "Sí, como salida de tarde, pero quita tiempo al centro.",
        },
        {
          question: "¿Llevar guía?",
          answer: "No es necesario en el centro; sí útil fuera de la ciudad.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca in one day: express itinerary",
      metaDescription:
        "Cajamarca in one day: the Plaza de Armas, the Ransom Room, Belén and Baños del Inca or Santa Apolonia in a single day.",
      h1: "Cajamarca in one day",
      lead: "With only one day, you can tour the historic centre in the morning and head to the outskirts in the afternoon. Here is a simple, realistic plan.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Morning in the centre",
          paragraphs: [
            "Start at the Plaza de Armas and visit the cathedral, the Ransom Room and the Belén Monumental Complex, all steps apart. The centre is walkable.",
          ],
          bullets: ["Leave early.", "Bring water and comfortable shoes."],
        },
        {
          heading: "Afternoon outside the centre",
          paragraphs: [
            "Spend the afternoon at Baños del Inca (springs) or Cerro Santa Apolonia (viewpoint). Both are minutes from the centre by vehicle.",
          ],
          bullets: ["Pick one to avoid rushing.", "Confirm spring access."],
        },
        {
          heading: "Tips",
          paragraphs: [
            "Altitude and sun tire you; take breaks. If you prefer nature, swap the afternoon for Cumbemayo (half day).",
          ],
          bullets: ["Do not overload the day.", "Bring warm clothing for the afternoon."],
        },
      ],
      faqs: [
        {
          question: "Can it be done in a day?",
          answer: "Yes, the centre and one nearby outing fit in a day.",
        },
        {
          question: "Is the centre walkable?",
          answer: "Yes, the square and museums are very close.",
        },
        {
          question: "What to prioritise?",
          answer: "Centre in the morning; springs or viewpoint in the afternoon.",
        },
        {
          question: "Cumbemayo in a day?",
          answer: "Yes, as an afternoon trip, but it takes time from the centre.",
        },
        {
          question: "Need a guide?",
          answer: "Not in the centre; useful outside the city.",
        },
      ],
    },
  },

  // 39 — Cajamarca en 3 días
  {
    slug: "cajamarca-en-3-dias",
    group: "visita",
    related: ["cajamarca-en-un-dia", "ruta-del-queso", "granja-porcon"],
    es: {
      metaTitle: "Cajamarca en 3 días: itinerario completo",
      metaDescription:
        "Cajamarca en 3 días: centro histórico, Cumbemayo y Frailones, y la ruta del queso con Granja Porcón.",
      h1: "Cajamarca en 3 días",
      lead: "Tres días permiten recorrer la ciudad, la arqueología y el campo lechero sin apuros. Esta propuesta equilibra cultura, naturaleza y gastronomía.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Día 1 — El centro",
          paragraphs: [
            "Plaza de Armas, Catedral, Cuarto del Rescate, Belén y un paseo al Cerro Santa Apolonia al atardecer. Todo a pie.",
          ],
          bullets: ["Descanse por la altura.", "Cene cerca de la plaza."],
        },
        {
          heading: "Día 2 — Arqueología",
          paragraphs: [
            "Salga a Cumbemayo (acueducto y petroglifos) y a Los Frailones, o a las Ventanillas de Otuzco. Son salidas de medio día en vehículo.",
          ],
          bullets: ["Lleve abrigo y agua.", "Confirme el estado de caminos."],
        },
        {
          heading: "Día 3 — Campo y queso",
          paragraphs: [
            "Recorra la ruta del queso (La Colpa y queserías) y visite Granja Porcón para naturaleza y contacto con animales.",
          ],
          bullets: ["Vaya en tour o vehículo.", "Pruebe queso y manjar blanco."],
        },
      ],
      faqs: [
        {
          question: "¿Alcanza con 3 días?",
          answer: "Sí, cubre lo esencial con calma.",
        },
        {
          question: "¿Cómo moverse?",
          answer: "A pie en el centro; tour o vehículo para fuera.",
        },
        {
          question: "¿Incluir Porcón?",
          answer: "Sí, como día de campo en el día 3.",
        },
        {
          question: "¿Día 2 solo Cumbemayo?",
          answer: "Puede añadir Frailones o Ventanillas según el tiempo.",
        },
        {
          question: "¿Reservar tours?",
          answer: "Recomendable para sitios lejanos; confirme con antelación.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca in 3 days: full itinerary",
      metaDescription:
        "Cajamarca in 3 days: historic centre, Cumbemayo and the Frailones, and the cheese route with Granja Porcón.",
      h1: "Cajamarca in 3 days",
      lead: "Three days let you cover the city, the archaeology and the dairy countryside without rushing. This plan balances culture, nature and food.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Day 1 — The centre",
          paragraphs: [
            "Plaza de Armas, cathedral, Ransom Room, Belén and a sunset walk up Cerro Santa Apolonia. All on foot.",
          ],
          bullets: ["Rest for the altitude.", "Dine near the square."],
        },
        {
          heading: "Day 2 — Archaeology",
          paragraphs: [
            "Head to Cumbemayo (aqueduct and petroglyphs) and the Frailones, or to Ventanillas de Otuzco. These are half-day trips by vehicle.",
          ],
          bullets: ["Bring warm clothing and water.", "Confirm trail conditions."],
        },
        {
          heading: "Day 3 — Countryside and cheese",
          paragraphs: [
            "Tour the cheese route (La Colpa and dairies) and visit Granja Porcón for nature and animal contact.",
          ],
          bullets: ["Go by tour or vehicle.", "Taste cheese and manjar blanco."],
        },
      ],
      faqs: [
        {
          question: "Is 3 days enough?",
          answer: "Yes, it covers the essentials at ease.",
        },
        {
          question: "How to get around?",
          answer: "On foot in the centre; tour or vehicle outside.",
        },
        {
          question: "Include Porcón?",
          answer: "Yes, as a countryside day on day 3.",
        },
        {
          question: "Day 2 only Cumbemayo?",
          answer: "You can add the Frailones or Ventanillas depending on time.",
        },
        {
          question: "Book tours?",
          answer: "Recommended for far sites; confirm ahead.",
        },
      ],
    },
  },

  // 40 — Cómo moverse en Cajamarca
  {
    slug: "como-moverse-en-cajamarca",
    group: "visita",
    related: ["como-llegar", "aeropuerto-a-plaza", "estacionamiento-cerca-de-la-plaza"],
    es: {
      metaTitle: "Cómo moverse en Cajamarca: transporte local",
      metaDescription:
        "Cómo moverse en Cajamarca: a pie por el centro, taxi y mototaxi en la ciudad, y tours o colectivos para las afueras.",
      h1: "Cómo moverse en Cajamarca",
      lead: "El centro de Cajamarca es pequeño y peatonal; fuera de él, taxi, mototaxi y tours resuelven el traslado. Aquí cómo elegir según el destino.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "A pie por el centro",
          paragraphs: [
            "La Plaza de Armas y sus alrededores se recorren caminando. Es la forma más simple y segura de conocer la ciudad antigua.",
          ],
          bullets: ["Lleve calzado cómodo.", "El entorno es peatonal de día."],
        },
        {
          heading: "Taxi y mototaxi",
          paragraphs: [
            "Dentro de la ciudad, taxi y mototaxi cubren trayectos cortos. Conviene acordar o confirmar la tarifa antes de subir, o usar una app de la que disponga.",
          ],
          bullets: ["Pregunte el precio si no hay medidor.", "Guarde la dirección escrita."],
        },
        {
          heading: "A las afueras",
          paragraphs: [
            "Para Baños del Inca, Cumbemayo o la ruta del queso, lo práctico es tour, vehículo de alquiler o colectivos desde las terminales. Confirme horarios.",
          ],
          bullets: ["Los sitios alejados no tienen transporte frecuente.", "Vuelva al centro antes de anochecer."],
        },
      ],
      faqs: [
        {
          question: "¿El centro es caminable?",
          answer: "Sí, la plaza y museos están muy cerca.",
        },
        {
          question: "¿Hay taxi de app?",
          answer: "Varía; confirme qué apps operan y acuerde tarifa si no hay medidor.",
        },
        {
          question: "¿Mototaxi es seguro?",
          answer: "Para trayectos cortos sí; elija uno habilitado y cuide sus pertenencias.",
        },
        {
          question: "¿Cómo ir a Cumbemayo?",
          answer: "Tour, vehículo o colectivo; no hay transporte público continuo.",
        },
        {
          question: "¿Alquilar auto?",
          answer: "Útil para recorrer campo; revise camino y estacionamiento.",
        },
      ],
    },
    en: {
      metaTitle: "Getting around Cajamarca: local transport",
      metaDescription:
        "Getting around Cajamarca: walk the centre, taxi and mototaxi in town, and tours or shared vans for the outskirts.",
      h1: "Getting around Cajamarca",
      lead: "Cajamarca's centre is small and pedestrian; outside it, taxi, mototaxi and tours handle the transfer. Here is how to choose by destination.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "On foot in the centre",
          paragraphs: [
            "The Plaza de Armas and surroundings are walked. It is the simplest and safest way to see the old city.",
          ],
          bullets: ["Wear comfortable shoes.", "The area is pedestrian by day."],
        },
        {
          heading: "Taxi and mototaxi",
          paragraphs: [
            "Within town, taxi and mototaxi cover short trips. Agree or confirm the fare before getting in, or use an available ride app.",
          ],
          bullets: ["Ask the price if no meter.", "Keep the address written down."],
        },
        {
          heading: "To the outskirts",
          paragraphs: [
            "For Baños del Inca, Cumbemayo or the cheese route, a tour, rental vehicle or shared vans from the terminals works. Confirm schedules.",
          ],
          bullets: ["Remote sites lack frequent transport.", "Return to the centre before dark."],
        },
      ],
      faqs: [
        {
          question: "Is the centre walkable?",
          answer: "Yes, the square and museums are very close.",
        },
        {
          question: "Are ride apps available?",
          answer: "It varies; check which apps operate and agree a fare if no meter.",
        },
        {
          question: "Is mototaxi safe?",
          answer: "For short trips, yes; pick a licensed one and watch your belongings.",
        },
        {
          question: "How to reach Cumbemayo?",
          answer: "Tour, vehicle or shared van; no continuous public transport.",
        },
        {
          question: "Rent a car?",
          answer: "Useful for the countryside; check roads and parking.",
        },
      ],
    },
  },

  // 41 — Leyendas de Cajamarca
  {
    slug: "leyendas-de-cajamarca",
    group: "historia",
    related: ["atahualpa-y-1532", "cuarto-del-rescate", "cajamarca-en-el-incanato"],
    es: {
      metaTitle: "Leyendas de Cajamarca: relatos y tradición",
      metaDescription:
        "Leyendas de Cajamarca: relatos populares en torno al Cuarto del Rescate y la tradición andina de la ciudad.",
      h1: "Leyendas de Cajamarca",
      lead: "Además de la historia documentada, Cajamarca guarda relatos populares que mezclan la memoria andina con la imaginación. Estas historias se cuentan como leyenda, no como hecho comprobado.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El Cuarto del Rescate",
          paragraphs: [
            "En torno al recinto donde estuvo Atahualpa creció el relato del rescate con oro y plata. La leyenda crece sobre un hecho histórico conocido, pero los detalles varían en el relato popular.",
          ],
          bullets: ["Visite el lugar para la historia real.", "Separe hecho de leyenda."],
        },
        {
          heading: "Tradición andina",
          paragraphs: [
            "Muchas leyendas cajamarquinas mezclan la cosmovisión andina con personajes y lugares de la ciudad. Se transmiten de generación en generación como parte de la identidad local.",
          ],
          bullets: ["Pregunte a guías locales.", "Son relatos, no fuentes históricas."],
        },
        {
          heading: "Dónde escucharlas",
          paragraphs: [
            "El centro histórico y las visitas guiadas son el lugar común donde se narran estos relatos. Disfrútelos como cultura viva de Cajamarca.",
          ],
          bullets: ["Combine con la visita al centro.", "Respete el carácter popular."],
        },
      ],
      faqs: [
        {
          question: "¿Son hechos reales?",
          answer: "Son leyendas: relatos populares, no hechos comprobados.",
        },
        {
          question: "¿De qué tratan?",
          answer: "Del rescate, la memoria andina y lugares de la ciudad.",
        },
        {
          question: "¿Dónde se cuentan?",
          answer: "En el centro y en visitas guiadas.",
        },
        {
          question: "¿Confunden con historia?",
          answer: "Pueden; por eso se presentan como leyenda.",
        },
        {
          question: "¿Hay guías que las narren?",
          answer: "Sí, algunos recorridos del centro las incluyen.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca legends: stories & tradition",
      metaDescription:
        "Cajamarca legends: popular tales around the Ransom Room and the city's Andean tradition.",
      h1: "Cajamarca legends",
      lead: "Beyond documented history, Cajamarca keeps popular tales that blend Andean memory with imagination. These stories are told as legend, not proven fact.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The Ransom Room",
          paragraphs: [
            "Around the enclosure where Atahualpa stayed grew the tale of the ransom in gold and silver. The legend builds on a known historical event, but details vary in the popular account.",
          ],
          bullets: ["Visit the site for the real history.", "Separate fact from legend."],
        },
        {
          heading: "Andean tradition",
          paragraphs: [
            "Many Cajamarca legends mix Andean worldview with characters and places of the city. They pass down through generations as part of local identity.",
          ],
          bullets: ["Ask local guides.", "They are tales, not historical sources."],
        },
        {
          heading: "Where to hear them",
          paragraphs: [
            "The historic centre and guided visits are where these tales are told. Enjoy them as living culture of Cajamarca.",
          ],
          bullets: ["Pair with the centre visit.", "Respect their popular nature."],
        },
      ],
      faqs: [
        {
          question: "Are they real events?",
          answer: "They are legends: popular tales, not proven facts.",
        },
        {
          question: "What are they about?",
          answer: "The ransom, Andean memory and city places.",
        },
        {
          question: "Where are they told?",
          answer: "In the centre and on guided visits.",
        },
        {
          question: "Do they mix with history?",
          answer: "They can; that is why they are presented as legend.",
        },
        {
          question: "Guides who tell them?",
          answer: "Yes, some centre tours include them.",
        },
      ],
    },
  },

  // 42 — Los Frailones de Cumbemayo
  {
    slug: "los-frailones-cumbemayo",
    group: "lugares",
    related: ["cumbe-mayo", "circuito-arqueologico", "cerro-santa-apolonia"],
    es: {
      metaTitle: "Los Frailones de Cumbemayo: formaciones rocosas",
      metaDescription:
        "Los Frailones de Cumbemayo: las formaciones rocosas junto al acueducto, en la ruta de Cumbemayo, cerca de Cajamarca.",
      h1: "Los Frailones de Cumbemayo",
      lead: "Los Frailones son formaciones rocosas esculpidas por la naturaleza cerca del acueducto de Cumbemayo. Su silueta recuerda a frailes de pie, y se visitan en el mismo recorrido arqueológico.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué son",
          paragraphs: [
            "Son rocas de origen volcánico moldeadas por el viento y la lluvia durante milenios. Su forma alargada les da el nombre popular de 'frailones' (como frailes).",
          ],
          bullets: ["Están junto a Cumbemayo.", "No trepe sobre las rocas."],
        },
        {
          heading: "El recorrido",
          paragraphs: [
            "Se llega en el mismo paseo que el acueducto y los petroglifos. El camino es de altura, así que vaya despacio y con abrigo.",
          ],
          bullets: ["Lleve agua y calzado de campo.", "Confirme el acceso y horarios."],
        },
        {
          heading: "Cómo visitarlos",
          paragraphs: [
            "Quedan a unos kilómetros de la ciudad, en ruta hacia Cumbemayo. Se visitan en vehículo o tour, combinados con el acueducto.",
          ],
          bullets: ["Únalos al día de Cumbemayo.", "Lleve capa por el frío."],
        },
      ],
      faqs: [
        {
          question: "¿Qué son los Frailones?",
          answer: "Formaciones rocosas naturales con forma de frailes.",
        },
        {
          question: "¿Dónde están?",
          answer: "Cerca del acueducto de Cumbemayo.",
        },
        {
          question: "¿Se camina mucho?",
          answer: "Un tramo a pie de altura; vaya a su ritmo.",
        },
        {
          question: "¿Se combina con Cumbemayo?",
          answer: "Sí, es el mismo recorrido arqueológico.",
        },
        {
          question: "¿Llevar guía?",
          answer: "No es necesario, pero ayuda a entender el sitio.",
        },
      ],
    },
    en: {
      metaTitle: "The Frailones of Cumbemayo: rock formations",
      metaDescription:
        "The Frailones of Cumbemayo: rock formations by the aqueduct, on the Cumbemayo route near Cajamarca.",
      h1: "The Frailones of Cumbemayo",
      lead: "The Frailones are rock formations shaped by nature near the Cumbemayo aqueduct. Their silhouette resembles standing friars, and they are visited on the same archaeological route.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What they are",
          paragraphs: [
            "They are volcanic rocks shaped by wind and rain over millennia. Their elongated shape gives the popular name 'frailones' (like friars).",
          ],
          bullets: ["They are by Cumbemayo.", "Do not climb on the rocks."],
        },
        {
          heading: "The route",
          paragraphs: [
            "You reach them on the same walk as the aqueduct and petroglyphs. The path is at altitude, so go slowly and with warm clothing.",
          ],
          bullets: ["Bring water and country shoes.", "Confirm access and hours."],
        },
        {
          heading: "How to visit",
          paragraphs: [
            "They lie a few kilometres from the city, on the way to Cumbemayo. Visited by vehicle or tour, combined with the aqueduct.",
          ],
          bullets: ["Pair with the Cumbemayo day.", "Bring a layer for the cold."],
        },
      ],
      faqs: [
        {
          question: "What are the Frailones?",
          answer: "Natural rock formations shaped like friars.",
        },
        {
          question: "Where are they?",
          answer: "Near the Cumbemayo aqueduct.",
        },
        {
          question: "Much walking?",
          answer: "A stretch on foot at altitude; go at your pace.",
        },
        {
          question: "Combine with Cumbemayo?",
          answer: "Yes, it is the same archaeological route.",
        },
        {
          question: "Need a guide?",
          answer: "Not required, but it helps understand the site.",
        },
      ],
    },
  },

  // 43 — Dulces típicos de Cajamarca
  {
    slug: "dulces-tipicos-de-cajamarca",
    group: "comer",
    related: ["comida-tipica-de-cajamarca", "queso-y-productos-lacteos-cajamarca", "mercado-central-de-cajamarca"],
    es: {
      metaTitle: "Dulces típicos de Cajamarca: postres y dulcería",
      metaDescription:
        "Dulces típicos de Cajamarca: manjar blanco, queso helado, cocadas y ranfañote, y dónde probarlos en la ciudad.",
      h1: "Dulces típicos de Cajamarca",
      lead: "Cajamarca tiene una dulcería propia, ligada a su leche y su azúcar. El manjar blanco, el queso helado, las cocadas y el ranfañote son los clásicos que se venden en el mercado y la plaza.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Los clásicos",
          paragraphs: [
            "El manjar blanco es un dulce cremoso de leche; el queso helado, pese al nombre, es un postre de leche refrescante; las cocadas llevan coco; y el ranfañote es un dulce de melaza típico de la zona.",
          ],
          bullets: ["Pruebe queso helado en la plaza.", "El mercado tiene versiones caseras."],
        },
        {
          heading: "Dónde probarlos",
          paragraphs: [
            "El Mercado Central y los puestos de la Plaza de Armas reúnen estos dulces. Las dulcerías locales suelen prepararlos el día.",
          ],
          bullets: ["Pida porciones pequeñas.", "Confirme precios antes de comprar."],
        },
        {
          heading: "Para llevar",
          paragraphs: [
            "Muchos dulces se envasan para regalo. Lleve cooler si compra lácteos y viaja fuera de la ciudad.",
          ],
          bullets: ["Compre cerca de irse.", "Conserve en frío si puede."],
        },
      ],
      faqs: [
        {
          question: "¿Qué dulce probar?",
          answer: "Queso helado y manjar blanco, los más típicos.",
        },
        {
          question: "¿El queso helado es queso?",
          answer: "No, es un postre de leche; el nombre engaña.",
        },
        {
          question: "¿Qué es el ranfañote?",
          answer: "Un dulce de melaza tradicional de Cajamarca.",
        },
        {
          question: "¿Dónde comprar?",
          answer: "Mercado Central y puestos de la plaza.",
        },
        {
          question: "¿Se llevan bien?",
          answer: "Sí envasados; refrigere los lácteos.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca typical sweets: desserts & confectionery",
      metaDescription:
        "Cajamarca typical sweets: manjar blanco, queso helado, cocadas and ranfañote, and where to taste them in town.",
      h1: "Cajamarca typical sweets",
      lead: "Cajamarca has its own confectionery, tied to its milk and sugar. Manjar blanco, queso helado, cocadas and ranfañote are the classics sold at the market and the square.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The classics",
          paragraphs: [
            "Manjar blanco is a creamy milk sweet; queso helado, despite the name, is a refreshing milk dessert; cocadas use coconut; and ranfañote is a traditional molasses sweet of the area.",
          ],
          bullets: ["Try queso helado on the square.", "The market has homemade versions."],
        },
        {
          heading: "Where to taste them",
          paragraphs: [
            "The Central Market and the Plaza de Armas stalls gather these sweets. Local confectioners usually make them the same day.",
          ],
          bullets: ["Ask for small portions.", "Confirm prices before buying."],
        },
        {
          heading: "To take home",
          paragraphs: [
            "Many sweets are packed as gifts. Bring a cooler if buying dairy and leaving the city.",
          ],
          bullets: ["Buy close to departure.", "Keep refrigerated if possible."],
        },
      ],
      faqs: [
        {
          question: "Which sweet to try?",
          answer: "Queso helado and manjar blanco, the most typical.",
        },
        {
          question: "Is queso helado cheese?",
          answer: "No, it is a milk dessert; the name misleads.",
        },
        {
          question: "What is ranfañote?",
          answer: "A traditional molasses sweet of Cajamarca.",
        },
        {
          question: "Where to buy?",
          answer: "Central Market and square stalls.",
        },
        {
          question: "Travel well?",
          answer: "Yes, packed; refrigerate the dairy ones.",
        },
      ],
    },
  },

  // 44 — Bebidas típicas de Cajamarca
  {
    slug: "bebidas-tipicas-de-cajamarca",
    group: "comer",
    related: ["dulces-tipicos-de-cajamarca", "ruta-vinicola-cajamarca", "festividades-de-cajamarca"],
    es: {
      metaTitle: "Bebidas típicas de Cajamarca: ponche, chicha y vino",
      metaDescription:
        "Bebidas típicas de Cajamarca: el ponche cajamarquino, la chicha de jora y el vino de frutas, y cuándo se toman.",
      h1: "Bebidas típicas de Cajamarca",
      lead: "La bebida más famosa es el ponche cajamarquino, pero la región también tiene chicha de jora y vino de frutas. Se disfrutan sobre todo en fiestas y fechas familiares.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Ponche cajamarquino",
          paragraphs: [
            "Es una bebida cálida a base de vino, leche, huevo y especias, típica de Navidad y Carnaval. Algunas bodegas y familias lo preparan de forma artesanal.",
          ],
          bullets: ["Es bebida de fiestas.", "Confirme dónde lo preparan."],
        },
        {
          heading: "Chicha y vino de frutas",
          paragraphs: [
            "La chicha de jora es una bebida de maíz fermentado de origen andino. El vino de frutas, hecho con frutas de la zona, es otra tradición local que algunas bodegas ofrecen.",
          ],
          bullets: ["Pruebe con moderación.", "Pregunte por bodegas que atienden público."],
        },
        {
          heading: "Dónde probarlas",
          paragraphs: [
            "En fechas de fiesta suelen aparecer en la plaza y en reuniones. Las bodegas de la ruta del vino pueden recibir visitas; confirme con antelación.",
          ],
          bullets: ["Mejor con reserva.", "No conduzca si prueba bebidas con alcohol."],
        },
      ],
      faqs: [
        {
          question: "¿Qué bebida es la famosa?",
          answer: "El ponche cajamarquino, de fiestas.",
        },
        {
          question: "¿Qué lleva el ponche?",
          answer: "Vino, leche, huevo y especias.",
        },
        {
          question: "¿La chicha de jora es alcohol?",
          answer: "Sí, es maíz fermentado; tómela con cuidado.",
        },
        {
          question: "¿Hay vino de frutas?",
          answer: "Sí, tradición local; pregunte en bodegas.",
        },
        {
          question: "¿Dónde probar?",
          answer: "En fiestas y bodegas que reciben visitas.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca typical drinks: ponche, chicha & wine",
      metaDescription:
        "Cajamarca typical drinks: the Cajamarca ponche, chicha de jora and fruit wine, and when they are drunk.",
      h1: "Cajamarca typical drinks",
      lead: "The most famous drink is the Cajamarca ponche, but the region also has chicha de jora and fruit wine. They are enjoyed mainly at festivals and family dates.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Cajamarca ponche",
          paragraphs: [
            "It is a warm drink based on wine, milk, egg and spices, typical of Christmas and Carnival. Some wineries and families prepare it artisanally.",
          ],
          bullets: ["It is a festive drink.", "Ask where it is made."],
        },
        {
          heading: "Chicha and fruit wine",
          paragraphs: [
            "Chicha de jora is a fermented corn drink of Andean origin. Fruit wine, made with local fruit, is another local tradition some wineries offer.",
          ],
          bullets: ["Taste in moderation.", "Ask for wineries open to the public."],
        },
        {
          heading: "Where to taste",
          paragraphs: [
            "On festival dates they often appear on the square and at gatherings. Wine-route wineries may receive visits; confirm ahead.",
          ],
          bullets: ["Best with a reservation.", "Do not drive if you taste alcoholic drinks."],
        },
      ],
      faqs: [
        {
          question: "Which drink is famous?",
          answer: "The Cajamarca ponche, for festivals.",
        },
        {
          question: "What is in ponche?",
          answer: "Wine, milk, egg and spices.",
        },
        {
          question: "Is chicha de jora alcoholic?",
          answer: "Yes, it is fermented corn; drink carefully.",
        },
        {
          question: "Is there fruit wine?",
          answer: "Yes, a local tradition; ask at wineries.",
        },
        {
          question: "Where to taste?",
          answer: "At festivals and wineries open to visits.",
        },
      ],
    },
  },

  // 45 — Queso helado de Cajamarca
  {
    slug: "queso-helado-de-cajamarca",
    group: "comer",
    related: ["dulces-tipicos-de-cajamarca", "queso-y-productos-lacteos-cajamarca", "comida-tipica-de-cajamarca"],
    es: {
      metaTitle: "Queso helado de Cajamarca: el postre de leche",
      metaDescription:
        "Queso helado de Cajamarca: el dulce de leche típico de la plaza, su origen y dónde probarlo.",
      h1: "Queso helado de Cajamarca",
      lead: "El queso helado es el postre más conocido de Cajamarca: un dulce cremoso de leche, canela y otros ingredientes, que se sirve frío en la Plaza de Armas. A pesar del nombre, no lleva queso.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Qué es",
          paragraphs: [
            "Es un postre de leche batida y enfriada, con sabor a canela y a veces frutos secos. Se vende en vaso, frío, en puestos de la plaza y el mercado.",
          ],
          bullets: ["No contiene queso.", "Pida el vaso bien frío."],
        },
        {
          heading: "Por qué famoso",
          paragraphs: [
            "Cajamarca es tierra de leche, y este dulce se volvió su imagen dulce. Las familias cajamarquinas lo preparan de generación en generación.",
          ],
          bullets: ["Pruebe versión casera.", "Varía según quien lo haga."],
        },
        {
          heading: "Dónde probarlo",
          paragraphs: [
            "Los puestos de la Plaza de Armas y el Mercado Central lo ofrecen todo el año. Es un antojo típico al caminar el centro.",
          ],
          bullets: ["Camine y pruebe.", "Confirme el precio por vaso."],
        },
      ],
      faqs: [
        {
          question: "¿Lleva queso?",
          answer: "No; es un dulce de leche, el nombre engaña.",
        },
        {
          question: "¿De qué sabe?",
          answer: "A leche y canela, cremoso y frío.",
        },
        {
          question: "¿Dónde lo venden?",
          answer: "Plaza de Armas y Mercado Central.",
        },
        {
          question: "¿Todo el año?",
          answer: "Sí, es típico en cualquier época.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer: "Varía por puesto; confirme antes de comprar.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca queso helado: the milk dessert",
      metaDescription:
        "Cajamarca queso helado: the typical milk sweet of the square, its origin and where to try it.",
      h1: "Cajamarca queso helado",
      lead: "Queso helado is Cajamarca's best-known dessert: a creamy milk sweet, with cinnamon and other ingredients, served cold on the Plaza de Armas. Despite the name, it has no cheese.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "What it is",
          paragraphs: [
            "It is a beaten, chilled milk dessert, with cinnamon and sometimes nuts. Sold cold in a cup at square and market stalls.",
          ],
          bullets: ["Contains no cheese.", "Ask for it well chilled."],
        },
        {
          heading: "Why famous",
          paragraphs: [
            "Cajamarca is dairy country, and this sweet became its sweet image. Cajamarca families prepare it generation after generation.",
          ],
          bullets: ["Try the homemade version.", "It varies by who makes it."],
        },
        {
          heading: "Where to try",
          paragraphs: [
            "The Plaza de Armas stalls and Central Market offer it all year. It is a typical treat while walking the centre.",
          ],
          bullets: ["Walk and taste.", "Confirm the price per cup."],
        },
      ],
      faqs: [
        {
          question: "Does it have cheese?",
          answer: "No; it is a milk sweet, the name misleads.",
        },
        {
          question: "What does it taste like?",
          answer: "Milk and cinnamon, creamy and cold.",
        },
        {
          question: "Where is it sold?",
          answer: "Plaza de Armas and Central Market.",
        },
        {
          question: "All year?",
          answer: "Yes, typical any time.",
        },
        {
          question: "How much does it cost?",
          answer: "Varies by stall; confirm before buying.",
        },
      ],
    },
  },

  // 46 — Ruta de Porcón
  {
    slug: "ruta-de-porcon",
    group: "rutas",
    related: ["granja-porcon", "ruta-del-queso", "cajamarca-en-3-dias"],
    es: {
      metaTitle: "Ruta de Porcón: turismo rural cerca de Cajamarca",
      metaDescription:
        "Ruta de Porcón: el circuito de turismo rural con Granja Porcón, naturaleza y contacto con animales.",
      h1: "Ruta de Porcón",
      lead: "La ruta de Porcón lleva al turismo rural de la zona: comunidades de campo, bosques de pino y la Granja Porcón, donde se combinan naturaleza, animales y leche.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El recorrido",
          paragraphs: [
            "Se sale del centro hacia las comunidades de Porcón. La Granja Porcón es la parada principal: crianza, senderos y actividades al aire libre.",
          ],
          bullets: ["Vaya en vehículo o tour.", "Confirme horarios de visita."],
        },
        {
          heading: "Qué hacer",
          paragraphs: [
            "Caminar por los pinares, ver animales de granja y probar productos lácteos. Es ideal para familias y quienes buscan campo.",
          ],
          bullets: ["Lleve abrigo, hace frío.", "Calzado de campo recomendado."],
        },
        {
          heading: "Cómo combinarla",
          paragraphs: [
            "Se une bien con la ruta del queso, ya que ambas son circuitos de campo alrededor de la ciudad. Una mañana o un día completo alcanza.",
          ],
          bullets: ["Reserve tiempo de traslado.", "Empiece temprano."],
        },
      ],
      faqs: [
        {
          question: "¿Qué es la ruta de Porcón?",
          answer: "El circuito de turismo rural hacia Granja Porcón.",
        },
        {
          question: "¿Se visita Granja Porcón?",
          answer: "Sí, es la parada principal.",
        },
        {
          question: "¿Conviene con niños?",
          answer: "Sí, hay animales y senderos fáciles.",
        },
        {
          question: "¿En transporte público?",
          answer: "Es más práctico en tour o vehículo.",
        },
        {
          question: "¿Cuánto tiempo?",
          answer: "Una mañana o un día con la ruta del queso.",
        },
      ],
    },
    en: {
      metaTitle: "Porcón route: rural tourism near Cajamarca",
      metaDescription:
        "Porcón route: the rural tourism circuit with Granja Porcón, nature and animal contact.",
      h1: "Porcón route",
      lead: "The Porcón route goes to the area's rural tourism: countryside communities, pine forests and Granja Porcón, where nature, animals and dairy come together.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The route",
          paragraphs: [
            "You leave the centre for the Porcón communities. Granja Porcón is the main stop: farming, trails and outdoor activities.",
          ],
          bullets: ["Go by vehicle or tour.", "Confirm visiting hours."],
        },
        {
          heading: "What to do",
          paragraphs: [
            "Walk the pine woods, see farm animals and taste dairy products. Great for families and nature seekers.",
          ],
          bullets: ["Bring warm clothing, it is cold.", "Country shoes recommended."],
        },
        {
          heading: "How to combine",
          paragraphs: [
            "It pairs well with the cheese route, both countryside circuits around the city. A morning or a full day is enough.",
          ],
          bullets: ["Allow transfer time.", "Start early."],
        },
      ],
      faqs: [
        {
          question: "What is the Porcón route?",
          answer: "The rural tourism circuit to Granja Porcón.",
        },
        {
          question: "Visit Granja Porcón?",
          answer: "Yes, it is the main stop.",
        },
        {
          question: "Good with kids?",
          answer: "Yes, animals and easy trails.",
        },
        {
          question: "By public transport?",
          answer: "A tour or vehicle is more practical.",
        },
        {
          question: "How long?",
          answer: "A morning or a day with the cheese route.",
        },
      ],
    },
  },

  // 47 — Ruta de Cumbemayo
  {
    slug: "ruta-de-cumbemayo",
    group: "rutas",
    related: ["cumbe-mayo", "los-frailones-cumbemayo", "circuito-arqueologico"],
    es: {
      metaTitle: "Ruta de Cumbemayo: acueducto, petroglifos y Frailones",
      metaDescription:
        "Ruta de Cumbemayo: el acueducto preinca, los petroglifos y Los Frailones en media jornada desde Cajamarca.",
      h1: "Ruta de Cumbemayo",
      lead: "La ruta de Cumbemayo reúne el acueducto preinca, los petroglifos y las formaciones de Los Frailones. Es una salida de medio día que combina arqueología y naturaleza.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El acueducto",
          paragraphs: [
            "Es una obra hidráulica preinca que aún canaliza agua por la montaña. Se camina junto a ella en un sendero de altura.",
          ],
          bullets: ["Lleve abrigo y agua.", "Vaya despacio por la altura."],
        },
        {
          heading: "Petroglifos y Frailones",
          paragraphs: [
            "Las piedras con grabados y las rocas de Los Frailones están en el mismo recorrido. Son testimonio de la presencia humana y de la erosión natural.",
          ],
          bullets: ["No toque ni suba las rocas.", "Respete el sitio arqueológico."],
        },
        {
          heading: "Cómo visitar",
          paragraphs: [
            "Queda a unos kilómetros de la ciudad. Se va en vehículo o tour; una mañana alcanza para recorrerlo con calma.",
          ],
          bullets: ["Confirme acceso y horarios.", "Vuelva antes del mediodía si puede."],
        },
      ],
      faqs: [
        {
          question: "¿Qué se ve en Cumbemayo?",
          answer: "Acueducto, petroglifos y Los Frailones.",
        },
        {
          question: "¿Cuánto dura?",
          answer: "Media jornada desde la ciudad.",
        },
        {
          question: "¿Se llega a pie?",
          answer: "No; queda lejos del centro, en vehículo o tour.",
        },
        {
          question: "¿Afecta la altura?",
          answer: "Sí, vaya despacio y con abrigo.",
        },
        {
          question: "¿Guía necesario?",
          answer: "No, pero ayuda a entender el acueducto.",
        },
      ],
    },
    en: {
      metaTitle: "Cumbemayo route: aqueduct, petroglyphs & Frailones",
      metaDescription:
        "Cumbemayo route: the pre-Inca aqueduct, petroglyphs and the Frailones in a half day from Cajamarca.",
      h1: "Cumbemayo route",
      lead: "The Cumbemayo route gathers the pre-Inca aqueduct, the petroglyphs and the Frailones formations. It is a half-day trip mixing archaeology and nature.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The aqueduct",
          paragraphs: [
            "It is a pre-Inca hydraulic work that still channels water along the mountain. You walk beside it on a highland trail.",
          ],
          bullets: ["Bring warm clothing and water.", "Go slowly for the altitude."],
        },
        {
          heading: "Petroglyphs and Frailones",
          paragraphs: [
            "The carved stones and the Frailones rocks are on the same route. They show human presence and natural erosion.",
          ],
          bullets: ["Do not touch or climb the rocks.", "Respect the archaeological site."],
        },
        {
          heading: "How to visit",
          paragraphs: [
            "It lies a few kilometres from the city. Go by vehicle or tour; a morning is enough to tour it calmly.",
          ],
          bullets: ["Confirm access and hours.", "Return before noon if you can."],
        },
      ],
      faqs: [
        {
          question: "What is seen at Cumbemayo?",
          answer: "Aqueduct, petroglyphs and the Frailones.",
        },
        {
          question: "How long?",
          answer: "Half a day from the city.",
        },
        {
          question: "On foot?",
          answer: "No; it is far from the centre, by vehicle or tour.",
        },
        {
          question: "Altitude matters?",
          answer: "Yes, go slowly and with warm clothing.",
        },
        {
          question: "Guide needed?",
          answer: "No, but it helps understand the aqueduct.",
        },
      ],
    },
  },

  // 48 — Ruta gastronómica de Cajamarca
  {
    slug: "ruta-gastronomica-cajamarca",
    group: "rutas",
    related: ["comida-tipica-de-cajamarca", "ruta-del-queso", "mercado-central-de-cajamarca"],
    es: {
      metaTitle: "Ruta gastronómica de Cajamarca: dónde comer",
      metaDescription:
        "Ruta gastronómica de Cajamarca: del mercado y la plaza a la ruta del queso, para probar lo típico de la ciudad.",
      h1: "Ruta gastronómica de Cajamarca",
      lead: "Cajamarca se recorre también por el plato: desde el Mercado Central y la Plaza de Armas hasta la ruta del queso. Esta ruta une lo típico, la leche y el mercado.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Mercado y plaza",
          paragraphs: [
            "Empiece en el Mercado Central para el menú del día y los dulces, y siga a la Plaza de Armas para el queso helado y la comida típica.",
          ],
          bullets: ["Pruebe porciones pequeñas.", "Confirme precios al pedir."],
        },
        {
          heading: "Hacia el queso",
          paragraphs: [
            "Añada la ruta del queso para conocer haciendas y queserías, y probar queso fresco, manjar blanco y mantequilla directo de productor.",
          ],
          bullets: ["Lleve cooler para compras.", "Vaya en vehículo o tour."],
        },
        {
          heading: "Consejos",
          paragraphs: [
            "Combine lo urbano y lo rural en un mismo día si le alcanza el tiempo. La altura y el frío son parte de la experiencia.",
          ],
          bullets: ["Hidrátese.", "Lleve abrigo para la tarde."],
        },
      ],
      faqs: [
        {
          question: "¿Por dónde empezar?",
          answer: "Mercado Central y Plaza de Armas.",
        },
        {
          question: "¿Incluir la ruta del queso?",
          answer: "Sí, cierra el recorrido gastronómico.",
        },
        {
          question: "¿Se hace en un día?",
          answer: "Sí, uniendo centro y campo.",
        },
        {
          question: "¿Qué probar?",
          answer: "Cuy, humitas, queso helado y queso fresco.",
        },
        {
          question: "¿Llevar dinero?",
          answer: "Lleve efectivo para el mercado y las queserías.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca food route: where to eat",
      metaDescription:
        "Cajamarca food route: from market and square to the cheese route, to taste the city's typical food.",
      h1: "Cajamarca food route",
      lead: "Cajamarca is also toured by the plate: from the Central Market and Plaza de Armas to the cheese route. This route unites typical food, dairy and the market.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Market and square",
          paragraphs: [
            "Start at the Central Market for the set lunch and sweets, then go to the Plaza de Armas for queso helado and typical food.",
          ],
          bullets: ["Try small portions.", "Confirm prices when ordering."],
        },
        {
          heading: "Towards cheese",
          paragraphs: [
            "Add the cheese route to see haciendas and dairies, and taste fresh cheese, manjar blanco and butter direct from producer.",
          ],
          bullets: ["Bring a cooler for purchases.", "Go by vehicle or tour."],
        },
        {
          heading: "Tips",
          paragraphs: [
            "Combine urban and rural in one day if time allows. Altitude and cold are part of the experience.",
          ],
          bullets: ["Stay hydrated.", "Bring warm clothing for the afternoon."],
        },
      ],
      faqs: [
        {
          question: "Where to start?",
          answer: "Central Market and Plaza de Armas.",
        },
        {
          question: "Include the cheese route?",
          answer: "Yes, it closes the food tour.",
        },
        {
          question: "Done in a day?",
          answer: "Yes, joining centre and countryside.",
        },
        {
          question: "What to taste?",
          answer: "Cuy, humitas, queso helado and fresh cheese.",
        },
        {
          question: "Bring money?",
          answer: "Carry cash for the market and dairies.",
        },
      ],
    },
  },

  // 49 — Qué llevar a Cajamarca
  {
    slug: "que-llevar-a-cajamarca",
    group: "visita",
    related: ["altura-y-soroche-en-cajamarca", "clima-en-cajamarca", "como-moverse-en-cajamarca"],
    es: {
      metaTitle: "Qué llevar a Cajamarca: lista práctica de equipaje",
      metaDescription:
        "Qué llevar a Cajamarca: ropa de abrigo por la altura y el frío, sol fuerte, calzado cómodo y efectivo para el mercado y las entradas.",
      h1: "Qué llevar a Cajamarca",
      lead: "Cajamarca está a unos 2.700 m y el clima sierra cambia rápido entre el día soleado y la noche fría. Una maleta con capas, sol y calzado cómodo cubre casi todo el viaje.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Ropa y abrigo",
          paragraphs: [
            "Lleve ropa en capas: una base, un polar o chaqueta y un cortaviento. La tarde y la noche en sierra refrescan pese al sol del día.",
          ],
          bullets: ["Sombrero o gorra para el sol.", "Una chaqueta térmica ocupa poco y ayuda."],
        },
        {
          heading: "Sol, calzado y salud",
          paragraphs: [
            "A la altura el sol es fuerte: protector solar, lentes y labial. Para caminar la ciudad y los sitios, zapatillas cómodas o botas ligeras de campo.",
          ],
          bullets: ["Lleve sus medicamentos habituales.", "La altura puede pedir descanso el primer día."],
        },
        {
          heading: "Dinero y carga",
          paragraphs: [
            "En el mercado, las queserías y las entradas rurales el efectivo sigue siendo práctico. Una mochila ligera y una botella reutilizable completan el equipo.",
          ],
          bullets: ["Lleve efectivo en pequeñas denominaciones.", "Bolsa térmica si compra lácteos."],
        },
      ],
      faqs: [
        {
          question: "¿Hace falta abrigo?",
          answer: "Sí; la noche en sierra es fría aunque el día esté soleado.",
        },
        {
          question: "¿Protector solar?",
          answer: "Sí, el sol de altura es intenso.",
        },
        {
          question: "¿Calzado especial?",
          answer: "Zapatillas cómodas para la ciudad; botas ligeras si sale al campo.",
        },
        {
          question: "¿Se paga en efectivo?",
          answer: "En mercado y entradas rurales, sí; lleve efectivo.",
        },
        {
          question: "¿Llevar botella de agua?",
          answer: "Sí, para hidratarse con la altura.",
        },
      ],
    },
    en: {
      metaTitle: "What to pack for Cajamarca: practical checklist",
      metaDescription:
        "What to pack for Cajamarca: warm layers for altitude and cold, strong sun, comfortable shoes and cash for the market and fees.",
      h1: "What to pack for Cajamarca",
      lead: "Cajamarca sits around 2,700 m and the highland weather shifts fast between sunny days and cold nights. A bag with layers, sun protection and comfortable shoes covers almost the whole trip.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Clothing and warmth",
          paragraphs: [
            "Bring layers: a base, a fleece or jacket and a windbreaker. Afternoons and nights in the highlands cool down despite the daytime sun.",
          ],
          bullets: ["A cap or hat for the sun.", "A thermal jacket packs small and helps."],
        },
        {
          heading: "Sun, shoes and health",
          paragraphs: [
            "At altitude the sun is strong: sunscreen, sunglasses and lip balm. For the city and sites, comfortable sneakers or light country boots.",
          ],
          bullets: ["Bring your usual medication.", "Altitude may call for rest on day one."],
        },
        {
          heading: "Money and gear",
          paragraphs: [
            "At the market, dairies and rural entrances cash is still handy. A light backpack and a reusable bottle complete the kit.",
          ],
          bullets: ["Carry small cash denominations.", "A cooler bag if buying dairy."],
        },
      ],
      faqs: [
        {
          question: "Need warm clothing?",
          answer: "Yes; highland nights are cold even when the day is sunny.",
        },
        {
          question: "Sunscreen?",
          answer: "Yes, the high-altitude sun is intense.",
        },
        {
          question: "Special shoes?",
          answer: "Comfortable sneakers for the city; light boots if going to the countryside.",
        },
        {
          question: "Pay in cash?",
          answer: "At market and rural entrances, yes; carry cash.",
        },
        {
          question: "Bring a water bottle?",
          answer: "Yes, to stay hydrated at altitude.",
        },
      ],
    },
  },

  // 50 — Dónde fotografiar en Cajamarca
  {
    slug: "donde-fotografiar-en-cajamarca",
    group: "visita",
    related: ["plaza-de-armas", "cerro-santa-apolonia", "cumbe-mayo"],
    es: {
      metaTitle: "Dónde fotografiar en Cajamarca: miradores y rincones",
      metaDescription:
        "Dónde fotografiar en Cajamarca: la Plaza de Armas, el Cerro Santa Apolonia, Cumbemayo y rincones del centro histórico.",
      h1: "Dónde fotografiar en Cajamarca",
      lead: "La ciudad mezcla arquitectura colonial, miradores y paisaje de sierra, ideal para fotos. Aquí los rincones con mejor luz y ángulo.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El centro histórico",
          paragraphs: [
            "La Plaza de Armas con la Catedral y los portales es el encuadre clásico. Las calles empedradas y los balcones coloniales dan fotos de color todo el día.",
          ],
          bullets: ["La luz de mañana es suave.", "Las tardes dan largas sombras."],
        },
        {
          heading: "Miradores y alrededores",
          paragraphs: [
            "El Cerro Santa Apolonia entrega la vista panorámica de la ciudad y el valle. Cumbemayo suma el acueducto, los petroglifos y Los Frailones.",
          ],
          bullets: ["Suba al cerro al atardecer.", "Lleve abrigo, sopla viento."],
        },
        {
          heading: "Consejos de luz",
          paragraphs: [
            "En sierra el sol es fuerte y la sombra, dura; evite el mediodía para retratos y prefiera bordes del día. Proteja el equipo del polvo de campo.",
          ],
          bullets: ["Lleve una capa o paño.", "Batería extra, el frío gasta."],
        },
      ],
      faqs: [
        {
          question: "¿Mejor horario?",
          answer: "Mañana y atardecer para luz suave.",
        },
        {
          question: "¿La plaza se fotografía bien?",
          answer: "Sí, con la Catedral de fondo es el encuadre clásico.",
        },
        {
          question: "¿El cerro vale la pena?",
          answer: "Sí, por la vista panorámica de la ciudad.",
        },
        {
          question: "¿Cumbemayo para fotos?",
          answer: "Sí, acueducto, petroglifos y Frailones.",
        },
        {
          question: "¿Cuidado con el sol?",
          answer: "Sí, luz fuerte; proteja ojos y equipo.",
        },
      ],
    },
    en: {
      metaTitle: "Where to photograph in Cajamarca: viewpoints & spots",
      metaDescription:
        "Where to photograph in Cajamarca: the Plaza de Armas, Cerro Santa Apolonia, Cumbemayo and corners of the historic centre.",
      h1: "Where to photograph in Cajamarca",
      lead: "The city blends colonial architecture, viewpoints and highland scenery, great for photos. Here are the corners with the best light and angle.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The historic centre",
          paragraphs: [
            "The Plaza de Armas with the cathedral and arcades is the classic frame. Cobbled streets and colonial balconies give colourful shots all day.",
          ],
          bullets: ["Morning light is soft.", "Afternoons cast long shadows."],
        },
        {
          heading: "Viewpoints and surroundings",
          paragraphs: [
            "Cerro Santa Apolonia gives the panorama of the city and valley. Cumbemayo adds the aqueduct, petroglyphs and the Frailones.",
          ],
          bullets: ["Climb the hill at sunset.", "Bring warm clothing, it is windy."],
        },
        {
          heading: "Light tips",
          paragraphs: [
            "In the highlands the sun is strong and shadow is hard; avoid midday for portraits and prefer the edges of the day. Protect gear from field dust.",
          ],
          bullets: ["Bring a cloth cover.", "Spare battery, the cold drains it."],
        },
      ],
      faqs: [
        {
          question: "Best time?",
          answer: "Morning and sunset for soft light.",
        },
        {
          question: "Is the square good to shoot?",
          answer: "Yes, with the cathedral behind it is the classic frame.",
        },
        {
          question: "Worth the hill?",
          answer: "Yes, for the city panorama.",
        },
        {
          question: "Cumbemayo for photos?",
          answer: "Yes, aqueduct, petroglyphs and Frailones.",
        },
        {
          question: "Sun a concern?",
          answer: "Yes, strong light; protect eyes and gear.",
        },
      ],
    },
  },

  // 51 — Pueblos cercanos a Cajamarca
  {
    slug: "cajamarca-pueblos-cercanos",
    group: "lugares",
    related: ["granja-porcon", "banos-del-inca", "ruta-de-porcon"],
    es: {
      metaTitle: "Pueblos cercanos a Cajamarca: excursiones rurales",
      metaDescription:
        "Pueblos cercanos a Cajamarca: comunidades y zonas rurales como Porcón, el distrito de Baños del Inca y pueblos de la periferia.",
      h1: "Pueblos cercanos a Cajamarca",
      lead: "Además de la ciudad, la provincia ofrece comunidades y pueblos rurales para una salida de medio día o un día. Se visitan en vehículo o tour desde el centro.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Comunidades de campo",
          paragraphs: [
            "Porcón es la más conocida por el turismo rural y los pinares. Otras comunidades y pueblos de la periferia mantienen el ritmo agrícola y ganadero de la sierra.",
          ],
          bullets: ["Vaya en vehículo o tour.", "Confirme distancias y caminos."],
        },
        {
          heading: "Baños del Inca y alrededores",
          paragraphs: [
            "El distrito de Baños del Inca, a pocos kilómetros, combina termas y pueblos de valle. Es una base común para recorrer la zona.",
          ],
          bullets: ["Suma termas al paseo.", "Lleve abrigo en la tarde."],
        },
        {
          heading: "Consejos",
          paragraphs: [
            "Los servicios fuera del centro son limitados; lleve efectivo, agua y abrigo. Confirme con anticipación qué pueblos reciben visitas.",
          ],
          bullets: ["Salga temprano.", "Respete la vida local."],
        },
      ],
      faqs: [
        {
          question: "¿Qué pueblos visitar?",
          answer: "Porcón y las zonas rurales cerca de Baños del Inca son las más accesibles.",
        },
        {
          question: "¿Se llega en transporte público?",
          answer: "Es más práctico en tour o vehículo.",
        },
        {
          question: "¿Cuánto tiempo?",
          answer: "Una salida de medio día o un día completo.",
        },
        {
          question: "¿Hay servicios?",
          answer: "Limitados fuera del centro; lleve efectivo y abrigo.",
        },
        {
          question: "¿Apta para todos?",
          answer: "Depende del pueblo; confirme accesos antes de ir.",
        },
      ],
    },
    en: {
      metaTitle: "Towns near Cajamarca: rural day trips",
      metaDescription:
        "Towns near Cajamarca: communities and rural areas like Porcón, the Baños del Inca district and peripheral villages.",
      h1: "Towns near Cajamarca",
      lead: "Beyond the city, the province offers communities and rural villages for a half-day or full-day outing. They are visited by vehicle or tour from the centre.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Country communities",
          paragraphs: [
            "Porcón is the best known for rural tourism and pine woods. Other communities and peripheral villages keep the highland farming and livestock rhythm.",
          ],
          bullets: ["Go by vehicle or tour.", "Confirm distances and roads."],
        },
        {
          heading: "Baños del Inca and around",
          paragraphs: [
            "The Baños del Inca district, a few kilometres away, mixes hot springs and valley villages. It is a common base to tour the area.",
          ],
          bullets: ["Add springs to the outing.", "Bring warm clothing in the afternoon."],
        },
        {
          heading: "Tips",
          paragraphs: [
            "Services outside the centre are limited; carry cash, water and warm clothing. Confirm in advance which villages welcome visits.",
          ],
          bullets: ["Leave early.", "Respect local life."],
        },
      ],
      faqs: [
        {
          question: "Which towns to visit?",
          answer: "Porcón and the rural areas near Baños del Inca are the most accessible.",
        },
        {
          question: "Reachable by public transport?",
          answer: "A tour or vehicle is more practical.",
        },
        {
          question: "How long?",
          answer: "A half-day outing or a full day.",
        },
        {
          question: "Are there services?",
          answer: "Limited outside the centre; bring cash and warm clothing.",
        },
        {
          question: "Suitable for everyone?",
          answer: "Depends on the village; confirm access before going.",
        },
      ],
    },
  },

  // 52 — Qué hacer gratis en Cajamarca
  {
    slug: "que-hacer-gratis-en-cajamarca",
    group: "visita",
    related: ["plaza-de-armas", "cerro-santa-apolonia", "cajamarca-en-un-dia"],
    es: {
      metaTitle: "Qué hacer gratis en Cajamarca: planes sin costo",
      metaDescription:
        "Qué hacer gratis en Cajamarca: caminar la Plaza de Armas, el Cerro Santa Apolonia y el centro histórico sin gastar en entradas.",
      h1: "Qué hacer gratis en Cajamarca",
      lead: "Varias experiencias de la ciudad no cobran entrada: pasear el centro, la plaza y los miradores públicos se disfrutan sin gastar. Aquí los planes de costo cero.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "Caminar el centro",
          paragraphs: [
            "La Plaza de Armas, sus portales y las calles del centro histórico se recorren a pie y sin costo. Es el plan más sencillo y agradable.",
          ],
          bullets: ["Lleve calzado cómodo.", "El entorno es peatonal de día."],
        },
        {
          heading: "Miradores públicos",
          paragraphs: [
            "El Cerro Santa Apolonia es de acceso público y entrega la mejor vista de la ciudad. Confirmado el acceso, la caminata no tiene costo de entrada.",
          ],
          bullets: ["Vaya temprano o al atardecer.", "Lleve abrigo, hace frío arriba."],
        },
        {
          heading: "Consejos de presupuesto",
          paragraphs: [
            "Los museos y sitios arqueológicos suelen cobrar por separado; para un día sin gastar, combine plaza, centro y miradores. El mercado es ideal para mirar y comprar poco.",
          ],
          bullets: ["Lleve agua.", "Guarde recibos si compra."],
        },
      ],
      faqs: [
        {
          question: "¿La plaza es gratis?",
          answer: "Sí, es espacio público y se recorre sin costo.",
        },
        {
          question: "¿El cerro cuesta?",
          answer: "Es de acceso público; confirme cualquier servicio local.",
        },
        {
          question: "¿Qué sí paga?",
          answer: "Museos y sitios arqueológicos suelen cobrar aparte.",
        },
        {
          question: "¿Un día gratis posible?",
          answer: "Sí: plaza, centro y mirador alcanzan.",
        },
        {
          question: "¿El mercado es gratis?",
          answer: "Mirar es gratis; comprar ya es gasto.",
        },
      ],
    },
    en: {
      metaTitle: "Free things to do in Cajamarca",
      metaDescription:
        "Free things to do in Cajamarca: walk the Plaza de Armas, Cerro Santa Apolonia and the historic centre without paying entry.",
      h1: "Free things to do in Cajamarca",
      lead: "Several city experiences charge no entry: walking the centre, the square and public viewpoints costs nothing. Here are the zero-cost plans.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "Walk the centre",
          paragraphs: [
            "The Plaza de Armas, its arcades and the historic-centre streets are walked on foot and free. It is the simplest, nicest plan.",
          ],
          bullets: ["Wear comfortable shoes.", "The area is pedestrian by day."],
        },
        {
          heading: "Public viewpoints",
          paragraphs: [
            "Cerro Santa Apolonia is public access and gives the best city view. Once access is confirmed, the walk has no entry cost.",
          ],
          bullets: ["Go early or at sunset.", "Bring warm clothing, it is cold up top."],
        },
        {
          heading: "Budget tips",
          paragraphs: [
            "Museums and archaeological sites usually charge separately; for a no-spend day, combine square, centre and viewpoints. The market is great to browse and buy little.",
          ],
          bullets: ["Bring water.", "Keep receipts if you buy."],
        },
      ],
      faqs: [
        {
          question: "Is the square free?",
          answer: "Yes, it is public space and costs nothing to walk.",
        },
        {
          question: "Does the hill cost?",
          answer: "It is public access; confirm any local service.",
        },
        {
          question: "What does cost?",
          answer: "Museums and archaeological sites usually charge apart.",
        },
        {
          question: "A free day possible?",
          answer: "Yes: square, centre and viewpoint are enough.",
        },
        {
          question: "Is the market free?",
          answer: "Browsing is free; buying is the expense.",
        },
      ],
    },
  },

  // 53 — Cajamarca para adultos mayores
  {
    slug: "cajamarca-para-adultos-mayores",
    group: "visita",
    related: ["altura-y-soroche-en-cajamarca", "como-moverse-en-cajamarca", "donde-dormir-en-cajamarca"],
    es: {
      metaTitle: "Cajamarca para adultos mayores: cómo visitar con calma",
      metaDescription:
        "Cajamarca para adultos mayores: el centro plano y caminable, precaución de altura y taxis para los sitios lejanos.",
      h1: "Cajamarca para adultos mayores",
      lead: "El centro de Cajamarca es plano y se recorre a pie, lo que facilita la visita a un ritmo tranquilo. La altura pide precaución, pero con pausas el viaje es cómodo.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "El centro a pie",
          paragraphs: [
            "La Plaza de Armas y sus alrededores son planos y peatonales. Una caminata corta une catedral, museos y el paseo sin esfuerzo mayor.",
          ],
          bullets: ["Haga pausas cada pocas cuadras.", "Lleve agua."],
        },
        {
          heading: "Altura y descanso",
          paragraphs: [
            "A cerca de 2.700 m, conviene un primer día ligero y dormir bien. Hidrátese y no fuerce el paso en las primeras horas.",
          ],
          bullets: ["Descanse el día de llegada.", "Suba al cerro con calma."],
        },
        {
          heading: "Moverse con comodidad",
          paragraphs: [
            "Para sitios fuera del centro, taxi o tour evitan largas caminatas. Confirme accesibilidad en cada lugar antes de ir.",
          ],
          bullets: ["Prefiera el centro como base.", "Lleve abrigo para la tarde."],
        },
      ],
      faqs: [
        {
          question: "¿El centro es plano?",
          answer: "Sí, es llano y peatonal, ideal para caminar despacio.",
        },
        {
          question: "¿Afecta la altura?",
          answer: "Puede; descanse el primer día y camine a su ritmo.",
        },
        {
          question: "¿Cómo ir a sitios lejanos?",
          answer: "Taxi o tour, para evitar caminatas largas.",
        },
        {
          question: "¿El cerro es apto?",
          answer: "Las escaleras exigen; vaya despacio o prefiera la plaza.",
        },
        {
          question: "¿Dónde dormir?",
          answer: "El centro, por cercanía a todo a pie.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca for seniors: how to visit at ease",
      metaDescription:
        "Cajamarca for seniors: the flat, walkable centre, altitude caution and taxis for far sites.",
      h1: "Cajamarca for seniors",
      lead: "Cajamarca's centre is flat and walkable, which makes the visit easy at a calm pace. Altitude calls for care, but with breaks the trip is comfortable.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "The centre on foot",
          paragraphs: [
            "The Plaza de Armas and surroundings are flat and pedestrian. A short walk links the cathedral, museums and the promenade without much effort.",
          ],
          bullets: ["Take breaks every few blocks.", "Bring water."],
        },
        {
          heading: "Altitude and rest",
          paragraphs: [
            "At about 2,700 m, a light first day and good sleep help. Stay hydrated and do not push the pace in the first hours.",
          ],
          bullets: ["Rest on arrival day.", "Climb the hill calmly."],
        },
        {
          heading: "Getting around comfortably",
          paragraphs: [
            "For sites outside the centre, taxi or tour avoid long walks. Confirm accessibility at each place before going.",
          ],
          bullets: ["Prefer the centre as a base.", "Bring warm clothing for the afternoon."],
        },
      ],
      faqs: [
        {
          question: "Is the centre flat?",
          answer: "Yes, it is level and pedestrian, ideal for slow walking.",
        },
        {
          question: "Does altitude matter?",
          answer: "It can; rest on day one and walk at your pace.",
        },
        {
          question: "How to reach far sites?",
          answer: "Taxi or tour, to avoid long walks.",
        },
        {
          question: "Is the hill suitable?",
          answer: "The stairs demand; go slow or prefer the square.",
        },
        {
          question: "Where to stay?",
          answer: "The centre, for walking proximity to everything.",
        },
      ],
    },
  },

  // 54 — Cajamarca con mascotas
  {
    slug: "cajamarca-con-mascotas",
    group: "visita",
    related: ["granja-porcon", "cajamarca-con-ninos", "cajamarca-en-un-dia"],
    es: {
      metaTitle: "Cajamarca con mascotas: consejos para viajar con tu perro",
      metaDescription:
        "Cajamarca con mascotas: pasear la plaza y el centro con tu perro, y qué confirmar en cada sitio y hospedaje.",
      h1: "Cajamarca con mascotas",
      lead: "El centro y la plaza son espacios públicos donde pasear con un perro a la correa suele ser bienvenido. Los sitios cerrados y el hospedaje tienen reglas propias que conviene confirmar.",
      updated: "1 de noviembre de 2026",
      sections: [
        {
          heading: "En el centro y la plaza",
          paragraphs: [
            "Las calles y la Plaza de Armas permiten caminar con tu perro a la correa. Lleve bolsas para recoger y agua para él.",
          ],
          bullets: ["Use correa siempre.", "Recoga y deseche adecuadamente."],
        },
        {
          heading: "Sitios y hospedaje",
          paragraphs: [
            "Museos, recintos y algunos restaurantes pueden no admitir mascotas. El hospedaje varía: confirme la política de mascotas al reservar.",
          ],
          bullets: ["Pregunte antes de entrar.", "Lleve su cama o manta."],
        },
        {
          heading: "Campo y altura",
          paragraphs: [
            "En salidas rurales, el frío y el terreno exigen cuidado. Mantenga a la mascota cerca y vigile su estado con la altura y el sol.",
          ],
          bullets: ["Lleve agua para él.", "Evite horas de sol fuerte."],
        },
      ],
      faqs: [
        {
          question: "¿Se puede pasear la plaza?",
          answer: "Sí, con el perro a la correa en el espacio público.",
        },
        {
          question: "¿Entran a museos?",
          answer: "No siempre; confirme la política de cada sitio.",
        },
        {
          question: "¿Los hoteles admiten?",
          answer: "Varía; pregunte al reservar.",
        },
        {
          question: "¿Afecta la altura?",
          answer: "Cuide su estado; hidrátelo y no lo fuerce.",
        },
        {
          question: "¿Qué llevar?",
          answer: "Correa, bolsas, agua y su cama.",
        },
      ],
    },
    en: {
      metaTitle: "Cajamarca with pets: tips for travelling with your dog",
      metaDescription:
        "Cajamarca with pets: walk the square and centre with your dog, and what to confirm at each site and lodging.",
      h1: "Cajamarca with pets",
      lead: "The centre and square are public spaces where walking a leashed dog is usually welcome. Indoor sites and lodging have their own rules worth confirming.",
      updated: "November 1, 2026",
      sections: [
        {
          heading: "In the centre and square",
          paragraphs: [
            "Streets and the Plaza de Armas let you walk your leashed dog. Bring bags to pick up and water for him.",
          ],
          bullets: ["Always use a leash.", "Pick up and dispose properly."],
        },
        {
          heading: "Sites and lodging",
          paragraphs: [
            "Museums, enclosures and some restaurants may not admit pets. Lodging varies: confirm the pet policy when booking.",
          ],
          bullets: ["Ask before entering.", "Bring his bed or blanket."],
        },
        {
          heading: "Countryside and altitude",
          paragraphs: [
            "On rural outings, cold and terrain demand care. Keep the pet close and watch his condition with altitude and sun.",
          ],
          bullets: ["Bring water for him.", "Avoid strong-sun hours."],
        },
      ],
      faqs: [
        {
          question: "Can you walk the square?",
          answer: "Yes, with the dog leashed in public space.",
        },
        {
          question: "Do they enter museums?",
          answer: "Not always; confirm each site's policy.",
        },
        {
          question: "Do hotels admit?",
          answer: "It varies; ask when booking.",
        },
        {
          question: "Does altitude matter?",
          answer: "Watch his condition; hydrate and do not push him.",
        },
        {
          question: "What to bring?",
          answer: "Leash, bags, water and his bed.",
        },
      ],
    },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByGroup(group: GroupKey): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

export function topicUrl(topic: Topic, lang: "es" | "en"): string {
  const base = lang === "es" ? "" : "/en";
  return `${base}/${topic.group}/${topic.slug}/`;
}
