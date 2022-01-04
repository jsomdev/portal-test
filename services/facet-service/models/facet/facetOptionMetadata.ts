/**
 * Relevant Metadata that a FacetOption might require
 */
export interface FacetOptionMetadata {
  path?: string;
  image?: string;
  defaultDisplay?: SupportedDisplay;
  supportedDisplays?: SupportedDisplay[];
}

export type SupportedDisplay = 'list' | 'grid' | 'table';
