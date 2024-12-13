import { Link } from "react-router-dom";
const keyboards = [
  {
    id: 1,
    name: "SHIFT V2 Mechanical Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/3bWXYP5qRqWTV2S8wkQj_PC2.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$179",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/V8JeDuPReuCx6xtP74gw_DROP_SHIFT_DESK_6292-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/UPSO6B8tQFqzOG1R4hDe_DROP_SHIFT_DESK_6273-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/Hm0kedS5mTLVQlFqIgZA_DROP_SHIFT_DESK_6276-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Work the Second Shift",
    description1:
      "They say bigger is better—but can bigger get better? For our fan-favorite, compact full-size keyboard, of course it can. Meet the SHIFT V2: the community-inspired evolution of our largest desktop exclusive. Taking input from over five years of reviews, we made several key changes to this second-generation standout—including an upgraded PCBA with 5-pin switch support, a new STM32 chipset with better QMK performance, a range of RGB LED improvements, and an updated configurator for on-the-fly keymapping. Beyond the electronics, we also outfitted the SHIFT V2 with some new, top-tier enthusiast components—including our Phantom Stabilizers and an array of PORON foam and IXPE foam for a refined typing sound and feel. Of course, we also kept the things our community loved—like the CNC-machined aluminum case, magnetic feet for an adjustable typing angle, doubleshot PBT shine-through keycaps, and dual USB-C ports. It’s the highly anticipated sequel, with all the greatest hits. It’s the SHIFT V2.",
    header2: "A Refined PCBA With Upgraded QMK, VIA & Configurator Performance",
    description2:
      "Alongside the lighting, nearly all of the electronics in the SHIFT V2 have undergone their own enthusiast evolutions. Take the new PCBA, which features reworked traces for a neater aesthetic, plus support for 5-pin switches to accommodate a much wider range of typing hardware. There’s also the new STM32 chipset—a major upgrade from the original SHIFT’s Microchip chipset, allowing for quicker implementation of new QMK features and updates. (VIA support is also included, with Vial support coming soon.) Finally, unveiled for the first time on the SHIFT V2 is our revamped Keyboard Configurator, which now allows for on-the-fly keymapping without the need for separate flashing or other setup steps. (This latest version of our Keyboard Configurator is similar to the VIA configurator, but it offers additional security checks in order to ensure higher protection against malicious actors.) It’s the finishing touch to an attentive electronics refresh—all to optimize personalization and performance, from hardware to software.",
    keys: "99 keys",
    layout: "Layout: Compact 1800",
    case: "Case material: Anodized, CNC-machined aluminum",
    keycaps: "Keycap material: Doubleshot PBT with shine-through legends",
    switches:
      "Switches: Gateron Yellow KS3 Switches (linear) or Drop Holy Panda X Clear Switches (tactile)",
    stabilizers: "Stabilizers: Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 2,
    name: "Drop Expression Series Shinai Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-shinai-keyboard/FP/0DAFaytTlKov9F9y5IJ0_1947-copy-pc-cc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$179",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-shinai-keyboard/FP/0yeSF4RjCTUx2N7afpg5_1167-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-shinai-keyboard/FP/R9e2hHZ4SWqQuTfmPSh6_1190-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-shinai-keyboard/FP/h1W4TfT2S6SuyYA0eLGA_1155-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Traditional Sword Turned Enthusiast Keyboard",
    description1:
      "Training in the ancient Japanese martial art of Kendo centers on the shinai: a lightweight-yet-powerful sparring sword made of bamboo. Typing on the next installment in our Expression Series also centers on the Shinai: an enthusiast keyboard featuring tranquil bamboo aesthetic keycaps and exceptional build quality. Both begin with a special aluminum ENTR case, which features a green anodized finish and pad printed bamboo sprout artwork by OSHETART. Within the Shinai’s case, an ENTR PCBA is equipped with Holy Panda X Switches and Drop Phantom stabilizers for a next-level tactile feel to match its natural style. Completing the Shinai presentation, the Bamboo Keycap Set from our Skylight Series makes this board even more like its namesake sword, in both appearance and performance. Hand-assembled in the USA, the Shinai Keyboard is a cut above—and a slice of our own storied tradition.",
    header2: "Our Expression: Streamlined Enthusiast Performance",
    description2:
      "Enthusiast Performance There’s nothing like the feel of an enthusiast-level mechanical keyboard. Every desk deserves one—but not everybody has the time to source components and build one. That’s where our Expression Series comes in. As the most accessible line in our Icon Collection, the Expression Series is the place to find pre-built keyboards with enthusiast-level quality. Each one is outfitted with a host of excellent components and quality-controlled assembly for peerless performance. Adding more than a bit of bamboo-inspired style to our Expression Series, the Shinai Keyboard features a green aluminum ENTR case with exclusive bamboo artwork, as well as the Bamboo Keycap Set from our Skylight Series for a curated aesthetic. It’s also outfitted with our Holy Panda X Switches and Phantom Stabilizers for a truly tailored tactile feel. Plus, it’s backlit with white LEDs to deliver sophisticated illumination in low-light settings. Equal parts natural and functional, the Shinai Keyboard may just make your typing a martial art.",
    keys: "87 keys",
    layout: "Layout: TKL",
    case: "Case: Green ENTR anodized aluminum case",
    keycaps: "Keycaps: Skylight Bamboo keycaps",
    switches: "Switches: Holy Panda X",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 3,
    name: "Drop + The Lord of the Rings™ Elvish Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-elvish-keyboard/FP/nUBJjvJpTYORym03xTev_elvish_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$199",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-elvish-keyboard/FP/JShNKLtnRxqsExCajXLQ_LOTR-ELVISH-pdp-crop.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-elvish-keyboard/FP/TJflwAPFRwCLyIucuaJC_4643-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-elvish-keyboard/FP/Efz4ddsPSHWLO2b2sJxW_4622-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Wisest & Fairest of All Keyboards",
    description1:
      "Adorned with faithfully translated legends and crafted with exceptional quality, our officially licensed MT3 The Lord of the Rings Elvish Keycap Set found a home on countless keyboards across our community. But like the Elves of Middle-earth, this set’s true home exists on hallowed ground. You won’t have to cross the ocean to find it—it’s here, on the new Drop + The Lord of the Rings Elvish Keyboard. Tailor-made to house our MT3 Elvish keycaps, this elegant pre-built features a matching green aluminum case with custom artwork by OSHETART depicting the Two Trees of Valinor. Inside, it’s equipped with our Holy Panda X Switches and Phantom Stabilizers to deliver a tactile typing experience worthy of the Elven title. Completing that experience are keycaps from the Training Elvish Base Kit, which features Tengwar legends with Sindarin phrases—plus Latin alpha sublegends and side-printed Latin modifier legends. We’ve also added novelties and a few selections from the Autumn in Rivendell Kit to create the ultimate Elven sanctuary. The time of the Elves is not yet over.",
    header2: "",
    description2: "",
    keys: "87 keys",
    layout: "Layout: TKL",
    case: "Case: Green ENTR anodized aluminum case",
    keycaps: "Keycaps: Drop + The Lord of the Rings Elvish Keycap Set",
    switches: "Switches: Holy Panda X Switches",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 4,
    name: "Keydous NJ80 Wireless RGB Hot-Swappable Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/erFboS5uSV2hA9MLKqzl_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$219",
    image2:
      "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/NyhNyoxTYmDoHnpvginn_25374.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/yDIheEIBRGOYDhkUgUav_25379.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/2vzeawuRQ6EwyDCbhdTF_25402.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Bluetooth Mech Keys for the Tinkering Enthusiast",
    description1:
      "With built-in modularity for everything from connectivity to switches, the NJ80 from Keydous is a keyboard for those who like to change things up. The 75% layout offers both typing comfort and space consciousness, and the programmable metal rotary knob allows for extra control of your setup. There are three means of connectivity: Bluetooth 5.1, 2.4 GHz, and a USB-C wired output. Thanks to the hot-swappable sockets, it can accommodate a variety of switches, both 3 and 5-pin —but in this run, the keyboard comes with  MOMOKA Flamingo switches. For durability and fade-free performance, the NJ80 also comes with dye-sublimated PBT keycaps including a few pastel accents. There’s also a programmable, south-firing RGB array underneath to add color, pop, and extra customizability",
    header2: "",
    description2: "",
    keys: "84 keys",
    layout: "Layout: 75%",
    case: "Case material: ABS Plastic",
    keycaps: "Included Switches: MOMOKAFlamingo",
    switches: "Included Switches: MOMOKAFlamingo",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: Bluetooth 5.1, 2.4 GHz and USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 5,
    name: "IDOBAO ID80 Crystal Gasket Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/QONc7ASwQoy3Ld9HTWJh_RSBJ6u3BSFGhDYoPhSgm_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$229",
    image2:
      "https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-gasket-keyboard-kit-drop-exclusive/FP/zEjakV8lTWaZIKlYnpv5_Collab20515-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-gasket-keyboard-kit-drop-exclusive/FP/r3j47t1BQ7GAE458QS9O_Collab20490-new.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-gasket-keyboard-kit-drop-exclusive/FP/ur4Mhb44SE2gXsNpuqsm_Collab20498-copy-new.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "A Gasket-Mount Game-Changer—With New Extras",
    description1:
      "Holy Panda switches, a custom-matched case, and much more. In this special run, we’re offering several exclusive extras to take IDOBAO’s ID80 Crystal—the crown jewel of keyboard kits—even further. Alongside the gasket material, which offers marked noise reduction and a more cushioned typing feel, we’re giving you your choice of two plates: the original brass plate or a new polycarbonate plate. We’re also including Holy Panda switches for the ID80 Crystal’s Kailh hot-swappable sockets, plus Artifact Bloom Series Black on White keycaps to get you typing right out of the box. To match the standard transparent acrylic case, we’re also featuring a precisely polished wrist rest—great for accenting the PCB’s onboard per-key LEDs and RGB underglow lights. ",
    header2: "IDOBAO: Exceptional Boards & More for Mech Keys Enthusiasts",
    description2:
      "If you’re like many in the Mech Keys community, your keyboard is your baby. Few manufacturers understand this better than IDOBAO, which takes its name from the Chinese phrase “ai duo bao”—or “make many babies that you love.” Bridging both sides of the globe, the company also stresses that the name can be translated to “I do bao”—“we do treasure.” With IDOBAO’s impressive quality standards across its extensive product line, it’s clear that both translations apply. From popular keyboards and kits like the ID75 and ID80, to beautiful keycap sets, accessories, and more, IDOBAO has earned its reputation by putting user experience first. Among the many manufacturers that don’t always deliver, that commitment—and consistency—is a true treasure.",
    keys: "87 keys",
    layout: "Layout: 75%",
    case: "Case material: Clear acrylic",
    keycaps: "Keycaps: Artifact Bloom Series Black on White keycaps",
    switches: "Switches: Drop + Invyr Holy Pandas ",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 6,
    name: "Drop Expression Series Akatsuki Indigo Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-akatsuki-indigo-keyboard/FP/vR7OkRFjQOWeCUGJMLnM_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$179",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-akatsuki-indigo-keyboard/FP/JpIv8IAQ1yDWaXQPXhAR_1050-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-akatsuki-indigo-keyboard/FP/uBuxEtQeR3SjTzbW5jP1_1043-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-akatsuki-indigo-keyboard/FP/q9cmpCrvS8ei8ayEhtof_1039-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "(Indi)go Out in Akatsuki Style",
    description1:
      "In perhaps the most famous ninja-focused anime out there, clouds are the symbols of the Akatsuki clan. Like the clan itself, they come to represent a red reign of terror and evil—but their history shows something different. In our newest Expression Series keyboard, we’re embracing that history and turning it into an alternate future. Meet Akatsuki Indigo: an enthusiast-level desktop staple with a new colorway for a classic clan. Channeling all of our chakra into creating this board’s subtly reimagined Akatsuki aesthetic, we recruited designer Mimiatures to make pad-printed artwork to adorn an exclusive aluminum indigo case. That case is matched perfectly with custom reverse-dye-sublimated keycaps to go indigo from head to toe. Inside, an ENTR PCBA is equipped with Gateron Yellow KS3 Switches and Drop Phantom Stabilizers for silent, linear travel worthy of any shinobi. Add in white backlighting for just the right amount of glow, and you’ve got an elegant new tradition to follow: Akatsuki Indigo.",
    header2: "Our Expression: Streamlined Enthusiast Performance",
    description2:
      "There’s nothing like the feel of an enthusiast-level mechanical keyboard. Every desk deserves one—but not everybody has the time to source components and build one. That’s where our Expression Series comes in. As the most accessible line in our Icon Collection, the Expression Series is the place to find pre-built keyboards with enthusiast-level quality. Each one is outfitted with a host of excellent components and made with quality-controlled assembly for peerless performance. Bringing some reimagined shinobi style to our Expression Series, the Akatsuki Indigo Keyboard features a indigo aluminum ENTR case with exclusive cloud, moon, and light artwork—as well as matching indigo keycaps for a truly uniform aesthetic. It’s also outfitted with Gateron Yellow KS3 Switches and Drop Phantom Stabilizers for silent, linear travel to rival any ninja. Plus, it’s backlit with white LEDs to deliver sophisticated illumination in low-light settings. It’s an alternate anime canon—and a game-changing entry-level keyboard. Rewrite history on your desk. Go Akatsuki Indigo.",
    keys: "87 keys ",
    layout: "Layout: TKL",
    case: "Case: Indigo ENTR anodized aluminum case",
    keycaps: "Keycaps: Indigo reverse-dye-sublimated PBT keycaps",
    switches: "Switches: Gateron Yellow KS3 Switches",
    stabilizers: "Stabilizers: Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 7,
    name: "Drop Expression Series Mechtropolis Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/jdkkOZNSRdS05G6io9Qz_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$149",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/8w1AODVfR1mpl02NPvCw_Art_Deco_1340-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/w8jS12dFQASNEs3w3s1H_Art_Deco_1333-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/ADGUu9ZlQTqzdxxWKTJa_Art_Deco_1328-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "ENTR The Mechtropolis",
    description1:
      "Turn back the clock a century, and you’ll find an era roaring with excess and explosion. Filled with factories, polarized by prosperity and poverty, it was a time where dystopia could masquerade as utopia—a dissonance explored in the iconic 1927 sci-fi film Metropolis. In our latest Expression Series installment, we’ve turned this dissonance into a desktop essential that delivers exceptional typing with striking aesthetic duality. Meet Mechtropolis. Built on a stark black ENTR case—and accented with pad-printed, art-deco-inspired gold case artwork by Sakshi Mangal—this is one keyboard that brilliantly balances darkness and light. That balance is echoed in the Black Skylight Series Keycaps, which feature shine-through legends to highlight elegant white backlighting. Inside, Drop Phantom stabilizers pair with Gateron Yellow KS3 Switches to deliver excellent linear action with next to no noise. Further into the center, an ENTR PCBA provides a truly enthusiast experience with steadfast reliability—the Heart Machine of Mechtropolis. It’s opulence, backed by performance. Your desk deserves nothing less.",
    header2: "Our Expression: Streamlined Enthusiast Performance",
    description2:
      "There’s nothing like the feel of an enthusiast-level mechanical keyboard. Every desk deserves one—but not everybody has the time to source components and build one. That’s where our Expression Series comes in. As the most accessible line in our Icon Collection, the Expression Series is the place to find pre-built keyboards with enthusiast-level quality. Each one is outfitted with a host of excellent components and quality-controlled assembly for peerless performance. In the Mechtropolis Keyboard, dark and light elements play off each other on a black aluminum ENTR case with striking gold artwork inspired by Roaring ‘20s architecture and design. That same interplay happens on our Black Skylight Series Keycap Set, which features shine-through legends to highlight the board’s elegant whitebackling. In the inner workings of Mechtropolis, an ENTR PCBA delivers ultra-reliable hardware responsiveness, while Phantom Stabilizers and Gateron Yellow KS3 Switches combine to create a smooth, near-silent linear typing feel. Treat your fingertips to 2020s’ engineering, with a touch of 1920s’ style.",
    keys: "87 keys",
    layout: "Layout: TKL",
    case: "Case: Black ENTR anodized aluminum case",
    keycaps: "Keycaps: Skylight Black Keycap Set",
    switches: "Switches: Gateron Yellow KS3 Switches",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 8,
    name: "Drop Expression Series Togekey Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-togekey-keyboard/FP/RqnzdXH5SRyWUirJSfxg_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$149",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-togekey-keyboard/FP/tAlB6MSQxa4eQbI9knxL_16832-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-togekey-keyboard/FP/CSwlvHVaTP6sxd8t50KX_16842-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-togekey-keyboard/FP/CSwlvHVaTP6sxd8t50KX_16842-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Gotta Hatch ‘Em All",
    description1:
      "Sometimes, you have to crack a few eggs to make a great keyboard. In this case, you also gotta hatch ‘em all. Inspired by a certain #175 in a long list of lovable pocket monsters, our latest Expression Series installment will make any enthusiast Misty-eyed. Meet the Togekey Keyboard. Built on a special aluminum ENTR case—which features a white finish with pad-printed red-and-blue geometric artwork by Sakshi Mangal—this desktop centerpiece has an aesthetic that’s both clean and undeniably cute. It’s echoed in the White Skylight Keycap Set up top, which really drives home the overall egg-cellent presentation. On the performance side, Drop Phantom stabilizers pair with Gateron Yellow KS3 Switches in milky housings to deliver next-level linear action that doesn’t compromise the Togekey’s light-colored look. Below these components, an ENTR PCBA provides steadfast reliability with white backlighting for even more cohesion. After all, we want this board to be the very best.",
    header2: "Our Expression: Streamlined Enthusiast Performance",
    description2:
      "There’s nothing like the feel of an enthusiast-level mechanical keyboard. Every desk deserves one—but not everybody has the time to source components and build one. That’s where our Expression Series comes in. As the most accessible line in our Icon Collection, the Expression Series is the place to find pre-built keyboards with enthusiast-level quality. Each one is outfitted with a host of excellent components and quality-controlled assembly for peerless performance. Poké-ing into our Expression Series with a look fans will surely recognize, the Togekey Keyboard features a white aluminum ENTR case with exclusive, geometric red-and-white artwork, as well as our White Skylight Series Keycap Set for an aesthetic that’s both well-rounded and totally cracked. It’s also outfitted with our Phantom Stabilizers and Gateron Yellow KS3 Switches for a smooth, near-silent linear feel. Plus, it’s backlit with white LEDs to match its bright, fairy-type aesthetic. With this keyboard on your desk, you may never need to evolve.",
    keys: "87 keys",
    layout: "Layout: TKL",
    case: "Case: Silver ENTR anodized aluminum case",
    keycaps: "Keycaps: Skylight White keycaps",
    switches: "Switches: Gateron Yellow KS3 (with milky-colored housings)",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 9,
    name: "K360 Wireless Keyboard",
    image1:
      "https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k360/gallery/k360-gallery-1-new.png?v=1",
    price: "$24.99",
    image2:
      "https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k360/gallery/k360-gallery-2-new.png?v=1",
    image3:
      "https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k360/gallery/k360-gallery-3-new.png?v=1",
    image4:
      "https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k360/gallery/k360-gallery-4-new.png?v=1",
    header1: "Become a Ringwraith",
    description1:
      "“Blinded by their greed, they took them without question. One by one, they fell into darkness…” Sound familiar? It’s the fate of Middle-earth’s Ringwraiths—and it might just be your fate once you glimpse our new Ringwraith Keyboard. With exceptional build quality, exclusive components, and brand-new case artwork, Drop's official collaboration with Middle-earth Enterprises will compel any typist to the point of corruption. Sure to catch more than one Eye—and perhaps no less than Nine pairs—it features a red case adorned with specially commissioned case artwork by OSHETART depicting all nine Ringwraiths poised for battle. Up top, it’s armed with the Training Kit from our MT3 Black Speech Keycap Set, bolstered by extra modifiers so you can switch between a pure darkness and magma-infused darkness. Inside, the PCBA from our ENTR Keyboard combines with our exclusive Phantom Stabilizers and Holy Panda X Switches for a hauntingly satisfying tactile feel. Go ahead, give in—with a build this good, it’s hard not to go Ringwraith.",
    header2: "",
    description2: "",
    keys: "87 keys",
    layout: "Layout: TKL",
    case: "Case: Red ENTR anodized aluminum case",
    keycaps: "Keycaps: Drop + The Lord of the Rings™ Black Speech Keycap",
    switches: "Switches: Holy Panda X Switches (soldered)",
    stabilizers: "Drop Phantom Stabilizers",
    connectivity: "Connectivity: USB-C",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 10,
    name: "Drop Signature Series Slalom Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-slalom-keyboard/FP/0ZHtZIeTqSCGrg4U36yE_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$199",
    image2:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-slalom-keyboard/FP/cxUNuOyPRL2RqRsiz05U_CB5A8037-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image3:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-slalom-keyboard/FP/1jBrhG7SCm4th9J1Oiu0_CB5A8039-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    image4:
      "https://massdrop-s3.imgix.net/product-images/drop-expression-series-slalom-keyboard/FP/j0kHNxVSaKCKPZmR4xqA_CB5A8044-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    header1: "Ready for Your Next Run?",
    description1:
      "There are few hobbies more exhilarating than slalom skiing—except many mechanical keyboard collecting. In our latest Signature Series installment, we combined a bit of one and a lot of the other. Meet the Drop Signature Series Slalom Keyboard: your ticket to shred-worthy typing, with an aesthetic to match. On this particular slalom, the only obstacles you’ll encounter are enthusiast-level components; and we wouldn’t exactly call them obstacles. Not only do they feel great and work exceptionally well—many of them are also removable. That’s thanks in large part to the CSTM80 construction, topped off here with a magnetically detachable Skiidata Orange decorative top case. (Keep it as the foundation for your alpine board, or switch it out in seconds for a different look.) The striking orange aesthetic continues on our gently cylindrical DCX Skiidata Keycap Set, featuring a matching colorway inspired by one the world’s oldest lift ticket operators. As promised, further into this Slalom, you’ll find an entire mountain’s worth of high-quality components—including linear Gateron Yellow KS-3 Switches, interchangeable polycarbonate weights and switch plates, and a full array of typing foam. It’s a fresh typing experience, as awesome as fresh powder.",
    header2: "Our Signature: Quality You Can Feel",
    description2:
      "To truly understand the benefits of a Signature Series mechanical keyboard, you have to feel it. The first thing you’ll notice about the Slalom Keyboard is its feel. At its core, that feel starts with the polycarbonate inner case, full array of typing foam, and easily customizable gasket components. Of course, the customization doesn’t stop there. As part of our CSTM80 family, this keyboard is specially constructed to accommodate our full selection of magnetically detachable decorative top cases for seamless personalization in seconds. Within this case, it contains some of the community’s finest components—Gateron Yellow KS-3 Switches, paired with Gateron’s own PCBA-mounted stabilizers—to deliver ultra-smooth linear travel. Also on board are hot-swappable switch sockets, easily interchangeable polycarbonate weights and switch plates, and full array of RGB lighting. It’s the best run on the mountain, and it’s coming to your desktop.",
    keys: "88 keys",
    layout: "Layout: Tenkeyless (TKL)",
    case: "Case material: Polycarbonate",
    keycaps: "Keycap profile: DCX",
    switches: "Switches: Gateron Yellow KS-3 Switches (linear)",
    stabilizers: "",
    connectivity: "",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 1,
    name: "SHIFT V2 Mechanical Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/3bWXYP5qRqWTV2S8wkQj_PC2.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$179",
    image2: "",
    image3: "",
    image4: "",
    header1: "",
    description1: "",
    header2: "",
    description2: "",
    keys: "",
    layout: "",
    case: "",
    keycaps: "",
    switches: "",
    stabilizers: "",
    connectivity: "",
    included1: "",
    included2: "",
    included3: "",
  },
  {
    id: 1,
    name: "SHIFT V2 Mechanical Keyboard",
    image1:
      "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/3bWXYP5qRqWTV2S8wkQj_PC2.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
    price: "$179",
    image2: "",
    image3: "",
    image4: "",
    header1: "",
    description1: "",
    header2: "",
    description2: "",
    keys: "",
    layout: "",
    case: "",
    keycaps: "",
    switches: "",
    stabilizers: "",
    connectivity: "",
    included1: "",
    included2: "",
    included3: "",
  },
];

const artisankeyb = [];

export default function Products() {
  return (
    <>
      <h1 className="keyboard-header">Shop: Keyboards</h1>
      <ul className="keyboard-list">
        {keyboards.map((keyboard) => (
          <li key={keyboard.id} className="keyboard-item">
            <Link to={`/Products/${keyboard.id}`} state={{ keyboard }}>
              <img src={keyboard.image1} alt={keyboard.name} />
            </Link>
            <br />
            <Link to={`/Products/${keyboard.id}`} state={{ keyboard }}>
              {keyboard.name.toUpperCase()}
            </Link>
            <br />
            {keyboard.price}
            <br />
            {/* Default Four Stars */}
            <div className="star-rating">
              {"★".repeat(4)}
              {"☆"}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
