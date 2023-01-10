---
 description: Documentation about the data load throughout the application
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  05/01/23 | Jan Somers | Initial Version


---

# Data load

## Introduction

As described in the _Page structure and user flows_ page, all of our pages are (incrementally) statically generated. This means that some - if not all - data of the page is retrieved server-side. With statically generated pages, this data is retrieved at build time. If incremental, the first time the page is requested this data is retrieved at request time, just once. After this first request, the page is statically available for future requests.

In both instances, after the data has been retrieved, it is bundled into the _pageProps_ object and passed as _Json_ to the _NextJS Page_.

It is important that this object is as small as possible, to reduce data load and increase speed and performance on the client.

## Home Page

All data necessary for the homepage is retrieved and bundled at build time. This is a statically generated page.

**Size**: 12.1kB
**Url**: '/home'

```json
{
  "pageProps": {
    "categories": [
      {
        "id": "7250a6cf-5474-4f4c-8678-9fafaaea7619",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Hydraulic spray nozzles are precision components designed to yield very specific performance under specific conditions. They are available with specific spray patterns and they’re used for industrial operations such as cooling, coating, cleaning, lubricating, dust control and fire protection."
        },
        "name": { "en": "Hydraulic Nozzles" },
        "slug": {
          "en": "hydraulic-nozzles",
          "de": "hydraulik-düsen",
          "fr": "buses-hydrauliques",
          "nl": "hydraulische-nozzles"
        },
        "image": {
          "url": "https://spray.widen.net/content/yxsvt7adbx/web/header-industries-other-industries-1920x930.jpeg?crop=true",
          "caption": { "en": "header-industries-other-industries-1920x930" }
        },
        "children": [
          {
            "id": "e41acecc-5491-4fa1-ae55-1bf880305962",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Full Cone Nozzles" },
            "slug": {
              "en": "full-cone-nozzles",
              "de": "vollkegeldüsen",
              "fr": "buses-à-cône-complet",
              "nl": "full-cone-nozzles"
            },
            "image": {
              "url": "https://spray.widen.net/content/oqnfu4pcak/web/patterns-other-full-cone-group-660x370.jpeg?crop=true",
              "caption": { "en": "patterns-other-full-cone-group-660x370" }
            }
          },
          {
            "id": "450fd9b1-e6ac-4e89-98d8-4341a35150c5",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Flat Spray Nozzles" },
            "slug": {
              "en": "flat-spray-nozzles",
              "de": "flachsprühdüsen",
              "fr": "buses-de-pulvérisation-plates",
              "nl": "platte-sproeikoppen"
            },
            "image": {
              "url": "https://spray.widen.net/content/os2frb7yhv/web/patterns-other-flat-spray-group-660x370.jpg?crop=true",
              "caption": { "en": "Flat Spray Overview" }
            }
          },
          {
            "id": "9b282e61-a940-4c4c-900f-dc057905d2a8",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Solid Stream Nozzles" },
            "slug": {
              "en": "solid-stream-nozzles",
              "de": "solid-stream-düsen",
              "fr": "buses-à-flux-solide",
              "nl": "solid-stream-nozzles"
            },
            "image": {
              "url": "https://spray.widen.net/content/q85fotmyvb/web/header-oems-and-engineering-firms-1920x930.jpg?crop=true",
              "caption": { "en": "header-oems-and-engineering-firms-1920x930" }
            }
          },
          {
            "id": "3cb5851b-dec4-4e4c-9efb-599bca2fb27c",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Hollow Cone Nozzles" },
            "slug": {
              "en": "hollow-cone-nozzles",
              "de": "hohlkegeldüsen",
              "fr": "buses-à-cône-creux",
              "nl": "holle-kegel-nozzles"
            },
            "image": {
              "url": "https://spray.widen.net/content/unefzntpoe/web/patterns-other-hollow-cone-group-660x370.jpeg?crop=true",
              "caption": { "en": "patterns-other-hollow-cone-group-660x370" }
            }
          },
          {
            "id": "f682ad13-4ea3-4bff-b0ff-8cd2fc500007",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Fine Spray Nozzles" },
            "slug": {
              "en": "fine-spray-nozzles",
              "de": "feinsprühdüsen",
              "fr": "buses-de-pulvérisation-fines",
              "nl": "fijnsproeiers"
            },
            "image": {
              "url": "https://spray.widen.net/content/us6b4eykcu/web/patterns-other-fine-spray-group-660x370.jpeg?crop=true",
              "caption": { "en": "patterns-other-fine-spray-group-660x370" }
            }
          }
        ]
      },
      {
        "id": "3ff41a3f-935f-4fb9-a0e8-a6169a5c01c8",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Air atomizing nozzles (also called \"two-fluid\" nozzles) produce the smallest drops of any nozzle type, using compressed air as the force for atomization. Air atomizing nozzles are critical for applications ranging from coating and cooling to dust suppression, gas cooling, lubricating and more. Our air atomizing product line is the largest in the industry."
        },
        "name": { "en": "Air Atomizing Nozzles" },
        "slug": { "en": "air-atomizing-nozzles" },
        "image": null,
        "children": [
          {
            "id": "99845edd-d1fd-44fc-99d8-7a3d716922e3",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Standard Air Atomizing Nozzles" },
            "slug": { "en": "standard-air-atomizing-nozzles" },
            "image": {
              "url": "https://spray.widen.net/content/lz3ye5lil1/web/subpage-j-series-overview-480x265.jpeg",
              "caption": { "en": "J Series Overview" }
            }
          },
          {
            "id": "2b021a64-9287-498e-a895-185798bde18e",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "QuickMist® Quick Connect Air Atomizing Nozzles" },
            "slug": { "en": "quickmist-quick-connect-air-atomizing-nozzles" },
            "image": {
              "url": "https://spray.widen.net/content/ibucmsq9vo/web/QuickMist_1_4QMJ_Nozzle.jpeg",
              "caption": { "en": "QuickMist 1/4 QMJ" }
            }
          },
          {
            "id": "b55953a6-a183-4e5e-a781-9d036cad38ac",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Variable Spray Nozzles" },
            "slug": { "en": "variable-spray-nozzles" },
            "image": {
              "url": "https://spray.widen.net/content/jv3vrxanmr/web/VMAU_Variable_Spray_Nozzle.jpeg",
              "caption": { "en": "VMAU Variable Spray Nozzle" }
            }
          }
        ]
      },
      {
        "id": "4e65f62e-3ef1-4b64-9d5b-cb96496a62c5",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "TankJet® automated tank cleaning products are available to clean any vessel in your facility. Tanks ranging in size from as small as 3 ft. (0.9 m) up to as large as 100 ft. (30.5 m) in diameter can be effectively cleaned. TankJet units are suitable for gentle rinsing to high-impact cleaning to remove stubborn residues. Sanitary designs that meet 3A standards and ATEX-certified designs are available."
        },
        "name": { "en": "Tank Cleaning Nozzles" },
        "slug": {
          "en": "tank-cleaning-nozzles",
          "de": "tankreinigungsdüsen",
          "fr": "buses-de-nettoyage-de-réservoir",
          "nl": "tank-reinigings-nozzles"
        },
        "image": null,
        "children": [
          {
            "id": "1d20c410-cae8-4bff-8c4f-c820af51766e",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Up to 100 ft. (30.5 m) diameter" },
            "slug": {
              "en": "up-to-100-ft-diameter",
              "de": "bis-zu-100-fuß-durchmesser",
              "fr": "jusqu’à-100-pieds-de-diamètre",
              "nl": "tot-100-ft-diameter"
            },
            "image": {
              "url": "https://spray.widen.net/content/if2pus10l3/web/TJ100FT_660x370.jpg?crop=true",
              "caption": { "en": "TJ100FT-660x370" }
            }
          },
          {
            "id": "e2114c73-1ded-4317-a2d5-fe7133d96035",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Up to 45 ft. (13.7 m) diameter" },
            "slug": {
              "en": "up-to-45-ft-diameter",
              "de": "bis-zu-45-fuß-durchmesser",
              "fr": "jusqu’à-45-pieds-de-diamètre",
              "nl": "tot-45-ft-diameter"
            },
            "image": {
              "url": "https://spray.widen.net/content/qvywnzolji/web/TJ75-45ft_660x370_v2.jpeg?crop=true",
              "caption": { "en": "TJ45FT-660X370" }
            }
          },
          {
            "id": "144ffa16-8495-42e8-8435-64b38b266197",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Up to 20 ft. (6 m) diameter" },
            "slug": {
              "en": "up-to-20-ft-diameter",
              "de": "bis-zu-20-fuß-durchmesser",
              "fr": "jusqu’à-20-pieds-de-diamètre",
              "nl": "tot-20-ft-diameter"
            },
            "image": {
              "url": "https://spray.widen.net/content/ij6pl89llm/web/TJ45FT_660X370.jpg?crop=true",
              "caption": { "en": "TJ20FT-660X370" }
            }
          },
          {
            "id": "a24d14a1-71e8-4335-970a-e19e07ac6f1c",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Up to 10 ft. (3 m) diameter" },
            "slug": {
              "en": "up-to-10-ft-diameter",
              "de": "bis-zu-10-fuß-durchmesser",
              "fr": "jusqu’à-10-pieds-de-diamètre",
              "nl": "tot-10-ft-diameter"
            },
            "image": {
              "url": "https://spray.widen.net/content/gyslcsrbxn/web/TJ10FT_660x370.jpg?crop=true",
              "caption": { "en": "TJ10FT-660x370" }
            }
          },
          {
            "id": "67a0148f-82b9-4e38-baa7-f1509d6b8b5d",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Up to 5 ft. (1.5 m) diameter" },
            "slug": {
              "en": "up-to-5-ft-diameter",
              "de": "bis-zu-5-fuß-durchmesser",
              "fr": "jusqu’à-5-pieds-de-diamètre",
              "nl": "tot-5-ft-diameter"
            },
            "image": {
              "url": "https://spray.widen.net/content/uel7vhnlbx/web/TJ5FT_660x370.jpg?crop=true",
              "caption": { "en": "TJ5FT-660x370" }
            }
          }
        ]
      },
      {
        "id": "43c4a35a-5621-4585-b291-d8481c00c83d",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Dozens of automatic nozzles are available to provide accurate intermittent spraying and to provide precise control of spray performance. Electrically-actuated and air-actuated nozzles are both available. Models which atomize flow using liquid pressure only or using compressed air are both offered. AutoJet® Spray Controllers can be added to optimize performance by adjusting flow rate for line speed variations and fine-tuning timing to accurately spray moving targets. "
        },
        "name": { "en": "Automatic Nozzles" },
        "slug": {
          "en": "automatic-nozzles",
          "de": "automatik-düsen",
          "fr": "buses-automatiques",
          "nl": "automatische-nozzles"
        },
        "image": null,
        "children": [
          {
            "id": "cae0584c-8fbc-40bd-82ff-6e27b664513b",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Electrically-Actuated / Hydraulic Atomizing" },
            "slug": {
              "en": "electrically-actuated-hydraulic-atomizing",
              "de": "elektrisch-betätigt-hydraulisch-zerstäuben",
              "fr": "atomisation-hydraulique-actionnée-électriquement",
              "nl": "elektrisch-aangedreven-hydraulisch-verstuiveren"
            },
            "image": {
              "url": "https://spray.widen.net/content/ijcrt9v1vf/web/Auto_Eletric_HYD_660x370.jpg?crop=true",
              "caption": { "en": "Auto-Eletric-HYD-660x370" }
            }
          },
          {
            "id": "aeb673dc-b0e0-419a-861d-691fd3b30989",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Electrically-Actuated / Air Atomizing" },
            "slug": {
              "en": "electrically-actuated-air-atomizing",
              "de": "elektrisch-betätigt-luftzerstäubend",
              "fr": "atomisation-à-l’air-actionné-électriquement",
              "nl": "elektrisch-aangedreven-luchtverneveling"
            },
            "image": {
              "url": "https://spray.widen.net/content/gqvpss7bqz/web/Auto_Eletric_AA_660x370.jpg?crop=true",
              "caption": { "en": "Auto-Eletric-AA-660x370" }
            }
          },
          {
            "id": "bf851fde-6525-4fa3-9ba1-7b76b4111fbe",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Air-Actuated / Hydraulic Atomizing" },
            "slug": {
              "en": "air-actuated-hydraulic-atomizing",
              "de": "luftbetätigt-hydraulisch-zerstäubend",
              "fr": "atomisation-hydraulique-actionnée-à-l’air",
              "nl": "lucht-aangedreven-hydraulisch-verstuiving"
            },
            "image": {
              "url": "https://spray.widen.net/content/scjylgccqw/web/Auto_Air_HYD_660x370.jpg?crop=true",
              "caption": { "en": "Auto-Air-HYD-660x370" }
            }
          },
          {
            "id": "1f1f0459-20fe-4d4f-a4c5-afec9af36f05",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Air-Actuated / Air Atomizing" },
            "slug": {
              "en": "air-actuated-air-atomizing",
              "de": "luftbetätigt-luftzerstäubend",
              "fr": "atomisation-à-l’air-actionné-par-l’air",
              "nl": "lucht-aangedreven-lucht-verstuiving"
            },
            "image": {
              "url": "https://spray.widen.net/content/1jnc8w0dbs/web/Auto_Air_AA_660x370.jpg?crop=true",
              "caption": { "en": "Auto-Air-AA-660x370" }
            }
          }
        ]
      },
      {
        "id": "3ba9c6a1-43f5-4862-b64e-f7ff232fa691",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Dozens of GunJet® handheld spray guns are available for all types of cleaning and rinsing applications. Options range from gentle, low pressure spray to high impact, high pressure performance. Ergonomic designs assure positive control and operator comfort even at maximum flow and pressure conditions. Sturdy design and materials mean long, productive equipment life. A complete line of accessories, including extensions, adapters and swivel connectors are available."
        },
        "name": { "en": "Spray Guns" },
        "slug": {
          "en": "spray-guns",
          "de": "spritzpistolen",
          "fr": "pistolets-de-pulvérisation",
          "nl": "spuitpistolen"
        },
        "image": null,
        "children": [
          {
            "id": "f25e9397-c3b5-4e5d-bb01-cdc14a98ac97",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Low Pressure" },
            "slug": {
              "en": "low-pressure",
              "de": "niederdruck",
              "fr": "basse-pression",
              "nl": "lage-druk"
            },
            "image": {
              "url": "https://spray.widen.net/content/hgnemr2vgv/web/GunJet_Low_Pressure_660x370.jpg?crop=true",
              "caption": { "en": "GunJet-Low-Pressure-660x370" }
            }
          },
          {
            "id": "6dd092be-3b4d-4e4a-bd2f-7f30e0da08d6",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Medium Pressure" },
            "slug": {
              "en": "medium-pressure",
              "de": "mitteldruck",
              "fr": "moyenne-pression",
              "nl": "middelhoge-druk"
            },
            "image": {
              "url": "https://spray.widen.net/content/88qqadaumj/web/GunJet_Medium_Pressure_660x370.jpg?crop=true",
              "caption": { "en": "GunJet-Medium-Pressure-660x370" }
            }
          },
          {
            "id": "4e9199f0-2b6e-42b7-a1e2-6592c9603cc1",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "High Pressure" },
            "slug": {
              "en": "high-pressure",
              "de": "hochdruck",
              "fr": "haute-pression",
              "nl": "hogedruk"
            },
            "image": {
              "url": "https://spray.widen.net/content/hyqqi4ypyk/web/GunJet_High_Pressure_660x370.jpg?crop=true",
              "caption": { "en": "GunJet-High-Pressure-660x370" }
            }
          }
        ]
      },
      {
        "id": "4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "WindJet® air nozzles are widely used for moving materials and for cleaning, drying and cooling parts. They convert a low-pressure volume of compressed air into a targeted high-velocity concentrated air stream and are available with variety of capacities and materials. WindJet air nozzles provide a significant reduction in compressed air consumption compared to open pipes."
        },
        "name": { "en": "Air Nozzles" },
        "slug": {
          "en": "air-nozzles",
          "de": "luftdüsen",
          "fr": "buses-d’air",
          "nl": "luchtsproeiers"
        },
        "image": null,
        "children": [
          {
            "id": "723cfc0e-8812-45fc-81f3-76490bed5b02",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Flat Spray" },
            "slug": {
              "en": "flat-spray",
              "de": "flachspray",
              "fr": "pulvérisation-à-plat",
              "nl": "platte-spray"
            },
            "image": {
              "url": "https://spray.widen.net/content/dvgmehg2fm/web/WindJet_AA727_660x370.jpg?crop=true",
              "caption": { "en": "WindJet-AA727-660x370" }
            }
          },
          {
            "id": "9728a8a0-cd1c-418a-b2f9-c2ca28e96e6a",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Round Spray" },
            "slug": {
              "en": "round-spray",
              "de": "rundspray",
              "fr": "pulvérisation-ronde",
              "nl": "rond-spray"
            },
            "image": {
              "url": "https://spray.widen.net/content/t0lo45wfxn/web/WindJet_AA707_blue_660x370.jpg?crop=true",
              "caption": { "en": "WindJet-AA707-blue-660x370" }
            }
          }
        ]
      },
      {
        "id": "7915b20c-1bf0-4626-b980-a83fe5991f43",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Spraying Systems Co. offers a complete line of connectors, fittings, valves and strainers to ensure peak spray performance. The proper accessories help ensure quick installation, effective monitoring and easy maintenance. Plus, purchasing all the components from the same supplier saves time and eliminates any potential issues with integration and compatibility."
        },
        "name": { "en": "Accessories" },
        "slug": { "en": "accessories" },
        "image": {
          "url": "https://spray.widen.net/content/uiorclqtke/web/Finder_Accessories_Group_Image.png?crop=true",
          "caption": { "en": "Finder_Accessories_Group_Image" }
        },
        "children": [
          {
            "id": "a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Nozzle Bodies" },
            "slug": {
              "en": "nozzle-bodies",
              "de": "düsenkörper",
              "fr": "corps-de-buse",
              "nl": "nozzle-body's"
            },
            "image": {
              "url": "https://spray.widen.net/content/k9pdtn6kwo/web/Finder_Nozzle_Bodies.png",
              "caption": { "en": "Finder_Nozzle_Bodies" }
            }
          },
          {
            "id": "fac8fd7b-d802-4472-9348-c9fd5420a8b7",
            "settings": "ProductFinderFullExperience",
            "name": {
              "en": "Throttling and Pressure Relief/Regulating Valves"
            },
            "slug": {
              "en": "throttling-and-pressure-relief-regulating-valves",
              "de": "drossel--und-druckentlastungsregelventile",
              "fr": "vannes-d’étranglement-et-de-régulation-de-décharge-de-pression",
              "nl": "throttling-and-pressure-relief-regulating-valves"
            },
            "image": {
              "url": "https://spray.widen.net/content/r1tfroj4cz/web/Finder_Category_Image_Throttling_and_Pressure_Relief-Regulating_Valves.png",
              "caption": {
                "en": "Finder_Category_Image_Throttling_and_Pressure_Relief-Regulating_Valves"
              }
            }
          },
          {
            "id": "a9b332af-ca55-43f0-90ec-1742cb3abb63",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Split-Eyelet Connectors" },
            "slug": {
              "en": "split-eyelet-connectors",
              "de": "split-eyelet-steckverbinder",
              "fr": "connecteurs-à-œillets-divisés",
              "nl": "split-eyelet-connectoren"
            },
            "image": {
              "url": "https://spray.widen.net/content/6pehsow7ze/web/Finder_Category_Image_Split-eyelet Connectors.png",
              "caption": {
                "en": "Finder_Category_Image_Split-eyelet Connectors"
              }
            }
          },
          {
            "id": "858cb720-d7e3-44f7-afe7-4478b93eb44d",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Adjustable Ball Fittings" },
            "slug": {
              "en": "adjustable-ball-fittings",
              "de": "verstellbare-kugelbeschläge",
              "fr": "raccords-à-billes-réglables",
              "nl": "verstelbare-kogelfittingen"
            },
            "image": {
              "url": "https://spray.widen.net/content/jhlyotuopx/web/Finder_Category_Image_Adjustable_Ball_Fitting.png",
              "caption": {
                "en": "Finder_Category_Image_Adjustable_Ball_Fitting"
              }
            }
          },
          {
            "id": "1354b0a8-d57c-4766-a7a6-78b103e11ba0",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Strainers" },
            "slug": { "en": "strainers" },
            "image": {
              "url": "https://spray.widen.net/content/hn859xkwbd/web/Finder_Category_Image_Strainers.png",
              "caption": { "en": "Finder_Category_Image_Strainers" }
            }
          }
        ]
      },
      {
        "id": "f46db9bb-6f07-4a74-97b1-11c76ce7a82b",
        "audience": "NorthAmerica, Europe",
        "settings": "CategoryDrillDownExperience",
        "description": {
          "en": "There’s a reason why all major industries know the names of our spray nozzles and automated systems. Their consistent performance has helped our customers improve product quality and efficiency for decades. Spraying Systems Co. offers a top-brand solution for every type of spray operation."
        },
        "name": { "en": "Spraying Systems Co. Brands" },
        "slug": {
          "en": "spraying-systems-co-brands",
          "de": "spraying-systems-co-brands",
          "fr": "systèmes-de-pulvérisation-co-marques",
          "nl": "spuiten-systemen-co-merken"
        },
        "image": {
          "url": "https://spray.widen.net/content/p8mwdittdw/web/SSCo_Brands_icon.jpeg",
          "caption": { "en": "SSCo Brands icon" }
        },
        "children": [
          {
            "id": "604d510f-163a-41f5-9f62-cc1ce8c764e8",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "DistriboJet®" },
            "slug": {
              "en": "distribojet",
              "de": "distribojet",
              "fr": "distribojet",
              "nl": "distribojet"
            },
            "image": {
              "url": "https://spray.widen.net/content/jzvcykdlid/web/DistriboJet_R_S_4_PH.jpeg",
              "caption": { "en": "DistriboJet R S 4 PH" }
            }
          },
          {
            "id": "5669bb6a-9276-4d9d-b42a-ebea2d94875f",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "FlatJet®" },
            "slug": { "en": "flatjet" },
            "image": {
              "url": "https://spray.widen.net/content/guhzghjm8n/web/FlatJet_Narrow_S_1_PH.jpeg",
              "caption": { "en": "FlatJet Narrow S 1 PH" }
            }
          },
          {
            "id": "f4d08770-2d60-455e-a050-4f29e1370de3",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "FogJet®" },
            "slug": { "en": "fogjet" },
            "image": {
              "url": "https://spray.widen.net/content/hcqcpabsmx/web/Finder_Category_Image_FogJet_Multi-Orifice_Fine_Spray.jpeg",
              "caption": {
                "en": "Finder Category Image FogJet Multi-Orifice Fine Spray"
              }
            }
          },
          {
            "id": "3abac18a-3a35-4cbc-8fcf-e0af11f48a0d",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "FloodJet®" },
            "slug": {
              "en": "floodjet",
              "de": "flutstrahl",
              "fr": "jet-d’inondation",
              "nl": "floodjet"
            },
            "image": {
              "url": "https://spray.widen.net/content/sjzzrzqbmt/web/FloodJet_Grp_PH.jpeg",
              "caption": { "en": "FloodJet Grp PH" }
            }
          },
          {
            "id": "5c6ec0f4-5f37-4ed1-9671-af576ceaefb9",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "FullJet®" },
            "slug": { "en": "fulljet" },
            "image": {
              "url": "https://spray.widen.net/content/3pi1z1er5j/web/subpage-nozzle-brands-fulljet-480x265.jpeg",
              "caption": { "en": "subpage-nozzle-brands-fulljet-480x265" }
            }
          },
          {
            "id": "01f4977d-291f-4410-b8e8-648b5ebc5ec8",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "ProMax® QuickJet®" },
            "slug": { "en": "promax-quickjet" },
            "image": {
              "url": "https://spray.widen.net/content/ipujymsst2/web/46500A_ProMax_Clip-Eyelet_Spray_Tips.jpeg",
              "caption": { "en": "46500A ProMax Clip-Eyelet Spray Tips" }
            }
          },
          {
            "id": "7455bee5-6901-4db6-a6df-744088154633",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "QuickJet®" },
            "slug": { "en": "quickjet" },
            "image": {
              "url": "https://spray.widen.net/content/lobkkk40sc/web/Quick_FullJet_Assembly.jpeg",
              "caption": { "en": "Quick FullJet Assembly" }
            }
          },
          {
            "id": "b808217a-291d-47c3-a73c-bfd85b0be67f",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "SpiralJet®" },
            "slug": { "en": "spiraljet" },
            "image": {
              "url": "https://spray.widen.net/content/9yacea1ufa/web/SpiralJet_Grp_S_PH.jpeg",
              "caption": { "en": "SpiralJet Grp S PH" }
            }
          },
          {
            "id": "42dad403-3b56-42b1-aa7d-f0c606141274",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "UniJet®" },
            "slug": { "en": "unijet" },
            "image": {
              "url": "https://spray.widen.net/content/jwr4l5u3cu/web/UniJetTBodyandTPUSprayTipAssembly.jpeg",
              "caption": { "en": "UniJet T Body and TPU Spray Tip Assembly" }
            }
          },
          {
            "id": "9f445e6e-09c8-4935-a91a-77806bc76e05",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "VeeJet®" },
            "slug": { "en": "veejet" },
            "image": {
              "url": "https://spray.widen.net/content/af51lw39or/web/Veejet_Grp_PH.jpeg",
              "caption": { "en": "Veejet Grp PH" }
            }
          },
          {
            "id": "9be19c11-4139-4a09-aeb7-a3b66913a507",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "WashJet®" },
            "slug": {
              "en": "washjet",
              "de": "waschstrahl",
              "fr": "jet-de-lavage",
              "nl": "washjet"
            },
            "image": {
              "url": "https://spray.widen.net/content/z2x1tcsxmm/web/WashJet_Grp_1_PH.jpeg",
              "caption": { "en": "WashJet Grp 1 PH" }
            }
          },
          {
            "id": "d38cd84f-64ae-41fd-ae1d-dd5c6a38930e",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "WhirlJet®" },
            "slug": { "en": "whirljet" },
            "image": {
              "url": "https://spray.widen.net/content/dg7qnbms5y/web/WhirlJet_Grp_S_1_PH.jpeg",
              "caption": { "en": "WhirlJet Grp S 1 PH" }
            }
          }
        ]
      },
      {
        "id": "99b89989-636a-4869-918a-1cc9ba755944",
        "audience": "NorthAmerica, Europe",
        "settings": "ProductFinderFullExperience",
        "description": {
          "en": "Hundreds of industrial manufacturing and processing operations can be performed with spray technology. We’ve developed spray nozzles and related products to address a wide range of applications, across all major industries."
        },
        "name": { "en": "Applications" },
        "slug": { "en": "applications" },
        "image": null,
        "children": [
          {
            "id": "03bd9261-d6df-45ba-b283-764e7062fd11",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Air Drying / Blow-Off" },
            "slug": { "en": "air-drying-blow-off" },
            "image": {
              "url": "https://spray.widen.net/content/hqqjzyy5mo/web/Drying-Bottles.jpg",
              "caption": { "en": "Drying Bottles" }
            }
          },
          {
            "id": "c85d6be3-5dd9-4c40-99bd-af660d486522",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Cleaning" },
            "slug": { "en": "cleaning" },
            "image": {
              "url": "https://spray.widen.net/content/t4jm1exsvi/web/Cleaning---Flat-Spray-Nozzles.jpg",
              "caption": { "en": "Cleaning with Flat Spray Nozzles" }
            }
          },
          {
            "id": "7345e417-7fa1-4c2c-93e2-499d701ade17",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Coating" },
            "slug": { "en": "coating" },
            "image": {
              "url": "https://spray.widen.net/content/nhvrwwwenf/web/Coating-Surface-with-PulsaJet-Nozzles.jpg",
              "caption": { "en": "Coating Surface with PulsaJet Nozzles" }
            }
          },
          {
            "id": "b146fbae-1cb7-44d3-a2b3-5afce739f25e",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Cooling" },
            "slug": { "en": "cooling" },
            "image": {
              "url": "https://spray.widen.net/content/p2rpdvpkg1/web/Cooling.jpg",
              "caption": { "en": "Cooling" }
            }
          },
          {
            "id": "663f39d0-be3a-4a46-9634-825520f9001f",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Fire Protection" },
            "slug": { "en": "fire-protection" },
            "image": {
              "url": "https://spray.widen.net/content/94ezfyxnxk/web/Fire%20Protection.jpeg",
              "caption": { "en": "Fire Protection" }
            }
          },
          {
            "id": "41ee919b-7753-4059-a58b-bc649b47a94b",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Humidification" },
            "slug": { "en": "humidification" },
            "image": {
              "url": "https://spray.widen.net/content/prgeqmp8wi/web/Gas%20Humidification.jpeg",
              "caption": { "en": "Gas Humidification" }
            }
          },
          {
            "id": "808b463f-4683-4583-a538-0b880fb5d8fb",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Humidifying & Moistening" },
            "slug": { "en": "humidifying-and-moistening" },
            "image": {
              "url": "https://spray.widen.net/content/1kygsmbja7/web/Moistening-Product-on-Conveyor.png",
              "caption": { "en": "Moistening Product on Conveyor" }
            }
          },
          {
            "id": "67be7924-a2f5-451d-8526-ad7539826b7e",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Lubrication" },
            "slug": { "en": "lubrication" },
            "image": {
              "url": "https://spray.widen.net/content/n0cszycxkd/web/Protective-Coating.jpg",
              "caption": { "en": "Protective Coating" }
            }
          },
          {
            "id": "14b21e18-908d-45d7-940d-433e15ee1285",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Marking" },
            "slug": { "en": "marking" },
            "image": {
              "url": "https://spray.widen.net/content/75gpddrv41/web/appl_marking-Nail_lines_LA.jpg",
              "caption": { "en": "Marking Nail Lines" }
            }
          },
          {
            "id": "aa730c2c-fb95-4c54-ad27-58bbda953d16",
            "settings": "ProductFinderFullExperience",
            "name": { "en": "Dust Control" },
            "slug": { "en": "dust-control" },
            "image": {
              "url": "https://spray.widen.net/content/csh9hyqmvf/web/Dust%20Control.jpeg",
              "caption": { "en": "Dust Control" }
            }
          }
        ]
      }
    ],
    "siteMenuItems": [
      {
        "id": "821e3af1-43fd-4472-a0eb-8a81584b145c",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "https://www.spray.com",
          "text": { "en": "Spray.com" }
        }
      },
      {
        "id": "9fcddd10-2781-4c9d-bfee-9aa9c9d412d2",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "https://www.spray.com/contact/contact-us",
          "text": { "en": "Contact Us" }
        }
      },
      {
        "id": "c8879104-6495-4f9b-9d7a-0750fadc55c4",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "https://www.spray.com/contact/find-a-representative",
          "text": { "en": "Find a Local Rep" }
        }
      }
    ],
    "mainMenuItems": [
      {
        "id": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/hydraulic-nozzles/7250A6CF-5474-4F4C-8678-9FAFAAEA7619/finder",
          "text": { "en": "Hydraulic Nozzles" }
        },
        "slug": {
          "en": "hydraulic-nozzles",
          "de": "hydraulik-düsen",
          "fr": "buses-hydrauliques",
          "nl": "hydraulische-nozzles"
        }
      },
      {
        "id": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "parentId": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/full-cone-nozzles/e41acecc-5491-4fa1-ae55-1bf880305962/finder",
          "text": { "en": "Full Cone Nozzles" }
        },
        "slug": {
          "en": "full-cone-nozzles",
          "de": "vollkegeldüsen",
          "fr": "buses-à-cône-complet",
          "nl": "full-cone-nozzles"
        }
      },
      {
        "id": "5f1b2a3d-4167-4407-8a33-d4964a7e4ea9",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/standard-full-cone-nozzles/2498dfc7-3295-403b-97fa-28a19f748306/finder",
          "text": { "en": "Standard Full Cone Nozzles" }
        },
        "slug": {
          "en": "standard-full-cone-nozzles",
          "de": "standard-vollkegeldüsen",
          "fr": "buses-standard-à-cône-plein",
          "nl": "standaard-full-conus-nozzles"
        }
      },
      {
        "id": "54209909-672e-419f-a782-91976acdc899",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/wide-angle-full-cone-nozzles/c67479be-9af0-434a-97c2-da8c26357b7f/finder",
          "text": { "en": "Wide Angle Full Cone Nozzles" }
        },
        "slug": {
          "en": "wide-angle-full-cone-nozzles",
          "de": "weitwinkel-vollkegeldüsen",
          "fr": "buses-grand-angle-à-cône-complet",
          "nl": "groothoek-volle-kegel-nozzles"
        }
      },
      {
        "id": "8ef74d1e-b4b7-4c2a-8770-47c26098d8b7",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/narrow-angle-full-cone-nozzles/9856253a-0db7-4723-93d6-8a82e485c1a8/finder",
          "text": { "en": "Narrow Angle Full Cone Nozzles" }
        },
        "slug": {
          "en": "narrow-angle-full-cone-nozzles",
          "de": "narrow-angle-full-cone-düsen",
          "fr": "buses-à-cône-plein-angle-étroit",
          "nl": "smalle-hoek-volle-kegel-nozzles"
        }
      },
      {
        "id": "b4b61d72-3d81-478e-b555-0f68bc1c8f43",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/large-free-passage-full-cone-nozzles/d944e101-27ba-48b2-b8be-b864e9ebee39/finder",
          "text": { "en": "Large Free Passage Full Cone Nozzles" }
        },
        "slug": {
          "en": "large-free-passage-full-cone-nozzles",
          "de": "große-freidurchgangs-vollkegeldüsen",
          "fr": "buses-à-cône-plein-à-grand-passage-libre",
          "nl": "grote-vrije-doorgang-volledige-kegel-nozzles"
        }
      },
      {
        "id": "8ca7d6ea-b259-4bbf-8e9d-43281d06dc21",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/square-or-oval-spray-full-cone-nozzles/59e49512-3759-4eba-903d-dccd30798b38/finder",
          "text": { "en": "Square/Oval Spray Full Cone Nozzles" }
        },
        "slug": {
          "en": "square-oval-spray-full-cone-nozzles",
          "de": "quadrat-oval-spray-full-cone-düsen",
          "fr": "buses-carrées-ovales-pulvérisées-à-cônes-pleins",
          "nl": "vierkant-ovaal-spray-full-conus-nozzles"
        }
      },
      {
        "id": "ba45320e-a437-4ee1-8253-69ebe39ef992",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/unijet-full-cone-nozzles/7e6211ba-add0-4e77-aa3e-820a6d6d0ade/finder",
          "text": { "en": "UniJet® Full Cone Nozzles" }
        },
        "slug": {
          "en": "unijet-full-cone-nozzles",
          "de": "Unijet-Vollkegel-Düsen",
          "fr": "unijet-full-cone-nozzles",
          "nl": "unijet-full-cone-nozzles"
        }
      },
      {
        "id": "bf1366c8-233a-4262-a15a-44a9c432bec8",
        "parentId": "ef14cd1a-9fb1-461c-bd08-b89e406a1a09",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/quickjet-full-cone-nozzles/211aed31-3e85-4cfb-9b6b-ec7a301a7acb/finder",
          "text": { "en": "QuickJet® Full Cone Nozzles" }
        },
        "slug": {
          "en": "quickjet-full-cone-nozzles",
          "de": "quickjet-full-cone-düsen",
          "fr": "buses-quickjet-full-cone",
          "nl": "quickjet-full-cone-nozzles"
        }
      },
      {
        "id": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "parentId": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/flat-spray-nozzles/450fd9b1-e6ac-4e89-98d8-4341a35150c5/finder",
          "text": { "en": "Flat Spray Nozzles" }
        },
        "slug": {
          "en": "flat-spray-nozzles",
          "de": "flachsprühdüsen",
          "fr": "buses-de-pulvérisation-plates",
          "nl": "platte-sproeikoppen"
        }
      },
      {
        "id": "cbf1b1e6-5aca-4da4-bc9f-81267f049765",
        "parentId": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/standard-flat-spray-nozzles/c3b1d7e1-3eee-4235-8469-0f376867113f/finder",
          "text": { "en": "Standard Flat Spray Nozzles" }
        },
        "slug": {
          "en": "standard-flat-spray-nozzles",
          "de": "standard-flachsprühdüsen",
          "fr": "buses-de-pulvérisation-plates-standard",
          "nl": "standaard-platte-sproeikoppen"
        }
      },
      {
        "id": "b0c8e741-b893-44b8-ad6c-b009d110d90c",
        "parentId": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/deflected-flat-spray-nozzles/8ca385c7-2dc6-49da-b4d1-2928fd2de172/finder",
          "text": { "en": "Deflected Flat Spray Nozzles" }
        },
        "slug": {
          "en": "deflected-flat-spray-nozzles",
          "de": "deflected-flat-spray-düsen",
          "fr": "buses-de-pulvérisation-à-plat-dévié",
          "nl": "afgebogen-platte-sproeikoppen"
        }
      },
      {
        "id": "7fc34f6e-08f8-437a-8e60-8538910dbf87",
        "parentId": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/high-pressure-flat-spray-nozzles/16a8ac8d-98d5-4985-a487-2317588ef025/finder",
          "text": { "en": "High Pressure Flat Spray Nozzles" }
        },
        "slug": {
          "en": "high-pressure-flat-spray-nozzles",
          "de": "hochdruck-flachsprühdüsen",
          "fr": "buses-de-pulvérisation-plates-à-haute-pression",
          "nl": "hogedruk-platte-sproeikoppen"
        }
      },
      {
        "id": "d8b9a4fc-54af-4098-8b3b-e02e330f34a7",
        "parentId": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/unijet-flat-spray-nozzles/54c46a98-3f97-4793-b754-0a8316918394/finder",
          "text": { "en": "UniJet® Flat Spray Nozzles" }
        },
        "slug": {
          "en": "unijet-flat-spray-nozzles",
          "de": "unijet-flach-sprühdüsen",
          "fr": "unijet-flat-spray-buses",
          "nl": "unijet-flat-spray-nozzles"
        }
      },
      {
        "id": "cf42b107-bbb2-45f9-95e8-79354dd52de4",
        "parentId": "232b65b1-c738-4294-99d5-d9f0b7ea7590",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/quickjet-flat-spray-nozzles/0f4da1bc-5133-46da-a2a4-f2b41098f191/finder",
          "text": { "en": "QuickJet® Flat Spray Nozzles" }
        },
        "slug": {
          "en": "quickjet-flat-spray-nozzles",
          "de": "quickjet-flat-spray-düsen",
          "fr": "buses-quickjet-flat-spray",
          "nl": "quickjet-flat-sproeikoppen"
        }
      },
      {
        "id": "584e8f86-9b61-46da-9239-f18e4467699f",
        "parentId": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/solid-stream-nozzles/9b282e61-a940-4c4c-900f-dc057905d2a8/finder",
          "text": { "en": "Solid Stream Nozzles" }
        },
        "slug": {
          "en": "solid-stream-nozzles",
          "de": "solid-stream-düsen",
          "fr": "buses-à-flux-solide",
          "nl": "solid-stream-nozzles"
        }
      },
      {
        "id": "3c5c3b0d-4988-443c-843f-3e4cf79e076c",
        "parentId": "584e8f86-9b61-46da-9239-f18e4467699f",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/standard-solid-stream-nozzles/5b65134d-6260-47dc-aa75-0ce9422d631a/finder",
          "text": { "en": "Standard Solid Stream Nozzles" }
        },
        "slug": {
          "en": "standard-solid-stream-nozzles",
          "de": "standard-solid-stream-düsen",
          "fr": "buses-à-flux-solide-standard",
          "nl": "standaard-solid-stream-nozzles"
        }
      },
      {
        "id": "7a415c75-dd71-4625-a210-49e9e15657e0",
        "parentId": "584e8f86-9b61-46da-9239-f18e4467699f",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/high-pressure-solid-stream-nozzles/349cce28-562d-48c4-be92-29e79fe08385/finder",
          "text": { "en": "High Pressure Solid Stream Nozzles" }
        },
        "slug": {
          "en": "high-pressure-solid-stream-nozzles",
          "de": "hochdruck-feststoff-strömungsdüsen",
          "fr": "buses-à-flux-solide-haute-pression",
          "nl": "hogedruk-vaste-stroom-nozzles"
        }
      },
      {
        "id": "20a0ff60-da28-4b15-9d98-99bc811598a0",
        "parentId": "584e8f86-9b61-46da-9239-f18e4467699f",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/unijet-solid-stream-nozzles/fa6700aa-f174-4fd5-a0a0-7821e056f59f/finder",
          "text": { "en": "UniJet® Solid Stream Nozzles" }
        },
        "slug": {
          "en": "unijet-solid-stream-nozzles",
          "de": "unijet-solid-stream-düsen",
          "fr": "buses-unijet-solid-stream",
          "nl": "unijet-solid-stream-nozzles"
        }
      },
      {
        "id": "3815ce5a-4561-4988-8efa-cb052c793da2",
        "parentId": "584e8f86-9b61-46da-9239-f18e4467699f",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/quickjet-solid-stream-nozzles/eae1f2f7-f707-4a8c-974e-36c201cb5e1a/finder",
          "text": { "en": "QuickJet® Solid Stream Nozzles" }
        },
        "slug": {
          "en": "quickjet-solid-stream-nozzles",
          "de": "quickjet-feststoff-stream-düsen",
          "fr": "buses-quickjet-solid-stream",
          "nl": "quickjet-solid-stream-nozzles"
        }
      },
      {
        "id": "36442890-73f7-479f-a8dc-1742506aeb85",
        "parentId": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/hollow-cone-nozzles/3cb5851b-dec4-4e4c-9efb-599bca2fb27c/finder",
          "text": { "en": "Hollow Cone Nozzles" }
        },
        "slug": {
          "en": "hollow-cone-nozzles",
          "de": "hohlkegeldüsen",
          "fr": "buses-à-cône-creux",
          "nl": "holle-kegel-nozzles"
        }
      },
      {
        "id": "aa95727d-b030-4ceb-8854-418d32a0e456",
        "parentId": "36442890-73f7-479f-a8dc-1742506aeb85",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/angle-type-hollow-cone-nozzles/dd8ecdf4-b4da-49de-bee4-a136fdfd0c57/finder",
          "text": { "en": "Angle-Type Hollow Cone Nozzles" }
        },
        "slug": {
          "en": "angle-type-hollow-cone-nozzles",
          "de": "Winkel-Hohlkegel-Düsen",
          "fr": "angle-type-creux-cône-buses",
          "nl": "hoek-type-holle-kegel-nozzles"
        }
      },
      {
        "id": "44275a46-9222-4131-979b-d6b3ee427c97",
        "parentId": "36442890-73f7-479f-a8dc-1742506aeb85",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/in-line-hollow-cone-nozzles/efcbeb55-bf89-4298-b006-83bc6af9a3dc/finder",
          "text": { "en": "In-Line Hollow Cone Nozzles" }
        },
        "slug": {
          "en": "in-line-hollow-cone-nozzles",
          "de": "inline-hohlkegeldüsen",
          "fr": "buses-creuses-en-ligne",
          "nl": "in-line-holle-kegel-nozzles"
        }
      },
      {
        "id": "8a0334f3-f06a-47c9-bf14-d9f7169a1597",
        "parentId": "36442890-73f7-479f-a8dc-1742506aeb85",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/large-free-passage-hollow-cone-nozzles/b360dc4b-0cf9-4e84-953b-791453d7e293/finder",
          "text": { "en": "Large Free Passage Hollow Cone Nozzles" }
        },
        "slug": {
          "en": "large-free-passage-hollow-cone-nozzles",
          "de": "groß-freigang-hohlkegel-düsen",
          "fr": "buses-à-cône-creux-à-grand-passage-libre",
          "nl": "grote-vrije-doorgang-holle-kegel-nozzles"
        }
      },
      {
        "id": "b4cd8093-7981-473d-aa73-a241273e0be4",
        "parentId": "36442890-73f7-479f-a8dc-1742506aeb85",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/unijet-hollow-cone-nozzles/09b345e8-de33-43ab-90ea-a81c636a553d/finder",
          "text": { "en": "UniJet® Hollow Cone Nozzles" }
        },
        "slug": {
          "en": "unijet-hollow-cone-nozzles",
          "de": "unijet-hohlkegel-düsen",
          "fr": "buses-unijet-hollow-cone-nozzles",
          "nl": "unijet-holle-kegel-nozzles"
        }
      },
      {
        "id": "409bd531-033e-4a2b-aeb8-e4d3e2784ff8",
        "parentId": "fcc3da8d-166b-486e-8297-d05f04a885a0",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/fine-spray-nozzles/f682ad13-4ea3-4bff-b0ff-8cd2fc500007/finder",
          "text": { "en": "Fine Spray Nozzles" }
        },
        "slug": {
          "en": "fine-spray-nozzles",
          "de": "feinsprühdüsen",
          "fr": "buses-de-pulvérisation-fines",
          "nl": "fijnsproeiers"
        }
      },
      {
        "id": "ccae5800-f1b1-4fef-8618-cbdb68736754",
        "parentId": "409bd531-033e-4a2b-aeb8-e4d3e2784ff8",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/single-orifice-fine-spray-nozzles/1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1/finder",
          "text": { "en": "Single-Orifice Fine Spray Nozzles" }
        },
        "slug": {
          "en": "single-orifice-fine-spray-nozzles",
          "de": "einzelblenden-feinsprühdüsen",
          "fr": "buses-de-pulvérisation-fine-à-orifice-unique",
          "nl": "enkel-opening-fijne-sproeikoppen"
        }
      },
      {
        "id": "5fc75f39-a047-4c51-9a6d-e42ea87b55c1",
        "parentId": "409bd531-033e-4a2b-aeb8-e4d3e2784ff8",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/multi-orifice-fine-spray-nozzles/20bc051a-0842-4557-910e-06a261e01135/finder",
          "text": { "en": "Multi-Orifice Fine Spray Nozzles" }
        },
        "slug": {
          "en": "multi-orifice-fine-spray-nozzles",
          "de": "multi-blenden-feinsprühdüsen",
          "fr": "buses-de-pulvérisation-fines-à-orifices-multiples",
          "nl": "multi-opening-fine-spray-nozzles"
        }
      },
      {
        "id": "aa1ddbd3-4f39-4611-b8e3-314cd2ab3980",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/air-atomizing-nozzles/3FF41A3F-935F-4FB9-A0E8-A6169A5C01C8/finder",
          "text": { "en": "Air Atomizing Nozzles" }
        },
        "slug": { "en": "air-atomizing-nozzles" }
      },
      {
        "id": "f4342ca5-1ad2-452a-8281-090a0cd7cef9",
        "parentId": "aa1ddbd3-4f39-4611-b8e3-314cd2ab3980",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/standard-air-atomizing-nozzles/99845EDD-D1FD-44FC-99D8-7A3D716922E3/finder",
          "text": { "en": "Standard Air Atomizing Nozzles" }
        },
        "slug": { "en": "standard-air-atomizing-nozzles" }
      },
      {
        "id": "13c362dd-597e-4dbe-9b3a-dcf197e1856c",
        "parentId": "aa1ddbd3-4f39-4611-b8e3-314cd2ab3980",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/quickmist-quick-connect-air-atomizing-nozzles/2B021A64-9287-498E-A895-185798BDE18E/finder",
          "text": { "en": "QuickMist® Quick Connect Air Atomizing Nozzles" }
        },
        "slug": { "en": "quickmist-quick-connect-air-atomizing-nozzles" }
      },
      {
        "id": "9f21bbd1-1225-4a50-8589-d5a89e0151c5",
        "parentId": "aa1ddbd3-4f39-4611-b8e3-314cd2ab3980",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/variable-spray-nozzles/B55953A6-A183-4E5E-A781-9D036CAD38AC/finder",
          "text": { "en": "Variable Spray Nozzles" }
        },
        "slug": { "en": "variable-spray-nozzles" }
      },
      {
        "id": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/tank-cleaning-nozzles/4E65F62E-3EF1-4B64-9D5B-CB96496A62C5/finder",
          "text": { "en": "Tank Cleaning Nozzles" }
        },
        "slug": {
          "en": "tank-cleaning-nozzles",
          "de": "tankreinigungsdüsen",
          "fr": "buses-de-nettoyage-de-réservoir",
          "nl": "tank-reinigings-nozzles"
        }
      },
      {
        "id": "7d5f952d-9cb0-47ea-9175-884908bad105",
        "parentId": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/up-to-100-ft-tank-cleaning-nozzles/1D20C410-CAE8-4BFF-8C4F-C820AF51766E/finder",
          "text": { "en": "Up to 100 ft. (30.5 m) diameter" }
        },
        "slug": {
          "en": "up-to-100-ft-diameter",
          "de": "bis-zu-100-fuß-durchmesser",
          "fr": "jusqu’à-100-pieds-de-diamètre",
          "nl": "tot-100-ft-diameter"
        }
      },
      {
        "id": "385546d0-65d8-4702-b6a6-7e440dcd4a29",
        "parentId": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/up-to-45-ft-tank-cleaning-nozzles/E2114C73-1DED-4317-A2D5-FE7133D96035/finder",
          "text": { "en": "Up to 45 ft. (13.7 m) diameter" }
        },
        "slug": {
          "en": "up-to-45-ft-diameter",
          "de": "bis-zu-45-fuß-durchmesser",
          "fr": "jusqu’à-45-pieds-de-diamètre",
          "nl": "tot-45-ft-diameter"
        }
      },
      {
        "id": "990df6ef-fc78-4a3b-99f3-16b00fcc9230",
        "parentId": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/up-to-20-ft-tank-cleaning-nozzles/144FFA16-8495-42E8-8435-64B38B266197/finder",
          "text": { "en": "Up to 20 ft. (6 m) diameter" }
        },
        "slug": {
          "en": "up-to-20-ft-diameter",
          "de": "bis-zu-20-fuß-durchmesser",
          "fr": "jusqu’à-20-pieds-de-diamètre",
          "nl": "tot-20-ft-diameter"
        }
      },
      {
        "id": "9e76abf5-74b7-4a39-b38c-924be89bd192",
        "parentId": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/up-to-10-ft-tank-cleaning-nozzles/A24D14A1-71E8-4335-970A-E19E07AC6F1C/finder",
          "text": { "en": "Up to 10 ft. (3 m) diameter" }
        },
        "slug": {
          "en": "up-to-10-ft-diameter",
          "de": "bis-zu-10-fuß-durchmesser",
          "fr": "jusqu’à-10-pieds-de-diamètre",
          "nl": "tot-10-ft-diameter"
        }
      },
      {
        "id": "96ca7667-1533-4407-9f90-2964d3149caf",
        "parentId": "d818fcba-f181-49a8-a613-2b009c0e7883",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/up-to-5-ft-tank-cleaning-nozzles/67A0148F-82B9-4E38-BAA7-F1509D6B8B5D/finder",
          "text": { "en": "Up to 5 ft. (1.5 m) diameter" }
        },
        "slug": {
          "en": "up-to-5-ft-diameter",
          "de": "bis-zu-5-fuß-durchmesser",
          "fr": "jusqu’à-5-pieds-de-diamètre",
          "nl": "tot-5-ft-diameter"
        }
      },
      {
        "id": "2ef89152-937e-46c3-a9ac-1524c25d34a5",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/automatic-nozzles/43C4A35A-5621-4585-B291-D8481C00C83D/finder",
          "text": { "en": "Automatic Nozzles" }
        },
        "slug": {
          "en": "automatic-nozzles",
          "de": "automatik-düsen",
          "fr": "buses-automatiques",
          "nl": "automatische-nozzles"
        }
      },
      {
        "id": "7ec305f6-2075-4fb8-bd6a-f5c019904db3",
        "parentId": "2ef89152-937e-46c3-a9ac-1524c25d34a5",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/electrically-actuated-hydraulic-atomizing-nozzles/CAE0584C-8FBC-40BD-82FF-6E27B664513B/finder",
          "text": { "en": "Electrically-Actuated / Hydraulic Atomizing" }
        },
        "slug": {
          "en": "electrically-actuated-hydraulic-atomizing",
          "de": "elektrisch-betätigt-hydraulisch-zerstäuben",
          "fr": "atomisation-hydraulique-actionnée-électriquement",
          "nl": "elektrisch-aangedreven-hydraulisch-verstuiveren"
        }
      },
      {
        "id": "26a63554-d1a6-4479-a823-1c72097a2311",
        "parentId": "2ef89152-937e-46c3-a9ac-1524c25d34a5",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/electrically-actuated-air-atomizing-nozzles/AEB673DC-B0E0-419A-861D-691FD3B30989/finder",
          "text": { "en": "Electrically-Actuated / Air Atomizing" }
        },
        "slug": {
          "en": "electrically-actuated-air-atomizing",
          "de": "elektrisch-betätigt-luftzerstäubend",
          "fr": "atomisation-à-l’air-actionné-électriquement",
          "nl": "elektrisch-aangedreven-luchtverneveling"
        }
      },
      {
        "id": "c5a0fbfe-990e-4b30-914e-8093d9eacb4f",
        "parentId": "2ef89152-937e-46c3-a9ac-1524c25d34a5",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/air-actuated-hydraulic-atomizing-nozzles/BF851FDE-6525-4FA3-9BA1-7B76B4111FBE/finder",
          "text": { "en": "Air-Actuated / Hydraulic Atomizing" }
        },
        "slug": {
          "en": "air-actuated-hydraulic-atomizing",
          "de": "luftbetätigt-hydraulisch-zerstäubend",
          "fr": "atomisation-hydraulique-actionnée-à-l’air",
          "nl": "lucht-aangedreven-hydraulisch-verstuiving"
        }
      },
      {
        "id": "60bd93e8-10ab-4855-9572-9448bdf5b82d",
        "parentId": "2ef89152-937e-46c3-a9ac-1524c25d34a5",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/air-actuated-air-atomizing-nozzles/1F1F0459-20FE-4D4F-A4C5-AFEC9AF36F05/finder",
          "text": { "en": "Air-Actuated / Air Atomizing" }
        },
        "slug": {
          "en": "air-actuated-air-atomizing",
          "de": "luftbetätigt-luftzerstäubend",
          "fr": "atomisation-à-l’air-actionné-par-l’air",
          "nl": "lucht-aangedreven-lucht-verstuiving"
        }
      },
      {
        "id": "cfec214b-dacd-4c58-9247-2689e4a0e90d",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/spray-guns/3BA9C6A1-43F5-4862-B64E-F7FF232FA691/finder",
          "text": { "en": "Spray Guns" }
        },
        "slug": {
          "en": "spray-guns",
          "de": "spritzpistolen",
          "fr": "pistolets-de-pulvérisation",
          "nl": "spuitpistolen"
        }
      },
      {
        "id": "72cc18f5-12f5-4bdf-8053-78303b96a365",
        "parentId": "cfec214b-dacd-4c58-9247-2689e4a0e90d",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/low-pressure-spray-guns/F25E9397-C3B5-4E5D-BB01-CDC14A98AC97/finder",
          "text": { "en": "Low Pressure" }
        },
        "slug": {
          "en": "low-pressure",
          "de": "niederdruck",
          "fr": "basse-pression",
          "nl": "lage-druk"
        }
      },
      {
        "id": "6fef8491-e226-470e-9ea4-de8fe0bbe45f",
        "parentId": "cfec214b-dacd-4c58-9247-2689e4a0e90d",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/medium-pressure-spray-guns/6DD092BE-3B4D-4E4A-BD2F-7F30E0DA08D6/finder",
          "text": { "en": "Medium Pressure" }
        },
        "slug": {
          "en": "medium-pressure",
          "de": "mitteldruck",
          "fr": "moyenne-pression",
          "nl": "middelhoge-druk"
        }
      },
      {
        "id": "dd0e7766-d9c4-4d82-ac30-1d3ecf40ef2e",
        "parentId": "cfec214b-dacd-4c58-9247-2689e4a0e90d",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/high-pressure-spray-guns/4E9199F0-2B6E-42B7-A1E2-6592C9603CC1/finder",
          "text": { "en": "High Pressure" }
        },
        "slug": {
          "en": "high-pressure",
          "de": "hochdruck",
          "fr": "haute-pression",
          "nl": "hogedruk"
        }
      },
      {
        "id": "19e36745-5755-4275-810c-85dfc40ae967",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/air-nozzles/4B39C56F-D0E6-4A64-B7AC-D3FCC15135A6/finder",
          "text": { "en": "Air Nozzles" }
        },
        "slug": {
          "en": "air-nozzles",
          "de": "luftdüsen",
          "fr": "buses-d’air",
          "nl": "luchtsproeiers"
        }
      },
      {
        "id": "4e91540a-0708-42ba-b5fc-c3b12650bee1",
        "parentId": "19e36745-5755-4275-810c-85dfc40ae967",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/flat-spray-air-nozzles/723CFC0E-8812-45FC-81F3-76490BED5B02/finder",
          "text": { "en": "Flat Spray" }
        },
        "slug": {
          "en": "flat-spray",
          "de": "flachspray",
          "fr": "pulvérisation-à-plat",
          "nl": "platte-spray"
        }
      },
      {
        "id": "5a003e1e-d76f-44b2-8420-468e4613aa74",
        "parentId": "19e36745-5755-4275-810c-85dfc40ae967",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/round-spray-air-nozzles/9728A8A0-CD1C-418A-B2F9-C2CA28E96E6A/finder",
          "text": { "en": "Round Spray" }
        },
        "slug": {
          "en": "round-spray",
          "de": "rundspray",
          "fr": "pulvérisation-ronde",
          "nl": "rond-spray"
        }
      },
      {
        "id": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "parentId": null,
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/accessories/7915b20c-1bf0-4626-b980-a83fe5991f43/finder",
          "text": { "en": "Accessories" }
        },
        "slug": {
          "en": "accessories",
          "de": "Zubehör",
          "fr": "accessoires",
          "nl": "accessoires"
        }
      },
      {
        "id": "6cef064c-3510-4ebe-9be3-c464bf2cb03c",
        "parentId": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/strainers/1354b0a8-d57c-4766-a7a6-78b103e11ba0/finder",
          "text": { "en": "Strainers" }
        },
        "slug": {
          "en": "strainers",
          "de": "Siebe",
          "fr": "Crépines",
          "nl": "zeven"
        }
      },
      {
        "id": "e9b390e0-fcfc-47cf-8ded-06398db17c9c",
        "parentId": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/adjustable-ball-fittings/858cb720-d7e3-44f7-afe7-4478b93eb44d/finder",
          "text": { "en": "Adjustable Ball Fittings" }
        },
        "slug": {
          "en": "adjustable-ball-fittings",
          "de": "verstellbare-kugelbeschläge",
          "fr": "raccords-à-billes-réglables",
          "nl": "verstelbare-kogelfittingen"
        }
      },
      {
        "id": "417b90ec-83ab-41c8-88f6-487f950496da",
        "parentId": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/split-eyelet-connectors/a9b332af-ca55-43f0-90ec-1742cb3abb63/finder",
          "text": { "en": "Split-Eyelet Connectors" }
        },
        "slug": {
          "en": "split-eyelet-connectors",
          "de": "split-eyelet-steckverbinder",
          "fr": "connecteurs-à-œillets-divisés",
          "nl": "split-eyelet-connectoren"
        }
      },
      {
        "id": "94b73f5c-1879-49b2-b080-26498f2bc789",
        "parentId": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/nozzle-bodies/a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a/finder",
          "text": { "en": "Nozzle Bodies" }
        },
        "slug": {
          "en": "nozzle-bodies",
          "de": "düsenkörper",
          "fr": "corps-de-buse",
          "nl": "nozzle-body's"
        }
      },
      {
        "id": "29450069-0c43-4593-9435-f149a6474acb",
        "parentId": "f7ee3284-213c-4163-99f0-6de9b5e315ae",
        "audience": "NorthAmerica, Europe",
        "url": {
          "type": "Website",
          "value": "/categories/throttling-and-pressure-relief-or-regulating-valves/fac8fd7b-d802-4472-9348-c9fd5420a8b7/finder",
          "text": { "en": "Throttling and Pressure Relief/Regulating Valves" }
        },
        "slug": {
          "en": "throttling-and-pressure-relief-regulating-valves",
          "de": "drossel--und-druckentlastungsregelventile",
          "fr": "vannes-d’étranglement-et-de-régulation-de-décharge-de-pression",
          "nl": "throttling-and-pressure-relief-regulating-valves"
        }
      }
    ]
  },
  "__N_SSG": true
}
```
