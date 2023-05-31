import Maldive2 from '../assets/maldive2.webp'
import Coral from '../assets/coral.jpg'

export const NavbarList = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about',
        sublink: [
            {
                sublink_1_id: 'Facilities',
                sublink_1_url: '/facilities'
            },
        ]
    },
    {
        title: 'Restoration',
        url: '/restoration',
        sublink: [
            {
                sublink_1_id: 'Restoration',
                sublink_1_url: '/restoration'
            },
            {
                sublink_2_id: 'News & Updates',
                sublink_2_url: '/news'
            }
        ]
    },
    {
        title: 'Contats',
        url: '/contats'
    },
    {
        title: 'Donate',
        url: '/donate'
    }
]

export const firstReefCard = {
    title: ' Importance and Benefits of Coral Reefs',
    short: 'Importance',
    img: Maldive2,
    bullet: [
        "Coral reef guarantees biodiversity.",
        "Coral reefs provide shelter, spawning grounds, and protection from predators.",
        "They support organisms at the base of ocean food chains.",
        "Coral reefs absorb wave energy and contribute to the reduction of coastal erosion.",
        "Coral reefs provide shelters for fish communities.",
        "Coral reefs contribute to sustain local fishermen who depend on reef communities.",
        "Coral reefs attract millions of tourists every year."
      ],
    type: 'tick'
}

export const secondReefCard = {
    title: "Threats to Coral Reefs",
    short: "Threats",
    img: Coral,
    bullet: [
        "Pollution",
        "Growth of water temperature",
        "Habitat degradation",
        "Human activities",
        "Agriculture",
        "Coastal development",
        "Diseases",
        "Industrial and destructive fisheries",
        "Extreme weather events"
      ],
    type: 'cross'  
}