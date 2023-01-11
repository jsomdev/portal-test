import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ModelIdFacetOptionKey {
  _12JAirAtomizingAirCaps = '_12JAirAtomizingAirCaps',
  _12JAirAtomizingAssemblies = '_12JAirAtomizingAssemblies',
  _12JAirAtomizingBodies = '_12JAirAtomizingBodies',
  _12JAirAtomizingFluidCaps = '_12JAirAtomizingFluidCaps',
  _12JAirAtomizingSetups = '_12JAirAtomizingSetups',
  _14JAirAtomizingAirCaps = '_14JAirAtomizingAirCaps',
  _14JAirAtomizingAssemblies = '_14JAirAtomizingAssemblies',
  _14JAirAtomizingBodies = '_14JAirAtomizingBodies',
  _14JAirAtomizingFluidCaps = '_14JAirAtomizingFluidCaps',
  _14JAirAtomizingSetups = '_14JAirAtomizingSetups',
  _14JAU = '_14JAU',
  _14JAUCO = '_14JAUCO',
  _14JAUH = '_14JAUH',
  _14JAUMCO = '_14JAUMCO',
  _14JAUPM = '_14JAUPM',
  _14JAUPMCO = '_14JAUPMCO',
  _14VMAU = '_14VMAU',
  _18JAirAtomizingAssemblies = '_18JAirAtomizingAssemblies',
  _18JAirAtomizingBodies = '_18JAirAtomizingBodies',
  _18JJAirAtomizingAirCaps = '_18JJAirAtomizingAirCaps',
  _18JJAirAtomizingAssemblies = '_18JJAirAtomizingAssemblies',
  _18JJAirAtomizingBodies = '_18JJAirAtomizingBodies',
  _18JJAirAtomizingFluidCaps = '_18JJAirAtomizingFluidCaps',
  _18JJAirAtomizingSetups = '_18JJAirAtomizingSetups',
  _18JJAU = '_18JJAU',
  _18JJAUH = '_18JJAUH',
  _18JJAUMCO = '_18JJAUMCO',
  _18VAU = '_18VAU',
  _1053514J = '_1053514J',
  _1053612J = '_1053612J',
  _1088014JAU = '_1088014JAU',
  _11430 = '_11430',
  _12900 = '_12900',
  _1324214JAU = '_1324214JAU',
  _13802 = '_13802',
  _1467518JJAU = '_1467518JJAU',
  _1470018JJAU = '_1470018JJAU',
  _15475 = '_15475',
  _1686018JJAU = '_1686018JJAU',
  _1688318JJAU = '_1688318JJAU',
  _1769018JJAU = '_1769018JJAU',
  _18250A = '_18250A',
  _1933014JAUPM = '_1933014JAUPM',
  _1JAirAtomizingAirCaps = '_1JAirAtomizingAirCaps',
  _1JAirAtomizingAssemblies = '_1JAirAtomizingAssemblies',
  _1JAirAtomizingBodies = '_1JAirAtomizingBodies',
  _1JAirAtomizingFluidCaps = '_1JAirAtomizingFluidCaps',
  _1JAirAtomizingSetups = '_1JAirAtomizingSetups',
  _21400A = '_21400A',
  _22650PP = '_22650PP',
  _23120 = '_23120',
  _23120A = '_23120A',
  _23240 = '_23240',
  _23520 = '_23520',
  _236233114F = '_236233114F',
  _2362430L = '_2362430L',
  _2750027500R = '_2750027500R',
  _2750027500R_ = '_2750027500R_',
  _2750027500R__ = '_2750027500R__',
  _2850028500R = '_2850028500R',
  _30473 = '_30473',
  _36275 = '_36275',
  _3653360 = '_3653360',
  _3849918JJAU = '_3849918JJAU',
  _4688 = '_4688',
  _4966018JJAU = '_4966018JJAU',
  _58833 = '_58833',
  _58834 = '_58834',
  _608314JAU = '_608314JAU',
  _6104 = '_6104',
  _621814JAU = '_621814JAU',
  _63225632253A = '_63225632253A',
  _63536353MFP = '_63536353MFP',
  _6466 = '_6466',
  _6590 = '_6590',
  _6815 = '_6815',
  _6815G = '_6815G',
  _7210018JJAU = '_7210018JJAU',
  _731014JAU = '_731014JAU',
  _7521 = '_7521',
  _7G = '_7G',
  _7N = '_7N',
  _8370 = '_8370',
  _8460 = '_8460',
  _8686 = '_8686',
  AA090 = 'AA090',
  AA10000AUH0050 = 'AA10000AUH0050',
  AA10000AUH03 = 'AA10000AUH03',
  AA10000AUH03Z1 = 'AA10000AUH03Z1',
  AA10000AUH10 = 'AA10000AUH10',
  AA10000AUH104210 = 'AA10000AUH104210',
  AA10000AUH104214 = 'AA10000AUH104214',
  AA10000AUH104215 = 'AA10000AUH104215',
  AA10000AUH7244014 = 'AA10000AUH7244014',
  AA10000JAU10 = 'AA10000JAU10',
  AA10000JJAU = 'AA10000JJAU',
  AA110 = 'AA110',
  AA122 = 'AA122',
  AA124 = 'AA124',
  AA190 = 'AA190',
  AA22AUH = 'AA22AUH',
  AA22AUH7676 = 'AA22AUH7676',
  AA22AUHSS11024 = 'AA22AUHSS11024',
  AA22AUHSS14799 = 'AA22AUHSS14799',
  AA23H = 'AA23H',
  AA23L = 'AA23L',
  AA23L45885 = 'AA23L45885',
  AA24AUA = 'AA24AUA',
  AA24AUA20190 = 'AA24AUA20190',
  AA24AUA8395 = 'AA24AUA8395',
  AA24AUA8980 = 'AA24AUA8980',
  AA250AUH = 'AA250AUH',
  AA26AUH = 'AA26AUH',
  AA28JJAU49815 = 'AA28JJAU49815',
  AA290 = 'AA290',
  AA29JAUCO = 'AA29JAUCO',
  AA3020940 = 'AA3020940',
  AA30A = 'AA30A',
  AA30L = 'AA30L',
  AA31 = 'AA31',
  AA36 = 'AA36',
  AA430 = 'AA430',
  AA43HC = 'AA43HC',
  AA43LC = 'AA43LC',
  AA60 = 'AA60',
  AA6021580 = 'AA6021580',
  AA70 = 'AA70',
  AA707 = 'AA707',
  AA727 = 'AA727',
  AA80 = 'AA80',
  AP = 'AP',
  APW = 'APW',
  AX = 'AX',
  AXW = 'AXW',
  BA = 'BA',
  BD = 'BD',
  BDM = 'BDM',
  BDW = 'BDW',
  BSJ = 'BSJ',
  BX = 'BX',
  BXW = 'BXW',
  CF = 'CF',
  CRC = 'CRC',
  CU150A = 'CU150A',
  CX = 'CX',
  D = 'D',
  D26564 = 'D26564',
  D26984 = 'D26984',
  D27500 = 'D27500',
  D40159 = 'D40159',
  D41800E = 'D41800E',
  D41892 = 'D41892',
  D41990 = 'D41990',
  D41990_ = 'D41990_',
  D55500JAU = 'D55500JAU',
  D55500JAUH0 = 'D55500JAUH0',
  D55500JAUH1 = 'D55500JAUH1',
  D55567 = 'D55567',
  D55606 = 'D55606',
  DAA727 = 'DAA727',
  DHH = 'DHH',
  DHH_ = 'DHH_',
  E = 'E',
  EG = 'EG',
  FF = 'FF',
  FS013 = 'FS013',
  FS020 = 'FS020',
  G = 'G',
  G15 = 'G15',
  G30 = 'G30',
  GA = 'GA',
  GANV = 'GANV',
  GAW = 'GAW',
  GD = 'GD',
  GG = 'GG',
  GG15 = 'GG15',
  GG30 = 'GG30',
  GGA = 'GGA',
  GGANV = 'GGANV',
  GGAW = 'GGAW',
  GGD = 'GGD',
  GGSQ = 'GGSQ',
  GGVL = 'GGVL',
  GGW = 'GGW',
  GSQ = 'GSQ',
  GVL = 'GVL',
  GW = 'GW',
  H = 'H',
  H15 = 'H15',
  HD = 'HD',
  HDT = 'HDT',
  HDU = 'HDU',
  HF = 'HF',
  HH = 'HH',
  HH30 = 'HH30',
  HHKY = 'HHKY',
  HHMFP = 'HHMFP',
  HHSJ = 'HHSJ',
  HHSJX = 'HHSJX',
  HHSQ = 'HHSQ',
  HHW = 'HHW',
  HHWSQ = 'HHWSQ',
  HMFP = 'HMFP',
  HSQ = 'HSQ',
  HU = 'HU',
  HVV = 'HVV',
  HVVL = 'HVVL',
  HW = 'HW',
  HWSQ = 'HWSQ',
  IMEG = 'IMEG',
  K = 'K',
  LAP = 'LAP',
  LAPW = 'LAPW',
  LBP = 'LBP',
  LBPW = 'LBPW',
  LN = 'LN',
  LND = 'LND',
  LNN = 'LNN',
  LNND = 'LNND',
  LNNW = 'LNNW',
  LNW = 'LNW',
  M = 'M',
  MEG = 'MEG',
  MEGSSTC = 'MEGSSTC',
  N = 'N',
  NN = 'NN',
  NNW = 'NNW',
  NW = 'NW',
  P = 'P',
  PW4000A = 'PW4000A',
  PW4000AS = 'PW4000AS',
  QCIMEG = 'QCIMEG',
  QCMEG = 'QCMEG',
  QGA = 'QGA',
  QGA15 = 'QGA15',
  QGA30 = 'QGA30',
  QGAW = 'QGAW',
  QHA = 'QHA',
  QHAW = 'QHAW',
  QJA = 'QJA',
  QJJA = 'QJJA',
  QJJLA = 'QJJLA',
  QJJS = 'QJJS',
  QJLA = 'QJLA',
  QLGA = 'QLGA',
  QLGA15 = 'QLGA15',
  QLGA30 = 'QLGA30',
  QLGAW = 'QLGAW',
  QLHA = 'QLHA',
  QLHAW = 'QLHAW',
  QLUA = 'QLUA',
  QMJAirAtomizingAirCaps = 'QMJAirAtomizingAirCaps',
  QMJAirAtomizingAssemblies = 'QMJAirAtomizingAssemblies',
  QMJAirAtomizingBodies = 'QMJAirAtomizingBodies',
  QMJAirAtomizingFluidCaps = 'QMJAirAtomizingFluidCaps',
  QMJAirAtomizingSetups = 'QMJAirAtomizingSetups',
  QMVV = 'QMVV',
  QPHA = 'QPHA',
  QPHAW = 'QPHAW',
  QPPA = 'QPPA',
  QPPM = 'QPPM',
  QPTA = 'QPTA',
  QSTK = 'QSTK',
  QSVV = 'QSVV',
  QTKA = 'QTKA',
  QUA = 'QUA',
  QVVA = 'QVVA',
  R = 'R',
  RF = 'RF',
  RR = 'RR',
  T = 'T',
  TEK = 'TEK',
  TG = 'TG',
  TGSQ = 'TGSQ',
  TGW = 'TGW',
  THW = 'THW',
  TJ14 = 'TJ14',
  TJ16 = 'TJ16',
  TJ180 = 'TJ180',
  TJ19 = 'TJ19',
  TJ360 = 'TJ360',
  TJ65TJ65HT = 'TJ65TJ65HT',
  TJ75TJ75H = 'TJ75TJ75H',
  TJ78TJ78D = 'TJ78TJ78D',
  TJ78M = 'TJ78M',
  TJ80TJ80H = 'TJ80TJ80H',
  TJ9A = 'TJ9A',
  TJ9BTJ9C = 'TJ9BTJ9C',
  TK_ = 'TK_',
  TN = 'TN',
  TNSSTC = 'TNSSTC',
  TPU = 'TPU',
  TT = 'TT',
  TW = 'TW',
  TWD = 'TWD',
  TX = 'TX',
  U = 'U',
  VAAVAUAirAtomizingAirCaps = 'VAAVAUAirAtomizingAirCaps',
  VAAVAUAirAtomizingAssemblies = 'VAAVAUAirAtomizingAssemblies',
  VAAVAUAirAtomizingBodies = 'VAAVAUAirAtomizingBodies',
  VAAVAUAirAtomizingFluidCaps = 'VAAVAUAirAtomizingFluidCaps',
  VAAVAUAirAtomizingSetups = 'VAAVAUAirAtomizingSetups',
  VMAUAirAtomizingAirCaps = 'VMAUAirAtomizingAirCaps',
  VMAUAirAtomizingAssemblies = 'VMAUAirAtomizingAssemblies',
  VMAUAirAtomizingBodies = 'VMAUAirAtomizingBodies',
  VMAUAirAtomizingFluidCaps = 'VMAUAirAtomizingFluidCaps',
  VMAUAirAtomizingSetups = 'VMAUAirAtomizingSetups',
  VS010 = 'VS010',
  VS020 = 'VS020',
  VS051 = 'VS051',
  VS625 = 'VS625',
  VS940 = 'VS940',
  VSM = 'VSM',
  VX70 = 'VX70',
  VX72 = 'VX72',
  VX80 = 'VX80',
  VX82 = 'VX82',
  WEG = 'WEG',
  Y727 = 'Y727',
  Y767 = 'Y767',
  YMD3 = 'YMD3'
}

export const modelIdFacetOptions: FacetOption<ModelIdFacetOptionKey>[] = [
  {
    key: ModelIdFacetOptionKey._12JAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '4dbd22ef-acd8-4baf-871c-f2d531339193',
    value: '1/2JAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/2J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: ModelIdFacetOptionKey._12JAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'c78d54e5-fe0d-4d91-9b57-e535fae94a28',
    value: '1/2JAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/2J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 2
    }
  },
  {
    key: ModelIdFacetOptionKey._12JAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '6f8de7a5-e789-417b-855b-853b3a5bd0ab',
    value: '1/2JAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/2J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 3
    }
  },
  {
    key: ModelIdFacetOptionKey._12JAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '2420892d-9dee-444c-8fcf-3f06c9abe22a',
    value: '1/2JAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/2J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 4
    }
  },
  {
    key: ModelIdFacetOptionKey._12JAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '8acc99f0-59d6-4c32-b365-184c114dfd61',
    value: '1/2JAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/2J Air Atomizing Setups' }
        }
      ],
      sortIndex: 5
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: 'fab8ed67-928a-47cd-92dc-445cfa55fff5',
    value: '1/4JAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 6
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '21c0aa65-8d45-4780-82f6-776a3daa3c45',
    value: '1/4JAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 7
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '5cd6dcc7-bf14-4374-b9bd-8b494c86061e',
    value: '1/4JAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 8
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '7c5628de-e131-4ead-add2-5c1d37df90cf',
    value: '1/4JAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 9
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '24a47d94-4fe5-4a4c-99fd-137bfd3866cf',
    value: '1/4JAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4J Air Atomizing Setups' }
        }
      ],
      sortIndex: 10
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAU,
    ...defaultFacetOption,
    valueId: '4913f789-23a4-483b-8244-0be2d6a72465',
    value: '1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAU' }
        }
      ],
      sortIndex: 11
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAUCO,
    ...defaultFacetOption,
    valueId: 'bf53a065-962a-4bf5-bbb5-e8f2259f2104',
    value: '1/4JAUCO',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAUCO' }
        }
      ],
      sortIndex: 12
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAUH,
    ...defaultFacetOption,
    valueId: '089eb8ab-832f-41b8-abae-1cf4a0f7ba76',
    value: '1/4JAUH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAUH' }
        }
      ],
      sortIndex: 13
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAUMCO,
    ...defaultFacetOption,
    valueId: '75095fe3-ba78-4673-93ae-a31c44886fbd',
    value: '1/4JAUMCO',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAUMCO' }
        }
      ],
      sortIndex: 14
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAUPM,
    ...defaultFacetOption,
    valueId: '93c7b5ab-0b8a-4069-9a95-acbdaa2f653a',
    value: '1/4JAUPM',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAUPM' }
        }
      ],
      sortIndex: 15
    }
  },
  {
    key: ModelIdFacetOptionKey._14JAUPMCO,
    ...defaultFacetOption,
    valueId: '7cab4cf0-ba07-4a60-80b7-ee91ff467d00',
    value: '1/4JAUPMCO',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4JAUPMCO' }
        }
      ],
      sortIndex: 16
    }
  },
  {
    key: ModelIdFacetOptionKey._14VMAU,
    ...defaultFacetOption,
    valueId: 'eb7fc3f4-4dd4-401e-8db8-e0a0a70a091e',
    value: '1/4VMAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/4VMAU' }
        }
      ],
      sortIndex: 17
    }
  },
  {
    key: ModelIdFacetOptionKey._18JAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'aaaeedb9-b77b-47c9-9add-e12043917e06',
    value: '1/8JAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 18
    }
  },
  {
    key: ModelIdFacetOptionKey._18JAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '31ceebe4-becd-4890-9eaa-2061d8d24387',
    value: '1/8JAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 19
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '2153d931-a00c-4e05-b772-45b7e306ea70',
    value: '1/8JJAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJ Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 20
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'e6d7ad15-ceaa-4dc2-8c69-e113dd1212d9',
    value: '1/8JJAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJ Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 21
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '1ca7d140-4527-4c98-b704-32614bd8c242',
    value: '1/8JJAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJ Air Atomizing Bodies' }
        }
      ],
      sortIndex: 22
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '7fbed4e0-f36b-4286-84ba-61cb739e4c06',
    value: '1/8JJAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJ Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 23
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'ac9afb99-441e-423f-bbde-3cb392d3ee73',
    value: '1/8JJAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJ Air Atomizing Setups' }
        }
      ],
      sortIndex: 24
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAU,
    ...defaultFacetOption,
    valueId: '33f13eb8-5a34-4a30-ba73-1f3ca9addb07',
    value: '1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJAU' }
        }
      ],
      sortIndex: 25
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAUH,
    ...defaultFacetOption,
    valueId: '1f24b886-cb56-403e-af42-15ac0fda3766',
    value: '1/8JJAUH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJAUH' }
        }
      ],
      sortIndex: 26
    }
  },
  {
    key: ModelIdFacetOptionKey._18JJAUMCO,
    ...defaultFacetOption,
    valueId: 'a2f6d17c-20ca-4d4d-991f-b0f07c23dfa8',
    value: '1/8JJAUMCO',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8JJAUMCO' }
        }
      ],
      sortIndex: 27
    }
  },
  {
    key: ModelIdFacetOptionKey._18VAU,
    ...defaultFacetOption,
    valueId: 'b7b38d88-4017-45f8-8c00-64c0817d29f9',
    value: '1/8VAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1/8VAU' }
        }
      ],
      sortIndex: 28
    }
  },
  {
    key: ModelIdFacetOptionKey._1053514J,
    ...defaultFacetOption,
    valueId: '47fe2d50-dacc-41ed-8c98-7d8ef792919f',
    value: '10535-1/4J',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '10535-1/4J' }
        }
      ],
      sortIndex: 29
    }
  },
  {
    key: ModelIdFacetOptionKey._1053612J,
    ...defaultFacetOption,
    valueId: '5a70a6a7-fe60-4f20-bdba-532f4882f5b7',
    value: '10536-1/2J',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '10536-1/2J' }
        }
      ],
      sortIndex: 30
    }
  },
  {
    key: ModelIdFacetOptionKey._1088014JAU,
    ...defaultFacetOption,
    valueId: '3b098b68-f809-4025-aa91-1f7d9e32a254',
    value: '10880-1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '10880-1/4JAU' }
        }
      ],
      sortIndex: 31
    }
  },
  {
    key: ModelIdFacetOptionKey._11430,
    ...defaultFacetOption,
    valueId: '89cc9f55-29ed-4984-9638-bf3bc517ba7b',
    value: '11430',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '11430' }
        }
      ],
      sortIndex: 32
    }
  },
  {
    key: ModelIdFacetOptionKey._12900,
    ...defaultFacetOption,
    valueId: 'e34141fa-7765-4aa4-856f-9f12b65183fa',
    value: '12900',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '12900' }
        }
      ],
      sortIndex: 33
    }
  },
  {
    key: ModelIdFacetOptionKey._1324214JAU,
    ...defaultFacetOption,
    valueId: '1a7c2cf9-52d5-4677-8095-c7aa187eb900',
    value: '13242-1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '13242-1/4JAU' }
        }
      ],
      sortIndex: 34
    }
  },
  {
    key: ModelIdFacetOptionKey._13802,
    ...defaultFacetOption,
    valueId: '16c48cfc-88ab-45da-8b30-681575e31039',
    value: '13802',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '13802' }
        }
      ],
      sortIndex: 35
    }
  },
  {
    key: ModelIdFacetOptionKey._1467518JJAU,
    ...defaultFacetOption,
    valueId: 'c25de9ab-a3b2-414a-a39b-fd24a5935c3b',
    value: '14675-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '14675-1/8JJAU' }
        }
      ],
      sortIndex: 36
    }
  },
  {
    key: ModelIdFacetOptionKey._1470018JJAU,
    ...defaultFacetOption,
    valueId: '7f7eb0aa-6c8a-436e-99e2-8a86230daedc',
    value: '14700-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '14700-1/8JJAU' }
        }
      ],
      sortIndex: 37
    }
  },
  {
    key: ModelIdFacetOptionKey._15475,
    ...defaultFacetOption,
    valueId: '',
    value: '15475',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '15475' }
        }
      ],
      sortIndex: 38
    }
  },
  {
    key: ModelIdFacetOptionKey._1686018JJAU,
    ...defaultFacetOption,
    valueId: '842233bd-5e95-4bff-b952-13628ea3e828',
    value: '16860-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '16860-1/8JJAU' }
        }
      ],
      sortIndex: 39
    }
  },
  {
    key: ModelIdFacetOptionKey._1688318JJAU,
    ...defaultFacetOption,
    valueId: 'd7254e42-bde4-4e24-ae06-f6a42d9af9ba',
    value: '16883-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '16883-1/8JJAU' }
        }
      ],
      sortIndex: 40
    }
  },
  {
    key: ModelIdFacetOptionKey._1769018JJAU,
    ...defaultFacetOption,
    valueId: '95ea672d-e94f-44e7-aca3-f17f7ce04b38',
    value: '17690-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '17690-1/8JJAU' }
        }
      ],
      sortIndex: 41
    }
  },
  {
    key: ModelIdFacetOptionKey._18250A,
    ...defaultFacetOption,
    valueId: 'a449d943-fd64-4651-83e3-c8aa97539977',
    value: '18250A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '18250A' }
        }
      ],
      sortIndex: 42
    }
  },
  {
    key: ModelIdFacetOptionKey._1933014JAUPM,
    ...defaultFacetOption,
    valueId: '2eb81c4e-535d-4b0d-ae15-ae48bec63449',
    value: '19330-1/4JAUPM',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '19330-1/4JAUPM' }
        }
      ],
      sortIndex: 43
    }
  },
  {
    key: ModelIdFacetOptionKey._1JAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '8a088c40-f68f-4ba4-a806-4a2583bf6470',
    value: '1JAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 44
    }
  },
  {
    key: ModelIdFacetOptionKey._1JAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'ff498ecf-bf4b-4545-80c2-f7c068f29ad0',
    value: '1JAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 45
    }
  },
  {
    key: ModelIdFacetOptionKey._1JAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'd8d4afff-55d7-4d48-9e30-13f0c1fbdcdf',
    value: '1JAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 46
    }
  },
  {
    key: ModelIdFacetOptionKey._1JAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '5f64170b-18a2-4b35-af6e-0a2251d9bbe1',
    value: '1JAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 47
    }
  },
  {
    key: ModelIdFacetOptionKey._1JAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'abd0a63e-7847-452c-843d-69f0364f26d2',
    value: '1JAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '1J Air Atomizing Setups' }
        }
      ],
      sortIndex: 48
    }
  },
  {
    key: ModelIdFacetOptionKey._21400A,
    ...defaultFacetOption,
    valueId: '152dfde5-093f-483e-837b-5b38099dc873',
    value: '21400A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '21400A' }
        }
      ],
      sortIndex: 49
    }
  },
  {
    key: ModelIdFacetOptionKey._22650PP,
    ...defaultFacetOption,
    valueId: '8fc0b9e2-692e-45f6-8360-151c4369a90d',
    value: '22650-PP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '22650-PP' }
        }
      ],
      sortIndex: 50
    }
  },
  {
    key: ModelIdFacetOptionKey._23120,
    ...defaultFacetOption,
    valueId: '',
    value: '23120',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23120' }
        }
      ],
      sortIndex: 51
    }
  },
  {
    key: ModelIdFacetOptionKey._23120A,
    ...defaultFacetOption,
    valueId: '',
    value: '23120A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23120A' }
        }
      ],
      sortIndex: 52
    }
  },
  {
    key: ModelIdFacetOptionKey._23240,
    ...defaultFacetOption,
    valueId: '63854773-ee4a-40a0-a2e5-d9efcce6d95f',
    value: '23240',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23240' }
        }
      ],
      sortIndex: 53
    }
  },
  {
    key: ModelIdFacetOptionKey._23520,
    ...defaultFacetOption,
    valueId: '',
    value: '23520',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23520' }
        }
      ],
      sortIndex: 54
    }
  },
  {
    key: ModelIdFacetOptionKey._236233114F,
    ...defaultFacetOption,
    valueId: '63e09051-ac9e-4305-9b97-57fc98387cce',
    value: '23623-31-1/4F',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23623-31-1/4F' }
        }
      ],
      sortIndex: 55
    }
  },
  {
    key: ModelIdFacetOptionKey._2362430L,
    ...defaultFacetOption,
    valueId: '67e70f37-6039-45c6-b4a6-3c30bb307dea',
    value: '23624-30L',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '23624-30L' }
        }
      ],
      sortIndex: 56
    }
  },
  {
    key: ModelIdFacetOptionKey._2750027500R,
    ...defaultFacetOption,
    valueId: 'e9a7570c-3b15-42bd-aa9f-a7229093879e',
    value: '27500, 27500-R',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '27500, 27500-R' }
        }
      ],
      sortIndex: 57
    }
  },
  {
    key: ModelIdFacetOptionKey._2750027500R_,
    ...defaultFacetOption,
    valueId: 'd4ff73d2-fb80-4bf2-badc-bb8b91bc5923',
    value: '27500, 27500-R',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '27500, 27500-R' }
        }
      ],
      sortIndex: 58
    }
  },
  {
    key: ModelIdFacetOptionKey._2750027500R__,
    ...defaultFacetOption,
    valueId: '8cf8c411-3b92-4d9a-a17b-eea07b85ca3b',
    value: '27500, 27500-R',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '27500, 27500-R' }
        }
      ],
      sortIndex: 59
    }
  },
  {
    key: ModelIdFacetOptionKey._2850028500R,
    ...defaultFacetOption,
    valueId: 'a5c254ae-06f6-4557-a052-a6fa1b62c3f8',
    value: '28500, 28500-R',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '28500, 28500-R' }
        }
      ],
      sortIndex: 60
    }
  },
  {
    key: ModelIdFacetOptionKey._30473,
    ...defaultFacetOption,
    valueId: 'e173740f-b64b-4f2c-a4dc-f891e537c4c3',
    value: '30473',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '30473' }
        }
      ],
      sortIndex: 61
    }
  },
  {
    key: ModelIdFacetOptionKey._36275,
    ...defaultFacetOption,
    valueId: '',
    value: '36275',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '36275' }
        }
      ],
      sortIndex: 62
    }
  },
  {
    key: ModelIdFacetOptionKey._3653360,
    ...defaultFacetOption,
    valueId: '54551da7-e9db-40d2-8282-b5aa34c7ba4f',
    value: '36533-60',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '36533-60' }
        }
      ],
      sortIndex: 63
    }
  },
  {
    key: ModelIdFacetOptionKey._3849918JJAU,
    ...defaultFacetOption,
    valueId: 'ea4c128e-c5b4-437e-8b4c-6c4cb421dc2f',
    value: '38499-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '38499-1/8JJAU' }
        }
      ],
      sortIndex: 64
    }
  },
  {
    key: ModelIdFacetOptionKey._4688,
    ...defaultFacetOption,
    valueId: 'ea60bfe1-89ab-4c6a-b8a5-562eaa6d3ef5',
    value: '4688',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '4688' }
        }
      ],
      sortIndex: 65
    }
  },
  {
    key: ModelIdFacetOptionKey._4966018JJAU,
    ...defaultFacetOption,
    valueId: '3c56e18f-d1f4-47a5-a414-8e7e9ed867a0',
    value: '49660-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '49660-1/8JJAU' }
        }
      ],
      sortIndex: 66
    }
  },
  {
    key: ModelIdFacetOptionKey._58833,
    ...defaultFacetOption,
    valueId: '1582bbc5-6c34-40d9-b5c1-8e003ed60415',
    value: '58833',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '58833' }
        }
      ],
      sortIndex: 67
    }
  },
  {
    key: ModelIdFacetOptionKey._58834,
    ...defaultFacetOption,
    valueId: '5cccb45a-38a3-4105-abe4-893bcf65ffb0',
    value: '58834',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '58834' }
        }
      ],
      sortIndex: 68
    }
  },
  {
    key: ModelIdFacetOptionKey._608314JAU,
    ...defaultFacetOption,
    valueId: 'd1c19675-0d28-4d28-b450-f5c8f37896d9',
    value: '6083-1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6083-1/4JAU' }
        }
      ],
      sortIndex: 69
    }
  },
  {
    key: ModelIdFacetOptionKey._6104,
    ...defaultFacetOption,
    valueId: '6a2c4c73-ab53-4d87-a6a3-6c29c9568c9d',
    value: '6104',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6104' }
        }
      ],
      sortIndex: 70
    }
  },
  {
    key: ModelIdFacetOptionKey._621814JAU,
    ...defaultFacetOption,
    valueId: '56e8e3d2-7a24-4c4e-8fa5-b70f37ad17e7',
    value: '6218-1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6218-1/4JAU' }
        }
      ],
      sortIndex: 71
    }
  },
  {
    key: ModelIdFacetOptionKey._63225632253A,
    ...defaultFacetOption,
    valueId: '393f76b2-5c5b-45b3-8b01-07a0af330e60',
    value: '63225, 63225-3A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '63225, 63225-3A' }
        }
      ],
      sortIndex: 72
    }
  },
  {
    key: ModelIdFacetOptionKey._63536353MFP,
    ...defaultFacetOption,
    valueId: 'f9336574-cdda-4d5a-9bd2-a3e0f4d092f9',
    value: '6353, 6353-MFP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6353, 6353-MFP' }
        }
      ],
      sortIndex: 73
    }
  },
  {
    key: ModelIdFacetOptionKey._6466,
    ...defaultFacetOption,
    valueId: '108a48f5-4661-4600-9507-1f05a06a4ebf',
    value: '6466',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6466' }
        }
      ],
      sortIndex: 74
    }
  },
  {
    key: ModelIdFacetOptionKey._6590,
    ...defaultFacetOption,
    valueId: '877a7af6-9f59-4a82-8cad-a5d395d7d8e1',
    value: '6590',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6590' }
        }
      ],
      sortIndex: 75
    }
  },
  {
    key: ModelIdFacetOptionKey._6815,
    ...defaultFacetOption,
    valueId: '',
    value: '6815',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6815' }
        }
      ],
      sortIndex: 76
    }
  },
  {
    key: ModelIdFacetOptionKey._6815G,
    ...defaultFacetOption,
    valueId: '',
    value: '6815G',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '6815G' }
        }
      ],
      sortIndex: 77
    }
  },
  {
    key: ModelIdFacetOptionKey._7210018JJAU,
    ...defaultFacetOption,
    valueId: '840b1c7d-6134-4a73-95c9-214c4dede1e5',
    value: '72100-1/8JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '72100-1/8JJAU' }
        }
      ],
      sortIndex: 78
    }
  },
  {
    key: ModelIdFacetOptionKey._731014JAU,
    ...defaultFacetOption,
    valueId: '67795f86-009e-44b0-813d-90c8771b1868',
    value: '7310-1/4JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '7310-1/4JAU' }
        }
      ],
      sortIndex: 79
    }
  },
  {
    key: ModelIdFacetOptionKey._7521,
    ...defaultFacetOption,
    valueId: '',
    value: '7521',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '7521' }
        }
      ],
      sortIndex: 80
    }
  },
  {
    key: ModelIdFacetOptionKey._7G,
    ...defaultFacetOption,
    valueId: '1289d240-6861-4da6-8581-f264ca1b2c20',
    value: '7G',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '7G' }
        }
      ],
      sortIndex: 81
    }
  },
  {
    key: ModelIdFacetOptionKey._7N,
    ...defaultFacetOption,
    valueId: '75c2f80e-57dd-4553-b957-80b97a47b500',
    value: '7N',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '7N' }
        }
      ],
      sortIndex: 82
    }
  },
  {
    key: ModelIdFacetOptionKey._8370,
    ...defaultFacetOption,
    valueId: '',
    value: '8370',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '8370' }
        }
      ],
      sortIndex: 83
    }
  },
  {
    key: ModelIdFacetOptionKey._8460,
    ...defaultFacetOption,
    valueId: '',
    value: '8460',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '8460' }
        }
      ],
      sortIndex: 84
    }
  },
  {
    key: ModelIdFacetOptionKey._8686,
    ...defaultFacetOption,
    valueId: '82fc0ab2-a17d-45a8-be38-ed4f6c1efed4',
    value: '8686',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '8686' }
        }
      ],
      sortIndex: 85
    }
  },
  {
    key: ModelIdFacetOptionKey.AA090,
    ...defaultFacetOption,
    valueId: 'bd4315c9-82ed-4fa6-bfd3-be00ea9cda71',
    value: 'AA090',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA090' }
        }
      ],
      sortIndex: 86
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH0050,
    ...defaultFacetOption,
    valueId: '58fc7636-bf1b-4f49-bcd4-593342bb2fa5',
    value: 'AA10000AUH-0050',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-0050' }
        }
      ],
      sortIndex: 87
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH03,
    ...defaultFacetOption,
    valueId: '9ff270a7-8c52-4b1a-8275-160e31e09dc0',
    value: 'AA10000AUH-03',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-03' }
        }
      ],
      sortIndex: 88
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH03Z1,
    ...defaultFacetOption,
    valueId: 'f889750e-2593-49e7-b309-52d301869903',
    value: 'AA10000AUH-03-Z1',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-03-Z1' }
        }
      ],
      sortIndex: 89
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH10,
    ...defaultFacetOption,
    valueId: '1f3aec4e-abb0-4435-ab24-8c14d7cbbb78',
    value: 'AA10000AUH-10',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-10' }
        }
      ],
      sortIndex: 90
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH104210,
    ...defaultFacetOption,
    valueId: '9f344f4f-5b9e-4050-bc9a-95c4c31d0fa6',
    value: 'AA10000AUH-104210',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-104210' }
        }
      ],
      sortIndex: 91
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH104214,
    ...defaultFacetOption,
    valueId: '080480dc-53db-42f5-8129-7ce2075c75ae',
    value: 'AA10000AUH-104214',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-104214' }
        }
      ],
      sortIndex: 92
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH104215,
    ...defaultFacetOption,
    valueId: '16a42411-de3b-43d4-85e7-2e0de0bd6fc7',
    value: 'AA10000AUH-104215',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-104215' }
        }
      ],
      sortIndex: 93
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000AUH7244014,
    ...defaultFacetOption,
    valueId: '3be4295b-5ba5-433c-9212-f41adb4d7565',
    value: 'AA10000AUH-72440-1/4',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000AUH-72440-1/4' }
        }
      ],
      sortIndex: 94
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000JAU10,
    ...defaultFacetOption,
    valueId: '41c8c906-7d03-4455-9c10-5381905310e1',
    value: 'AA10000JAU-10',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000JAU-10' }
        }
      ],
      sortIndex: 95
    }
  },
  {
    key: ModelIdFacetOptionKey.AA10000JJAU,
    ...defaultFacetOption,
    valueId: '320fd7e2-a06e-4fee-997b-fc720e9aaa0b',
    value: 'AA10000JJAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA10000JJAU' }
        }
      ],
      sortIndex: 96
    }
  },
  {
    key: ModelIdFacetOptionKey.AA110,
    ...defaultFacetOption,
    valueId: '',
    value: 'AA110',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA110' }
        }
      ],
      sortIndex: 97
    }
  },
  {
    key: ModelIdFacetOptionKey.AA122,
    ...defaultFacetOption,
    valueId: '864eeb85-b5bc-4dde-b3ee-363d4c6253d1',
    value: 'AA122',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA122' }
        }
      ],
      sortIndex: 98
    }
  },
  {
    key: ModelIdFacetOptionKey.AA124,
    ...defaultFacetOption,
    valueId: '7d5568eb-8577-4c41-805a-d9ed22f7af03',
    value: 'AA124',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA124' }
        }
      ],
      sortIndex: 99
    }
  },
  {
    key: ModelIdFacetOptionKey.AA190,
    ...defaultFacetOption,
    valueId: 'b5bd2dc6-2208-43ae-97e7-5c6d0326d646',
    value: 'AA190',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA190' }
        }
      ],
      sortIndex: 100
    }
  },
  {
    key: ModelIdFacetOptionKey.AA22AUH,
    ...defaultFacetOption,
    valueId: '3d105cfb-0146-4383-b604-fa77fc136788',
    value: 'AA22AUH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA22AUH' }
        }
      ],
      sortIndex: 101
    }
  },
  {
    key: ModelIdFacetOptionKey.AA22AUH7676,
    ...defaultFacetOption,
    valueId: 'e8706c12-5333-4d01-adaf-6280ff8bee1d',
    value: 'AA22AUH-7676',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA22AUH-7676' }
        }
      ],
      sortIndex: 102
    }
  },
  {
    key: ModelIdFacetOptionKey.AA22AUHSS11024,
    ...defaultFacetOption,
    valueId: '9df827de-173d-4508-91cd-7fadeb4280df',
    value: 'AA22AUH-SS-11024',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA22AUH-SS-11024' }
        }
      ],
      sortIndex: 103
    }
  },
  {
    key: ModelIdFacetOptionKey.AA22AUHSS14799,
    ...defaultFacetOption,
    valueId: '599b80f1-a932-48e4-b347-c5f8353847ff',
    value: 'AA22AUH-SS-14799',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA22AUH-SS-14799' }
        }
      ],
      sortIndex: 104
    }
  },
  {
    key: ModelIdFacetOptionKey.AA23H,
    ...defaultFacetOption,
    valueId: '6b9f9105-94f4-4091-84c7-f027d7bc3441',
    value: 'AA23H',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA23H' }
        }
      ],
      sortIndex: 105
    }
  },
  {
    key: ModelIdFacetOptionKey.AA23L,
    ...defaultFacetOption,
    valueId: '41019401-8fb6-48d2-a08e-e8e5d2d7fe99',
    value: 'AA23L',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA23L' }
        }
      ],
      sortIndex: 106
    }
  },
  {
    key: ModelIdFacetOptionKey.AA23L45885,
    ...defaultFacetOption,
    valueId: 'fdb63a81-7680-437d-9619-be4184430c7a',
    value: 'AA23L-45885',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA23L-45885' }
        }
      ],
      sortIndex: 107
    }
  },
  {
    key: ModelIdFacetOptionKey.AA24AUA,
    ...defaultFacetOption,
    valueId: '4d1ab542-321c-455f-a88d-c429d298ea53',
    value: 'AA24AUA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA24AUA' }
        }
      ],
      sortIndex: 108
    }
  },
  {
    key: ModelIdFacetOptionKey.AA24AUA20190,
    ...defaultFacetOption,
    valueId: '1bc20c6a-74bd-4441-81f8-35ecb4e2a055',
    value: 'AA24AUA-20190',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA24AUA-20190' }
        }
      ],
      sortIndex: 109
    }
  },
  {
    key: ModelIdFacetOptionKey.AA24AUA8395,
    ...defaultFacetOption,
    valueId: 'bdde5a2c-6dc4-4bcf-99e1-b2c864eaa8a9',
    value: 'AA24AUA-8395',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA24AUA-8395' }
        }
      ],
      sortIndex: 110
    }
  },
  {
    key: ModelIdFacetOptionKey.AA24AUA8980,
    ...defaultFacetOption,
    valueId: 'e939ef3e-5652-4a54-9aed-a35a41631fed',
    value: 'AA24AUA-8980',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA24AUA-8980' }
        }
      ],
      sortIndex: 111
    }
  },
  {
    key: ModelIdFacetOptionKey.AA250AUH,
    ...defaultFacetOption,
    valueId: '5eb56c07-a7e1-4b1a-a9ce-bc4dc67dbd34',
    value: 'AA250AUH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA250AUH' }
        }
      ],
      sortIndex: 112
    }
  },
  {
    key: ModelIdFacetOptionKey.AA26AUH,
    ...defaultFacetOption,
    valueId: 'e232dfd0-0c6f-4e66-b379-4abe5706b957',
    value: 'AA26AUH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA26AUH' }
        }
      ],
      sortIndex: 113
    }
  },
  {
    key: ModelIdFacetOptionKey.AA28JJAU49815,
    ...defaultFacetOption,
    valueId: '9afe6139-b2b0-4c39-a882-ab07968d5d9d',
    value: 'AA28JJAU-49815',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA28JJAU-49815' }
        }
      ],
      sortIndex: 114
    }
  },
  {
    key: ModelIdFacetOptionKey.AA290,
    ...defaultFacetOption,
    valueId: 'b6f26bc1-01ef-41f0-b137-fdcbe1d36eaa',
    value: 'AA290',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA290' }
        }
      ],
      sortIndex: 115
    }
  },
  {
    key: ModelIdFacetOptionKey.AA29JAUCO,
    ...defaultFacetOption,
    valueId: '2477f043-7e47-4713-ba81-84c28e11e3c0',
    value: 'AA29JAUCO',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA29JAUCO' }
        }
      ],
      sortIndex: 116
    }
  },
  {
    key: ModelIdFacetOptionKey.AA3020940,
    ...defaultFacetOption,
    valueId: '2f8c9c40-35f0-4223-871d-6dae8d8b9a12',
    value: 'AA30-20940',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA30-20940' }
        }
      ],
      sortIndex: 117
    }
  },
  {
    key: ModelIdFacetOptionKey.AA30A,
    ...defaultFacetOption,
    valueId: '9698d088-0ce8-4c50-b6ee-4c17c4236730',
    value: 'AA30A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA30A' }
        }
      ],
      sortIndex: 118
    }
  },
  {
    key: ModelIdFacetOptionKey.AA30L,
    ...defaultFacetOption,
    valueId: '72082891-d009-4511-afd6-4cddf944fa8e',
    value: 'AA30L',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA30L' }
        }
      ],
      sortIndex: 119
    }
  },
  {
    key: ModelIdFacetOptionKey.AA31,
    ...defaultFacetOption,
    valueId: '4d39a0e2-062f-4a3b-a17c-48150741a2ab',
    value: 'AA31',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA31' }
        }
      ],
      sortIndex: 120
    }
  },
  {
    key: ModelIdFacetOptionKey.AA36,
    ...defaultFacetOption,
    valueId: '224ba8a9-809d-42e3-802a-ad167426b071',
    value: 'AA36',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA36' }
        }
      ],
      sortIndex: 121
    }
  },
  {
    key: ModelIdFacetOptionKey.AA430,
    ...defaultFacetOption,
    valueId: 'b013c606-6a18-40f6-b08b-5b036e6b25f7',
    value: 'AA430',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA430' }
        }
      ],
      sortIndex: 122
    }
  },
  {
    key: ModelIdFacetOptionKey.AA43HC,
    ...defaultFacetOption,
    valueId: 'c4774c58-2231-4720-aad8-6c3d685e727d',
    value: 'AA43HC',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA43HC' }
        }
      ],
      sortIndex: 123
    }
  },
  {
    key: ModelIdFacetOptionKey.AA43LC,
    ...defaultFacetOption,
    valueId: '67766c84-66d8-401b-beaa-68276df0fc44',
    value: 'AA43LC',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA43LC' }
        }
      ],
      sortIndex: 124
    }
  },
  {
    key: ModelIdFacetOptionKey.AA60,
    ...defaultFacetOption,
    valueId: '8d1607ff-0132-4fd2-8fca-c47d55be47e0',
    value: 'AA60',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA60' }
        }
      ],
      sortIndex: 125
    }
  },
  {
    key: ModelIdFacetOptionKey.AA6021580,
    ...defaultFacetOption,
    valueId: '0ef983fb-6a3b-4a5a-a061-7da3d2dfed76',
    value: 'AA60-21580',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA60-21580' }
        }
      ],
      sortIndex: 126
    }
  },
  {
    key: ModelIdFacetOptionKey.AA70,
    ...defaultFacetOption,
    valueId: '311c9c7b-d10b-4d47-9fe0-8578fec5dcf7',
    value: 'AA70',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA70' }
        }
      ],
      sortIndex: 127
    }
  },
  {
    key: ModelIdFacetOptionKey.AA707,
    ...defaultFacetOption,
    valueId: 'ba8cb9c6-7cd8-43cc-a70b-f23dccc17ffa',
    value: 'AA707',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA707' }
        }
      ],
      sortIndex: 128
    }
  },
  {
    key: ModelIdFacetOptionKey.AA727,
    ...defaultFacetOption,
    valueId: 'f64de3ea-fe2b-4a29-8757-b6c5f3ba14e5',
    value: 'AA727',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA727' }
        }
      ],
      sortIndex: 129
    }
  },
  {
    key: ModelIdFacetOptionKey.AA80,
    ...defaultFacetOption,
    valueId: 'c2bca1c4-576d-49c4-ad84-05b8adf2c12e',
    value: 'AA80',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AA80' }
        }
      ],
      sortIndex: 130
    }
  },
  {
    key: ModelIdFacetOptionKey.AP,
    ...defaultFacetOption,
    valueId: 'c8499af6-5c0c-4668-b18e-c2cf231a5d0d',
    value: 'AP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AP' }
        }
      ],
      sortIndex: 131
    }
  },
  {
    key: ModelIdFacetOptionKey.APW,
    ...defaultFacetOption,
    valueId: 'bcfcc819-a89f-4a8d-9725-6dbeb5454d09',
    value: 'AP-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AP-W' }
        }
      ],
      sortIndex: 132
    }
  },
  {
    key: ModelIdFacetOptionKey.AX,
    ...defaultFacetOption,
    valueId: '64ab5919-5d3c-4df3-82c7-21fbebb822b0',
    value: 'AX',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AX' }
        }
      ],
      sortIndex: 133
    }
  },
  {
    key: ModelIdFacetOptionKey.AXW,
    ...defaultFacetOption,
    valueId: '3961b3ba-faf5-4edf-9c3a-21695b2ff31e',
    value: 'AX-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'AX-W' }
        }
      ],
      sortIndex: 134
    }
  },
  {
    key: ModelIdFacetOptionKey.BA,
    ...defaultFacetOption,
    valueId: '31459e0b-2b79-4cb6-9e05-668d43fc4165',
    value: 'BA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BA' }
        }
      ],
      sortIndex: 135
    }
  },
  {
    key: ModelIdFacetOptionKey.BD,
    ...defaultFacetOption,
    valueId: '02e085f2-f128-40d6-b024-da9174e66358',
    value: 'BD',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BD' }
        }
      ],
      sortIndex: 136
    }
  },
  {
    key: ModelIdFacetOptionKey.BDM,
    ...defaultFacetOption,
    valueId: 'fe6eb4b3-f32d-4021-9346-b44edae237cd',
    value: 'BDM',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BDM' }
        }
      ],
      sortIndex: 137
    }
  },
  {
    key: ModelIdFacetOptionKey.BDW,
    ...defaultFacetOption,
    valueId: '99a60695-388b-4a09-b1c8-2565a0b9b08a',
    value: 'BD-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BD-W' }
        }
      ],
      sortIndex: 138
    }
  },
  {
    key: ModelIdFacetOptionKey.BSJ,
    ...defaultFacetOption,
    valueId: '74a675ec-70c9-423f-b758-64bc8812c467',
    value: 'BSJ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BSJ' }
        }
      ],
      sortIndex: 139
    }
  },
  {
    key: ModelIdFacetOptionKey.BX,
    ...defaultFacetOption,
    valueId: 'fd93e9b5-9527-4158-861e-0c4f93c1e267',
    value: 'BX',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BX' }
        }
      ],
      sortIndex: 140
    }
  },
  {
    key: ModelIdFacetOptionKey.BXW,
    ...defaultFacetOption,
    valueId: 'c5d20190-ddb5-4d05-a720-5757b75da7b0',
    value: 'BX-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'BX-W' }
        }
      ],
      sortIndex: 141
    }
  },
  {
    key: ModelIdFacetOptionKey.CF,
    ...defaultFacetOption,
    valueId: 'a1f8e817-fb96-47e7-a8b4-61466e63a336',
    value: 'CF',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'CF' }
        }
      ],
      sortIndex: 142
    }
  },
  {
    key: ModelIdFacetOptionKey.CRC,
    ...defaultFacetOption,
    valueId: '842b3f35-8129-4232-9536-4cf0d613bf2f',
    value: 'CRC',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'CRC' }
        }
      ],
      sortIndex: 143
    }
  },
  {
    key: ModelIdFacetOptionKey.CU150A,
    ...defaultFacetOption,
    valueId: '77e098f6-ae5d-42fe-8486-b3f8f9177145',
    value: 'CU150A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'CU150A' }
        }
      ],
      sortIndex: 144
    }
  },
  {
    key: ModelIdFacetOptionKey.CX,
    ...defaultFacetOption,
    valueId: 'a67b1cd3-0937-4aca-b2e4-7f250211f4eb',
    value: 'CX',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'CX' }
        }
      ],
      sortIndex: 145
    }
  },
  {
    key: ModelIdFacetOptionKey.D,
    ...defaultFacetOption,
    valueId: 'a829fc3f-1a19-490b-9fff-02f0c0eb1ca6',
    value: 'D',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D' }
        }
      ],
      sortIndex: 146
    }
  },
  {
    key: ModelIdFacetOptionKey.D26564,
    ...defaultFacetOption,
    valueId: '3a2e8d9b-7a70-46c8-8e8d-9620951f9f43',
    value: 'D26564',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D26564' }
        }
      ],
      sortIndex: 147
    }
  },
  {
    key: ModelIdFacetOptionKey.D26984,
    ...defaultFacetOption,
    valueId: 'a4cebc4d-d174-4971-9194-3c70cddcbe8b',
    value: 'D26984',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D26984' }
        }
      ],
      sortIndex: 148
    }
  },
  {
    key: ModelIdFacetOptionKey.D27500,
    ...defaultFacetOption,
    valueId: 'ed5c8c34-9645-4f13-be90-ed7a386521c8',
    value: 'D27500',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D27500' }
        }
      ],
      sortIndex: 149
    }
  },
  {
    key: ModelIdFacetOptionKey.D40159,
    ...defaultFacetOption,
    valueId: '513a5aa2-9605-4f91-9457-60e7483a44ed',
    value: 'D40159',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D40159' }
        }
      ],
      sortIndex: 150
    }
  },
  {
    key: ModelIdFacetOptionKey.D41800E,
    ...defaultFacetOption,
    valueId: '24845524-394e-46b7-8e90-393f320eac72',
    value: 'D41800E',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D41800E' }
        }
      ],
      sortIndex: 151
    }
  },
  {
    key: ModelIdFacetOptionKey.D41892,
    ...defaultFacetOption,
    valueId: '31af0701-43f5-44a1-8e1f-e69319993db7',
    value: 'D41892',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D41892' }
        }
      ],
      sortIndex: 152
    }
  },
  {
    key: ModelIdFacetOptionKey.D41990,
    ...defaultFacetOption,
    valueId: '2cdd2bc8-a28a-4d1a-9e36-02befd29e3be',
    value: 'D41990',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D41990' }
        }
      ],
      sortIndex: 153
    }
  },
  {
    key: ModelIdFacetOptionKey.D41990_,
    ...defaultFacetOption,
    valueId: '9e23c75a-0c1f-456b-b623-dbd4fb4727be',
    value: 'D41990',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D41990' }
        }
      ],
      sortIndex: 154
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500JAU,
    ...defaultFacetOption,
    valueId: '571cf9fa-2368-4619-8e74-ef62cd505896',
    value: 'D55500-JAU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D55500-JAU' }
        }
      ],
      sortIndex: 155
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500JAUH0,
    ...defaultFacetOption,
    valueId: '49af7162-1dd1-4dce-a656-8b3de70c838b',
    value: 'D55500-JAUH0',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D55500-JAUH0' }
        }
      ],
      sortIndex: 156
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500JAUH1,
    ...defaultFacetOption,
    valueId: '5dec2514-760a-4984-afc3-db96cec4f5f2',
    value: 'D55500-JAUH1',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D55500-JAUH1' }
        }
      ],
      sortIndex: 157
    }
  },
  {
    key: ModelIdFacetOptionKey.D55567,
    ...defaultFacetOption,
    valueId: 'b6d07564-d4a0-4391-a535-7a701e54bc1c',
    value: 'D55567',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D55567' }
        }
      ],
      sortIndex: 158
    }
  },
  {
    key: ModelIdFacetOptionKey.D55606,
    ...defaultFacetOption,
    valueId: 'b2d0936c-00e1-4483-9333-57ae743da593',
    value: 'D55606',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D55606' }
        }
      ],
      sortIndex: 159
    }
  },
  {
    key: ModelIdFacetOptionKey.DAA727,
    ...defaultFacetOption,
    valueId: '09aaf197-5982-464c-9fe2-af565968b742',
    value: 'DAA727',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'DAA727' }
        }
      ],
      sortIndex: 160
    }
  },
  {
    key: ModelIdFacetOptionKey.DHH,
    ...defaultFacetOption,
    valueId: 'd8692175-3cdb-49cc-976f-5f4d48018ddc',
    value: 'D-HH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D-HH' }
        }
      ],
      sortIndex: 161
    }
  },
  {
    key: ModelIdFacetOptionKey.DHH_,
    ...defaultFacetOption,
    valueId: '42a4048b-ebf9-4d0b-aa84-d6598c6ef569',
    value: 'D-HH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'D-HH' }
        }
      ],
      sortIndex: 162
    }
  },
  {
    key: ModelIdFacetOptionKey.E,
    ...defaultFacetOption,
    valueId: 'c9f3c5a4-399b-4001-8cda-1e3bf8544746',
    value: 'E',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'E' }
        }
      ],
      sortIndex: 163
    }
  },
  {
    key: ModelIdFacetOptionKey.EG,
    ...defaultFacetOption,
    valueId: '4bf9160f-7268-42cf-adf7-3656340cad18',
    value: 'EG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'EG' }
        }
      ],
      sortIndex: 164
    }
  },
  {
    key: ModelIdFacetOptionKey.FF,
    ...defaultFacetOption,
    valueId: 'd17a1ee6-dbd5-4b0b-8403-560d3408f1fd',
    value: 'FF',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'FF' }
        }
      ],
      sortIndex: 165
    }
  },
  {
    key: ModelIdFacetOptionKey.FS013,
    ...defaultFacetOption,
    valueId: '59e93efb-c545-4c45-b710-92618d182482',
    value: 'FS013',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'FS013' }
        }
      ],
      sortIndex: 166
    }
  },
  {
    key: ModelIdFacetOptionKey.FS020,
    ...defaultFacetOption,
    valueId: 'dff8d93e-a3da-4147-8be9-1d4b3841ff65',
    value: 'FS020',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'FS020' }
        }
      ],
      sortIndex: 167
    }
  },
  {
    key: ModelIdFacetOptionKey.G,
    ...defaultFacetOption,
    valueId: '1abf057f-bfb1-4dbe-b2a8-ac9730ac1c75',
    value: 'G',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G' }
        }
      ],
      sortIndex: 168
    }
  },
  {
    key: ModelIdFacetOptionKey.G15,
    ...defaultFacetOption,
    valueId: '90db5e68-ce6a-4bdb-a8e3-ed1f386d1ace',
    value: 'G-15',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G-15' }
        }
      ],
      sortIndex: 169
    }
  },
  {
    key: ModelIdFacetOptionKey.G30,
    ...defaultFacetOption,
    valueId: '35f894d5-6c26-4f6d-b032-c0f8fd0fb98c',
    value: 'G-30',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G-30' }
        }
      ],
      sortIndex: 170
    }
  },
  {
    key: ModelIdFacetOptionKey.GA,
    ...defaultFacetOption,
    valueId: 'e70f1cec-1cbd-42d1-9fe6-eefbf7856509',
    value: 'GA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GA' }
        }
      ],
      sortIndex: 171
    }
  },
  {
    key: ModelIdFacetOptionKey.GANV,
    ...defaultFacetOption,
    valueId: '2cbd1791-36a8-42a8-8607-a1e01bffa380',
    value: 'GANV',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GANV' }
        }
      ],
      sortIndex: 172
    }
  },
  {
    key: ModelIdFacetOptionKey.GAW,
    ...defaultFacetOption,
    valueId: '7ecd5937-c15b-4207-a12f-6940305604dd',
    value: 'GA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GA-W' }
        }
      ],
      sortIndex: 173
    }
  },
  {
    key: ModelIdFacetOptionKey.GD,
    ...defaultFacetOption,
    valueId: '7da3eacf-1bfa-44db-abce-12772d9200c2',
    value: 'GD',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GD' }
        }
      ],
      sortIndex: 174
    }
  },
  {
    key: ModelIdFacetOptionKey.GG,
    ...defaultFacetOption,
    valueId: '4d785223-757e-4c83-86c9-40a1214dc162',
    value: 'GG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG' }
        }
      ],
      sortIndex: 175
    }
  },
  {
    key: ModelIdFacetOptionKey.GG15,
    ...defaultFacetOption,
    valueId: 'b6e739ff-c299-4ac1-9a75-ac1679db469c',
    value: 'GG-15',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG-15' }
        }
      ],
      sortIndex: 176
    }
  },
  {
    key: ModelIdFacetOptionKey.GG30,
    ...defaultFacetOption,
    valueId: 'd02959d6-1917-4f7b-ba08-353ff7077398',
    value: 'GG-30',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG-30' }
        }
      ],
      sortIndex: 177
    }
  },
  {
    key: ModelIdFacetOptionKey.GGA,
    ...defaultFacetOption,
    valueId: 'a13eaed3-a9a2-4ea7-960d-6b1ffc0462ad',
    value: 'GGA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GGA' }
        }
      ],
      sortIndex: 178
    }
  },
  {
    key: ModelIdFacetOptionKey.GGANV,
    ...defaultFacetOption,
    valueId: '5d52fbb5-cfe6-4464-b568-feaafbbcd6f5',
    value: 'GGANV',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GGANV' }
        }
      ],
      sortIndex: 179
    }
  },
  {
    key: ModelIdFacetOptionKey.GGAW,
    ...defaultFacetOption,
    valueId: 'c0b8a80b-9928-425a-be3b-378192fec8f1',
    value: 'GGA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GGA-W' }
        }
      ],
      sortIndex: 180
    }
  },
  {
    key: ModelIdFacetOptionKey.GGD,
    ...defaultFacetOption,
    valueId: '62a1d56a-7882-4321-9f49-48826f8564c4',
    value: 'GGD',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GGD' }
        }
      ],
      sortIndex: 181
    }
  },
  {
    key: ModelIdFacetOptionKey.GGSQ,
    ...defaultFacetOption,
    valueId: '1e4fff3d-c06c-4312-b3fd-6eaf51a4d4d5',
    value: 'GG-SQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG-SQ' }
        }
      ],
      sortIndex: 182
    }
  },
  {
    key: ModelIdFacetOptionKey.GGVL,
    ...defaultFacetOption,
    valueId: 'ef66d060-307f-4fd0-9487-ed13603affd6',
    value: 'GG-VL',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG-VL' }
        }
      ],
      sortIndex: 183
    }
  },
  {
    key: ModelIdFacetOptionKey.GGW,
    ...defaultFacetOption,
    valueId: '777e8557-2226-4519-99fb-e8858bc5f55b',
    value: 'GG-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'GG-W' }
        }
      ],
      sortIndex: 184
    }
  },
  {
    key: ModelIdFacetOptionKey.GSQ,
    ...defaultFacetOption,
    valueId: '5a0c8b02-2351-4b35-9e98-38de2a25780b',
    value: 'G-SQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G-SQ' }
        }
      ],
      sortIndex: 185
    }
  },
  {
    key: ModelIdFacetOptionKey.GVL,
    ...defaultFacetOption,
    valueId: '30705817-0aae-46d5-85e1-a868e5ea19a3',
    value: 'G-VL',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G-VL' }
        }
      ],
      sortIndex: 186
    }
  },
  {
    key: ModelIdFacetOptionKey.GW,
    ...defaultFacetOption,
    valueId: '3b4b35bb-4276-4656-97b4-9d6461166179',
    value: 'G-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'G-W' }
        }
      ],
      sortIndex: 187
    }
  },
  {
    key: ModelIdFacetOptionKey.H,
    ...defaultFacetOption,
    valueId: '10855208-3ccc-43a5-a59e-c7d3b7b54332',
    value: 'H',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H' }
        }
      ],
      sortIndex: 188
    }
  },
  {
    key: ModelIdFacetOptionKey.H15,
    ...defaultFacetOption,
    valueId: 'bad59484-4494-4c6a-a02e-91b0b00d0255',
    value: 'H-15',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-15' }
        }
      ],
      sortIndex: 189
    }
  },
  {
    key: ModelIdFacetOptionKey.HD,
    ...defaultFacetOption,
    valueId: '46cebd92-4ba3-4304-80ae-6eaf7c9afc53',
    value: 'HD',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HD' }
        }
      ],
      sortIndex: 190
    }
  },
  {
    key: ModelIdFacetOptionKey.HDT,
    ...defaultFacetOption,
    valueId: '003521c6-f62e-4a9a-bcfd-2533d69fdd21',
    value: 'H-DT',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-DT' }
        }
      ],
      sortIndex: 191
    }
  },
  {
    key: ModelIdFacetOptionKey.HDU,
    ...defaultFacetOption,
    valueId: 'debad2d7-a50e-4a4f-8d88-a365c1ead4c9',
    value: 'H-DU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-DU' }
        }
      ],
      sortIndex: 192
    }
  },
  {
    key: ModelIdFacetOptionKey.HF,
    ...defaultFacetOption,
    valueId: '56accc29-93f2-425d-96b4-42c827a6af59',
    value: 'HF',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HF' }
        }
      ],
      sortIndex: 193
    }
  },
  {
    key: ModelIdFacetOptionKey.HH,
    ...defaultFacetOption,
    valueId: '3b791350-e7ea-49e8-a91c-8fe320db45d7',
    value: 'HH',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH' }
        }
      ],
      sortIndex: 194
    }
  },
  {
    key: ModelIdFacetOptionKey.HH30,
    ...defaultFacetOption,
    valueId: '563c4c7f-cd27-43f8-853f-b5ebd3a4c443',
    value: 'HH-30',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH-30' }
        }
      ],
      sortIndex: 195
    }
  },
  {
    key: ModelIdFacetOptionKey.HHKY,
    ...defaultFacetOption,
    valueId: '808bd61f-4a87-4060-a635-1c7d32e326d6',
    value: 'HH-KY',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH-KY' }
        }
      ],
      sortIndex: 196
    }
  },
  {
    key: ModelIdFacetOptionKey.HHMFP,
    ...defaultFacetOption,
    valueId: '88fdf175-b8f9-4763-884f-dfd22ebe138f',
    value: 'HHMFP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HHMFP' }
        }
      ],
      sortIndex: 197
    }
  },
  {
    key: ModelIdFacetOptionKey.HHSJ,
    ...defaultFacetOption,
    valueId: '649b8de0-a86b-4478-a708-c9ce4c643ccf',
    value: 'HHSJ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HHSJ' }
        }
      ],
      sortIndex: 198
    }
  },
  {
    key: ModelIdFacetOptionKey.HHSJX,
    ...defaultFacetOption,
    valueId: 'abe44c39-b7fe-40a9-80a5-c777511d69fc',
    value: 'HHSJX',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HHSJX' }
        }
      ],
      sortIndex: 199
    }
  },
  {
    key: ModelIdFacetOptionKey.HHSQ,
    ...defaultFacetOption,
    valueId: 'e98fed9d-4dca-4bfe-97a4-75099eb256f6',
    value: 'HH-SQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH-SQ' }
        }
      ],
      sortIndex: 200
    }
  },
  {
    key: ModelIdFacetOptionKey.HHW,
    ...defaultFacetOption,
    valueId: 'f3aceacf-ae50-468d-b87f-f2fbda5abc62',
    value: 'HH-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH-W' }
        }
      ],
      sortIndex: 201
    }
  },
  {
    key: ModelIdFacetOptionKey.HHWSQ,
    ...defaultFacetOption,
    valueId: '163d709f-71cb-4fe7-be29-ed42da4b3384',
    value: 'HH-WSQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HH-WSQ' }
        }
      ],
      sortIndex: 202
    }
  },
  {
    key: ModelIdFacetOptionKey.HMFP,
    ...defaultFacetOption,
    valueId: '0dfd2e00-9fe8-4460-913e-623249e30f84',
    value: 'HMFP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'HMFP' }
        }
      ],
      sortIndex: 203
    }
  },
  {
    key: ModelIdFacetOptionKey.HSQ,
    ...defaultFacetOption,
    valueId: '9b4bcf48-9406-429e-b5bd-7e1125f77559',
    value: 'H-SQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-SQ' }
        }
      ],
      sortIndex: 204
    }
  },
  {
    key: ModelIdFacetOptionKey.HU,
    ...defaultFacetOption,
    valueId: 'a9392776-d282-4182-b913-8fd5dbe9cf3b',
    value: 'H-U',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-U' }
        }
      ],
      sortIndex: 205
    }
  },
  {
    key: ModelIdFacetOptionKey.HVV,
    ...defaultFacetOption,
    valueId: '5f0d8f73-ec39-42e6-ab0d-6c54237d77c5',
    value: 'H-VV',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-VV' }
        }
      ],
      sortIndex: 206
    }
  },
  {
    key: ModelIdFacetOptionKey.HVVL,
    ...defaultFacetOption,
    valueId: '4ada0ad4-5117-494c-9996-61f4cbd5de8d',
    value: 'H-VVL',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-VVL' }
        }
      ],
      sortIndex: 207
    }
  },
  {
    key: ModelIdFacetOptionKey.HW,
    ...defaultFacetOption,
    valueId: '0f9545fb-66f6-442c-b97e-22626dde487c',
    value: 'H-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-W' }
        }
      ],
      sortIndex: 208
    }
  },
  {
    key: ModelIdFacetOptionKey.HWSQ,
    ...defaultFacetOption,
    valueId: '65ffdf49-a04d-45a5-a7f4-44f3eea14391',
    value: 'H-WSQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'H-WSQ' }
        }
      ],
      sortIndex: 209
    }
  },
  {
    key: ModelIdFacetOptionKey.IMEG,
    ...defaultFacetOption,
    valueId: '2d0bc1ea-93e3-491b-8ac4-ad28be8b17ed',
    value: 'IMEG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'IMEG' }
        }
      ],
      sortIndex: 210
    }
  },
  {
    key: ModelIdFacetOptionKey.K,
    ...defaultFacetOption,
    valueId: '2b155447-0d6b-49aa-8d06-781c66af878c',
    value: 'K',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'K' }
        }
      ],
      sortIndex: 211
    }
  },
  {
    key: ModelIdFacetOptionKey.LAP,
    ...defaultFacetOption,
    valueId: '339f204b-df15-454f-ad16-e480e51380df',
    value: 'LAP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LAP' }
        }
      ],
      sortIndex: 212
    }
  },
  {
    key: ModelIdFacetOptionKey.LAPW,
    ...defaultFacetOption,
    valueId: '0f610328-4897-4b80-a700-910feeb9f910',
    value: 'LAP-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LAP-W' }
        }
      ],
      sortIndex: 213
    }
  },
  {
    key: ModelIdFacetOptionKey.LBP,
    ...defaultFacetOption,
    valueId: '3c01791d-e02d-48e9-8f49-5ffeaf4bc831',
    value: 'LBP',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LBP' }
        }
      ],
      sortIndex: 214
    }
  },
  {
    key: ModelIdFacetOptionKey.LBPW,
    ...defaultFacetOption,
    valueId: '5f1b6565-4b68-43ba-9cc2-fcb0d984d38f',
    value: 'LBP-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LBP-W' }
        }
      ],
      sortIndex: 215
    }
  },
  {
    key: ModelIdFacetOptionKey.LN,
    ...defaultFacetOption,
    valueId: 'd537e994-1a53-4e66-a174-13c93cc00f7d',
    value: 'LN',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LN' }
        }
      ],
      sortIndex: 216
    }
  },
  {
    key: ModelIdFacetOptionKey.LND,
    ...defaultFacetOption,
    valueId: 'e7a41e65-7909-4803-896d-095e3e5f4def',
    value: 'LND',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LND' }
        }
      ],
      sortIndex: 217
    }
  },
  {
    key: ModelIdFacetOptionKey.LNN,
    ...defaultFacetOption,
    valueId: '951d6ed7-5440-492e-9b8f-a24add4ad4c1',
    value: 'LNN',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LNN' }
        }
      ],
      sortIndex: 218
    }
  },
  {
    key: ModelIdFacetOptionKey.LNND,
    ...defaultFacetOption,
    valueId: '74c1de6a-409e-4539-afcf-6bfd6caaa20d',
    value: 'LNND',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LNND' }
        }
      ],
      sortIndex: 219
    }
  },
  {
    key: ModelIdFacetOptionKey.LNNW,
    ...defaultFacetOption,
    valueId: 'c05314da-12b3-480e-ad51-b743ce8a3c12',
    value: 'LNN-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LNN-W' }
        }
      ],
      sortIndex: 220
    }
  },
  {
    key: ModelIdFacetOptionKey.LNW,
    ...defaultFacetOption,
    valueId: '1eb73a7b-0e34-4094-8d56-617dbcbf146c',
    value: 'LN-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'LN-W' }
        }
      ],
      sortIndex: 221
    }
  },
  {
    key: ModelIdFacetOptionKey.M,
    ...defaultFacetOption,
    valueId: '0b465698-f269-49a1-8d4a-a76d9a4695eb',
    value: 'M',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'M' }
        }
      ],
      sortIndex: 222
    }
  },
  {
    key: ModelIdFacetOptionKey.MEG,
    ...defaultFacetOption,
    valueId: '4834353a-44bd-4288-a3a0-39660b9e55d8',
    value: 'MEG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'MEG' }
        }
      ],
      sortIndex: 223
    }
  },
  {
    key: ModelIdFacetOptionKey.MEGSSTC,
    ...defaultFacetOption,
    valueId: 'a0daba2d-3909-46bf-b6ad-cc064a545eee',
    value: 'MEG-SSTC',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'MEG-SSTC' }
        }
      ],
      sortIndex: 224
    }
  },
  {
    key: ModelIdFacetOptionKey.N,
    ...defaultFacetOption,
    valueId: '4ed8f5fb-8559-46da-9b59-9032363fec89',
    value: 'N',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'N' }
        }
      ],
      sortIndex: 225
    }
  },
  {
    key: ModelIdFacetOptionKey.NN,
    ...defaultFacetOption,
    valueId: 'ff7ab150-0233-4beb-9135-f8cf4f6ee6cb',
    value: 'NN',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'NN' }
        }
      ],
      sortIndex: 226
    }
  },
  {
    key: ModelIdFacetOptionKey.NNW,
    ...defaultFacetOption,
    valueId: 'ab71fa37-6407-40ae-93a2-1b351e9c4b69',
    value: 'NN-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'NN-W' }
        }
      ],
      sortIndex: 227
    }
  },
  {
    key: ModelIdFacetOptionKey.NW,
    ...defaultFacetOption,
    valueId: 'aade4d8b-bcf6-424b-a2cf-9da9bcd9b280',
    value: 'N-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'N-W' }
        }
      ],
      sortIndex: 228
    }
  },
  {
    key: ModelIdFacetOptionKey.P,
    ...defaultFacetOption,
    valueId: '9ad5c45f-dd65-402b-9e32-89ade19b29b0',
    value: 'P',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'P' }
        }
      ],
      sortIndex: 229
    }
  },
  {
    key: ModelIdFacetOptionKey.PW4000A,
    ...defaultFacetOption,
    valueId: 'bf0e7c4e-c84e-48d5-8376-d85485d9500d',
    value: 'PW4000A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'PW4000A' }
        }
      ],
      sortIndex: 230
    }
  },
  {
    key: ModelIdFacetOptionKey.PW4000AS,
    ...defaultFacetOption,
    valueId: '445b3b96-ebb8-44ff-b029-a58e23c52436',
    value: 'PW4000AS',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'PW4000AS' }
        }
      ],
      sortIndex: 231
    }
  },
  {
    key: ModelIdFacetOptionKey.QCIMEG,
    ...defaultFacetOption,
    valueId: 'd72efe12-7e56-4816-8bfa-2f373f875bb2',
    value: 'QCIMEG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QCIMEG' }
        }
      ],
      sortIndex: 232
    }
  },
  {
    key: ModelIdFacetOptionKey.QCMEG,
    ...defaultFacetOption,
    valueId: '02ec27e8-6943-4f79-b36b-85f871517743',
    value: 'QCMEG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QCMEG' }
        }
      ],
      sortIndex: 233
    }
  },
  {
    key: ModelIdFacetOptionKey.QGA,
    ...defaultFacetOption,
    valueId: '2799cd85-e82a-48bb-875c-219f0dfd8827',
    value: 'QGA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QGA' }
        }
      ],
      sortIndex: 234
    }
  },
  {
    key: ModelIdFacetOptionKey.QGA15,
    ...defaultFacetOption,
    valueId: 'aa117d5a-ba47-4938-bae4-acb44bb91a8c',
    value: 'QGA-15',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QGA-15' }
        }
      ],
      sortIndex: 235
    }
  },
  {
    key: ModelIdFacetOptionKey.QGA30,
    ...defaultFacetOption,
    valueId: 'd2b916df-f1eb-47ed-b33b-28149dba7246',
    value: 'QGA-30',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QGA-30' }
        }
      ],
      sortIndex: 236
    }
  },
  {
    key: ModelIdFacetOptionKey.QGAW,
    ...defaultFacetOption,
    valueId: '3516c5e1-3d29-4f12-a7f7-2c17e840bc25',
    value: 'QGA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QGA-W' }
        }
      ],
      sortIndex: 237
    }
  },
  {
    key: ModelIdFacetOptionKey.QHA,
    ...defaultFacetOption,
    valueId: '32a50451-2747-476f-a4d2-67b5b34276f5',
    value: 'QHA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QHA' }
        }
      ],
      sortIndex: 238
    }
  },
  {
    key: ModelIdFacetOptionKey.QHAW,
    ...defaultFacetOption,
    valueId: 'f837046a-8872-4d54-8b5c-4f62505f1dee',
    value: 'QHA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QHA-W' }
        }
      ],
      sortIndex: 239
    }
  },
  {
    key: ModelIdFacetOptionKey.QJA,
    ...defaultFacetOption,
    valueId: '51448a84-afd0-4f47-be36-8940f88d3d97',
    value: 'QJA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QJA' }
        }
      ],
      sortIndex: 240
    }
  },
  {
    key: ModelIdFacetOptionKey.QJJA,
    ...defaultFacetOption,
    valueId: '09307e56-10f7-43cf-bab5-f98bd58f43b0',
    value: 'QJJA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QJJA' }
        }
      ],
      sortIndex: 241
    }
  },
  {
    key: ModelIdFacetOptionKey.QJJLA,
    ...defaultFacetOption,
    valueId: '36b2abc0-b3d6-4923-864b-e6b7abeb4b90',
    value: 'QJJLA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QJJLA' }
        }
      ],
      sortIndex: 242
    }
  },
  {
    key: ModelIdFacetOptionKey.QJJS,
    ...defaultFacetOption,
    valueId: '1d38b662-0f88-401e-8719-8537d08e0ebe',
    value: 'QJJS',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QJJS' }
        }
      ],
      sortIndex: 243
    }
  },
  {
    key: ModelIdFacetOptionKey.QJLA,
    ...defaultFacetOption,
    valueId: 'da4c00ef-08fe-4103-bbb5-2fcf691a48da',
    value: 'QJLA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QJLA' }
        }
      ],
      sortIndex: 244
    }
  },
  {
    key: ModelIdFacetOptionKey.QLGA,
    ...defaultFacetOption,
    valueId: '9aa1d65f-6626-41c7-86e0-a43e17c2fb8f',
    value: 'QLGA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLGA' }
        }
      ],
      sortIndex: 245
    }
  },
  {
    key: ModelIdFacetOptionKey.QLGA15,
    ...defaultFacetOption,
    valueId: 'ee093e58-e3df-4f8f-af1c-1002d3da6109',
    value: 'QLGA-15',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLGA-15' }
        }
      ],
      sortIndex: 246
    }
  },
  {
    key: ModelIdFacetOptionKey.QLGA30,
    ...defaultFacetOption,
    valueId: '2a08aad8-baee-485c-81d2-91c9287da04a',
    value: 'QLGA-30',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLGA-30' }
        }
      ],
      sortIndex: 247
    }
  },
  {
    key: ModelIdFacetOptionKey.QLGAW,
    ...defaultFacetOption,
    valueId: '7e5eecd9-18f9-40a3-9bd2-55aa4a65c448',
    value: 'QLGA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLGA-W' }
        }
      ],
      sortIndex: 248
    }
  },
  {
    key: ModelIdFacetOptionKey.QLHA,
    ...defaultFacetOption,
    valueId: '58cda5ca-0b8e-477e-99b9-a64684d97c49',
    value: 'QLHA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLHA' }
        }
      ],
      sortIndex: 249
    }
  },
  {
    key: ModelIdFacetOptionKey.QLHAW,
    ...defaultFacetOption,
    valueId: '42859afc-2d3b-4ef0-bd8a-70e01c0c9525',
    value: 'QLHA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLHA-W' }
        }
      ],
      sortIndex: 250
    }
  },
  {
    key: ModelIdFacetOptionKey.QLUA,
    ...defaultFacetOption,
    valueId: '60d8d8ae-0127-40d6-b722-1e07e01b5431',
    value: 'QLUA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QLUA' }
        }
      ],
      sortIndex: 251
    }
  },
  {
    key: ModelIdFacetOptionKey.QMJAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '1a981ad9-482b-4471-bdca-79b5d4e5a73e',
    value: 'QMJAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMJ Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 252
    }
  },
  {
    key: ModelIdFacetOptionKey.QMJAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '9d2bb612-9678-4407-a149-6b5ce658d32f',
    value: 'QMJAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMJ Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 253
    }
  },
  {
    key: ModelIdFacetOptionKey.QMJAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'd5871ba7-2466-4010-9d96-ad1c56c1e5db',
    value: 'QMJAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMJ Air Atomizing Bodies' }
        }
      ],
      sortIndex: 254
    }
  },
  {
    key: ModelIdFacetOptionKey.QMJAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '5f00d694-dc39-41fc-9f9a-3af10d9633b8',
    value: 'QMJAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMJ Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 255
    }
  },
  {
    key: ModelIdFacetOptionKey.QMJAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'd21b8a4c-04d9-4b3f-8454-2e1b35bda365',
    value: 'QMJAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMJ Air Atomizing Setups' }
        }
      ],
      sortIndex: 256
    }
  },
  {
    key: ModelIdFacetOptionKey.QMVV,
    ...defaultFacetOption,
    valueId: '3a5e2cf5-29c6-4741-a541-25b01bb22f8e',
    value: 'QMVV',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QMVV' }
        }
      ],
      sortIndex: 257
    }
  },
  {
    key: ModelIdFacetOptionKey.QPHA,
    ...defaultFacetOption,
    valueId: '153f426e-50b4-40ec-ad09-4559405561eb',
    value: 'QPHA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QPHA' }
        }
      ],
      sortIndex: 258
    }
  },
  {
    key: ModelIdFacetOptionKey.QPHAW,
    ...defaultFacetOption,
    valueId: '7f65478a-0f1f-44f3-9d55-9c3f455a1022',
    value: 'QPHA-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QPHA-W' }
        }
      ],
      sortIndex: 259
    }
  },
  {
    key: ModelIdFacetOptionKey.QPPA,
    ...defaultFacetOption,
    valueId: '65c4e5d5-dccd-49e9-868a-54d09184940c',
    value: 'QPPA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QPPA' }
        }
      ],
      sortIndex: 260
    }
  },
  {
    key: ModelIdFacetOptionKey.QPPM,
    ...defaultFacetOption,
    valueId: '887a9b70-6f7c-42f3-ba61-de6c462729c0',
    value: 'QPPM',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QPPM' }
        }
      ],
      sortIndex: 261
    }
  },
  {
    key: ModelIdFacetOptionKey.QPTA,
    ...defaultFacetOption,
    valueId: '8194d5c8-d1cc-4e38-a742-0d967ddc1c4a',
    value: 'QPTA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QPTA' }
        }
      ],
      sortIndex: 262
    }
  },
  {
    key: ModelIdFacetOptionKey.QSTK,
    ...defaultFacetOption,
    valueId: '73b365cf-df99-42cd-ae93-5cc65243d416',
    value: 'QSTK',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QSTK' }
        }
      ],
      sortIndex: 263
    }
  },
  {
    key: ModelIdFacetOptionKey.QSVV,
    ...defaultFacetOption,
    valueId: '4404b13a-33b6-4891-a1b1-0911d6b7a885',
    value: 'QSVV',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QSVV' }
        }
      ],
      sortIndex: 264
    }
  },
  {
    key: ModelIdFacetOptionKey.QTKA,
    ...defaultFacetOption,
    valueId: 'ad575383-f1ce-4025-97ed-fac7094fdf4d',
    value: 'QTKA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QTKA' }
        }
      ],
      sortIndex: 265
    }
  },
  {
    key: ModelIdFacetOptionKey.QUA,
    ...defaultFacetOption,
    valueId: '5ed1125a-1b4b-4349-90dc-1dc32f2e88e8',
    value: 'QUA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QUA' }
        }
      ],
      sortIndex: 266
    }
  },
  {
    key: ModelIdFacetOptionKey.QVVA,
    ...defaultFacetOption,
    valueId: '0f17f7a1-6e47-4afc-a3e5-6c8dda6952ef',
    value: 'QVVA',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'QVVA' }
        }
      ],
      sortIndex: 267
    }
  },
  {
    key: ModelIdFacetOptionKey.R,
    ...defaultFacetOption,
    valueId: 'b96d8918-9328-4b88-8c69-848abc1c47db',
    value: 'R',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'R' }
        }
      ],
      sortIndex: 268
    }
  },
  {
    key: ModelIdFacetOptionKey.RF,
    ...defaultFacetOption,
    valueId: 'fd605775-53ec-4bc3-ab5f-8633ad42b43a',
    value: 'RF',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'RF' }
        }
      ],
      sortIndex: 269
    }
  },
  {
    key: ModelIdFacetOptionKey.RR,
    ...defaultFacetOption,
    valueId: 'cdbd6330-baef-4802-a4d1-1505dc70d0d5',
    value: 'RR',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'RR' }
        }
      ],
      sortIndex: 270
    }
  },
  {
    key: ModelIdFacetOptionKey.T,
    ...defaultFacetOption,
    valueId: '05131493-801c-4b31-ae87-020d9de06415',
    value: 'T',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'T' }
        }
      ],
      sortIndex: 271
    }
  },
  {
    key: ModelIdFacetOptionKey.TEK,
    ...defaultFacetOption,
    valueId: '6d46c60e-c7bb-495e-8628-61c62915ca65',
    value: 'TEK',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TEK' }
        }
      ],
      sortIndex: 272
    }
  },
  {
    key: ModelIdFacetOptionKey.TG,
    ...defaultFacetOption,
    valueId: 'a4f718a9-2623-4751-b6f4-1e521e26bb90',
    value: 'TG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TG' }
        }
      ],
      sortIndex: 273
    }
  },
  {
    key: ModelIdFacetOptionKey.TGSQ,
    ...defaultFacetOption,
    valueId: '2644ea65-da3c-4c10-afa4-398a8c1efb09',
    value: 'TG-SQ',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TG-SQ' }
        }
      ],
      sortIndex: 274
    }
  },
  {
    key: ModelIdFacetOptionKey.TGW,
    ...defaultFacetOption,
    valueId: '206a7e27-d2d6-4e9d-80a6-baf2b8bd00c9',
    value: 'TG-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TG-W' }
        }
      ],
      sortIndex: 275
    }
  },
  {
    key: ModelIdFacetOptionKey.THW,
    ...defaultFacetOption,
    valueId: 'bfbcc74d-feda-407a-865e-ab545192ac6e',
    value: 'TH-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TH-W' }
        }
      ],
      sortIndex: 276
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ14,
    ...defaultFacetOption,
    valueId: 'bea95d05-ab61-4107-bdcb-48d374415ea6',
    value: 'TJ14',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ14' }
        }
      ],
      sortIndex: 277
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ16,
    ...defaultFacetOption,
    valueId: '0a5480e7-9214-4c57-998b-9bc0dc50653c',
    value: 'TJ16',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ16' }
        }
      ],
      sortIndex: 278
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ180,
    ...defaultFacetOption,
    valueId: 'd8829999-f2f1-4718-8488-882101566df3',
    value: 'TJ180',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ180' }
        }
      ],
      sortIndex: 279
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ19,
    ...defaultFacetOption,
    valueId: '1725ed56-3be3-4462-bd1b-71409633923c',
    value: 'TJ19',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ19' }
        }
      ],
      sortIndex: 280
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ360,
    ...defaultFacetOption,
    valueId: '492cae9e-66bf-4030-bccd-592fd3df696e',
    value: 'TJ360',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ360' }
        }
      ],
      sortIndex: 281
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ65TJ65HT,
    ...defaultFacetOption,
    valueId: '399747e5-5ad8-4e4b-8ac4-f9eed34553d8',
    value: 'TJ65, TJ65HT',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ65, TJ65HT' }
        }
      ],
      sortIndex: 282
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ75TJ75H,
    ...defaultFacetOption,
    valueId: '6f5ada95-75bd-4bf3-bf64-58617dbc99fc',
    value: 'TJ75, TJ75H',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ75, TJ75H' }
        }
      ],
      sortIndex: 283
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ78TJ78D,
    ...defaultFacetOption,
    valueId: '4382f0f6-77ad-464f-bb1a-d4ca1f66c20a',
    value: 'TJ78, TJ78D',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ78, TJ78D' }
        }
      ],
      sortIndex: 284
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ78M,
    ...defaultFacetOption,
    valueId: '55402188-cffb-401f-8ba5-05fb0c87570d',
    value: 'TJ78M',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ78M' }
        }
      ],
      sortIndex: 285
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ80TJ80H,
    ...defaultFacetOption,
    valueId: 'aabc10c4-3d50-48ec-836a-146343cb6dc8',
    value: 'TJ80, TJ80H',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ80, TJ80H' }
        }
      ],
      sortIndex: 286
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ9A,
    ...defaultFacetOption,
    valueId: '73a4fb22-f727-4c58-9497-f1caaa9028c2',
    value: 'TJ9-A',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ9-A' }
        }
      ],
      sortIndex: 287
    }
  },
  {
    key: ModelIdFacetOptionKey.TJ9BTJ9C,
    ...defaultFacetOption,
    valueId: 'b730729b-4300-4d48-8e50-7ab434758741',
    value: 'TJ9-B, TJ9-C',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TJ9-B, TJ9-C' }
        }
      ],
      sortIndex: 288
    }
  },
  {
    key: ModelIdFacetOptionKey.TK_,
    ...defaultFacetOption,
    valueId: 'd08a4f65-e220-4007-b49c-45d5d2da4197',
    value: 'TK',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TK' }
        }
      ],
      sortIndex: 289
    }
  },
  {
    key: ModelIdFacetOptionKey.TN,
    ...defaultFacetOption,
    valueId: '1a2ed921-885f-4526-8ff6-5bf9920f73fa',
    value: 'TN',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TN' }
        }
      ],
      sortIndex: 290
    }
  },
  {
    key: ModelIdFacetOptionKey.TNSSTC,
    ...defaultFacetOption,
    valueId: '4ae8b1c2-d442-4e68-946b-7f2169b1d89f',
    value: 'TN-SSTC',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TN-SSTC' }
        }
      ],
      sortIndex: 291
    }
  },
  {
    key: ModelIdFacetOptionKey.TPU,
    ...defaultFacetOption,
    valueId: 'b56b453c-69da-4280-926a-6d86f30a0289',
    value: 'TPU',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TPU' }
        }
      ],
      sortIndex: 292
    }
  },
  {
    key: ModelIdFacetOptionKey.TT,
    ...defaultFacetOption,
    valueId: '78bdc5c4-27c0-4258-997f-241dc229d985',
    value: 'TT',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TT' }
        }
      ],
      sortIndex: 293
    }
  },
  {
    key: ModelIdFacetOptionKey.TW,
    ...defaultFacetOption,
    valueId: 'e21ec477-305b-4776-9ec0-8cc2d0b40595',
    value: 'T-W',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'T-W' }
        }
      ],
      sortIndex: 294
    }
  },
  {
    key: ModelIdFacetOptionKey.TWD,
    ...defaultFacetOption,
    valueId: '0c6f99a7-b7c7-473b-9451-2e2ffc1ec284',
    value: 'TWD',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TWD' }
        }
      ],
      sortIndex: 295
    }
  },
  {
    key: ModelIdFacetOptionKey.TX,
    ...defaultFacetOption,
    valueId: '1b5585dd-e67b-4c58-a327-95b260622502',
    value: 'TX',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'TX' }
        }
      ],
      sortIndex: 296
    }
  },
  {
    key: ModelIdFacetOptionKey.U,
    ...defaultFacetOption,
    valueId: 'f5f1837e-8d7e-4687-b164-9a16c8ecb942',
    value: 'U',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'U' }
        }
      ],
      sortIndex: 297
    }
  },
  {
    key: ModelIdFacetOptionKey.VAAVAUAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: 'c1b1378a-210e-4285-b331-cf67e5e0f438',
    value: 'VAA,VAUAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VAA, VAU Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 298
    }
  },
  {
    key: ModelIdFacetOptionKey.VAAVAUAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '1cfd8c5c-c1f8-4148-ab2f-a25296c2c5e6',
    value: 'VAA,VAUAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VAA, VAU Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 299
    }
  },
  {
    key: ModelIdFacetOptionKey.VAAVAUAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '23c771d2-562d-4b92-a72d-6d55744e09b3',
    value: 'VAA,VAUAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VAA, VAU Air Atomizing Bodies' }
        }
      ],
      sortIndex: 300
    }
  },
  {
    key: ModelIdFacetOptionKey.VAAVAUAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: 'ac78a52f-b99d-469c-bc16-352967cd5782',
    value: 'VAA,VAUAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VAA, VAU Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 301
    }
  },
  {
    key: ModelIdFacetOptionKey.VAAVAUAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'fad023ec-07e1-4cfb-ab48-59ad26a1b33d',
    value: 'VAA,VAUAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VAA, VAU Air Atomizing Setups' }
        }
      ],
      sortIndex: 302
    }
  },
  {
    key: ModelIdFacetOptionKey.VMAUAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: 'e8197e6b-b95e-439b-95e6-3eb07f95fc03',
    value: 'VMAUAirAtomizingAirCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VMAU Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 303
    }
  },
  {
    key: ModelIdFacetOptionKey.VMAUAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '808f2606-1c7e-4156-90a4-7571cc240d65',
    value: 'VMAUAirAtomizingAssemblies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VMAU Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 304
    }
  },
  {
    key: ModelIdFacetOptionKey.VMAUAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'cb584fcc-ea12-40cc-9ac2-2a0058f5dca3',
    value: 'VMAUAirAtomizingBodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VMAU Air Atomizing Bodies' }
        }
      ],
      sortIndex: 305
    }
  },
  {
    key: ModelIdFacetOptionKey.VMAUAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '7518a031-3497-4c36-ad4e-4f2dcec027fd',
    value: 'VMAUAirAtomizingFluidCaps',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VMAU Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 306
    }
  },
  {
    key: ModelIdFacetOptionKey.VMAUAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '8b55259a-27c6-4bbb-862b-650db170b508',
    value: 'VMAUAirAtomizingSetups',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VMAU Air Atomizing Setups' }
        }
      ],
      sortIndex: 307
    }
  },
  {
    key: ModelIdFacetOptionKey.VS010,
    ...defaultFacetOption,
    valueId: '4dc6bc97-28a0-4d8b-8841-50db587bbeaa',
    value: 'VS010',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VS010' }
        }
      ],
      sortIndex: 308
    }
  },
  {
    key: ModelIdFacetOptionKey.VS020,
    ...defaultFacetOption,
    valueId: 'c7dde07f-aa2b-4e69-b828-f12a03701cdb',
    value: 'VS020',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VS020' }
        }
      ],
      sortIndex: 309
    }
  },
  {
    key: ModelIdFacetOptionKey.VS051,
    ...defaultFacetOption,
    valueId: '4732585e-663c-488c-a03e-d99492f3a54d',
    value: 'VS051',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VS051' }
        }
      ],
      sortIndex: 310
    }
  },
  {
    key: ModelIdFacetOptionKey.VS625,
    ...defaultFacetOption,
    valueId: 'd6ceb1c2-4bc3-4c76-aad8-40f2da31adda',
    value: 'VS625',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VS625' }
        }
      ],
      sortIndex: 311
    }
  },
  {
    key: ModelIdFacetOptionKey.VS940,
    ...defaultFacetOption,
    valueId: '57418ed5-b678-4364-9f97-e26ab0c8cf17',
    value: 'VS940',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VS940' }
        }
      ],
      sortIndex: 312
    }
  },
  {
    key: ModelIdFacetOptionKey.VSM,
    ...defaultFacetOption,
    valueId: 'b088fb14-9464-4d61-8648-b5a5910fcd93',
    value: 'VSM',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VSM' }
        }
      ],
      sortIndex: 313
    }
  },
  {
    key: ModelIdFacetOptionKey.VX70,
    ...defaultFacetOption,
    valueId: '67d22b59-b471-4067-b785-c9082e020387',
    value: 'VX70',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VX70' }
        }
      ],
      sortIndex: 314
    }
  },
  {
    key: ModelIdFacetOptionKey.VX72,
    ...defaultFacetOption,
    valueId: 'a79d7b13-1a1f-4607-ab1b-ef04db1ae601',
    value: 'VX72',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VX72' }
        }
      ],
      sortIndex: 315
    }
  },
  {
    key: ModelIdFacetOptionKey.VX80,
    ...defaultFacetOption,
    valueId: 'a6e929df-bca7-438c-babc-b8b48dcac12a',
    value: 'VX80',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VX80' }
        }
      ],
      sortIndex: 316
    }
  },
  {
    key: ModelIdFacetOptionKey.VX82,
    ...defaultFacetOption,
    valueId: '16089d1f-205a-4398-9713-8b2d976fdad3',
    value: 'VX82',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'VX82' }
        }
      ],
      sortIndex: 317
    }
  },
  {
    key: ModelIdFacetOptionKey.WEG,
    ...defaultFacetOption,
    valueId: '18f84bbd-2514-4b82-8332-daacf6f746df',
    value: 'WEG',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'WEG' }
        }
      ],
      sortIndex: 318
    }
  },
  {
    key: ModelIdFacetOptionKey.Y727,
    ...defaultFacetOption,
    valueId: '5c6047d8-7d91-4524-b93a-a40c7203b087',
    value: 'Y727',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Y727' }
        }
      ],
      sortIndex: 319
    }
  },
  {
    key: ModelIdFacetOptionKey.Y767,
    ...defaultFacetOption,
    valueId: '9e362ddf-386d-44b8-96a4-9ae9d1d7fac0',
    value: 'Y767',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Y767' }
        }
      ],
      sortIndex: 320
    }
  },
  {
    key: ModelIdFacetOptionKey.YMD3,
    ...defaultFacetOption,
    valueId: 'fb9cb997-23ee-454f-a174-f3262506fc46',
    value: 'YMD3',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'YMD3' }
        }
      ],
      sortIndex: 321
    }
  }
];

export const modelIdFacet: Facet<
  ModelIdFacetOptionKey,
  FacetOption<ModelIdFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.Model,
  attributeTypeCode: 'Model',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: modelIdFacetOptions
};
