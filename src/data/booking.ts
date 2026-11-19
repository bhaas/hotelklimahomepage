import type { Locale } from './site';

export const bookingEmail = 'haas@hotel-klima.com';

interface PracticalItem {
  label: string;
  value: string;
}

interface BookingContent {
  practical: { title: string; text: string; items: PracticalItem[] };
  form: {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    arrival: string;
    departure: string;
    adults: string;
    children: string;
    childAges: string;
    childAgesPlaceholder: string;
    room: string;
    rooms: string[];
    board: string;
    boards: string[];
    message: string;
    optional: string;
    submit: string;
    sending: string;
    success: string;
    note: string;
    privacyLabel: string;
    dateError: string;
    send: {
      title: string;
      intro: string;
      gmail: string;
      outlook: string;
      copy: string;
      copied: string;
    };
    subject: string;
  };
  notFound: { title: string; text: string; home: string };
}

export const bookingContent: Record<Locale, BookingContent> = {
  de: {
    practical: {
      title: 'Gut zu wissen',
      text: 'Die wichtigsten Informationen für Ihre Anreise und Ihren Aufenthalt auf einen Blick.',
      items: [
        { label: 'Check-in', value: 'ab 13:00 Uhr' },
        { label: 'Check-out', value: 'bis 10:00 Uhr' },
        { label: 'Bezahlung', value: 'Im Hotel in bar oder per Überweisung' },
        { label: 'Haustiere', value: 'Hunde sind aus Rücksicht auf Allergiker leider nicht erlaubt' },
        { label: 'Parken & E-Auto', value: 'Kostenlose Hotelparkplätze und E-Ladestation direkt am Haus' },
        { label: 'Im Haus', value: 'Personenlift, Nichtraucherhotel, kostenloses Glasfaser-WLAN' },
        { label: 'Anreise ohne Auto', value: 'Skibus- und Linienbus-Haltestelle direkt gegenüber' },
        { label: 'Stornierung', value: 'Es gelten die Allgemeinen Geschäftsbedingungen für die Hotellerie (AGBH 2006)' },
      ],
    },
    form: {
      title: 'Unverbindliche Anfrage',
      intro: 'Teilen Sie uns Ihre Reisedaten mit – wir melden uns rasch mit einem persönlichen Angebot.',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      arrival: 'Anreise',
      departure: 'Abreise',
      adults: 'Erwachsene',
      children: 'Kinder',
      childAges: 'Alter der Kinder',
      childAgesPlaceholder: 'z. B. 4, 9',
      room: 'Zimmer',
      rooms: ['Doppelzimmer', 'Einzelzimmer', 'Doppelzimmer mit Zustellbett', 'Zwei oder mehr Zimmer'],
      board: 'Verpflegung',
      boards: ['Halbpension', 'Übernachtung mit Frühstück'],
      message: 'Nachricht',
      optional: 'optional',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet …',
      success: 'Vielen Dank! Ihre Anfrage ist bei uns angekommen – wir melden uns rasch mit einem persönlichen Angebot.',
      note: 'Ihre Anfrage wird per E-Mail direkt an uns gesendet und nicht auf dieser Website gespeichert.',
      privacyLabel: 'Datenschutzerklärung',
      dateError: 'Die Abreise muss nach der Anreise liegen.',
      send: {
        title: 'Die Anfrage konnte leider nicht gesendet werden',
        intro: 'Bitte senden Sie sie auf einem dieser Wege an haas@hotel-klima.com:',
        gmail: 'In Gmail öffnen',
        outlook: 'In Outlook.com öffnen',
        copy: 'Text kopieren',
        copied: 'Kopiert! Fügen Sie den Text in eine E-Mail an haas@hotel-klima.com ein.',
      },
      subject: 'Zimmeranfrage',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Diese Seite gibt es leider nicht (mehr). Vielleicht finden Sie das Gesuchte auf unserer Startseite.',
      home: 'Zur Startseite',
    },
  },
  en: {
    practical: {
      title: 'Good to know',
      text: 'The key information for your arrival and stay at a glance.',
      items: [
        { label: 'Check-in', value: 'from 1:00 pm' },
        { label: 'Check-out', value: 'by 10:00 am' },
        { label: 'Payment', value: 'At the hotel in cash or by bank transfer' },
        { label: 'Pets', value: 'Out of consideration for guests with allergies, dogs are unfortunately not allowed' },
        { label: 'Parking & EV', value: 'Free hotel parking and an EV charging station at the hotel' },
        { label: 'In the hotel', value: 'Lift, non-smoking hotel, free fibre-optic Wi-Fi' },
        { label: 'Without a car', value: 'Ski bus and public bus stop directly opposite' },
        { label: 'Cancellation', value: 'The General Terms and Conditions for the Hotel Industry (AGBH 2006) apply' },
      ],
    },
    form: {
      title: 'Non-binding enquiry',
      intro: 'Tell us your travel dates – we will get back to you quickly with a personal offer.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      arrival: 'Arrival',
      departure: 'Departure',
      adults: 'Adults',
      children: 'Children',
      childAges: 'Children’s ages',
      childAgesPlaceholder: 'e.g. 4, 9',
      room: 'Room',
      rooms: ['Double room', 'Single room', 'Double room with extra bed', 'Two or more rooms'],
      board: 'Board',
      boards: ['Half board', 'Bed and breakfast'],
      message: 'Message',
      optional: 'optional',
      submit: 'Send enquiry',
      sending: 'Sending …',
      success: 'Thank you! We have received your enquiry and will get back to you quickly with a personal offer.',
      note: 'Your enquiry is sent to us directly by email and is not stored on this website.',
      privacyLabel: 'Privacy policy',
      dateError: 'Departure must be after arrival.',
      send: {
        title: 'Unfortunately the enquiry could not be sent',
        intro: 'Please send it to haas@hotel-klima.com in one of these ways:',
        gmail: 'Open in Gmail',
        outlook: 'Open in Outlook.com',
        copy: 'Copy text',
        copied: 'Copied! Paste the text into an email to haas@hotel-klima.com.',
      },
      subject: 'Room enquiry',
    },
    notFound: {
      title: 'Page not found',
      text: 'Sorry, this page does not exist (any more). You may find what you are looking for on our homepage.',
      home: 'Go to homepage',
    },
  },
  it: {
    practical: {
      title: 'Buono a sapersi',
      text: 'Le informazioni più importanti per l’arrivo e il soggiorno in sintesi.',
      items: [
        { label: 'Check-in', value: 'dalle ore 13:00' },
        { label: 'Check-out', value: 'entro le ore 10:00' },
        { label: 'Pagamento', value: 'In hotel in contanti o con bonifico bancario' },
        { label: 'Animali', value: 'Per rispetto degli ospiti allergici, purtroppo i cani non sono ammessi' },
        { label: 'Parcheggio e auto elettriche', value: 'Parcheggio gratuito e stazione di ricarica direttamente in hotel' },
        { label: 'In hotel', value: 'Ascensore, hotel non fumatori, Wi-Fi in fibra gratuito' },
        { label: 'Senza auto', value: 'Fermata dello skibus e dell’autobus di linea proprio di fronte' },
        { label: 'Cancellazione', value: 'Valgono le Condizioni generali per il settore alberghiero austriaco (AGBH 2006)' },
      ],
    },
    form: {
      title: 'Richiesta senza impegno',
      intro: 'Indicaci le date del tuo viaggio: ti risponderemo rapidamente con un’offerta personale.',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefono',
      arrival: 'Arrivo',
      departure: 'Partenza',
      adults: 'Adulti',
      children: 'Bambini',
      childAges: 'Età dei bambini',
      childAgesPlaceholder: 'ad es. 4, 9',
      room: 'Camera',
      rooms: ['Camera doppia', 'Camera singola', 'Camera doppia con letto aggiuntivo', 'Due o più camere'],
      board: 'Trattamento',
      boards: ['Mezza pensione', 'Pernottamento e colazione'],
      message: 'Messaggio',
      optional: 'facoltativo',
      submit: 'Invia la richiesta',
      sending: 'Invio in corso …',
      success: 'Grazie! Abbiamo ricevuto la tua richiesta e ti risponderemo rapidamente con un’offerta personale.',
      note: 'La tua richiesta ci viene inviata direttamente via e-mail e non viene salvata su questo sito.',
      privacyLabel: 'Informativa sulla privacy',
      dateError: 'La partenza deve essere successiva all’arrivo.',
      send: {
        title: 'Purtroppo non è stato possibile inviare la richiesta',
        intro: 'Inviala a haas@hotel-klima.com in uno di questi modi:',
        gmail: 'Apri in Gmail',
        outlook: 'Apri in Outlook.com',
        copy: 'Copia il testo',
        copied: 'Copiato! Incolla il testo in un’e-mail a haas@hotel-klima.com.',
      },
      subject: 'Richiesta camera',
    },
    notFound: {
      title: 'Pagina non trovata',
      text: 'Purtroppo questa pagina non esiste (più). Forse trovi ciò che cerchi nella nostra homepage.',
      home: 'Vai alla homepage',
    },
  },
};
