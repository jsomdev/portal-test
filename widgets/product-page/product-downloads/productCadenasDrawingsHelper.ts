import { IContextualMenuItem } from '@fluentui/react';

import {
  ProductCadenasDrawingDownloadStatus,
  ProductCadenasDrawingItem
} from './productCadenasDrawings.types';

enum XmlTag {
  FILENAME = 'FILENAME',
  ZIPFILE = 'ZIPFILE'
}

/**
 * The drawing formats and texts are hard coded
 * and must not be changed unless otherwise instructed
 */

export const drawingsCadenas: ProductCadenasDrawingItem[] = [
  {
    flag: 'xml',
    format: 'PDFDATASHEET',
    iconProps: { iconName: 'PDF' },
    text: 'Product Datasheet'
  }
];

export const drawings2d: ProductCadenasDrawingItem[] = [
  {
    flag: 'zip',
    format: 'DWG2D-2013',
    iconProps: { iconName: 'download' },
    text: 'DWG AutoCAD (2013)'
  },
  {
    flag: 'zip',
    format: 'DWG2D-2010',
    iconProps: { iconName: 'download' },
    text: 'DWG AutoCAD (2010 - 2012)'
  },
  {
    flag: 'zip',
    format: 'DWG2D-2007',
    iconProps: { iconName: 'download' },
    text: 'DWG AutoCAD (2007 - 2009)'
  },
  {
    flag: 'zip',
    format: 'DWG2D-2004',
    iconProps: { iconName: 'download' },
    text: 'DWG AutoCAD (2004 - 2006)'
  },
  {
    flag: 'zip',
    format: 'SVG',
    iconProps: { iconName: 'download' },
    text: 'SVG'
  },
  {
    flag: 'zip',
    format: 'DXF2D-2013',
    iconProps: { iconName: 'download' },
    text: 'DXF AutoCAD (2013)'
  },
  {
    flag: 'zip',
    format: 'DXF2D-2010',
    iconProps: { iconName: 'download' },
    text: 'DXF AutoCAD (2010 - 2012)'
  },
  {
    flag: 'zip',
    format: 'DXF2D-2007',
    iconProps: { iconName: 'download' },
    text: 'DXF AutoCAD (2007 - 2009)'
  },
  {
    flag: 'zip',
    format: 'DWG2D-2004',
    iconProps: { iconName: 'download' },
    text: 'DXF AutoCAD (2004 - 2006)'
  }
];

export const drawings3d: ProductCadenasDrawingItem[] = [
  {
    flag: 'zip',
    format: 'SOLIDWORKS',
    iconProps: { iconName: 'download' },
    text: 'Solidworks (>= 2006)'
  },
  {
    flag: 'zip',
    format: 'STEP-2.14',
    iconProps: { iconName: 'download' },
    text: 'STEP (AP214)'
  },
  {
    flag: 'zip',
    format: 'DWG3D-2013',
    iconProps: { iconName: 'download' },
    text: 'DWG AutoCAD (2013)'
  },
  {
    flag: 'zip',
    format: 'DXF3D-2013',
    iconProps: { iconName: 'download' },
    text: 'DXF AutoCAD (2013)'
  },
  {
    flag: 'zip',
    format: 'AIS2020',
    iconProps: { iconName: 'download' },
    text: 'Inventor (2020)'
  },
  {
    flag: 'zip',
    format: 'AIS2019',
    iconProps: { iconName: 'download' },
    text: 'Inventor (2019)'
  },
  {
    flag: 'zip',
    format: 'AIS2018',
    iconProps: { iconName: 'download' },
    text: 'Inventor (2018)'
  },
  {
    flag: 'zip',
    format: 'AIS2017',
    iconProps: { iconName: 'download' },
    text: 'Inventor (2017)'
  },
  {
    flag: 'zip',
    format: '3DSTUDIOMAX',
    iconProps: { iconName: 'download' },
    text: '3D Studio MAX'
  },
  {
    flag: 'zip',
    format: 'IGES',
    iconProps: { iconName: 'download' },
    text: 'IGES'
  },
  {
    flag: 'zip',
    format: 'STL',
    iconProps: { iconName: 'download' },
    text: 'STL'
  }
];

/**
 * This function will return a link that must be fetched to get an xml document
 * that we will use to extract the xml tagname from
 *
 * @param product generated from product Identifier
 * @param format product format (comes from drawing2d / 3d const)
 * @param dlFlags product flag (comes from drawing2d / 3d const)
 *
 */
function encodeCadenasUrl(
  product: string,
  format: string,
  dlFlags: string
): string {
  return `https://sprayingsystems.partcommunity.com/cgi-bin/cgi2pview.exe?cgiaction=download&downloadflags=${dlFlags}&part=${product.replace(
    '+',
    '%2B'
  )}&firm=sprayingsystems&apikey=387ada5062974f07bb710ffcedb01fb8&ok_url=%3C%25download_xml%25%3E&ok_url_type=text&format=${format}`;
}

/**
 * Function that gets the correct xml fetch url based on the params
 *
 * @param identifier generated from product Identifier
 * @param format product format (comes from drawing2d / 3d const)
 * @param dlFlag product flag (comes from drawing2d / 3d const)
 *
 */
async function getXmlUrl(
  identifier: string,
  format: string,
  dlFlag: string
): Promise<string> {
  try {
    return await (
      await fetch(encodeCadenasUrl(identifier, format, dlFlag))
    ).text();
  } catch (ex) {
    throw new Error('Could not fetch XML url');
  }
}

/**
 * Function that supports setTimeout while using async/await syntax
 *
 * @param ms Amount of ms to wait to resolve promise
 */
async function asyncSetTimeout(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Function that will fetch xml content from a generated url.
 * Currently this will try the call 30x with 1 second inbetween each call
 *
 * @param url
 * @param retryCount
 */
async function getXmlContent(
  url: string,
  retryCount: number = 0
): Promise<string> {
  try {
    const response: Response = await fetch(url);
    await asyncSetTimeout(1000);
    if (response.status === 404 && retryCount < 30) {
      return getXmlContent(url, (retryCount += 1));
    }
    if (retryCount === 30) {
      throw new Error('Tried too many times');
    }
    return await response.text();
  } catch (ex: unknown) {
    throw new Error(`Could not get XML content:', ${ex}`);
  }
}

/**
 * Function that will parse xml text and extract the value from the given xml tag name
 *
 * @param unparsedXml
 * @param tag
 */
function getXmlTagFromText(unparsedXml: string, tag: string): string {
  try {
    const parser: DOMParser = new DOMParser();
    const xmlDoc: Document = parser.parseFromString(unparsedXml, 'text/xml');
    return xmlDoc.getElementsByTagName(tag)[0].innerHTML;
  } catch (ex) {
    throw new Error(`Could not get tag name: ${tag}`);
  }
}

/**
 * Function that chains await function that will open a download link in a new tab
 * First we will await an xml url
 * Next we will fetch the xml text and parse it
 * Then we will extract the data from the given xml tag and replace it with the
 *  'downlod.xml' substring that we received from the first step and generate a final download link
 * Lastly we will open this link in a new tab which will trigger the browser to download the file
 *
 * This function also catches any errors in each step and will set the download error to true
 *
 * @param identifier generated from product Identifier
 * @param format product format (comes from drawing2d / 3d const)
 * @param dlFlag product flag (comes from drawing2d / 3d const)
 * @param setCadenasIsDownloading
 * @param setCadenasDownloadError
 */
async function downloadProductResource(
  identifier: string,
  format: string,
  dlFlag: string,
  setDownloadStatus: (val: ProductCadenasDrawingDownloadStatus) => void
): Promise<void> {
  const xmlTag: XmlTag = dlFlag === 'xml' ? XmlTag.FILENAME : XmlTag.ZIPFILE;
  try {
    const xmlUrl: string = await getXmlUrl(identifier, format, dlFlag);
    const xml: string = await getXmlContent(xmlUrl);
    const urlSuffix: string = getXmlTagFromText(xml, xmlTag);
    const pdfUrl: string = xmlUrl.replace('download.xml', urlSuffix);
    setDownloadStatus('initial');
    window.open(pdfUrl);
  } catch (ex) {
    setDownloadStatus('error');
    console.warn(`Timeout exceeded. Cancelling download ${ex}`);
  }
}

/**
 * This function will map the 2d and 3d drawings from the consts at the top of this file
 * It will map these to IContextualMenuItem[] with a custom onClick function that starts
 * the zip / pdf download process => downloadProductResource()
 */

export function mapDrawingsToContextualMenuItems(
  productResourceIdentifier: string,
  setDownloadStatus: (val: ProductCadenasDrawingDownloadStatus) => void,
  drawings: ProductCadenasDrawingItem[]
): IContextualMenuItem[] {
  return drawings.map((drawing, i) => {
    return {
      key: drawing.format + i,
      text: drawing.text,
      iconProps: drawing.iconProps,
      onClick: () => {
        downloadProductResource(
          productResourceIdentifier,
          drawing.format,
          drawing.flag,
          setDownloadStatus
        );
        setDownloadStatus('loading');
      }
    };
  });
}
