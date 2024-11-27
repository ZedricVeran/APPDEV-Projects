import { Link } from "react-router-dom"

const games = [
    {id:1, 
    name: 'Monster Hunter: Freedom Unite', 
    description: 'Monster Hunter Freedom Unite is an action role-playing game developed and published by Capcom for the PlayStation Portable and iOS. It is an expanded version of the original Monster Hunter Freedom 2 and was released on March 27, 2008, in Japan as Monster Hunter Portable 2nd G (モンスターハンターポータブル2nd G, Monsutā Hantā Pōtaburu 2nd G).',
    publisher: 'CAPCOM', 
    author: 'Yasunori Ichinose',
    review1: 'GameFAQs: "Monster Hunter Freedom Unite is a quality product with thorough and interesting gameplay, offering a considerable amount of collectibles and monsters. Despite some minor glitches, it\'s worth the money and boasts an excellent co-op mode1."',
    review2: 'IGN: "Monster Hunter Freedom Unite is a special edition of Monster Hunter Freedom 2, adding new monsters and features but retaining the core experience. It\'s a deep and rewarding game for fans, though it can be challenging and repetitive2."',
    review3: 'Metacritic: "Monster Hunter Freedom Unite is a pure Monster Hunter experience, known for its high difficulty and rewarding gameplay. It\'s a long, engaging grind that requires patience and skill, making it one of the best white-knuckled gear-grind action RPGs."',
    background: 'https://wallpapercave.com/wp/wp2810331.jpg',
    overlay: 'https://assets-prd.ignimgs.com/2021/12/14/monsterhunterfreedomunite-1639515609933.jpg',
    },
    {id:2,
    name: 'Monster Hunter: Portable 3rd',
    description: 'Monster Hunter Portable 3rd (モンスターハンターポータブル3rd) is the 3rd Generation installment in the Monster Hunter Portable series (known as Freedom internationally) for the PSP. MHP3rd was released in Japan on December 1st, 2010. In this version of Monster Hunter, the producers focused heavily on graphical details on maps and monsters, along with keeping a high quality production value throughout development. Unlike the previous games in the Portable series, MHP3rd was never localized and remains a Japanese exclusive.',
    publisher:'CAPCOM',
    author:'Yasunori Ichinose',
    review1:'GameFAQs: "Monster Hunter Portable 3rd is a worthy addition to any gamer\'s library, offering impressive graphics, detailed environments, and a variety of new monsters and weapons."',
    review2:'IGN: "Monster Hunter Portable 3rd pushes the PSP to its limits with stunning visuals and a deep, engaging gameplay experience. It\'s a must-play for Monster Hunter fans."',
    review3:'Metacritic: "Monster Hunter Portable 3rd delivers a solid and addictive hunting experience, with balanced weapons and armor, and a new location to explore."',
    background:'https://gamingbolt.com/wp-content/uploads/2013/01/Monster-Hunter-3-Ultimate-hd-wallpaper.jpg',
    overlay: 'https://assets-prd.ignimgs.com/2022/03/30/mhportable3-1648659920002.jpg',
    },
    {id:3, 
    name: 'Monster Hunter: Freedom 2', 
    description: 'Monster Hunter Freedom 2, known in Asia as Monster Hunter Portable 2nd, is an action role-playing game in the Monster Hunter series and the first game in the Second Generation to be released worldwide. Players take on the role of a hunter in Pokke Village, a small settlement near the Snowy Mountains, where they must hunt their way up the ranks to become a top-class hunter.',
    publisher:'CAPCOM',
    author:'Yasunori Ichinose',
    review1:'GameSpot: "Monster Hunter Freedom 2 offers incredible environments and a ton of content, but it can be frustratingly obtuse at times."',
    review2:'IGN: "Monster Hunter Freedom 2 is a deep RPG with plenty of collectibles and monsters, though it can be repetitive and slow."',
    review3:'GamesRadar: "Monster Hunter Freedom 2 delivers more items, weapons, and monsters, making it one of the best RPGs for the PSP."',
    background:'https://wallpapercave.com/wp/wp2810351.jpg',
    overlay: 'https://assets-prd.ignimgs.com/2022/03/30/mh2freedom-1648658103115.jpg',
    },
    {id:4, 
    name: 'God Eater Burst', 
    description: 'God Eater Burst (ゴッドイーター バースト, Goddo Ītā Bāsuto) is a 2010 Action-RPG for the PlayStation Portable. It was developed by Namco Bandai Games and was published by D3Publisher in North America as "Gods Eater Burst". The game was released Mid-March 2011, and is available as both a UMD and as a digital download from the PlayStation Network. The game is an expansion of the original Japanese-exclusive God Eater (ゴッドイーター), and adds the Burst storyline to the original G.E. story.',
    publisher:'BANDAI NAMCO Entertainment',
    author:'Hiroshi Yoshimura',
    review1:'IGN: "God Eater Burst offers a fun monster-hunting experience with a unique transforming weapon system and complex bullet crafting, but it can get repetitive and lacks variety."',
    review2:'GameSpot: "God Eater Burst stands out with its engaging monster hunting and intense combat, though it has some camera and control issues."',
    review3:'RPGamer: "God Eater Burst is an enjoyable game with a captivating setting, but it\'s not exceptionally original and can feel overexposed after a while."',
    background:'https://getwallpapers.com/wallpaper/full/0/8/a/1115868-large-god-eater-wallpapers-2000x1125-for-ipad.jpg',
    overlay: 'https://i.scdn.co/image/ab67616d0000b273bff1e6f1a64c631fea3274a9',
    },
    {id:5, 
    name: 'Monster Hunter Worlds', 
    description: 'Monster Hunter: World is an action-role-playing game and the fifth entry of the main Monster Hunter series developed and published by Capcom. The player takes the role of a Hunter traveling to the New World as a part of the Fifth Fleet. The Research Commission asks for volunteers to provide more support in the New World as they study new beasts, particularly the Elder Dragon Zorah Magdaros. Groups of hunters convene in Astera, the New Worlds primary base of operations as they utilize facilities to craft armor and weapons, buy provisions, and undertake quests. Monster Hunter: World features a series first online cross-region multiplayer, uniting the global player base. The game was released for PlayStation 4 and Xbox One on January 26th, 2018, and released on Microsoft Windows on August 9th, 2018. On September 6th, 2019 the Monster Hunter World: Iceborne expansion released.',
    publisher:'CAPCOM',
    author:'Kaname Fujioka',
    review1:'IGN: "Monster Hunter: World offers an expansive world with deep customization and engaging combat, making it a must-play for both newcomers and series veterans."',
    review2:'GameSpot: "Monster Hunter: World delivers stunning visuals and a captivating hunting experience, though it can be challenging and repetitive at times."',
    review3:'PC Gamer: "Monster Hunter: World sets up a thrilling reverse Jurassic Park scenario with fantastic beasts and high-fashion crafting, offering endless entertainment."',
    background:'https://wallpapers.com/images/hd/monster-hunter-world-iceborne-nergigante-velkhana-ozate92fo344w3je.jpg',
    overlay: 'https://th.bing.com/th/id/OIP.6UF9ztFSw52mjUdcuVBh9QAAAA?rs=1&pid=ImgDetMain',
    },
]

export default function Games(){
    return(
        <>
            <h1>Games Lists:</h1>
            <ul className="games-list">
                {games.map((game)=>(
                    <li key ={game.id}>
                        <Link to ={`/games/${game.id}`} state={{game}}>{game.name.toUpperCase()}</Link> -{game.description}
                    </li>
                ))}
            </ul>
        </>
        
    )
}