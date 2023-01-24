import { getMediaQueryString } from '@widgets/media-queries/media';

describe('getMediaQueryString', () => {
  it('at mobile, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'at',
      breakpoint: 'mobile'
    });
    expect(mediaQuery).toBe('(min-width:0px) and (max-width:424.98px)');
  });

  it('at tablet, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'at',
      breakpoint: 'tablet'
    });
    expect(mediaQuery).toBe('(min-width:1024px) and (max-width:1279.98px)');
  });

  it('at desktop, show console warning to inform developer better way to do this', () => {
    console.warn = jest.fn();
    const mediaQuery = getMediaQueryString({
      match: 'at',
      breakpoint: 'desktop'
    });
    expect(mediaQuery).toBe('(min-width:1280px)');
    // @ts-ignore
    expect(console.warn.mock.calls[0][0]).toBe(
      "`at` is being used with the largest breakpoint. Consider using {matchType: 'greaterThanOrEqual', mediaType:'desktop'} to account for future breakpoint definitions outside of this range."
    );
  });

  it('greaterThan mobile, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'greaterThan',
      breakpoint: 'mobile'
    });
    expect(mediaQuery).toBe('(min-width:425px)');
  });

  it('greaterThan tablet, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'greaterThan',
      breakpoint: 'tablet'
    });
    expect(mediaQuery).toBe('(min-width:1280px)');
  });

  it('greaterThan desktop, returns correct media query', () => {
    expect(() => {
      getMediaQueryString({
        match: 'greaterThan',
        breakpoint: 'desktop'
      });
    }).toThrow(
      new Error(
        'Invalid media query: {"match":"greaterThan","breakpoint":"desktop"}'
      )
    );
  });

  it('greaterThanOrEqual mobile, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'greaterThanOrEqual',
      breakpoint: 'mobile'
    });
    expect(mediaQuery).toBe('(min-width:0px)');
  });

  it('greaterThanOrEqual tablet, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'greaterThanOrEqual',
      breakpoint: 'tablet'
    });
    expect(mediaQuery).toBe('(min-width:1024px)');
  });

  it('greaterThanOrEqual desktop, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'greaterThanOrEqual',
      breakpoint: 'desktop'
    });
    expect(mediaQuery).toBe('(min-width:1280px)');
  });

  it('lessThan mobile, throws error', () => {
    expect(() => {
      getMediaQueryString({
        match: 'lessThan',
        breakpoint: 'mobile'
      });
    }).toThrow(
      new Error(
        'Invalid media query: {"match":"lessThan","breakpoint":"mobile"}'
      )
    );
  });

  it('lessThan tablet, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'lessThan',
      breakpoint: 'tablet'
    });
    expect(mediaQuery).toBe('(max-width:1023.98px)');
  });

  it('lessThan desktop, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'lessThan',
      breakpoint: 'desktop'
    });
    expect(mediaQuery).toBe('(max-width:1279.98px)');
  });

  it('between mobile and mobile, throws error', () => {
    expect(() => {
      getMediaQueryString({
        match: 'between',
        breakpoint: ['mobile', 'mobile']
      });
    }).toThrow(
      new Error(
        'Invalid media query: {"match":"between","breakpoint":["mobile","mobile"]}'
      )
    );
  });

  it('between desktop and mobile, throws error', () => {
    expect(() => {
      getMediaQueryString({
        match: 'between',
        breakpoint: ['desktop', 'mobile']
      });
    }).toThrow(
      new Error(
        'Invalid media query: {"match":"between","breakpoint":["desktop","mobile"]}'
      )
    );
  });

  it('between mobile and tablet, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'between',
      breakpoint: ['mobile', 'tablet']
    });
    expect(mediaQuery).toBe('(min-width:0px) and (max-width:1023.98px)');
  });

  it('between mobile and desktop, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'between',
      breakpoint: ['mobile', 'desktop']
    });
    expect(mediaQuery).toBe('(min-width:0px) and (max-width:1279.98px)');
  });

  it('between tablet and desktop, returns correct media query', () => {
    const mediaQuery = getMediaQueryString({
      match: 'between',
      breakpoint: ['tablet', 'desktop']
    });
    expect(mediaQuery).toBe('(min-width:1024px) and (max-width:1279.98px)');
  });
});

export {};
