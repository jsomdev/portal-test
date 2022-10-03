import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ModelFacetOptionKey {
  _12jAirAtomizingAirCaps = '_12jAirAtomizingAirCaps',
  _12jAirAtomizingAssemblies = '_12jAirAtomizingAssemblies',
  _12jAirAtomizingBodies = '_12jAirAtomizingBodies',
  _12jAirAtomizingFluidCaps = '_12jAirAtomizingFluidCaps',
  _12jAirAtomizingSetups = '_12jAirAtomizingSetups',
  _14j18jAirAtomizingAirCaps = '_14j18jAirAtomizingAirCaps',
  _14j18jAirAtomizingAssemblies = '_14j18jAirAtomizingAssemblies',
  _14j18jAirAtomizingBodies = '_14j18jAirAtomizingBodies',
  _14j18jAirAtomizingFluidCaps = '_14j18jAirAtomizingFluidCaps',
  _14j18jAirAtomizingSetups = '_14j18jAirAtomizingSetups',
  _18jjAirAtomizingAirCaps = '_18jjAirAtomizingAirCaps',
  _18jjAirAtomizingAssemblies = '_18jjAirAtomizingAssemblies',
  _18jjAirAtomizingBodies = '_18jjAirAtomizingBodies',
  _18jjAirAtomizingFluidCaps = '_18jjAirAtomizingFluidCaps',
  _18jjAirAtomizingSetups = '_18jjAirAtomizingSetups',
  _1jAirAtomizingAirCaps = '_1jAirAtomizingAirCaps',
  _1jAirAtomizingAssemblies = '_1jAirAtomizingAssemblies',
  _1jAirAtomizingBodies = '_1jAirAtomizingBodies',
  _1jAirAtomizingFluidCaps = '_1jAirAtomizingFluidCaps',
  _1jAirAtomizingSetups = '_1jAirAtomizingSetups',
  Aa090TankWasher = 'Aa090TankWasher',
  Aa190TankWasher = 'Aa190TankWasher',
  AdjustableBallFittings36275 = 'AdjustableBallFittings36275',
  AirActuatedAirAtomizing1053612j = 'AirActuatedAirAtomizing1053612j',
  AirActuatedAirAtomizing4966018jjau = 'AirActuatedAirAtomizing4966018jjau',
  AirActuatedAirAtomizing608314jau = 'AirActuatedAirAtomizing608314jau',
  AirActuatedAirAtomizing14jau = 'AirActuatedAirAtomizing14jau',
  AirActuatedAirAtomizingVx82 = 'AirActuatedAirAtomizingVx82',
  AirActuatedAirAtomizing1769018jjau = 'AirActuatedAirAtomizing1769018jjau',
  AirActuatedAirAtomizing731014jau = 'AirActuatedAirAtomizing731014jau',
  AirActuatedAirAtomizing7210018jjau = 'AirActuatedAirAtomizing7210018jjau',
  AirActuatedAirAtomizing621814jau = 'AirActuatedAirAtomizing621814jau',
  AirActuatedAirAtomizing1053514j = 'AirActuatedAirAtomizing1053514j',
  AirActuatedAirAtomizing1470018jjau = 'AirActuatedAirAtomizing1470018jjau',
  AirActuatedAirAtomizing14vmau = 'AirActuatedAirAtomizing14vmau',
  AirActuatedAirAtomizing1686018jjau = 'AirActuatedAirAtomizing1686018jjau',
  AirActuatedAirAtomizing14jaumco = 'AirActuatedAirAtomizing14jaumco',
  AirActuatedAirAtomizing1688318jjau = 'AirActuatedAirAtomizing1688318jjau',
  AirActuatedAirAtomizing3849918jjau = 'AirActuatedAirAtomizing3849918jjau',
  AirActuatedAirAtomizing14jaupm = 'AirActuatedAirAtomizing14jaupm',
  AirActuatedAirAtomizingVx80 = 'AirActuatedAirAtomizingVx80',
  AirActuatedAirAtomizingVx72 = 'AirActuatedAirAtomizingVx72',
  AirActuatedAirAtomizing18vau = 'AirActuatedAirAtomizing18vau',
  AirActuatedAirAtomizingVx70 = 'AirActuatedAirAtomizingVx70',
  AirActuatedAirAtomizing14jauco = 'AirActuatedAirAtomizing14jauco',
  AirActuatedAirAtomizing1088014jau = 'AirActuatedAirAtomizing1088014jau',
  AirActuatedAirAtomizing1933014jaupm = 'AirActuatedAirAtomizing1933014jaupm',
  AirActuatedAirAtomizing18jjau = 'AirActuatedAirAtomizing18jjau',
  AirActuatedAirAtomizing18jjaumco = 'AirActuatedAirAtomizing18jjaumco',
  AirActuatedAirAtomizing1467518jjau = 'AirActuatedAirAtomizing1467518jjau',
  AirActuatedAirAtomizingD55500Jau = 'AirActuatedAirAtomizingD55500Jau',
  AirActuatedAirAtomizing1324214jau = 'AirActuatedAirAtomizing1324214jau',
  AirActuatedAirAtomizing14jaupmco = 'AirActuatedAirAtomizing14jaupmco',
  AirActuatedHydraulicAa22auhSs11024 = 'AirActuatedHydraulicAa22auhSs11024',
  AirActuatedHydraulicAa24aua8395 = 'AirActuatedHydraulicAa24aua8395',
  AirActuatedHydraulicD55500Jauh0 = 'AirActuatedHydraulicD55500Jauh0',
  AirActuatedHydraulicAa24aua20190 = 'AirActuatedHydraulicAa24aua20190',
  AirActuatedHydraulicAa24aua8980 = 'AirActuatedHydraulicAa24aua8980',
  AirActuatedHydraulicAa24aua = 'AirActuatedHydraulicAa24aua',
  AirActuatedHydraulicD55500Jauh1 = 'AirActuatedHydraulicD55500Jauh1',
  AirActuatedHydraulicAa22auhSs14799 = 'AirActuatedHydraulicAa22auhSs14799',
  AirActuatedHydraulicAa22auh = 'AirActuatedHydraulicAa22auh',
  AirActuatedHydraulic14jauh = 'AirActuatedHydraulic14jauh',
  AirActuatedHydraulic18jjauh = 'AirActuatedHydraulic18jjauh',
  AirActuatedHydraulicAa22auh7676 = 'AirActuatedHydraulicAa22auh7676',
  SprayHollowCone8686 = 'SprayHollowCone8686',
  ThrottlingAndPressureReliefRegulatingValves8460 = 'ThrottlingAndPressureReliefRegulatingValves8460',
  LargeFreePassageFullConeRRrRf = 'LargeFreePassageFullConeRRrRf',
  ElectricallyActuatedAirAtomizingAa29jauco = 'ElectricallyActuatedAirAtomizingAa29jauco',
  ElectricallyActuatedAirAtomizingAa28jjau49815 = 'ElectricallyActuatedAirAtomizingAa28jjau49815',
  ElectricallyActuatedAirAtomizingAa10000jau10 = 'ElectricallyActuatedAirAtomizingAa10000jau10',
  ElectricallyActuatedAirAtomizingAa10000jjau = 'ElectricallyActuatedAirAtomizingAa10000jjau',
  ElectricallyActuatedHydraulicAa26auh = 'ElectricallyActuatedHydraulicAa26auh',
  ElectricallyActuatedHydraulicAa250auh = 'ElectricallyActuatedHydraulicAa250auh',
  NarrowAngleDeflectedFlatSprayP = 'NarrowAngleDeflectedFlatSprayP',
  WideAngleDeflectedFlatSprayTek = 'WideAngleDeflectedFlatSprayTek',
  WideAngleDeflectedFlatSprayK = 'WideAngleDeflectedFlatSprayK',
  TankjetD41800 = 'TankjetD41800',
  TankjetD41892 = 'TankjetD41892',
  MultiOrificeHydraulicFineSprayFf = 'MultiOrificeHydraulicFineSprayFf',
  MultiOrificeHydraulicFineSpray7n = 'MultiOrificeHydraulicFineSpray7n',
  MultiOrificeHydraulicFineSpray7g = 'MultiOrificeHydraulicFineSpray7g',
  NarrowAngleFullConeH15 = 'NarrowAngleFullConeH15',
  NarrowAngleFullConeG15Gg15 = 'NarrowAngleFullConeG15Gg15',
  NarrowAngleFullConeHh30 = 'NarrowAngleFullConeHh30',
  NarrowAngleFullConeG30Gg30 = 'NarrowAngleFullConeG30Gg30',
  StandardAngleFullConeHf = 'StandardAngleFullConeHf',
  LargeFreePassageFullConeHmfpHhmfp = 'LargeFreePassageFullConeHmfpHhmfp',
  StandardAngleFullConeHHh = 'StandardAngleFullConeHHh',
  SquareOvalVanelessSprayFullConeGVlGgVl = 'SquareOvalVanelessSprayFullConeGVlGgVl',
  StandardAngleFullConeDHh = 'StandardAngleFullConeDHh',
  WideAngleFullConeDHh = 'WideAngleFullConeDHh',
  StandardAngleFullConeHhKy = 'StandardAngleFullConeHhKy',
  StandardAngleFullConeGGg = 'StandardAngleFullConeGGg',
  StandardAngleFullConeGaGga = 'StandardAngleFullConeGaGga',
  SquareOvalVanelessSprayFullConeGanvGganv = 'SquareOvalVanelessSprayFullConeGanvGganv',
  WideAngleFullConeGaWGgaW = 'WideAngleFullConeGaWGgaW',
  SquareOvalVanelessSprayFullConeHSqHhSq = 'SquareOvalVanelessSprayFullConeHSqHhSq',
  SquareOvalVanelessSprayFullConeGSqGgSq = 'SquareOvalVanelessSprayFullConeGSqGgSq',
  StandardAngleFullConeHd = 'StandardAngleFullConeHd',
  StandardAngleFullConeGdGgd = 'StandardAngleFullConeGdGgd',
  WideAngleFullConeHWHhW = 'WideAngleFullConeHWHhW',
  WideAngleFullConeGWGgW = 'WideAngleFullConeGWGgW',
  SquareOvalVanelessSprayFullConeHWsqHhWsq = 'SquareOvalVanelessSprayFullConeHWsqHhWsq',
  HighPressureGunjetSprayGunsAa80 = 'HighPressureGunjetSprayGunsAa80',
  HighPressureGunjetSprayGunsAa60 = 'HighPressureGunjetSprayGunsAa60',
  HighPressureGunjetSprayGunsAa70 = 'HighPressureGunjetSprayGunsAa70',
  HighPressureGunjetSprayGunsPw4000a = 'HighPressureGunjetSprayGunsPw4000a',
  HighPressureGunjetSprayGunsAa30a = 'HighPressureGunjetSprayGunsAa30a',
  HighPressureGunjetSprayGunsPw4000as = 'HighPressureGunjetSprayGunsPw4000as',
  LowPressureGunjetSprayGunsCu150a = 'LowPressureGunjetSprayGunsCu150a',
  LowPressureGunjetSprayGunsAa30l = 'LowPressureGunjetSprayGunsAa30l',
  LowPressureGunjetSprayGunsAa43lc = 'LowPressureGunjetSprayGunsAa43lc',
  LowPressureGunjetSprayGunsAa3020940 = 'LowPressureGunjetSprayGunsAa3020940',
  LowPressureGunjetSprayGuns2362430l = 'LowPressureGunjetSprayGuns2362430l',
  LowPressureGunjetSprayGunsAa6021580 = 'LowPressureGunjetSprayGunsAa6021580',
  MediumPressureGunjetSprayGunsAa23l = 'MediumPressureGunjetSprayGunsAa23l',
  MediumPressureGunjetSprayGunsAa23h = 'MediumPressureGunjetSprayGunsAa23h',
  MediumPressureGunjetSprayGuns3653360 = 'MediumPressureGunjetSprayGuns3653360',
  MediumPressureGunjetSprayGunsAa23l45885 = 'MediumPressureGunjetSprayGunsAa23l45885',
  MediumPressureGunjetSprayGunsAa43hc = 'MediumPressureGunjetSprayGunsAa43hc',
  HighImpactSolidjetD55606 = 'HighImpactSolidjetD55606',
  SingleOrificeHydraulicFineSprayLnLnn = 'SingleOrificeHydraulicFineSprayLnLnn',
  SingleOrificeHydraulicFineSprayLndLnnd = 'SingleOrificeHydraulicFineSprayLndLnnd',
  SingleOrificeHydraulicFineSprayNNn = 'SingleOrificeHydraulicFineSprayNNn',
  SingleOrificeHydraulicFineSprayM = 'SingleOrificeHydraulicFineSprayM',
  SingleOrificeHydraulicFineSprayNW = 'SingleOrificeHydraulicFineSprayNW',
  StrainersAa124sc = 'StrainersAa124sc',
  StrainersAa430ml = 'StrainersAa430ml',
  StrainersAa122 = 'StrainersAa122',
  StrainersAa430mlsc = 'StrainersAa430mlsc',
  StrainersAa124a = 'StrainersAa124a',
  StrainersAa122ml = 'StrainersAa122ml',
  StrainersTwd = 'StrainersTwd',
  StrainersAa124asc = 'StrainersAa124asc',
  StrainersAa124ml = 'StrainersAa124ml',
  StrainersAa124 = 'StrainersAa124',
  LowPressureGunjetSprayGuns6590 = 'LowPressureGunjetSprayGuns6590',
  LowPressureGunjetSprayGuns4688 = 'LowPressureGunjetSprayGuns4688',
  LowPressureGunjetSprayGuns6466 = 'LowPressureGunjetSprayGuns6466',
  LowPressureGunjetSprayGunsAa36 = 'LowPressureGunjetSprayGunsAa36',
  LowPressureGunjetSprayGuns6104 = 'LowPressureGunjetSprayGuns6104',
  MediumPressureGunjetSprayGunsAa31 = 'MediumPressureGunjetSprayGunsAa31',
  LowPressureGunjetSprayGuns236233114f = 'LowPressureGunjetSprayGuns236233114f',
  ForTanksUpTo6MD41990Large = 'ForTanksUpTo6MD41990Large',
  ForTanksUpTo6MD41990Small = 'ForTanksUpTo6MD41990Small',
  PromaxQuickjetQuickConnectQmvv = 'PromaxQuickjetQuickConnectQmvv',
  QuickFloodjetQuickConnectQstk = 'QuickFloodjetQuickConnectQstk',
  MiniQuickVeejetFlatSprayQuickConnectQsvv = 'MiniQuickVeejetFlatSprayQuickConnectQsvv',
  MiniQuickVeejetSolidStreamQuickConnectQsvv = 'MiniQuickVeejetSolidStreamQuickConnectQsvv',
  ThrottlingAndPressureReliefRegulatingValves6815 = 'ThrottlingAndPressureReliefRegulatingValves6815',
  ThrottlingAndPressureReliefRegulatingValves6815g = 'ThrottlingAndPressureReliefRegulatingValves6815g',
  ThrottlingAndPressureReliefRegulatingValvesAa110 = 'ThrottlingAndPressureReliefRegulatingValvesAa110',
  ThrottlingAndPressureReliefRegulatingValves23120a = 'ThrottlingAndPressureReliefRegulatingValves23120a',
  ThrottlingAndPressureReliefRegulatingValves23120 = 'ThrottlingAndPressureReliefRegulatingValves23120',
  PromaxQuickFulljetQuickConnectQpha = 'PromaxQuickFulljetQuickConnectQpha',
  PromaxQuickFulljetQuickConnectQphaW = 'PromaxQuickFulljetQuickConnectQphaW',
  PromaxQuickjetQuickConnectQpta = 'PromaxQuickjetQuickConnectQpta',
  PromaxQuickjetQuickConnectQppaQppm = 'PromaxQuickjetQuickConnectQppaQppm',
  ElectricallyActuatedHydraulicAa10000auh104210 = 'ElectricallyActuatedHydraulicAa10000auh104210',
  ElectricallyActuatedHydraulicAa10000auh03Z1 = 'ElectricallyActuatedHydraulicAa10000auh03Z1',
  ElectricallyActuatedHydraulicAa10000auh7244014 = 'ElectricallyActuatedHydraulicAa10000auh7244014',
  ElectricallyActuatedHydraulicAa10000auh03 = 'ElectricallyActuatedHydraulicAa10000auh03',
  ElectricallyActuatedHydraulicAa10000auh10 = 'ElectricallyActuatedHydraulicAa10000auh10',
  ElectricallyActuatedHydraulicAa10000auh104214 = 'ElectricallyActuatedHydraulicAa10000auh104214',
  ElectricallyActuatedHydraulicAa10000auh104215 = 'ElectricallyActuatedHydraulicAa10000auh104215',
  ElectricallyActuatedHydraulicAa10000auh0050 = 'ElectricallyActuatedHydraulicAa10000auh0050',
  QmjAirAtomizingAirCaps = 'QmjAirAtomizingAirCaps',
  QmjAirAtomizingAssemblies = 'QmjAirAtomizingAssemblies',
  QmjAirAtomizingBodies = 'QmjAirAtomizingBodies',
  QmjAirAtomizingFluidCaps = 'QmjAirAtomizingFluidCaps',
  QmjAirAtomizingSetups = 'QmjAirAtomizingSetups',
  QuickFloodjetQuickConnectQtka = 'QuickFloodjetQuickConnectQtka',
  QuickFulljetQuickConnectQga15Qlga15 = 'QuickFulljetQuickConnectQga15Qlga15',
  QuickFulljetQuickConnectQga30Qlga30 = 'QuickFulljetQuickConnectQga30Qlga30',
  QuickFulljetQuickConnectQhaQlha = 'QuickFulljetQuickConnectQhaQlha',
  QuickFulljetQuickConnectQgaQlga = 'QuickFulljetQuickConnectQgaQlga',
  QuickFulljetQuickConnectQhaWQlhaW = 'QuickFulljetQuickConnectQhaWQlhaW',
  QuickFulljetQuickConnectQgaWQlgaW = 'QuickFulljetQuickConnectQgaWQlgaW',
  QuickVeejetFlatSprayQuickConnectQuaQluaQvva = 'QuickVeejetFlatSprayQuickConnectQuaQluaQvva',
  QuickVeejetSolidStreamQuickConnectQuaQluaQvva = 'QuickVeejetSolidStreamQuickConnectQuaQluaQvva',
  QuickjetQuickConnectNozzleBodiesQjaQjja = 'QuickjetQuickConnectNozzleBodiesQjaQjja',
  QuickjetQuickConnectNozzleBodiesQjlaQjjla = 'QuickjetQuickConnectNozzleBodiesQjlaQjjla',
  QuickjetQuickConnectNozzleBodiesQjjs = 'QuickjetQuickConnectNozzleBodiesQjjs',
  TankjetD27500 = 'TankjetD27500',
  LargeFreePassageFullConeHhsjx = 'LargeFreePassageFullConeHhsjx',
  LargeFreePassageFullConeHhsj = 'LargeFreePassageFullConeHhsj',
  LargeFreePassageHollowConeBsj = 'LargeFreePassageHollowConeBsj',
  SplitEyeletConnectors7521 = 'SplitEyeletConnectors7521',
  SplitEyeletConnectors8370 = 'SplitEyeletConnectors8370',
  SplitEyeletConnectors15475 = 'SplitEyeletConnectors15475',
  ForTanksUpTo14MAa190 = 'ForTanksUpTo14MAa190',
  TankjetCleanup = 'TankjetCleanup',
  ForTanksUpTo45FtTj78m = 'ForTanksUpTo45FtTj78m',
  ForTanksUpTo10FtTj9A = 'ForTanksUpTo10FtTj9A',
  ForTanksUpTo20FtD40159 = 'ForTanksUpTo20FtD40159',
  ForTanksUpTo20FtD41800e = 'ForTanksUpTo20FtD41800e',
  ForTanksUpTo20FtD26984 = 'ForTanksUpTo20FtD26984',
  ForTanksUpTo5Ft21400a = 'ForTanksUpTo5Ft21400a',
  ForTanksUpTo5FtD26564 = 'ForTanksUpTo5FtD26564',
  ForTanksUpTo5Ft30473 = 'ForTanksUpTo5Ft30473',
  ForTanksUpTo10FtD41892 = 'ForTanksUpTo10FtD41892',
  ForTanksUpTo5Ft23240 = 'ForTanksUpTo5Ft23240',
  ForTanksUpTo10Ft18250a = 'ForTanksUpTo10Ft18250a',
  ForTanksUpTo20FtTj9BTj9C = 'ForTanksUpTo20FtTj9BTj9C',
  ForTanksUpTo20Ft2850028500R = 'ForTanksUpTo20Ft2850028500R',
  ForTanksUpTo20FtD41990 = 'ForTanksUpTo20FtD41990',
  ForTanksUpTo45Ft2750027500R = 'ForTanksUpTo45Ft2750027500R',
  ForTanksUpTo20Ft2750027500R = 'ForTanksUpTo20Ft2750027500R',
  ForTanksUpTo10Ft2750027500R = 'ForTanksUpTo10Ft2750027500R',
  ForTanksUpTo10FtD41990 = 'ForTanksUpTo10FtD41990',
  ForTanksUpTo20FtTj14 = 'ForTanksUpTo20FtTj14',
  ForTanksUpTo20FtTj19 = 'ForTanksUpTo20FtTj19',
  ForTanksUpTo100FtTj360 = 'ForTanksUpTo100FtTj360',
  ForTanksUpTo100FtTj180 = 'ForTanksUpTo100FtTj180',
  ForTanksUpTo45FtTj65Tj65ht = 'ForTanksUpTo45FtTj65Tj65ht',
  ForTanksUpTo45FtTj75Tj75h = 'ForTanksUpTo45FtTj75Tj75h',
  ForTanksUpTo100FtTj80Tj80h = 'ForTanksUpTo100FtTj80Tj80h',
  ForTanksUpTo45FtTj78Tj78d = 'ForTanksUpTo45FtTj78Tj78d',
  ForTanksUpTo45FtTj16 = 'ForTanksUpTo45FtTj16',
  ForTanksUpTo45FtYmd3 = 'ForTanksUpTo45FtYmd3',
  ForTanksUpTo100FtAa290 = 'ForTanksUpTo100FtAa290',
  ForTanksUpTo45FtAa190 = 'ForTanksUpTo45FtAa190',
  ForTanksUpTo20FtAa090 = 'ForTanksUpTo20FtAa090',
  ForTanksUpTo5FtVsm = 'ForTanksUpTo5FtVsm',
  ForTanksUpTo20Ft12900 = 'ForTanksUpTo20Ft12900',
  ForTanksUpTo10Ft63536353Mfp = 'ForTanksUpTo10Ft63536353Mfp',
  ForTanksUpTo20Ft63225632253a = 'ForTanksUpTo20Ft63225632253a',
  ThrottlingAndPressureReliefRegulatingValves23520 = 'ThrottlingAndPressureReliefRegulatingValves23520',
  LowPressureGunjetSprayGuns22650Pp = 'LowPressureGunjetSprayGuns22650Pp',
  UltraHighPressureFlatSprayFs013Fs020 = 'UltraHighPressureFlatSprayFs013Fs020',
  UltraHighPressureNozzleBodies5883358834 = 'UltraHighPressureNozzleBodies5883358834',
  UltraHighPressureSolidStreamVs940 = 'UltraHighPressureSolidStreamVs940',
  UltraHighPressureSolidStreamVs625 = 'UltraHighPressureSolidStreamVs625',
  UltraHighPressureSolidStreamVs010 = 'UltraHighPressureSolidStreamVs010',
  UltraHighPressureSolidStreamVs020 = 'UltraHighPressureSolidStreamVs020',
  UltraHighPressureSolidStreamVs051 = 'UltraHighPressureSolidStreamVs051',
  UnijetFlatSprayTk = 'UnijetFlatSprayTk',
  UnijetFlatSprayEg = 'UnijetFlatSprayEg',
  UnijetFlatSprayTpu = 'UnijetFlatSprayTpu',
  UnijetFlatSpray13802 = 'UnijetFlatSpray13802',
  UnijetFullConeTg = 'UnijetFullConeTg',
  UnijetFullConeD = 'UnijetFullConeD',
  UnijetFullConeTgSq = 'UnijetFullConeTgSq',
  UnijetFullConeTgW = 'UnijetFullConeTgW',
  UnijetFullConeThW = 'UnijetFullConeThW',
  UnijetHollowConeTx = 'UnijetHollowConeTx',
  UnijetHollowConeD = 'UnijetHollowConeD',
  UnijetHollowConeTn = 'UnijetHollowConeTn',
  UnijetHollowConeTnSstc = 'UnijetHollowConeTnSstc',
  UnijetHollowConeTW = 'UnijetHollowConeTW',
  UnijetNozzleBodiesTTt = 'UnijetNozzleBodiesTTt',
  UnijetNozzleBodies11430 = 'UnijetNozzleBodies11430',
  UnijetSolidStreamEg = 'UnijetSolidStreamEg',
  UnijetSolidStreamTpu = 'UnijetSolidStreamTpu',
  VaaVauAirAtomizingAirCaps = 'VaaVauAirAtomizingAirCaps',
  VaaVauAirAtomizingAssemblies = 'VaaVauAirAtomizingAssemblies',
  VaaVauAirAtomizingBodies = 'VaaVauAirAtomizingBodies',
  VaaVauAirAtomizingFluidCaps = 'VaaVauAirAtomizingFluidCaps',
  VaaVauAirAtomizingSetups = 'VaaVauAirAtomizingSetups',
  StandardFlatSprayHVvHDt = 'StandardFlatSprayHVvHDt',
  StandardFlatSprayHVvl = 'StandardFlatSprayHVvl',
  StandardFlatSprayHUHDu = 'StandardFlatSprayHUHDu',
  StandardFlatSprayU = 'StandardFlatSprayU',
  StandardSolidStreamU = 'StandardSolidStreamU',
  StandardSolidStreamHUHDu = 'StandardSolidStreamHUHDu',
  VmauAirAtomizingAirCaps = 'VmauAirAtomizingAirCaps',
  VmauAirAtomizingAssemblies = 'VmauAirAtomizingAssemblies',
  VmauAirAtomizingBodies = 'VmauAirAtomizingBodies',
  VmauAirAtomizingFluidCaps = 'VmauAirAtomizingFluidCaps',
  VmauAirAtomizingSetups = 'VmauAirAtomizingSetups',
  HighImpactFlatSprayQcimeg = 'HighImpactFlatSprayQcimeg',
  HighImpactFlatSprayImeg = 'HighImpactFlatSprayImeg',
  HighImpactFlatSprayMegWeg = 'HighImpactFlatSprayMegWeg',
  HighImpactFlatSprayQcmeg = 'HighImpactFlatSprayQcmeg',
  HighImpactFlatSprayMegSstc = 'HighImpactFlatSprayMegSstc',
  HighImpactSolidStreamMegWeg = 'HighImpactSolidStreamMegWeg',
  HighImpactSolidStreamQcmeg = 'HighImpactSolidStreamQcmeg',
  HighImpactSolidStreamMegSstc = 'HighImpactSolidStreamMegSstc',
  StandardAngleHollowConeAxBx = 'StandardAngleHollowConeAxBx',
  StandardAngleHollowConeCf = 'StandardAngleHollowConeCf',
  StandardAngleHollowConeD = 'StandardAngleHollowConeD',
  StandardAngleHollowConeCx = 'StandardAngleHollowConeCx',
  StandardAngleHollowConeCrc = 'StandardAngleHollowConeCrc',
  WideAngleHollowConeE = 'WideAngleHollowConeE',
  SprayHollowConeBd = 'SprayHollowConeBd',
  SprayHollowConeBdm = 'SprayHollowConeBdm',
  SprayHollowConeBa = 'SprayHollowConeBa',
  StandardAngleHollowConeApLapLbp = 'StandardAngleHollowConeApLapLbp',
  WideAngleHollowConeAxWBxW = 'WideAngleHollowConeAxWBxW',
  SprayHollowConeBdW = 'SprayHollowConeBdW',
  WideAngleHollowConeApWLapWLbpW = 'WideAngleHollowConeApWLapWLbpW',
  FlatFanY767 = 'FlatFanY767',
  FlatFanAa727 = 'FlatFanAa727',
  FlatFanY727 = 'FlatFanY727',
  FlatFanDaa727 = 'FlatFanDaa727',
  RoundSprayAa707 = 'RoundSprayAa707'
}

export const productModelFacetOptions: FacetOption<ModelFacetOptionKey>[] = [
  {
    key: ModelFacetOptionKey._12jAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '571616eb-4946-4666-8fe1-04bc8a1c87cf',
    value: '1/2J Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/2J Air Atomizing Air Caps (1/2J Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 0,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._12jAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'c6f1526a-e14a-4297-9d95-497059c41495',
    value: '1/2J Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/2J Air Atomizing Assemblies (1/2J Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 1,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._12jAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'aeb7e661-8267-46e6-a58b-b66d4c762479',
    value: '1/2J Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/2J Air Atomizing Bodies (1/2J Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 2,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._12jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '81523c04-13e6-453a-9d55-ad2c18b734fe',
    value: '1/2J Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/2J Air Atomizing Fluid Caps (1/2J Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 3,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._12jAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'eaf5fb8a-ac1c-4a12-a7e8-b0cbfbe7534e',
    value: '1/2J Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/2J Air Atomizing Setups (1/2J Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 4,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._14j18jAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: 'c6003f3a-51a3-405b-8753-3eae138f0de1',
    value: '1/4J, 1/8J Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/4J, 1/8J Air Atomizing Air Caps (1/4J, 1/8J Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 5,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._14j18jAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'f5abae1b-8aa0-4ae7-a16b-0b4f9ae36a24',
    value: '1/4J, 1/8J Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/4J, 1/8J Air Atomizing Assemblies (1/4J, 1/8J Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 6,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._14j18jAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'aa954dbc-3b84-4f09-ba39-54ce320d82a2',
    value: '1/4J, 1/8J Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/4J, 1/8J Air Atomizing Bodies (1/4J, 1/8J Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 7,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._14j18jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '1042cdbf-2d6d-4601-b3b8-4f2c9a749815',
    value: '1/4J, 1/8J Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/4J, 1/8J Air Atomizing Fluid Caps (1/4J, 1/8J Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 8,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._14j18jAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '4756b388-3f98-4c42-bb43-9d951851b887',
    value: '1/4J, 1/8J Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/4J, 1/8J Air Atomizing Setups (1/4J, 1/8J Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 9,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._18jjAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '89288687-b5b8-4369-84c5-33f77d095b0d',
    value: '1/8JJ Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/8JJ Air Atomizing Air Caps (1/8JJ Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 10,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._18jjAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '7eaac977-b0aa-471d-b18b-21c6d3db53aa',
    value: '1/8JJ Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/8JJ Air Atomizing Assemblies (1/8JJ Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 11,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._18jjAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: 'e68dfee9-0408-41de-b569-2fb853fe55a7',
    value: '1/8JJ Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/8JJ Air Atomizing Bodies (1/8JJ Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 12,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._18jjAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: 'ed568ca5-3ec3-420f-8835-030e13a48f76',
    value: '1/8JJ Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/8JJ Air Atomizing Fluid Caps (1/8JJ Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 13,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._18jjAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '6235a960-64e3-42ae-88a3-54eb840b0d6c',
    value: '1/8JJ Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1/8JJ Air Atomizing Setups (1/8JJ Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 14,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._1jAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '0ea7ad2a-0a27-4580-a7e2-8c8de6420eac',
    value: '1J Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1J Air Atomizing Air Caps (1J Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 15,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._1jAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'a6ab58c8-75d9-496d-9312-6aa706714a46',
    value: '1J Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1J Air Atomizing Assemblies (1J Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 16,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._1jAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '3b319c4b-557c-4bc9-9ea9-a7d43b85c721',
    value: '1J Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Bodies (1J Air Atomizing Bodies)' }
        }
      ],
      sortIndex: 17,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._1jAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '55d488c1-7050-4282-85e6-86b52a01c546',
    value: '1J Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: '1J Air Atomizing Fluid Caps (1J Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 18,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey._1jAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '6db1d2a7-d017-4e9c-bb29-4baf8157091a',
    value: '1J Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J Air Atomizing Setups (1J Air Atomizing Setups)' }
        }
      ],
      sortIndex: 19,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.Aa090TankWasher,
    ...defaultFacetOption,
    valueId: '637395be-c569-4975-9717-486444aae779',
    value: 'AA090 TANK WASHER',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA090 TANK WASHER (AA090 TANK WASHER)' }
        }
      ],
      sortIndex: 20,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.Aa190TankWasher,
    ...defaultFacetOption,
    valueId: 'a618011a-d186-4311-9ed7-28a501138e13',
    value: 'AA190 TANK WASHER',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'AA190 TANK WASHER (AA190 TANK WASHER)' }
        }
      ],
      sortIndex: 21,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AdjustableBallFittings36275,
    ...defaultFacetOption,
    valueId: '277a628d-fb0e-4e20-9256-943cfedb308d',
    value: 'Adjustable Ball Fitting',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Adjustable Ball Fitting (36275)',
            de: 'Verstellbarer Kugelverschluss (36275)',
            fr: 'Raccord \u00E0 bille r\u00E9glable (36275)',
            nl: 'Verstelbare kogelfitting (36275)'
          }
        }
      ],
      sortIndex: 22,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1053612j,
    ...defaultFacetOption,
    valueId: '1edd1a11-dfb8-4a7e-8e58-9740aa661f9b',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (10536-1/2J)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (10536-1/2J)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (10536-1/2J)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (10536-1/2J)'
          }
        }
      ],
      sortIndex: 23,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing4966018jjau,
    ...defaultFacetOption,
    valueId: '282b7f4c-f3ce-40f4-b60e-8b7e95bfcaeb',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (49660-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (49660-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (49660-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (49660-1/8JJAU)'
          }
        }
      ],
      sortIndex: 24,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing608314jau,
    ...defaultFacetOption,
    valueId: '5a886a9a-d264-4ccf-817d-8b9205a8fcc8',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (6083-1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (6083-1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (6083-1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (6083-1/4JAU)'
          }
        }
      ],
      sortIndex: 25,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14jau,
    ...defaultFacetOption,
    valueId: 'e5ceef72-9e96-49d5-919e-8250267a3a80',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4JAU)'
          }
        }
      ],
      sortIndex: 26,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizingVx82,
    ...defaultFacetOption,
    valueId: '547ce13b-e6af-4b8a-a99a-ab48a541ec80',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (VX82)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (VX82)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (VX82)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (VX82)'
          }
        }
      ],
      sortIndex: 27,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1769018jjau,
    ...defaultFacetOption,
    valueId: 'd11a18af-c127-489a-955d-ae68316678cc',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (17690-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (17690-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (17690-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (17690-1/8JJAU)'
          }
        }
      ],
      sortIndex: 28,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing731014jau,
    ...defaultFacetOption,
    valueId: '561c0ef7-16f7-42d1-ad02-9fe1791e17df',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (7310-1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (7310-1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (7310-1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (7310-1/4JAU)'
          }
        }
      ],
      sortIndex: 29,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing7210018jjau,
    ...defaultFacetOption,
    valueId: '7163b537-8e0e-4f02-8e68-98a7018d903a',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (72100-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (72100-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (72100-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (72100-1/8JJAU)'
          }
        }
      ],
      sortIndex: 30,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing621814jau,
    ...defaultFacetOption,
    valueId: '429266c2-e0b1-4156-924a-a4c571b8f378',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (6218-1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (6218-1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (6218-1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (6218-1/4JAU)'
          }
        }
      ],
      sortIndex: 31,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1053514j,
    ...defaultFacetOption,
    valueId: '938ed361-5a16-47cf-a60f-b69452dc3e60',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (10535-1/4J)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (10535-1/4J)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (10535-1/4J)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (10535-1/4J)'
          }
        }
      ],
      sortIndex: 32,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1470018jjau,
    ...defaultFacetOption,
    valueId: '25a3a05d-35bc-49ec-8ae1-ba0194d2c4b0',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (14700-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (14700-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (14700-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (14700-1/8JJAU)'
          }
        }
      ],
      sortIndex: 33,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14vmau,
    ...defaultFacetOption,
    valueId: 'd1064f32-4bcf-41a9-997b-c1fcd0f75ef7',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4VMAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4VMAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4VMAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4VMAU)'
          }
        }
      ],
      sortIndex: 34,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1686018jjau,
    ...defaultFacetOption,
    valueId: 'b5b1fc79-ed1d-448d-ab76-c73ae38ca9fe',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (16860-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (16860-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (16860-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (16860-1/8JJAU)'
          }
        }
      ],
      sortIndex: 35,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14jaumco,
    ...defaultFacetOption,
    valueId: '12708c45-f35e-4525-af0b-d9a9d8b79109',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4JAUMCO)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4JAUMCO)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4JAUMCO)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4JAUMCO)'
          }
        }
      ],
      sortIndex: 36,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1688318jjau,
    ...defaultFacetOption,
    valueId: '9abace59-ed93-4719-acf0-f054b861d7a2',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (16883-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (16883-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (16883-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (16883-1/8JJAU)'
          }
        }
      ],
      sortIndex: 37,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing3849918jjau,
    ...defaultFacetOption,
    valueId: '8b1cbbce-8ed4-4d40-bf25-f3a40a4b9c3c',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (38499-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (38499-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (38499-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (38499-1/8JJAU)'
          }
        }
      ],
      sortIndex: 38,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14jaupm,
    ...defaultFacetOption,
    valueId: '453c2f0e-eb5e-4fb4-82e0-280be8324b92',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4JAUPM)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4JAUPM)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4JAUPM)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4JAUPM)'
          }
        }
      ],
      sortIndex: 39,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizingVx80,
    ...defaultFacetOption,
    valueId: '09b95f2b-03e3-4adf-a60a-351b74b96902',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (VX80)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (VX80)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (VX80)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (VX80)'
          }
        }
      ],
      sortIndex: 40,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizingVx72,
    ...defaultFacetOption,
    valueId: '84ce2b53-81b6-480d-acbc-39bbd29d29d8',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (VX72)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (VX72)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (VX72)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (VX72)'
          }
        }
      ],
      sortIndex: 41,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing18vau,
    ...defaultFacetOption,
    valueId: '5a7ece8a-7056-4601-b33a-3be1c5200d81',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/8VAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/8VAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/8VAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/8VAU)'
          }
        }
      ],
      sortIndex: 42,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizingVx70,
    ...defaultFacetOption,
    valueId: '4881179a-a072-452f-b551-1130c2a411ff',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (VX70)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (VX70)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (VX70)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (VX70)'
          }
        }
      ],
      sortIndex: 43,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14jauco,
    ...defaultFacetOption,
    valueId: '660f2c89-3c3d-48c1-b8e9-12435a3dd9c9',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4JAUCO)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4JAUCO)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4JAUCO)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4JAUCO)'
          }
        }
      ],
      sortIndex: 44,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1088014jau,
    ...defaultFacetOption,
    valueId: 'eb12208e-945a-4b9c-ba34-1d8fac2bf2bc',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (10880-1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (10880-1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (10880-1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (10880-1/4JAU)'
          }
        }
      ],
      sortIndex: 45,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1933014jaupm,
    ...defaultFacetOption,
    valueId: '41cade1c-de60-468f-be35-4feff1671c39',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (19330-1/4JAUPM)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (19330-1/4JAUPM)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (19330-1/4JAUPM)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (19330-1/4JAUPM)'
          }
        }
      ],
      sortIndex: 46,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing18jjau,
    ...defaultFacetOption,
    valueId: '0e47ef9c-9287-4885-a5ea-4691274c09f3',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/8JJAU)'
          }
        }
      ],
      sortIndex: 47,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing18jjaumco,
    ...defaultFacetOption,
    valueId: 'fd38a845-ad00-4ece-a1ba-475116b9f3e9',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/8JJAUMCO)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/8JJAUMCO)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/8JJAUMCO)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/8JJAUMCO)'
          }
        }
      ],
      sortIndex: 48,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1467518jjau,
    ...defaultFacetOption,
    valueId: '7f8c7575-a84e-4b3b-8fff-73b1e62c32c3',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (14675-1/8JJAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (14675-1/8JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (14675-1/8JJAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (14675-1/8JJAU)'
          }
        }
      ],
      sortIndex: 49,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizingD55500Jau,
    ...defaultFacetOption,
    valueId: '09c29da1-626f-4845-a89f-64a51477e69d',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (D55500-JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (D55500-JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (D55500-JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (D55500-JAU)'
          }
        }
      ],
      sortIndex: 50,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing1324214jau,
    ...defaultFacetOption,
    valueId: '58df9ab4-f018-49e5-8ff2-f65c4a222959',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (13242-1/4JAU)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (13242-1/4JAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (13242-1/4JAU)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (13242-1/4JAU)'
          }
        }
      ],
      sortIndex: 51,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedAirAtomizing14jaupmco,
    ...defaultFacetOption,
    valueId: 'cf730fce-c57e-491e-9f36-fd8b0d6dcc04',
    value: 'Air-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle (1/4JAUPMCO)',
            de: 'Luftbet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (1/4JAUPMCO)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e par air (1/4JAUPMCO)',
            nl: 'Luchtaangedreven luchtvernevelingsmondstuk (1/4JAUPMCO)'
          }
        }
      ],
      sortIndex: 52,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa22auhSs11024,
    ...defaultFacetOption,
    valueId: 'aeb0f86d-3422-4d2e-92cc-fd9984ad5027',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA22AUH-SS-11024)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA22AUH-SS-11024)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA22AUH-SS-11024)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA22AUH-SS-11024)'
          }
        }
      ],
      sortIndex: 53,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa24aua8395,
    ...defaultFacetOption,
    valueId: '7825c33a-d5d7-4a0b-9238-73e5a667b45c',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA24AUA-8395)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA24AUA-8395)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA24AUA-8395)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA24AUA-8395)'
          }
        }
      ],
      sortIndex: 54,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicD55500Jauh0,
    ...defaultFacetOption,
    valueId: 'a6fa54fa-5a66-4d1c-9d2b-72e0087172ce',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (D55500-JAUH0)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (D55500-JAUH0)',
            fr: 'Buse hydraulique actionn\u00E9e par air (D55500-JAUH0)',
            nl: 'Hydraulisch mondstuk met luchtbediening (D55500-JAUH0)'
          }
        }
      ],
      sortIndex: 55,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa24aua20190,
    ...defaultFacetOption,
    valueId: 'abc27656-0fa4-451c-b97c-713e8f544e9a',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA24AUA-20190)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA24AUA-20190)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA24AUA-20190)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA24AUA-20190)'
          }
        }
      ],
      sortIndex: 56,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa24aua8980,
    ...defaultFacetOption,
    valueId: '1b682906-5029-4c8f-8ae4-0d49878d30ed',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA24AUA-8980)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA24AUA-8980)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA24AUA-8980)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA24AUA-8980)'
          }
        }
      ],
      sortIndex: 57,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa24aua,
    ...defaultFacetOption,
    valueId: '447b9a88-8cb6-427b-89c3-0dee2d3ced20',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA24AUA)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA24AUA)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA24AUA)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA24AUA)'
          }
        }
      ],
      sortIndex: 58,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicD55500Jauh1,
    ...defaultFacetOption,
    valueId: '23bf2f25-ddc3-442b-ae6f-33271a489d72',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (D55500-JAUH1)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (D55500-JAUH1)',
            fr: 'Buse hydraulique actionn\u00E9e par air (D55500-JAUH1)',
            nl: 'Hydraulisch mondstuk met luchtbediening (D55500-JAUH1)'
          }
        }
      ],
      sortIndex: 59,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa22auhSs14799,
    ...defaultFacetOption,
    valueId: '0cf59d3c-590e-4a6e-8fea-edf309183855',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA22AUH-SS-14799)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA22AUH-SS-14799)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA22AUH-SS-14799)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA22AUH-SS-14799)'
          }
        }
      ],
      sortIndex: 60,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa22auh,
    ...defaultFacetOption,
    valueId: '8346f5af-8243-4fc7-8e0f-c835108ebf4b',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA22AUH)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA22AUH)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA22AUH)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA22AUH)'
          }
        }
      ],
      sortIndex: 61,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulic14jauh,
    ...defaultFacetOption,
    valueId: '61dd75b1-6066-496f-8446-b80ad03911af',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (1/4JAUH)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (1/4JAUH)',
            fr: 'Buse hydraulique actionn\u00E9e par air (1/4JAUH)',
            nl: 'Hydraulisch mondstuk met luchtbediening (1/4JAUH)'
          }
        }
      ],
      sortIndex: 62,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulic18jjauh,
    ...defaultFacetOption,
    valueId: 'ecf85aba-ee61-4dd2-9647-b70666b171df',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (1/8JJAUH)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (1/8JJAUH)',
            fr: 'Buse hydraulique actionn\u00E9e par air (1/8JJAUH)',
            nl: 'Hydraulisch mondstuk met luchtbediening (1/8JJAUH)'
          }
        }
      ],
      sortIndex: 63,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.AirActuatedHydraulicAa22auh7676,
    ...defaultFacetOption,
    valueId: '0d65d0a5-b852-43de-85ae-a738775bb07e',
    value: 'Air-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle (AA22AUH-7676)',
            de: 'Druckluftbet\u00E4tigte Hydraulikd\u00FCse (AA22AUH-7676)',
            fr: 'Buse hydraulique actionn\u00E9e par air (AA22AUH-7676)',
            nl: 'Hydraulisch mondstuk met luchtbediening (AA22AUH-7676)'
          }
        }
      ],
      sortIndex: 64,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SprayHollowCone8686,
    ...defaultFacetOption,
    valueId: '4f868b52-49e2-436c-970b-c2cc22f546c4',
    value: 'DeflectoJet® Deflected Hollow Cone Nozzles - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'DeflectoJet\u00AE Deflected Hollow Cone Nozzles - Wide Angle Spray (8686)',
            de: 'DeflectoJet\u00AE Deflected Hohlkegeld\u00FCsen - Weitwinkelspray (8686)',
            fr: 'DeflectoJet\u00AE Buses \u00E0 c\u00F4ne creux d\u00E9vi\u00E9 - Spray grand angle (8686)',
            nl: 'DeflectoJet\u00AE Afgebogen Holle Conus Nozzles - Groothoek Spray (8686)'
          }
        }
      ],
      sortIndex: 65,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves8460,
    ...defaultFacetOption,
    valueId: '5d0c9ef2-9156-45b8-8f76-c5397ed3397f',
    value: 'Diaphragm-Type Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Diaphragm-Type Pressure Relief Valve (8460)',
            de: 'Membran-Druckbegrenzungsventil (8460)',
            fr: 'Soupape de surpression \u00E0 membrane (8460)',
            nl: 'Membraan-type overdrukventiel (8460)'
          }
        }
      ],
      sortIndex: 66,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LargeFreePassageFullConeRRrRf,
    ...defaultFacetOption,
    valueId: '6d14d545-1d4a-4fbd-9d48-1efdcc7895ac',
    value: 'DistriboJet® Full Cone Nozzles - Extra Large Free Passage',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'DistriboJet\u00AE Full Cone Nozzles - Extra Large Free Passage (R, RR, RF)',
            de: 'DistriboJet\u00AE Full Cone D\u00FCsen - extra gro\u00DFer freier Durchgang (R, RR, RF)',
            fr: 'DistriboJet\u00AE Full Cone Nozzles - Extra Large Free Passage (R, RR, RF)',
            nl: 'DistriboJet\u00AE Full Cone Nozzles - Extra grote vrije doorgang (R, RR, RF)'
          }
        }
      ],
      sortIndex: 67,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedAirAtomizingAa29jauco,
    ...defaultFacetOption,
    valueId: 'f1623ddd-905b-4e86-8279-3227a4721387',
    value: 'Electrically-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle (AA29JAUCO)',
            de: 'Elektrisch bet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (AA29JAUCO)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e \u00E9lectriquement (AA29JAUCO)',
            nl: 'Elektrisch bediende luchtvernevelingsmondstuk (AA29JAUCO)'
          }
        }
      ],
      sortIndex: 68,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedAirAtomizingAa28jjau49815,
    ...defaultFacetOption,
    valueId: '25e505f9-6f51-4ff7-a90a-c3ff2303bba5',
    value: 'Electrically-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle (AA28JJAU-49815)',
            de: 'Elektrisch bet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (AA28JJAU-49815)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e \u00E9lectriquement (AA28JJAU-49815)',
            nl: 'Elektrisch bediende luchtvernevelingsmondstuk (AA28JJAU-49815)'
          }
        }
      ],
      sortIndex: 69,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedAirAtomizingAa10000jau10,
    ...defaultFacetOption,
    valueId: '016f2396-0fb5-4854-bb4f-dfcba003749f',
    value: 'Electrically-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle (AA10000JAU-10)',
            de: 'Elektrisch bet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (AA10000JAU-10)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e \u00E9lectriquement (AA10000JAU-10)',
            nl: 'Elektrisch bediende luchtvernevelingsmondstuk (AA10000JAU-10)'
          }
        }
      ],
      sortIndex: 70,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedAirAtomizingAa10000jjau,
    ...defaultFacetOption,
    valueId: '166eec60-dcb2-486e-8661-e1feb804048b',
    value: 'Electrically-Actuated Air Atomizing Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle (AA10000JJAU)',
            de: 'Elektrisch bet\u00E4tigte Luftzerst\u00E4ubungsd\u00FCse (AA10000JJAU)',
            fr: 'Buse d\u2019atomisation d\u2019air actionn\u00E9e \u00E9lectriquement (AA10000JJAU)',
            nl: 'Elektrisch bediende luchtvernevelingsmondstuk (AA10000JJAU)'
          }
        }
      ],
      sortIndex: 71,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa26auh,
    ...defaultFacetOption,
    valueId: '1d932aeb-f436-4d7e-9550-25f61bec7bb7',
    value: 'Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Hydraulic Nozzle (AA26AUH)',
            de: 'Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA26AUH)',
            fr: 'Buse hydraulique \u00E0 commande \u00E9lectrique (AA26AUH)',
            nl: 'Elektrisch bediend hydraulisch mondstuk (AA26AUH)'
          }
        }
      ],
      sortIndex: 72,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa250auh,
    ...defaultFacetOption,
    valueId: 'ff515a36-2910-4d9f-bd06-19a9408ca959',
    value: 'Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Hydraulic Nozzle (AA250AUH)',
            de: 'Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA250AUH)',
            fr: 'Buse hydraulique \u00E0 commande \u00E9lectrique (AA250AUH)',
            nl: 'Elektrisch bediend hydraulisch mondstuk (AA250AUH)'
          }
        }
      ],
      sortIndex: 73,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.NarrowAngleDeflectedFlatSprayP,
    ...defaultFacetOption,
    valueId: '0650c8d8-df42-4b04-bb45-c06bf6ff01c8',
    value:
      'FlatJet® Deflected Flat Spray Nozzles - Narrow Angle Spray - High Impact',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FlatJet\u00AE Deflected Flat Spray Nozzles - Narrow Angle Spray - High Impact (P)',
            de: 'FlatJet\u00AE Deflected Flat Spray D\u00FCsen - Narrow Angle Spray - High Impact (P)',
            fr: 'Buses de pulv\u00E9risation plates d\u00E9vi\u00E9es FlatJet\u00AE - Pulv\u00E9risation \u00E0 angle \u00E9troit - Impact \u00E9lev\u00E9 (P)',
            nl: 'FlatJet\u00AE afgebogen platte sproeikoppen - narrow angle spray - high impact (P)'
          }
        }
      ],
      sortIndex: 74,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleDeflectedFlatSprayTek,
    ...defaultFacetOption,
    valueId: 'e0e3dc75-1a9a-46ec-ba9f-4ef665d62b28',
    value:
      'FloodJet® Deflected Flat Spray Nozzle Systems - Wide Angle Spray - Tapered Edge',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FloodJet\u00AE Deflected Flat Spray Nozzle Systems - Wide Angle Spray - Tapered Edge (TEK)',
            de: 'FloodJet\u00AE Deflected Flat Spray D\u00FCsensysteme - Weitwinkelspray - Konische Kante (TEK)',
            fr: 'Syst\u00E8mes de buse de pulv\u00E9risation plate d\u00E9vi\u00E9e FloodJet\u00AE - Pulv\u00E9risation grand angle - Bord conique (TEK)',
            nl: 'FloodJet\u00AE afgebogen platte sproeikopsystemen - groothoekspray - taps toelopende rand (TEK)'
          }
        }
      ],
      sortIndex: 75,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleDeflectedFlatSprayK,
    ...defaultFacetOption,
    valueId: '2582aac8-4f3a-4691-8a58-46f6318c67a4',
    value: 'FloodJet® Deflected Flat Spray Nozzles - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FloodJet\u00AE Deflected Flat Spray Nozzles - Wide Angle Spray (K)',
            de: 'FloodJet\u00AE Deflected Flat Spray D\u00FCsen - Weitwinkelspray (K)',
            fr: 'Buses de pulv\u00E9risation plates d\u00E9vi\u00E9es FloodJet\u00AE - Spray grand angle (K)',
            nl: 'FloodJet\u00AE afgebogen platte sproeikoppen - groothoekspray (K)'
          }
        }
      ],
      sortIndex: 76,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.TankjetD41800,
    ...defaultFacetOption,
    valueId: 'e76a43b2-bda9-4a9f-819c-d6d3c7d49493',
    value: 'Fluid Driven Slow Rotationg TankJet Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Fluid Driven Slow Rotationg TankJet Nozzle (D41800)',
            de: 'Langsam drehende Tankreinigungsd\u00FCse (D41800)'
          }
        }
      ],
      sortIndex: 77,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.TankjetD41892,
    ...defaultFacetOption,
    valueId: '3d020fed-43c1-4668-899c-aba5f4efd33e',
    value: 'Fluid Driven Slow Rotationg TankJet Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Fluid Driven Slow Rotationg TankJet Nozzle (D41892)',
            de: 'Langsam drehende Tankreinigung (D41892)'
          }
        }
      ],
      sortIndex: 78,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MultiOrificeHydraulicFineSprayFf,
    ...defaultFacetOption,
    valueId: '370dce2e-3fa3-461d-b6b6-3fe971f1a12d',
    value: 'FogJet® Fine Spray Nozzles - Narrow Angle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FogJet\u00AE Fine Spray Nozzles - Narrow Angle (FF)',
            de: 'FogJet\u00AE Feinspr\u00FChd\u00FCsen - Enger Winkel (FF)',
            fr: 'Buses fogJet\u00AE Fine Spray - Angle \u00E9troit (FF)',
            nl: 'FogJet\u00AE Fine Spray Nozzles - Smalle hoek (FF)'
          }
        }
      ],
      sortIndex: 79,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MultiOrificeHydraulicFineSpray7n,
    ...defaultFacetOption,
    valueId: '9b01fbf5-2571-43d8-8f0e-1ee964e8f669',
    value: 'FogJet® Wide Angle Fine Spray Nozzles - Cluster Type - Lower Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FogJet\u00AE Wide Angle Fine Spray Nozzles - Cluster Type - Lower Flow (7N)',
            de: 'FogJet\u00AE Weitwinkel-Feinspr\u00FChd\u00FCsen - Clustertyp - Geringerer Durchfluss (7N)',
            fr: 'Buses de pulv\u00E9risation fine grand angle FogJet\u00AE - Type de grappe - D\u00E9bit inf\u00E9rieur (7N)',
            nl: 'FogJet\u00AE Groothoek Fijne Sproeikoppen - Cluster Type - Lower Flow (7N)'
          }
        }
      ],
      sortIndex: 80,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MultiOrificeHydraulicFineSpray7g,
    ...defaultFacetOption,
    valueId: 'c5d7c48f-d75f-41f2-bac3-b8bb2f256f04',
    value: 'FogJet® Wide Fine Spray Nozzles - Cluster Type',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FogJet\u00AE Wide Fine Spray Nozzles - Cluster Type (7G)',
            de: 'FogJet\u00AE Wide Feinspr\u00FChd\u00FCsen - Cluster-Typ (7G)',
            fr: 'Buses de pulv\u00E9risation fine larges FogJet\u00AE - Type de cluster (7G)',
            nl: 'FogJet\u00AE Wide Fine Spray Nozzles - Cluster type (7G)'
          }
        }
      ],
      sortIndex: 81,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.NarrowAngleFullConeH15,
    ...defaultFacetOption,
    valueId: 'ecc062da-17c0-4a21-9608-083726038b04',
    value: 'FullJet® Full Cone Nozzles - 15° Spray Angle - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 Spray Angle - One-piece Design (H-15)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 15\u00B0 Spr\u00FChwinkel - Einteiliges Design (H-15)',
            fr: 'Buses FullJet\u00AE Full Cone - Angle de pulv\u00E9risation de 15 \u00B0 - Conception monobloc (H-15)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 sproeihoek - ontwerp uit \u00E9\u00E9n stuk (H-15)'
          }
        }
      ],
      sortIndex: 82,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.NarrowAngleFullConeG15Gg15,
    ...defaultFacetOption,
    valueId: 'b83ccba8-f4ad-4be3-968c-193e9cbdc275',
    value: 'FullJet® Full Cone Nozzles - 15° Spray Angle - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 Spray Angle - Removable Cap/Vane (G-15, GG-15)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 15\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (G-15, GG-15)',
            fr: 'Buses FullJet\u00AE Full Cone - Angle de pulv\u00E9risation de 15 \u00B0 - Capuchon / palette amovible (G-15, GG-15)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 Spuithoek - Verwijderbare Cap/Vane (G-15, GG-15)'
          }
        }
      ],
      sortIndex: 83,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.NarrowAngleFullConeHh30,
    ...defaultFacetOption,
    valueId: 'd2a4a723-86e9-4aca-99dd-c8c8f90acf26',
    value: 'FullJet® Full Cone Nozzles - 30° Spray Angle - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 Spray Angle - One-piece Design (HH-30)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 30\u00B0 Spr\u00FChwinkel - Einteiliges Design (HH-30)',
            fr: '\u00AE Buses Full Cone FullJet - Angle de pulv\u00E9risation de 30 \u00B0 - Conception monobloc (HH-30)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 sproeihoek - ontwerp uit \u00E9\u00E9n stuk (HH-30)'
          }
        }
      ],
      sortIndex: 84,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.NarrowAngleFullConeG30Gg30,
    ...defaultFacetOption,
    valueId: 'ae139954-8552-4bbd-a421-e28458c63d85',
    value: 'FullJet® Full Cone Nozzles - 30° Spray Angle - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 Spray Angle - Removable Cap/Vane (G-30, GG-30)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 30\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (G-30, GG-30)',
            fr: '\u00AE Buses Full Cone FullJet - Angle de pulv\u00E9risation de 30 \u00B0 - Capuchon / palette amovible (G-30, GG-30)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 Spuithoek - Verwijderbare Cap/Vane (G-30, GG-30)'
          }
        }
      ],
      sortIndex: 85,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeHf,
    ...defaultFacetOption,
    valueId: 'a7f0a9be-adbe-43dd-92e4-d19abd5738a9',
    value: 'FullJet® Full Cone Nozzles - Cast - Flanged',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Cast - Flanged (HF)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - gegossen - Flansch (HF)',
            fr: '\u00AE Buses FullJet Full Cone - Cast - \u00C0 bride (HF)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Gegoten - Flens (HF)'
          }
        }
      ],
      sortIndex: 86,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LargeFreePassageFullConeHmfpHhmfp,
    ...defaultFacetOption,
    valueId: '42cfb17c-28a2-4dd7-b6b2-69f204f6cf6b',
    value: 'FullJet® Full Cone Nozzles - Maximum Free Passage',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Maximum Free Passage (HMFP, HHMFP)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Maximale Freipassage (HMFP, HHMFP)',
            fr: '\u00AE Buses Full Cone FullJet - Passage libre maximal (HMFP, HHMFP)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Maximale vrije doorgang (HMFP, HHMFP)'
          }
        }
      ],
      sortIndex: 87,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeHHh,
    ...defaultFacetOption,
    valueId: 'a415a13a-89c6-4620-b63a-739225aa97c1',
    value: 'FullJet® Full Cone Nozzles - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - One-piece Design (H, HH)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Einteiliges Design (H, HH)',
            fr: '\u00AE Buses FullJet Full Cone - Conception monobloc (H, HH)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Ontwerp uit \u00E9\u00E9n stuk (H, HH)'
          }
        }
      ],
      sortIndex: 88,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SquareOvalVanelessSprayFullConeGVlGgVl,
    ...defaultFacetOption,
    valueId: '2ec567d1-3c63-4e5e-8a20-a570f2918808',
    value: 'FullJet® Full Cone Nozzles - Oval Spray - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Oval Spray - Removable Cap/Vane (G-VL, GG-VL)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Oval Spray - Abnehmbare Kappe/Fl\u00FCgel (G-VL, GG-VL)',
            fr: '\u00AE Buses Full Cone FullJet - Spray ovale - Capuchon/palette amovible (G-VL, GG-VL)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Oval Spray - Verwijderbare Cap/Vane (G-VL, GG-VL)'
          }
        }
      ],
      sortIndex: 89,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeDHh,
    ...defaultFacetOption,
    valueId: '494d62fe-4320-4714-98fa-ea757f9f2f89',
    value:
      'FullJet® Full Cone Nozzles - Plastic - One-piece Design - Standard Angle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Plastic - One-piece Design - Standard Angle (D-HH)'
          }
        }
      ],
      sortIndex: 90,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleFullConeDHh,
    ...defaultFacetOption,
    valueId: 'fce8966a-0773-4766-af35-b576b85a2382',
    value:
      'FullJet® Full Cone Nozzles - Plastic - One-piece Design - Wide Angle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Plastic - One-piece Design - Wide Angle (D-HH)'
          }
        }
      ],
      sortIndex: 91,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeHhKy,
    ...defaultFacetOption,
    valueId: '897332ba-4fc0-43ce-ab4d-9d3148cae675',
    value: 'FullJet® Full Cone Nozzles - PVDF',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - PVDF (HH-KY)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - PVDF (HH-KY)',
            fr: 'Buses FullJet\u00AE Full Cone - PVDF (HH-KY)',
            nl: 'FullJet\u00AE Full Cone Nozzles - PVDF (HH-KY)'
          }
        }
      ],
      sortIndex: 92,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeGGg,
    ...defaultFacetOption,
    valueId: 'c33ec757-8a10-4767-82c9-22e72f40d45d',
    value: 'FullJet® Full Cone Nozzles - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Removable Cap/Vane (G, GG)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Abnehmbare Kappe/Fl\u00FCgel (G, GG)',
            fr: '\u00AE Buses Full Cone FullJet - Capuchon/Palette amovible (G, GG)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Verwijderbare dop/schoepen (G, GG)'
          }
        }
      ],
      sortIndex: 93,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeGaGga,
    ...defaultFacetOption,
    valueId: '657255a1-a041-4722-9ab2-84c5244b89d6',
    value: 'FullJet® Full Cone Nozzles - Right Angle Type',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type (GA, GGA)',
            de: 'FullJet\u00AE Vollkegeld\u00FCsen - rechtwinkliger Typ (GA, GGA)',
            fr: '\u00AE Buses Full Cone FullJet - Type \u00E0 angle droit (GA, GGA)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Haaks type (GA, GGA)'
          }
        }
      ],
      sortIndex: 94,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SquareOvalVanelessSprayFullConeGanvGganv,
    ...defaultFacetOption,
    valueId: '8c0df8ef-2527-49b4-ad75-01bd942163c1',
    value: 'FullJet® Full Cone Nozzles - Right Angle Type - Vaneless design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Vaneless design (GANV, GGANV)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Rechtwinkliger Typ - Vaneless Design (GANV, GGANV)',
            fr: 'Buses FullJet\u00AE Full Cone - Type \u00E0 angle droit - Conception sans palettes (GANV, GGANV)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Haaks type - Vaneless ontwerp (GANV, GGANV)'
          }
        }
      ],
      sortIndex: 95,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleFullConeGaWGgaW,
    ...defaultFacetOption,
    valueId: '197ca83b-297a-4291-9d9d-04827f3e2124',
    value: 'FullJet® Full Cone Nozzles - Right Angle Type - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Wide Angle Spray (GA-W, GGA-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Rechtwinkliger Typ - Weitwinkelspray (GA-W, GGA-W)',
            fr: 'Buses FullJet\u00AE Full Cone - Type \u00E0 angle droit - Spray grand angle (GA-W, GGA-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Groothoek Spray (GA-W, GGA-W)'
          }
        }
      ],
      sortIndex: 96,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SquareOvalVanelessSprayFullConeHSqHhSq,
    ...defaultFacetOption,
    valueId: '7a1c680a-50dd-4efa-853a-749c29fdc1ae',
    value: 'FullJet® Full Cone Nozzles - Square Spray - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Square Spray - One-piece Design (H-SQ, HH-SQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Square Spray - Einteiliges Design (H-SQ, HH-SQ)',
            fr: '\u00AE Buses FullJet Full Cone - Spray carr\u00E9 - Conception monobloc (H-SQ, HH-SQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Design uit \u00E9\u00E9n stuk (H-SQ, HH-SQ)'
          }
        }
      ],
      sortIndex: 97,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SquareOvalVanelessSprayFullConeGSqGgSq,
    ...defaultFacetOption,
    valueId: '828a23a0-dba2-416a-a1c5-6ed89c7165ba',
    value: 'FullJet® Full Cone Nozzles - Square Spray - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Removable Cap/Vane (G-SQ, GG-SQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Square Spray - Abnehmbare Kappe/Fl\u00FCgel (G-SQ, GG-SQ)',
            fr: '\u00AE Buses Full Cone FullJet - Spray carr\u00E9 - Capuchon/palette amovible (G-SQ, GG-SQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Verwijderbare Cap/Vane (G-SQ, GG-SQ)'
          }
        }
      ],
      sortIndex: 98,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeHd,
    ...defaultFacetOption,
    valueId: '96b61a45-ff98-4bba-bb97-3b24152687e2',
    value: 'FullJet® Full Cone Nozzles - Wall-Mount - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Wall-Mount - One-piece Design (HD)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Wandhalterung - Einteiliges Design (HD)',
            fr: '\u00AE Buses FullJet Full Cone - Montage mural - Conception monobloc (HD)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Wandmontage - Design uit \u00E9\u00E9n stuk (HD)'
          }
        }
      ],
      sortIndex: 99,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleFullConeGdGgd,
    ...defaultFacetOption,
    valueId: 'be75b7f9-7da1-4199-a13d-83f4f9df4d9c',
    value: 'FullJet® Full Cone Nozzles - Wall-Mount - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Wall-Mount - Removable Cap/Vane (GD, GGD)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Wandhalterung - Abnehmbare Kappe/Fl\u00FCgel (GD, GGD)',
            fr: '\u00AE Buses Full Cone FullJet - Montage mural - Capuchon/palette amovible (GD, GGD)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Wandmontage - Afneembare dop/schoepen (GD, GGD)'
          }
        }
      ],
      sortIndex: 100,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleFullConeHWHhW,
    ...defaultFacetOption,
    valueId: 'c5d597e9-ad35-439b-a886-16fe84939f3a',
    value: 'FullJet® Full Cone Nozzles - Wide Angle Spray - One-piece Design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Spray - One-piece Design (H-W, HH-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkelspray - Einteiliges Design (H-W, HH-W)',
            fr: '\u00AE Buses FullJet Full Cone - Spray grand angle - Conception monobloc (H-W, HH-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek spray - Design uit \u00E9\u00E9n stuk (H-W, HH-W)'
          }
        }
      ],
      sortIndex: 101,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleFullConeGWGgW,
    ...defaultFacetOption,
    valueId: '9a9fe34e-fbbe-4fe3-b5fd-ab340f90d987',
    value: 'FullJet® Full Cone Nozzles - Wide Angle Spray - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Spray - Removable Cap/Vane (G-W, GG-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkelspray - Abnehmbare Kappe/Fl\u00FCgel (G-W, GG-W)',
            fr: 'Buses FullJet\u00AE Full Cone - Spray grand angle - Capuchon amovible / Palette (G-W, GG-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek Spray - Verwijderbare Cap/Vane (G-W, GG-W)'
          }
        }
      ],
      sortIndex: 102,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SquareOvalVanelessSprayFullConeHWsqHhWsq,
    ...defaultFacetOption,
    valueId: 'e81a4118-5d49-43cc-bf35-5f52fd0dc09d',
    value: 'FullJet® Full Cone Nozzles - Wide Angle Square Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Square Spray (H-WSQ, HH-WSQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkel-Vierkantspray (H-WSQ, HH-WSQ)',
            fr: 'Buses FullJet\u00AE Full Cone - Spray carr\u00E9 grand angle (H-WSQ, HH-WSQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek Vierkante Spray (H-WSQ, HH-WSQ)'
          }
        }
      ],
      sortIndex: 103,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsAa80,
    ...defaultFacetOption,
    valueId: 'f80a1af3-65cc-494f-8516-429cba04093f',
    value: 'GunJet® High Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun (AA80)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole (AA80)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE (AA80)',
            nl: 'GunJet\u00AE hogedrukspuitpistool (AA80)'
          }
        }
      ],
      sortIndex: 104,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsAa60,
    ...defaultFacetOption,
    valueId: 'f0e37e35-a8fa-432a-b03d-9fddfe89d250',
    value: 'GunJet® High Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun (AA60)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole (AA60)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE (AA60)',
            nl: 'GunJet\u00AE hogedrukspuitpistool (AA60)'
          }
        }
      ],
      sortIndex: 105,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsAa70,
    ...defaultFacetOption,
    valueId: 'e78b0a39-4c84-457b-8543-9833464bdf53',
    value: 'GunJet® High Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun (AA70)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole (AA70)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE (AA70)',
            nl: 'GunJet\u00AE hogedrukspuitpistool (AA70)'
          }
        }
      ],
      sortIndex: 106,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsPw4000a,
    ...defaultFacetOption,
    valueId: '4bf4b952-56e4-42cb-b2f7-fea9527502d5',
    value: 'GunJet® High Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun (PW4000A)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole (PW4000A)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE (PW4000A)',
            nl: 'GunJet\u00AE hogedrukspuitpistool (PW4000A)'
          }
        }
      ],
      sortIndex: 107,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsAa30a,
    ...defaultFacetOption,
    valueId: 'e3009c23-e1cf-4807-a7d0-fcfb26632f74',
    value: 'GunJet® High Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun (AA30A)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole (AA30A)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE (AA30A)',
            nl: 'GunJet\u00AE hogedrukspuitpistool (AA30A)'
          }
        }
      ],
      sortIndex: 108,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighPressureGunjetSprayGunsPw4000as,
    ...defaultFacetOption,
    valueId: '3dc54a53-e941-4e80-b0e2-7741f13e3efa',
    value: 'GunJet® High Pressure Spray Gun with Swivel',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun with Swivel (PW4000AS)',
            de: 'GunJet\u00AE Hochdruck-Spritzpistole mit Schwenkgelenk (PW4000AS)',
            fr: 'Pistolet de pulv\u00E9risation haute pression GunJet\u00AE avec pivot (PW4000AS)',
            nl: 'GunJet\u00AE hogedrukspuitpistool met draaibaar (PW4000AS)'
          }
        }
      ],
      sortIndex: 109,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsCu150a,
    ...defaultFacetOption,
    valueId: '7a2d08b0-e531-4caa-bd38-a54b124ddcf8',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (CU150A)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (CU150A)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (CU150A)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (CU150A)'
          }
        }
      ],
      sortIndex: 110,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsAa30l,
    ...defaultFacetOption,
    valueId: '599ceff4-2998-4c0f-aa33-9dd61e265756',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (AA30L)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (AA30L)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (AA30L)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (AA30L)'
          }
        }
      ],
      sortIndex: 111,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsAa43lc,
    ...defaultFacetOption,
    valueId: '41db17a6-6ef6-4e9d-b806-e4077fd9b739',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (AA43LC)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (AA43LC)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (AA43LC)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (AA43LC)'
          }
        }
      ],
      sortIndex: 112,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsAa3020940,
    ...defaultFacetOption,
    valueId: '82582c4b-d0b8-4154-a221-1152ad0e4960',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (AA30-20940)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (AA30-20940)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (AA30-20940)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (AA30-20940)'
          }
        }
      ],
      sortIndex: 113,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns2362430l,
    ...defaultFacetOption,
    valueId: '8fc23212-19f2-4f84-918f-007ef1aee0d2',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (23624-30L)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (23624-30L)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (23624-30L)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (23624-30L)'
          }
        }
      ],
      sortIndex: 114,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsAa6021580,
    ...defaultFacetOption,
    valueId: '280861b5-fde1-496c-b93d-041d47e944cc',
    value: 'GunJet® Low Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun (AA60-21580)',
            de: 'GunJet\u00AE Niederdruck-Spritzpistole (AA60-21580)',
            fr: 'Pistolet de pulv\u00E9risation basse pression GunJet\u00AE (AA60-21580)',
            nl: 'GunJet\u00AE lagedrukspuitpistool (AA60-21580)'
          }
        }
      ],
      sortIndex: 115,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGunsAa23l,
    ...defaultFacetOption,
    valueId: '487be0fd-26b5-4660-8ad4-3dfb02641f78',
    value: 'GunJet® Medium Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun (AA23L)',
            de: 'GunJet\u00AE Mitteldruck-Spritzpistole (AA23L)',
            fr: 'Pistolet de pulv\u00E9risation \u00E0 moyenne pression GunJet\u00AE (AA23L)',
            nl: 'GunJet\u00AE spuitpistool met gemiddelde druk (AA23L)'
          }
        }
      ],
      sortIndex: 116,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGunsAa23h,
    ...defaultFacetOption,
    valueId: '351afaf6-1bb5-4420-b199-560874ad40cb',
    value: 'GunJet® Medium Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun (AA23H)',
            de: 'GunJet\u00AE Mitteldruck-Spritzpistole (AA23H)',
            fr: 'Pistolet de pulv\u00E9risation \u00E0 moyenne pression GunJet\u00AE (AA23H)',
            nl: 'GunJet\u00AE spuitpistool met gemiddelde druk (AA23H)'
          }
        }
      ],
      sortIndex: 117,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGuns3653360,
    ...defaultFacetOption,
    valueId: '44f8a3b1-8b1d-4afc-bc07-671d240ef94f',
    value: 'GunJet® Medium Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun (36533-60)',
            de: 'GunJet\u00AE Mitteldruck-Spritzpistole (36533-60)',
            fr: 'Pistolet de pulv\u00E9risation \u00E0 moyenne pression GunJet\u00AE (36533-60)',
            nl: 'GunJet\u00AE spuitpistool met gemiddelde druk (36533-60)'
          }
        }
      ],
      sortIndex: 118,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGunsAa23l45885,
    ...defaultFacetOption,
    valueId: '0ca083c2-d887-4cdb-9c6a-ed274961af2d',
    value: 'GunJet® Medium Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun (AA23L-45885)',
            de: 'GunJet\u00AE Mitteldruck-Spritzpistole (AA23L-45885)',
            fr: 'Pistolet de pulv\u00E9risation \u00E0 moyenne pression GunJet\u00AE (AA23L-45885)',
            nl: 'GunJet\u00AE spuitpistool met gemiddelde druk (AA23L-45885)'
          }
        }
      ],
      sortIndex: 119,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGunsAa43hc,
    ...defaultFacetOption,
    valueId: 'b5b1c778-19c4-4229-a5d6-7691379f7b9e',
    value: 'GunJet® Medium Pressure Spray Gun',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun (AA43HC)',
            de: 'GunJet\u00AE Mitteldruck-Spritzpistole (AA43HC)',
            fr: 'Pistolet de pulv\u00E9risation \u00E0 moyenne pression GunJet\u00AE (AA43HC)',
            nl: 'GunJet\u00AE spuitpistool met gemiddelde druk (AA43HC)'
          }
        }
      ],
      sortIndex: 120,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactSolidjetD55606,
    ...defaultFacetOption,
    valueId: 'd7e25e1d-91dc-4cb9-b318-799f8501cfaa',
    value: 'High Impact SolidJet D55606',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Impact SolidJet D55606 (D55606)',
            de: 'SolidJet D55606 mit hoher Schlagz\u00E4higkeit (D55606)',
            fr: 'SolidJet D55606 \u00E0 fort impact (D55606)',
            nl: 'High Impact SolidJet D55606 (D55606)'
          }
        }
      ],
      sortIndex: 121,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SingleOrificeHydraulicFineSprayLnLnn,
    ...defaultFacetOption,
    valueId: 'fa134537-9f3f-4ebf-a1ec-550b4f1e6791',
    value: 'Hydraulic Fine Spray Nozzles - Integral Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Fine Spray Nozzles - Integral Strainer (LN, LNN)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Integralsieb (LN, LNN)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Cr\u00E9pine int\u00E9grale (LN, LNN)',
            nl: 'Hydraulische fijne sproeikoppen - Ge\u00EFntegreerde zeef (LN, LNN)'
          }
        }
      ],
      sortIndex: 122,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SingleOrificeHydraulicFineSprayLndLnnd,
    ...defaultFacetOption,
    valueId: '65575c53-c59a-4843-a579-2cf20256eec0',
    value: 'Hydraulic Fine Spray Nozzles - Integral Strainer - Wall Mount',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Fine Spray Nozzles - Integral Strainer - Wall Mount (LND, LNND)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Integralsieb - Wandhalterung (LND, LNND)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Cr\u00E9pine int\u00E9grale - Support mural (LND, LNND)',
            nl: 'Hydraulische fijne sproeikoppen - Ge\u00EFntegreerde zeef - Wandmontage (LND, LNND)'
          }
        }
      ],
      sortIndex: 123,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SingleOrificeHydraulicFineSprayNNn,
    ...defaultFacetOption,
    valueId: 'fa638387-96f6-46ed-aca2-16f1d52627c2',
    value: 'Hydraulic Fine Spray Nozzles - One-piece design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Fine Spray Nozzles - One-piece design (N, NN)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Einteilige Ausf\u00FChrung (N, NN)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Conception monobloc (N, NN)',
            nl: 'Hydraulische fijne sproeikoppen - ontwerp uit \u00E9\u00E9n stuk (N, NN)'
          }
        }
      ],
      sortIndex: 124,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SingleOrificeHydraulicFineSprayM,
    ...defaultFacetOption,
    valueId: '7a2c4765-8f59-468e-aad6-7b6c01683ad3',
    value: 'Hydraulic Fine Spray Nozzles - Two-piece design',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Fine Spray Nozzles - Two-piece design (M)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Zweiteilige Ausf\u00FChrung (M)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Conception en deux parties (M)',
            nl: 'Hydraulische fijne sproeikoppen - tweedelig ontwerp (M)'
          }
        }
      ],
      sortIndex: 125,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SingleOrificeHydraulicFineSprayNW,
    ...defaultFacetOption,
    valueId: 'c60533de-34b3-4414-9ba7-5b0bead0048a',
    value: 'Hydraulic Fine Spray Nozzles - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Fine Spray Nozzles - Wide Angle Spray (N-W, NN-W, LN-W, LNN-W)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Weitwinkelspray (N-W, NN-W, LN-W, LNN-W)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Spray grand angle (N-W, NN-W, LN-W, LNN-W)',
            nl: 'Hydraulische fijne sproeikoppen - Groothoekspray (N-W, NN-W, LN-W, LNN-W)'
          }
        }
      ],
      sortIndex: 126,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa124sc,
    ...defaultFacetOption,
    valueId: 'e8a2ff8b-5670-417f-bef2-5ceef21366b2',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA124SC)',
            de: 'Fl\u00FCssigsieb (AA124SC)',
            fr: 'Passoire liquide (AA124SC)',
            nl: 'Vloeistofzeef (AA124SC)'
          }
        }
      ],
      sortIndex: 127,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa430ml,
    ...defaultFacetOption,
    valueId: 'd292bd14-d559-42a2-bc03-731ac2c1604b',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA430ML)',
            de: 'Fl\u00FCssigsieb (AA430ML)',
            fr: 'Passoire liquide (AA430ML)',
            nl: 'Vloeistofzeef (AA430ML)'
          }
        }
      ],
      sortIndex: 128,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa122,
    ...defaultFacetOption,
    valueId: '44f88cdb-1c99-458d-bfaa-55b2ebd84c12',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA122)',
            de: 'Fl\u00FCssigsieb (AA122)',
            fr: 'Passoire liquide (AA122)',
            nl: 'Vloeistofzeef (AA122)'
          }
        }
      ],
      sortIndex: 129,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa430mlsc,
    ...defaultFacetOption,
    valueId: '5edf0932-f11a-4395-b49f-54eeacf2708a',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA430MLSC)',
            de: 'Fl\u00FCssigsieb (AA430MLSC)',
            fr: 'Passoire liquide (AA430MLSC)',
            nl: 'Vloeistofzeef (AA430MLSC)'
          }
        }
      ],
      sortIndex: 130,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa124a,
    ...defaultFacetOption,
    valueId: '361eb54f-dee4-4d9c-bc92-4dc88e3bbfb8',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA124A)',
            de: 'Fl\u00FCssigsieb (AA124A)',
            fr: 'Passoire liquide (AA124A)',
            nl: 'Vloeistofzeef (AA124A)'
          }
        }
      ],
      sortIndex: 131,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa122ml,
    ...defaultFacetOption,
    valueId: '03e319eb-69d0-4725-b272-3f54f1a8a66c',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA122ML)',
            de: 'Fl\u00FCssigsieb (AA122ML)',
            fr: 'Passoire liquide (AA122ML)',
            nl: 'Vloeistofzeef (AA122ML)'
          }
        }
      ],
      sortIndex: 132,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersTwd,
    ...defaultFacetOption,
    valueId: 'afc876c3-751d-40c4-b3fd-18073e6f9db3',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (TWD)',
            de: 'Fl\u00FCssigsieb (TWD)',
            fr: 'Passoire liquide (TWD)',
            nl: 'Vloeistofzeef (TWD)'
          }
        }
      ],
      sortIndex: 133,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa124asc,
    ...defaultFacetOption,
    valueId: '8352f9ef-1649-4669-bd18-32282ee02acf',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA124ASC)',
            de: 'Fl\u00FCssigsieb (AA124ASC)',
            fr: 'Passoire liquide (AA124ASC)',
            nl: 'Vloeistofzeef (AA124ASC)'
          }
        }
      ],
      sortIndex: 134,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa124ml,
    ...defaultFacetOption,
    valueId: 'eb5f68de-59ba-4d1d-aa97-8397de19bed7',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA124ML)',
            de: 'Fl\u00FCssigsieb (AA124ML)',
            fr: 'Passoire liquide (AA124ML)',
            nl: 'Vloeistofzeef (AA124ML)'
          }
        }
      ],
      sortIndex: 135,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StrainersAa124,
    ...defaultFacetOption,
    valueId: '69a9ebee-e449-4272-ba17-f3c1de80138f',
    value: 'Liquid Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Liquid Strainer (AA124)',
            de: 'Fl\u00FCssigsieb (AA124)',
            fr: 'Passoire liquide (AA124)',
            nl: 'Vloeistofzeef (AA124)'
          }
        }
      ],
      sortIndex: 136,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns6590,
    ...defaultFacetOption,
    valueId: '928bda75-63eb-40cf-bbe6-e682e96208cd',
    value: 'Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve (6590)',
            de: 'Niederdruck-Ausl\u00F6seventil (6590)',
            fr: 'Vanne de d\u00E9clenchement basse pression (6590)',
            nl: 'Lage druk trigger valve (6590)'
          }
        }
      ],
      sortIndex: 137,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns4688,
    ...defaultFacetOption,
    valueId: '6c1c31b1-c7c5-47f4-96f3-dae6f5609816',
    value: 'Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve (4688)',
            de: 'Niederdruck-Ausl\u00F6seventil (4688)',
            fr: 'Vanne de d\u00E9clenchement basse pression (4688)',
            nl: 'Lage druk trigger valve (4688)'
          }
        }
      ],
      sortIndex: 138,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns6466,
    ...defaultFacetOption,
    valueId: '1ea7789f-35b5-4c5d-81b9-b59c16f0e90f',
    value: 'Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve (6466)',
            de: 'Niederdruck-Ausl\u00F6seventil (6466)',
            fr: 'Vanne de d\u00E9clenchement basse pression (6466)',
            nl: 'Lage druk trigger valve (6466)'
          }
        }
      ],
      sortIndex: 139,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGunsAa36,
    ...defaultFacetOption,
    valueId: '2cf2e0fb-dcb5-43ca-9d66-23c516099884',
    value: 'Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve (AA36)',
            de: 'Niederdruck-Ausl\u00F6seventil (AA36)',
            fr: 'Vanne de d\u00E9clenchement basse pression (AA36)',
            nl: 'Lage druk trigger valve (AA36)'
          }
        }
      ],
      sortIndex: 140,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns6104,
    ...defaultFacetOption,
    valueId: 'b0edc6ac-91a8-40db-9845-65459ecdb9ff',
    value: 'Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve (6104)',
            de: 'Niederdruck-Ausl\u00F6seventil (6104)',
            fr: 'Vanne de d\u00E9clenchement basse pression (6104)',
            nl: 'Lage druk trigger valve (6104)'
          }
        }
      ],
      sortIndex: 141,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MediumPressureGunjetSprayGunsAa31,
    ...defaultFacetOption,
    valueId: 'a0d606ea-bce5-4cc0-86ce-ffc7755112d2',
    value: 'Medium Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Medium Pressure Trigger Valve (AA31)',
            de: 'Mitteldruck-Absperrventil (AA31)',
            fr: 'Vanne de d\u00E9clenchement de moyenne pression (AA31)',
            nl: 'Triggerklep met gemiddelde druk (AA31)'
          }
        }
      ],
      sortIndex: 142,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns236233114f,
    ...defaultFacetOption,
    valueId: '318ca923-08b3-4f0d-b19d-e594b753a800',
    value: 'MeterJet® Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'MeterJet\u00AE Low Pressure Trigger Valve (23623-31-1/4F)',
            de: 'MeterJet\u00AE Niederdruck-Ausl\u00F6seventil (23623-31-1/4F)',
            fr: 'Vanne de d\u00E9clenchement basse pression MeterJet\u00AE (23623-31-1/4F)',
            nl: 'MeterJet\u00AE lagedruk triggerklep (23623-31-1/4F)'
          }
        }
      ],
      sortIndex: 143,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo6MD41990Large,
    ...defaultFacetOption,
    valueId: '89e03562-8a80-40a4-baf6-59472b5dbd88',
    value: 'Micro ROKON Large',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Micro ROKON Large (D41990_Large)',
            de: 'Micro ROKON Gro\u00DF (D41990_Large)',
            fr: 'Micro ROKON Grand (D41990_Large)',
            nl: 'Micro ROKON Groot (D41990_Large)'
          }
        }
      ],
      sortIndex: 144,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo6MD41990Small,
    ...defaultFacetOption,
    valueId: 'a039e648-a7df-4c48-80b9-f2dad96f6102',
    value: 'Micro ROKON Small',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Micro ROKON Small (D41990_Small)',
            de: 'Micro ROKON Klein (D41990_Small)',
            fr: 'Micro ROKON Petit (D41990_Small)',
            nl: 'Micro ROKON Klein (D41990_Small)'
          }
        }
      ],
      sortIndex: 145,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.PromaxQuickjetQuickConnectQmvv,
    ...defaultFacetOption,
    valueId: '8a49c023-9195-4d83-9c76-67c168b212f5',
    value: 'Mini ProMax® Quick VeeJet® Flat Spray Nozzle Systems - Low Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini ProMax\u00AE Quick VeeJet\u00AE Flat Spray Nozzle Systems - Low Flow (QMVV)',
            de: 'Mini ProMax\u00AE Quick VeeJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Low Flow (QMVV)',
            fr: 'Syst\u00E8mes de buse de pulv\u00E9risation plate Mini ProMax\u00AE Quick VeeJet\u00AE - Faible d\u00E9bit (QMVV)',
            nl: 'Mini ProMax\u00AE Quick VeeJet\u00AE platte sproeikopsystemen - Laag debiet (QMVV)'
          }
        }
      ],
      sortIndex: 146,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFloodjetQuickConnectQstk,
    ...defaultFacetOption,
    valueId: '9349504e-9d43-44aa-83f3-608778a17b21',
    value: 'Mini Quick FloodJet® Flat Spray Nozzle Systems - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick FloodJet\u00AE Flat Spray Nozzle Systems - Wide Angle Spray (QSTK)',
            de: 'Mini Quick FloodJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Weitwinkelspray (QSTK)',
            fr: 'Mini syst\u00E8mes de buse de pulv\u00E9risation plate FloodJet\u00AE rapide - Spray grand angle (QSTK)',
            nl: 'Mini Quick FloodJet\u00AE platte sproeikopsystemen - groothoekspray (QSTK)'
          }
        }
      ],
      sortIndex: 147,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MiniQuickVeejetFlatSprayQuickConnectQsvv,
    ...defaultFacetOption,
    valueId: '4ef5d5fc-97c5-462f-9812-b3ae4d069038',
    value: 'Mini Quick VeeJet® Flat Spray Nozzle Systems - Low Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick VeeJet\u00AE Flat Spray Nozzle Systems - Low Flow (QSVV)',
            de: 'Mini Quick VeeJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Low Flow (QSVV)',
            fr: 'Mini syst\u00E8mes de buse de pulv\u00E9risation plate VeeJet\u00AE rapide - Faible d\u00E9bit (QSVV)',
            nl: 'Mini Quick VeeJet\u00AE platte sproeikopsystemen - Laag debiet (QSVV)'
          }
        }
      ],
      sortIndex: 148,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.MiniQuickVeejetSolidStreamQuickConnectQsvv,
    ...defaultFacetOption,
    valueId: 'de4845e1-e292-4eca-b62c-b4915fba0d3f',
    value: 'Mini Quick VeeJet® Solid Stream Nozzle Systems - Low Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick VeeJet\u00AE Solid Stream Nozzle Systems - Low Flow (QSVV)',
            de: 'Mini Quick VeeJet\u00AE Solid Stream D\u00FCsensysteme - Low Flow (QSVV)',
            fr: 'Mini Quick VeeJet\u00AE Solid Stream Nozzle Systems - Faible d\u00E9bit (QSVV)',
            nl: 'Mini Quick VeeJet\u00AE Solid Stream Nozzle-systemen - Laag debiet (QSVV)'
          }
        }
      ],
      sortIndex: 149,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves6815,
    ...defaultFacetOption,
    valueId: '512e8699-406e-4f74-8385-4dfcc7dc79bc',
    value: 'Piston-Type Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve (6815)',
            de: 'Kolben-Druckbegrenzungsventil (6815)',
            fr: 'Soupape de surpression de type piston (6815)',
            nl: 'Zuiger-type overdrukventiel (6815)'
          }
        }
      ],
      sortIndex: 150,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves6815g,
    ...defaultFacetOption,
    valueId: 'bd8b0e4e-6bf7-4aad-822a-3609c445aed8',
    value: 'Piston-Type Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve (6815G)',
            de: 'Kolben-Druckbegrenzungsventil (6815G)',
            fr: 'Soupape de surpression de type piston (6815G)',
            nl: 'Zuiger-type overdrukventiel (6815G)'
          }
        }
      ],
      sortIndex: 151,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValvesAa110,
    ...defaultFacetOption,
    valueId: '03745036-b778-4997-aefe-f74ba27de30c',
    value: 'Piston-Type Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve (AA110)',
            de: 'Kolben-Druckbegrenzungsventil (AA110)',
            fr: 'Soupape de surpression de type piston (AA110)',
            nl: 'Zuiger-type overdrukventiel (AA110)'
          }
        }
      ],
      sortIndex: 152,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23120a,
    ...defaultFacetOption,
    valueId: '6c118096-c6c9-4175-baad-fc41861e793f',
    value: 'Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Pressure Relief Valve (23120A)',
            de: '\u00DCberdruckventil (23120A)',
            fr: 'Soupape de surpression (23120A)',
            nl: 'Overdrukventiel (23120A)'
          }
        }
      ],
      sortIndex: 153,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23120,
    ...defaultFacetOption,
    valueId: 'ba19052e-7097-4ace-8cef-bf4af860bd50',
    value: 'Pressure Relief Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Pressure Relief Valve (23120)',
            de: '\u00DCberdruckventil (23120)',
            fr: 'Soupape de surpression (23120)',
            nl: 'Overdrukventiel (23120)'
          }
        }
      ],
      sortIndex: 154,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.PromaxQuickFulljetQuickConnectQpha,
    ...defaultFacetOption,
    valueId: '392d1869-7199-4858-8622-947ba4ea0324',
    value: 'ProMax® Quick FullJet® Quick-Connect Nozzle Systems',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect Nozzle Systems (QPHA)',
            de: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect D\u00FCsensysteme (QPHA)',
            fr: 'Syst\u00E8mes de buse ProMax\u00AE Quick FullJet\u00AE Quick-Connect (QPHA)',
            nl: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect Nozzle Systemen (QPHA)'
          }
        }
      ],
      sortIndex: 155,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.PromaxQuickFulljetQuickConnectQphaW,
    ...defaultFacetOption,
    valueId: 'a23252be-8391-4bad-9bc2-d0b5833afe97',
    value:
      'ProMax® Quick FullJet® Quick-Connect Nozzle Systems - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect Nozzle Systems - Wide Angle Spray (QPHA-W)',
            de: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect D\u00FCsensysteme - Weitwinkelspray (QPHA-W)',
            fr: 'Syst\u00E8mes de buse ProMax\u00AE Quick FullJet\u00AE Quick-Connect - Spray grand angle (QPHA-W)',
            nl: 'ProMax\u00AE Quick FullJet\u00AE Quick-Connect Nozzle Systemen - Groothoek Spray (QPHA-W)'
          }
        }
      ],
      sortIndex: 156,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.PromaxQuickjetQuickConnectQpta,
    ...defaultFacetOption,
    valueId: '4362181d-2186-4b4a-93eb-579ba3ff6033',
    value: 'ProMax® Quick VeeJet® Flat Spray Nozzle Systems - Medium Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax\u00AE Quick VeeJet\u00AE Flat Spray Nozzle Systems - Medium Flow (QPTA)',
            de: 'ProMax\u00AE Quick VeeJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Mittlerer Durchfluss (QPTA)',
            fr: 'Syst\u00E8mes de buse de pulv\u00E9risation plate ProMax\u00AE Quick VeeJet\u00AE - D\u00E9bit moyen (QPTA)',
            nl: 'ProMax\u00AE Quick VeeJet\u00AE platte sproeikopsystemen - Medium Flow (QPTA)'
          }
        }
      ],
      sortIndex: 157,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.PromaxQuickjetQuickConnectQppaQppm,
    ...defaultFacetOption,
    valueId: 'f68fd73e-92fc-4475-a0e2-e024a007f50b',
    value: 'ProMax® QuickJet® Quick-Connect Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax\u00AE QuickJet\u00AE Quick-Connect Nozzle Bodies (QPPA, QPPM)',
            de: 'ProMax\u00AE QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper (QPPA, QPPM)',
            fr: 'Corps de buse ProMax\u00AE QuickJet\u00AE Quick-Connect (QPPA, QPPM)',
            nl: 'ProMax\u00AE QuickJet\u00AE Quick-Connect nozzlebehuizingen (QPPA, QPPM)'
          }
        }
      ],
      sortIndex: 158,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104210,
    ...defaultFacetOption,
    valueId: '9c4e25fd-c14a-44a5-9a9d-e4c22e466753',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-104210)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-104210)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-104210)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-104210)'
          }
        }
      ],
      sortIndex: 159,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh03Z1,
    ...defaultFacetOption,
    valueId: '0daa6d8f-4f1e-46ab-89e6-a793685b0368',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-03-Z1)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-03-Z1)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-03-Z1)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-03-Z1)'
          }
        }
      ],
      sortIndex: 160,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh7244014,
    ...defaultFacetOption,
    valueId: '6a0db788-b7bb-4931-af31-b135542fb265',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-72440-1/4)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-72440-1/4)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-72440-1/4)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-72440-1/4)'
          }
        }
      ],
      sortIndex: 161,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh03,
    ...defaultFacetOption,
    valueId: '1f993666-280e-4282-99ad-444d08406e32',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-03)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-03)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-03)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-03)'
          }
        }
      ],
      sortIndex: 162,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh10,
    ...defaultFacetOption,
    valueId: 'dc4a0333-3efd-425f-8b3a-5d318f7dfec3',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-10)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-10)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-10)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-10)'
          }
        }
      ],
      sortIndex: 163,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104214,
    ...defaultFacetOption,
    valueId: '3d613d9f-e6f8-4b3a-8b92-358aa9947c1d',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-104214)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-104214)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-104214)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-104214)'
          }
        }
      ],
      sortIndex: 164,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104215,
    ...defaultFacetOption,
    valueId: 'df3dfdcd-3aea-42c9-abfa-24257c017a2a',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-104215)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-104215)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-104215)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-104215)'
          }
        }
      ],
      sortIndex: 165,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh0050,
    ...defaultFacetOption,
    valueId: '63257e79-c198-4fc0-a459-1ef42f5e8953',
    value: 'PulsaJet® Electrically-Actuated Hydraulic Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle (AA10000AUH-0050)',
            de: 'PulsaJet\u00AE Elektrisch bet\u00E4tigte Hydraulikd\u00FCse (AA10000AUH-0050)',
            fr: 'Buse hydraulique pulsaJet\u00AE \u00E0 commande \u00E9lectrique (AA10000AUH-0050)',
            nl: 'PulsaJet\u00AE elektrisch bediend hydraulisch mondstuk (AA10000AUH-0050)'
          }
        }
      ],
      sortIndex: 166,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QmjAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '83b59894-e165-4855-85a2-986c89dd1d88',
    value: 'QMJ Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QMJ Air Atomizing Air Caps (QMJ Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 167,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QmjAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '82f34d4f-85a9-4499-8f57-818db4e2d577',
    value: 'QMJ Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QMJ Air Atomizing Assemblies (QMJ Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 168,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QmjAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '986c36a4-b284-42cd-ac67-205a765f9257',
    value: 'QMJ Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Bodies (QMJ Air Atomizing Bodies)' }
        }
      ],
      sortIndex: 169,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QmjAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '2262907f-3139-4f00-8447-1478409243eb',
    value: 'QMJ Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QMJ Air Atomizing Fluid Caps (QMJ Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 170,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QmjAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: 'e78f7743-0a91-4f73-9925-caae4c17e5cb',
    value: 'QMJ Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ Air Atomizing Setups (QMJ Air Atomizing Setups)' }
        }
      ],
      sortIndex: 171,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFloodjetQuickConnectQtka,
    ...defaultFacetOption,
    valueId: '33e1da19-1440-490d-b259-3a7f0c68763d',
    value:
      'Quick FloodJet® Deflected Flat Spray Nozzle Systems - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FloodJet\u00AE Deflected Flat Spray Nozzle Systems - Wide Angle Spray (QTKA)',
            de: 'Schnelle FloodJet\u00AE umgelenkte Flachspr\u00FChd\u00FCsensysteme - Weitwinkelspray (QTKA)',
            fr: 'Syst\u00E8mes de buse de pulv\u00E9risation plate d\u00E9vi\u00E9e par FloodJet\u00AE rapide - Spray grand angle (QTKA)',
            nl: 'Snelle FloodJet\u00AE afgebogen platte sproeikopsystemen - groothoekspray (QTKA)'
          }
        }
      ],
      sortIndex: 172,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQga15Qlga15,
    ...defaultFacetOption,
    valueId: 'd5b4cf88-804f-4113-be6e-eed199f8075f',
    value:
      'Quick FullJet® Full Cone Nozzle Systems - 15° Spray Angle - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - 15\u00B0 Spray Angle - Removable Cap/Vane (QGA-15, QLGA-15)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - 15\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (QGA-15, QLGA-15)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Angle de pulv\u00E9risation de 15 \u00B0 - Capuchon / palette amovible (QGA-15, QLGA-15)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle-systemen - 15\u00B0 spuithoek - Verwijderbare dop/schoepen (QGA-15, QLGA-15)'
          }
        }
      ],
      sortIndex: 173,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQga30Qlga30,
    ...defaultFacetOption,
    valueId: '083cdbac-16d3-431f-9476-7d80d4c7be8d',
    value:
      'Quick FullJet® Full Cone Nozzle Systems - 30° Spray Angle - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - 30\u00B0 Spray Angle - Removable Cap/Vane (QGA-30, QLGA-30)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - 30\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (QGA-30, QLGA-30)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Angle de pulv\u00E9risation de 30 \u00B0 - Capuchon / palette amovible (QGA-30, QLGA-30)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle-systemen - 30 \u00B0 spuithoek - verwijderbare dop / schoepen (QGA-30, QLGA-30)'
          }
        }
      ],
      sortIndex: 174,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQhaQlha,
    ...defaultFacetOption,
    valueId: '71dbb18d-7093-45a4-8cc5-cdc46c8c3c1e',
    value: 'Quick FullJet® Full Cone Nozzle Systems - Non-removable Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Non-removable Vane (QHA, QLHA)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Nicht abnehmbarer Fl\u00FCgel (QHA, QLHA)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Palette non amovible (QHA, QLHA)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systemen - Niet-verwijderbare Schoepen (QHA, QLHA)'
          }
        }
      ],
      sortIndex: 175,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQgaQlga,
    ...defaultFacetOption,
    valueId: 'e1cb44b8-f5aa-46b1-aea7-31cd0ae715e9',
    value: 'Quick FullJet® Full Cone Nozzle Systems - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Removable Cap/Vane (QGA, QLGA)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Abnehmbare Kappe/Fl\u00FCgelrad (QGA, QLGA)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Capuchon/palette amovible (QGA, QLGA)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systemen - Verwijderbare Dop/Schoepen (QGA, QLGA)'
          }
        }
      ],
      sortIndex: 176,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQhaWQlhaW,
    ...defaultFacetOption,
    valueId: 'e22ccd21-295e-4439-bdbb-85dce0af576c',
    value:
      'Quick FullJet® Full Cone Nozzle Systems - Wide Angle Spray - Non-removable Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray - Non-removable Vane (QHA-W, QLHA-W)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Weitwinkelspray - Nicht abnehmbarer Fl\u00FCgel (QHA-W, QLHA-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Spray grand angle - Palette non amovible (QHA-W, QLHA-W)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systems - Groothoekspray - Niet-verwijderbare Schoepen (QHA-W, QLHA-W)'
          }
        }
      ],
      sortIndex: 177,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickFulljetQuickConnectQgaWQlgaW,
    ...defaultFacetOption,
    valueId: '3b227913-e820-4f57-a6df-dd9e0431d5b4',
    value:
      'Quick FullJet® Full Cone Nozzle Systems - Wide Angle Spray - Removable Cap/Vane',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray - Removable Cap/Vane (QGA-W, QLGA-W)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Weitwinkelspray - Abnehmbare Kappe/Fl\u00FCgel (QGA-W, QLGA-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Spray grand angle - Capuchon / palette amovible (QGA-W, QLGA-W)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systems - Groothoek spray - Verwijderbare Cap /Vane (QGA-W, QLGA-W)'
          }
        }
      ],
      sortIndex: 178,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickVeejetFlatSprayQuickConnectQuaQluaQvva,
    ...defaultFacetOption,
    valueId: 'c67523a3-0692-4d97-8780-c1f7eb149538',
    value: 'Quick VeeJet® Flat Spray Nozzle Systems',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick VeeJet\u00AE Flat Spray Nozzle Systems (QUA, QLUA, QVVA)',
            de: 'Schnelle VeeJet\u00AE Flachspr\u00FChd\u00FCsensysteme (QUA, QLUA, QVVA)',
            fr: 'Syst\u00E8mes de buse de pulv\u00E9risation plate VeeJet\u00AE rapide (QUA, QLUA, QVVA)',
            nl: 'Snelle VeeJet\u00AE platte sproeikopsystemen (QUA, QLUA, QVVA)'
          }
        }
      ],
      sortIndex: 179,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickVeejetSolidStreamQuickConnectQuaQluaQvva,
    ...defaultFacetOption,
    valueId: 'e4a5bba3-4c2e-4e7c-b97e-45411e09ed63',
    value: 'Quick VeeJet® Solid Stream Nozzle Systems',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick VeeJet\u00AE Solid Stream Nozzle Systems (QUA, QLUA, QVVA)',
            de: 'Schnelle VeeJet\u00AE Solid Stream D\u00FCsensysteme (QUA, QLUA, QVVA)',
            fr: 'Syst\u00E8mes de buses Rapides VeeJet\u00AE Solid Stream (QUA, QLUA, QVVA)',
            nl: 'Snelle VeeJet\u00AE Solid Stream Nozzle-systemen (QUA, QLUA, QVVA)'
          }
        }
      ],
      sortIndex: 180,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjaQjja,
    ...defaultFacetOption,
    valueId: '054ff212-fe44-41d1-a453-f66093d09dfb',
    value: 'QuickJet® Quick-Connect Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet\u00AE Quick-Connect Nozzle Bodies (QJA, QJJA)',
            de: 'QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper (QJA, QJJA)',
            fr: 'Corps de buse QuickJet\u00AE Quick-Connect (QJA, QJJA)',
            nl: 'QuickJet\u00AE Quick-Connect nozzlebehuizingen (QJA, QJJA)'
          }
        }
      ],
      sortIndex: 181,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjlaQjjla,
    ...defaultFacetOption,
    valueId: '32c1be38-60d3-4068-b1a9-0f2da1c162a6',
    value: 'QuickJet® Quick-Connect Nozzle Bodies - Large Capacity',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet\u00AE Quick-Connect Nozzle Bodies - Large Capacity (QJLA, QJJLA)',
            de: 'QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper - Gro\u00DFe Kapazit\u00E4t (QJLA, QJJLA)',
            fr: 'Corps de buse QuickJet\u00AE Quick-Connect - Grande capacit\u00E9 (QJLA, QJJLA)',
            nl: 'QuickJet\u00AE Quick-Connect nozzlebehuizingen - grote capaciteit (QJLA, QJJLA)'
          }
        }
      ],
      sortIndex: 182,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjjs,
    ...defaultFacetOption,
    valueId: '0168fa84-d355-40ce-b7ba-c366734dbc11',
    value: 'QuickJet® Quick-Connect Nozzle Bodies - Miniature',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet\u00AE Quick-Connect Nozzle Bodies - Miniature (QJJS)',
            de: 'QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper - Miniatur (QJJS)',
            fr: 'Corps de buse QuickJet\u00AE Quick-Connect - Miniature (QJJS)',
            nl: 'QuickJet\u00AE Quick-Connect nozzlebehuizingen - Miniatuur (QJJS)'
          }
        }
      ],
      sortIndex: 183,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.TankjetD27500,
    ...defaultFacetOption,
    valueId: '3eab9286-677e-49d1-9abd-27ae91531dc3',
    value: 'Rotating Tank Cleaning Nozzle, ATEX Certified D27500',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Rotating Tank Cleaning Nozzle, ATEX Certified D27500 (D27500)',
            de: 'Drehbare Tankreinigungsd\u00FCse, ATEX-zertifiziert D27500 (D27500)',
            fr: 'Buse de nettoyage de r\u00E9servoir rotative, certifi\u00E9e ATEX D27500 (D27500)',
            nl: 'Roterende tankreinigingsmondstuk, ATEX-gecertificeerd D27500 (D27500)'
          }
        }
      ],
      sortIndex: 184,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LargeFreePassageFullConeHhsjx,
    ...defaultFacetOption,
    valueId: 'ff87c736-7369-4277-a736-a218f168180d',
    value:
      'SpiralJet® Full Cone Nozzles - Spiral Type - Extra Large Free Passage',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'SpiralJet\u00AE Full Cone Nozzles - Spiral Type - Extra Large Free Passage (HHSJX)',
            de: 'SpiralJet\u00AE Vollkegeld\u00FCsen - Spiraltyp - extra gro\u00DFer freier Durchgang (HHSJX)',
            fr: 'Buses SpiralJet\u00AE Full Cone - Type Spiral - Extra Large Free Passage (HHSJX)',
            nl: 'SpiralJet\u00AE Full Cone Nozzles - Spiral Type - Extra Grote Vrije Doorgang (HHSJX)'
          }
        }
      ],
      sortIndex: 185,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LargeFreePassageFullConeHhsj,
    ...defaultFacetOption,
    valueId: '95380b8d-90dc-440a-a2fe-dcc4324580df',
    value: 'SpiralJet® Full Cone Nozzles - Spiral Type - Large Free Passage',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'SpiralJet\u00AE Full Cone Nozzles - Spiral Type - Large Free Passage (HHSJ)',
            de: 'SpiralJet\u00AE Vollkegeld\u00FCsen - Spiraltyp - Gro\u00DFer freier Durchgang (HHSJ)',
            fr: 'Buses SpiralJet\u00AE Full Cone - Type Spiral - Grand passage libre (HHSJ)',
            nl: 'SpiralJet\u00AE Full Cone Nozzles - Spiral Type - Grote Vrije Doorgang (HHSJ)'
          }
        }
      ],
      sortIndex: 186,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LargeFreePassageHollowConeBsj,
    ...defaultFacetOption,
    valueId: '2973c05a-b134-4239-ba5b-3d7ab541687d',
    value:
      'SpiralJet® Hollow Cone Nozzles - Spiral Type - Extra Large Free Passage',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'SpiralJet\u00AE Hollow Cone Nozzles - Spiral Type - Extra Large Free Passage (BSJ)',
            de: 'SpiralJet\u00AE Hohlkegeld\u00FCsen - Spiraltyp - extra gro\u00DFer freier Durchgang (BSJ)',
            fr: 'Buses \u00E0 c\u00F4ne creux SpiralJet\u00AE - Type spirale - Tr\u00E8s grand passage libre (BSJ)',
            nl: 'SpiralJet\u00AE Holle Kegel Nozzles - Spiral Type - Extra Grote Vrije Doorgang (BSJ)'
          }
        }
      ],
      sortIndex: 187,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SplitEyeletConnectors7521,
    ...defaultFacetOption,
    valueId: '03aa1f8a-44d0-4202-9350-28980503eb96',
    value: 'Split-Eyelet Connector',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector (7521)',
            de: 'Split-Eyelet-Anschluss (7521)',
            fr: 'Connecteur Split-Eyelet (7521)',
            nl: 'Connector met gesplitst oog (7521)'
          }
        }
      ],
      sortIndex: 188,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SplitEyeletConnectors8370,
    ...defaultFacetOption,
    valueId: '3518c79e-b7f8-49c7-96ea-4f88fbd01388',
    value: 'Split-Eyelet Connector',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector (8370)',
            de: 'Split-Eyelet-Anschluss (8370)',
            fr: 'Connecteur Split-Eyelet (8370)',
            nl: 'Connector met gesplitst oog (8370)'
          }
        }
      ],
      sortIndex: 189,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SplitEyeletConnectors15475,
    ...defaultFacetOption,
    valueId: '7f574ba5-7a4d-418d-8222-71620eac36bf',
    value: 'Split-Eyelet Connector',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector (15475)',
            de: 'Split-Eyelet-Anschluss (15475)',
            fr: 'Connecteur Split-Eyelet (15475)',
            nl: 'Connector met gesplitst oog (15475)'
          }
        }
      ],
      sortIndex: 190,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo14MAa190,
    ...defaultFacetOption,
    valueId: '2fc00fc1-f412-4923-bf67-697f2190e1b7',
    value: 'TankJet AA(B)190',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet AA(B)190 (AA190)',
            de: 'TankJet AA(B)190 (AA190)',
            fr: 'TankJet AA(B)190 (AA190)',
            nl: 'TankJet AA(B)190 (AA190)'
          }
        }
      ],
      sortIndex: 191,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.TankjetCleanup,
    ...defaultFacetOption,
    valueId: '34e216cf-c779-40c9-aaa8-5ef733b4ebbf',
    value: 'TankJet CleanUp',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet CleanUp (D55567)',
            de: 'TankJet CleanUp (D55567)',
            fr: 'TankJet CleanUp (D55567)',
            nl: 'TankJet CleanUp (D55567)'
          }
        }
      ],
      sortIndex: 192,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtTj78m,
    ...defaultFacetOption,
    valueId: '2a634cd7-62b4-4633-91b9-2d51acfee170',
    value: 'TankJet® 78M Fluid-Driven Turbine Tank Cleaners',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 78M Fluid-Driven Turbine Tank Cleaners (TJ78M)',
            de: 'TankJet\u00AE 78M Fl\u00FCssigkeitsgetriebene Turbinentankreiniger (TJ78M)',
            fr: 'TankJet\u00AE 78M Nettoyeurs de r\u00E9servoir \u00E0 turbine \u00E0 entra\u00EEnement fluide (TJ78M)',
            nl: 'TankJet\u00AE 78M vloeistofaangedreven turbinetankreinigers (TJ78M)'
          }
        }
      ],
      sortIndex: 193,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10FtTj9A,
    ...defaultFacetOption,
    valueId: '4e9b8006-a691-4286-bfea-6b4a58056c2a',
    value: 'TankJet® 9-A Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 9-A Fluid-Driven Reactionary Force Tank Cleaning Nozzle (TJ9-A)',
            de: 'TankJet\u00AE 9-A fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (TJ9-A)',
            fr: 'TankJet\u00AE 9-A Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire pilot\u00E9e par fluide (TJ9-A)',
            nl: 'TankJet\u00AE 9-A vloeistofaangedreven reactionaire tankreinigingsmondstuk (TJ9-A)'
          }
        }
      ],
      sortIndex: 194,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtD40159,
    ...defaultFacetOption,
    valueId: 'f53757ea-9eed-4fd9-afd7-57f78f04b952',
    value: 'TankJet® Fluid-Driven Constant Speed Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle (D40159)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Tankreinigungsd\u00FCse mit konstanter Drehzahl (D40159)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 vitesse constante entra\u00EEn\u00E9e par fluide TankJet\u00AE (D40159)',
            nl: 'TankJet\u00AE vloeistofaangedreven tankreinigingsmondstuk met constante snelheid (D40159)'
          }
        }
      ],
      sortIndex: 195,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtD41800e,
    ...defaultFacetOption,
    valueId: 'fa5d962a-43fa-4443-bcab-56114fedc8d1',
    value: 'TankJet® Fluid-Driven Constant Speed Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle (D41800E)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Tankreinigungsd\u00FCse mit konstanter Drehzahl (D41800E)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 vitesse constante entra\u00EEn\u00E9e par fluide TankJet\u00AE (D41800E)',
            nl: 'TankJet\u00AE vloeistofaangedreven tankreinigingsmondstuk met constante snelheid (D41800E)'
          }
        }
      ],
      sortIndex: 196,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtD26984,
    ...defaultFacetOption,
    valueId: '5488f5c3-4ad1-4694-b14b-df7d88b91227',
    value: 'TankJet® Fluid-Driven Constant Speed Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle (D26984)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Tankreinigungsd\u00FCse mit konstanter Drehzahl (D26984)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 vitesse constante entra\u00EEn\u00E9e par fluide TankJet\u00AE (D26984)',
            nl: 'TankJet\u00AE vloeistofaangedreven tankreinigingsmondstuk met constante snelheid (D26984)'
          }
        }
      ],
      sortIndex: 197,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo5Ft21400a,
    ...defaultFacetOption,
    valueId: 'c2e175fd-27ce-438a-ab7c-e2879735b584',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (21400A)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (21400A)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (21400A)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (21400A)'
          }
        }
      ],
      sortIndex: 198,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo5FtD26564,
    ...defaultFacetOption,
    valueId: 'fa4190d7-8f7e-414c-93da-a2973bf315ac',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (D26564)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (D26564)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (D26564)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (D26564)'
          }
        }
      ],
      sortIndex: 199,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo5Ft30473,
    ...defaultFacetOption,
    valueId: '823a3890-dfc2-4c86-ac3c-a50c948d8141',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (30473)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (30473)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (30473)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (30473)'
          }
        }
      ],
      sortIndex: 200,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10FtD41892,
    ...defaultFacetOption,
    valueId: 'd6b72f4a-6b2f-4072-85ee-52ff6184f2ca',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (D41892)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (D41892)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (D41892)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (D41892)'
          }
        }
      ],
      sortIndex: 201,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo5Ft23240,
    ...defaultFacetOption,
    valueId: '574b9c80-5d04-4672-bec2-46c88bb23733',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (23240)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (23240)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (23240)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (23240)'
          }
        }
      ],
      sortIndex: 202,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10Ft18250a,
    ...defaultFacetOption,
    valueId: '62cec7ff-c8b2-40ed-8033-5e2b09094c6d',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle (18250A)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCse (18250A)',
            fr: 'Buse de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnaire entra\u00EEn\u00E9e par fluide TankJet\u00AE (18250A)',
            nl: 'TankJet\u00AE vloeistofaangedreven reactionaire tankreinigingsmondstuk (18250A)'
          }
        }
      ],
      sortIndex: 203,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtTj9BTj9C,
    ...defaultFacetOption,
    valueId: 'c7daeddf-ce4f-4c3a-be87-1f5ca8db2c73',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (TJ9-B, TJ9-C)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (TJ9-B, TJ9-C)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (TJ9-B, TJ9-C)',
            nl: 'TankJet\u00AE vloeistofgestuurde tankreinigingssproeiers met reactionaire kracht (TJ9-B, TJ9-C)'
          }
        }
      ],
      sortIndex: 204,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20Ft2850028500R,
    ...defaultFacetOption,
    valueId: '22196138-5c63-420a-8dc5-c611c649f940',
    value: 'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (28500, 28500-R)',
            de: 'TankJet\u00AE Fl\u00FCssigkeitsgetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (28500, 28500-R)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (28500, 28500-R)',
            nl: 'TankJet\u00AE vloeistofgestuurde tankreinigingssproeiers met reactionaire kracht (28500, 28500-R)'
          }
        }
      ],
      sortIndex: 205,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtD41990,
    ...defaultFacetOption,
    valueId: '23aed055-e135-4aab-8d7b-bde12b395ef8',
    value:
      'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles (1/2" - 3/4" or CIP192 connections)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (1/2\u0022 - 3/4\u0022 or CIP192 connections) (D41990)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (1/2\u0022 - 3/4\u0022 oder CIP192 Anschl\u00FCsse) (D41990)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (connexions 1/2 \u00AB\u00A0- 3/4\u00A0\u00BB ou CIP192) (D41990)',
            nl: 'TankJet\u00AE fluid-driven reactionary force tank cleaning nozzles (1/2\u0022 - 3/4\u0022 of CIP192 aansluitingen) (D41990)'
          }
        }
      ],
      sortIndex: 206,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45Ft2750027500R,
    ...defaultFacetOption,
    valueId: 'dfb6e1ae-e385-4f53-a876-fbbda32ac7ae',
    value:
      'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3" connections)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3\u0022 connections) (27500, 27500-R)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (3\u0022 Anschl\u00FCsse) (27500, 27500-R)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (connexions 3\u0022) (27500, 27500-R)',
            nl: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3\u0022 aansluitingen) (27500, 27500-R)'
          }
        }
      ],
      sortIndex: 207,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20Ft2750027500R,
    ...defaultFacetOption,
    valueId: '13e38fa6-7ee7-4049-9acb-5f0b027be0fe',
    value:
      'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/4" - 2" connections)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/4\u0022 - 2\u0022 connections) (27500, 27500-R)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (3/4\u0022 - 2\u0022 Anschl\u00FCsse) (27500, 27500-R)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (connexions 3/4 \u00AB\u00A0- 2\u00A0\u00BB) (27500, 27500-R)',
            nl: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/4\u0022 - 2\u0022 aansluitingen) (27500, 27500-R)'
          }
        }
      ],
      sortIndex: 208,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10Ft2750027500R,
    ...defaultFacetOption,
    valueId: 'caa23c5a-427d-43ea-8e8b-e3efc88dddc8',
    value:
      'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/8" - 1/2" connections)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/8\u0022 - 1/2\u0022 connections) (27500, 27500-R)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (3/8\u0022 - 1/2\u0022 Anschl\u00FCsse) (27500, 27500-R)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (connexions 3/8 \u00AB\u00A0- 1/2\u00A0\u00BB) (27500, 27500-R)',
            nl: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/8\u0022 - 1/2\u0022 aansluitingen) (27500, 27500-R)'
          }
        }
      ],
      sortIndex: 209,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10FtD41990,
    ...defaultFacetOption,
    valueId: '63ce8847-9252-418f-a754-4d6aec0d5a99',
    value:
      'TankJet® Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/8" or CIP182 connections)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles (3/8\u0022 or CIP182 connections) (D41990)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Reaktionskraft-Tankreinigungsd\u00FCsen (3/8\u0022 oder CIP182 Anschl\u00FCsse) (D41990)',
            fr: 'Buses de nettoyage de r\u00E9servoir \u00E0 force r\u00E9actionnelle entra\u00EEn\u00E9e par fluide TankJet\u00AE (connexions 3/8\u00A0\u00BB ou CIP182) (D41990)',
            nl: 'TankJet\u00AE fluid-driven reactionary force tank cleaning nozzles (3/8\u0022 of CIP182 aansluitingen) (D41990)'
          }
        }
      ],
      sortIndex: 210,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtTj14,
    ...defaultFacetOption,
    valueId: 'bca5d102-13e5-4459-bbc6-29157dfe8b36',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner (TJ14)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebener Turbinentankreiniger (TJ14)',
            fr: 'TankJet\u00AE Nettoyeur de r\u00E9servoir de turbine \u00E0 entra\u00EEnement fluide (TJ14)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreiniger (TJ14)'
          }
        }
      ],
      sortIndex: 211,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtTj19,
    ...defaultFacetOption,
    valueId: '7f5eccb0-851c-4dfe-a9f3-2459b6640828',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner (TJ19)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebener Turbinentankreiniger (TJ19)',
            fr: 'TankJet\u00AE Nettoyeur de r\u00E9servoir de turbine \u00E0 entra\u00EEnement fluide (TJ19)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreiniger (TJ19)'
          }
        }
      ],
      sortIndex: 212,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo100FtTj360,
    ...defaultFacetOption,
    valueId: '1457c6a7-c9eb-45c9-9050-2313cd7d7256',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner (TJ360)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebener Turbinentankreiniger (TJ360)',
            fr: 'TankJet\u00AE Nettoyeur de r\u00E9servoir de turbine \u00E0 entra\u00EEnement fluide (TJ360)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreiniger (TJ360)'
          }
        }
      ],
      sortIndex: 213,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo100FtTj180,
    ...defaultFacetOption,
    valueId: 'f885ee3b-a147-45c3-97bc-be2b42d11210',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner (TJ180)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebener Turbinentankreiniger (TJ180)',
            fr: 'TankJet\u00AE Nettoyeur de r\u00E9servoir de turbine \u00E0 entra\u00EEnement fluide (TJ180)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreiniger (TJ180)'
          }
        }
      ],
      sortIndex: 214,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtTj65Tj65ht,
    ...defaultFacetOption,
    valueId: 'f3e5f8d6-414d-4afa-b9f8-d8ed41b3340b',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaners',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaners (TJ65, TJ65HT)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Turbinentankreiniger (TJ65, TJ65HT)',
            fr: 'Nettoyeurs de r\u00E9servoir \u00E0 turbine \u00E0 entra\u00EEnement fluide TankJet\u00AE (TJ65, TJ65HT)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreinigers (TJ65, TJ65HT)'
          }
        }
      ],
      sortIndex: 215,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtTj75Tj75h,
    ...defaultFacetOption,
    valueId: '227f577a-29a7-46fc-966c-8815541c7985',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaners',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaners (TJ75, TJ75H)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Turbinentankreiniger (TJ75, TJ75H)',
            fr: 'Nettoyeurs de r\u00E9servoir \u00E0 turbine \u00E0 entra\u00EEnement fluide TankJet\u00AE (TJ75, TJ75H)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreinigers (TJ75, TJ75H)'
          }
        }
      ],
      sortIndex: 216,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo100FtTj80Tj80h,
    ...defaultFacetOption,
    valueId: 'fe9329e4-f1fe-454b-9e5f-23826a2b9f12',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaners',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaners (TJ80, TJ80H)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Turbinentankreiniger (TJ80, TJ80H)',
            fr: 'Nettoyeurs de r\u00E9servoir \u00E0 turbine \u00E0 entra\u00EEnement fluide TankJet\u00AE (TJ80, TJ80H)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreinigers (TJ80, TJ80H)'
          }
        }
      ],
      sortIndex: 217,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtTj78Tj78d,
    ...defaultFacetOption,
    valueId: '50875e5d-5ae3-4311-a5c8-5808b6b48516',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaners',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaners (TJ78, TJ78D)',
            de: 'TankJet\u00AE fl\u00FCssigkeitsbetriebene Turbinentankreiniger (TJ78, TJ78D)',
            fr: 'Nettoyeurs de r\u00E9servoir \u00E0 turbine \u00E0 entra\u00EEnement fluide TankJet\u00AE (TJ78, TJ78D)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreinigers (TJ78, TJ78D)'
          }
        }
      ],
      sortIndex: 218,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtTj16,
    ...defaultFacetOption,
    valueId: '0512ae8f-d685-4280-ac46-57e77f63af9a',
    value: 'TankJet® Fluid-Driven Turbine Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaning Nozzle (TJ16)',
            de: 'TankJet\u00AE Fluid-angetriebene Turbinentank-Reinigungsd\u00FCse (TJ16)',
            fr: 'Buse de nettoyage de r\u00E9servoir de turbine \u00E0 entra\u00EEnement fluide TankJet\u00AE (TJ16)',
            nl: 'TankJet\u00AE vloeistofaangedreven turbinetankreinigingsmondstuk (TJ16)'
          }
        }
      ],
      sortIndex: 219,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtYmd3,
    ...defaultFacetOption,
    valueId: '25c51006-f539-47db-a35f-e617eb981f28',
    value: 'TankJet® High Pressure Motor-Driven Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE High Pressure Motor-Driven Tank Cleaner (YMD3)'
          }
        }
      ],
      sortIndex: 220,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo100FtAa290,
    ...defaultFacetOption,
    valueId: '67d9ebc4-b489-47df-910d-cd388f05a35e',
    value: 'TankJet® Motor-Driven Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner (AA290)',
            de: 'TankJet\u00AE Motorbetriebener Tankreiniger (AA290)',
            fr: 'Nettoyeur de r\u00E9servoir \u00E0 moteur TankJet\u00AE (AA290)',
            nl: 'TankJet\u00AE Motor-aangedreven Tank Cleaner (AA290)'
          }
        }
      ],
      sortIndex: 221,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo45FtAa190,
    ...defaultFacetOption,
    valueId: '628cf011-0f4d-48b8-9394-7a7bb64debd0',
    value: 'TankJet® Motor-Driven Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner (AA190)',
            de: 'TankJet\u00AE Motorbetriebener Tankreiniger (AA190)',
            fr: 'Nettoyeur de r\u00E9servoir \u00E0 moteur TankJet\u00AE (AA190)',
            nl: 'TankJet\u00AE Motor-aangedreven Tank Cleaner (AA190)'
          }
        }
      ],
      sortIndex: 222,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20FtAa090,
    ...defaultFacetOption,
    valueId: 'a7915f7e-ef3f-41fc-bbdc-31517b2853ce',
    value: 'TankJet® Motor-Driven Tank Cleaner',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner (AA090)',
            de: 'TankJet\u00AE Motorbetriebener Tankreiniger (AA090)',
            fr: 'Nettoyeur de r\u00E9servoir \u00E0 moteur TankJet\u00AE (AA090)',
            nl: 'TankJet\u00AE Motor-aangedreven Tank Cleaner (AA090)'
          }
        }
      ],
      sortIndex: 223,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo5FtVsm,
    ...defaultFacetOption,
    valueId: '065f4d1a-5890-493e-847c-80e26d065027',
    value: 'TankJet® Stationary Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzle (VSM)',
            de: 'TankJet\u00AE Station\u00E4re Tankreinigungsd\u00FCse (VSM)',
            fr: 'Buse de nettoyage de r\u00E9servoir stationnaire TankJet\u00AE (VSM)',
            nl: 'TankJet\u00AE stationaire tankreinigingsmondstuk (VSM)'
          }
        }
      ],
      sortIndex: 224,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20Ft12900,
    ...defaultFacetOption,
    valueId: 'e305f6cc-a4d4-4c57-8eb0-acf2d24412e0',
    value: 'TankJet® Stationary Tank Cleaning Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzle (12900)',
            de: 'TankJet\u00AE Station\u00E4re Tankreinigungsd\u00FCse (12900)',
            fr: 'Buse de nettoyage de r\u00E9servoir stationnaire TankJet\u00AE (12900)',
            nl: 'TankJet\u00AE stationaire tankreinigingsmondstuk (12900)'
          }
        }
      ],
      sortIndex: 225,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo10Ft63536353Mfp,
    ...defaultFacetOption,
    valueId: '4f3a5c55-17ba-4474-a791-5931b9237562',
    value: 'TankJet® Stationary Tank Cleaning Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzles (6353, 6353-MFP)',
            de: 'TankJet\u00AE Station\u00E4re Tankreinigungsd\u00FCsen (6353, 6353-MFP)',
            fr: 'Buses de nettoyage de r\u00E9servoir stationnaire TankJet\u00AE (6353, 6353-MFP)',
            nl: 'TankJet\u00AE stationaire tankreinigingssproeiers (6353, 6353-MFP)'
          }
        }
      ],
      sortIndex: 226,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ForTanksUpTo20Ft63225632253a,
    ...defaultFacetOption,
    valueId: '36f224c1-3fd3-4b00-a495-1c8473c0a2c2',
    value: 'TankJet® Tank Cleaning Spray Balls',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Tank Cleaning Spray Balls (63225, 63225-3A)',
            de: 'TankJet\u00AE Tankreinigung Spray Balls (63225, 63225-3A)',
            fr: 'TankJet\u00AE Tank Cleaning Spray Balls (63225, 63225-3A)',
            nl: 'TankJet\u00AE Tank Cleaning Spray Ballen (63225, 63225-3A)'
          }
        }
      ],
      sortIndex: 227,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23520,
    ...defaultFacetOption,
    valueId: '960f0829-963e-4c9b-bc23-db0f3d634f68',
    value: 'Throttling Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Throttling Valve (23520)',
            de: 'Drosselklappe (23520)',
            fr: 'Vanne d\u2019\u00E9tranglement (23520)',
            nl: 'Throttling Valve (23520)'
          }
        }
      ],
      sortIndex: 228,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.LowPressureGunjetSprayGuns22650Pp,
    ...defaultFacetOption,
    valueId: '45e183f7-b0d2-48f4-a42d-a1e90d19b6a3',
    value: 'TriggerJet® 22650-PP Low Pressure Trigger Valve',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TriggerJet\u00AE 22650-PP Low Pressure Trigger Valve (22650-PP)',
            de: 'TriggerJet\u00AE 22650-PP Niederdruck-Absperrventil (22650-PP)',
            fr: 'TriggerJet\u00AE 22650-PP Vanne de d\u00E9clenchement basse pression (22650-PP)',
            nl: 'TriggerJet\u00AE 22650-PP lagedruk triggerklep (22650-PP)'
          }
        }
      ],
      sortIndex: 229,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureFlatSprayFs013Fs020,
    ...defaultFacetOption,
    valueId: 'a96215f7-fe90-4c43-bb06-0bcbd2b4f0ad',
    value: 'Ultra-High Pressure Flat Spray Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Flat Spray Nozzle Assemblies (FS013, FS020)',
            de: 'Ultrahochdruck-Flachspr\u00FChd\u00FCsenbaugruppen (FS013, FS020)',
            fr: 'Ensembles de buses de pulv\u00E9risation plates \u00E0 ultra-haute pression (FS013, FS020)',
            nl: 'Ultrahoge druk platte sproeikopassemblages (FS013, FS020)'
          }
        }
      ],
      sortIndex: 230,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureNozzleBodies5883358834,
    ...defaultFacetOption,
    valueId: '9dcfc2fd-13f0-4fc3-80ff-cdfc03558754',
    value: 'Ultra-High Pressure Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Nozzle Bodies (58833, 58834)',
            de: 'Ultrahochdruck-D\u00FCsenk\u00F6rper (58833, 58834)',
            fr: 'Corps de buse ultra-haute pression (58833, 58834)',
            nl: 'Ultrahogedrukmondhuizen (58833, 58834)'
          }
        }
      ],
      sortIndex: 231,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureSolidStreamVs940,
    ...defaultFacetOption,
    valueId: 'aaeeee7f-7ced-4b30-8f59-cb645e510618',
    value: 'Ultra-High Pressure Spray Tips - Up to 15,000 psi (1000 bar)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Spray Tips - Up to 15,000 psi (1000 bar) (VS940)',
            de: 'Ultrahochdruck-Spr\u00FChspitzen - Bis zu 15.000 psi (1000 bar) (VS940)',
            fr: 'Embouts de pulv\u00E9risation ultra-haute pression - Jusqu\u2019\u00E0 15 000 psi (1000 bar) (VS940)',
            nl: 'Ultrahogedruksproeitips - tot 15.000 psi (1000 bar) (VS940)'
          }
        }
      ],
      sortIndex: 232,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureSolidStreamVs625,
    ...defaultFacetOption,
    valueId: '444148d3-f105-4ac8-a8e4-68ecf3b8c830',
    value: 'Ultra-High Pressure Spray Tips - Up to 17,500 psi (1200 bar)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Spray Tips - Up to 17,500 psi (1200 bar) (VS625)',
            de: 'Ultrahochdruck-Spr\u00FChspitzen - Bis zu 1200 bar (17.500 psi) (VS625)',
            fr: 'Embouts de pulv\u00E9risation ultra-haute pression - Jusqu\u2019\u00E0 17 500 psi (1200 bar) (VS625)',
            nl: 'Ultrahogedruksproeitips - Tot 17.500 psi (1200 bar) (VS625)'
          }
        }
      ],
      sortIndex: 233,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureSolidStreamVs010,
    ...defaultFacetOption,
    valueId: '23df6221-5311-4621-86a2-8fb970a785de',
    value: 'Ultra-High Pressure Spray Tips - Up to 20,000 psi (1400 bar)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Spray Tips - Up to 20,000 psi (1400 bar) (VS010)',
            de: 'Ultrahochdruck-Spr\u00FChspitzen - Bis zu 1400 bar (20.000 psi) (VS010)',
            fr: 'Embouts de pulv\u00E9risation ultra-haute pression - Jusqu\u2019\u00E0 20 000 psi (1400 bar) (VS010)',
            nl: 'Ultrahogedruksproeitips - Tot 20.000 psi (1400 bar) (VS010)'
          }
        }
      ],
      sortIndex: 234,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureSolidStreamVs020,
    ...defaultFacetOption,
    valueId: '0222020e-1ae4-4561-83ff-13fd16cfef9e',
    value: 'Ultra-High Pressure Spray Tips - Up to 30,000 psi (2000 bar)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Spray Tips - Up to 30,000 psi (2000 bar) (VS020)',
            de: 'Ultrahochdruck-Spr\u00FChspitzen - Bis zu 30.000 psi (2000 bar) (VS020)',
            fr: 'Embouts de pulv\u00E9risation ultra-haute pression - Jusqu\u2019\u00E0 30 000 psi (2000 bar) (VS020)',
            nl: 'Ultrahogedruksproeitips - Tot 30.000 psi (2000 bar) (VS020)'
          }
        }
      ],
      sortIndex: 235,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UltraHighPressureSolidStreamVs051,
    ...defaultFacetOption,
    valueId: '738b75f2-079b-4f9d-aeb7-f3b6a765c729',
    value: 'Ultra-High Pressure Spray Tips - Up to 60,000 psi (4000 bar)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Spray Tips - Up to 60,000 psi (4000 bar) (VS051)',
            de: 'Ultrahochdruck-Spr\u00FChspitzen - Bis zu 60.000 psi (4000 bar) (VS051)',
            fr: 'Embouts de pulv\u00E9risation ultra-haute pression - Jusqu\u2019\u00E0 60 000 psi (4000 bar) (VS051)',
            nl: 'Ultrahogedruksproeitips - tot 60.000 psi (4000 bar) (VS051)'
          }
        }
      ],
      sortIndex: 236,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFlatSprayTk,
    ...defaultFacetOption,
    valueId: 'e81724b9-c0dc-43dc-9f42-69b35877c0b7',
    value: 'UniJet® Deflected Flat Spray Nozzle Systems - Wide Angle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Deflected Flat Spray Nozzle Systems - Wide Angle (TK)',
            de: 'UniJet\u00AE Deflected Flat Spray D\u00FCsensysteme - Weitwinkel (TK)',
            fr: 'Syst\u00E8mes de buses de pulv\u00E9risation plates d\u00E9vi\u00E9es UniJet\u00AE - Grand Angle (TK)',
            nl: 'UniJet\u00AE afgebogen platte sproeikopsystemen - groothoek (TK)'
          }
        }
      ],
      sortIndex: 237,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFlatSprayEg,
    ...defaultFacetOption,
    valueId: '03020652-a130-4afe-809b-122467eb765d',
    value: 'UniJet® Flat Spray Nozzle Systems - High Pressure',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Flat Spray Nozzle Systems - High Pressure (EG)',
            de: 'UniJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Hochdruck (EG)',
            fr: 'Syst\u00E8mes de buses de pulv\u00E9risation plates UniJet\u00AE - Haute pression (EG)',
            nl: 'UniJet\u00AE platte sproeikopsystemen - hoge druk (EG)'
          }
        }
      ],
      sortIndex: 238,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFlatSprayTpu,
    ...defaultFacetOption,
    valueId: 'dc542b52-c2d0-4694-8d96-71d4a901bec7',
    value: 'UniJet® Flat Spray Nozzle Systems - Medium Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Flat Spray Nozzle Systems - Medium Flow (TPU)',
            de: 'UniJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Mittlerer Durchfluss (TPU)',
            fr: 'Syst\u00E8mes de buses de pulv\u00E9risation plates UniJet\u00AE - D\u00E9bit moyen (TPU)',
            nl: 'UniJet\u00AE platte sproeikopsystemen - Medium Flow (TPU)'
          }
        }
      ],
      sortIndex: 239,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFlatSpray13802,
    ...defaultFacetOption,
    valueId: '688380f3-3419-4a2d-b76f-a5de4dc615ab',
    value: 'UniJet® Flat Spray Nozzle Systems - Self-Aligning',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Flat Spray Nozzle Systems - Self-Aligning (13802)',
            de: 'UniJet\u00AE Flachspr\u00FChd\u00FCsensysteme - Selbstausrichtend (13802)',
            fr: 'Syst\u00E8mes de buses de pulv\u00E9risation plates UniJet\u00AE - Auto-alignant (13802)',
            nl: 'UniJet\u00AE platte sproeikopsystemen - zelfuitlijnend (13802)'
          }
        }
      ],
      sortIndex: 240,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFullConeTg,
    ...defaultFacetOption,
    valueId: 'baa7b8ce-827f-418e-8e47-0e0ec847a322',
    value: 'UniJet® Full Cone Nozzle Systems',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Full Cone Nozzle Systems (TG)',
            de: 'UniJet\u00AE Full Cone D\u00FCsensysteme (TG)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne complet UniJet\u00AE (TG)',
            nl: 'UniJet\u00AE Full Cone Nozzle Systemen (TG)'
          }
        }
      ],
      sortIndex: 241,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFullConeD,
    ...defaultFacetOption,
    valueId: '73a27932-730e-4569-a2a2-b4ce29d3c289',
    value: 'UniJet® Full Cone Nozzle Systems - Disk-Type',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Full Cone Nozzle Systems - Disk-Type (D)',
            de: 'UniJet\u00AE Vollkegeld\u00FCsensysteme - Scheibentyp (D)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne complet UniJet\u00AE - Type de disque (D)',
            nl: 'UniJet\u00AE Full Cone Nozzle Systemen - Disk-Type (D)'
          }
        }
      ],
      sortIndex: 242,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFullConeTgSq,
    ...defaultFacetOption,
    valueId: '33dd4f32-b616-4ebb-94d7-b79714470aa7',
    value: 'UniJet® Full Cone Nozzle Systems - Square Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Full Cone Nozzle Systems - Square Spray (TG-SQ)',
            de: 'UniJet\u00AE Full Cone D\u00FCsensysteme - Square Spray (TG-SQ)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne complet UniJet\u00AE - Square Spray (TG-SQ)',
            nl: 'UniJet\u00AE Full Cone Nozzle Systemen - Square Spray (TG-SQ)'
          }
        }
      ],
      sortIndex: 243,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFullConeTgW,
    ...defaultFacetOption,
    valueId: '84d839a2-83f7-4bf3-8dca-7c3ea5cc6aea',
    value: 'UniJet® Full Cone Nozzle Systems - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray (TG-W)',
            de: 'UniJet\u00AE Vollkegeld\u00FCsensysteme - Weitwinkelspray (TG-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet UniJet\u00AE - Spray grand angle (TG-W)',
            nl: 'UniJet\u00AE Full Cone Nozzle Systems - Groothoek spray (TG-W)'
          }
        }
      ],
      sortIndex: 244,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetFullConeThW,
    ...defaultFacetOption,
    valueId: '00cf5fe4-ef80-43e9-af4a-5ef10da1437d',
    value:
      'UniJet® Full Cone Nozzle Systems - Wide Angle Spray - One-piece Tip/Retainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray - One-piece Tip/Retainer (TH-W)',
            de: 'UniJet\u00AE Full Cone D\u00FCsensysteme - Weitwinkelspray - Einteilige Spitze/Halterung (TH-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet UniJet\u00AE - Spray grand angle - Embout / dispositif de retenue monobloc (TH-W)',
            nl: 'UniJet\u00AE Full Cone Nozzle Systems - Groothoekspray - Tip/Retainer uit \u00E9\u00E9n stuk (TH-W)'
          }
        }
      ],
      sortIndex: 245,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetHollowConeTx,
    ...defaultFacetOption,
    valueId: '175cf5cc-84e1-49f8-9305-e4994849784c',
    value: 'UniJet® Hollow Cone Nozzle Systems',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Hollow Cone Nozzle Systems (TX)',
            de: 'UniJet\u00AE Hohlkegeld\u00FCsensysteme (TX)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne creux UniJet\u00AE (TX)',
            nl: 'UniJet\u00AE Holle Conus Nozzle Systemen (TX)'
          }
        }
      ],
      sortIndex: 246,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetHollowConeD,
    ...defaultFacetOption,
    valueId: 'e3f2baae-7574-47b0-8eeb-13a1e682c019',
    value: 'UniJet® Hollow Cone Nozzle Systems - Disk-Type',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Hollow Cone Nozzle Systems - Disk-Type (D)',
            de: 'UniJet\u00AE Hohlkegeld\u00FCsensysteme - Scheibentyp (D)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne creux UniJet\u00AE - Type de disque (D)',
            nl: 'UniJet\u00AE Holle Conus Nozzle Systemen - Disk-Type (D)'
          }
        }
      ],
      sortIndex: 247,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetHollowConeTn,
    ...defaultFacetOption,
    valueId: '25fb855b-e25a-4662-b3fb-4b58e625bb64',
    value: 'UniJet® Hollow Cone Nozzle Systems - Fine Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Hollow Cone Nozzle Systems - Fine Spray (TN)',
            de: 'UniJet\u00AE Hohlkegeld\u00FCsensysteme - Feinspray (TN)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne creux UniJet\u00AE - Fine Spray (TN)',
            nl: 'UniJet\u00AE Hollow Cone Nozzle Systems - Fijnspray (TN)'
          }
        }
      ],
      sortIndex: 248,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetHollowConeTnSstc,
    ...defaultFacetOption,
    valueId: 'ad7a4b2b-9342-425c-8740-ed79e1263d2c',
    value: 'UniJet® Hollow Cone Nozzle Systems - Fine Spray - SSTC Insert',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Hollow Cone Nozzle Systems - Fine Spray - SSTC Insert (TN-SSTC)',
            de: 'UniJet\u00AE Hohlkegeld\u00FCsensysteme - Feinspray - SSTC-Einsatz (TN-SSTC)',
            fr: 'Syst\u00E8mes de buses \u00E0 c\u00F4ne creux UniJet\u00AE - Fine Spray - SSTC Insert (TN-SSTC)',
            nl: 'UniJet\u00AE Holle Conus Nozzle Systemen - Fijn Spray - SSTC Insert (TN-SSTC)'
          }
        }
      ],
      sortIndex: 249,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetHollowConeTW,
    ...defaultFacetOption,
    valueId: '3d8f6411-9335-49cb-9a2f-3642639f0720',
    value: 'UniJet® Hollow Cone Nozzle Systems - Fine Spray - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Hollow Cone Nozzle Systems - Fine Spray - Wide Angle Spray (T-W)',
            de: 'UniJet\u00AE Hohlkegeld\u00FCsensysteme - Feinspray - Weitwinkelspray (T-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne creux UniJet\u00AE - Spray fin - Spray grand angle (T-W)',
            nl: 'UniJet\u00AE Hollow Cone Nozzle Systems - Fijne Spray - Groothoek Spray (T-W)'
          }
        }
      ],
      sortIndex: 250,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetNozzleBodiesTTt,
    ...defaultFacetOption,
    valueId: 'fbebe335-ba7e-4a35-a79e-74a046c49d33',
    value: 'UniJet® Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Nozzle Bodies (T, TT)',
            de: 'UniJet\u00AE D\u00FCsengeh\u00E4use (T, TT)',
            fr: 'Corps de buse UniJet\u00AE (T, TT)',
            nl: 'UniJet\u00AE Nozzle Behuizingen (T, TT)'
          }
        }
      ],
      sortIndex: 251,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetNozzleBodies11430,
    ...defaultFacetOption,
    valueId: 'd58364c4-9a39-4d6b-95e2-ff6a7b2f33eb',
    value: 'UniJet® Nozzle Body - High Pressure',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Nozzle Body - High Pressure (11430)',
            de: 'UniJet\u00AE D\u00FCsenk\u00F6rper - Hochdruck (11430)',
            fr: 'Corps de buse UniJet\u00AE - Haute pression (11430)',
            nl: 'UniJet\u00AE Nozzle Body - Hoge Druk (11430)'
          }
        }
      ],
      sortIndex: 252,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetSolidStreamEg,
    ...defaultFacetOption,
    valueId: '0d2401e6-ecbe-4d5c-ad46-7772198d66de',
    value: 'UniJet® Solid Stream Nozzle Systems - High Pressure',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Solid Stream Nozzle Systems - High Pressure (EG)',
            de: 'UniJet\u00AE Solid Stream D\u00FCsensysteme - Hochdruck (EG)',
            fr: 'Syst\u00E8mes de buses UniJet\u00AE Solid Stream - Haute pression (EG)',
            nl: 'UniJet\u00AE Solid Stream Nozzle Systemen - Hoge Druk (EG)'
          }
        }
      ],
      sortIndex: 253,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.UnijetSolidStreamTpu,
    ...defaultFacetOption,
    valueId: '1ee5695a-abe4-41d2-9b42-b7e50854fd73',
    value: 'UniJet® Solid Stream Nozzle Systems - Medium Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Solid Stream Nozzle Systems - Medium Flow (TPU)',
            de: 'UniJet\u00AE Solid Stream D\u00FCsensysteme - Mittlerer Durchfluss (TPU)',
            fr: 'Syst\u00E8mes de buses UniJet\u00AE Solid Stream - D\u00E9bit moyen (TPU)',
            nl: 'UniJet\u00AE Solid Stream Nozzle Systemen - Medium Flow (TPU)'
          }
        }
      ],
      sortIndex: 254,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VaaVauAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '0acc09cb-b1b3-44fd-876c-56175da3da45',
    value: 'VAA, VAU Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VAA, VAU Air Atomizing Air Caps (VAA, VAU Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 255,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VaaVauAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: 'ab131e15-e569-4334-8ec7-7b7eed28636f',
    value: 'VAA, VAU Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VAA, VAU Air Atomizing Assemblies (VAA, VAU Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 256,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VaaVauAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '9e5b6b2f-ded9-48e5-b847-a58c8383c5f3',
    value: 'VAA, VAU Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VAA, VAU Air Atomizing Bodies (VAA, VAU Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 257,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VaaVauAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '81112fe2-3c24-4fdf-9db8-d22499ba9322',
    value: 'VAA, VAU Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VAA, VAU Air Atomizing Fluid Caps (VAA, VAU Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 258,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VaaVauAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '38979bf0-745e-43f8-97d3-642483220cb8',
    value: 'VAA, VAU Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VAA, VAU Air Atomizing Setups (VAA, VAU Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 259,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardFlatSprayHVvHDt,
    ...defaultFacetOption,
    valueId: 'ae48d1b9-a1c1-490a-99c7-af0733df0346',
    value: 'VeeJet® Flat Spray Nozzles - Low Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Flat Spray Nozzles - Low Flow (H-VV, H-DT)',
            de: 'VeeJet\u00AE Flachspr\u00FChd\u00FCsen - Low Flow (H-VV, H-DT)',
            fr: 'Buses de pulv\u00E9risation plates VeeJet\u00AE - Faible d\u00E9bit (H-VV, H-DT)',
            nl: 'VeeJet\u00AE platte sproeikoppen - Laag debiet (H-VV, H-DT)'
          }
        }
      ],
      sortIndex: 260,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardFlatSprayHVvl,
    ...defaultFacetOption,
    valueId: '70a11cb0-eefb-4a72-8d74-de277e9f3646',
    value: 'VeeJet® Flat Spray Nozzles - Low Flow - Integral Strainer',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Flat Spray Nozzles - Low Flow - Integral Strainer (H-VVL)',
            de: 'VeeJet\u00AE Flachspr\u00FChd\u00FCsen - Low Flow - Integrales Sieb (H-VVL)',
            fr: 'Buses de pulv\u00E9risation plates VeeJet\u00AE - Faible d\u00E9bit - Cr\u00E9pine int\u00E9grale (H-VVL)',
            nl: 'VeeJet\u00AE platte sproeikoppen - Low Flow - Ge\u00EFntegreerde zeef (H-VVL)'
          }
        }
      ],
      sortIndex: 261,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardFlatSprayHUHDu,
    ...defaultFacetOption,
    valueId: '4b582aae-446f-43a8-8784-711474418253',
    value: 'VeeJet® Flat Spray Nozzles - Medium Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Flat Spray Nozzles - Medium Flow (H-U, H-DU)',
            de: 'VeeJet\u00AE Flachspr\u00FChd\u00FCsen - Mittlerer Durchfluss (H-U, H-DU)',
            fr: 'Buses de pulv\u00E9risation plates VeeJet\u00AE - D\u00E9bit moyen (H-U, H-DU)',
            nl: 'VeeJet\u00AE platte sproeikoppen - Medium Flow (H-U, H-DU)'
          }
        }
      ],
      sortIndex: 262,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardFlatSprayU,
    ...defaultFacetOption,
    valueId: '029216d2-7620-422c-bcda-4e1963ff344a',
    value: 'VeeJet® Nozzles - Flat Spray - High Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Nozzles - Flat Spray - High Flow (U)',
            de: 'VeeJet\u00AE D\u00FCsen - Flachspray - High Flow (U)',
            fr: 'Buses VeeJet\u00AE - Flat Spray - High Flow (U)',
            nl: 'VeeJet\u00AE Nozzles - Flat Spray - High Flow (U)'
          }
        }
      ],
      sortIndex: 263,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardSolidStreamU,
    ...defaultFacetOption,
    valueId: 'a36542ba-e323-4af7-a33c-ffd5965d0eb8',
    value: 'VeeJet® Nozzles - Solid Stream - High Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Nozzles - Solid Stream - High Flow (U)',
            de: 'VeeJet\u00AE D\u00FCsen - Solid Stream - High Flow (U)',
            fr: 'Buses VeeJet\u00AE - Solid Stream - D\u00E9bit \u00E9lev\u00E9 (U)',
            nl: 'VeeJet\u00AE Nozzles - Solid Stream - High Flow (U)'
          }
        }
      ],
      sortIndex: 264,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardSolidStreamHUHDu,
    ...defaultFacetOption,
    valueId: '927552cf-256a-482c-8bd3-9d06439d89bb',
    value: 'VeeJet® Solid Stream Nozzles - Medium Flow',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Solid Stream Nozzles - Medium Flow (H-U, H-DU)',
            de: 'VeeJet\u00AE Solid Stream D\u00FCsen - Mittlerer Durchfluss (H-U, H-DU)',
            fr: 'Buses VeeJet\u00AE Solid Stream - D\u00E9bit moyen (H-U, H-DU)',
            nl: 'VeeJet\u00AE Solid Stream Nozzles - Medium Flow (H-U, H-DU)'
          }
        }
      ],
      sortIndex: 265,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VmauAirAtomizingAirCaps,
    ...defaultFacetOption,
    valueId: '3cba55f5-65bd-4b55-a475-35dc75b4b44e',
    value: 'VMAU Air Atomizing Air Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VMAU Air Atomizing Air Caps (VMAU Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 266,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VmauAirAtomizingAssemblies,
    ...defaultFacetOption,
    valueId: '3f9abc94-eaf2-498a-a7d0-79fd55e18c85',
    value: 'VMAU Air Atomizing Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VMAU Air Atomizing Assemblies (VMAU Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 267,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VmauAirAtomizingBodies,
    ...defaultFacetOption,
    valueId: '00de3529-932e-44ac-a56b-ab869db4da2f',
    value: 'VMAU Air Atomizing Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VMAU Air Atomizing Bodies (VMAU Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 268,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VmauAirAtomizingFluidCaps,
    ...defaultFacetOption,
    valueId: '62751765-d255-4521-b9ac-e135a8102df9',
    value: 'VMAU Air Atomizing Fluid Caps',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VMAU Air Atomizing Fluid Caps (VMAU Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 269,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.VmauAirAtomizingSetups,
    ...defaultFacetOption,
    valueId: '511b4866-c60e-459c-8201-1281263a98e0',
    value: 'VMAU Air Atomizing Setups',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VMAU Air Atomizing Setups (VMAU Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 270,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactFlatSprayQcimeg,
    ...defaultFacetOption,
    valueId: '83dfdd49-54a6-467f-b176-3f80595d33bb',
    value: 'WashJet® Extra High Impact - Quick-Connect Spray Tips',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE Extra High Impact - Quick-Connect Spray Tips (QCIMEG)',
            de: 'WashJet\u00AE Extra High Impact - Schnellverschluss-Spr\u00FChspitzen (QCIMEG)',
            fr: 'WashJet\u00AE Extra High Impact - Conseils de pulv\u00E9risation Quick-Connect (QCIMEG)',
            nl: 'WashJet\u00AE Extra High Impact - Quick-Connect Spuittips (QCIMEG)'
          }
        }
      ],
      sortIndex: 271,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactFlatSprayImeg,
    ...defaultFacetOption,
    valueId: '8f336c2b-12b2-4105-8f5e-ff0e2eda5db3',
    value: 'WashJet® Extra High Impact Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE Extra High Impact Flat Spray Nozzles (IMEG)',
            de: 'WashJet\u00AE Extra High Impact Flachspr\u00FChd\u00FCsen (IMEG)',
            fr: 'Buses de pulv\u00E9risation plates WashJet\u00AE Extra High Impact (IMEG)',
            nl: 'WashJet\u00AE Extra High Impact Platte Sproeikoppen (IMEG)'
          }
        }
      ],
      sortIndex: 272,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactFlatSprayMegWeg,
    ...defaultFacetOption,
    valueId: '2b9c31d0-2687-485f-abc3-289fac12bdf1',
    value: 'WashJet® High Impact Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Flat Spray Nozzles (MEG, WEG)',
            de: 'WashJet\u00AE High Impact Flachspr\u00FChd\u00FCsen (MEG, WEG)',
            fr: 'Buses de pulv\u00E9risation plates \u00E0 haut impact WashJet\u00AE (MEG, WEG)',
            nl: 'WashJet\u00AE High Impact Platte Sproeikoppen (MEG, WEG)'
          }
        }
      ],
      sortIndex: 273,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactFlatSprayQcmeg,
    ...defaultFacetOption,
    valueId: '2c668fc0-505f-4772-9b64-cbf7fc6ca4cf',
    value: 'WashJet® High Impact Flat Spray Nozzles - Quick-Connect Spray Tips',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Flat Spray Nozzles - Quick-Connect Spray Tips (QCMEG)',
            de: 'WashJet\u00AE High Impact Flachspr\u00FChd\u00FCsen - Schnellverschluss-Spr\u00FChspitzen (QCMEG)',
            fr: 'Buses de pulv\u00E9risation plates \u00E0 haut impact WashJet\u00AE - Quick-Connect Spray Tips (QCMEG)',
            nl: 'WashJet\u00AE High Impact Platte Sproeikoppen - Quick-Connect Spuittips (QCMEG)'
          }
        }
      ],
      sortIndex: 274,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactFlatSprayMegSstc,
    ...defaultFacetOption,
    valueId: '8ad33685-5313-4bca-88c3-c1eb22baf5b7',
    value:
      'WashJet® High Impact Flat Spray Nozzles - Tungsten Carbide Orifice Insert',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Flat Spray Nozzles - Tungsten Carbide Orifice Insert (MEG-SSTC)',
            de: 'WashJet\u00AE High Impact Flat Spray D\u00FCsen - Wolframkarbid-Blendeneinsatz (MEG-SSTC)',
            fr: 'Buses de pulv\u00E9risation plates \u00E0 haut impact WashJet\u00AE - Insert \u00E0 orifice en carbure de tungst\u00E8ne (MEG-SSTC)',
            nl: 'WashJet\u00AE High Impact Flat Spray Nozzles - Wolfraamcarbide Orifice Insert (MEG-SSTC)'
          }
        }
      ],
      sortIndex: 275,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactSolidStreamMegWeg,
    ...defaultFacetOption,
    valueId: '8c8a1da2-6c6c-4fd6-a660-6a144642482d',
    value: 'WashJet® High Impact Solid Stream Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Solid Stream Nozzles (MEG, WEG)',
            de: 'WashJet\u00AE Hochleistungs-Vollstromd\u00FCsen (MEG, WEG)',
            fr: 'Buses washJet\u00AE High Impact Solid Stream (MEG, WEG)',
            nl: 'WashJet\u00AE High Impact Solid Stream Nozzles (MEG, WEG)'
          }
        }
      ],
      sortIndex: 276,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactSolidStreamQcmeg,
    ...defaultFacetOption,
    valueId: '048c87f2-931e-460c-98a2-748be62be487',
    value:
      'WashJet® High Impact Solid Stream Nozzles - Quick-Connect Spray Tips',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Solid Stream Nozzles - Quick-Connect Spray Tips (QCMEG)',
            de: 'WashJet\u00AE High Impact Solid Stream D\u00FCsen - Schnellverschluss-Spr\u00FChspitzen (QCMEG)',
            fr: 'Buses washJet\u00AE High Impact Solid Stream - Embouts de pulv\u00E9risation \u00E0 connexion rapide (QCMEG)',
            nl: 'WashJet\u00AE High Impact Solid Stream Nozzles - Quick-Connect Spuittips (QCMEG)'
          }
        }
      ],
      sortIndex: 277,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.HighImpactSolidStreamMegSstc,
    ...defaultFacetOption,
    valueId: '2243c78c-6d29-4ce8-936a-9e3315454bd2',
    value:
      'WashJet® High Impact Solid Stream Nozzles - Tungsten Carbide Orifice Insert',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Solid Stream Nozzles - Tungsten Carbide Orifice Insert (MEG-SSTC)',
            de: 'WashJet\u00AE High Impact Solid Stream D\u00FCsen - Wolframkarbid-Blendeneinsatz (MEG-SSTC)',
            fr: 'Buses washJet\u00AE High Impact Solid Stream - Insert \u00E0 orifice en carbure de tungst\u00E8ne (MEG-SSTC)',
            nl: 'WashJet\u00AE High Impact Solid Stream Nozzles - Wolfraamcarbide Orifice Insert (MEG-SSTC)'
          }
        }
      ],
      sortIndex: 278,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeAxBx,
    ...defaultFacetOption,
    valueId: '3c509403-f286-41b9-a954-8a1d999bfa4e',
    value: 'WhirlJet® Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles (AX, BX)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen (AX, BX)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE (AX, BX)',
            nl: 'WhirlJet\u00AE Holle Conus Nozzles (AX, BX)'
          }
        }
      ],
      sortIndex: 279,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeCf,
    ...defaultFacetOption,
    valueId: '1d228a88-c343-4c66-94a7-ea427488689f',
    value: 'WhirlJet® Hollow Cone Nozzles - Cast - Flanged',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Cast - Flanged (CF)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - gegossen - Flansch (CF)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Cast - \u00C0 bride (CF)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Gegoten - Flens (CF)'
          }
        }
      ],
      sortIndex: 280,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeD,
    ...defaultFacetOption,
    valueId: '1294a136-ba0c-49c0-8719-fb6090a5a948',
    value: 'WhirlJet® Hollow Cone Nozzles - Cast - One-piece',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Cast - One-piece (D)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Guss - Einteilig (D)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Cast - Monobloc (D)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Gegoten - Eendelig (D)'
          }
        }
      ],
      sortIndex: 281,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeCx,
    ...defaultFacetOption,
    valueId: '3441dbc9-29af-4a0a-8132-964951d837be',
    value: 'WhirlJet® Hollow Cone Nozzles - Cast - One-piece - Slope-bottom',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Cast - One-piece - Slope-bottom (CX)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Guss - Einteilig - Hangboden (CX)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Cast - Monobloc - Fond de pente (CX)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Gegoten - Eendelig - Hellingsbodem (CX)'
          }
        }
      ],
      sortIndex: 282,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeCrc,
    ...defaultFacetOption,
    valueId: '40d60d4e-63d1-4fa0-97d0-ade0baef55d1',
    value: 'WhirlJet® Hollow Cone Nozzles - Cast - Two-piece',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Cast - Two-piece (CRC)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - gegossen - zweiteilig (CRC)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Cast - Deux pi\u00E8ces (CRC)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Gegoten - Tweedelig (CRC)'
          }
        }
      ],
      sortIndex: 283,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleHollowConeE,
    ...defaultFacetOption,
    valueId: 'c703fb0c-f14a-4ee0-af62-8b7291ac1de1',
    value: 'WhirlJet® Hollow Cone Nozzles - Extra Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Extra Wide Angle Spray (E)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Extra Weitwinkelspray (E)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray extra grand angle (E)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Extra Wide Angle Spray (E)'
          }
        }
      ],
      sortIndex: 284,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SprayHollowConeBd,
    ...defaultFacetOption,
    valueId: 'a2cc3638-85b2-48d8-8e93-bc98a004153d',
    value: 'WhirlJet® Hollow Cone Nozzles - Inline Style',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Inline Style (BD)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Inline-Stil (BD)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Style en ligne (BD)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Inline Style (BD)'
          }
        }
      ],
      sortIndex: 285,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SprayHollowConeBdm,
    ...defaultFacetOption,
    valueId: '9c8c4bfb-53ee-4710-970c-ae11411aabca',
    value: 'WhirlJet® Hollow Cone Nozzles - Inline Style - Nylon Body',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Inline Style - Nylon Body (BDM)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Inline Style - Nylonk\u00F6rper (BDM)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Style en ligne - Corps en nylon (BDM)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Inline Style - Nylon Body (BDM)'
          }
        }
      ],
      sortIndex: 286,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SprayHollowConeBa,
    ...defaultFacetOption,
    valueId: 'f2d76ebc-7c5e-44f4-836e-0e818e3630e3',
    value: 'WhirlJet® Hollow Cone Nozzles - Offset Style',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Offset Style (BA)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Offset-Stil (BA)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Style d\u00E9cal\u00E9 (BA)',
            nl: 'WhirlJet\u00AE Holle Conus Nozzles - Offset Stijl (BA)'
          }
        }
      ],
      sortIndex: 287,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.StandardAngleHollowConeApLapLbp,
    ...defaultFacetOption,
    valueId: '3b81914f-c6a1-4377-a8bb-334b5c32da47',
    value: 'WhirlJet® Hollow Cone Nozzles - Polypropylene',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Polypropylene (AP, LAP, LBP)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Polypropylen (AP, LAP, LBP)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Polypropyl\u00E8ne (AP, LAP, LBP)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Polypropyleen (AP, LAP, LBP)'
          }
        }
      ],
      sortIndex: 288,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleHollowConeAxWBxW,
    ...defaultFacetOption,
    valueId: 'ab2a51fa-4a6d-4a0c-9530-61a9261ffcc9',
    value: 'WhirlJet® Hollow Cone Nozzles - Wide Angle Spray',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray (AX-W, BX-W)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Weitwinkelspray (AX-W, BX-W)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray grand angle (AX-W, BX-W)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Groothoek Spray (AX-W, BX-W)'
          }
        }
      ],
      sortIndex: 289,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.SprayHollowConeBdW,
    ...defaultFacetOption,
    valueId: '4b411e3d-05ba-471c-a118-cc825f6ec016',
    value: 'WhirlJet® Hollow Cone Nozzles - Wide Angle Spray - Inline Style',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray - Inline Style (BD-W)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Weitwinkelspray - Inline-Stil (BD-W)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray grand angle - Style en ligne (BD-W)',
            nl: 'WhirlJet\u00AE Holle Kegel Nozzles - Groothoek Spray - Inline Style (BD-W)'
          }
        }
      ],
      sortIndex: 290,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.WideAngleHollowConeApWLapWLbpW,
    ...defaultFacetOption,
    valueId: 'a1b9549b-0168-40ba-92ec-ae23ca1cb1e2',
    value: 'WhirlJet® Hollow Cone Nozzles - Wide Angle Spray - Polypropylene',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray - Polypropylene (AP-W, LAP-W, LBP-W)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Weitwinkelspray - Polypropylen (AP-W, LAP-W, LBP-W)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray grand angle - Polypropyl\u00E8ne (AP-W, LAP-W, LBP-W)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray - Polypropyleen (AP-W, LAP-W, LBP-W)'
          }
        }
      ],
      sortIndex: 291,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.FlatFanY767,
    ...defaultFacetOption,
    valueId: '77772412-79df-4a83-915d-829ddfe1d2cd',
    value: 'WindJet® Compact Flat Fan Air Nozzle, ABS',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WindJet\u00AE Compact Flat Fan Air Nozzle, ABS (Y767)'
          }
        }
      ],
      sortIndex: 292,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.FlatFanAa727,
    ...defaultFacetOption,
    valueId: 'e7069cf7-fb16-4c94-8503-adbd9468f22a',
    value: 'WindJet® Flat Fan Air Nozzle, ABS / PPS / Stainless Steel',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WindJet\u00AE Flat Fan Air Nozzle, ABS / PPS / Stainless Steel (AA727)'
          }
        }
      ],
      sortIndex: 293,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.FlatFanY727,
    ...defaultFacetOption,
    valueId: '934bd134-458f-4eed-b0cc-63dfa2bdba81',
    value: 'WindJet® Flat Fan Air Nozzle, Aluminum',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'WindJet\u00AE Flat Fan Air Nozzle, Aluminum (Y727)' }
        }
      ],
      sortIndex: 294,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.FlatFanDaa727,
    ...defaultFacetOption,
    valueId: 'e0ba38e2-f527-4030-b8c6-28987eaa605d',
    value: 'WindJet® Flat Fan Air Nozzle, Food Grade PVDF',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WindJet\u00AE Flat Fan Air Nozzle, Food Grade PVDF (DAA727)'
          }
        }
      ],
      sortIndex: 295,
      seoPath: ''
    }
  },
  {
    key: ModelFacetOptionKey.RoundSprayAa707,
    ...defaultFacetOption,
    valueId: '99fcc03d-fc27-4480-8b5f-5f15bb4b2c37',
    value: 'WindJet® Round Spray Air Nozzle',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WindJet\u00AE Round Spray Air Nozzle (AA707)',
            de: 'WindJet\u00AE Runde Spr\u00FChluftd\u00FCse (AA707)',
            fr: 'Buse d\u2019air windJet\u00AE Round Spray (AA707)',
            nl: 'WindJet\u00AE ronde sproeikop (AA707)'
          }
        }
      ],
      sortIndex: 296,
      seoPath: ''
    }
  }
];

export const productModelFacet: Facet<
  ModelFacetOptionKey,
  FacetOption<ModelFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ProductModel,
  attributeTypeCode: 'ProductModel',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    displayName: 'Model',
    description: 'Model',
    isFacetingEnabled: true
  },
  options: productModelFacetOptions
};
