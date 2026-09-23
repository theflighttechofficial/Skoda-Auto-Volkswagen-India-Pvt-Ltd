import { HistoryEra } from './historyData';

export const SEAT_HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'founding-seat',
    period: '1950 – 1982',
    title: 'SEAT Founded as Spain’s National Carmaker',
    tagline: 'A state-backed manufacturer built to motorise post-war Spain, licence-building Fiat designs for three decades',
    location: 'Barcelona & Martorell, Spain',
    summary:
      'Sociedad Española de Automóviles de Turismo (SEAT) was founded in 1950 as a state-sponsored industrial venture, initially building licensed Fiat designs like the SEAT 600 — the car that motorised an entire generation of Spanish families in the 1950s and 60s. For over three decades, SEAT operated as Fiat’s exclusive Spanish licensee, developing genuine manufacturing expertise while remaining tied to Italian product decisions.',
    highlights: [
      '1950: SEAT founded in Barcelona as Spain’s national automobile manufacturer',
      '1957: The SEAT 600 launches, motorising post-war Spain much as the Fiat 500 did in Italy',
      'SEAT operates as Fiat’s exclusive Spanish licensee for over 30 years',
      'Spanish manufacturing expertise builds steadily despite dependence on Fiat product decisions'
    ],
    keyMilestones: [
      {
        year: '1950',
        title: 'SEAT Founded in Barcelona',
        description: 'The Spanish state, in partnership with Fiat, establishes SEAT to build a domestic automotive industry.'
      },
      {
        year: '1957',
        title: 'The SEAT 600 Launches',
        description: 'A licence-built Fiat 600 becomes Spain’s defining people’s car, selling nearly 800,000 units over its production run.'
      },
      {
        year: '1982',
        title: 'The Fiat Partnership Ends',
        description: 'SEAT’s licensing agreement with Fiat concludes, leaving the company searching for a new industrial partner and product strategy.'
      }
    ],
    innovations: [
      'Spain’s first large-scale domestic automobile manufacturing base',
      'Licence-built Fiat platforms adapted for Spanish market conditions and pricing',
      'Decades of manufacturing know-how built ahead of eventual independence from Fiat'
    ],
    imageType: 'founding'
  },
  {
    id: 'volkswagen-group-acquisition-seat',
    period: '1982 – 1990',
    title: 'The Volkswagen Group Acquisition',
    tagline: 'German engineering investment gives SEAT its own platforms and a genuine sporting identity for the first time',
    location: 'Martorell, Spain & Wolfsburg, Germany',
    summary:
      'Following the end of its Fiat partnership, SEAT began a technology-sharing agreement with Volkswagen in 1982, culminating in Volkswagen acquiring a majority stake in 1986 and full ownership by 1990. The acquisition funded the state-of-the-art Martorell plant and gave SEAT access to genuine Volkswagen Group platform engineering for the first time, while allowing the brand to develop its own sportier, more overtly Spanish design identity distinct from Volkswagen and Škoda.',
    highlights: [
      '1982: SEAT begins a technology-sharing partnership with Volkswagen',
      '1986: Volkswagen acquires a majority stake in SEAT',
      '1990: Volkswagen completes full ownership of SEAT',
      'The Martorell plant, opened in 1993, becomes SEAT’s modern manufacturing home'
    ],
    keyMilestones: [
      {
        year: '1982',
        title: 'Volkswagen Technology Partnership Begins',
        description: 'SEAT signs a technology-transfer agreement with Volkswagen following the end of its Fiat licensing arrangement.'
      },
      {
        year: '1986',
        title: 'Volkswagen Takes Majority Ownership',
        description: 'Volkswagen acquires a controlling stake in SEAT, formally bringing the brand into the Group fold.'
      },
      {
        year: '1990',
        title: 'Full Volkswagen Group Ownership',
        description: 'Volkswagen completes full acquisition of SEAT, cementing its position as the Group’s Spanish, sportier-positioned brand.'
      }
    ],
    innovations: [
      'Access to genuine Volkswagen Group platform engineering for the first time in SEAT’s history',
      'The Martorell manufacturing plant, among the most advanced in Europe at its 1993 opening',
      'A distinct, sportier Spanish design identity established separate from Volkswagen and Škoda'
    ],
    imageType: 'vw-merger'
  },
  {
    id: 'cupra-performance-era',
    period: '1996 – 2021',
    title: 'The Cupra Performance Sub-Brand Era',
    tagline: 'SEAT’s in-house hot-hatch division builds a genuine performance following before spinning off as its own standalone marque',
    location: 'Martorell, Spain',
    summary:
      'SEAT introduced the "Cupra" (from Cup Racing) badge in 1996 on the Ibiza Cupra, marking the start of a genuine in-house performance division. Over the following 25 years, Cupra-badged Leons and Ibizas built a loyal European hot-hatch following, culminating in the 300 PS Leon Cupra sharing its EA888 engine architecture with the Volkswagen Golf R and Audi S3. In 2018, Volkswagen Group announced Cupra would become a standalone brand, formally separating from SEAT by 2021 to pursue its own electrified performance and SUV lineup.',
    highlights: [
      '1996: The Ibiza Cupra introduces the Cupra performance badge',
      'The Leon Cupra becomes SEAT’s flagship performance model, sharing architecture with the Golf R',
      '2018: Volkswagen Group announces Cupra will become a standalone marque',
      '2021: Cupra formally separates from SEAT as its own independent brand'
    ],
    keyMilestones: [
      {
        year: '1996',
        title: 'The Ibiza Cupra Launches',
        description: 'SEAT introduces the Cupra performance badge on a hot-hatch version of the Ibiza, beginning a 25-year in-house performance tradition.'
      },
      {
        year: '2018',
        title: 'Cupra Announced as a Standalone Brand',
        description: 'Volkswagen Group confirms Cupra will separate from SEAT, initially continuing to badge shared models before full independence.'
      },
      {
        year: '2021',
        title: 'Cupra Formally Separates from SEAT',
        description: 'Cupra becomes a fully standalone Volkswagen Group marque with its own model lineup, ending SEAT’s in-house performance sub-brand era.'
      }
    ],
    innovations: [
      'A quarter-century of SEAT-badged Cupra hot hatches building genuine European performance credibility',
      'Shared EA888 turbo engine architecture with the Volkswagen Golf R and Audi S3',
      'The template for Cupra’s eventual standalone identity as a performance and electrification-focused Group brand'
    ],
    imageType: 'winged-arrow'
  },
  {
    id: 'seat-not-in-india-era',
    period: 'Present',
    title: 'SEAT & the Indian Market — A Deliberate Absence',
    tagline: 'The one current Volkswagen Group passenger-car brand with no distribution, import programme or dealer network in India',
    location: 'Martorell, Spain (No Indian Operations)',
    summary:
      'Unlike Škoda, Volkswagen, Audi, Porsche, Lamborghini and Bentley, SEAT has never established an official presence in India. The Volkswagen Group has consistently concentrated its Indian mainstream-volume strategy under the Škoda and Volkswagen brands rather than add a third overlapping nameplate, leaving SEAT’s Ibiza, Arona, Leon, Ateca and Tarraco lineup unavailable through any authorised Indian channel — no CBU imports, no CKD assembly, no dealer network and no factory-backed service or warranty support. The models are included in this showcase purely as global reference content for enthusiasts comparing SEAT’s Spanish, value-sport positioning against its Group siblings that are actually sold in India.',
    highlights: [
      'SEAT has no official CBU import programme, CKD assembly or dealer network in India',
      'No SEAT model carries Bharat NCAP or India-specific homologation of any kind',
      'The Volkswagen Group has kept its Indian volume strategy concentrated under Škoda and Volkswagen',
      'All SEAT content in this showcase reflects European/global reference specifications only, for enthusiast comparison'
    ],
    keyMilestones: [
      {
        year: 'Never',
        title: 'No Official India Launch',
        description: 'SEAT has never announced or executed an entry into the Indian passenger-car market, unlike every other current Volkswagen Group brand.'
      },
      {
        year: 'Today',
        title: 'Zero Dealer or Service Network',
        description: 'There are no authorised SEAT showrooms, service centres or spare-parts channels anywhere in India.'
      },
      {
        year: 'Today',
        title: 'Reference-Only Content in This Showcase',
        description: 'Every SEAT price, spec and safety rating shown here is explicitly flagged as a global reference figure, never a purchasable Indian price.'
      }
    ],
    innovations: [
      'A rare case study in Group brand strategy: not every Volkswagen Group marque is deployed to every market',
      'Illustrates how Škoda and Volkswagen alone cover the Group’s Indian mainstream-volume ambitions',
      'Demonstrates the showcase’s commitment to flagging market-availability honestly rather than fabricating a fictional India presence'
    ],
    imageType: 'india-2-0'
  }
];

export interface SeatHeritageElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  visualDetail: string;
}

export const SEAT_HERITAGE_ELEMENTS: SeatHeritageElement[] = [
  {
    id: 'spanish-national-carmaker',
    title: 'Spain’s Original National Carmaker',
    subtitle: 'Founded in 1950 to motorise post-war Spain',
    description:
      'SEAT began as a state-backed venture building licensed Fiat designs, most famously the SEAT 600, which motorised an entire generation of Spanish families through the 1950s and 60s.',
    icon: 'Flag',
    visualDetail: 'The SEAT 600 sold nearly 800,000 units, cementing SEAT’s place as Spain’s people’s car maker.'
  },
  {
    id: 'volkswagen-group-stewardship-seat',
    title: 'The Volkswagen Group Stewardship',
    subtitle: 'Full Group ownership since 1990',
    description:
      'Volkswagen’s acquisition, completed in 1990, gave SEAT access to genuine Group platform engineering for the first time and funded the state-of-the-art Martorell manufacturing plant.',
    icon: 'Globe2',
    visualDetail: 'SEAT models share MQB and MQB-Evo platform architecture with Škoda, Volkswagen and Audi siblings.'
  },
  {
    id: 'cupra-heritage-seat',
    title: 'The Birthplace of Cupra',
    subtitle: 'A 25-year in-house performance tradition, 1996–2021',
    description:
      'Before Cupra became its own standalone Volkswagen Group brand in 2021, it was SEAT’s in-house performance badge, producing hot hatches like the 300 PS Leon Cupra.',
    icon: 'Flame',
    visualDetail: 'The Leon Cupra shared its EA888 engine architecture with the Volkswagen Golf R and Audi S3.'
  },
  {
    id: 'not-sold-in-india-seat',
    title: 'Not Currently Sold in India',
    subtitle: 'The one current Group brand absent from the Indian market',
    description:
      'SEAT has no official distribution, import programme or dealer network in India. Every SEAT model in this showcase is presented as a global reference for enthusiast comparison, not a purchasable Indian configuration.',
    icon: 'Factory',
    visualDetail: 'No CBU import, no CKD assembly, no dealer network, no Bharat NCAP homologation — zero official India presence.'
  }
];
