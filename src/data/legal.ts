import type { Locale } from './site';

export type LegalPageKey = 'imprint' | 'privacy';

export interface LegalSection {
  title: string;
  /** Trusted, hand-written HTML (links, line breaks). */
  html: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
}

const email = '<a href="mailto:haas@hotel-klima.com">haas@hotel-klima.com</a>';
const phone = '<a href="tel:+4352262526">+43 (0)5226 2526</a>';
const address = 'Hotel Klima Ferienoase<br />Inhaber: Fritz Haas<br />Pinnisweg 53<br />6167 Neustift im Stubaital (Neustift-Neder)<br />Tirol, Österreich';
const addressEn = 'Hotel Klima Ferienoase<br />Owner: Fritz Haas<br />Pinnisweg 53<br />6167 Neustift im Stubaital (Neustift-Neder)<br />Tyrol, Austria';
const addressIt = 'Hotel Klima Ferienoase<br />Titolare: Fritz Haas<br />Pinnisweg 53<br />6167 Neustift im Stubaital (Neustift-Neder)<br />Tirolo, Austria';
const ris = '<a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">www.ris.bka.gv.at</a>';
const dsb = '<a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">www.dsb.gv.at</a>';
const googlePrivacy = '<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">policies.google.com/privacy</a>';
const vercelPrivacy = '<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">vercel.com/legal/privacy-policy</a>';

export const legalContent: Record<
  Locale,
  {
    pages: Record<LegalPageKey, LegalPage>;
    footer: { contactTitle: string; legalTitle: string; rights: string };
    backLabel: string;
    updated: string;
    map: { consentText: string; loadLabel: string };
  }
> = {
  de: {
    backLabel: '← Zurück zur Startseite',
    updated: 'Stand: November 2026',
    footer: { contactTitle: 'Kontakt', legalTitle: 'Rechtliches', rights: 'Alle Rechte vorbehalten.' },
    map: {
      consentText:
        'Zum Schutz Ihrer Daten wird die Karte erst nach Ihrem Klick geladen. Dabei werden Daten (z. B. Ihre IP-Adresse) an Google übertragen.',
      loadLabel: 'Karte laden',
    },
    pages: {
      imprint: {
        slug: 'impressum',
        title: 'Impressum',
        description: 'Impressum und Offenlegung des Hotel Klima Ferienoase in Neustift im Stubaital.',
        sections: [
          {
            title: 'Medieninhaber, Herausgeber und Diensteanbieter',
            html: [address, `Telefon: ${phone}<br />E-Mail: ${email}`],
          },
          {
            title: 'Unternehmensangaben',
            html: [
              'UID-Nummer: ATU30881105',
              'Unternehmensgegenstand: Beherbergung und Gastronomie (Hotelbetrieb)',
              'Gewerbe: Gastgewerbe, verliehen in Österreich<br />Gewerbebehörde: Bezirkshauptmannschaft Innsbruck',
              'Mitglied der Wirtschaftskammer Tirol, Sparte Tourismus und Freizeitwirtschaft',
              `Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO), abrufbar unter ${ris}`,
            ],
          },
          {
            title: 'Offenlegung gemäß § 25 Mediengesetz',
            html: [
              'Grundlegende Richtung der Website: Information über das Hotel Klima Ferienoase, seine Zimmer, Preise und Angebote sowie die Urlaubsregion Stubaital.',
            ],
          },
          {
            title: 'Buchungsbedingungen und Gerichtsstand',
            html: [
              'Für Buchungen gelten die Allgemeinen Geschäftsbedingungen für die Hotellerie (AGBH 2006). Gerichtsstand ist Innsbruck. Druckfehler und Änderungen vorbehalten.',
            ],
          },
          {
            title: 'Haftung für Inhalte und Links',
            html: [
              'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir dennoch keine Gewähr.',
              'Für die Inhalte verlinkter externer Websites sind ausschließlich deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.',
            ],
          },
          {
            title: 'Urheberrecht',
            html: [
              'Texte, Fotos und Logo dieser Website sind urheberrechtlich geschützt. Eine Verwendung, Vervielfältigung oder Weitergabe ist ohne unsere schriftliche Zustimmung nicht gestattet. Fotos: Hotel Klima, Familie Haas.',
            ],
          },
        ],
      },
      privacy: {
        slug: 'datenschutz',
        title: 'Datenschutzerklärung',
        description: 'Informationen zur Verarbeitung personenbezogener Daten auf der Website des Hotel Klima.',
        sections: [
          {
            title: '1. Verantwortlicher',
            html: [address, `Telefon: ${phone}<br />E-Mail: ${email}`],
          },
          {
            title: '2. Grundsätze',
            html: [
              'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG).',
              'Diese Website verwendet <strong>keine Cookies</strong>, keine Analyse- oder Tracking-Werkzeuge und lädt keine Schriftarten von fremden Servern.',
            ],
          },
          {
            title: '3. Hosting und Server-Logfiles',
            html: [
              'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, betrieben. Beim Aufruf der Website werden technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browser und Betriebssystem.',
              'Diese Daten dienen ausschließlich dem sicheren und stabilen Betrieb der Website (Rechtsgrundlage: berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO) und werden nur kurzfristig gespeichert.',
              `Eine Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission (EU-US Data Privacy Framework) bzw. von Standardvertragsklauseln. Weitere Informationen: ${vercelPrivacy}`,
            ],
          },
          {
            title: '4. Kontaktaufnahme und Buchungsanfragen',
            html: [
              'Wenn Sie uns per E-Mail, Telefon oder über das Anfrageformular kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Reisezeitraum, Personenanzahl), um Ihre Anfrage zu beantworten und eine Buchung abzuwickeln (Art. 6 Abs. 1 lit. b DSGVO).',
              'Das Anfrageformular speichert oder überträgt keine Daten über diese Website: Beim Absenden wird lediglich eine E-Mail vorbereitet, die Sie selbst über den von Ihnen gewählten Dienst an uns senden (z. B. Ihr E-Mail-Programm, Gmail oder Outlook.com). Wählen Sie Gmail oder Outlook.com, gelten dort die Datenschutzbestimmungen des jeweiligen Anbieters (Google bzw. Microsoft).',
              'Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden. Buchungs- und Rechnungsdaten bewahren wir entsprechend den gesetzlichen Aufbewahrungspflichten (§ 132 BAO, 7 Jahre) auf.',
            ],
          },
          {
            title: '5. Google Maps',
            html: [
              'Zur Darstellung der Anfahrt können Sie eine Karte von Google Maps einblenden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.',
              'Die Karte wird <strong>erst nach Ihrem Klick auf „Karte laden“</strong> geladen. Erst dann werden Daten wie Ihre IP-Adresse an Google übertragen und dort gegebenenfalls auch in den USA verarbeitet (Rechtsgrundlage: Einwilligung, Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung gilt nur für den aktuellen Seitenaufruf.',
              `Der Link „Route in Google Maps öffnen“ führt direkt zu Google. Datenschutzhinweise von Google: ${googlePrivacy}`,
            ],
          },
          {
            title: '6. Externe Links',
            html: [
              'Unsere Website enthält Links zu externen Websites (z. B. Elferhütte, Google Maps). Beim Anklicken gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
            ],
          },
          {
            title: '7. Ihre Rechte',
            html: [
              'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Wenden Sie sich dazu bitte an ' + email + '.',
              `Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Österreichischen Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, beschweren: ${dsb}`,
            ],
          },
        ],
      },
    },
  },
  en: {
    backLabel: '← Back to the homepage',
    updated: 'Last updated: November 2026',
    footer: { contactTitle: 'Contact', legalTitle: 'Legal', rights: 'All rights reserved.' },
    map: {
      consentText:
        'To protect your privacy, the map only loads after you click. Data such as your IP address will then be sent to Google.',
      loadLabel: 'Load map',
    },
    pages: {
      imprint: {
        slug: 'imprint',
        title: 'Legal notice',
        description: 'Legal notice (Impressum) of Hotel Klima Ferienoase in Neustift im Stubaital, Austria.',
        sections: [
          {
            title: 'Owner, publisher and service provider',
            html: [addressEn, `Phone: ${phone}<br />Email: ${email}`],
          },
          {
            title: 'Company details',
            html: [
              'VAT ID: ATU30881105',
              'Business activity: accommodation and food service (hotel)',
              'Trade licence: hospitality trade (Gastgewerbe), granted in Austria<br />Trade authority: Bezirkshauptmannschaft Innsbruck',
              'Member of the Tyrolean Chamber of Commerce (Wirtschaftskammer Tirol), tourism and leisure division',
              `Applicable regulations: Austrian Trade Regulation Act (Gewerbeordnung), available at ${ris}`,
            ],
          },
          {
            title: 'Disclosure according to § 25 Austrian Media Act',
            html: [
              'Purpose of this website: information about Hotel Klima Ferienoase, its rooms, prices and offers, and the Stubai Valley holiday region.',
            ],
          },
          {
            title: 'Booking terms and place of jurisdiction',
            html: [
              'Bookings are subject to the General Terms and Conditions for the Hotel Industry (AGBH 2006). Place of jurisdiction is Innsbruck. Errors and changes excepted.',
            ],
          },
          {
            title: 'Liability for content and links',
            html: [
              'The content of this website has been prepared with great care. However, we cannot guarantee that it is correct, complete or up to date.',
              'The operators of linked external websites are solely responsible for their content. No unlawful content was apparent at the time of linking.',
            ],
          },
          {
            title: 'Copyright',
            html: [
              'Texts, photos and the logo on this website are protected by copyright. Use, reproduction or distribution is not permitted without our written consent. Photos: Hotel Klima, Haas family.',
            ],
          },
        ],
      },
      privacy: {
        slug: 'privacy',
        title: 'Privacy policy',
        description: 'Information on how Hotel Klima processes personal data on its website.',
        sections: [
          {
            title: '1. Controller',
            html: [addressEn, `Phone: ${phone}<br />Email: ${email}`],
          },
          {
            title: '2. Principles',
            html: [
              'We take the protection of your personal data seriously and process it only in accordance with the General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG).',
              'This website uses <strong>no cookies</strong>, no analytics or tracking tools, and does not load fonts from third-party servers.',
            ],
          },
          {
            title: '3. Hosting and server log files',
            html: [
              'This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the website, technically necessary data is processed: IP address, date and time of access, page requested, browser and operating system.',
              'This data is used solely to operate the website securely and reliably (legal basis: legitimate interest, Art. 6(1)(f) GDPR) and is stored only briefly.',
              `Transfers to the USA are based on the European Commission’s adequacy decision (EU-US Data Privacy Framework) or standard contractual clauses. More information: ${vercelPrivacy}`,
            ],
          },
          {
            title: '4. Contact and booking requests',
            html: [
              'If you contact us by email, phone or the enquiry form, we process the details you provide (e.g. name, contact details, travel dates, number of guests) to answer your request and handle your booking (Art. 6(1)(b) GDPR).',
              'The enquiry form does not store or transmit any data via this website: submitting it only prepares an email that you send to us yourself using the service you choose (e.g. your email program, Gmail or Outlook.com). If you choose Gmail or Outlook.com, the privacy policy of that provider (Google or Microsoft) applies.',
              'The data is deleted once it is no longer needed. Booking and invoice data is kept for the statutory retention period (§ 132 Austrian Federal Fiscal Code, 7 years).',
            ],
          },
          {
            title: '5. Google Maps',
            html: [
              'You can display a Google Maps map to plan your journey. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.',
              'The map is <strong>only loaded after you click “Load map”</strong>. Only then is data such as your IP address sent to Google, where it may also be processed in the USA (legal basis: consent, Art. 6(1)(a) GDPR). Your consent applies only to the current page visit.',
              `The “Open directions in Google Maps” link takes you directly to Google. Google’s privacy policy: ${googlePrivacy}`,
            ],
          },
          {
            title: '6. External links',
            html: [
              'Our website contains links to external websites (e.g. Elferhütte, Google Maps). When you click them, the privacy policy of the respective provider applies.',
            ],
          },
          {
            title: '7. Your rights',
            html: [
              'You have the right to access, rectification, erasure, restriction of processing, data portability and objection, and the right to withdraw your consent at any time. Please contact ' + email + '.',
              `If you believe the processing of your data violates data protection law, you can lodge a complaint with the Austrian Data Protection Authority, Barichgasse 40–42, 1030 Vienna: ${dsb}`,
            ],
          },
        ],
      },
    },
  },
  it: {
    backLabel: '← Torna alla homepage',
    updated: 'Aggiornamento: novembre 2026',
    footer: { contactTitle: 'Contatti', legalTitle: 'Note legali', rights: 'Tutti i diritti riservati.' },
    map: {
      consentText:
        'Per proteggere i tuoi dati, la mappa viene caricata solo dopo il tuo clic. In quel momento dati come il tuo indirizzo IP vengono trasmessi a Google.',
      loadLabel: 'Carica mappa',
    },
    pages: {
      imprint: {
        slug: 'note-legali',
        title: 'Note legali',
        description: 'Note legali (Impressum) dell’Hotel Klima Ferienoase a Neustift in Val Stubai, Austria.',
        sections: [
          {
            title: 'Titolare, editore e fornitore del servizio',
            html: [addressIt, `Telefono: ${phone}<br />E-mail: ${email}`],
          },
          {
            title: 'Dati aziendali',
            html: [
              'Partita IVA: ATU30881105',
              'Attività: alloggio e ristorazione (albergo)',
              'Licenza: attività alberghiera e di ristorazione (Gastgewerbe), rilasciata in Austria<br />Autorità competente: Bezirkshauptmannschaft Innsbruck',
              'Membro della Camera di Commercio del Tirolo (Wirtschaftskammer Tirol), settore turismo e tempo libero',
              `Normativa applicabile: Ordinamento austriaco delle attività economiche (Gewerbeordnung), consultabile su ${ris}`,
            ],
          },
          {
            title: 'Informativa ai sensi del § 25 della legge austriaca sui media',
            html: [
              'Finalità del sito: informazioni sull’Hotel Klima Ferienoase, le sue camere, i prezzi e le offerte, e sulla regione turistica della Val Stubai.',
            ],
          },
          {
            title: 'Condizioni di prenotazione e foro competente',
            html: [
              'Per le prenotazioni valgono le Condizioni generali per il settore alberghiero austriaco (AGBH 2006). Foro competente è Innsbruck. Salvo errori e modifiche.',
            ],
          },
          {
            title: 'Responsabilità per contenuti e link',
            html: [
              'I contenuti di questo sito sono stati redatti con la massima cura. Non possiamo tuttavia garantirne la correttezza, la completezza e l’attualità.',
              'Dei contenuti dei siti esterni collegati sono responsabili esclusivamente i rispettivi gestori. Al momento del collegamento non erano riconoscibili contenuti illeciti.',
            ],
          },
          {
            title: 'Diritto d’autore',
            html: [
              'Testi, foto e logo di questo sito sono protetti dal diritto d’autore. L’uso, la riproduzione o la diffusione non sono consentiti senza il nostro consenso scritto. Foto: Hotel Klima, famiglia Haas.',
            ],
          },
        ],
      },
      privacy: {
        slug: 'privacy',
        title: 'Informativa sulla privacy',
        description: 'Informazioni sul trattamento dei dati personali sul sito dell’Hotel Klima.',
        sections: [
          {
            title: '1. Titolare del trattamento',
            html: [addressIt, `Telefono: ${phone}<br />E-mail: ${email}`],
          },
          {
            title: '2. Principi',
            html: [
              'La protezione dei tuoi dati personali è importante per noi. Li trattiamo esclusivamente in conformità al Regolamento generale sulla protezione dei dati (GDPR) e alla legge austriaca sulla protezione dei dati (DSG).',
              'Questo sito <strong>non utilizza cookie</strong>, né strumenti di analisi o tracciamento, e non carica caratteri da server esterni.',
            ],
          },
          {
            title: '3. Hosting e file di log del server',
            html: [
              'Questo sito è ospitato da Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Quando visiti il sito vengono trattati dati tecnicamente necessari: indirizzo IP, data e ora dell’accesso, pagina richiesta, browser e sistema operativo.',
              'Questi dati servono esclusivamente al funzionamento sicuro e stabile del sito (base giuridica: legittimo interesse, art. 6, par. 1, lett. f GDPR) e vengono conservati solo per breve tempo.',
              `Il trasferimento negli USA avviene sulla base della decisione di adeguatezza della Commissione europea (EU-US Data Privacy Framework) o di clausole contrattuali standard. Ulteriori informazioni: ${vercelPrivacy}`,
            ],
          },
          {
            title: '4. Contatti e richieste di prenotazione',
            html: [
              'Se ci contatti via e-mail, telefono o tramite il modulo di richiesta, trattiamo i dati che ci fornisci (ad es. nome, recapiti, periodo del soggiorno, numero di persone) per rispondere alla tua richiesta e gestire la prenotazione (art. 6, par. 1, lett. b GDPR).',
              'Il modulo di richiesta non salva né trasmette dati tramite questo sito: inviandolo viene soltanto preparata un’e-mail che ci invii tu stesso tramite il servizio che scegli (ad es. il tuo programma di posta, Gmail o Outlook.com). Se scegli Gmail o Outlook.com, si applica l’informativa privacy del rispettivo fornitore (Google o Microsoft).',
              'I dati vengono cancellati quando non sono più necessari. I dati di prenotazione e fatturazione sono conservati per il periodo previsto dalla legge (§ 132 BAO, 7 anni).',
            ],
          },
          {
            title: '5. Google Maps',
            html: [
              'Per pianificare il viaggio puoi visualizzare una mappa di Google Maps. Il fornitore è Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda.',
              'La mappa viene caricata <strong>solo dopo il clic su “Carica mappa”</strong>. Solo allora dati come il tuo indirizzo IP vengono trasmessi a Google e possono essere trattati anche negli USA (base giuridica: consenso, art. 6, par. 1, lett. a GDPR). Il consenso vale solo per la visita attuale della pagina.',
              `Il link “Apri il percorso in Google Maps” porta direttamente a Google. Informativa privacy di Google: ${googlePrivacy}`,
            ],
          },
          {
            title: '6. Link esterni',
            html: [
              'Il nostro sito contiene link a siti esterni (ad es. Elferhütte, Google Maps). Cliccandoli si applica l’informativa privacy del rispettivo fornitore.',
            ],
          },
          {
            title: '7. I tuoi diritti',
            html: [
              'Hai diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione, nonché di revocare in qualsiasi momento il consenso prestato. Scrivici a ' + email + '.',
              `Se ritieni che il trattamento dei tuoi dati violi la normativa sulla protezione dei dati, puoi presentare reclamo all’Autorità austriaca per la protezione dei dati (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna: ${dsb}`,
            ],
          },
        ],
      },
    },
  },
};

export const legalPath = (lang: Locale, key: LegalPageKey) => `/${lang}/${legalContent[lang].pages[key].slug}/`;
