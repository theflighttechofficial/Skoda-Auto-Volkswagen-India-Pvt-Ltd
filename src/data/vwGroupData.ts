export interface VWGroupBrand {
  id: string;
  name: string;
  nativeName?: string;
  country: string;
  flag: string;
  headquarters: string;
  foundedYear: number;
  joinedVWGroupYear: number;
  category: 'Core Volume' | 'Progressive Luxury' | 'Sport & Luxury' | 'Commercial & Transport';
  tagline: string;
  brandIdentity: string;
  description: string;
  iconicVehicles: string[];
  keyInnovations: string[];
  groupSynergy: string;
  accentColor: string;
  accentBg: string;
  borderAccent: string;
  websiteUrl?: string;
}

export const VW_GROUP_BRANDS: VWGroupBrand[] = [
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    nativeName: 'Volkswagen Passenger Cars & Commercial Vehicles',
    country: 'Germany',
    flag: '🇩🇪',
    headquarters: 'Wolfsburg, Lower Saxony, Germany',
    foundedYear: 1937,
    joinedVWGroupYear: 1937,
    category: 'Core Volume',
    tagline: 'Das Auto',
    brandIdentity: 'The bedrock of global mobility, democratic engineering, and platform innovation.',
    description:
      'Volkswagen is the founding flagship and technological bedrock of the entire group. From mobilizing millions with the historic Beetle and creating the hot-hatch segment with the Golf GTI, to pioneering the modular MQB architecture and MEB electric platform, Volkswagen engineering drives global automotive standards with timeless design, bulletproof build quality, and everyday usability.',
    iconicVehicles: [
      'Beetle (Type 1) – Over 21.5 million sold worldwide',
      'Golf (GTI, R, e-Golf) – The undisputed global hatchback benchmark',
      'Passat & Arteon – Executive highway cruisers',
      'Tiguan & Touareg – Engineering benchmarks for midsize and luxury SUVs',
      'ID.3, ID.4, ID.7 & ID. Buzz – Electric mobility revolution',
      'Transporter (Bulli / T1-T7) – The iconic commercial and camper van'
    ],
    keyInnovations: [
      'MQB (Modular Transverse Toolkit) – standardizing production across millions of vehicles',
      'TSI Direct-Injection Turbo Petrol & DSG Dual-Clutch transmissions',
      'MEB & SSP dedicated scalable electric vehicle architectures',
      'IQ.DRIVE Level 2+ semi-autonomous highway travel assist'
    ],
    groupSynergy:
      'Provides the core architecture, tooling, and crash engineering blueprints shared with Škoda, SEAT, and Audi, creating unmatched economies of scale.',
    accentColor: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    borderAccent: 'border-sky-500/30'
  },
  {
    id: 'skoda',
    name: 'Škoda Auto',
    nativeName: 'Škoda Auto a.s.',
    country: 'Czech Republic',
    flag: '🇨🇿',
    headquarters: 'Mladá Boleslav, Central Bohemia, Czech Republic',
    foundedYear: 1895,
    joinedVWGroupYear: 1991,
    category: 'Core Volume',
    tagline: 'Simply Clever',
    brandIdentity: 'Human touch, crystalline Bohemian elegance, peerless interior space, and 100% 5-Star safety.',
    description:
      'One of the world’s four oldest continuously operating automotive companies (founded 1895). Škoda combines Czech crystalline artistry, monumental boot capacities, and "Simply Clever" practical touches with robust German engineering. Škoda proudly leads the Volkswagen Group’s strategic expansion in emerging powerhouses like India (leading the SAVWIPL India 2.0 initiative), ASEAN, and the Middle East.',
    iconicVehicles: [
      'Octavia & Octavia vRS – Global best-seller and performance cult legend',
      'Superb – Executive limousine offering class-above rear legroom',
      'Kodiaq & Kodiaq vRS – 7-seater luxury 4x4 European flagship SUV',
      'Kushaq & Slavia – Made-in-India MQB-A0-IN 5-Star crash safety champions',
      'Kylaq – The sub-4m SUV democratizing European TSI engineering',
      'Enyaq iV & Enyaq Coupé vRS – Pure electric performance'
    ],
    keyInnovations: [
      'Simply Clever: 45+ patented ergonomic features (umbrellas in doors, ice scrapers, phone pockets)',
      'Class-leading interior packaging and cavernous boot capacities (600L+ in Octavia)',
      'Lead engineering brand for the localized MQB-A0-IN platform in India',
      '100% 5-Star crash safety rating across its entire Indian portfolio'
    ],
    groupSynergy:
      'Leads the India 2.0 & 2.5 initiatives for the entire group and spearheads volume engineering for South Asia, Middle East, and North Africa.',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    borderAccent: 'border-emerald-500/30'
  },
  {
    id: 'audi',
    name: 'Audi',
    nativeName: 'Audi AG',
    country: 'Germany',
    flag: '🇩🇪',
    headquarters: 'Ingolstadt, Bavaria, Germany',
    foundedYear: 1909,
    joinedVWGroupYear: 1965,
    category: 'Progressive Luxury',
    tagline: 'Vorsprung durch Technik (Progress through Technology)',
    brandIdentity: 'Pioneers of Quattro permanent all-wheel drive, futuristic lighting, and digital cockpits.',
    description:
      'Audi embodies progressive luxury, high-tech minimalism, and athletic poise. Acquired from Auto Union in 1965, Audi revolutionized world rallying and road handling with the legendary Quattro all-wheel-drive system in 1980. Audi leads the Volkswagen Group’s Premium Brand Group, encompassing Lamborghini, Bentley, and Ducati, and pioneers advanced aerodynamic electrification and Le Mans-winning endurance engineering.',
    iconicVehicles: [
      'Ur-Quattro (1980) – Revolutionized Group B rallying and road safety forever',
      'RS6 Avant – The ultimate super-estate defying physics',
      'R8 V10 – Mid-engine naturally aspirated supercar icon',
      'A4, A6, A8 – Defining executive and presidential German luxury',
      'e-tron GT & RS e-tron GT – Grand tourer electric performance masterpiece',
      'Q5, Q7, Q8 – High-riding Quattro luxury SUVs'
    ],
    keyInnovations: [
      'Quattro permanent mechanical all-wheel drive with self-locking center differential',
      'Audi Space Frame (ASF) lightweight aluminum body technology',
      'Digital Matrix LED and Laser headlights with dynamic projection',
      'Virtual Cockpit high-resolution driver instrument display'
    ],
    groupSynergy:
      'Heads the Premium Brand Group (Audi, Lamborghini, Bentley, Ducati) and co-developed the premium PPE (Premium Platform Electric) and MLB longitudinal architectures.',
    accentColor: 'text-red-400',
    accentBg: 'bg-red-500/10',
    borderAccent: 'border-red-500/30'
  },
  {
    id: 'seat',
    name: 'SEAT',
    nativeName: 'SEAT S.A. (Sociedad Española de Automóviles de Turismo)',
    country: 'Spain',
    flag: '🇪🇸',
    headquarters: 'Martorell, Barcelona, Catalonia, Spain',
    foundedYear: 1950,
    joinedVWGroupYear: 1986,
    category: 'Core Volume',
    tagline: 'Auto Emoción (Car Emotion)',
    brandIdentity: 'Mediterranean passion, spirited youth appeal, and accessible urban agility.',
    description:
      'SEAT brought Mediterranean design flair and youthful exuberance to the Volkswagen Group when it joined in 1986 as the group’s first major non-German subsidiary. Based right outside Barcelona in Martorell, SEAT is renowned for emotional styling, sharp chassis dynamics, and creating compact mobility staples like the Ibiza and Leon that have defined European youth culture for decades.',
    iconicVehicles: [
      'Ibiza – Over 6 million sold across 5 generations, the heartbeat of youth motoring',
      'Leon – Dynamic hatchback and estate with agile multi-link suspension',
      'Arona – Best-selling urban crossover with Mediterranean flair',
      'Ateca & Tarraco – Practical family SUVs with sharp Iberian styling lines',
      'SEAT 600 (Historic 1957) – The vehicle that put post-war Spain on wheels'
    ],
    keyInnovations: [
      'Chassis tuning emphasizing agile, playful steering response on twisty European roads',
      'SEAT MÓ urban micro-mobility division (electric scooters and city transport)',
      'Bi-fuel Compressed Natural Gas (TGI) powertrains for low carbon emissions',
      'Martorell mega-factory transitioning into a major European EV battery hub'
    ],
    groupSynergy:
      'Collaborates directly with Škoda and VW on small car (MQB A0) vehicle architecture and software integration.',
    accentColor: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    borderAccent: 'border-orange-500/30'
  },
  {
    id: 'cupra',
    name: 'CUPRA',
    nativeName: 'CUPRA (SEAT S.A.)',
    country: 'Spain',
    flag: '🇪🇸',
    headquarters: 'Martorell, Barcelona, Spain',
    foundedYear: 2018,
    joinedVWGroupYear: 2018,
    category: 'Sport & Luxury',
    tagline: 'Passion for Performance',
    brandIdentity: 'Unconventional high-performance challenger brand with avant-garde copper aesthetics.',
    description:
      'Spun off from SEAT’s high-performance motorsport wing in 2018, CUPRA is the fastest-growing automotive brand in Europe. Embracing a daring, unconventional persona with signature copper accents, dark petrol blues, and sculptured parametric surfaces, CUPRA delivers emotional driving machines for enthusiasts who reject traditional corporate uniformity.',
    iconicVehicles: [
      'Formentor – The brand’s first standalone bespoke crossover, available up to 390 PS (VZ5 5-cylinder)',
      'Born – High-performance rear-wheel-drive electric hot hatch',
      'Tavascan – All-electric SUV coupé with futuristic interior architecture',
      'Terramar – Electrified sports SUV celebrating Catalonia’s historic banked racetrack',
      'UrbanRebel / Raval – Electric urban pocket-rocket concept'
    ],
    keyInnovations: [
      'Daring copper metallic detailing and recycled SEAQUAL yarn sport bucket seats',
      'Adaptive Dynamic Chassis Control tuned for visceral road feedback',
      'High-output plug-in hybrid (e-HYBRID) drivetrains with electric boost mode',
      'Extreme E electric rally racing championship pedigree'
    ],
    groupSynergy:
      'Provides the Group with an edgy, youth-targeted electric performance brand, capturing buyers seeking an alternative to legacy luxury marques.',
    accentColor: 'text-amber-500',
    accentBg: 'bg-amber-500/10',
    borderAccent: 'border-amber-500/30'
  },
  {
    id: 'porsche',
    name: 'Porsche',
    nativeName: 'Dr. Ing. h.c. F. Porsche AG',
    country: 'Germany',
    flag: '🇩🇪',
    headquarters: 'Stuttgart-Zuffenhausen, Baden-Württemberg, Germany',
    foundedYear: 1931,
    joinedVWGroupYear: 2012,
    category: 'Sport & Luxury',
    tagline: 'There is no substitute',
    brandIdentity: 'The definitive sports car benchmark, motorsport supremacy, and track-to-road engineering.',
    description:
      'Founded by visionary engineer Ferdinand Porsche, the brand’s history is inextricably woven with Volkswagen from the very beginning. Fully unified into the group in 2012, Porsche is universally revered as the apex of driver engagement and mechanical engineering. With over 30,000 racing victories including a record 19 overall wins at the 24 Hours of Le Mans, every Porsche is engineered on the racetrack.',
    iconicVehicles: [
      '911 (Carrera, GT3 RS, Turbo S, Dakar) – The eternal silhouette of sports car perfection since 1963',
      '718 Cayman & Boxster – Mid-engine handling purity and razor-sharp agility',
      'Taycan – Groundbreaking 800V electric sports sedan with repeatable launch control',
      'Panamera – High-speed four-door luxury sports saloon',
      'Cayenne & Macan – SUVs with pure sports car DNA and class-leading chassis dynamics',
      'Carrera GT & 918 Spyder – Legendary analog and hybrid hypercar icons'
    ],
    keyInnovations: [
      'PDK (Porsche Doppelkupplung) – Pioneer of ultra-fast dual-clutch transmissions',
      '800-volt high-speed DC charging architecture on the Taycan',
      'Active Aerodynamics (PAA) and rear-axle steering system',
      'Carbon-Ceramic Brakes (PCCB) capable of track-day endurance under extreme thermal loads'
    ],
    groupSynergy:
      'Co-leads performance chassis development, sports car architecture (MSB platform, PPE platform), and synthetic e-fuels development (Haru Oni plant).',
    accentColor: 'text-amber-300',
    accentBg: 'bg-amber-500/10',
    borderAccent: 'border-amber-500/30'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    nativeName: 'Automobili Lamborghini S.p.A.',
    country: 'Italy',
    flag: '🇮🇹',
    headquarters: 'Sant’Agata Bolognese, Emilia-Romagna, Italy',
    foundedYear: 1963,
    joinedVWGroupYear: 1998,
    category: 'Sport & Luxury',
    tagline: 'Expect the Unexpected',
    brandIdentity: 'Uncompromising Italian super sports cars, screaming V10 & V12 engines, and stealth-fighter styling.',
    description:
      'Founded by Ferruccio Lamborghini in 1963 to build the ultimate super sports car, Automobili Lamborghini joined the Volkswagen Group (via Audi) in 1998. The union brought German precision manufacturing and financial stability to Italian artistic madness. From the jaw-dropping Miura that invented the supercar to the Countach, Diablo, Aventador, and the hybrid Revuelto, Lamborghini creates raw emotional theater on wheels.',
    iconicVehicles: [
      'Miura (1966) – The world’s first transverse mid-engine supercar',
      'Countach – The geometric wedge poster car that defined the 1970s and 1980s',
      'Diablo, Murciélago & Aventador – Legendary naturally-aspirated V12 flagship lineage',
      'Gallardo & Huracán – Over 34,000 screaming V10 supercars produced',
      'Urus & Urus SE – The world’s first and fastest Super SUV',
      'Revuelto – 1,015 PS V12 High Performance Electrified Vehicle (HPEV)'
    ],
    keyInnovations: [
      'Forged Composites® carbon-fiber structural molding technology',
      'ALA (Aerodinamica Lamborghini Attiva) active aero with vectoring flaps',
      'Naturally aspirated V10 & V12 powertrains paired with tri-motor hybrid electrification',
      'Super SUV chassis dynamics with 48V active anti-roll bars and rear-wheel steer'
    ],
    groupSynergy:
      'Collaborates closely with Audi and Porsche on high-performance V8 engines, carbon monocoque production, and sharing the MLB Evo platform for the Urus.',
    accentColor: 'text-yellow-400',
    accentBg: 'bg-yellow-500/10',
    borderAccent: 'border-yellow-500/30'
  },
  {
    id: 'bentley',
    name: 'Bentley Motors',
    nativeName: 'Bentley Motors Limited',
    country: 'United Kingdom',
    flag: '🇬🇧',
    headquarters: 'Crewe, Cheshire, England, United Kingdom',
    foundedYear: 1919,
    joinedVWGroupYear: 1998,
    category: 'Sport & Luxury',
    tagline: 'Relentlessly Extraordinary',
    brandIdentity: 'The world’s most sought-after luxury car brand, pairing bespoke artisan craftsmanship with unstoppable power.',
    description:
      'Founded in 1919 by W.O. Bentley with the mission "to build a fast car, a good car, the best in its class," Bentley is synonymous with grand touring luxury. Joining the Volkswagen Group in 1998, Bentley transformed its historic Crewe factory into a carbon-neutral temple of handcrafted leather, book-matched veneers, and mighty W12 and V8 engines capable of effortlessly crossing continents at 200 mph.',
    iconicVehicles: [
      'Continental GT – The definitive luxury Grand Tourer that revived the brand in 2003',
      'Flying Spur – The world’s finest four-door high-performance luxury sedan',
      'Bentayga – The pioneer of the ultra-luxury pinnacle SUV class',
      'Blower Bentley (1929) – The supercharged racing legend of Le Mans',
      'Mulsanne – The ultimate handcrafted presidential British flagship limousine',
      'Batur & Bacalar – Mulliner coachbuilt ultra-exclusive collector coachworks'
    ],
    keyInnovations: [
      'Handcrafted bespoke Mulliner coachbuilding and book-matched natural wood veneers',
      '6.0-liter twin-turbo W12 engine – the world’s most successful 12-cylinder automotive powerplant',
      'Active All-Wheel Drive and 48-volt Bentley Dynamic Ride electric anti-roll control',
      'Three-sided Rotating Dashboard display seamlessly alternating between veneer, touchscreen, and analog dials'
    ],
    groupSynergy:
      'Shares advanced large-vehicle architecture (MSB platform) with Porsche and Audi, while contributing world-leading artisan craftsmanship and interior metallurgy.',
    accentColor: 'text-emerald-300',
    accentBg: 'bg-emerald-500/10',
    borderAccent: 'border-emerald-500/30'
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    nativeName: 'Bugatti Automobiles S.A.S. (Bugatti Rimac)',
    country: 'France',
    flag: '🇫🇷',
    headquarters: 'Molsheim, Alsace, France',
    foundedYear: 1909,
    joinedVWGroupYear: 1998,
    category: 'Sport & Luxury',
    tagline: 'If comparable, it is no longer Bugatti',
    brandIdentity: 'The absolute pinnacle of automotive engineering, bespoke luxury, and hypercar record-breaking.',
    description:
      'Founded by Ettore Bugatti in 1909 in Molsheim, Bugatti built the most artistic, beautiful, and dominant racing cars in human history (Type 35, Type 57 SC Atlantic). Acquired by Ferdinand Piëch and Volkswagen Group in 1998, Bugatti achieved the impossible: the 1,001 PS Veyron 16.4 that broke the 400 km/h barrier. Today, operated via the Bugatti Rimac joint venture (in which Porsche holds a 45% stake), Bugatti continues as an ultra-luxury jewel within the group ecosystem.',
    iconicVehicles: [
      'Veyron 16.4 (2005) – 1,001 PS, 8.0L Quad-Turbo W16, first production car past 407 km/h',
      'Chiron & Chiron Super Sport 300+ – The first production car to breach 300 mph (490.48 km/h)',
      'Divo, Centodieci & La Voiture Noire – Bespoke hypercar coachbuilt triumphs',
      'Tourbillon (2024) – 1,800 PS V16 naturally aspirated hybrid masterpiece with Swiss horology dashboard',
      'Type 57 SC Atlantic (1936) – The most valuable and revered automotive sculpture on Earth'
    ],
    keyInnovations: [
      '8.0-liter Quad-Turbocharged W16 engine with 4 titanium turbochargers and 10 radiators',
      'Carbon-fiber monocoque rigidity exceeding Formula 1 standards (50,000 Nm/degree)',
      '3D-printed titanium brake calipers and aerodynamic active airbrakes',
      'Tourbillon mechanical skeletonized dashboard designed by Swiss luxury watchmakers'
    ],
    groupSynergy:
      'Maintained in deep synergy with Porsche and Volkswagen Group, sharing computational fluid dynamics supercomputers, crash test facilities, and extreme materials science.',
    accentColor: 'text-indigo-400',
    accentBg: 'bg-indigo-500/10',
    borderAccent: 'border-indigo-500/30'
  },
  {
    id: 'man',
    name: 'MAN Truck & Bus',
    nativeName: 'MAN Truck & Bus SE (TRATON GROUP)',
    country: 'Germany',
    flag: '🇩🇪',
    headquarters: 'Munich, Bavaria, Germany',
    foundedYear: 1758,
    joinedVWGroupYear: 2011,
    category: 'Commercial & Transport',
    tagline: 'Ultramodern Vehicles, Sustainable Solutions',
    brandIdentity: 'Heavy-duty transport titan, world-class European logistics backbone, and clean e-mobility trucks.',
    description:
      'With roots tracing back to 1758 as the St. Antony ironworks (where Rudolf Diesel developed the world’s first diesel engine at MAN in 1893–1897), MAN is an industrial giant. Part of the Volkswagen Group’s commercial vehicle division TRATON GROUP, MAN builds heavy-duty long-haul trucks, city and touring buses, vans, and diesel/gas power engines that keep global trade moving.',
    iconicVehicles: [
      'MAN TGX – Winner of "International Truck of the Year", the long-distance freight hero',
      'MAN TGS & TGM – Rugged vocational construction and municipal workhorses',
      'MAN Lion’s City & Lion’s Coach – State-of-the-art public transit buses and luxury coaches',
      'MAN eTGX & eTGS – Zero-emission heavy electric trucks with 800 km daily operating range',
      'MAN TGE – Versatile commercial panel van'
    ],
    keyInnovations: [
      'Historical birthplace of the Diesel engine (Rudolf Diesel & MAN in Augsburg, 1897)',
      'OptiView digital camera mirror system eliminating blind spots for massive haulers',
      'Megawatt Charging System (MCS) for ultra-fast commercial truck charging up to 1,000 kW',
      'MAN HydroDrive engageable hydrostatic front-wheel drive for construction tippers'
    ],
    groupSynergy:
      'Co-anchors the TRATON GROUP alongside Scania and Navistar, leveraging cross-brand modular powertrain platforms (Common Base Engine) and autonomous freight algorithms.',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    borderAccent: 'border-amber-500/30'
  },
  {
    id: 'scania',
    name: 'Scania',
    nativeName: 'Scania AB (TRATON GROUP)',
    country: 'Sweden',
    flag: '🇸🇪',
    headquarters: 'Södertälje, Stockholm County, Sweden',
    foundedYear: 1891,
    joinedVWGroupYear: 2008,
    category: 'Commercial & Transport',
    tagline: 'Driving the shift towards a sustainable transport system',
    brandIdentity: 'The undisputed "King of the Road", iconic V8 heavy haulage engines, and Scandinavian durability.',
    description:
      'Founded in 1891 in Södertälje, Sweden, Scania is universally revered among truckers as the ultimate premium commercial vehicle. Acquired into the Volkswagen Group and now a crown jewel of the TRATON GROUP, Scania is famous for its thunderous 770 hp V8 engines—the most powerful truck engines in Europe—and its industry-leading commitment to fossil-free biofuel, hydrogen, and battery-electric heavy transport.',
    iconicVehicles: [
      'Scania 770 S V8 – The undisputed 770 hp / 3,700 Nm "King of the Road" heavy hauler',
      'Scania R-Series – Award-winning premium long-haul tractor unit',
      'Scania Super Powertrain – The benchmark for fuel-efficiency with 50% brake thermal efficiency',
      'Scania Touring & Citywide – Scandinavian luxury coaches and low-entry city buses',
      'Scania Battery Electric Truck (Regional & Heavy Haul) – Zero-emission 40-tonne transport'
    ],
    keyInnovations: [
      'Legendary 16.4-liter V8 engine delivering up to 770 hp and 3,700 Nm of pulling power',
      'Pioneering modular product system where thousands of chassis variants use standardized parts',
      'Fossil-free transport solutions running on 100% HVO biodiesel and bio-CNG/LNG',
      'Scania Zone geo-fencing speed and emissions limiter for zero-emission city centers'
    ],
    groupSynergy:
      'Forms the technological vanguard of the TRATON GROUP, collaborating with MAN on battery chemistry, hydrogen fuel cell research, and autonomous freight platooning.',
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    borderAccent: 'border-blue-500/30'
  },
  {
    id: 'ducati',
    name: 'Ducati',
    nativeName: 'Ducati Motor Holding S.p.A.',
    country: 'Italy',
    flag: '🇮🇹',
    headquarters: 'Borgo Panigale, Bologna, Italy',
    foundedYear: 1926,
    joinedVWGroupYear: 2012,
    category: 'Sport & Luxury',
    tagline: 'Style, Sophistication, Performance',
    brandIdentity: 'Premier Italian racing motorcycles, Desmodromic valves, and undisputed MotoGP & WorldSBK world champions.',
    description:
      'Founded in 1926 in Bologna, Ducati is the Ferrari of two wheels. Acquired under Audi in 2012, Ducati has dominated global motorsport, capturing multiple consecutive MotoGP and World Superbike (WorldSBK) World Championships with the Desmosedici. Ducati combines seductive Italian styling, unmistakable dry-clutch acoustics, and heart-stopping Desmodromic V2 and V4 engines.',
    iconicVehicles: [
      'Panigale V4 & V4 R – Street-legal MotoGP missile producing over 240 hp at 16,500 RPM',
      'Monster – The naked bike that created an entire motorcycling genre in 1993',
      'Multistrada V4 – The globe-trotting adventure motorcycle with front and rear radar cruise control',
      'Diavel V4 – Muscular power cruiser with stunning four-pipe exhaust soundtrack',
      'Hypermotard 698 Mono – The world’s most powerful single-cylinder supermoto'
    ],
    keyInnovations: [
      'Desmodromic mechanical valve closing system eliminating valve float at extreme RPM',
      'Twin Pulse and 90° V4 Granturismo engine configurations',
      'World’s first motorcycle equipped with front and rear Adaptive Cruise Control (ACC) and blind-spot radar',
      'Biplane aerodynamic downforce winglets derived from MotoGP wind tunnels'
    ],
    groupSynergy:
      'Operates under the Audi Premium Brand Group, sharing advanced electronics, lightweight carbon composites, and aerodynamic wind tunnels.',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500/10',
    borderAccent: 'border-rose-500/30'
  },
  {
    id: 'savwipl',
    name: 'SAVWIPL (Škoda Auto Volkswagen India)',
    nativeName: 'Škoda Auto Volkswagen India Private Limited',
    country: 'India',
    flag: '🇮🇳',
    headquarters: 'Chakan (Pune) & Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra, India',
    foundedYear: 2001,
    joinedVWGroupYear: 2019,
    category: 'Core Volume',
    tagline: 'Engineering European Safety & Performance in India',
    brandIdentity: 'The Indian manufacturing and engineering vanguard for Škoda, Volkswagen, Audi, Porsche, and Lamborghini.',
    description:
      'SAVWIPL is the unified Indian entity representing the full might of the Volkswagen Group. Headquartered at its 540-acre mega-manufacturing campus in Chakan, Pune, along with its executive and luxury assembly line in Aurangabad, SAVWIPL spearheaded the historic €1 Billion India 2.0 initiative. SAVWIPL produces award-winning cars with up to 95% localization, exports to over 30 countries, and boasts a historic 100% 5-Star crash safety rating across its volume portfolio.',
    iconicVehicles: [
      'Škoda Kylaq, Kushaq & Slavia (Built on MQB-A0-IN at Chakan)',
      'Volkswagen Taigun & Virtus (Built on MQB-A0-IN at Chakan)',
      'Škoda Kodiaq, Superb & Octavia (Assembled at Aurangabad Facility)',
      'Audi A4, A6, Q3, Q5 & Q7 (CKD Assembly at Aurangabad Facility)',
      'Porsche & Lamborghini (National Distribution, Retail & Racing Programs across India)'
    ],
    keyInnovations: [
      'MQB-A0-IN Platform – Tailored for Indian road conditions, thermal extremes, and localized supply chains',
      'Pioneering 100% 5-Star Crash Safety across all volume models in Global NCAP and Bharat NCAP',
      '1.0 TSI & 1.5 TSI EVO Engine assembly and testing lines at Chakan plant',
      'Major green factory initiative with one of India’s largest rooftop solar installations (18.5 MW)'
    ],
    groupSynergy:
      'Acts as the strategic regional manufacturing and R&D hub for the entire Volkswagen Group in South Asia, exporting vehicles to Africa, ASEAN, and Latin America.',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    borderAccent: 'border-emerald-500/30'
  }
];

export interface VWGroupStat {
  label: string;
  value: string;
  subtext: string;
}

export const VW_GROUP_STATS: VWGroupStat[] = [
  {
    label: 'Global Group Brands',
    value: '10+ Iconic Marques',
    subtext: 'From volume essentials to hypercars and heavy transport'
  },
  {
    label: 'Annual Vehicle Deliveries',
    value: '9+ Million',
    subtext: 'Delivering European engineering across 150+ countries'
  },
  {
    label: 'Manufacturing Plants',
    value: '110+ Worldwide',
    subtext: 'Including state-of-the-art facilities in Chakan and Aurangabad, India'
  },
  {
    label: 'Indian Safety Pedigree',
    value: '100% 5-Star',
    subtext: 'Every MQB-A0-IN car certified 5 Stars by B-NCAP & G-NCAP'
  }
];

export const VW_GROUP_SHARED_TECH = [
  {
    title: 'Modular Platform Architectures (MQB, MLB, MEB, PPE)',
    description:
      'Standardized sub-frame, engine mounting, and crash structures that allow Škoda to share billions in chassis R&D with Audi, Volkswagen, and Porsche while customizing interior packaging and suspension tuning for Czech and Indian requirements.',
    icon: 'Layers'
  },
  {
    title: 'EA888 TSI & EA211 Powertrain Mastery',
    description:
      'The legendary EA888 turbo-petrol engine powers everything from the Škoda Octavia vRS and Kodiaq vRS to the Golf GTI, Audi S3, Cupra Formentor, and Porsche Macan, tuned for razor-sharp throttle response and low thermal inertia.',
    icon: 'Zap'
  },
  {
    title: 'DSG Dual-Clutch Direct-Shift Gearboxes',
    description:
      'Pioneered by the Group from Porsche racing heritage, DSG transmissions use twin concentric clutches to pre-select the next gear, delivering lightning-fast 8-millisecond shift times and zero torque interruption.',
    icon: 'Cpu'
  },
  {
    title: '100% Hot-Formed Boron Steel Safety Cages',
    description:
      'Ultra-high-strength hot-stamped steel panels with laser-welded seams protect occupant safety cells across every group car, producing the highest adult and child safety scores ever recorded in Indian automotive testing.',
    icon: 'ShieldCheck'
  }
];
