export enum WidenImagePreset {
  // 72x72
  ExtraSmall = 'ExtraSmall',
  // 144x144
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  ExtraLarge = 'ExtraLarge',
  Custom = 'Custom'
}

// Literal string type for the "keep" position property inside WidenImageOptions
export type WidenImagePosition =
  | 'c'
  | 'n'
  | 'ne'
  | 'nw'
  | 'e'
  | 'ne'
  | 'nw'
  | 's'
  | 'sw'
  | 'se'
  | 'w'
  | 'nw';

// Options that will be used to build the query parameters with.
export interface WidenImageOptions {
  // Dimensions of the image
  // TODO: Allow optional values for either height or width
  dimensions: {
    width: number;
    height: number;
  };
  /**
   * Crop area values are valid when you specify the image width and height.
   * When true, the image is cropped to fit the aspect ratio of the requested size.
   * When false, the image is created with additional background area.
   */
  crop?: boolean;
  /**
   * Image quality applies only to JPG images.
   */
  quality?: number;
  /**
   * When you set the crop option to false, additional background areas are created with the specified color.
   */
  color?: string;
  /**
   * When you set the crop value to true,
   * the primary area preserved is controlled by the keep value.
   */
  position?: WidenImagePosition;
}

interface DefaultImageOptions {
  small: WidenImageOptions;
  extraSmall: WidenImageOptions;
}

// Default Image Options that match 1 to 1 with WidenImagePresets
const defaultWidenImageOptions: DefaultImageOptions = {
  extraSmall: {
    dimensions: {
      width: 72,
      height: 72
    },
    crop: false,
    color: 'ffffff',
    position: 'c'
  },
  small: {
    dimensions: {
      width: 144,
      height: 144
    },
    crop: false,
    color: 'ffffff',
    position: 'c'
  }
};
/**
 * Helper class for formatting / optimizing Widen urls.
 * Widen urls allow certain query parameters to be passed to optimize the dimensions
 * of the image, change the quality, format and so on.
 * @See WidenImageOptions
 */

export class WidenImageHelper {
  /**
   * Function that will call the validateUrl method and optimize method,
   * based on the url and configuration that has been passed as parameter.
   * @param url The image src url that needs to be optimized. If not able to optimize the original url will be returned.
   * @param configuration either a WidenImagePreset or custom WidenImageOptions that will be used to build the url search parameters
   */
  static getOptimizedSrc(url: string, preset: WidenImagePreset): string;
  static getOptimizedSrc(url: string, options: WidenImageOptions): string;
  public static getOptimizedSrc(
    url: string,
    configuration: WidenImageOptions | WidenImagePreset
  ): string {
    // Check if the url can be optimized
    const isValidUrl: boolean = this.validateUrl(url);
    // If it cannot, return the original url
    if (!isValidUrl) {
      return url;
    }

    // Check whether the configuration parameter is a preset or not
    if (
      Object.values(WidenImagePreset).includes(
        configuration as WidenImagePreset
      )
    ) {
      // Optimize differently based on preset
      switch (configuration as WidenImagePreset) {
        case WidenImagePreset.ExtraSmall:
          return this.optimize(url, defaultWidenImageOptions.extraSmall);
        case WidenImagePreset.Small:
          return this.optimize(url, defaultWidenImageOptions.small);
        default:
          //TODO: add cases for other presets.
          return url;
      }
    }

    // Optimize with the custom WidenImageOptions
    return this.optimize(url, configuration as WidenImageOptions);
  }

  /**
   * Function that will validate the original url.
   * Returns true if the original image url is optimizable
   * (This is currently basic validation, may need to change)
   * @param url original image url
   */
  public static validateUrl(url: string): boolean {
    // URL has to start with https://spray.widen.net/content
    const expectedBaseUrl: string = 'https://spray.widen.net/content';
    // URL has to be shared for web purposes --> /web
    const expectedWebUrlPart: string = '/web';
    if (url.startsWith(expectedBaseUrl) && url.includes(expectedWebUrlPart)) {
      return true;
    }
    return false;
  }
  /**
   * Function that will take possible search params from the original image url,
   * @param originalSearchParams original search params
   * @param options WidenImageOptions to map to URLSearchParams
   */
  private static mapOptionsToURLSearchParams(
    searchParams: URLSearchParams,
    options: WidenImageOptions
  ): URLSearchParams {
    searchParams.set('w', options.dimensions.width.toString());
    searchParams.set('h', options.dimensions.height.toString());

    if (options.crop !== undefined) {
      searchParams.set('crop', options.crop ? 'true' : 'false');
    }
    if (options.position !== undefined) {
      searchParams.set('keep', options.position);
    }
    if (options.color !== undefined) {
      searchParams.set('color', options.color);
    }

    if (options.quality !== undefined) {
      searchParams.set('quality', options.quality.toString());
    }

    return searchParams;
  }

  private static optimize(url: string, options: WidenImageOptions): string {
    const urlObject: URL = new URL(url);
    const originalSearchParams = urlObject.searchParams;

    const searchParams: URLSearchParams = this.mapOptionsToURLSearchParams(
      originalSearchParams,
      options
    );
    const optimizedUrl: string = urlObject.origin
      .concat(urlObject.pathname)
      .concat(searchParams.toString() ? `?${searchParams.toString()}` : '');
    return optimizedUrl;
  }
}
