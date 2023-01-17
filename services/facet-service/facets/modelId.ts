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
  _18jAirAtomizingAssemblies = '_18jAirAtomizingAssemblies',
  _18jAirAtomizingBodies = '_18jAirAtomizingBodies',
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
  AdjustableBallFittings36275 = 'AdjustableBallFittings36275',
  AirActuatedAirAtomizing1053612j = 'AirActuatedAirAtomizing1053612j',
  AirActuatedAirAtomizing14jau = 'AirActuatedAirAtomizing14jau',
  AirActuatedAirAtomizing14jauco = 'AirActuatedAirAtomizing14jauco',
  AirActuatedAirAtomizing1933014jaupm = 'AirActuatedAirAtomizing1933014jaupm',
  AirActuatedAirAtomizing1053514j = 'AirActuatedAirAtomizing1053514j',
  AirActuatedAirAtomizing1324214jau = 'AirActuatedAirAtomizing1324214jau',
  AirActuatedAirAtomizing14jaumco = 'AirActuatedAirAtomizing14jaumco',
  AirActuatedAirAtomizing14jaupmco = 'AirActuatedAirAtomizing14jaupmco',
  AirActuatedAirAtomizing1088014jau = 'AirActuatedAirAtomizing1088014jau',
  AirActuatedAirAtomizing731014jau = 'AirActuatedAirAtomizing731014jau',
  AirActuatedAirAtomizing14jaupm = 'AirActuatedAirAtomizing14jaupm',
  AirActuatedAirAtomizing621814jau = 'AirActuatedAirAtomizing621814jau',
  AirActuatedAirAtomizing608314jau = 'AirActuatedAirAtomizing608314jau',
  AirActuatedAirAtomizing14vmau = 'AirActuatedAirAtomizing14vmau',
  AirActuatedAirAtomizing18jjau = 'AirActuatedAirAtomizing18jjau',
  AirActuatedAirAtomizing1769018jjau = 'AirActuatedAirAtomizing1769018jjau',
  AirActuatedAirAtomizing4966018jjau = 'AirActuatedAirAtomizing4966018jjau',
  AirActuatedAirAtomizing1470018jjau = 'AirActuatedAirAtomizing1470018jjau',
  AirActuatedAirAtomizing18jjaumco = 'AirActuatedAirAtomizing18jjaumco',
  AirActuatedAirAtomizingD55500Jau = 'AirActuatedAirAtomizingD55500Jau',
  AirActuatedAirAtomizing3849918jjau = 'AirActuatedAirAtomizing3849918jjau',
  AirActuatedAirAtomizing1467518jjau = 'AirActuatedAirAtomizing1467518jjau',
  AirActuatedAirAtomizing1688318jjau = 'AirActuatedAirAtomizing1688318jjau',
  AirActuatedAirAtomizing7210018jjau = 'AirActuatedAirAtomizing7210018jjau',
  AirActuatedAirAtomizing1686018jjau = 'AirActuatedAirAtomizing1686018jjau',
  AirActuatedAirAtomizing18vau = 'AirActuatedAirAtomizing18vau',
  AirActuatedAirAtomizingVx82 = 'AirActuatedAirAtomizingVx82',
  AirActuatedAirAtomizingVx72 = 'AirActuatedAirAtomizingVx72',
  AirActuatedAirAtomizingVx80 = 'AirActuatedAirAtomizingVx80',
  AirActuatedAirAtomizingVx70 = 'AirActuatedAirAtomizingVx70',
  AirActuatedHydraulicD55500Jauh0 = 'AirActuatedHydraulicD55500Jauh0',
  AirActuatedHydraulicD55500Jauh1 = 'AirActuatedHydraulicD55500Jauh1',
  AirActuatedHydraulic18jjauh = 'AirActuatedHydraulic18jjauh',
  AirActuatedHydraulicAa24aua = 'AirActuatedHydraulicAa24aua',
  AirActuatedHydraulicAa24aua8395 = 'AirActuatedHydraulicAa24aua8395',
  AirActuatedHydraulicAa24aua8980 = 'AirActuatedHydraulicAa24aua8980',
  AirActuatedHydraulicAa24aua20190 = 'AirActuatedHydraulicAa24aua20190',
  AirActuatedHydraulic14jauh = 'AirActuatedHydraulic14jauh',
  AirActuatedHydraulicAa22auhSs14799 = 'AirActuatedHydraulicAa22auhSs14799',
  AirActuatedHydraulicAa22auh7676 = 'AirActuatedHydraulicAa22auh7676',
  AirActuatedHydraulicAa22auh = 'AirActuatedHydraulicAa22auh',
  AirActuatedHydraulicAa22auhSs11024 = 'AirActuatedHydraulicAa22auhSs11024',
  SprayHollowCone8686 = 'SprayHollowCone8686',
  ThrottlingAndPressureReliefRegulatingValves8460 = 'ThrottlingAndPressureReliefRegulatingValves8460',
  LargeFreePassageFullConeRRrRf = 'LargeFreePassageFullConeRRrRf',
  ElectricallyActuatedAirAtomizingAa10000jjau = 'ElectricallyActuatedAirAtomizingAa10000jjau',
  ElectricallyActuatedAirAtomizingAa28jjau49815 = 'ElectricallyActuatedAirAtomizingAa28jjau49815',
  ElectricallyActuatedAirAtomizingAa29jauco = 'ElectricallyActuatedAirAtomizingAa29jauco',
  ElectricallyActuatedAirAtomizingAa10000jau10 = 'ElectricallyActuatedAirAtomizingAa10000jau10',
  ElectricallyActuatedHydraulicAa250auh = 'ElectricallyActuatedHydraulicAa250auh',
  ElectricallyActuatedHydraulicAa26auh = 'ElectricallyActuatedHydraulicAa26auh',
  NarrowAngleDeflectedFlatSprayP = 'NarrowAngleDeflectedFlatSprayP',
  WideAngleDeflectedFlatSprayTek = 'WideAngleDeflectedFlatSprayTek',
  WideAngleDeflectedFlatSprayK = 'WideAngleDeflectedFlatSprayK',
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
  FullConeDHh = 'FullConeDHh',
  StandardAngleFullConeDHh = 'StandardAngleFullConeDHh',
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
  HighPressureGunjetSprayGunsAa30a = 'HighPressureGunjetSprayGunsAa30a',
  HighPressureGunjetSprayGunsAa60 = 'HighPressureGunjetSprayGunsAa60',
  HighPressureGunjetSprayGunsAa80 = 'HighPressureGunjetSprayGunsAa80',
  HighPressureGunjetSprayGunsPw4000a = 'HighPressureGunjetSprayGunsPw4000a',
  HighPressureGunjetSprayGunsPw4000as = 'HighPressureGunjetSprayGunsPw4000as',
  HighPressureGunjetSprayGunsAa70 = 'HighPressureGunjetSprayGunsAa70',
  LowPressureGunjetSprayGunsCu150a = 'LowPressureGunjetSprayGunsCu150a',
  LowPressureGunjetSprayGunsAa3020940 = 'LowPressureGunjetSprayGunsAa3020940',
  LowPressureGunjetSprayGunsAa6021580 = 'LowPressureGunjetSprayGunsAa6021580',
  LowPressureGunjetSprayGunsAa43lc = 'LowPressureGunjetSprayGunsAa43lc',
  LowPressureGunjetSprayGunsAa30l = 'LowPressureGunjetSprayGunsAa30l',
  LowPressureGunjetSprayGuns2362430l = 'LowPressureGunjetSprayGuns2362430l',
  MediumPressureGunjetSprayGuns3653360 = 'MediumPressureGunjetSprayGuns3653360',
  MediumPressureGunjetSprayGunsAa43hc = 'MediumPressureGunjetSprayGunsAa43hc',
  MediumPressureGunjetSprayGunsAa23h = 'MediumPressureGunjetSprayGunsAa23h',
  MediumPressureGunjetSprayGunsAa23l = 'MediumPressureGunjetSprayGunsAa23l',
  MediumPressureGunjetSprayGunsAa23l45885 = 'MediumPressureGunjetSprayGunsAa23l45885',
  HighImpactSolidjetD55606 = 'HighImpactSolidjetD55606',
  SingleOrificeHydraulicFineSprayLnLnn = 'SingleOrificeHydraulicFineSprayLnLnn',
  SingleOrificeHydraulicFineSprayLndLnnd = 'SingleOrificeHydraulicFineSprayLndLnnd',
  SingleOrificeHydraulicFineSprayNNn = 'SingleOrificeHydraulicFineSprayNNn',
  SingleOrificeHydraulicFineSprayM = 'SingleOrificeHydraulicFineSprayM',
  SingleOrificeHydraulicFineSprayNW = 'SingleOrificeHydraulicFineSprayNW',
  LowPressureGunjetSprayGuns6104 = 'LowPressureGunjetSprayGuns6104',
  LowPressureGunjetSprayGuns6590 = 'LowPressureGunjetSprayGuns6590',
  LowPressureGunjetSprayGunsAa36 = 'LowPressureGunjetSprayGunsAa36',
  LowPressureGunjetSprayGuns4688 = 'LowPressureGunjetSprayGuns4688',
  LowPressureGunjetSprayGuns6466 = 'LowPressureGunjetSprayGuns6466',
  MediumPressureGunjetSprayGunsAa31 = 'MediumPressureGunjetSprayGunsAa31',
  LowPressureGunjetSprayGuns236233114f = 'LowPressureGunjetSprayGuns236233114f',
  PromaxQuickjetQuickConnectQmvv = 'PromaxQuickjetQuickConnectQmvv',
  QuickFloodjetQuickConnectQstk = 'QuickFloodjetQuickConnectQstk',
  MiniQuickVeejetQuickConnectQsvv = 'MiniQuickVeejetQuickConnectQsvv',
  ThrottlingAndPressureReliefRegulatingValves6815 = 'ThrottlingAndPressureReliefRegulatingValves6815',
  ThrottlingAndPressureReliefRegulatingValves6815g = 'ThrottlingAndPressureReliefRegulatingValves6815g',
  ThrottlingAndPressureReliefRegulatingValvesAa110 = 'ThrottlingAndPressureReliefRegulatingValvesAa110',
  ThrottlingAndPressureReliefRegulatingValves23120 = 'ThrottlingAndPressureReliefRegulatingValves23120',
  ThrottlingAndPressureReliefRegulatingValves23120a = 'ThrottlingAndPressureReliefRegulatingValves23120a',
  PromaxQuickFulljetQuickConnectQpha = 'PromaxQuickFulljetQuickConnectQpha',
  PromaxQuickFulljetQuickConnectQphaW = 'PromaxQuickFulljetQuickConnectQphaW',
  PromaxQuickjetQuickConnectQpta = 'PromaxQuickjetQuickConnectQpta',
  PromaxQuickjetQuickConnectQppaQppm = 'PromaxQuickjetQuickConnectQppaQppm',
  ElectricallyActuatedHydraulicAa10000auh03Z1 = 'ElectricallyActuatedHydraulicAa10000auh03Z1',
  ElectricallyActuatedHydraulicAa10000auh03 = 'ElectricallyActuatedHydraulicAa10000auh03',
  ElectricallyActuatedHydraulicAa10000auh7244014 = 'ElectricallyActuatedHydraulicAa10000auh7244014',
  ElectricallyActuatedHydraulicAa10000auh104210 = 'ElectricallyActuatedHydraulicAa10000auh104210',
  ElectricallyActuatedHydraulicAa10000auh104215 = 'ElectricallyActuatedHydraulicAa10000auh104215',
  ElectricallyActuatedHydraulicAa10000auh104214 = 'ElectricallyActuatedHydraulicAa10000auh104214',
  ElectricallyActuatedHydraulicAa10000auh10 = 'ElectricallyActuatedHydraulicAa10000auh10',
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
  QuickVeejetQuickConnectQuaQluaQvva = 'QuickVeejetQuickConnectQuaQluaQvva',
  QuickjetQuickConnectNozzleBodiesQjaQjja = 'QuickjetQuickConnectNozzleBodiesQjaQjja',
  QuickjetQuickConnectNozzleBodiesQjlaQjjla = 'QuickjetQuickConnectNozzleBodiesQjlaQjjla',
  QuickjetQuickConnectNozzleBodiesQjjs = 'QuickjetQuickConnectNozzleBodiesQjjs',
  TankjetD27500 = 'TankjetD27500',
  LargeFreePassageFullConeHhsjx = 'LargeFreePassageFullConeHhsjx',
  LargeFreePassageFullConeHhsj = 'LargeFreePassageFullConeHhsj',
  LargeFreePassageHollowConeBsj = 'LargeFreePassageHollowConeBsj',
  SplitEyeletConnectors15475 = 'SplitEyeletConnectors15475',
  SplitEyeletConnectors8370 = 'SplitEyeletConnectors8370',
  SplitEyeletConnectors7521 = 'SplitEyeletConnectors7521',
  ForTanksUpTo20FtTj14 = 'ForTanksUpTo20FtTj14',
  ForTanksUpTo20FtTj19 = 'ForTanksUpTo20FtTj19',
  ForTanksUpTo10FtTj9A = 'ForTanksUpTo10FtTj9A',
  ForTanksUpTo20FtTj9BTj9C = 'ForTanksUpTo20FtTj9BTj9C',
  ForTanksUpTo20FtD26984 = 'ForTanksUpTo20FtD26984',
  ForTanksUpTo20FtD41800e = 'ForTanksUpTo20FtD41800e',
  ForTanksUpTo20FtD40159 = 'ForTanksUpTo20FtD40159',
  ForTanksUpTo10FtD41892 = 'ForTanksUpTo10FtD41892',
  ForTanksUpTo5Ft30473 = 'ForTanksUpTo5Ft30473',
  ForTanksUpTo5Ft23240 = 'ForTanksUpTo5Ft23240',
  ForTanksUpTo5Ft21400a = 'ForTanksUpTo5Ft21400a',
  ForTanksUpTo5FtD26564 = 'ForTanksUpTo5FtD26564',
  ForTanksUpTo20FtD41990 = 'ForTanksUpTo20FtD41990',
  ForTanksUpTo10Ft18250a = 'ForTanksUpTo10Ft18250a',
  ForTanksUpTo20Ft2850028500R = 'ForTanksUpTo20Ft2850028500R',
  ForTanksUpTo100FtTj360 = 'ForTanksUpTo100FtTj360',
  ForTanksUpTo45FtTj78m = 'ForTanksUpTo45FtTj78m',
  ForTanksUpTo45FtTj75Tj75h = 'ForTanksUpTo45FtTj75Tj75h',
  ForTanksUpTo45FtTj65Tj65ht = 'ForTanksUpTo45FtTj65Tj65ht',
  ForTanksUpTo45FtTj78Tj78d = 'ForTanksUpTo45FtTj78Tj78d',
  ForTanksUpTo100FtTj80Tj80h = 'ForTanksUpTo100FtTj80Tj80h',
  ForTanksUpTo100FtTj180 = 'ForTanksUpTo100FtTj180',
  ForTanksUpTo45FtTj16 = 'ForTanksUpTo45FtTj16',
  ForTanksUpTo45FtYmd3 = 'ForTanksUpTo45FtYmd3',
  ForTanksUpTo100FtAa290 = 'ForTanksUpTo100FtAa290',
  ForTanksUpTo20FtAa090 = 'ForTanksUpTo20FtAa090',
  ForTanksUpTo45FtAa190 = 'ForTanksUpTo45FtAa190',
  TankjetCleanup = 'TankjetCleanup',
  ForTanksUpTo10Ft63536353Mfp = 'ForTanksUpTo10Ft63536353Mfp',
  ForTanksUpTo20Ft12900 = 'ForTanksUpTo20Ft12900',
  ForTanksUpTo5FtVsm = 'ForTanksUpTo5FtVsm',
  ForTanksUpTo20Ft63225632253a = 'ForTanksUpTo20Ft63225632253a',
  ThrottlingAndPressureReliefRegulatingValves23520 = 'ThrottlingAndPressureReliefRegulatingValves23520',
  LowPressureGunjetSprayGuns22650Pp = 'LowPressureGunjetSprayGuns22650Pp',
  StrainersAa122 = 'StrainersAa122',
  StrainersAa122ml = 'StrainersAa122ml',
  StrainersTwd = 'StrainersTwd',
  StrainersAa124 = 'StrainersAa124',
  StrainersAa124ml = 'StrainersAa124ml',
  StrainersAa124sc = 'StrainersAa124sc',
  StrainersAa430ml = 'StrainersAa430ml',
  StrainersAa124a = 'StrainersAa124a',
  StrainersAa124asc = 'StrainersAa124asc',
  StrainersAa430mlsc = 'StrainersAa430mlsc',
  UltraHighPressureFlatSprayFs013Fs020 = 'UltraHighPressureFlatSprayFs013Fs020',
  UltraHighPressureNozzleBodies5883358834 = 'UltraHighPressureNozzleBodies5883358834',
  UltraHighPressureSolidStreamVs940 = 'UltraHighPressureSolidStreamVs940',
  UltraHighPressureSolidStreamVs625 = 'UltraHighPressureSolidStreamVs625',
  UltraHighPressureSolidStreamVs010 = 'UltraHighPressureSolidStreamVs010',
  UltraHighPressureSolidStreamVs020 = 'UltraHighPressureSolidStreamVs020',
  UltraHighPressureSolidStreamVs051 = 'UltraHighPressureSolidStreamVs051',
  UnijetFlatSprayTk = 'UnijetFlatSprayTk',
  UnijetFlatSprayEg = 'UnijetFlatSprayEg',
  UnijetFlatSpray13802 = 'UnijetFlatSpray13802',
  UnijetDTip = 'UnijetDTip',
  UnijetDTipAndBody = 'UnijetDTipAndBody',
  UnijetFullConeTg = 'UnijetFullConeTg',
  UnijetFullConeTgSq = 'UnijetFullConeTgSq',
  UnijetFullConeTgW = 'UnijetFullConeTgW',
  UnijetFullConeThW = 'UnijetFullConeThW',
  UnijetHollowConeTx = 'UnijetHollowConeTx',
  UnijetHollowConeTn = 'UnijetHollowConeTn',
  UnijetHollowConeTnSstc = 'UnijetHollowConeTnSstc',
  UnijetHollowConeTW = 'UnijetHollowConeTW',
  UnijetNozzleBodiesTTt = 'UnijetNozzleBodiesTTt',
  UnijetNozzleBodies11430 = 'UnijetNozzleBodies11430',
  UnijetFlatSprayTpu = 'UnijetFlatSprayTpu',
  UnspecifiedModel = 'UnspecifiedModel',
  VaaVauAirAtomizingAirCaps = 'VaaVauAirAtomizingAirCaps',
  VaaVauAirAtomizingAssemblies = 'VaaVauAirAtomizingAssemblies',
  VaaVauAirAtomizingBodies = 'VaaVauAirAtomizingBodies',
  VaaVauAirAtomizingFluidCaps = 'VaaVauAirAtomizingFluidCaps',
  VaaVauAirAtomizingSetups = 'VaaVauAirAtomizingSetups',
  StandardHUHDu = 'StandardHUHDu',
  StandardFlatSprayHVvHDt = 'StandardFlatSprayHVvHDt',
  StandardFlatSprayHVvl = 'StandardFlatSprayHVvl',
  StandardU = 'StandardU',
  VmauAirAtomizingAirCaps = 'VmauAirAtomizingAirCaps',
  VmauAirAtomizingAssemblies = 'VmauAirAtomizingAssemblies',
  VmauAirAtomizingBodies = 'VmauAirAtomizingBodies',
  VmauAirAtomizingFluidCaps = 'VmauAirAtomizingFluidCaps',
  VmauAirAtomizingSetups = 'VmauAirAtomizingSetups',
  HighImpactFlatSprayQcimeg = 'HighImpactFlatSprayQcimeg',
  HighImpactFlatSprayImeg = 'HighImpactFlatSprayImeg',
  HighImpactMegWeg = 'HighImpactMegWeg',
  HighImpactMegSstc = 'HighImpactMegSstc',
  HighImpactQcmeg = 'HighImpactQcmeg',
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
          value: {
            en: '1/4J Air Atomizing Air Caps (1/4J Air Atomizing Air Caps)'
          }
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
          value: {
            en: '1/4J Air Atomizing Assemblies (1/4J Air Atomizing Assemblies)'
          }
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
          value: {
            en: '1/4J Air Atomizing Bodies (1/4J Air Atomizing Bodies)'
          }
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
          value: {
            en: '1/4J Air Atomizing Fluid Caps (1/4J Air Atomizing Fluid Caps)'
          }
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
          value: {
            en: '1/4J Air Atomizing Setups (1/4J Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 9,
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
          value: {
            en: '1/8J Air Atomizing Assemblies (1/8J Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 10,
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
          value: {
            en: '1/8J Air Atomizing Bodies (1/8J Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 11,
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
          value: {
            en: '1/8JJ Air Atomizing Air Caps (1/8JJ Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 12,
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
          value: {
            en: '1/8JJ Air Atomizing Assemblies (1/8JJ Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 13,
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
          value: {
            en: '1/8JJ Air Atomizing Bodies (1/8JJ Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 14,
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
          value: {
            en: '1/8JJ Air Atomizing Fluid Caps (1/8JJ Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 15,
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
          value: {
            en: '1/8JJ Air Atomizing Setups (1/8JJ Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 16,
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
          value: {
            en: '1J Air Atomizing Air Caps (1J Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 17,
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
          value: {
            en: '1J Air Atomizing Assemblies (1J Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 18,
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
          value: { en: '1J Air Atomizing Bodies (1J Air Atomizing Bodies)' }
        }
      ],
      sortIndex: 19,
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
          value: {
            en: '1J Air Atomizing Fluid Caps (1J Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 20,
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
          value: { en: '1J Air Atomizing Setups (1J Air Atomizing Setups)' }
        }
      ],
      sortIndex: 21,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AdjustableBallFittings36275,
    ...defaultFacetOption,
    value: '277a628d-fb0e-4e20-9256-943cfedb308d',
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
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1053612j,
    ...defaultFacetOption,
    value: '1edd1a11-dfb8-4a7e-8e58-9740aa661f9b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/2\u0022 Inlet and Self-Contained Air Cylinder (10536-1/2J)'
          }
        }
      ],
      sortIndex: 23,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14jau,
    ...defaultFacetOption,
    value: 'e5ceef72-9e96-49d5-919e-8250267a3a80',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet (1/4JAU)'
          }
        }
      ],
      sortIndex: 24,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14jauco,
    ...defaultFacetOption,
    value: '660f2c89-3c3d-48c1-b8e9-12435a3dd9c9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet and Clean-Out Needle (1/4JAUCO)'
          }
        }
      ],
      sortIndex: 25,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1933014jaupm,
    ...defaultFacetOption,
    value: '41cade1c-de60-468f-be35-4feff1671c39',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet and Lockring for  Atomizing Air Adjustment, Plate-Mounted (19330-1/4JAUPM)'
          }
        }
      ],
      sortIndex: 26,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1053514j,
    ...defaultFacetOption,
    value: '938ed361-5a16-47cf-a60f-b69452dc3e60',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet and Self-Contained Air Cylinder (10535-1/4J)'
          }
        }
      ],
      sortIndex: 27,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1324214jau,
    ...defaultFacetOption,
    value: '58df9ab4-f018-49e5-8ff2-f65c4a222959',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet and Single Air Inlet for Cylinder and Atomizing Air, for Large Fluid Caps (13242-1/4JAU)'
          }
        }
      ],
      sortIndex: 28,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14jaumco,
    ...defaultFacetOption,
    value: '12708c45-f35e-4525-af0b-d9a9d8b79109',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Clean-Out Needle and Metering Knob (1/4JAUMCO)'
          }
        }
      ],
      sortIndex: 29,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14jaupmco,
    ...defaultFacetOption,
    value: 'cf730fce-c57e-491e-9f36-fd8b0d6dcc04',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Clean-Out Needle and Metering Knob, Plate-Mounted (1/4JAUPMCO)'
          }
        }
      ],
      sortIndex: 30,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1088014jau,
    ...defaultFacetOption,
    value: 'eb12208e-945a-4b9c-ba34-1d8fac2bf2bc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, for Largest Fluid Caps (10880-1/4JAU)'
          }
        }
      ],
      sortIndex: 31,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing731014jau,
    ...defaultFacetOption,
    value: '561c0ef7-16f7-42d1-ad02-9fe1791e17df',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Knurled Head Shut-Off Screw (7310-1/4JAU)'
          }
        }
      ],
      sortIndex: 32,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14jaupm,
    ...defaultFacetOption,
    value: '453c2f0e-eb5e-4fb4-82e0-280be8324b92',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Plate-Mounted (1/4JAUPM)'
          }
        }
      ],
      sortIndex: 33,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing621814jau,
    ...defaultFacetOption,
    value: '429266c2-e0b1-4156-924a-a4c571b8f378',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Single Air Inlet for Cylinder and Atomizing Air (6218-1/4JAU)'
          }
        }
      ],
      sortIndex: 34,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing608314jau,
    ...defaultFacetOption,
    value: '5a886a9a-d264-4ccf-817d-8b9205a8fcc8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Single Air Inlet for Cylinder and Atomizing Air, Manual Shut-Off (6083-1/4JAU)'
          }
        }
      ],
      sortIndex: 35,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing14vmau,
    ...defaultFacetOption,
    value: 'd1064f32-4bcf-41a9-997b-c1fcd0f75ef7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/4\u0022 Inlet, Variable Spray and Modular Construction (1/4VMAU)'
          }
        }
      ],
      sortIndex: 36,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing18jjau,
    ...defaultFacetOption,
    value: '0e47ef9c-9287-4885-a5ea-4691274c09f3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet (1/8JJAU)'
          }
        }
      ],
      sortIndex: 37,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1769018jjau,
    ...defaultFacetOption,
    value: 'd11a18af-c127-489a-955d-ae68316678cc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet and Extension up to 18\u0022 (17690-1/8JJAU)'
          }
        }
      ],
      sortIndex: 38,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing4966018jjau,
    ...defaultFacetOption,
    value: '282b7f4c-f3ce-40f4-b60e-8b7e95bfcaeb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet and Extension, Sprays at 45\u00B0 or 90\u00B0 Angle from Nozzle Body (49660-1/8JJAU)'
          }
        }
      ],
      sortIndex: 39,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1470018jjau,
    ...defaultFacetOption,
    value: '25a3a05d-35bc-49ec-8ae1-ba0194d2c4b0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet and Knurled Head Shut-Off Screw (14700-1/8JJAU)'
          }
        }
      ],
      sortIndex: 40,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing18jjaumco,
    ...defaultFacetOption,
    value: 'fd38a845-ad00-4ece-a1ba-475116b9f3e9',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Clean-Out Needle and Metering Knob (1/8JJAUMCO)'
          }
        }
      ],
      sortIndex: 41,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizingD55500Jau,
    ...defaultFacetOption,
    value: '09c29da1-626f-4845-a89f-64a51477e69d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Compact Block Design (D55500-JAU)'
          }
        }
      ],
      sortIndex: 42,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing3849918jjau,
    ...defaultFacetOption,
    value: '8b1cbbce-8ed4-4d40-bf25-f3a40a4b9c3c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, for use with 1/4J Spray Set-Ups (38499-1/8JJAU)'
          }
        }
      ],
      sortIndex: 43,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1467518jjau,
    ...defaultFacetOption,
    value: '7f8c7575-a84e-4b3b-8fff-73b1e62c32c3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Single Air Inlet for Cylinder and Atomizing Air (14675-1/8JJAU)'
          }
        }
      ],
      sortIndex: 44,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1688318jjau,
    ...defaultFacetOption,
    value: '9abace59-ed93-4719-acf0-f054b861d7a2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Single Air Inlet for Cylinder and Atomizing Air, Sprays at 45\u00B0 Angle from Nozzle Body (16883-1/8JJAU)'
          }
        }
      ],
      sortIndex: 45,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing7210018jjau,
    ...defaultFacetOption,
    value: '7163b537-8e0e-4f02-8e68-98a7018d903a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Smallest Automatic Nozzle Available (72100-1/8JJAU)'
          }
        }
      ],
      sortIndex: 46,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing1686018jjau,
    ...defaultFacetOption,
    value: 'b5b1fc79-ed1d-448d-ab76-c73ae38ca9fe',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Sprays at 45\u00B0 Angle from Nozzle Inlet Axis (16860-1/8JJAU)'
          }
        }
      ],
      sortIndex: 47,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizing18vau,
    ...defaultFacetOption,
    value: '5a7ece8a-7056-4601-b33a-3be1c5200d81',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with 1/8\u0022 Inlet, Variable Spray (1/8VAU)'
          }
        }
      ],
      sortIndex: 48,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizingVx82,
    ...defaultFacetOption,
    value: '547ce13b-e6af-4b8a-a99a-ab48a541ec80',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with Metering Knob for Air Adjustment, 316 Stainless Steel Sanitary Nozzle Body (VX82)'
          }
        }
      ],
      sortIndex: 49,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizingVx72,
    ...defaultFacetOption,
    value: '84ce2b53-81b6-480d-acbc-39bbd29d29d8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle with Metering Knob for Air Adjustment, Stainless Steel and Anodized Aluminum Construction (VX72)'
          }
        }
      ],
      sortIndex: 50,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizingVx80,
    ...defaultFacetOption,
    value: '09b95f2b-03e3-4adf-a60a-351b74b96902',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle, 316 Stainless Steel Sanitary Nozzle Body (VX80)'
          }
        }
      ],
      sortIndex: 51,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedAirAtomizingVx70,
    ...defaultFacetOption,
    value: '4881179a-a072-452f-b551-1130c2a411ff',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzle, Stainless Steel and Anodized Aluminum Construction (VX70)'
          }
        }
      ],
      sortIndex: 52,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicD55500Jauh0,
    ...defaultFacetOption,
    value: 'a6fa54fa-5a66-4d1c-9d2b-72e0087172ce',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with 1/8\u0022 Inlet, Flow up to 0.42 gpm and Compact Block Design (D55500-JAUH0)'
          }
        }
      ],
      sortIndex: 53,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicD55500Jauh1,
    ...defaultFacetOption,
    value: '23bf2f25-ddc3-442b-ae6f-33271a489d72',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with 1/8\u0022 Inlet, Flow up to 1.5 gpm and Compact Block Design (D55500-JAUH1)'
          }
        }
      ],
      sortIndex: 54,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulic18jjauh,
    ...defaultFacetOption,
    value: 'ecf85aba-ee61-4dd2-9647-b70666b171df',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.3 gpm (1/8JJAUH)'
          }
        }
      ],
      sortIndex: 55,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa24aua,
    ...defaultFacetOption,
    value: '447b9a88-8cb6-427b-89c3-0dee2d3ced20',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.6 gpm and Rear Knob for Locking Clean-Out Needle in Place (AA24AUA)'
          }
        }
      ],
      sortIndex: 56,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa24aua8395,
    ...defaultFacetOption,
    value: '7825c33a-d5d7-4a0b-9238-73e5a667b45c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.6 gpm and Rear Knob for Locking Clean-Out Needle in Place and Recirculating Inlets (AA24AUA-8395)'
          }
        }
      ],
      sortIndex: 57,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa24aua8980,
    ...defaultFacetOption,
    value: '1b682906-5029-4c8f-8ae4-0d49878d30ed',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.6 gpm and Rear Knob for Locking Clean-Out Needle in Place, Extensions up to 36\u0022 (AA24AUA-8980)'
          }
        }
      ],
      sortIndex: 58,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa24aua20190,
    ...defaultFacetOption,
    value: 'abc27656-0fa4-451c-b97c-713e8f544e9a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.6 gpm and Rear Knob for Locking Clean-Out Needle in Place, Lightweight Aluminum Body (AA24AUA-20190)'
          }
        }
      ],
      sortIndex: 59,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulic14jauh,
    ...defaultFacetOption,
    value: '61dd75b1-6066-496f-8446-b80ad03911af',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 0.8 gpm (1/4JAUH)'
          }
        }
      ],
      sortIndex: 60,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa22auhSs14799,
    ...defaultFacetOption,
    value: '0cf59d3c-590e-4a6e-8fea-edf309183855',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 2 gpm and Adjusting Screw for Shut-Off Needle (AA22AUH-SS-14799)'
          }
        }
      ],
      sortIndex: 61,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa22auh7676,
    ...defaultFacetOption,
    value: '0d65d0a5-b852-43de-85ae-a738775bb07e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 2 gpm and Extensions up to 36\u0022 (AA22AUH-7676)'
          }
        }
      ],
      sortIndex: 62,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa22auh,
    ...defaultFacetOption,
    value: '8346f5af-8243-4fc7-8e0f-c835108ebf4b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 5 gpm (AA22AUH)'
          }
        }
      ],
      sortIndex: 63,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.AirActuatedHydraulicAa22auhSs11024,
    ...defaultFacetOption,
    value: 'aeb0f86d-3422-4d2e-92cc-fd9984ad5027',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzle with Flow up to 5 gpm and Recirculating Inlets (AA22AUH-SS-11024)'
          }
        }
      ],
      sortIndex: 64,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SprayHollowCone8686,
    ...defaultFacetOption,
    value: '4f868b52-49e2-436c-970b-c2cc22f546c4',
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
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves8460,
    ...defaultFacetOption,
    value: '5d0c9ef2-9156-45b8-8f76-c5397ed3397f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Diaphragm-Type Pressure Relief Valve (8460)' }
        }
      ],
      sortIndex: 66,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LargeFreePassageFullConeRRrRf,
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
    key: ModelIdFacetOptionKey.ElectricallyActuatedAirAtomizingAa10000jjau,
    ...defaultFacetOption,
    value: '166eec60-dcb2-486e-8661-e1feb804048b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle with Flow up to 0.16 gpm (uses JJ Set-Ups),Max Speed 10,000 cpm (AA10000JJAU)'
          }
        }
      ],
      sortIndex: 68,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedAirAtomizingAa28jjau49815,
    ...defaultFacetOption,
    value: '25e505f9-6f51-4ff7-a90a-c3ff2303bba5',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle with Flow up to 0.42 gpm (uses JJ Set-Ups), Quick Change Fluid Module and Max Speed 2,000 cpm (AA28JJAU-49815)'
          }
        }
      ],
      sortIndex: 69,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedAirAtomizingAa29jauco,
    ...defaultFacetOption,
    value: 'f1623ddd-905b-4e86-8279-3227a4721387',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle with Flow up to 0.75 gpm (uses J Set-Ups), Max Speed 1,000 cpm (AA29JAUCO)'
          }
        }
      ],
      sortIndex: 70,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedAirAtomizingAa10000jau10,
    ...defaultFacetOption,
    value: '016f2396-0fb5-4854-bb4f-dfcba003749f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzle with Flow up to 0.75 gpm (uses J Set-Ups), Max Speed 5,000 cpm (AA10000JAU-10)'
          }
        }
      ],
      sortIndex: 71,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa250auh,
    ...defaultFacetOption,
    value: 'ff515a36-2910-4d9f-bd06-19a9408ca959',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm and Max Speed 5,000 cpm (AA250AUH)'
          }
        }
      ],
      sortIndex: 72,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa26auh,
    ...defaultFacetOption,
    value: '1d932aeb-f436-4d7e-9550-25f61bec7bb7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Hydraulic Nozzle with Flow up to 1.1 gpm, Max Speed 1,500 cpm and Max Pressure 2000 psi (AA26AUH)'
          }
        }
      ],
      sortIndex: 73,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NarrowAngleDeflectedFlatSprayP,
    ...defaultFacetOption,
    value: '0650c8d8-df42-4b04-bb45-c06bf6ff01c8',
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
    key: ModelIdFacetOptionKey.WideAngleDeflectedFlatSprayTek,
    ...defaultFacetOption,
    value: 'e0e3dc75-1a9a-46ec-ba9f-4ef665d62b28',
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
    key: ModelIdFacetOptionKey.WideAngleDeflectedFlatSprayK,
    ...defaultFacetOption,
    value: '2582aac8-4f3a-4691-8a58-46f6318c67a4',
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
    key: ModelIdFacetOptionKey.MultiOrificeHydraulicFineSprayFf,
    ...defaultFacetOption,
    value: '370dce2e-3fa3-461d-b6b6-3fe971f1a12d',
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
      sortIndex: 77,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MultiOrificeHydraulicFineSpray7n,
    ...defaultFacetOption,
    value: '9b01fbf5-2571-43d8-8f0e-1ee964e8f669',
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
      sortIndex: 78,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MultiOrificeHydraulicFineSpray7g,
    ...defaultFacetOption,
    value: 'c5d7c48f-d75f-41f2-bac3-b8bb2f256f04',
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
      sortIndex: 79,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NarrowAngleFullConeH15,
    ...defaultFacetOption,
    value: 'ecc062da-17c0-4a21-9608-083726038b04',
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
      sortIndex: 80,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NarrowAngleFullConeG15Gg15,
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
            en: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 Spray Angle - Removable Cap/Vane (G-15, GG-15)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 15\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (G-15, GG-15)',
            fr: 'Buses FullJet\u00AE Full Cone - Angle de pulv\u00E9risation de 15 \u00B0 - Capuchon / palette amovible (G-15, GG-15)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 15\u00B0 Spuithoek - Verwijderbare Cap/Vane (G-15, GG-15)'
          }
        }
      ],
      sortIndex: 81,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NarrowAngleFullConeHh30,
    ...defaultFacetOption,
    value: 'd2a4a723-86e9-4aca-99dd-c8c8f90acf26',
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
      sortIndex: 82,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.NarrowAngleFullConeG30Gg30,
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
            en: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 Spray Angle - Removable Cap/Vane (G-30, GG-30)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - 30\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (G-30, GG-30)',
            fr: '\u00AE Buses Full Cone FullJet - Angle de pulv\u00E9risation de 30 \u00B0 - Capuchon / palette amovible (G-30, GG-30)',
            nl: 'FullJet\u00AE Full Cone Nozzles - 30\u00B0 Spuithoek - Verwijderbare Cap/Vane (G-30, GG-30)'
          }
        }
      ],
      sortIndex: 83,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeHf,
    ...defaultFacetOption,
    value: 'a7f0a9be-adbe-43dd-92e4-d19abd5738a9',
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
      sortIndex: 84,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LargeFreePassageFullConeHmfpHhmfp,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Maximum Free Passage (HMFP, HHMFP)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Maximale Freipassage (HMFP, HHMFP)',
            fr: '\u00AE Buses Full Cone FullJet - Passage libre maximal (HMFP, HHMFP)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Maximale vrije doorgang (HMFP, HHMFP)'
          }
        }
      ],
      sortIndex: 85,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeHHh,
    ...defaultFacetOption,
    value: 'a415a13a-89c6-4620-b63a-739225aa97c1',
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
      sortIndex: 86,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SquareOvalVanelessSprayFullConeGVlGgVl,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Oval Spray - Removable Cap/Vane (G-VL, GG-VL)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Oval Spray - Abnehmbare Kappe/Fl\u00FCgel (G-VL, GG-VL)',
            fr: '\u00AE Buses Full Cone FullJet - Spray ovale - Capuchon/palette amovible (G-VL, GG-VL)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Oval Spray - Verwijderbare Cap/Vane (G-VL, GG-VL)'
          }
        }
      ],
      sortIndex: 87,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.FullConeDHh,
    ...defaultFacetOption,
    value: '13e38fa6-7ee7-4049-9acb-5f0b027be0fe',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet\u00AE Full Cone Nozzles - Plastic - One-piece Design (27500, 27500-R)'
          }
        }
      ],
      sortIndex: 88,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeDHh,
    ...defaultFacetOption,
    value: '494d62fe-4320-4714-98fa-ea757f9f2f89',
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
      sortIndex: 89,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeHhKy,
    ...defaultFacetOption,
    value: '897332ba-4fc0-43ce-ab4d-9d3148cae675',
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
      sortIndex: 90,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeGGg,
    ...defaultFacetOption,
    value: 'c33ec757-8a10-4767-82c9-22e72f40d45d',
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
      sortIndex: 91,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeGaGga,
    ...defaultFacetOption,
    value: '657255a1-a041-4722-9ab2-84c5244b89d6',
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
      sortIndex: 92,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SquareOvalVanelessSprayFullConeGanvGganv,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Vaneless design (GANV, GGANV)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Rechtwinkliger Typ - Vaneless Design (GANV, GGANV)',
            fr: 'Buses FullJet\u00AE Full Cone - Type \u00E0 angle droit - Conception sans palettes (GANV, GGANV)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Haaks type - Vaneless ontwerp (GANV, GGANV)'
          }
        }
      ],
      sortIndex: 93,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleFullConeGaWGgaW,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Wide Angle Spray (GA-W, GGA-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Rechtwinkliger Typ - Weitwinkelspray (GA-W, GGA-W)',
            fr: 'Buses FullJet\u00AE Full Cone - Type \u00E0 angle droit - Spray grand angle (GA-W, GGA-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Right Angle Type - Groothoek Spray (GA-W, GGA-W)'
          }
        }
      ],
      sortIndex: 94,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SquareOvalVanelessSprayFullConeHSqHhSq,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Square Spray - One-piece Design (H-SQ, HH-SQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Square Spray - Einteiliges Design (H-SQ, HH-SQ)',
            fr: '\u00AE Buses FullJet Full Cone - Spray carr\u00E9 - Conception monobloc (H-SQ, HH-SQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Design uit \u00E9\u00E9n stuk (H-SQ, HH-SQ)'
          }
        }
      ],
      sortIndex: 95,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SquareOvalVanelessSprayFullConeGSqGgSq,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Removable Cap/Vane (G-SQ, GG-SQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Square Spray - Abnehmbare Kappe/Fl\u00FCgel (G-SQ, GG-SQ)',
            fr: '\u00AE Buses Full Cone FullJet - Spray carr\u00E9 - Capuchon/palette amovible (G-SQ, GG-SQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Square Spray - Verwijderbare Cap/Vane (G-SQ, GG-SQ)'
          }
        }
      ],
      sortIndex: 96,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeHd,
    ...defaultFacetOption,
    value: '96b61a45-ff98-4bba-bb97-3b24152687e2',
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
      sortIndex: 97,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleFullConeGdGgd,
    ...defaultFacetOption,
    value: 'be75b7f9-7da1-4199-a13d-83f4f9df4d9c',
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
      sortIndex: 98,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleFullConeHWHhW,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Spray - One-piece Design (H-W, HH-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkelspray - Einteiliges Design (H-W, HH-W)',
            fr: '\u00AE Buses FullJet Full Cone - Spray grand angle - Conception monobloc (H-W, HH-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek spray - Design uit \u00E9\u00E9n stuk (H-W, HH-W)'
          }
        }
      ],
      sortIndex: 99,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleFullConeGWGgW,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Spray - Removable Cap/Vane (G-W, GG-W)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkelspray - Abnehmbare Kappe/Fl\u00FCgel (G-W, GG-W)',
            fr: 'Buses FullJet\u00AE Full Cone - Spray grand angle - Capuchon amovible / Palette (G-W, GG-W)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek Spray - Verwijderbare Cap/Vane (G-W, GG-W)'
          }
        }
      ],
      sortIndex: 100,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SquareOvalVanelessSprayFullConeHWsqHhWsq,
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
            en: 'FullJet\u00AE Full Cone Nozzles - Wide Angle Square Spray (H-WSQ, HH-WSQ)',
            de: 'FullJet\u00AE Full Cone D\u00FCsen - Weitwinkel-Vierkantspray (H-WSQ, HH-WSQ)',
            fr: 'Buses FullJet\u00AE Full Cone - Spray carr\u00E9 grand angle (H-WSQ, HH-WSQ)',
            nl: 'FullJet\u00AE Full Cone Nozzles - Groothoek Vierkante Spray (H-WSQ, HH-WSQ)'
          }
        }
      ],
      sortIndex: 101,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsAa30a,
    ...defaultFacetOption,
    value: 'e3009c23-e1cf-4807-a7d0-fcfb26632f74',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 1500 psi (AA30A)'
          }
        }
      ],
      sortIndex: 102,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsAa60,
    ...defaultFacetOption,
    value: 'f0e37e35-a8fa-432a-b03d-9fddfe89d250',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 2500 psi (AA60)'
          }
        }
      ],
      sortIndex: 103,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsAa80,
    ...defaultFacetOption,
    value: 'f80a1af3-65cc-494f-8516-429cba04093f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 3000 psi (AA80)'
          }
        }
      ],
      sortIndex: 104,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsPw4000a,
    ...defaultFacetOption,
    value: '4bf4b952-56e4-42cb-b2f7-fea9527502d5',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 4000 psi (PW4000A)'
          }
        }
      ],
      sortIndex: 105,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsPw4000as,
    ...defaultFacetOption,
    value: '3dc54a53-e941-4e80-b0e2-7741f13e3efa',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 4000 psi, with Swivel (PW4000AS)'
          }
        }
      ],
      sortIndex: 106,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighPressureGunjetSprayGunsAa70,
    ...defaultFacetOption,
    value: 'e78b0a39-4c84-457b-8543-9833464bdf53',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE High Pressure Spray Gun, Max Pressure 5000 psi (AA70)'
          }
        }
      ],
      sortIndex: 107,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsCu150a,
    ...defaultFacetOption,
    value: '7a2d08b0-e531-4caa-bd38-a54b124ddcf8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun with Rubber Cover, Max Pressure 150 psi, Capacity 10 to 22 gpm (CU150A)'
          }
        }
      ],
      sortIndex: 108,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsAa3020940,
    ...defaultFacetOption,
    value: '82582c4b-d0b8-4154-a221-1152ad0e4960',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun with Trigger-Activated Variable Spray Pattern, Max Pressure 250 psi, Capacity 10 gpm (AA30-20940)'
          }
        }
      ],
      sortIndex: 109,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsAa6021580,
    ...defaultFacetOption,
    value: '280861b5-fde1-496c-b93d-041d47e944cc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun with Trigger-Activated Variable Spray Pattern, Max Pressure 250 psi, Capacity 16 gpm (AA60-21580)'
          }
        }
      ],
      sortIndex: 110,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsAa43lc,
    ...defaultFacetOption,
    value: '41db17a6-6ef6-4e9d-b806-e4077fd9b739',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun, Impact Resistant, Max Pressure 200 psi, Capacity 15 gpm (AA43LC)'
          }
        }
      ],
      sortIndex: 111,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsAa30l,
    ...defaultFacetOption,
    value: '599ceff4-2998-4c0f-aa33-9dd61e265756',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun, Max Pressure 200 psi (AA30L)'
          }
        }
      ],
      sortIndex: 112,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns2362430l,
    ...defaultFacetOption,
    value: '8fc23212-19f2-4f84-918f-007ef1aee0d2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Low Pressure Spray Gun, Max Pressure 75 psi, Adjustable Metering Assembly, Capacity 1 to 16 ml per dose (23624-30L)'
          }
        }
      ],
      sortIndex: 113,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGuns3653360,
    ...defaultFacetOption,
    value: '44f8a3b1-8b1d-4afc-bc07-671d240ef94f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun, Impact Resistant, Max Pressure 600 psi, Capacity 12 gpm (36533-60)'
          }
        }
      ],
      sortIndex: 114,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGunsAa43hc,
    ...defaultFacetOption,
    value: 'b5b1c778-19c4-4229-a5d6-7691379f7b9e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun, Impact Resistant, Max Pressure 800 psi, Capacity 15 gpm (AA43HC)'
          }
        }
      ],
      sortIndex: 115,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGunsAa23h,
    ...defaultFacetOption,
    value: '351afaf6-1bb5-4420-b199-560874ad40cb',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun, Max Pressure 1000 psi (AA23H)'
          }
        }
      ],
      sortIndex: 116,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGunsAa23l,
    ...defaultFacetOption,
    value: '487be0fd-26b5-4660-8ad4-3dfb02641f78',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun, Max Pressure 250 psi (AA23L)'
          }
        }
      ],
      sortIndex: 117,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGunsAa23l45885,
    ...defaultFacetOption,
    value: '0ca083c2-d887-4cdb-9c6a-ed274961af2d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'GunJet\u00AE Medium Pressure Spray Gun, Max Pressure 250 psi,  For use with Adhesives (AA23L-45885)'
          }
        }
      ],
      sortIndex: 118,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactSolidjetD55606,
    ...defaultFacetOption,
    value: 'd7e25e1d-91dc-4cb9-b318-799f8501cfaa',
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
      sortIndex: 119,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SingleOrificeHydraulicFineSprayLnLnn,
    ...defaultFacetOption,
    value: 'fa134537-9f3f-4ebf-a1ec-550b4f1e6791',
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
      sortIndex: 120,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SingleOrificeHydraulicFineSprayLndLnnd,
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
            en: 'Hydraulic Fine Spray Nozzles - Integral Strainer - Wall Mount (LND, LNND)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Integralsieb - Wandhalterung (LND, LNND)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Cr\u00E9pine int\u00E9grale - Support mural (LND, LNND)',
            nl: 'Hydraulische fijne sproeikoppen - Ge\u00EFntegreerde zeef - Wandmontage (LND, LNND)'
          }
        }
      ],
      sortIndex: 121,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SingleOrificeHydraulicFineSprayNNn,
    ...defaultFacetOption,
    value: 'fa638387-96f6-46ed-aca2-16f1d52627c2',
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
      sortIndex: 122,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SingleOrificeHydraulicFineSprayM,
    ...defaultFacetOption,
    value: '7a2c4765-8f59-468e-aad6-7b6c01683ad3',
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
      sortIndex: 123,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SingleOrificeHydraulicFineSprayNW,
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
            en: 'Hydraulic Fine Spray Nozzles - Wide Angle Spray (N-W, NN-W, LN-W, LNN-W)',
            de: 'Hydraulische Feinspr\u00FChd\u00FCsen - Weitwinkelspray (N-W, NN-W, LN-W, LNN-W)',
            fr: 'Buses hydrauliques de pulv\u00E9risation fine - Spray grand angle (N-W, NN-W, LN-W, LNN-W)',
            nl: 'Hydraulische fijne sproeikoppen - Groothoekspray (N-W, NN-W, LN-W, LNN-W)'
          }
        }
      ],
      sortIndex: 124,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns6104,
    ...defaultFacetOption,
    value: 'b0edc6ac-91a8-40db-9845-65459ecdb9ff',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve with 1/4\u0022 (F) Outlet, Max Pressure 250 psi, Capacity 2 gpm (6104)'
          }
        }
      ],
      sortIndex: 125,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns6590,
    ...defaultFacetOption,
    value: '928bda75-63eb-40cf-bbe6-e682e96208cd',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve with 1/4\u0022 (F) Outlet, Max Pressure 250 psi, Extra Long Trigger, Capacity 2 gpm (6590)'
          }
        }
      ],
      sortIndex: 126,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGunsAa36,
    ...defaultFacetOption,
    value: '2cf2e0fb-dcb5-43ca-9d66-23c516099884',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve with 1/4\u0022 or 3/8\u0022 (F) Outlet, Max Pressure 150 psi, Capacity 7 gpm (AA36)'
          }
        }
      ],
      sortIndex: 127,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns4688,
    ...defaultFacetOption,
    value: '6c1c31b1-c7c5-47f4-96f3-dae6f5609816',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve with 11/16-16 UniJet\u00AE THD Outlet, Max Pressure 250 psi, Capacity 2 gpm (4688)'
          }
        }
      ],
      sortIndex: 128,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns6466,
    ...defaultFacetOption,
    value: '1ea7789f-35b5-4c5d-81b9-b59c16f0e90f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure Trigger Valve with 11/16-16 UniJet\u00AE THD Outlet, Max Pressure 250 psi, Extra Long Trigger, Capacity 2 gpm (6466)'
          }
        }
      ],
      sortIndex: 129,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MediumPressureGunjetSprayGunsAa31,
    ...defaultFacetOption,
    value: 'a0d606ea-bce5-4cc0-86ce-ffc7755112d2',
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
      sortIndex: 130,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns236233114f,
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
            en: 'MeterJet\u00AE Low Pressure Trigger Valve (23623-31-1/4F)',
            de: 'MeterJet\u00AE Niederdruck-Ausl\u00F6seventil (23623-31-1/4F)',
            fr: 'Vanne de d\u00E9clenchement basse pression MeterJet\u00AE (23623-31-1/4F)',
            nl: 'MeterJet\u00AE lagedruk triggerklep (23623-31-1/4F)'
          }
        }
      ],
      sortIndex: 131,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.PromaxQuickjetQuickConnectQmvv,
    ...defaultFacetOption,
    value: '8a49c023-9195-4d83-9c76-67c168b212f5',
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
      sortIndex: 132,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFloodjetQuickConnectQstk,
    ...defaultFacetOption,
    value: '9349504e-9d43-44aa-83f3-608778a17b21',
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
      sortIndex: 133,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.MiniQuickVeejetQuickConnectQsvv,
    ...defaultFacetOption,
    value: '4ef5d5fc-97c5-462f-9812-b3ae4d069038',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick VeeJet\u00AE Nozzle Systems - Low Flow (QSVV)'
          }
        }
      ],
      sortIndex: 134,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves6815,
    ...defaultFacetOption,
    value: '512e8699-406e-4f74-8385-4dfcc7dc79bc',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Piston-Type Pressure Relief Valve (6815)' }
        }
      ],
      sortIndex: 135,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves6815g,
    ...defaultFacetOption,
    value: 'bd8b0e4e-6bf7-4aad-822a-3609c445aed8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve with Guide Vane to Reduce Turbulence (6815G)'
          }
        }
      ],
      sortIndex: 136,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValvesAa110,
    ...defaultFacetOption,
    value: '03745036-b778-4997-aefe-f74ba27de30c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve with Removable Valve Bonnet (AA110)'
          }
        }
      ],
      sortIndex: 137,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23120,
    ...defaultFacetOption,
    value: 'ba19052e-7097-4ace-8cef-bf4af860bd50',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve, EPDM O-ring and 302SS Spring (23120)'
          }
        }
      ],
      sortIndex: 138,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23120a,
    ...defaultFacetOption,
    value: '6c118096-c6c9-4175-baad-fc41861e793f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Piston-Type Pressure Relief Valve, FKM O-ring and 316SS Spring (23120A)'
          }
        }
      ],
      sortIndex: 139,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.PromaxQuickFulljetQuickConnectQpha,
    ...defaultFacetOption,
    value: '392d1869-7199-4858-8622-947ba4ea0324',
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
      sortIndex: 140,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.PromaxQuickFulljetQuickConnectQphaW,
    ...defaultFacetOption,
    value: 'a23252be-8391-4bad-9bc2-d0b5833afe97',
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
      sortIndex: 141,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.PromaxQuickjetQuickConnectQpta,
    ...defaultFacetOption,
    value: '4362181d-2186-4b4a-93eb-579ba3ff6033',
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
      sortIndex: 142,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.PromaxQuickjetQuickConnectQppaQppm,
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
            en: 'ProMax\u00AE QuickJet\u00AE Quick-Connect Nozzle Bodies (QPPA, QPPM)',
            de: 'ProMax\u00AE QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper (QPPA, QPPM)',
            fr: 'Corps de buse ProMax\u00AE QuickJet\u00AE Quick-Connect (QPPA, QPPM)',
            nl: 'ProMax\u00AE QuickJet\u00AE Quick-Connect nozzlebehuizingen (QPPA, QPPM)'
          }
        }
      ],
      sortIndex: 143,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh03Z1,
    ...defaultFacetOption,
    value: '0daa6d8f-4f1e-46ab-89e6-a793685b0368',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm and Max Speed 15,000 cpm, For Use in Zone 1 Hazardous Areas (AA10000AUH-03-Z1)'
          }
        }
      ],
      sortIndex: 144,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh03,
    ...defaultFacetOption,
    value: '1f993666-280e-4282-99ad-444d08406e32',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm, Max Speed 15,000 cpm (AA10000AUH-03)'
          }
        }
      ],
      sortIndex: 145,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh7244014,
    ...defaultFacetOption,
    value: '6a0db788-b7bb-4931-af31-b135542fb265',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm, Max Speed 15,000 cpm and Jacketed Design for Temperature Control (AA10000AUH-72440-1/4)'
          }
        }
      ],
      sortIndex: 146,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104210,
    ...defaultFacetOption,
    value: '9c4e25fd-c14a-44a5-9a9d-e4c22e466753',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm, Max Speed 15,000 cpm and Self-Aligning Dovetail Spray Tips (AA10000AUH-104210)'
          }
        }
      ],
      sortIndex: 147,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104215,
    ...defaultFacetOption,
    value: 'df3dfdcd-3aea-42c9-abfa-24257c017a2a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm, Max Speed 15,000 cpm, Self-Aligning Dovetail Spray Tips and Liquid Recirculation (AA10000AUH-104215)'
          }
        }
      ],
      sortIndex: 148,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh104214,
    ...defaultFacetOption,
    value: '3d613d9f-e6f8-4b3a-8b92-358aa9947c1d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 0.47 gpm, Max Speed 15,000 cpm, Self-Aligning Dovetail Spray Tips and Side Liquid Inlet for Low Profile Mounting (AA10000AUH-104214)'
          }
        }
      ],
      sortIndex: 149,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh10,
    ...defaultFacetOption,
    value: 'dc4a0333-3efd-425f-8b3a-5d318f7dfec3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Electrically-Actuated Hydraulic Nozzle with Flow up to 1.6 gpm and Max Speed 5,000 cpm (AA10000AUH-10)'
          }
        }
      ],
      sortIndex: 150,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ElectricallyActuatedHydraulicAa10000auh0050,
    ...defaultFacetOption,
    value: '63257e79-c198-4fc0-a459-1ef42f5e8953',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'PulsaJet\u00AE Mini Electrically-Actuated Hydraulic Nozzle, Compact Design (AA10000AUH-0050)'
          }
        }
      ],
      sortIndex: 151,
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
          value: {
            en: 'QMJ Air Atomizing Air Caps (QMJ Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 152,
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
          value: {
            en: 'QMJ Air Atomizing Assemblies (QMJ Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 153,
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
          value: { en: 'QMJ Air Atomizing Bodies (QMJ Air Atomizing Bodies)' }
        }
      ],
      sortIndex: 154,
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
          value: {
            en: 'QMJ Air Atomizing Fluid Caps (QMJ Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 155,
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
          value: { en: 'QMJ Air Atomizing Setups (QMJ Air Atomizing Setups)' }
        }
      ],
      sortIndex: 156,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFloodjetQuickConnectQtka,
    ...defaultFacetOption,
    value: '33e1da19-1440-490d-b259-3a7f0c68763d',
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
      sortIndex: 157,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQga15Qlga15,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - 15\u00B0 Spray Angle - Removable Cap/Vane (QGA-15, QLGA-15)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - 15\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (QGA-15, QLGA-15)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Angle de pulv\u00E9risation de 15 \u00B0 - Capuchon / palette amovible (QGA-15, QLGA-15)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle-systemen - 15\u00B0 spuithoek - Verwijderbare dop/schoepen (QGA-15, QLGA-15)'
          }
        }
      ],
      sortIndex: 158,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQga30Qlga30,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - 30\u00B0 Spray Angle - Removable Cap/Vane (QGA-30, QLGA-30)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - 30\u00B0 Spr\u00FChwinkel - Abnehmbare Kappe/Fl\u00FCgel (QGA-30, QLGA-30)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Angle de pulv\u00E9risation de 30 \u00B0 - Capuchon / palette amovible (QGA-30, QLGA-30)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle-systemen - 30 \u00B0 spuithoek - verwijderbare dop / schoepen (QGA-30, QLGA-30)'
          }
        }
      ],
      sortIndex: 159,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQhaQlha,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Non-removable Vane (QHA, QLHA)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Nicht abnehmbarer Fl\u00FCgel (QHA, QLHA)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Palette non amovible (QHA, QLHA)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systemen - Niet-verwijderbare Schoepen (QHA, QLHA)'
          }
        }
      ],
      sortIndex: 160,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQgaQlga,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Removable Cap/Vane (QGA, QLGA)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Abnehmbare Kappe/Fl\u00FCgelrad (QGA, QLGA)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Capuchon/palette amovible (QGA, QLGA)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systemen - Verwijderbare Dop/Schoepen (QGA, QLGA)'
          }
        }
      ],
      sortIndex: 161,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQhaWQlhaW,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray - Non-removable Vane (QHA-W, QLHA-W)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Weitwinkelspray - Nicht abnehmbarer Fl\u00FCgel (QHA-W, QLHA-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Spray grand angle - Palette non amovible (QHA-W, QLHA-W)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systems - Groothoekspray - Niet-verwijderbare Schoepen (QHA-W, QLHA-W)'
          }
        }
      ],
      sortIndex: 162,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickFulljetQuickConnectQgaWQlgaW,
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
            en: 'Quick FullJet\u00AE Full Cone Nozzle Systems - Wide Angle Spray - Removable Cap/Vane (QGA-W, QLGA-W)',
            de: 'Quick FullJet\u00AE Full Cone D\u00FCsensysteme - Weitwinkelspray - Abnehmbare Kappe/Fl\u00FCgel (QGA-W, QLGA-W)',
            fr: 'Syst\u00E8mes de buse \u00E0 c\u00F4ne complet Quick FullJet\u00AE - Spray grand angle - Capuchon / palette amovible (QGA-W, QLGA-W)',
            nl: 'Snelle FullJet\u00AE Full Cone Nozzle Systems - Groothoek spray - Verwijderbare Cap /Vane (QGA-W, QLGA-W)'
          }
        }
      ],
      sortIndex: 163,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickVeejetQuickConnectQuaQluaQvva,
    ...defaultFacetOption,
    value: 'c67523a3-0692-4d97-8780-c1f7eb149538',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Quick VeeJet\u00AE Nozzle Systems (QUA, QLUA, QVVA)' }
        }
      ],
      sortIndex: 164,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjaQjja,
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
            en: 'QuickJet\u00AE Quick-Connect Nozzle Bodies (QJA, QJJA)',
            de: 'QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper (QJA, QJJA)',
            fr: 'Corps de buse QuickJet\u00AE Quick-Connect (QJA, QJJA)',
            nl: 'QuickJet\u00AE Quick-Connect nozzlebehuizingen (QJA, QJJA)'
          }
        }
      ],
      sortIndex: 165,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjlaQjjla,
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
            en: 'QuickJet\u00AE Quick-Connect Nozzle Bodies - Large Capacity (QJLA, QJJLA)',
            de: 'QuickJet Quick-Connect\u00AE D\u00FCsenk\u00F6rper - Gro\u00DFe Kapazit\u00E4t (QJLA, QJJLA)',
            fr: 'Corps de buse QuickJet\u00AE Quick-Connect - Grande capacit\u00E9 (QJLA, QJJLA)',
            nl: 'QuickJet\u00AE Quick-Connect nozzlebehuizingen - grote capaciteit (QJLA, QJJLA)'
          }
        }
      ],
      sortIndex: 166,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.QuickjetQuickConnectNozzleBodiesQjjs,
    ...defaultFacetOption,
    value: '0168fa84-d355-40ce-b7ba-c366734dbc11',
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
      sortIndex: 167,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TankjetD27500,
    ...defaultFacetOption,
    value: '3eab9286-677e-49d1-9abd-27ae91531dc3',
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
      sortIndex: 168,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LargeFreePassageFullConeHhsjx,
    ...defaultFacetOption,
    value: 'ff87c736-7369-4277-a736-a218f168180d',
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
      sortIndex: 169,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LargeFreePassageFullConeHhsj,
    ...defaultFacetOption,
    value: '95380b8d-90dc-440a-a2fe-dcc4324580df',
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
      sortIndex: 170,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LargeFreePassageHollowConeBsj,
    ...defaultFacetOption,
    value: '2973c05a-b134-4239-ba5b-3d7ab541687d',
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
      sortIndex: 171,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SplitEyeletConnectors15475,
    ...defaultFacetOption,
    value: '7f574ba5-7a4d-418d-8222-71620eac36bf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector for Pipe Sizes 2-1/2\u0022 and larger (15475)'
          }
        }
      ],
      sortIndex: 172,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SplitEyeletConnectors8370,
    ...defaultFacetOption,
    value: '3518c79e-b7f8-49c7-96ea-4f88fbd01388',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector for Pipe Sizes from 1-1/4\u0022 to 2\u0022 (8370)'
          }
        }
      ],
      sortIndex: 173,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SplitEyeletConnectors7521,
    ...defaultFacetOption,
    value: '03aa1f8a-44d0-4202-9350-28980503eb96',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connector for Pipe Sizes up to 1\u0022 (7521)'
          }
        }
      ],
      sortIndex: 174,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtTj14,
    ...defaultFacetOption,
    value: 'bca5d102-13e5-4459-bbc6-29157dfe8b36',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 14 Fluid-Driven Turbine Tank Cleaner, Tanks up to 12 ft. (TJ14)'
          }
        }
      ],
      sortIndex: 175,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtTj19,
    ...defaultFacetOption,
    value: '7f5eccb0-851c-4dfe-a9f3-2459b6640828',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 19 Fluid-Driven Turbine Tank Cleaner, Tanks up to 12 ft. (TJ19)'
          }
        }
      ],
      sortIndex: 176,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo10FtTj9A,
    ...defaultFacetOption,
    value: '4e9b8006-a691-4286-bfea-6b4a58056c2a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 9-A Fluid-Driven Reactionary Force Tank Cleaning Nozzles, Tanks up to 6 ft. (TJ9-A)'
          }
        }
      ],
      sortIndex: 177,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtTj9BTj9C,
    ...defaultFacetOption,
    value: 'c7daeddf-ce4f-4c3a-be87-1f5ca8db2c73',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE 9-B, 9-C Fluid-Driven Reactionary Force Tank Cleaning Nozzles, Tanks up to 16 ft. (TJ9-B, TJ9-C)'
          }
        }
      ],
      sortIndex: 178,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtD26984,
    ...defaultFacetOption,
    value: '5488f5c3-4ad1-4694-b14b-df7d88b91227',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle, Tanks up to 16 ft., 360\u00B0 Spray Coverage (D26984)'
          }
        }
      ],
      sortIndex: 179,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtD41800e,
    ...defaultFacetOption,
    value: 'fa5d962a-43fa-4443-bcab-56114fedc8d1',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle, Tanks up to 16 ft., 360\u00B0 Spray Coverage, Sanitary Design (D41800E)'
          }
        }
      ],
      sortIndex: 180,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtD40159,
    ...defaultFacetOption,
    value: 'f53757ea-9eed-4fd9-afd7-57f78f04b952',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Constant Speed Tank Cleaning Nozzle, Tanks up to 16 ft., 65\u00B0 to 260\u00B0 Spray Coverage (D40159)'
          }
        }
      ],
      sortIndex: 181,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo10FtD41892,
    ...defaultFacetOption,
    value: 'd6b72f4a-6b2f-4072-85ee-52ff6184f2ca',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 10 ft., ATEX Certified (optional) (D41892)'
          }
        }
      ],
      sortIndex: 182,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo5Ft30473,
    ...defaultFacetOption,
    value: '823a3890-dfc2-4c86-ac3c-a50c948d8141',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 3 ft., 180\u00B0 or 360\u00B0 Spray Coverage, PTFE (30473)'
          }
        }
      ],
      sortIndex: 183,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo5Ft23240,
    ...defaultFacetOption,
    value: '574b9c80-5d04-4672-bec2-46c88bb23733',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 3 ft., 360\u00B0 or Side Spray Coverage (23240)'
          }
        }
      ],
      sortIndex: 184,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo5Ft21400a,
    ...defaultFacetOption,
    value: 'c2e175fd-27ce-438a-ab7c-e2879735b584',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 5 ft. (21400A)'
          }
        }
      ],
      sortIndex: 185,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo5FtD26564,
    ...defaultFacetOption,
    value: 'fa4190d7-8f7e-414c-93da-a2973bf315ac',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 5 ft., 180\u00B0 Spray Coverage (Up or Down) (D26564)'
          }
        }
      ],
      sortIndex: 186,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtD41990,
    ...defaultFacetOption,
    value: '63ce8847-9252-418f-a754-4d6aec0d5a99',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, Tanks up to 6.5 ft., Fits Very Small Tank Openings (D41990)'
          }
        }
      ],
      sortIndex: 187,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo10Ft18250a,
    ...defaultFacetOption,
    value: '62cec7ff-c8b2-40ed-8033-5e2b09094c6d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzle, up to 10 ft. (18250A)'
          }
        }
      ],
      sortIndex: 188,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20Ft2850028500R,
    ...defaultFacetOption,
    value: '22196138-5c63-420a-8dc5-c611c649f940',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Reactionary Force Tank Cleaning Nozzles, Tanks up to 18 ft., Sanitary Design, PTFE (28500, 28500-R)'
          }
        }
      ],
      sortIndex: 189,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo100FtTj360,
    ...defaultFacetOption,
    value: '1457c6a7-c9eb-45c9-9050-2313cd7d7256',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 100 ft., 360\u00B0 Spray Coverage (TJ360)'
          }
        }
      ],
      sortIndex: 190,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtTj78m,
    ...defaultFacetOption,
    value: '2a634cd7-62b4-4633-91b9-2d51acfee170',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 25 ft., 360\u00B0 Spray Coverage, Sanitary Design (TJ78M)'
          }
        }
      ],
      sortIndex: 191,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtTj75Tj75h,
    ...defaultFacetOption,
    value: '227f577a-29a7-46fc-966c-8815541c7985',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 30 ft., 360\u00B0 Spray Coverage (TJ75, TJ75H)'
          }
        }
      ],
      sortIndex: 192,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtTj65Tj65ht,
    ...defaultFacetOption,
    value: 'f3e5f8d6-414d-4afa-b9f8-d8ed41b3340b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 40 ft., 360\u00B0 Spray Coverage (TJ65, TJ65HT)'
          }
        }
      ],
      sortIndex: 193,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtTj78Tj78d,
    ...defaultFacetOption,
    value: '50875e5d-5ae3-4311-a5c8-5808b6b48516',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 45 ft., 360\u00B0 Spray Coverage, Sanitary Design (TJ78, TJ78D)'
          }
        }
      ],
      sortIndex: 194,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo100FtTj80Tj80h,
    ...defaultFacetOption,
    value: 'fe9329e4-f1fe-454b-9e5f-23826a2b9f12',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 50 ft., 360\u00B0 Spray Coverage (TJ80, TJ80H)'
          }
        }
      ],
      sortIndex: 195,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo100FtTj180,
    ...defaultFacetOption,
    value: 'f885ee3b-a147-45c3-97bc-be2b42d11210',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Fluid-Driven Turbine Tank Cleaner, Tanks up to 80 ft., 180\u00B0 Downward Spray Coverage (TJ180)'
          }
        }
      ],
      sortIndex: 196,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtTj16,
    ...defaultFacetOption,
    value: '0512ae8f-d685-4280-ac46-57e77f63af9a',
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
      sortIndex: 197,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtYmd3,
    ...defaultFacetOption,
    value: '25c51006-f539-47db-a35f-e617eb981f28',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE High Pressure Motor-Driven Tank Cleaner, Tanks up to 30 ft., 360\u00B0 spray coverage (YMD3)'
          }
        }
      ],
      sortIndex: 198,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo100FtAa290,
    ...defaultFacetOption,
    value: '67d9ebc4-b489-47df-910d-cd388f05a35e',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner, Tanks up to 100 ft., 360\u00B0 spray coverage (AA290)'
          }
        }
      ],
      sortIndex: 199,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20FtAa090,
    ...defaultFacetOption,
    value: 'a7915f7e-ef3f-41fc-bbdc-31517b2853ce',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner, Tanks up to 16 ft., 360\u00B0 spray coverage (AA090)'
          }
        }
      ],
      sortIndex: 200,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo45FtAa190,
    ...defaultFacetOption,
    value: '628cf011-0f4d-48b8-9394-7a7bb64debd0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Motor-Driven Tank Cleaner, Tanks up to 40 ft., 360\u00B0 spray coverage (AA190)'
          }
        }
      ],
      sortIndex: 201,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.TankjetCleanup,
    ...defaultFacetOption,
    value: '34e216cf-c779-40c9-aaa8-5ef733b4ebbf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Pressure-Activated CleanUp Nozzle (D55567)'
          }
        }
      ],
      sortIndex: 202,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo10Ft63536353Mfp,
    ...defaultFacetOption,
    value: '4f3a5c55-17ba-4474-a791-5931b9237562',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzle, Tanks up to 10 ft. (6353, 6353-MFP)'
          }
        }
      ],
      sortIndex: 203,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20Ft12900,
    ...defaultFacetOption,
    value: 'e305f6cc-a4d4-4c57-8eb0-acf2d24412e0',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzle, Tanks up to 20 ft. (12900)'
          }
        }
      ],
      sortIndex: 204,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo5FtVsm,
    ...defaultFacetOption,
    value: '065f4d1a-5890-493e-847c-80e26d065027',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'TankJet\u00AE Stationary Tank Cleaning Nozzle, Tanks up to 5 ft. (VSM)'
          }
        }
      ],
      sortIndex: 205,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ForTanksUpTo20Ft63225632253a,
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
            en: 'TankJet\u00AE Tank Cleaning Spray Balls (63225, 63225-3A)',
            de: 'TankJet\u00AE Tankreinigung Spray Balls (63225, 63225-3A)',
            fr: 'TankJet\u00AE Tank Cleaning Spray Balls (63225, 63225-3A)',
            nl: 'TankJet\u00AE Tank Cleaning Spray Ballen (63225, 63225-3A)'
          }
        }
      ],
      sortIndex: 206,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves23520,
    ...defaultFacetOption,
    value: '960f0829-963e-4c9b-bc23-db0f3d634f68',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Throttling Valve with Adjusting Cap for Flow Control (23520)'
          }
        }
      ],
      sortIndex: 207,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.LowPressureGunjetSprayGuns22650Pp,
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
            en: 'TriggerJet\u00AE 22650-PP Low Pressure Trigger Valve (22650-PP)',
            de: 'TriggerJet\u00AE 22650-PP Niederdruck-Absperrventil (22650-PP)',
            fr: 'TriggerJet\u00AE 22650-PP Vanne de d\u00E9clenchement basse pression (22650-PP)',
            nl: 'TriggerJet\u00AE 22650-PP lagedruk triggerklep (22650-PP)'
          }
        }
      ],
      sortIndex: 208,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa122,
    ...defaultFacetOption,
    value: '44f88cdb-1c99-458d-bfaa-55b2ebd84c12',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1/2\u0022 and 3/4\u0022 Inlet Connections (AA122)'
          }
        }
      ],
      sortIndex: 209,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa122ml,
    ...defaultFacetOption,
    value: '03e319eb-69d0-4725-b272-3f54f1a8a66c',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1/2\u0022 and 3/4\u0022 Inlet Connections with Mounting Holes (AA122ML)'
          }
        }
      ],
      sortIndex: 210,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersTwd,
    ...defaultFacetOption,
    value: 'afc876c3-751d-40c4-b3fd-18073e6f9db3',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1/4\u0022 to 2-1/2\u0022 Connections with Removable Bottom Plug for Easy Cleaning (TWD)'
          }
        }
      ],
      sortIndex: 211,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa124,
    ...defaultFacetOption,
    value: '69a9ebee-e449-4272-ba17-f3c1de80138f',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1-1/4\u0022 to 2-1/2\u0022 Connections (AA124)'
          }
        }
      ],
      sortIndex: 212,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa124ml,
    ...defaultFacetOption,
    value: 'eb5f68de-59ba-4d1d-aa97-8397de19bed7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1-1/4\u0022 to 2-1/2\u0022 Connections with Mounting Holes (AA124ML)'
          }
        }
      ],
      sortIndex: 213,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa124sc,
    ...defaultFacetOption,
    value: 'e8a2ff8b-5670-417f-bef2-5ceef21366b2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 1-1/4\u0022 to 2-1/2\u0022 Connections, Self-Cleaning Version (AA124SC)'
          }
        }
      ],
      sortIndex: 214,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa430ml,
    ...defaultFacetOption,
    value: 'd292bd14-d559-42a2-bc03-731ac2c1604b',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 3/4\u0022 - 1-1/2\u0022 Connections with Mounting Holes and Removable Bottom Cap for Easy Cleaning (AA430ML)'
          }
        }
      ],
      sortIndex: 215,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa124a,
    ...defaultFacetOption,
    value: '361eb54f-dee4-4d9c-bc92-4dc88e3bbfb8',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 3/4\u0022 and 1\u0022 Connections (AA124A)'
          }
        }
      ],
      sortIndex: 216,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa124asc,
    ...defaultFacetOption,
    value: '8352f9ef-1649-4669-bd18-32282ee02acf',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 3/4\u0022 and 1\u0022 Connections, Self-Cleaning Version (AA124ASC)'
          }
        }
      ],
      sortIndex: 217,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StrainersAa430mlsc,
    ...defaultFacetOption,
    value: '5edf0932-f11a-4395-b49f-54eeacf2708a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'T-Style Liquid Strainer, 3/4\u0022 to 1-1/2\u0022 Connections with Mounting Holes, Self-Cleaning Version (AA430MLSC)'
          }
        }
      ],
      sortIndex: 218,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureFlatSprayFs013Fs020,
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
            en: 'Ultra-High Pressure Flat Spray Nozzle Assemblies (FS013, FS020)',
            de: 'Ultrahochdruck-Flachspr\u00FChd\u00FCsenbaugruppen (FS013, FS020)',
            fr: 'Ensembles de buses de pulv\u00E9risation plates \u00E0 ultra-haute pression (FS013, FS020)',
            nl: 'Ultrahoge druk platte sproeikopassemblages (FS013, FS020)'
          }
        }
      ],
      sortIndex: 219,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureNozzleBodies5883358834,
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
            en: 'Ultra-High Pressure Nozzle Bodies (58833, 58834)',
            de: 'Ultrahochdruck-D\u00FCsenk\u00F6rper (58833, 58834)',
            fr: 'Corps de buse ultra-haute pression (58833, 58834)',
            nl: 'Ultrahogedrukmondhuizen (58833, 58834)'
          }
        }
      ],
      sortIndex: 220,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureSolidStreamVs940,
    ...defaultFacetOption,
    value: 'aaeeee7f-7ced-4b30-8f59-cb645e510618',
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
      sortIndex: 221,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureSolidStreamVs625,
    ...defaultFacetOption,
    value: '444148d3-f105-4ac8-a8e4-68ecf3b8c830',
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
      sortIndex: 222,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureSolidStreamVs010,
    ...defaultFacetOption,
    value: '23df6221-5311-4621-86a2-8fb970a785de',
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
      sortIndex: 223,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureSolidStreamVs020,
    ...defaultFacetOption,
    value: '0222020e-1ae4-4561-83ff-13fd16cfef9e',
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
      sortIndex: 224,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UltraHighPressureSolidStreamVs051,
    ...defaultFacetOption,
    value: '738b75f2-079b-4f9d-aeb7-f3b6a765c729',
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
      sortIndex: 225,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFlatSprayTk,
    ...defaultFacetOption,
    value: 'e81724b9-c0dc-43dc-9f42-69b35877c0b7',
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
      sortIndex: 226,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFlatSprayEg,
    ...defaultFacetOption,
    value: '03020652-a130-4afe-809b-122467eb765d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Flat Spray Nozzle Systems - High Pressure - EG (EG)'
          }
        }
      ],
      sortIndex: 227,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFlatSpray13802,
    ...defaultFacetOption,
    value: '688380f3-3419-4a2d-b76f-a5de4dc615ab',
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
      sortIndex: 228,
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
          value: {
            en: 'UniJet\u00AE Full And Hollow Cone Nozzle Systems - Disk-Type - Spray Tip (D Spray Tip)'
          }
        }
      ],
      sortIndex: 229,
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
          value: {
            en: 'UniJet\u00AE Full And Hollow Cone Nozzle Systems - Disk-Type - Spray Tip \u002B Body (D Spray Tip \u002B T(T) Body)'
          }
        }
      ],
      sortIndex: 230,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFullConeTg,
    ...defaultFacetOption,
    value: 'baa7b8ce-827f-418e-8e47-0e0ec847a322',
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
      sortIndex: 231,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFullConeTgSq,
    ...defaultFacetOption,
    value: '33dd4f32-b616-4ebb-94d7-b79714470aa7',
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
      sortIndex: 232,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFullConeTgW,
    ...defaultFacetOption,
    value: '84d839a2-83f7-4bf3-8dca-7c3ea5cc6aea',
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
      sortIndex: 233,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFullConeThW,
    ...defaultFacetOption,
    value: '00cf5fe4-ef80-43e9-af4a-5ef10da1437d',
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
      sortIndex: 234,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetHollowConeTx,
    ...defaultFacetOption,
    value: '175cf5cc-84e1-49f8-9305-e4994849784c',
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
      sortIndex: 235,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetHollowConeTn,
    ...defaultFacetOption,
    value: '25fb855b-e25a-4662-b3fb-4b58e625bb64',
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
      sortIndex: 236,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetHollowConeTnSstc,
    ...defaultFacetOption,
    value: 'ad7a4b2b-9342-425c-8740-ed79e1263d2c',
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
      sortIndex: 237,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetHollowConeTW,
    ...defaultFacetOption,
    value: '3d8f6411-9335-49cb-9a2f-3642639f0720',
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
      sortIndex: 238,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetNozzleBodiesTTt,
    ...defaultFacetOption,
    value: 'fbebe335-ba7e-4a35-a79e-74a046c49d33',
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
      sortIndex: 239,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetNozzleBodies11430,
    ...defaultFacetOption,
    value: 'd58364c4-9a39-4d6b-95e2-ff6a7b2f33eb',
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
      sortIndex: 240,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.UnijetFlatSprayTpu,
    ...defaultFacetOption,
    value: 'dc542b52-c2d0-4694-8d96-71d4a901bec7',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet\u00AE Nozzle Systems - Medium Flow - TPU (TPU)'
          }
        }
      ],
      sortIndex: 241,
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
          value: { en: 'Unspecified Model (Unspecified Model)' }
        }
      ],
      sortIndex: 242,
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
          value: {
            en: 'VAA, VAU Air Atomizing Air Caps (VAA, VAU Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 243,
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
          value: {
            en: 'VAA, VAU Air Atomizing Assemblies (VAA, VAU Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 244,
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
          value: {
            en: 'VAA, VAU Air Atomizing Bodies (VAA, VAU Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 245,
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
          value: {
            en: 'VAA, VAU Air Atomizing Fluid Caps (VAA, VAU Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 246,
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
          value: {
            en: 'VAA, VAU Air Atomizing Setups (VAA, VAU Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 247,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardHUHDu,
    ...defaultFacetOption,
    value: '4b582aae-446f-43a8-8784-711474418253',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'VeeJet\u00AE Flat Spray And Solid Stream Nozzles - Medium Flow (H-U, H-DU)'
          }
        }
      ],
      sortIndex: 248,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardFlatSprayHVvHDt,
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
            en: 'VeeJet\u00AE Flat Spray Nozzles - Low Flow (H-VV, H-DT)',
            de: 'VeeJet\u00AE Flachspr\u00FChd\u00FCsen - Low Flow (H-VV, H-DT)',
            fr: 'Buses de pulv\u00E9risation plates VeeJet\u00AE - Faible d\u00E9bit (H-VV, H-DT)',
            nl: 'VeeJet\u00AE platte sproeikoppen - Laag debiet (H-VV, H-DT)'
          }
        }
      ],
      sortIndex: 249,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardFlatSprayHVvl,
    ...defaultFacetOption,
    value: '70a11cb0-eefb-4a72-8d74-de277e9f3646',
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
      sortIndex: 250,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardU,
    ...defaultFacetOption,
    value: '029216d2-7620-422c-bcda-4e1963ff344a',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VeeJet\u00AE Nozzles - High Flow - U (U)' }
        }
      ],
      sortIndex: 251,
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
          value: {
            en: 'VMAU Air Atomizing Air Caps (VMAU Air Atomizing Air Caps)'
          }
        }
      ],
      sortIndex: 252,
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
          value: {
            en: 'VMAU Air Atomizing Assemblies (VMAU Air Atomizing Assemblies)'
          }
        }
      ],
      sortIndex: 253,
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
          value: {
            en: 'VMAU Air Atomizing Bodies (VMAU Air Atomizing Bodies)'
          }
        }
      ],
      sortIndex: 254,
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
          value: {
            en: 'VMAU Air Atomizing Fluid Caps (VMAU Air Atomizing Fluid Caps)'
          }
        }
      ],
      sortIndex: 255,
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
          value: {
            en: 'VMAU Air Atomizing Setups (VMAU Air Atomizing Setups)'
          }
        }
      ],
      sortIndex: 256,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactFlatSprayQcimeg,
    ...defaultFacetOption,
    value: '83dfdd49-54a6-467f-b176-3f80595d33bb',
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
      sortIndex: 257,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactFlatSprayImeg,
    ...defaultFacetOption,
    value: '8f336c2b-12b2-4105-8f5e-ff0e2eda5db3',
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
      sortIndex: 258,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactMegWeg,
    ...defaultFacetOption,
    value: '8c8a1da2-6c6c-4fd6-a660-6a144642482d',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Nozzles - Quick-Connect Spray Tips - MEG/WEG (MEG, WEG)'
          }
        }
      ],
      sortIndex: 259,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactMegSstc,
    ...defaultFacetOption,
    value: '2243c78c-6d29-4ce8-936a-9e3315454bd2',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Nozzles - Quick-Connect Spray Tips - MEG-SSTC (MEG-SSTC)'
          }
        }
      ],
      sortIndex: 260,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.HighImpactQcmeg,
    ...defaultFacetOption,
    value: '048c87f2-931e-460c-98a2-748be62be487',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet\u00AE High Impact Nozzles - Quick-Connect Spray Tips - QCMEG (QCMEG)'
          }
        }
      ],
      sortIndex: 261,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeAxBx,
    ...defaultFacetOption,
    value: '3c509403-f286-41b9-a954-8a1d999bfa4e',
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
      sortIndex: 262,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeCf,
    ...defaultFacetOption,
    value: '1d228a88-c343-4c66-94a7-ea427488689f',
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
      sortIndex: 263,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeD,
    ...defaultFacetOption,
    value: '1294a136-ba0c-49c0-8719-fb6090a5a948',
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
      sortIndex: 264,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeCx,
    ...defaultFacetOption,
    value: '3441dbc9-29af-4a0a-8132-964951d837be',
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
      sortIndex: 265,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeCrc,
    ...defaultFacetOption,
    value: '40d60d4e-63d1-4fa0-97d0-ade0baef55d1',
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
      sortIndex: 266,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleHollowConeE,
    ...defaultFacetOption,
    value: 'c703fb0c-f14a-4ee0-af62-8b7291ac1de1',
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
      sortIndex: 267,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SprayHollowConeBd,
    ...defaultFacetOption,
    value: 'a2cc3638-85b2-48d8-8e93-bc98a004153d',
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
      sortIndex: 268,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SprayHollowConeBdm,
    ...defaultFacetOption,
    value: '9c8c4bfb-53ee-4710-970c-ae11411aabca',
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
      sortIndex: 269,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SprayHollowConeBa,
    ...defaultFacetOption,
    value: 'f2d76ebc-7c5e-44f4-836e-0e818e3630e3',
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
      sortIndex: 270,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.StandardAngleHollowConeApLapLbp,
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
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Polypropylene (AP, LAP, LBP)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Polypropylen (AP, LAP, LBP)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Polypropyl\u00E8ne (AP, LAP, LBP)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Polypropyleen (AP, LAP, LBP)'
          }
        }
      ],
      sortIndex: 271,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleHollowConeAxWBxW,
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
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray (AX-W, BX-W)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Weitwinkelspray (AX-W, BX-W)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray grand angle (AX-W, BX-W)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Groothoek Spray (AX-W, BX-W)'
          }
        }
      ],
      sortIndex: 272,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.SprayHollowConeBdW,
    ...defaultFacetOption,
    value: '4b411e3d-05ba-471c-a118-cc825f6ec016',
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
      sortIndex: 273,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.WideAngleHollowConeApWLapWLbpW,
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
            en: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray - Polypropylene (AP-W, LAP-W, LBP-W)',
            de: 'WhirlJet\u00AE Hohlkegeld\u00FCsen - Weitwinkelspray - Polypropylen (AP-W, LAP-W, LBP-W)',
            fr: 'Buses \u00E0 c\u00F4ne creux WhirlJet\u00AE - Spray grand angle - Polypropyl\u00E8ne (AP-W, LAP-W, LBP-W)',
            nl: 'WhirlJet\u00AE Hollow Cone Nozzles - Wide Angle Spray - Polypropyleen (AP-W, LAP-W, LBP-W)'
          }
        }
      ],
      sortIndex: 274,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.FlatFanY767,
    ...defaultFacetOption,
    value: '77772412-79df-4a83-915d-829ddfe1d2cd',
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
      sortIndex: 275,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.FlatFanAa727,
    ...defaultFacetOption,
    value: 'e7069cf7-fb16-4c94-8503-adbd9468f22a',
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
      sortIndex: 276,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.FlatFanY727,
    ...defaultFacetOption,
    value: '934bd134-458f-4eed-b0cc-63dfa2bdba81',
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
      sortIndex: 277,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.FlatFanDaa727,
    ...defaultFacetOption,
    value: 'e0ba38e2-f527-4030-b8c6-28987eaa605d',
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
      sortIndex: 278,
      seoPath: ''
    }
  },
  {
    key: ModelIdFacetOptionKey.RoundSprayAa707,
    ...defaultFacetOption,
    value: '99fcc03d-fc27-4480-8b5f-5f15bb4b2c37',
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
