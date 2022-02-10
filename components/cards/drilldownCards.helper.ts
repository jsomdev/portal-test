import { Theme } from '@fluentui/theme';
import { Category } from '@services/portal-api/models/Category';
import { WidenImageHelper } from '@services/widen/widenImageHelper';

import { DrillDownCardProps } from './drilldownCards';

/**
 * Function that will map a Category to DrillDownCardProps by:
 * extracting the id, name and url and map them to key, title & onClick
 * @param category Category that needs to be mapped
 * @param onItemClick callback that will be fired when the user clicks on a card
 */
export function mapCategoryToDrilldownCardProps(
  category: Category,
  onItemClick: (
    path: string | undefined,
    event: React.MouseEvent<
      HTMLElement | HTMLAnchorElement | HTMLButtonElement,
      MouseEvent
    >
  ) => void,
  theme: Theme
): DrillDownCardProps<Category> {
  const { effects } = theme;
  return {
    id: category.id || '',
    type: 'category',
    title: category.name?.en || '',
    imageProps: {
      styles: {
        root: {
          height: '145px',
          width: '194px',
          borderTopLeftRadius: effects.roundedCorner4,
          borderTopRightRadius: effects.roundedCorner4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        image: {
          transition: 'all 0.6s ease-in-out',
          transformOrigin: 'center',
          selectors: {
            '&:hover': {
              transform: 'scale(1.2)'
            }
          }
        }
      },
      src: WidenImageHelper.getOptimizedSrc(category.image?.url || '', {
        dimensions: { width: 194, height: 145 },
        position: 'c'
      }),
      alt: category.name?.en || ''
    },
    data: category
  };
}
