import React, { CSSProperties, useMemo } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NextLink } from '@components/link/nextLink';
import { ActionButton, IStackStyles, Stack, useTheme } from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';

import { QuickFilterItem } from './quickFilter.types';
import {
  mapCategoriesToQuickFilterItems,
  mapFacetOptionsToQuickFilterItem
} from './quickFilterHelper';

interface QuickFiltersProps {
  subCategories: Category[];
}

interface QuickFiltersStyles {
  swiper: CSSProperties;
  nextButtonBackground: CSSProperties;
  previousButtonBackground: CSSProperties;
}

const NAVIGATION_FAILSAFE_WIDTH: string = rem(32);

export const QuickFilter: React.FC<QuickFiltersProps> = ({ subCategories }) => {
  const { visibleMainFacets, getFacetResult } = useFinder();

  const intl = useIntl();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const { locale } = intl;
  const { palette, spacing } = useTheme();
  const { query } = useRouter();

  const quickFilterFacet: Facet | undefined = useMemo(() => {
    return visibleMainFacets.filter(
      facet =>
        ![FacetKey.CategoryId, FacetKey.CapacitySize].includes(facet.key) &&
        !facet.options.find(option => option.isActive)
    )[0];
  }, [visibleMainFacets]);

  const quickFilterItems: QuickFilterItem[] = useMemo(() => {
    const categoryFacet: Facet | undefined = visibleMainFacets.find(
      facet => facet.key === FacetKey.CategoryId
    );
    if (categoryFacet) {
      const categoryResult = getFacetResult(categoryFacet);
      const categoryResultValues: string[] =
        categoryResult?.map(option => option.value.toString()) || [];
      const filteredSubCategories: Category[] = subCategories.filter(category =>
        category.id ? categoryResultValues.includes(category.id) : false
      );
      if (filteredSubCategories.length) {
        return mapCategoriesToQuickFilterItems(filteredSubCategories, locale);
      }
    }
    if (quickFilterFacet) {
      const facetResult = getFacetResult(quickFilterFacet);
      const facetResultValues: string[] =
        facetResult?.map(option => option.value.toString()) || [];
      const quickFilterOptions = quickFilterFacet.options.filter(option =>
        option.value
          ? facetResultValues.includes(option.value.toString())
          : false
      );
      if (quickFilterOptions.length) {
        return mapFacetOptionsToQuickFilterItem(
          quickFilterOptions,
          quickFilterFacet.key,
          query,
          intl,
          systemOfMeasurement,
          locale
        );
      }
    }
    return [];
  }, [
    getFacetResult,
    intl,
    locale,
    quickFilterFacet,
    query,
    subCategories,
    systemOfMeasurement,
    visibleMainFacets
  ]);

  const styles: QuickFiltersStyles = {
    nextButtonBackground: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: NAVIGATION_FAILSAFE_WIDTH,
      zIndex: 1,
      background: 'transparent',
      cursor: 'default'
    },
    previousButtonBackground: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: NAVIGATION_FAILSAFE_WIDTH,
      zIndex: 1,
      cursor: 'default',
      background: 'transparent'
    },
    swiper: {
      '--swiper-navigation-color': palette.accent,
      '--swiper-navigation-size': rem(26)
    } as CSSProperties
  };

  if (quickFilterItems.length <= 1) {
    return null;
  } else {
    return (
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          style={styles.swiper}
          navigation={true}
          slidesPerView="auto"
        >
          <div style={styles.previousButtonBackground} />
          {quickFilterItems.map(item => (
            <SwiperSlide key={item.text}>
              <QuickFilterCard item={item} />
            </SwiperSlide>
          ))}
          <div style={styles.nextButtonBackground} />
        </Swiper>
        <style>{`
        .swiper {
          width: 100%;
        }
        .swiper-slide {
            width: auto;
          }
    
        `}</style>
      </Stack>
    );
  }
};

interface QuickFilterCardProps {
  item: QuickFilterItem;
}

interface QuickFilterCardStyles {
  root: IStackStyles;
  image: CSSProperties;
}

export const QuickFilterCard: React.FC<QuickFilterCardProps> = ({ item }) => {
  const { semanticColors, spacing, effects, palette } = useTheme();
  const { pathname, query } = useRouter();

  const styles: QuickFilterCardStyles = {
    root: {
      root: {
        borderRadius: effects.roundedCorner4,
        border: `1px solid ${
          item.isActive ? palette.themePrimary : semanticColors.variantBorder
        }`
      }
    },
    image: {
      opacity: 0.85,
      borderRadius: 4
    }
  };
  return (
    <Stack
      horizontal
      verticalAlign="center"
      tokens={{ padding: spacing.s2, childrenGap: spacing.s2 }}
      styles={styles.root}
    >
      {item.image && (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          style={styles.image}
          height={48}
          width={48}
          objectFit="contain"
          objectPosition="center"
        />
      )}
      <NextLink
        shallow={item.shallowNavigation}
        href={{
          pathname,
          query: {
            ...query,
            ...item.query
          }
        }}
      >
        <ActionButton>{item.text}</ActionButton>
      </NextLink>
    </Stack>
  );
};