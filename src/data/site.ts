import heroWinter from '../assets/hotel/01-hero-winter-exterior-16x9.jpg';
import heroSummer from '../assets/hotel/02-hero-summer-exterior-16x9.jpg';
import winterPanorama from '../assets/hotel/04-winter-panorama.jpg';
import aerialSummer from '../assets/hotel/05-aerial-summer.jpg';
import guestRoom from '../assets/hotel/06-guest-room.jpg';
import winterGarden from '../assets/hotel/07-winter-garden.jpg';
import diningStube from '../assets/hotel/08-dining-stube.jpg';
import breakfastBuffet from '../assets/hotel/10-breakfast-buffet.jpg';
import valleyView from '../assets/hotel/15-valley-view-16x9.jpg';
import summerMeadow from '../assets/hotel/16-summer-meadow.jpg';
import kamplerSee from '../assets/hotel/17-location-kampler-see-16x9.jpg';
import stubaiWinter from '../assets/hotel/18-location-stubai-winter.jpg';
import playroom from '../assets/hotel/19-playroom.jpg';
import elferhuetteWinter from '../assets/hotel/20-elferhuette-winter.jpg';
import elferhuetteClouds from '../assets/hotel/21-elferhuette-clouds.jpg';

export const hotelImages = {
  heroWinter,
  heroSummer,
  winterPanorama,
  aerialSummer,
  guestRoom,
  winterGarden,
  diningStube,
  breakfastBuffet,
  valleyView,
  summerMeadow,
  kamplerSee,
  stubaiWinter,
  playroom,
  elferhuetteWinter,
  elferhuetteClouds,
} as const;

export type ImageKey = keyof typeof hotelImages;

const googleMapsDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Pinnisweg+53,+6167+Neustift+im+Stubaital,+Austria';
const googleMapsEmbedUrl =
  'https://www.google.com/maps?q=Pinnisweg%2053%2C%206167%20Neustift%20im%20Stubaital%2C%20Austria&z=15&output=embed';

export const siteContent = {
  de: {
    languageName: 'Deutsch',
    meta: {
      title: 'Hotel Klima - Ferienoase im Stubaital',
      description:
        'Neue mehrsprachige Homepage für Hotel Klima: sonnige Ruhelage, persönliche Gastfreundschaft, Stubai-Erlebnisse und Wohlfühlurlaub in Neustift-Neder.',
    },
    nav: [
      { href: '#hotel', label: 'Hotel' },
      { href: '#zimmer', label: 'Zimmer' },
      { href: '#preise', label: 'Preise' },
      { href: '#genuss', label: 'Genuss & Wellness' },
      { href: '#region', label: 'Region' },
      { href: '#kontakt', label: 'Kontakt' },
    ],
    hero: {
      eyebrow: 'Familiengeführtes Hotel in Neustift-Neder',
      title: 'Ankommen. Durchatmen. Das Stubaital direkt vor der Tür.',
      description:
        'Hotel Klima verbindet ruhige Sonnenlage, persönlichen Service und beste Ausgangspunkte für Wanderungen, Skitage und Ausflüge rund um Neustift, Innsbruck und die Tiroler Bergwelt.',
      ctas: [
        { href: 'mailto:haas@hotel-klima.com', label: 'Aufenthalt anfragen', primary: true },
        { href: '#zimmer', label: 'Zimmer entdecken' },
      ],
      facts: [
        'ab € 108,-- pro Person mit Halbpension',
        'kostenloses Glasfaser-WLAN im ganzen Haus',
        'Skibus-Haltestelle direkt gegenüber',
      ],
      imageKey: 'winterPanorama' as ImageKey,
      imageAlt: 'Winterliches Panorama des Hotel Klima aus erhöhter Perspektive',
    },
    intro: {
      title: 'Tradition, die heute gut ankommt',
      text:
        'Seit über 50 Jahren ist das Hotel Klima ein Ort für erholsame Urlaubstage im Stubaital. Die Familie Haas führt das Haus persönlich, investiert laufend in Renovierung und Pflege und verbindet Tiroler Gemütlichkeit mit modernen Annehmlichkeiten wie E-Ladestation und schnellem WLAN.',
      stats: [
        { value: '50+ Jahre', label: 'Gastfreundschaft mit Geschichte' },
        { value: '20 km', label: 'bis zum Flughafen Innsbruck' },
        { value: 'E-Auto', label: 'Ladestation direkt am Hotel' },
      ],
      imageKey: 'heroWinter' as ImageKey,
      imageAlt: 'Winteransicht des Hotel Klima',
    },
    highlights: {
      title: 'Warum Gäste das Hotel Klima wählen',
      items: [
        {
          title: 'Ruhige Sonnenlage',
          text: 'Freier Blick ins Tal, entspannte Atmosphäre und ein Standort, der Ruhe mit guter Erreichbarkeit verbindet.',
        },
        {
          title: 'Persönliche Küche',
          text: 'Frühstücksbuffet, mehrgängige Abendmenüs und frische regionale sowie internationale Produkte - mit viel Sorgfalt gekocht.',
        },
        {
          title: 'Aktivurlaub das ganze Jahr',
          text: 'Wanderungen, Hütten, Gletscher, Rodelbahnen und Winterpanoramen liegen in bequemer Reichweite.',
        },
      ],
    },
    rooms: {
      title: 'Zimmer zum Abschalten',
      text:
        'Die Zimmer sind gemütlich im Tiroler Stil gestaltet, teilweise modernisiert und für entspannte Urlaubstage ausgestattet. Viele Böden, Waschtische und technische Details wurden erneuert.',
      bullets: [
        'Bad oder Dusche, WC und Balkon',
        'LED-Flachbildfernseher, Telefon und kostenloses WLAN',
        'Viel Holz, warme Materialien und schöne Ausblicke',
        'Nichtraucherhotel mit Raucherbereich im Freien oder am Balkon',
      ],
      note:
        'Die aktuelle Preisübersicht startet im Doppelzimmer bei € 108,-- pro Person und Tag, zuzüglich € 4,80 Ortstaxe.',
      imageKey: 'guestRoom' as ImageKey,
      imageAlt: 'Modernisiertes Gästezimmer im Hotel Klima',
    },
    pricing: {
      title: 'Preise',
      intro:
        'Alle Preise gelten pro Person und Tag im Doppelzimmer. Die Ortstaxe von € 4,80 pro Person und Tag kommt zusätzlich dazu. Einzelzimmerzuschlag: € 25,-- pro Tag. Übernachtung mit Frühstück entspricht jeweils Halbpension minus € 20,--.',
      columns: {
        period: 'Zeitraum',
        halfBoard: 'Halbpension',
        bedBreakfast: 'Frühstück',
      },
      rows: [
        { period: '20.10.2026 - 26.12.2026', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '26.12.2026 - 04.01.2027', halfBoard: '€ 149,--', bedBreakfast: '€ 129,--' },
        { period: '04.01.2027 - 04.02.2027', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '04.02.2027 - 20.04.2027', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
        { period: 'Alle übrigen Zeiten', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
      ],
      footnotes: [
        'Doppelzimmerpreise pro Person und Tag ohne Ortstaxe.',
        'Einzelzimmerzuschlag: + € 25,-- pro Tag.',
        'Übernachtung mit Frühstück entspricht jeweils Halbpension minus € 20,--.',
        'Ortstaxe: + € 4,80 pro Person und Tag.',
        'Kurzaufenthalte von 1 bis 2 Tagen: + € 15,-- pro Person und Tag.',
        'Kinder von 0 bis 3 Jahren: kostenlos im Zimmer der Eltern.',
        'Kinder von 4 bis 10 Jahren: 50 % Ermäßigung im Zimmer der Eltern mit Zustellbett oder 30 % Ermäßigung im eigenen Zimmer.',
      ],
    },
    experience: {
      title: 'Genuss und Erholung im Haus',
      cards: [
        {
          title: 'Kulinarik mit Tiroler Charakter',
          text:
            'Vom Frühstücksbuffet bis zum Abendmenü: Stube, Wintergarten und Buffetbereich schaffen einen warmen Rahmen für entspannte Urlaubstage.',
          bullets: ['Frühstücksbuffet', 'wahlweise Halbpension', 'besondere Themenabende im Jahresverlauf'],
          imageKey: 'diningStube' as ImageKey,
          imageAlt: 'Tiroler Stube im Hotel Klima',
        },
        {
          title: 'Wellness nach einem aktiven Tag',
          text:
            'Die Wellnessoase ist ein ruhiger Rückzugsort nach Wandern oder Skifahren. Sauna, Dampfbad, Infrarotkabine und Ruheraum gehören zum Hausangebot.',
          bullets: ['Sauna und Dampfbad', 'Infrarotkabine und Ruheraum', 'Whirlbad und Massagen auf Anfrage'],
          imageKey: 'winterGarden' as ImageKey,
          imageAlt: 'Wintergarten mit Panoramablick im Hotel Klima',
        },
      ],
    },
    region: {
      title: 'Stubaital - Sommer wie Winter stark',
      text:
        'Die Lage in Neustift-Neder bringt Gäste schnell zu Wanderwegen, Almen, Ausflugszielen und mehreren Skigebieten. Öffentliche Verkehrsmittel fahren regelmäßig und machen auch Urlaub ohne Auto angenehm.',
      seasons: [
        {
          title: 'Sommer',
          bullets: [
            'Wandern rund um Elfer, Pinnistal und zahlreiche Almen',
            'Panoramawege, Naturplätze und Ausflüge ins Stubaital',
            'Kampler See, Hüttenstopps und sonnige Aussichtspunkte',
          ],
          imageKey: 'summerMeadow' as ImageKey,
          imageAlt: 'Sommerwiese beim Hotel Klima',
        },
        {
          title: 'Winter',
          bullets: [
            'Stubai Gletscher, Elfer, Schlick 2000 und Mieders gut erreichbar',
            'Kostenloser Skibus gegenüber dem Hotel',
            'Zwei 8 km lange Rodelbahnen, Winterwandern und Schneeschuhgehen',
          ],
          imageKey: 'stubaiWinter' as ImageKey,
          imageAlt: 'Winterpanorama im Stubaital',
        },
      ],
      elferTip: {
        label: 'Ausflugstipp',
        title: 'Elferhütte - Panorama über dem Stubaital',
        text:
          'Ein besonderer Aussichtspunkt für Wanderer, Winterwanderer und Genießer: Die Elferhütte liegt hoch über Neustift und begeistert mit Weitblick, Sonnenterrasse und echter Hüttenatmosphäre.',
        linkLabel: 'Elferhütte entdecken',
        href: 'https://www.elferhuette.at/',
        images: [
          { key: 'elferhuetteWinter' as ImageKey, alt: 'Elferhütte in verschneiter Berglandschaft' },
          { key: 'elferhuetteClouds' as ImageKey, alt: 'Elferhütte über dem Wolkenmeer' },
        ],
      },
    },
    gallery: {
      title: 'Bildstimmung des Hauses',
      text:
        'Für diesen Entwurf wurden vorhandene Hotelbilder neu kuratiert und bereits sanft überarbeitet, damit das Haus moderner und klarer wirkt als auf der bisherigen Website.',
      items: [
        { key: 'heroWinter' as ImageKey, alt: 'Bisheriges Winter-Hauptfoto des Hotel Klima' },
        { key: 'heroSummer' as ImageKey, alt: 'Sommerfassade des Hotel Klima' },
        { key: 'aerialSummer' as ImageKey, alt: 'Hotel Klima aus sommerlicher Perspektive' },
        { key: 'winterPanorama' as ImageKey, alt: 'Panorama des Hotels im Winter' },
        { key: 'guestRoom' as ImageKey, alt: 'Zimmer im Hotel Klima' },
        { key: 'breakfastBuffet' as ImageKey, alt: 'Frühstücks- und Buffetangebot im Hotel Klima' },
        { key: 'valleyView' as ImageKey, alt: 'Talblick in Neustift' },
        { key: 'kamplerSee' as ImageKey, alt: 'Stimmungsbild aus der Umgebung im Stubaital' },
        { key: 'playroom' as ImageKey, alt: 'Spieleraum im Hotel Klima' },
      ],
    },
    contact: {
      title: 'Direkt anfragen',
      text:
        'Für Buchungen und Rückfragen ist die Familie Haas täglich persönlich erreichbar. So bleibt der erste Kontakt genauso persönlich wie der Aufenthalt.',
      addressLines: ['Hotel Klima Ferienoase', 'Fam. Fritz Haas', 'Pinnisweg 53', 'A-6167 Neustift-Neder, Tirol'],
      phoneLabel: '+43 (0)5226 2526',
      phoneHref: 'tel:+4352262526',
      emailLabel: 'haas@hotel-klima.com',
      emailHref: 'mailto:haas@hotel-klima.com',
      secondaryLink: { href: 'https://www.hotel-klima.com/', label: 'Bisherige Website ansehen' },
      map: {
        title: 'Anreise & Karte',
        text: 'Mit einem Klick öffnet sich die Route direkt in Google Maps. So können Gäste die Anfahrt sofort planen.',
        embedTitle: 'Google Maps Karte für Hotel Klima',
        linkLabel: 'Route in Google Maps öffnen',
        href: googleMapsDirectionsUrl,
        embedSrc: googleMapsEmbedUrl,
      },
    },
  },
  en: {
    languageName: 'English',
    meta: {
      title: 'Hotel Klima - Alpine retreat in the Stubai Valley',
      description:
        'Multilingual homepage concept for Hotel Klima: quiet sunny setting, family hospitality, Stubai mountain adventures and relaxed stays in Neustift-Neder.',
    },
    nav: [
      { href: '#hotel', label: 'Hotel' },
      { href: '#rooms', label: 'Rooms' },
      { href: '#prices', label: 'Prices' },
      { href: '#taste', label: 'Dining & wellness' },
      { href: '#region', label: 'Region' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'Family-run hotel in Neustift-Neder',
      title: 'Arrive, unwind and keep the Stubai Valley close.',
      description:
        'Hotel Klima combines a quiet sunny position, personal service and easy access to hiking, skiing and day trips around Neustift, Innsbruck and the surrounding alpine landscape.',
      ctas: [
        { href: 'mailto:haas@hotel-klima.com', label: 'Request your stay', primary: true },
        { href: '#rooms', label: 'See the rooms' },
      ],
      facts: [
        'from € 108,-- per person with half board',
        'free fibre Wi-Fi throughout the hotel',
        'ski bus stop directly opposite the hotel',
      ],
      imageKey: 'winterPanorama' as ImageKey,
      imageAlt: 'Winter panorama of Hotel Klima from an elevated viewpoint',
    },
    intro: {
      title: 'Traditional hospitality, refreshed for today',
      text:
        'For more than 50 years, Hotel Klima has welcomed guests to restful holidays in the Stubai Valley. The Haas family runs the house in person and continues to invest in renovation, maintenance and comforts such as EV charging and fast Wi-Fi.',
      stats: [
        { value: '50+ years', label: 'of family hospitality' },
        { value: '20 km', label: 'to Innsbruck airport' },
        { value: 'EV', label: 'charging station directly at the hotel' },
      ],
      imageKey: 'heroWinter' as ImageKey,
      imageAlt: 'Winter view of Hotel Klima',
    },
    highlights: {
      title: 'Why guests choose Hotel Klima',
      items: [
        {
          title: 'Sunny and peaceful setting',
          text: 'Open valley views, a relaxed atmosphere and a location that balances calm with convenience.',
        },
        {
          title: 'Cuisine with personality',
          text: 'Breakfast buffet, multi-course evening menus and a kitchen built around fresh regional and international ingredients.',
        },
        {
          title: 'Active holidays in every season',
          text: 'Mountain huts, glacier skiing, sled runs and panoramic trails are all easy to reach.',
        },
      ],
    },
    rooms: {
      title: 'Rooms designed for downtime',
      text:
        'Rooms combine Tyrolean warmth with practical comfort. Several surfaces, washbasins and technical details have already been renewed to keep the stay relaxed and easy.',
      bullets: [
        'bath or shower, WC and balcony',
        'LED flat-screen TV, telephone and free Wi-Fi',
        'warm wood details and pleasing mountain views',
        'non-smoking hotel with smoking area outside or on the balcony',
      ],
      note:
        'Current double-room prices with half board start from € 108,-- per person per day, plus the € 4,80 visitor tax.',
      imageKey: 'guestRoom' as ImageKey,
      imageAlt: 'Refreshed guest room at Hotel Klima',
    },
    pricing: {
      title: 'Room prices',
      intro:
        'All prices are per person per day in a double room. The visitor tax of € 4,80 per person per day is charged separately. Single-room supplement: € 25,-- per day. Bed and breakfast is always € 20,-- less than the half-board rate.',
      columns: {
        period: 'Period',
        halfBoard: 'Half board',
        bedBreakfast: 'Bed & breakfast',
      },
      rows: [
        { period: '20.10.2026 - 26.12.2026', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '26.12.2026 - 04.01.2027', halfBoard: '€ 149,--', bedBreakfast: '€ 129,--' },
        { period: '04.01.2027 - 04.02.2027', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '04.02.2027 - 20.04.2027', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
        { period: 'All other dates', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
      ],
      footnotes: [
        'Double-room prices are per person per day, excluding visitor tax.',
        'Single-room supplement: + € 25,-- per day.',
        'Bed and breakfast is always the half-board rate minus € 20,--.',
        'Visitor tax: + € 4,80 per person per day.',
        'Short stays of 1 to 2 days: + € 15,-- per person per day.',
        'Children from 0 to 3 years: free in the parents’ room.',
        'Children from 4 to 10 years: 50% discount in the parents’ room with an extra bed or 30% discount in their own room.',
      ],
    },
    experience: {
      title: 'Food, comfort and slower moments',
      cards: [
        {
          title: 'Tyrolean dining spaces',
          text:
            'From breakfast to dinner, the traditional stube, winter garden and buffet area give every meal a warm and personal setting.',
          bullets: ['breakfast buffet', 'half-board option', 'seasonal themed evenings'],
          imageKey: 'diningStube' as ImageKey,
          imageAlt: 'Traditional dining room at Hotel Klima',
        },
        {
          title: 'Wellness after the mountains',
          text:
            'The wellness area is made for recovery after hiking or skiing, with sauna, steam bath, infrared cabin and a quiet lounge.',
          bullets: ['sauna and steam bath', 'infrared cabin and relaxation room', 'whirlpool bath and massages on request'],
          imageKey: 'winterGarden' as ImageKey,
          imageAlt: 'Winter garden with mountain view at Hotel Klima',
        },
      ],
    },
    region: {
      title: 'Stubai Valley highlights in every season',
      text:
        'Neustift-Neder puts guests close to trails, huts, scenic viewpoints and several ski areas. Regular public transport also makes car-free days simple.',
      seasons: [
        {
          title: 'Summer',
          bullets: [
            'hiking around Elfer, Pinnistal and many alpine huts',
            'panoramic walks and nature experiences throughout the valley',
            'Kampler See, sunny viewpoints and easy day trips',
          ],
          imageKey: 'summerMeadow' as ImageKey,
          imageAlt: 'Summer meadow near Hotel Klima',
        },
        {
          title: 'Winter',
          bullets: [
            'easy access to Stubai Glacier, Elfer, Schlick 2000 and Mieders',
            'free ski bus stop right across the road',
            'two 8 km sled runs, winter hiking and snowshoeing nearby',
          ],
          imageKey: 'stubaiWinter' as ImageKey,
          imageAlt: 'Winter panorama of the Stubai Valley',
        },
      ],
      elferTip: {
        label: 'Local tip',
        title: 'Elferhütte - panoramic views above the Stubai Valley',
        text:
          'A special destination for hikers, winter walkers and mountain lovers: high above Neustift, Elferhütte combines expansive views, a sunny terrace and an authentic alpine atmosphere.',
        linkLabel: 'Discover Elferhütte',
        href: 'https://www.elferhuette.at/',
        images: [
          { key: 'elferhuetteWinter' as ImageKey, alt: 'Elferhütte in a snowy mountain setting' },
          { key: 'elferhuetteClouds' as ImageKey, alt: 'Elferhütte above a sea of clouds' },
        ],
      },
    },
    gallery: {
      title: 'Photo direction for the new site',
      text:
        'This homepage concept uses selected hotel photos that were already gently reworked to reduce the dated look and present the property with a cleaner, more current mood.',
      items: [
        { key: 'heroWinter' as ImageKey, alt: 'Current winter facade hero photo of Hotel Klima' },
        { key: 'heroSummer' as ImageKey, alt: 'Summer exterior of Hotel Klima' },
        { key: 'aerialSummer' as ImageKey, alt: 'Hotel Klima from a summer viewpoint' },
        { key: 'winterPanorama' as ImageKey, alt: 'Hotel panorama in winter' },
        { key: 'guestRoom' as ImageKey, alt: 'Guest room at Hotel Klima' },
        { key: 'breakfastBuffet' as ImageKey, alt: 'Breakfast and buffet offering at Hotel Klima' },
        { key: 'valleyView' as ImageKey, alt: 'Valley view in Neustift' },
        { key: 'kamplerSee' as ImageKey, alt: 'Scenic view from the Stubai Valley surroundings' },
        { key: 'playroom' as ImageKey, alt: 'Games room at Hotel Klima' },
      ],
    },
    contact: {
      title: 'Book directly',
      text:
        'The Haas family handles enquiries personally every day, so the first contact already feels as direct and welcoming as the stay itself.',
      addressLines: ['Hotel Klima Ferienoase', 'Haas family', 'Pinnisweg 53', 'A-6167 Neustift-Neder, Tyrol'],
      phoneLabel: '+43 (0)5226 2526',
      phoneHref: 'tel:+4352262526',
      emailLabel: 'haas@hotel-klima.com',
      emailHref: 'mailto:haas@hotel-klima.com',
      secondaryLink: { href: 'https://www.hotel-klima.com/', label: 'View the current website' },
      map: {
        title: 'Arrival & map',
        text: 'Guests can open the exact route in Google Maps with one click and plan the drive immediately.',
        embedTitle: 'Google Maps location for Hotel Klima',
        linkLabel: 'Open directions in Google Maps',
        href: googleMapsDirectionsUrl,
        embedSrc: googleMapsEmbedUrl,
      },
    },
  },
  it: {
    languageName: 'Italiano',
    meta: {
      title: 'Hotel Klima - Rifugio alpino in Val Stubai',
      description:
        "Concept multilingue per Hotel Klima: posizione tranquilla e soleggiata, ospitalita familiare, esperienze in montagna e soggiorni rilassanti a Neustift-Neder.",
    },
    nav: [
      { href: '#hotel', label: 'Hotel' },
      { href: '#camere', label: 'Camere' },
      { href: '#prezzi', label: 'Prezzi' },
      { href: '#gusto', label: 'Gusto e wellness' },
      { href: '#territorio', label: 'Territorio' },
      { href: '#contatti', label: 'Contatti' },
    ],
    hero: {
      eyebrow: 'Hotel a conduzione familiare a Neustift-Neder',
      title: 'Arrivare, rilassarsi e vivere la Val Stubai da vicino.',
      description:
        "Hotel Klima unisce una posizione soleggiata e tranquilla, accoglienza personale e collegamenti comodi per escursioni, sci e gite tra Neustift, Innsbruck e le montagne tirolesi.",
      ctas: [
        { href: 'mailto:haas@hotel-klima.com', label: 'Richiedi il soggiorno', primary: true },
        { href: '#camere', label: 'Scopri le camere' },
      ],
      facts: [
        'da € 108,-- a persona con mezza pensione',
        'Wi-Fi in fibra gratuito in tutto l hotel',
        'fermata skibus proprio di fronte',
      ],
      imageKey: 'winterPanorama' as ImageKey,
      imageAlt: 'Panorama invernale dell Hotel Klima da una prospettiva rialzata',
    },
    intro: {
      title: "Una tradizione che oggi si presenta al meglio",
      text:
        'Da oltre 50 anni Hotel Klima accoglie gli ospiti per vacanze rilassanti in Val Stubai. La famiglia Haas segue la casa personalmente e continua a investire in rinnovi, manutenzione e comfort come colonnina per auto elettriche e Wi-Fi veloce.',
      stats: [
        { value: '50+ anni', label: 'di ospitalita familiare' },
        { value: '20 km', label: 'dall aeroporto di Innsbruck' },
        { value: 'Auto elettrica', label: 'stazione di ricarica direttamente in hotel' },
      ],
      imageKey: 'heroWinter' as ImageKey,
      imageAlt: 'Vista invernale dell Hotel Klima',
    },
    highlights: {
      title: 'Perche scegliere Hotel Klima',
      items: [
        {
          title: 'Posizione tranquilla e soleggiata',
          text: 'Vista aperta sulla valle, atmosfera distesa e una posizione che unisce tranquillita e comodita.',
        },
        {
          title: 'Cucina con carattere',
          text: 'Buffet della colazione, menu serali a piu portate e ingredienti freschi regionali e internazionali.',
        },
        {
          title: 'Vacanza attiva in ogni stagione',
          text: 'Rifugi, ghiacciaio, piste da slittino e sentieri panoramici sono tutti facilmente raggiungibili.',
        },
      ],
    },
    rooms: {
      title: 'Camere pensate per stare bene',
      text:
        'Le camere uniscono calore tirolese e comfort pratico. Pavimenti, lavabi e diversi dettagli tecnici sono gia stati rinnovati per rendere il soggiorno piu piacevole.',
      bullets: [
        'bagno o doccia, WC e balcone',
        'TV LED, telefono e Wi-Fi gratuito',
        'molto legno, materiali caldi e belle viste sulle montagne',
        'hotel non fumatori con possibilita di fumare all esterno o sul balcone',
      ],
      note:
        'Secondo il listino attuale, la camera doppia con mezza pensione parte da € 108,-- a persona al giorno, tassa di soggiorno di € 4,80 esclusa.',
      imageKey: 'guestRoom' as ImageKey,
      imageAlt: 'Camera rinnovata dell Hotel Klima',
    },
    pricing: {
      title: 'Prezzi camere',
      intro:
        'Tutti i prezzi si intendono per persona e per giorno in camera doppia. La tassa di soggiorno di € 4,80 per persona e per giorno è esclusa. Supplemento camera singola: € 25,-- al giorno. Il trattamento di pernottamento con colazione corrisponde sempre alla mezza pensione meno € 20,--.',
      columns: {
        period: 'Periodo',
        halfBoard: 'Mezza pensione',
        bedBreakfast: 'Camera e colazione',
      },
      rows: [
        { period: '20.10.2026 - 26.12.2026', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '26.12.2026 - 04.01.2027', halfBoard: '€ 149,--', bedBreakfast: '€ 129,--' },
        { period: '04.01.2027 - 04.02.2027', halfBoard: '€ 108,--', bedBreakfast: '€ 88,--' },
        { period: '04.02.2027 - 20.04.2027', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
        { period: 'Tutti gli altri periodi', halfBoard: '€ 118,--', bedBreakfast: '€ 98,--' },
      ],
      footnotes: [
        'Prezzi in camera doppia per persona e per giorno, tassa di soggiorno esclusa.',
        'Supplemento camera singola: + € 25,-- al giorno.',
        'Il pernottamento con colazione corrisponde sempre alla mezza pensione meno € 20,--.',
        'Tassa di soggiorno: + € 4,80 per persona e per giorno.',
        'Soggiorni brevi da 1 a 2 giorni: + € 15,-- per persona e per giorno.',
        'Bambini da 0 a 3 anni: gratis nella camera dei genitori.',
        'Bambini da 4 a 10 anni: sconto del 50% nella camera dei genitori con letto aggiuntivo oppure sconto del 30% nella propria camera.',
      ],
    },
    experience: {
      title: 'Sapori, comfort e tempo per rilassarsi',
      cards: [
        {
          title: 'Sale da pranzo in stile tirolese',
          text:
            'Dalla colazione alla cena, la stube tradizionale, il giardino d inverno e l area buffet creano un ambiente caldo e personale.',
          bullets: ['buffet della colazione', 'mezza pensione disponibile', 'serate a tema durante l anno'],
          imageKey: 'diningStube' as ImageKey,
          imageAlt: 'Stube tradizionale dell Hotel Klima',
        },
        {
          title: 'Wellness dopo la montagna',
          text:
            'L area wellness e pensata per recuperare dopo escursioni o sci, con sauna, bagno turco, cabina a infrarossi e zona relax.',
          bullets: ['sauna e bagno turco', 'cabina a infrarossi e sala relax', 'vasca idromassaggio e massaggi su richiesta'],
          imageKey: 'winterGarden' as ImageKey,
          imageAlt: 'Giardino d inverno con vista montagna all Hotel Klima',
        },
      ],
    },
    region: {
      title: 'Val Stubai, forte in estate e in inverno',
      text:
        'Neustift-Neder permette di raggiungere facilmente sentieri, rifugi, punti panoramici e diversi comprensori sciistici. I mezzi pubblici regolari rendono semplici anche le giornate senza auto.',
      seasons: [
        {
          title: 'Estate',
          bullets: [
            'escursioni intorno a Elfer, Pinnistal e numerosi rifugi',
            'sentieri panoramici ed esperienze nella natura in tutta la valle',
            'Kampler See, punti soleggiati e gite giornaliere facili',
          ],
          imageKey: 'summerMeadow' as ImageKey,
          imageAlt: 'Prato estivo vicino all Hotel Klima',
        },
        {
          title: 'Inverno',
          bullets: [
            'comodo accesso allo Stubai Gletscher, Elfer, Schlick 2000 e Mieders',
            'fermata skibus gratuita proprio davanti all hotel',
            'due piste da slittino di 8 km, passeggiate invernali e ciaspolate',
          ],
          imageKey: 'stubaiWinter' as ImageKey,
          imageAlt: 'Panorama invernale della Val Stubai',
        },
      ],
      elferTip: {
        label: 'Consiglio locale',
        title: 'Elferhütte - panorama sopra la Val Stubai',
        text:
          'Una meta speciale per escursionisti, camminatori invernali e amanti della montagna: in alto sopra Neustift, la Elferhütte unisce viste sconfinate, terrazza soleggiata e autentica atmosfera alpina.',
        linkLabel: 'Scopri la Elferhütte',
        href: 'https://www.elferhuette.at/',
        images: [
          { key: 'elferhuetteWinter' as ImageKey, alt: 'Elferhütte in un paesaggio montano innevato' },
          { key: 'elferhuetteClouds' as ImageKey, alt: 'Elferhütte sopra un mare di nuvole' },
        ],
      },
    },
    gallery: {
      title: 'Direzione visiva del nuovo sito',
      text:
        'Questo concept usa fotografie dell hotel gia selezionate e leggermente rielaborate per ridurre l effetto datato e mostrare la struttura in modo piu pulito e attuale.',
      items: [
        { key: 'heroWinter' as ImageKey, alt: 'Attuale foto principale invernale della facciata dell Hotel Klima' },
        { key: 'heroSummer' as ImageKey, alt: 'Esterno estivo dell Hotel Klima' },
        { key: 'aerialSummer' as ImageKey, alt: 'Hotel Klima in una vista estiva' },
        { key: 'winterPanorama' as ImageKey, alt: 'Panorama dell hotel in inverno' },
        { key: 'guestRoom' as ImageKey, alt: 'Camera dell Hotel Klima' },
        { key: 'breakfastBuffet' as ImageKey, alt: 'Offerta buffet dell Hotel Klima' },
        { key: 'valleyView' as ImageKey, alt: 'Vista sulla valle a Neustift' },
        { key: 'kamplerSee' as ImageKey, alt: 'Veduta suggestiva dei dintorni della Val Stubai' },
        { key: 'playroom' as ImageKey, alt: 'Sala giochi dell Hotel Klima' },
      ],
    },
    contact: {
      title: 'Richiedi direttamente',
      text:
        'La famiglia Haas segue personalmente le richieste ogni giorno, cosi il primo contatto risulta gia diretto e accogliente come il soggiorno.',
      addressLines: ['Hotel Klima Ferienoase', 'Famiglia Haas', 'Pinnisweg 53', 'A-6167 Neustift-Neder, Tirolo'],
      phoneLabel: '+43 (0)5226 2526',
      phoneHref: 'tel:+4352262526',
      emailLabel: 'haas@hotel-klima.com',
      emailHref: 'mailto:haas@hotel-klima.com',
      secondaryLink: { href: 'https://www.hotel-klima.com/', label: 'Vedi il sito attuale' },
      map: {
        title: 'Arrivo e mappa',
        text: 'Con un clic gli ospiti possono aprire il percorso esatto in Google Maps e pianificare subito l arrivo.',
        embedTitle: 'Mappa Google Maps per Hotel Klima',
        linkLabel: 'Apri il percorso in Google Maps',
        href: googleMapsDirectionsUrl,
        embedSrc: googleMapsEmbedUrl,
      },
    },
  },
} as const;

export type Locale = keyof typeof siteContent;
export const locales = Object.keys(siteContent) as Locale[];
