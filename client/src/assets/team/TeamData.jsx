// Banners

import dawaBanner from "./Dawa/Dawa.png";
import rideshBanner from "./Ridesh/Ridesh.png";
import sabinBanner from "./Sabin/Sabin.png";
import rupeshBanner from "./Rupesh/Rupesh.png";
import sanjayBanner from "./Sanjay/Sanjay.png";
import samyakBanner from "./Samayak/Samayak.png";

import dawaMain from "./Dawa/main.jpg";
import rideshMain from "./Ridesh/main.jpg";
import sabinMain from "./Sabin/main.jpg";
import rupeshMain from "./Rupesh/main.jpg";
import sanjayMain from "./Sanjay/main.jpg";
import samyakMain from "./Samayak/main.webp";

// Social Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaLinkedin, FaBehance } from "react-icons/fa";

export const teamData = [
  {
    name: "Sanjay Aryal",
    role: "Vocals / Bass",
    banner: sanjayBanner,
    image: sanjayMain,

    discription:
      "Sanjay Aryal is the vocalist, bassist and one of the creative forces behind Rockheads. Known for his expressive vocals and songwriting, he has been part of Nepal's rock music scene for years, contributing to the band's original sound and identity.",

    experience: [
      {
        title: "Rockheads",
        timePeriod: "2010 - Present",
        discription:
          "Founding member of Rockheads, performing as the lead vocalist and bass guitarist while contributing to songwriting and original music production.",
      },
      {
        title: "CobWeb",
        timePeriod: "2013 - 2023",
        discription:
          "Served as a vocalist with the established Nepali rock band CobWeb, performing and contributing to its musical journey.",
      },
    ],

    achievements: [
      {
        title: "Pepsi Voice of Nepal Finalist",
        timePeriod: "2013",
        discription:
          "Part of the original Rockheads lineup that reached the finals of Pepsi Voice of Nepal with the original song 'For My Love'.",
      },
      {
        title: "Rockheads Songwriting Credits",
        timePeriod: "2023 - Present",
        discription:
          "Credited as a lyricist and composer on Rockheads releases, including 'Dhun', 'Sahara' and 'Bhawana'.",
      },
      {
        title: "Original Music Releases",
        timePeriod: "2020 - Present",
        discription:
          "Contributed to Rockheads' original discography, including releases such as 'Sidha Kura', 'Ranga', 'Hajar Janma' and 'For My Love'.",
      },
    ],

    socials: [
      {
        icon: <AiFillInstagram> </AiFillInstagram>,
        link: "https://www.instagram.com/sanjay.tankian/",
      },
      {
        icon: <FaFacebook> </FaFacebook>,
        link: "https://www.facebook.com/sanjay.tankian",
      },
    ],
  },

  {
    name: "Samyak Pakhrin Lama",
    role: "Drums",
    banner: samyakBanner,
    image: samyakMain,
    discription:
      "Samyak Pakhrin Lama is a drummer and founding member of Rockheads with over two decades of experience in the Nepali music industry. Alongside his work with the band, he has performed with different musical projects and contributed to studio recordings and live performances.",

    experience: [
      {
        title: "Rockheads",
        timePeriod: "2010 - Present",
        discription:
          "Founding member and drummer of Rockheads, contributing to the band's recordings, arrangements and live performances.",
      },
      {
        title: "Purple Train",
        timePeriod: "Before 2011",
        discription:
          "Performed as a drummer with Purple Train, gaining experience in Nepal's competitive band scene.",
      },
      {
        title: "Session & Studio Drummer",
        timePeriod: "2014 - Present",
        discription:
          "Worked on studio recordings and live performances for various artists and musical projects.",
      },
      {
        title: "Tribute Performances",
        timePeriod: "2019 - 2020",
        discription:
          "Performed as a drummer in tribute shows celebrating the music of Queen and Michael Jackson.",
      },
    ],

    achievements: [
      {
        title: "Sprite Band Challenge Semi-Finalist",
        timePeriod: "2011",
        discription:
          "Reached the semi-finals of the Sprite Band Challenge with Purple Train.",
      },
      {
        title: "Pepsi Voice of Nepal Finalist",
        timePeriod: "2013",
        discription:
          "Reached the finals of Pepsi Voice of Nepal as part of Rockheads' lineup with the original song 'For My Love'.",
      },
      {
        title: "International & National Performances",
        timePeriod: "2019 - Present",
        discription:
          "Built an extensive live-performance portfolio through Rockheads and other musical projects, including major tribute performances.",
      },
    ],

    socials: [
      {
        icon: <AiFillInstagram> </AiFillInstagram>,
        link: "https://www.instagram.com/samyak.lama/",
      },
    ],
  },

  {
    name: "Ridesh Pakhrin Tamang",
    role: "Guitars",
    banner: rideshBanner,
    image: rideshMain,
    discription:
      "Ridesh Pakhrin Tamang is a versatile guitarist from Kathmandu, known for his work across progressive rock, metal and experimental music. A former member of FRAGMENTS and current guitarist for Rockheads, he is also involved in music education and solo projects.",

    experience: [
      {
        title: "FRAGMENTS",
        timePeriod: "2014 - 2020",
        discription:
          "Founded and led FRAGMENTS, performing as the band's lead guitarist and exploring progressive and experimental rock.",
      },
      {
        title: "Sangeet Pathshala",
        timePeriod: "2019 - 2024",
        discription:
          "Worked as a guitar instructor, providing music education and guitar lessons.",
      },
      {
        title: "Session Guitarist & Solo Artist",
        timePeriod: "2014 - Present",
        discription:
          "Worked on independent musical projects, session performances and original guitar compositions.",
      },
      {
        title: "Rockheads",
        timePeriod: "2022 - Present",
        discription:
          "Joined Rockheads as the lead guitarist, contributing to the band's recordings, original music and live performances.",
      },
    ],

    achievements: [
      {
        title: "ICMC Band Festival Winner",
        timePeriod: "2014",
        discription: "Won the ICMC Band Festival as a member of FRAGMENTS.",
      },
      {
        title: "Blackstar Amps Guitar Competition Winner",
        timePeriod: "2018",
        discription:
          "Won the first edition of the Blackstar Amps Guitar Competition in Kathmandu.",
      },
      {
        title: "Deepak Moktan Guitar Competition Winner",
        timePeriod: "2019",
        discription:
          "Secured first place in the Deepak Moktan Guitar Competition among competing guitarists in Nepal.",
      },
      {
        title: "FRAGMENTS TRIO Europe Tour",
        timePeriod: "2018",
        discription:
          "Performed original music in Europe as part of FRAGMENTS TRIO, including shows in Soest, Germany.",
      },
    ],

    socials: [
      {
        icon: <AiFillInstagram> </AiFillInstagram>,
        link: "https://www.instagram.com/ritesz.tmg/",
      },
      {
        icon: <FaYoutube> </FaYoutube>,
        link: "https://www.youtube.com/results?search_query=Ridesh+Tamang+guitar",
      },
    ],
  },

  {
    name: "Dawa Sherpa",
    role: "Keyboards",
    banner: dawaBanner,
    image: dawaMain,

    discription:
      "Dawa Sherpa is a keyboardist and synthesizer player with nearly two decades of musical experience. Having worked with several Nepali bands and artists, he brings a distinctive musical texture to Rockheads through his keyboard arrangements and live performances.",

    experience: [
      {
        title: "Saboteurs",
        timePeriod: "2007 - 2008",
        discription: "Performed as a keyboardist with Saboteurs.",
      },
      {
        title: "Shatkond",
        timePeriod: "2008",
        discription:
          "Worked as a keyboardist, contributing to the band's musical performances.",
      },
      {
        title: "Plan B",
        timePeriod: "2009 - 2014",
        discription:
          "Performed with Plan B, developing his experience as a live keyboardist.",
      },
      {
        title: "Blackout",
        timePeriod: "2011",
        discription:
          "Contributed keyboard performances as part of the band Blackout.",
      },
      {
        title: "Rockheads",
        timePeriod: "2019 - Present",
        discription:
          "Joined Rockheads as the keyboard and synthesizer player, contributing to recordings, arrangements and live performances.",
      },
      {
        title: "Sushant KC & The Bangers",
        timePeriod: "2021 - 2024",
        discription:
          "Performed as a keyboardist with Sushant KC & The Bangers.",
      },
    ],

    achievements: [
      {
        title: "Sprite Band Challenge Second Runner-Up",
        timePeriod: "2011",
        discription:
          "Achieved second runner-up position in the Sprite Band Challenge as part of Blackout.",
      },
      {
        title: "Rockheads Original Discography",
        timePeriod: "2021 - Present",
        discription:
          "Contributed keyboard and synthesizer recordings to Rockheads releases, helping shape the band's evolving sound.",
      },
    ],

    socials: [
      {
        icon: <AiFillInstagram> </AiFillInstagram>,
        link: "https://www.instagram.com/d12sherpa/",
      },
    ],
  },

  {
    name: "Sabin Shakya",
    role: "Audio Engineer",
    banner: sabinBanner,
    image: sabinMain,

    discription:
      "Sabin Shakya is a professional audio engineer specialising in live sound and audio production. With experience across rehearsal studios, live venues and touring performances, he plays an important role in delivering the sound of Rockheads on stage.",

    experience: [
      {
        title: "Sound Station",
        timePeriod: "2020 - 2022",
        discription:
          "Worked in the rehearsal studio environment, developing practical experience in audio setup and sound engineering.",
      },
      {
        title: "Bibhuti",
        timePeriod: "2022",
        discription: "Worked on audio-related projects with Bibhuti.",
      },
      {
        title: "Try Tone",
        timePeriod: "2023 - Present",
        discription:
          "Continued professional work in audio engineering and live sound.",
      },
      {
        title: "Tito's Pub",
        timePeriod: "2023 - Present",
        discription:
          "Worked as an in-house sound engineer, handling live audio requirements and performances.",
      },
      {
        title: "Rockheads",
        timePeriod: "2024 - Present",
        discription:
          "Works as part of Rockheads' live sound crew, managing audio requirements for concerts and touring performances.",
      },
    ],

    achievements: [
      {
        title: "41 Shows with Rockheads",
        timePeriod: "2024",
        discription:
          "Contributed to the successful live sound production of 41 Rockheads performances, including an international performance in Sikkim, India.",
      },
      {
        title: "66 Shows with Rockheads",
        timePeriod: "2025",
        discription:
          "Contributed to live sound production across 66 Rockheads performances, including international shows in the UK and UAE.",
      },
    ],

    socials: [
      {
        icon: <FaLinkedin> </FaLinkedin>,
        link: "https://np.linkedin.com/in/sabin-shakya-0a00bb344",
      },
    ],
  },

  {
    name: "Rupesh Gurung",
    role: "Lighting Designer",
    banner: rupeshBanner,
    image: rupeshMain,

    discription:
      "Rupesh Gurung is a lighting designer and lighting engineer with over six years of experience in live events and stage production. His work focuses on creating dynamic lighting environments that complement performances and enhance the audience's concert experience.",

    experience: [
      {
        title: "S.S.S and Events",
        timePeriod: "2023",
        discription:
          "Worked on event production and lighting-related projects.",
      },
      {
        title: "Team XL",
        timePeriod: "2024",
        discription:
          "Contributed to event production and live lighting operations.",
      },
      {
        title: "Club Omnia",
        timePeriod: "2025 - Present",
        discription:
          "Works as Head Lighting Engineer, overseeing lighting operations and production requirements.",
      },
      {
        title: "Rockheads",
        timePeriod: "2025 - Present",
        discription:
          "Works as the lighting designer for Rockheads, creating and operating lighting setups for live performances.",
      },
    ],

    achievements: [
      {
        title: "SRV Ekaadeshmaa Tour",
        timePeriod: "2024",
        discription:
          "Worked on the lighting production of the SRV Ekaadeshmaa Tour, contributing to the visual presentation of the live performances.",
      },
      {
        title: "Live Event Lighting Production",
        timePeriod: "2023 - Present",
        discription:
          "Built experience across live events and concert productions, handling stage lighting and visual environments for performances.",
      },
    ],

    socials: [
      {
        icon: <FaBehance> </FaBehance>,
        link: "https://www.behance.net/gurungrupesh",
      },
    ],
  },
];
