import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ModelIdFacetOptionKey {
  _12jAirAtomizingAirCaps = '_12jAirAtomizingAirCaps',
  _12jAirAtomizingAssemblies = '_12jAirAtomizingAssemblies',
  _12jAirAtomizingBodies = '_12jAirAtomizingBodies',
  _12jAirAtomizingFluidCaps = '_12jAirAtomizingFluidCaps',
  _12jAirAtomizingSetups = '_12jAirAtomizingSetups',
  _14jAirAtomizingAirCaps = '_14jAirAtomizingAirCaps',
  _14jAirAtomizingAssemblies = '_14jAirAtomizingAssemblies',
  _14jAirAtomizingBodies = '_14jAirAtomizingBodies',
  _14jAirAtomizingFluidCaps = '_14jAirAtomizingFluidCaps',
  _14jAirAtomizingSetups = '_14jAirAtomizingSetups',
  _14jau = '_14jau',
  _14jauco = '_14jauco',
  _14jauh = '_14jauh',
  _14jaumco = '_14jaumco',
  _14jaupm = '_14jaupm',
  _14jaupmco = '_14jaupmco',
  _14vmau = '_14vmau',
  _18jAirAtomizingAssemblies = '_18jAirAtomizingAssemblies',
  _18jAirAtomizingBodies = '_18jAirAtomizingBodies',
  _18jjAirAtomizingAirCaps = '_18jjAirAtomizingAirCaps',
  _18jjAirAtomizingAssemblies = '_18jjAirAtomizingAssemblies',
  _18jjAirAtomizingBodies = '_18jjAirAtomizingBodies',
  _18jjAirAtomizingFluidCaps = '_18jjAirAtomizingFluidCaps',
  _18jjAirAtomizingSetups = '_18jjAirAtomizingSetups',
  _18jjau = '_18jjau',
  _18jjauh = '_18jjauh',
  _18jjaumco = '_18jjaumco',
  _18vau = '_18vau',
  _1053514j = '_1053514j',
  _1053612j = '_1053612j',
  _1088014jau = '_1088014jau',
  _11430 = '_11430',
  _12900 = '_12900',
  _1324214jau = '_1324214jau',
  _13802 = '_13802',
  _1467518jjau = '_1467518jjau',
  _1470018jjau = '_1470018jjau',
  _15475 = '_15475',
  _1686018jjau = '_1686018jjau',
  _1688318jjau = '_1688318jjau',
  _1769018jjau = '_1769018jjau',
  _18250a = '_18250a',
  _1933014jaupm = '_1933014jaupm',
  _1jAirAtomizingAirCaps = '_1jAirAtomizingAirCaps',
  _1jAirAtomizingAssemblies = '_1jAirAtomizingAssemblies',
  _1jAirAtomizingBodies = '_1jAirAtomizingBodies',
  _1jAirAtomizingFluidCaps = '_1jAirAtomizingFluidCaps',
  _1jAirAtomizingSetups = '_1jAirAtomizingSetups',
  _21400a = '_21400a',
  _22650Pp = '_22650Pp',
  _23120 = '_23120',
  _23120a = '_23120a',
  _23240 = '_23240',
  _23520 = '_23520',
  _236233114f = '_236233114f',
  _2362430l = '_2362430l',
  _2750027500R = '_2750027500R',
  _2850028500R = '_2850028500R',
  _30473 = '_30473',
  _36275 = '_36275',
  _3653360 = '_3653360',
  _3849918jjau = '_3849918jjau',
  _4688 = '_4688',
  _4966018jjau = '_4966018jjau',
  _5883358834 = '_5883358834',
  _608314jau = '_608314jau',
  _6104 = '_6104',
  _621814jau = '_621814jau',
  _63225632253a = '_63225632253a',
  _63536353Mfp = '_63536353Mfp',
  _6466 = '_6466',
  _6590 = '_6590',
  _6815 = '_6815',
  _6815g = '_6815g',
  _7210018jjau = '_7210018jjau',
  _731014jau = '_731014jau',
  _7521 = '_7521',
  _7g = '_7g',
  _7n = '_7n',
  _8370 = '_8370',
  _8460 = '_8460',
  _8686 = '_8686',
  Aa090 = 'Aa090',
  Aa10000auh0050 = 'Aa10000auh0050',
  Aa10000auh03 = 'Aa10000auh03',
  Aa10000auh03Z1 = 'Aa10000auh03Z1',
  Aa10000auh10 = 'Aa10000auh10',
  Aa10000auh104210 = 'Aa10000auh104210',
  Aa10000auh104214 = 'Aa10000auh104214',
  Aa10000auh104215 = 'Aa10000auh104215',
  Aa10000auh7244014 = 'Aa10000auh7244014',
  Aa10000jau10 = 'Aa10000jau10',
  Aa10000jjau = 'Aa10000jjau',
  Aa110 = 'Aa110',
  Aa122 = 'Aa122',
  Aa122ml = 'Aa122ml',
  Aa124 = 'Aa124',
  Aa124a = 'Aa124a',
  Aa124asc = 'Aa124asc',
  Aa124ml = 'Aa124ml',
  Aa124sc = 'Aa124sc',
  Aa190 = 'Aa190',
  Aa22auh = 'Aa22auh',
  Aa22auh7676 = 'Aa22auh7676',
  Aa22auhSs11024 = 'Aa22auhSs11024',
  Aa22auhSs14799 = 'Aa22auhSs14799',
  Aa23h = 'Aa23h',
  Aa23l = 'Aa23l',
  Aa23l45885 = 'Aa23l45885',
  Aa24aua = 'Aa24aua',
  Aa24aua20190 = 'Aa24aua20190',
  Aa24aua8395 = 'Aa24aua8395',
  Aa24aua8980 = 'Aa24aua8980',
  Aa250auh = 'Aa250auh',
  Aa26auh = 'Aa26auh',
  Aa28jjau49815 = 'Aa28jjau49815',
  Aa290 = 'Aa290',
  Aa29jauco = 'Aa29jauco',
  Aa3020940 = 'Aa3020940',
  Aa30a = 'Aa30a',
  Aa30l = 'Aa30l',
  Aa31 = 'Aa31',
  Aa36 = 'Aa36',
  Aa430ml = 'Aa430ml',
  Aa430mlsc = 'Aa430mlsc',
  Aa43hc = 'Aa43hc',
  Aa43lc = 'Aa43lc',
  Aa60 = 'Aa60',
  Aa6021580 = 'Aa6021580',
  Aa70 = 'Aa70',
  Aa707 = 'Aa707',
  Aa727 = 'Aa727',
  Aa80 = 'Aa80',
  ApLapLbp = 'ApLapLbp',
  ApWLapWLbpW = 'ApWLapWLbpW',
  AxBx = 'AxBx',
  AxWBxW = 'AxWBxW',
  Ba = 'Ba',
  Bd = 'Bd',
  BdW = 'BdW',
  Bdm = 'Bdm',
  Bsj = 'Bsj',
  Cf = 'Cf',
  Crc = 'Crc',
  Cu150a = 'Cu150a',
  Cx = 'Cx',
  D = 'D',
  UnijetDTip = 'UnijetDTip',
  UnijetDTipAndBody = 'UnijetDTipAndBody',
  DHh = 'DHh',
  D26564 = 'D26564',
  D26984 = 'D26984',
  D27500 = 'D27500',
  D40159 = 'D40159',
  D41800e = 'D41800e',
  D41892 = 'D41892',
  D41990 = 'D41990',
  D55500Jau = 'D55500Jau',
  D55500Jauh0 = 'D55500Jauh0',
  D55500Jauh1 = 'D55500Jauh1',
  D55567 = 'D55567',
  D55606 = 'D55606',
  Daa727 = 'Daa727',
  E = 'E',
  Eg = 'Eg',
  Ff = 'Ff',
  Fs013Fs020 = 'Fs013Fs020',
  GGg = 'GGg',
  G15Gg15 = 'G15Gg15',
  G30Gg30 = 'G30Gg30',
  GSqGgSq = 'GSqGgSq',
  GVlGgVl = 'GVlGgVl',
  GWGgW = 'GWGgW',
  GaGga = 'GaGga',
  GaWGgaW = 'GaWGgaW',
  GanvGganv = 'GanvGganv',
  GdGgd = 'GdGgd',
  HHh = 'HHh',
  H15 = 'H15',
  HSqHhSq = 'HSqHhSq',
  HUHDu = 'HUHDu',
  HVvHDt = 'HVvHDt',
  HVvl = 'HVvl',
  HWHhW = 'HWHhW',
  HWsqHhWsq = 'HWsqHhWsq',
  Hd = 'Hd',
  Hf = 'Hf',
  Hh30 = 'Hh30',
  HhKy = 'HhKy',
  Hhsj = 'Hhsj',
  Hhsjx = 'Hhsjx',
  HmfpHhmfp = 'HmfpHhmfp',
  Imeg = 'Imeg',
  K = 'K',
  LnLnn = 'LnLnn',
  LndLnnd = 'LndLnnd',
  M = 'M',
  MegWeg = 'MegWeg',
  MegSstc = 'MegSstc',
  NNn = 'NNn',
  NWNnWLnWLnnW = 'NWNnWLnWLnnW',
  P = 'P',
  Pw4000a = 'Pw4000a',
  Pw4000as = 'Pw4000as',
  Qcimeg = 'Qcimeg',
  Qcmeg = 'Qcmeg',
  QgaQlga = 'QgaQlga',
  Qga15Qlga15 = 'Qga15Qlga15',
  Qga30Qlga30 = 'Qga30Qlga30',
  QgaWQlgaW = 'QgaWQlgaW',
  QhaQlha = 'QhaQlha',
  QhaWQlhaW = 'QhaWQlhaW',
  QjaQjja = 'QjaQjja',
  Qjjs = 'Qjjs',
  QjlaQjjla = 'QjlaQjjla',
  QmjAirAtomizingAirCaps = 'QmjAirAtomizingAirCaps',
  QmjAirAtomizingAssemblies = 'QmjAirAtomizingAssemblies',
  QmjAirAtomizingBodies = 'QmjAirAtomizingBodies',
  QmjAirAtomizingFluidCaps = 'QmjAirAtomizingFluidCaps',
  QmjAirAtomizingSetups = 'QmjAirAtomizingSetups',
  Qmvv = 'Qmvv',
  Qpha = 'Qpha',
  QphaW = 'QphaW',
  QppaQppm = 'QppaQppm',
  Qpta = 'Qpta',
  Qstk = 'Qstk',
  Qsvv = 'Qsvv',
  Qtka = 'Qtka',
  QuaQluaQvva = 'QuaQluaQvva',
  RRrRf = 'RRrRf',
  TTt = 'TTt',
  TW = 'TW',
  Tek = 'Tek',
  Tg = 'Tg',
  TgSq = 'TgSq',
  TgW = 'TgW',
  ThW = 'ThW',
  Tj14 = 'Tj14',
  Tj16 = 'Tj16',
  Tj180 = 'Tj180',
  Tj19 = 'Tj19',
  Tj360 = 'Tj360',
  Tj65Tj65ht = 'Tj65Tj65ht',
  Tj75Tj75h = 'Tj75Tj75h',
  Tj78Tj78d = 'Tj78Tj78d',
  Tj78m = 'Tj78m',
  Tj80Tj80h = 'Tj80Tj80h',
  Tj9A = 'Tj9A',
  Tj9BTj9C = 'Tj9BTj9C',
  Tk = 'Tk',
  Tn = 'Tn',
  TnSstc = 'TnSstc',
  Tpu = 'Tpu',
  Twd = 'Twd',
  Tx = 'Tx',
  U = 'U',
  UnspecifiedModel = 'UnspecifiedModel',
  VaaVauAirAtomizingAirCaps = 'VaaVauAirAtomizingAirCaps',
  VaaVauAirAtomizingAssemblies = 'VaaVauAirAtomizingAssemblies',
  VaaVauAirAtomizingBodies = 'VaaVauAirAtomizingBodies',
  VaaVauAirAtomizingFluidCaps = 'VaaVauAirAtomizingFluidCaps',
  VaaVauAirAtomizingSetups = 'VaaVauAirAtomizingSetups',
  VmauAirAtomizingAirCaps = 'VmauAirAtomizingAirCaps',
  VmauAirAtomizingAssemblies = 'VmauAirAtomizingAssemblies',
  VmauAirAtomizingBodies = 'VmauAirAtomizingBodies',
  VmauAirAtomizingFluidCaps = 'VmauAirAtomizingFluidCaps',
  VmauAirAtomizingSetups = 'VmauAirAtomizingSetups',
  Vs010 = 'Vs010',
  Vs020 = 'Vs020',
  Vs051 = 'Vs051',
  Vs625 = 'Vs625',
  Vs940 = 'Vs940',
  Vsm = 'Vsm',
  Vx70 = 'Vx70',
  Vx72 = 'Vx72',
  Vx80 = 'Vx80',
  Vx82 = 'Vx82',
  Y727 = 'Y727',
  Y767 = 'Y767',
  Ymd3 = 'Ymd3'
}

export const modelIdFacetOptions: FacetOption<ModelIdFacetOptionKey>[] = [
  {
    key: ModelIdFacetOptionKey._12jAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '571616eb-4946-4666-8fe1-04bc8a1c87cf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 0,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._12jAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: 'c6f1526a-e14a-4297-9d95-497059c41495',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 1,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._12jAirAtomizingBodies,
    ...defaultFacetOption,
    value: 'aeb7e661-8267-46e6-a58b-b66d4c762479',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 2,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._12jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '81523c04-13e6-453a-9d55-ad2c18b734fe',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 3,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._12jAirAtomizingSetups,
    ...defaultFacetOption,
    value: 'eaf5fb8a-ac1c-4a12-a7e8-b0cbfbe7534e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J Air Atomizing Setups' }
        }
      ],
      sortIndex: 4,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: 'c6003f3a-51a3-405b-8753-3eae138f0de1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 5,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: 'f5abae1b-8aa0-4ae7-a16b-0b4f9ae36a24',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 6,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jAirAtomizingBodies,
    ...defaultFacetOption,
    value: 'aa954dbc-3b84-4f09-ba39-54ce320d82a2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 7,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '1042cdbf-2d6d-4601-b3b8-4f2c9a749815',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 8,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jAirAtomizingSetups,
    ...defaultFacetOption,
    value: '4756b388-3f98-4c42-bb43-9d951851b887',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J Air Atomizing Setups' }
        }
      ],
      sortIndex: 9,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jau,
    ...defaultFacetOption,
    value: 'e5ceef72-9e96-49d5-919e-8250267a3a80',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAU' }
        }
      ],
      sortIndex: 10,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jauco,
    ...defaultFacetOption,
    value: '660f2c89-3c3d-48c1-b8e9-12435a3dd9c9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAUCO' }
        }
      ],
      sortIndex: 11,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jauh,
    ...defaultFacetOption,
    value: '61dd75b1-6066-496f-8446-b80ad03911af',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAUH' }
        }
      ],
      sortIndex: 12,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jaumco,
    ...defaultFacetOption,
    value: '12708c45-f35e-4525-af0b-d9a9d8b79109',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAUMCO' }
        }
      ],
      sortIndex: 13,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jaupm,
    ...defaultFacetOption,
    value: '453c2f0e-eb5e-4fb4-82e0-280be8324b92',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAUPM' }
        }
      ],
      sortIndex: 14,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14jaupmco,
    ...defaultFacetOption,
    value: 'cf730fce-c57e-491e-9f36-fd8b0d6dcc04',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4JAUPMCO' }
        }
      ],
      sortIndex: 15,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._14vmau,
    ...defaultFacetOption,
    value: 'd1064f32-4bcf-41a9-997b-c1fcd0f75ef7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4VMAU' }
        }
      ],
      sortIndex: 16,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: '780d4074-2f23-471b-927a-a216f195e8fc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 17,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jAirAtomizingBodies,
    ...defaultFacetOption,
    value: '9284d610-7921-4e85-a597-66fd3cb3a8b6',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 18,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '89288687-b5b8-4369-84c5-33f77d095b0d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 19,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: '7eaac977-b0aa-471d-b18b-21c6d3db53aa',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 20,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjAirAtomizingBodies,
    ...defaultFacetOption,
    value: 'e68dfee9-0408-41de-b569-2fb853fe55a7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ Air Atomizing Bodies' }
        }
      ],
      sortIndex: 21,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: 'ed568ca5-3ec3-420f-8835-030e13a48f76',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 22,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjAirAtomizingSetups,
    ...defaultFacetOption,
    value: '6235a960-64e3-42ae-88a3-54eb840b0d6c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ Air Atomizing Setups' }
        }
      ],
      sortIndex: 23,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjau,
    ...defaultFacetOption,
    value: '0e47ef9c-9287-4885-a5ea-4691274c09f3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJAU' }
        }
      ],
      sortIndex: 24,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjauh,
    ...defaultFacetOption,
    value: 'ecf85aba-ee61-4dd2-9647-b70666b171df',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJAUH' }
        }
      ],
      sortIndex: 25,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18jjaumco,
    ...defaultFacetOption,
    value: 'fd38a845-ad00-4ece-a1ba-475116b9f3e9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJAUMCO' }
        }
      ],
      sortIndex: 26,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18vau,
    ...defaultFacetOption,
    value: '5a7ece8a-7056-4601-b33a-3be1c5200d81',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8VAU' }
        }
      ],
      sortIndex: 27,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1053514j,
    ...defaultFacetOption,
    value: '938ed361-5a16-47cf-a60f-b69452dc3e60',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '10535-1/4J' }
        }
      ],
      sortIndex: 28,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1053612j,
    ...defaultFacetOption,
    value: '1edd1a11-dfb8-4a7e-8e58-9740aa661f9b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '10536-1/2J' }
        }
      ],
      sortIndex: 29,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1088014jau,
    ...defaultFacetOption,
    value: 'eb12208e-945a-4b9c-ba34-1d8fac2bf2bc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '10880-1/4JAU' }
        }
      ],
      sortIndex: 30,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._11430,
    ...defaultFacetOption,
    value: 'd58364c4-9a39-4d6b-95e2-ff6a7b2f33eb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '11430', de: '11430', fr: '11430', nl: '11430' }
        }
      ],
      sortIndex: 31,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._12900,
    ...defaultFacetOption,
    value: 'e305f6cc-a4d4-4c57-8eb0-acf2d24412e0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '12900' }
        }
      ],
      sortIndex: 32,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1324214jau,
    ...defaultFacetOption,
    value: '58df9ab4-f018-49e5-8ff2-f65c4a222959',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '13242-1/4JAU' }
        }
      ],
      sortIndex: 33,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._13802,
    ...defaultFacetOption,
    value: '688380f3-3419-4a2d-b76f-a5de4dc615ab',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '13802', de: '13802', fr: '13802', nl: '13802' }
        }
      ],
      sortIndex: 34,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1467518jjau,
    ...defaultFacetOption,
    value: '7f8c7575-a84e-4b3b-8fff-73b1e62c32c3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '14675-1/8JJAU' }
        }
      ],
      sortIndex: 35,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1470018jjau,
    ...defaultFacetOption,
    value: '25a3a05d-35bc-49ec-8ae1-ba0194d2c4b0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '14700-1/8JJAU' }
        }
      ],
      sortIndex: 36,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._15475,
    ...defaultFacetOption,
    value: '7f574ba5-7a4d-418d-8222-71620eac36bf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '15475' }
        }
      ],
      sortIndex: 37,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1686018jjau,
    ...defaultFacetOption,
    value: 'b5b1fc79-ed1d-448d-ab76-c73ae38ca9fe',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '16860-1/8JJAU' }
        }
      ],
      sortIndex: 38,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1688318jjau,
    ...defaultFacetOption,
    value: '9abace59-ed93-4719-acf0-f054b861d7a2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '16883-1/8JJAU' }
        }
      ],
      sortIndex: 39,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1769018jjau,
    ...defaultFacetOption,
    value: 'd11a18af-c127-489a-955d-ae68316678cc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '17690-1/8JJAU' }
        }
      ],
      sortIndex: 40,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._18250a,
    ...defaultFacetOption,
    value: '62cec7ff-c8b2-40ed-8033-5e2b09094c6d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '18250A' }
        }
      ],
      sortIndex: 41,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1933014jaupm,
    ...defaultFacetOption,
    value: '41cade1c-de60-468f-be35-4feff1671c39',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '19330-1/4JAUPM' }
        }
      ],
      sortIndex: 42,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1jAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '0ea7ad2a-0a27-4580-a7e2-8c8de6420eac',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 43,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1jAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: 'a6ab58c8-75d9-496d-9312-6aa706714a46',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 44,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1jAirAtomizingBodies,
    ...defaultFacetOption,
    value: '3b319c4b-557c-4bc9-9ea9-a7d43b85c721',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Bodies' }
        }
      ],
      sortIndex: 45,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '55d488c1-7050-4282-85e6-86b52a01c546',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 46,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._1jAirAtomizingSetups,
    ...defaultFacetOption,
    value: '6db1d2a7-d017-4e9c-bb29-4baf8157091a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Setups' }
        }
      ],
      sortIndex: 47,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._21400a,
    ...defaultFacetOption,
    value: 'c2e175fd-27ce-438a-ab7c-e2879735b584',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '21400A' }
        }
      ],
      sortIndex: 48,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._22650Pp,
    ...defaultFacetOption,
    value: '45e183f7-b0d2-48f4-a42d-a1e90d19b6a3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '22650-PP',
            de: '22650-PP',
            fr: '22650-PP',
            nl: '22650-PP'
          }
        }
      ],
      sortIndex: 49,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._23120,
    ...defaultFacetOption,
    value: 'ba19052e-7097-4ace-8cef-bf4af860bd50',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '23120' }
        }
      ],
      sortIndex: 50,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._23120a,
    ...defaultFacetOption,
    value: '6c118096-c6c9-4175-baad-fc41861e793f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '23120A' }
        }
      ],
      sortIndex: 51,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._23240,
    ...defaultFacetOption,
    value: '574b9c80-5d04-4672-bec2-46c88bb23733',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '23240' }
        }
      ],
      sortIndex: 52,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._23520,
    ...defaultFacetOption,
    value: '960f0829-963e-4c9b-bc23-db0f3d634f68',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '23520' }
        }
      ],
      sortIndex: 53,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._236233114f,
    ...defaultFacetOption,
    value: '318ca923-08b3-4f0d-b19d-e594b753a800',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '23623-31-1/4F',
            de: '23623-31-1/4F',
            fr: '23623-31-1/4F',
            nl: '23623-31-1/4F'
          }
        }
      ],
      sortIndex: 54,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._2362430l,
    ...defaultFacetOption,
    value: '8fc23212-19f2-4f84-918f-007ef1aee0d2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '23624-30L' }
        }
      ],
      sortIndex: 55,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._2750027500R,
    ...defaultFacetOption,
    value: '13e38fa6-7ee7-4049-9acb-5f0b027be0fe',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '27500, 27500-R' }
        }
      ],
      sortIndex: 56,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._2850028500R,
    ...defaultFacetOption,
    value: '22196138-5c63-420a-8dc5-c611c649f940',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '28500, 28500-R' }
        }
      ],
      sortIndex: 57,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._30473,
    ...defaultFacetOption,
    value: '823a3890-dfc2-4c86-ac3c-a50c948d8141',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '30473' }
        }
      ],
      sortIndex: 58,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._36275,
    ...defaultFacetOption,
    value: '277a628d-fb0e-4e20-9256-943cfedb308d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '36275', de: '36275', fr: '36275', nl: '36275' }
        }
      ],
      sortIndex: 59,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._3653360,
    ...defaultFacetOption,
    value: '44f8a3b1-8b1d-4afc-bc07-671d240ef94f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '36533-60' }
        }
      ],
      sortIndex: 60,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._3849918jjau,
    ...defaultFacetOption,
    value: '8b1cbbce-8ed4-4d40-bf25-f3a40a4b9c3c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '38499-1/8JJAU' }
        }
      ],
      sortIndex: 61,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._4688,
    ...defaultFacetOption,
    value: '6c1c31b1-c7c5-47f4-96f3-dae6f5609816',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '4688' }
        }
      ],
      sortIndex: 62,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._4966018jjau,
    ...defaultFacetOption,
    value: '282b7f4c-f3ce-40f4-b60e-8b7e95bfcaeb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '49660-1/8JJAU' }
        }
      ],
      sortIndex: 63,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._5883358834,
    ...defaultFacetOption,
    value: '9dcfc2fd-13f0-4fc3-80ff-cdfc03558754',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '58833, 58834',
            de: '58833, 58834',
            fr: '58833, 58834',
            nl: '58833, 58834'
          }
        }
      ],
      sortIndex: 64,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._608314jau,
    ...defaultFacetOption,
    value: '5a886a9a-d264-4ccf-817d-8b9205a8fcc8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6083-1/4JAU' }
        }
      ],
      sortIndex: 65,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._6104,
    ...defaultFacetOption,
    value: 'b0edc6ac-91a8-40db-9845-65459ecdb9ff',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6104' }
        }
      ],
      sortIndex: 66,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._621814jau,
    ...defaultFacetOption,
    value: '429266c2-e0b1-4156-924a-a4c571b8f378',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6218-1/4JAU' }
        }
      ],
      sortIndex: 67,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._63225632253a,
    ...defaultFacetOption,
    value: '36f224c1-3fd3-4b00-a495-1c8473c0a2c2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '63225, 63225-3A',
            de: '63225, 63225-3A',
            fr: '63225, 63225-3A',
            nl: '63225, 63225-3A'
          }
        }
      ],
      sortIndex: 68,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._63536353Mfp,
    ...defaultFacetOption,
    value: '4f3a5c55-17ba-4474-a791-5931b9237562',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6353, 6353-MFP' }
        }
      ],
      sortIndex: 69,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._6466,
    ...defaultFacetOption,
    value: '1ea7789f-35b5-4c5d-81b9-b59c16f0e90f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6466' }
        }
      ],
      sortIndex: 70,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._6590,
    ...defaultFacetOption,
    value: '928bda75-63eb-40cf-bbe6-e682e96208cd',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6590' }
        }
      ],
      sortIndex: 71,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._6815,
    ...defaultFacetOption,
    value: '512e8699-406e-4f74-8385-4dfcc7dc79bc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6815' }
        }
      ],
      sortIndex: 72,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._6815g,
    ...defaultFacetOption,
    value: 'bd8b0e4e-6bf7-4aad-822a-3609c445aed8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '6815G' }
        }
      ],
      sortIndex: 73,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._7210018jjau,
    ...defaultFacetOption,
    value: '7163b537-8e0e-4f02-8e68-98a7018d903a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '72100-1/8JJAU' }
        }
      ],
      sortIndex: 74,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._731014jau,
    ...defaultFacetOption,
    value: '561c0ef7-16f7-42d1-ad02-9fe1791e17df',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '7310-1/4JAU' }
        }
      ],
      sortIndex: 75,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._7521,
    ...defaultFacetOption,
    value: '03aa1f8a-44d0-4202-9350-28980503eb96',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '7521' }
        }
      ],
      sortIndex: 76,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._7g,
    ...defaultFacetOption,
    value: 'c5d7c48f-d75f-41f2-bac3-b8bb2f256f04',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '7G', de: '7G', fr: '7G', nl: '7G' }
        }
      ],
      sortIndex: 77,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._7n,
    ...defaultFacetOption,
    value: '9b01fbf5-2571-43d8-8f0e-1ee964e8f669',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '7N', de: '7N', fr: '7N', nl: '7N' }
        }
      ],
      sortIndex: 78,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._8370,
    ...defaultFacetOption,
    value: '3518c79e-b7f8-49c7-96ea-4f88fbd01388',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '8370' }
        }
      ],
      sortIndex: 79,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._8460,
    ...defaultFacetOption,
    value: '5d0c9ef2-9156-45b8-8f76-c5397ed3397f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '8460' }
        }
      ],
      sortIndex: 80,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey._8686,
    ...defaultFacetOption,
    value: '4f868b52-49e2-436c-970b-c2cc22f546c4',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '8686', de: '8686', fr: '8686', nl: '8686' }
        }
      ],
      sortIndex: 81,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa090,
    ...defaultFacetOption,
    value: 'a7915f7e-ef3f-41fc-bbdc-31517b2853ce',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA090' }
        }
      ],
      sortIndex: 82,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh0050,
    ...defaultFacetOption,
    value: '63257e79-c198-4fc0-a459-1ef42f5e8953',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-0050' }
        }
      ],
      sortIndex: 83,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh03,
    ...defaultFacetOption,
    value: '1f993666-280e-4282-99ad-444d08406e32',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-03' }
        }
      ],
      sortIndex: 84,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh03Z1,
    ...defaultFacetOption,
    value: '0daa6d8f-4f1e-46ab-89e6-a793685b0368',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-03-Z1' }
        }
      ],
      sortIndex: 85,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh10,
    ...defaultFacetOption,
    value: 'dc4a0333-3efd-425f-8b3a-5d318f7dfec3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-10' }
        }
      ],
      sortIndex: 86,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh104210,
    ...defaultFacetOption,
    value: '9c4e25fd-c14a-44a5-9a9d-e4c22e466753',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-104210' }
        }
      ],
      sortIndex: 87,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh104214,
    ...defaultFacetOption,
    value: '3d613d9f-e6f8-4b3a-8b92-358aa9947c1d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-104214' }
        }
      ],
      sortIndex: 88,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh104215,
    ...defaultFacetOption,
    value: 'df3dfdcd-3aea-42c9-abfa-24257c017a2a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-104215' }
        }
      ],
      sortIndex: 89,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000auh7244014,
    ...defaultFacetOption,
    value: '6a0db788-b7bb-4931-af31-b135542fb265',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000AUH-72440-1/4' }
        }
      ],
      sortIndex: 90,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000jau10,
    ...defaultFacetOption,
    value: '016f2396-0fb5-4854-bb4f-dfcba003749f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000JAU-10' }
        }
      ],
      sortIndex: 91,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa10000jjau,
    ...defaultFacetOption,
    value: '166eec60-dcb2-486e-8661-e1feb804048b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA10000JJAU' }
        }
      ],
      sortIndex: 92,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa110,
    ...defaultFacetOption,
    value: '03745036-b778-4997-aefe-f74ba27de30c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA110' }
        }
      ],
      sortIndex: 93,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa122,
    ...defaultFacetOption,
    value: '44f88cdb-1c99-458d-bfaa-55b2ebd84c12',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA122' }
        }
      ],
      sortIndex: 94,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa122ml,
    ...defaultFacetOption,
    value: '03e319eb-69d0-4725-b272-3f54f1a8a66c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA122ML' }
        }
      ],
      sortIndex: 95,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa124,
    ...defaultFacetOption,
    value: '69a9ebee-e449-4272-ba17-f3c1de80138f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA124' }
        }
      ],
      sortIndex: 96,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa124a,
    ...defaultFacetOption,
    value: '361eb54f-dee4-4d9c-bc92-4dc88e3bbfb8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA124A' }
        }
      ],
      sortIndex: 97,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa124asc,
    ...defaultFacetOption,
    value: '8352f9ef-1649-4669-bd18-32282ee02acf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA124ASC' }
        }
      ],
      sortIndex: 98,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa124ml,
    ...defaultFacetOption,
    value: 'eb5f68de-59ba-4d1d-aa97-8397de19bed7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA124ML' }
        }
      ],
      sortIndex: 99,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa124sc,
    ...defaultFacetOption,
    value: 'e8a2ff8b-5670-417f-bef2-5ceef21366b2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA124SC' }
        }
      ],
      sortIndex: 100,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa190,
    ...defaultFacetOption,
    value: '628cf011-0f4d-48b8-9394-7a7bb64debd0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA190' }
        }
      ],
      sortIndex: 101,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa22auh,
    ...defaultFacetOption,
    value: '8346f5af-8243-4fc7-8e0f-c835108ebf4b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA22AUH' }
        }
      ],
      sortIndex: 102,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa22auh7676,
    ...defaultFacetOption,
    value: '0d65d0a5-b852-43de-85ae-a738775bb07e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA22AUH-7676' }
        }
      ],
      sortIndex: 103,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa22auhSs11024,
    ...defaultFacetOption,
    value: 'aeb0f86d-3422-4d2e-92cc-fd9984ad5027',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA22AUH-SS-11024' }
        }
      ],
      sortIndex: 104,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa22auhSs14799,
    ...defaultFacetOption,
    value: '0cf59d3c-590e-4a6e-8fea-edf309183855',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA22AUH-SS-14799' }
        }
      ],
      sortIndex: 105,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa23h,
    ...defaultFacetOption,
    value: '351afaf6-1bb5-4420-b199-560874ad40cb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA23H' }
        }
      ],
      sortIndex: 106,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa23l,
    ...defaultFacetOption,
    value: '487be0fd-26b5-4660-8ad4-3dfb02641f78',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA23L' }
        }
      ],
      sortIndex: 107,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa23l45885,
    ...defaultFacetOption,
    value: '0ca083c2-d887-4cdb-9c6a-ed274961af2d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA23L-45885' }
        }
      ],
      sortIndex: 108,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa24aua,
    ...defaultFacetOption,
    value: '447b9a88-8cb6-427b-89c3-0dee2d3ced20',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA24AUA' }
        }
      ],
      sortIndex: 109,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa24aua20190,
    ...defaultFacetOption,
    value: 'abc27656-0fa4-451c-b97c-713e8f544e9a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA24AUA-20190' }
        }
      ],
      sortIndex: 110,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa24aua8395,
    ...defaultFacetOption,
    value: '7825c33a-d5d7-4a0b-9238-73e5a667b45c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA24AUA-8395' }
        }
      ],
      sortIndex: 111,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa24aua8980,
    ...defaultFacetOption,
    value: '1b682906-5029-4c8f-8ae4-0d49878d30ed',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA24AUA-8980' }
        }
      ],
      sortIndex: 112,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa250auh,
    ...defaultFacetOption,
    value: 'ff515a36-2910-4d9f-bd06-19a9408ca959',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA250AUH' }
        }
      ],
      sortIndex: 113,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa26auh,
    ...defaultFacetOption,
    value: '1d932aeb-f436-4d7e-9550-25f61bec7bb7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA26AUH' }
        }
      ],
      sortIndex: 114,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa28jjau49815,
    ...defaultFacetOption,
    value: '25e505f9-6f51-4ff7-a90a-c3ff2303bba5',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA28JJAU-49815' }
        }
      ],
      sortIndex: 115,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa290,
    ...defaultFacetOption,
    value: '67d9ebc4-b489-47df-910d-cd388f05a35e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA290' }
        }
      ],
      sortIndex: 116,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa29jauco,
    ...defaultFacetOption,
    value: 'f1623ddd-905b-4e86-8279-3227a4721387',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA29JAUCO' }
        }
      ],
      sortIndex: 117,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa3020940,
    ...defaultFacetOption,
    value: '82582c4b-d0b8-4154-a221-1152ad0e4960',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA30-20940' }
        }
      ],
      sortIndex: 118,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa30a,
    ...defaultFacetOption,
    value: 'e3009c23-e1cf-4807-a7d0-fcfb26632f74',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA30A' }
        }
      ],
      sortIndex: 119,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa30l,
    ...defaultFacetOption,
    value: '599ceff4-2998-4c0f-aa33-9dd61e265756',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA30L' }
        }
      ],
      sortIndex: 120,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa31,
    ...defaultFacetOption,
    value: 'a0d606ea-bce5-4cc0-86ce-ffc7755112d2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA31', de: 'AA31', fr: 'AA31', nl: 'AA31' }
        }
      ],
      sortIndex: 121,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa36,
    ...defaultFacetOption,
    value: '2cf2e0fb-dcb5-43ca-9d66-23c516099884',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA36' }
        }
      ],
      sortIndex: 122,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa430ml,
    ...defaultFacetOption,
    value: 'd292bd14-d559-42a2-bc03-731ac2c1604b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA430ML' }
        }
      ],
      sortIndex: 123,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa430mlsc,
    ...defaultFacetOption,
    value: '5edf0932-f11a-4395-b49f-54eeacf2708a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA430MLSC' }
        }
      ],
      sortIndex: 124,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa43hc,
    ...defaultFacetOption,
    value: 'b5b1c778-19c4-4229-a5d6-7691379f7b9e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA43HC' }
        }
      ],
      sortIndex: 125,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa43lc,
    ...defaultFacetOption,
    value: '41db17a6-6ef6-4e9d-b806-e4077fd9b739',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA43LC' }
        }
      ],
      sortIndex: 126,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa60,
    ...defaultFacetOption,
    value: 'f0e37e35-a8fa-432a-b03d-9fddfe89d250',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA60' }
        }
      ],
      sortIndex: 127,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa6021580,
    ...defaultFacetOption,
    value: '280861b5-fde1-496c-b93d-041d47e944cc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA60-21580' }
        }
      ],
      sortIndex: 128,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa70,
    ...defaultFacetOption,
    value: 'e78b0a39-4c84-457b-8543-9833464bdf53',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA70' }
        }
      ],
      sortIndex: 129,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa707,
    ...defaultFacetOption,
    value: '99fcc03d-fc27-4480-8b5f-5f15bb4b2c37',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA707', de: 'AA707', fr: 'AA707', nl: 'AA707' }
        }
      ],
      sortIndex: 130,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa727,
    ...defaultFacetOption,
    value: 'e7069cf7-fb16-4c94-8503-adbd9468f22a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA727' }
        }
      ],
      sortIndex: 131,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Aa80,
    ...defaultFacetOption,
    value: 'f80a1af3-65cc-494f-8516-429cba04093f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA80' }
        }
      ],
      sortIndex: 132,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ApLapLbp,
    ...defaultFacetOption,
    value: '3b81914f-c6a1-4377-a8bb-334b5c32da47',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'AP, LAP, LBP',
            de: 'AP, LAP, LBP',
            fr: 'AP, LAP, LBP',
            nl: 'AP, LAP, LBP'
          }
        }
      ],
      sortIndex: 133,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ApWLapWLbpW,
    ...defaultFacetOption,
    value: 'a1b9549b-0168-40ba-92ec-ae23ca1cb1e2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'AP-W, LAP-W, LBP-W',
            de: 'AP-W, LAP-W, LBP-W',
            fr: 'AP-W, LAP-W, LBP-W',
            nl: 'AP-W, LAP-W, LBP-W'
          }
        }
      ],
      sortIndex: 134,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AxBx,
    ...defaultFacetOption,
    value: '3c509403-f286-41b9-a954-8a1d999bfa4e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AX, BX', de: 'AX, BX', fr: 'AX, BX', nl: 'AX, BX' }
        }
      ],
      sortIndex: 135,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AxWBxW,
    ...defaultFacetOption,
    value: 'ab2a51fa-4a6d-4a0c-9530-61a9261ffcc9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'AX-W, BX-W',
            de: 'AX-W, BX-W',
            fr: 'AX-W, BX-W',
            nl: 'AX-W, BX-W'
          }
        }
      ],
      sortIndex: 136,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Ba,
    ...defaultFacetOption,
    value: 'f2d76ebc-7c5e-44f4-836e-0e818e3630e3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'BA', de: 'BA', fr: 'BA', nl: 'BA' }
        }
      ],
      sortIndex: 137,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Bd,
    ...defaultFacetOption,
    value: 'a2cc3638-85b2-48d8-8e93-bc98a004153d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'BD', de: 'BD', fr: 'BD', nl: 'BD' }
        }
      ],
      sortIndex: 138,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.BdW,
    ...defaultFacetOption,
    value: '4b411e3d-05ba-471c-a118-cc825f6ec016',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'BD-W', de: 'BD-W', fr: 'BD-W', nl: 'BD-W' }
        }
      ],
      sortIndex: 139,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Bdm,
    ...defaultFacetOption,
    value: '9c8c4bfb-53ee-4710-970c-ae11411aabca',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'BDM', de: 'BDM', fr: 'BDM', nl: 'BDM' }
        }
      ],
      sortIndex: 140,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Bsj,
    ...defaultFacetOption,
    value: '2973c05a-b134-4239-ba5b-3d7ab541687d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'BSJ', de: 'BSJ', fr: 'BSJ', nl: 'BSJ' }
        }
      ],
      sortIndex: 141,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Cf,
    ...defaultFacetOption,
    value: '1d228a88-c343-4c66-94a7-ea427488689f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'CF', de: 'CF', fr: 'CF', nl: 'CF' }
        }
      ],
      sortIndex: 142,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Crc,
    ...defaultFacetOption,
    value: '40d60d4e-63d1-4fa0-97d0-ade0baef55d1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'CRC', de: 'CRC', fr: 'CRC', nl: 'CRC' }
        }
      ],
      sortIndex: 143,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Cu150a,
    ...defaultFacetOption,
    value: '7a2d08b0-e531-4caa-bd38-a54b124ddcf8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'CU150A' }
        }
      ],
      sortIndex: 144,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Cx,
    ...defaultFacetOption,
    value: '3441dbc9-29af-4a0a-8132-964951d837be',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'CX', de: 'CX', fr: 'CX', nl: 'CX' }
        }
      ],
      sortIndex: 145,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D,
    ...defaultFacetOption,
    value: '1294a136-ba0c-49c0-8719-fb6090a5a948',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D', de: 'D', fr: 'D', nl: 'D' }
        }
      ],
      sortIndex: 146,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetDTip,
    ...defaultFacetOption,
    value: 'e3f2baae-7574-47b0-8eeb-13a1e682c019',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D Spray Tip' }
        }
      ],
      sortIndex: 147,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetDTipAndBody,
    ...defaultFacetOption,
    value: '73a27932-730e-4569-a2a2-b4ce29d3c289',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D Spray Tip \u002B T(T) Body' }
        }
      ],
      sortIndex: 148,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.DHh,
    ...defaultFacetOption,
    value: '494d62fe-4320-4714-98fa-ea757f9f2f89',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D-HH' }
        }
      ],
      sortIndex: 149,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D26564,
    ...defaultFacetOption,
    value: 'fa4190d7-8f7e-414c-93da-a2973bf315ac',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D26564' }
        }
      ],
      sortIndex: 150,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D26984,
    ...defaultFacetOption,
    value: '5488f5c3-4ad1-4694-b14b-df7d88b91227',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D26984' }
        }
      ],
      sortIndex: 151,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D27500,
    ...defaultFacetOption,
    value: '3eab9286-677e-49d1-9abd-27ae91531dc3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D27500', de: 'D27500', fr: 'D27500', nl: 'D27500' }
        }
      ],
      sortIndex: 152,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D40159,
    ...defaultFacetOption,
    value: 'f53757ea-9eed-4fd9-afd7-57f78f04b952',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D40159' }
        }
      ],
      sortIndex: 153,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D41800e,
    ...defaultFacetOption,
    value: 'fa5d962a-43fa-4443-bcab-56114fedc8d1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D41800E' }
        }
      ],
      sortIndex: 154,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D41892,
    ...defaultFacetOption,
    value: 'd6b72f4a-6b2f-4072-85ee-52ff6184f2ca',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D41892' }
        }
      ],
      sortIndex: 155,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D41990,
    ...defaultFacetOption,
    value: '63ce8847-9252-418f-a754-4d6aec0d5a99',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D41990' }
        }
      ],
      sortIndex: 156,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500Jau,
    ...defaultFacetOption,
    value: '09c29da1-626f-4845-a89f-64a51477e69d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D55500-JAU' }
        }
      ],
      sortIndex: 157,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500Jauh0,
    ...defaultFacetOption,
    value: 'a6fa54fa-5a66-4d1c-9d2b-72e0087172ce',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D55500-JAUH0' }
        }
      ],
      sortIndex: 158,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D55500Jauh1,
    ...defaultFacetOption,
    value: '23bf2f25-ddc3-442b-ae6f-33271a489d72',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D55500-JAUH1' }
        }
      ],
      sortIndex: 159,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D55567,
    ...defaultFacetOption,
    value: '34e216cf-c779-40c9-aaa8-5ef733b4ebbf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D55567' }
        }
      ],
      sortIndex: 160,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.D55606,
    ...defaultFacetOption,
    value: 'd7e25e1d-91dc-4cb9-b318-799f8501cfaa',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'D55606', de: 'D55606', fr: 'D55606', nl: 'D55606' }
        }
      ],
      sortIndex: 161,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Daa727,
    ...defaultFacetOption,
    value: 'e0ba38e2-f527-4030-b8c6-28987eaa605d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'DAA727' }
        }
      ],
      sortIndex: 162,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.E,
    ...defaultFacetOption,
    value: 'c703fb0c-f14a-4ee0-af62-8b7291ac1de1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'E', de: 'E', fr: 'E', nl: 'E' }
        }
      ],
      sortIndex: 163,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Eg,
    ...defaultFacetOption,
    value: '03020652-a130-4afe-809b-122467eb765d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'EG' }
        }
      ],
      sortIndex: 164,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Ff,
    ...defaultFacetOption,
    value: '370dce2e-3fa3-461d-b6b6-3fe971f1a12d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'FF', de: 'FF', fr: 'FF', nl: 'FF' }
        }
      ],
      sortIndex: 165,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Fs013Fs020,
    ...defaultFacetOption,
    value: 'a96215f7-fe90-4c43-bb06-0bcbd2b4f0ad',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FS013, FS020',
            de: 'FS013, FS020',
            fr: 'FS013, FS020',
            nl: 'FS013, FS020'
          }
        }
      ],
      sortIndex: 166,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GGg,
    ...defaultFacetOption,
    value: 'c33ec757-8a10-4767-82c9-22e72f40d45d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'G, GG', de: 'G, GG', fr: 'G, GG', nl: 'G, GG' }
        }
      ],
      sortIndex: 167,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.G15Gg15,
    ...defaultFacetOption,
    value: 'b83ccba8-f4ad-4be3-968c-193e9cbdc275',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'G-15, GG-15',
            de: 'G-15, GG-15',
            fr: 'G-15, GG-15',
            nl: 'G-15, GG-15'
          }
        }
      ],
      sortIndex: 168,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.G30Gg30,
    ...defaultFacetOption,
    value: 'ae139954-8552-4bbd-a421-e28458c63d85',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'G-30, GG-30',
            de: 'G-30, GG-30',
            fr: 'G-30, GG-30',
            nl: 'G-30, GG-30'
          }
        }
      ],
      sortIndex: 169,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GSqGgSq,
    ...defaultFacetOption,
    value: '828a23a0-dba2-416a-a1c5-6ed89c7165ba',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'G-SQ, GG-SQ',
            de: 'G-SQ, GG-SQ',
            fr: 'G-SQ, GG-SQ',
            nl: 'G-SQ, GG-SQ'
          }
        }
      ],
      sortIndex: 170,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GVlGgVl,
    ...defaultFacetOption,
    value: '2ec567d1-3c63-4e5e-8a20-a570f2918808',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'G-VL, GG-VL',
            de: 'G-VL, GG-VL',
            fr: 'G-VL, GG-VL',
            nl: 'G-VL, GG-VL'
          }
        }
      ],
      sortIndex: 171,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GWGgW,
    ...defaultFacetOption,
    value: '9a9fe34e-fbbe-4fe3-b5fd-ab340f90d987',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'G-W, GG-W',
            de: 'G-W, GG-W',
            fr: 'G-W, GG-W',
            nl: 'G-W, GG-W'
          }
        }
      ],
      sortIndex: 172,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GaGga,
    ...defaultFacetOption,
    value: '657255a1-a041-4722-9ab2-84c5244b89d6',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'GA, GGA', de: 'GA, GGA', fr: 'GA, GGA', nl: 'GA, GGA' }
        }
      ],
      sortIndex: 173,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GaWGgaW,
    ...defaultFacetOption,
    value: '197ca83b-297a-4291-9d9d-04827f3e2124',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GA-W, GGA-W',
            de: 'GA-W, GGA-W',
            fr: 'GA-W, GGA-W',
            nl: 'GA-W, GGA-W'
          }
        }
      ],
      sortIndex: 174,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GanvGganv,
    ...defaultFacetOption,
    value: '8c0df8ef-2527-49b4-ad75-01bd942163c1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GANV, GGANV',
            de: 'GANV, GGANV',
            fr: 'GANV, GGANV',
            nl: 'GANV, GGANV'
          }
        }
      ],
      sortIndex: 175,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.GdGgd,
    ...defaultFacetOption,
    value: 'be75b7f9-7da1-4199-a13d-83f4f9df4d9c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'GD, GGD', de: 'GD, GGD', fr: 'GD, GGD', nl: 'GD, GGD' }
        }
      ],
      sortIndex: 176,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HHh,
    ...defaultFacetOption,
    value: 'a415a13a-89c6-4620-b63a-739225aa97c1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'H, HH', de: 'H, HH', fr: 'H, HH', nl: 'H, HH' }
        }
      ],
      sortIndex: 177,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.H15,
    ...defaultFacetOption,
    value: 'ecc062da-17c0-4a21-9608-083726038b04',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'H-15', de: 'H-15', fr: 'H-15', nl: 'H-15' }
        }
      ],
      sortIndex: 178,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HSqHhSq,
    ...defaultFacetOption,
    value: '7a1c680a-50dd-4efa-853a-749c29fdc1ae',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'H-SQ, HH-SQ',
            de: 'H-SQ, HH-SQ',
            fr: 'H-SQ, HH-SQ',
            nl: 'H-SQ, HH-SQ'
          }
        }
      ],
      sortIndex: 179,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HUHDu,
    ...defaultFacetOption,
    value: '4b582aae-446f-43a8-8784-711474418253',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'H-U, H-DU' }
        }
      ],
      sortIndex: 180,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HVvHDt,
    ...defaultFacetOption,
    value: 'ae48d1b9-a1c1-490a-99c7-af0733df0346',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'H-VV, H-DT',
            de: 'H-VV, H-DT',
            fr: 'H-VV, H-DT',
            nl: 'H-VV, H-DT'
          }
        }
      ],
      sortIndex: 181,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HVvl,
    ...defaultFacetOption,
    value: '70a11cb0-eefb-4a72-8d74-de277e9f3646',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'H-VVL', de: 'H-VVL', fr: 'H-VVL', nl: 'H-VVL' }
        }
      ],
      sortIndex: 182,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HWHhW,
    ...defaultFacetOption,
    value: 'c5d597e9-ad35-439b-a886-16fe84939f3a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'H-W, HH-W',
            de: 'H-W, HH-W',
            fr: 'H-W, HH-W',
            nl: 'H-W, HH-W'
          }
        }
      ],
      sortIndex: 183,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HWsqHhWsq,
    ...defaultFacetOption,
    value: 'e81a4118-5d49-43cc-bf35-5f52fd0dc09d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'H-WSQ, HH-WSQ',
            de: 'H-WSQ, HH-WSQ',
            fr: 'H-WSQ, HH-WSQ',
            nl: 'H-WSQ, HH-WSQ'
          }
        }
      ],
      sortIndex: 184,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Hd,
    ...defaultFacetOption,
    value: '96b61a45-ff98-4bba-bb97-3b24152687e2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HD', de: 'HD', fr: 'HD', nl: 'HD' }
        }
      ],
      sortIndex: 185,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Hf,
    ...defaultFacetOption,
    value: 'a7f0a9be-adbe-43dd-92e4-d19abd5738a9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HF', de: 'HF', fr: 'HF', nl: 'HF' }
        }
      ],
      sortIndex: 186,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Hh30,
    ...defaultFacetOption,
    value: 'd2a4a723-86e9-4aca-99dd-c8c8f90acf26',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HH-30', de: 'HH-30', fr: 'HH-30', nl: 'HH-30' }
        }
      ],
      sortIndex: 187,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HhKy,
    ...defaultFacetOption,
    value: '897332ba-4fc0-43ce-ab4d-9d3148cae675',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HH-KY', de: 'HH-KY', fr: 'HH-KY', nl: 'HH-KY' }
        }
      ],
      sortIndex: 188,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Hhsj,
    ...defaultFacetOption,
    value: '95380b8d-90dc-440a-a2fe-dcc4324580df',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HHSJ', de: 'HHSJ', fr: 'HHSJ', nl: 'HHSJ' }
        }
      ],
      sortIndex: 189,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Hhsjx,
    ...defaultFacetOption,
    value: 'ff87c736-7369-4277-a736-a218f168180d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'HHSJX', de: 'HHSJX', fr: 'HHSJX', nl: 'HHSJX' }
        }
      ],
      sortIndex: 190,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HmfpHhmfp,
    ...defaultFacetOption,
    value: '42cfb17c-28a2-4dd7-b6b2-69f204f6cf6b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'HMFP, HHMFP',
            de: 'HMFP, HHMFP',
            fr: 'HMFP, HHMFP',
            nl: 'HMFP, HHMFP'
          }
        }
      ],
      sortIndex: 191,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Imeg,
    ...defaultFacetOption,
    value: '8f336c2b-12b2-4105-8f5e-ff0e2eda5db3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'IMEG', de: 'IMEG', fr: 'IMEG', nl: 'IMEG' }
        }
      ],
      sortIndex: 192,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.K,
    ...defaultFacetOption,
    value: '2582aac8-4f3a-4691-8a58-46f6318c67a4',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'K', de: 'K', fr: 'K', nl: 'K' }
        }
      ],
      sortIndex: 193,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LnLnn,
    ...defaultFacetOption,
    value: 'fa134537-9f3f-4ebf-a1ec-550b4f1e6791',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'LN, LNN', de: 'LN, LNN', fr: 'LN, LNN', nl: 'LN, LNN' }
        }
      ],
      sortIndex: 194,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LndLnnd,
    ...defaultFacetOption,
    value: '65575c53-c59a-4843-a579-2cf20256eec0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'LND, LNND',
            de: 'LND, LNND',
            fr: 'LND, LNND',
            nl: 'LND, LNND'
          }
        }
      ],
      sortIndex: 195,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.M,
    ...defaultFacetOption,
    value: '7a2c4765-8f59-468e-aad6-7b6c01683ad3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'M', de: 'M', fr: 'M', nl: 'M' }
        }
      ],
      sortIndex: 196,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MegWeg,
    ...defaultFacetOption,
    value: '8c8a1da2-6c6c-4fd6-a660-6a144642482d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'MEG, WEG' }
        }
      ],
      sortIndex: 197,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MegSstc,
    ...defaultFacetOption,
    value: '2243c78c-6d29-4ce8-936a-9e3315454bd2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'MEG-SSTC' }
        }
      ],
      sortIndex: 198,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NNn,
    ...defaultFacetOption,
    value: 'fa638387-96f6-46ed-aca2-16f1d52627c2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'N, NN', de: 'N, NN', fr: 'N, NN', nl: 'N, NN' }
        }
      ],
      sortIndex: 199,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NWNnWLnWLnnW,
    ...defaultFacetOption,
    value: 'c60533de-34b3-4414-9ba7-5b0bead0048a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'N-W, NN-W, LN-W, LNN-W',
            de: 'N-W, NN-W, LN-W, LNN-W',
            fr: 'N-W, NN-W, LN-W, LNN-W',
            nl: 'N-W, NN-W, LN-W, LNN-W'
          }
        }
      ],
      sortIndex: 200,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.P,
    ...defaultFacetOption,
    value: '0650c8d8-df42-4b04-bb45-c06bf6ff01c8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'P', de: 'P', fr: 'P', nl: 'P' }
        }
      ],
      sortIndex: 201,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Pw4000a,
    ...defaultFacetOption,
    value: '4bf4b952-56e4-42cb-b2f7-fea9527502d5',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'PW4000A' }
        }
      ],
      sortIndex: 202,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Pw4000as,
    ...defaultFacetOption,
    value: '3dc54a53-e941-4e80-b0e2-7741f13e3efa',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'PW4000AS' }
        }
      ],
      sortIndex: 203,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qcimeg,
    ...defaultFacetOption,
    value: '83dfdd49-54a6-467f-b176-3f80595d33bb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QCIMEG', de: 'QCIMEG', fr: 'QCIMEG', nl: 'QCIMEG' }
        }
      ],
      sortIndex: 204,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qcmeg,
    ...defaultFacetOption,
    value: '048c87f2-931e-460c-98a2-748be62be487',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QCMEG' }
        }
      ],
      sortIndex: 205,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QgaQlga,
    ...defaultFacetOption,
    value: 'e1cb44b8-f5aa-46b1-aea7-31cd0ae715e9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QGA, QLGA',
            de: 'QGA, QLGA',
            fr: 'QGA, QLGA',
            nl: 'QGA, QLGA'
          }
        }
      ],
      sortIndex: 206,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qga15Qlga15,
    ...defaultFacetOption,
    value: 'd5b4cf88-804f-4113-be6e-eed199f8075f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QGA-15, QLGA-15',
            de: 'QGA-15, QLGA-15',
            fr: 'QGA-15, QLGA-15',
            nl: 'QGA-15, QLGA-15'
          }
        }
      ],
      sortIndex: 207,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qga30Qlga30,
    ...defaultFacetOption,
    value: '083cdbac-16d3-431f-9476-7d80d4c7be8d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QGA-30, QLGA-30',
            de: 'QGA-30, QLGA-30',
            fr: 'QGA-30, QLGA-30',
            nl: 'QGA-30, QLGA-30'
          }
        }
      ],
      sortIndex: 208,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QgaWQlgaW,
    ...defaultFacetOption,
    value: '3b227913-e820-4f57-a6df-dd9e0431d5b4',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QGA-W, QLGA-W',
            de: 'QGA-W, QLGA-W',
            fr: 'QGA-W, QLGA-W',
            nl: 'QGA-W, QLGA-W'
          }
        }
      ],
      sortIndex: 209,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QhaQlha,
    ...defaultFacetOption,
    value: '71dbb18d-7093-45a4-8cc5-cdc46c8c3c1e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QHA, QLHA',
            de: 'QHA, QLHA',
            fr: 'QHA, QLHA',
            nl: 'QHA, QLHA'
          }
        }
      ],
      sortIndex: 210,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QhaWQlhaW,
    ...defaultFacetOption,
    value: 'e22ccd21-295e-4439-bdbb-85dce0af576c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QHA-W, QLHA-W',
            de: 'QHA-W, QLHA-W',
            fr: 'QHA-W, QLHA-W',
            nl: 'QHA-W, QLHA-W'
          }
        }
      ],
      sortIndex: 211,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QjaQjja,
    ...defaultFacetOption,
    value: '054ff212-fe44-41d1-a453-f66093d09dfb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QJA, QJJA',
            de: 'QJA, QJJA',
            fr: 'QJA, QJJA',
            nl: 'QJA, QJJA'
          }
        }
      ],
      sortIndex: 212,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qjjs,
    ...defaultFacetOption,
    value: '0168fa84-d355-40ce-b7ba-c366734dbc11',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QJJS', de: 'QJJS', fr: 'QJJS', nl: 'QJJS' }
        }
      ],
      sortIndex: 213,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QjlaQjjla,
    ...defaultFacetOption,
    value: '32c1be38-60d3-4068-b1a9-0f2da1c162a6',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QJLA, QJJLA',
            de: 'QJLA, QJJLA',
            fr: 'QJLA, QJJLA',
            nl: 'QJLA, QJJLA'
          }
        }
      ],
      sortIndex: 214,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QmjAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '83b59894-e165-4855-85a2-986c89dd1d88',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 215,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QmjAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: '82f34d4f-85a9-4499-8f57-818db4e2d577',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 216,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QmjAirAtomizingBodies,
    ...defaultFacetOption,
    value: '986c36a4-b284-42cd-ac67-205a765f9257',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Bodies' }
        }
      ],
      sortIndex: 217,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QmjAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '2262907f-3139-4f00-8447-1478409243eb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 218,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QmjAirAtomizingSetups,
    ...defaultFacetOption,
    value: 'e78f7743-0a91-4f73-9925-caae4c17e5cb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Setups' }
        }
      ],
      sortIndex: 219,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qmvv,
    ...defaultFacetOption,
    value: '8a49c023-9195-4d83-9c76-67c168b212f5',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMVV', de: 'QMVV', fr: 'QMVV', nl: 'QMVV' }
        }
      ],
      sortIndex: 220,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qpha,
    ...defaultFacetOption,
    value: '392d1869-7199-4858-8622-947ba4ea0324',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QPHA', de: 'QPHA', fr: 'QPHA', nl: 'QPHA' }
        }
      ],
      sortIndex: 221,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QphaW,
    ...defaultFacetOption,
    value: 'a23252be-8391-4bad-9bc2-d0b5833afe97',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QPHA-W', de: 'QPHA-W', fr: 'QPHA-W', nl: 'QPHA-W' }
        }
      ],
      sortIndex: 222,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QppaQppm,
    ...defaultFacetOption,
    value: 'f68fd73e-92fc-4475-a0e2-e024a007f50b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QPPA, QPPM',
            de: 'QPPA, QPPM',
            fr: 'QPPA, QPPM',
            nl: 'QPPA, QPPM'
          }
        }
      ],
      sortIndex: 223,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qpta,
    ...defaultFacetOption,
    value: '4362181d-2186-4b4a-93eb-579ba3ff6033',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QPTA', de: 'QPTA', fr: 'QPTA', nl: 'QPTA' }
        }
      ],
      sortIndex: 224,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qstk,
    ...defaultFacetOption,
    value: '9349504e-9d43-44aa-83f3-608778a17b21',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QSTK', de: 'QSTK', fr: 'QSTK', nl: 'QSTK' }
        }
      ],
      sortIndex: 225,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qsvv,
    ...defaultFacetOption,
    value: '4ef5d5fc-97c5-462f-9812-b3ae4d069038',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QSVV' }
        }
      ],
      sortIndex: 226,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Qtka,
    ...defaultFacetOption,
    value: '33e1da19-1440-490d-b259-3a7f0c68763d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QTKA', de: 'QTKA', fr: 'QTKA', nl: 'QTKA' }
        }
      ],
      sortIndex: 227,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuaQluaQvva,
    ...defaultFacetOption,
    value: 'c67523a3-0692-4d97-8780-c1f7eb149538',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QUA, QLUA, QVVA' }
        }
      ],
      sortIndex: 228,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.RRrRf,
    ...defaultFacetOption,
    value: '6d14d545-1d4a-4fbd-9d48-1efdcc7895ac',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'R, RR, RF',
            de: 'R, RR, RF',
            fr: 'R, RR, RF',
            nl: 'R, RR, RF'
          }
        }
      ],
      sortIndex: 229,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TTt,
    ...defaultFacetOption,
    value: 'fbebe335-ba7e-4a35-a79e-74a046c49d33',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'T, TT', de: 'T, TT', fr: 'T, TT', nl: 'T, TT' }
        }
      ],
      sortIndex: 230,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TW,
    ...defaultFacetOption,
    value: '3d8f6411-9335-49cb-9a2f-3642639f0720',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'T-W', de: 'T-W', fr: 'T-W', nl: 'T-W' }
        }
      ],
      sortIndex: 231,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tek,
    ...defaultFacetOption,
    value: 'e0e3dc75-1a9a-46ec-ba9f-4ef665d62b28',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TEK', de: 'TEK', fr: 'TEK', nl: 'TEK' }
        }
      ],
      sortIndex: 232,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tg,
    ...defaultFacetOption,
    value: 'baa7b8ce-827f-418e-8e47-0e0ec847a322',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TG', de: 'TG', fr: 'TG', nl: 'TG' }
        }
      ],
      sortIndex: 233,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TgSq,
    ...defaultFacetOption,
    value: '33dd4f32-b616-4ebb-94d7-b79714470aa7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TG-SQ', de: 'TG-SQ', fr: 'TG-SQ', nl: 'TG-SQ' }
        }
      ],
      sortIndex: 234,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TgW,
    ...defaultFacetOption,
    value: '84d839a2-83f7-4bf3-8dca-7c3ea5cc6aea',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TG-W', de: 'TG-W', fr: 'TG-W', nl: 'TG-W' }
        }
      ],
      sortIndex: 235,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThW,
    ...defaultFacetOption,
    value: '00cf5fe4-ef80-43e9-af4a-5ef10da1437d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TH-W', de: 'TH-W', fr: 'TH-W', nl: 'TH-W' }
        }
      ],
      sortIndex: 236,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj14,
    ...defaultFacetOption,
    value: 'bca5d102-13e5-4459-bbc6-29157dfe8b36',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ14' }
        }
      ],
      sortIndex: 237,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj16,
    ...defaultFacetOption,
    value: '0512ae8f-d685-4280-ac46-57e77f63af9a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ16', de: 'TJ16', fr: 'TJ16', nl: 'TJ16' }
        }
      ],
      sortIndex: 238,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj180,
    ...defaultFacetOption,
    value: 'f885ee3b-a147-45c3-97bc-be2b42d11210',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ180' }
        }
      ],
      sortIndex: 239,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj19,
    ...defaultFacetOption,
    value: '7f5eccb0-851c-4dfe-a9f3-2459b6640828',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ19' }
        }
      ],
      sortIndex: 240,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj360,
    ...defaultFacetOption,
    value: '1457c6a7-c9eb-45c9-9050-2313cd7d7256',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ360' }
        }
      ],
      sortIndex: 241,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj65Tj65ht,
    ...defaultFacetOption,
    value: 'f3e5f8d6-414d-4afa-b9f8-d8ed41b3340b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ65, TJ65HT' }
        }
      ],
      sortIndex: 242,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj75Tj75h,
    ...defaultFacetOption,
    value: '227f577a-29a7-46fc-966c-8815541c7985',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ75, TJ75H' }
        }
      ],
      sortIndex: 243,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj78Tj78d,
    ...defaultFacetOption,
    value: '50875e5d-5ae3-4311-a5c8-5808b6b48516',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ78, TJ78D' }
        }
      ],
      sortIndex: 244,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj78m,
    ...defaultFacetOption,
    value: '2a634cd7-62b4-4633-91b9-2d51acfee170',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ78M' }
        }
      ],
      sortIndex: 245,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj80Tj80h,
    ...defaultFacetOption,
    value: 'fe9329e4-f1fe-454b-9e5f-23826a2b9f12',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ80, TJ80H' }
        }
      ],
      sortIndex: 246,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj9A,
    ...defaultFacetOption,
    value: '4e9b8006-a691-4286-bfea-6b4a58056c2a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ9-A' }
        }
      ],
      sortIndex: 247,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tj9BTj9C,
    ...defaultFacetOption,
    value: 'c7daeddf-ce4f-4c3a-be87-1f5ca8db2c73',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TJ9-B, TJ9-C' }
        }
      ],
      sortIndex: 248,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tk,
    ...defaultFacetOption,
    value: 'e81724b9-c0dc-43dc-9f42-69b35877c0b7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TK', de: 'TK', fr: 'TK', nl: 'TK' }
        }
      ],
      sortIndex: 249,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tn,
    ...defaultFacetOption,
    value: '25fb855b-e25a-4662-b3fb-4b58e625bb64',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TN', de: 'TN', fr: 'TN', nl: 'TN' }
        }
      ],
      sortIndex: 250,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TnSstc,
    ...defaultFacetOption,
    value: 'ad7a4b2b-9342-425c-8740-ed79e1263d2c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TN-SSTC', de: 'TN-SSTC', fr: 'TN-SSTC', nl: 'TN-SSTC' }
        }
      ],
      sortIndex: 251,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tpu,
    ...defaultFacetOption,
    value: 'dc542b52-c2d0-4694-8d96-71d4a901bec7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TPU' }
        }
      ],
      sortIndex: 252,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Twd,
    ...defaultFacetOption,
    value: 'afc876c3-751d-40c4-b3fd-18073e6f9db3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TWD' }
        }
      ],
      sortIndex: 253,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Tx,
    ...defaultFacetOption,
    value: '175cf5cc-84e1-49f8-9305-e4994849784c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'TX', de: 'TX', fr: 'TX', nl: 'TX' }
        }
      ],
      sortIndex: 254,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.U,
    ...defaultFacetOption,
    value: '029216d2-7620-422c-bcda-4e1963ff344a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'U' }
        }
      ],
      sortIndex: 255,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnspecifiedModel,
    ...defaultFacetOption,
    value: 'ee96fcc8-6782-4a31-b986-73425dd0035e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Unspecified Model' }
        }
      ],
      sortIndex: 256,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VaaVauAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '0acc09cb-b1b3-44fd-876c-56175da3da45',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 257,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VaaVauAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: 'ab131e15-e569-4334-8ec7-7b7eed28636f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 258,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VaaVauAirAtomizingBodies,
    ...defaultFacetOption,
    value: '9e5b6b2f-ded9-48e5-b847-a58c8383c5f3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU Air Atomizing Bodies' }
        }
      ],
      sortIndex: 259,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VaaVauAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '81112fe2-3c24-4fdf-9db8-d22499ba9322',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 260,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VaaVauAirAtomizingSetups,
    ...defaultFacetOption,
    value: '38979bf0-745e-43f8-97d3-642483220cb8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU Air Atomizing Setups' }
        }
      ],
      sortIndex: 261,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VmauAirAtomizingAirCaps,
    ...defaultFacetOption,
    value: '3cba55f5-65bd-4b55-a475-35dc75b4b44e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU Air Atomizing Air Caps' }
        }
      ],
      sortIndex: 262,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VmauAirAtomizingAssemblies,
    ...defaultFacetOption,
    value: '3f9abc94-eaf2-498a-a7d0-79fd55e18c85',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU Air Atomizing Assemblies' }
        }
      ],
      sortIndex: 263,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VmauAirAtomizingBodies,
    ...defaultFacetOption,
    value: '00de3529-932e-44ac-a56b-ab869db4da2f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU Air Atomizing Bodies' }
        }
      ],
      sortIndex: 264,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VmauAirAtomizingFluidCaps,
    ...defaultFacetOption,
    value: '62751765-d255-4521-b9ac-e135a8102df9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU Air Atomizing Fluid Caps' }
        }
      ],
      sortIndex: 265,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.VmauAirAtomizingSetups,
    ...defaultFacetOption,
    value: '511b4866-c60e-459c-8201-1281263a98e0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU Air Atomizing Setups' }
        }
      ],
      sortIndex: 266,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vs010,
    ...defaultFacetOption,
    value: '23df6221-5311-4621-86a2-8fb970a785de',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VS010', de: 'VS010', fr: 'VS010', nl: 'VS010' }
        }
      ],
      sortIndex: 267,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vs020,
    ...defaultFacetOption,
    value: '0222020e-1ae4-4561-83ff-13fd16cfef9e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VS020', de: 'VS020', fr: 'VS020', nl: 'VS020' }
        }
      ],
      sortIndex: 268,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vs051,
    ...defaultFacetOption,
    value: '738b75f2-079b-4f9d-aeb7-f3b6a765c729',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VS051', de: 'VS051', fr: 'VS051', nl: 'VS051' }
        }
      ],
      sortIndex: 269,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vs625,
    ...defaultFacetOption,
    value: '444148d3-f105-4ac8-a8e4-68ecf3b8c830',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VS625', de: 'VS625', fr: 'VS625', nl: 'VS625' }
        }
      ],
      sortIndex: 270,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vs940,
    ...defaultFacetOption,
    value: 'aaeeee7f-7ced-4b30-8f59-cb645e510618',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VS940', de: 'VS940', fr: 'VS940', nl: 'VS940' }
        }
      ],
      sortIndex: 271,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vsm,
    ...defaultFacetOption,
    value: '065f4d1a-5890-493e-847c-80e26d065027',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VSM' }
        }
      ],
      sortIndex: 272,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vx70,
    ...defaultFacetOption,
    value: '4881179a-a072-452f-b551-1130c2a411ff',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VX70' }
        }
      ],
      sortIndex: 273,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vx72,
    ...defaultFacetOption,
    value: '84ce2b53-81b6-480d-acbc-39bbd29d29d8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VX72' }
        }
      ],
      sortIndex: 274,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vx80,
    ...defaultFacetOption,
    value: '09b95f2b-03e3-4adf-a60a-351b74b96902',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VX80' }
        }
      ],
      sortIndex: 275,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Vx82,
    ...defaultFacetOption,
    value: '547ce13b-e6af-4b8a-a99a-ab48a541ec80',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VX82' }
        }
      ],
      sortIndex: 276,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Y727,
    ...defaultFacetOption,
    value: '934bd134-458f-4eed-b0cc-63dfa2bdba81',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Y727' }
        }
      ],
      sortIndex: 277,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Y767,
    ...defaultFacetOption,
    value: '77772412-79df-4a83-915d-829ddfe1d2cd',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Y767' }
        }
      ],
      sortIndex: 278,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.Ymd3,
    ...defaultFacetOption,
    value: '25c51006-f539-47db-a35f-e617eb981f28',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'YMD3' }
        }
      ],
      sortIndex: 279,
      seoPath: ''
    }
  }
];

export const modelIdFacet: Facet<
  ModelIdFacetOptionKey,
  FacetOption<ModelIdFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ModelId,
  attributeTypeCode: 'ModelId',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: modelIdFacetOptions
};
