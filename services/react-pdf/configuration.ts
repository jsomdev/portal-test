import { pdfjs } from 'react-pdf';

/**
 * Function that will initialize the react-pdf Global Worker. 194kb / ~170ms
 * It is crucial for performance to use PDF.js worker whenever possible.
 * This ensures that PDF files will be rendered in a separate thread without affecting page performance.
 * The call is cached, so will only be loaded once the user visits the site for the first time and is subsequently loaded from disk
 */
export default function initializeReactPdf(): void {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}
