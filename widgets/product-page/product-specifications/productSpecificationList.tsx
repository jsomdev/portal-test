import { useCallback, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import {
  DirectionalHint,
  FontWeights,
  IIconStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Link,
  List,
  Stack,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { messageIds } from '@services/i18n';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { rem } from '@utilities/rem';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import {
  ProductSpecificationsGroup,
  ProductSpecificationsItem
} from './productSpecifications.types';

type ProductSpecificationsListProps = ProductSpecificationsGroup;

interface ProductSpecificationsListStyles {
  title: ITextStyles;
  root: IStackStyles;
}

/**
 * The ProductSpecificationsList component displays a title and a list with cells
 * that display the name of the attribute type and one or multiple values belonging to that
 * attribute type. (see helper file).
 * Clicking a row will open a Modal component that displays extra information about the attribute.
 */
export const ProductSpecificationsList: React.FC<
  ProductSpecificationsListProps
> = ({ items, name }) => {
  const { spacing } = useTheme();
  const { locale } = useIntl();
  const { getAttributeType } = useGlobalData();
  const [selectedSpecification, setSelectedSpecification] = useState<
    ProductSpecificationsItem | undefined
  >(undefined);

  const styles: ProductSpecificationsListStyles = {
    root: {
      root: {
        marginBottom: spacing.m
      }
    },

    title: {
      root: {
        fontWeight: FontWeights.semibold,
        marginBottom: spacing.s2
      }
    }
  };

  const attributeTypeFormatter: AttributeTypeFormatter = useMemo(() => {
    return new AttributeTypeFormatter(
      getAttributeType(selectedSpecification?.attribute?.typeCode || ''),
      locale
    );
  }, [getAttributeType, locale, selectedSpecification?.attribute?.typeCode]);

  function onRenderCell(
    item?: ProductSpecificationsItem,
    index?: number | undefined
  ): React.ReactNode | undefined {
    return (
      item && (
        <ProductSpecificationListItem
          label={item.name}
          text={item.text}
          value={item.value}
          index={index || 0}
          type={item.type}
          onClick={() => setSelectedSpecification(item)}
          tooltipContent={item.alternativeText}
          hideInfoIcon={!item.description}
        />
      )
    );
  }
  return (
    <Stack styles={styles.root}>
      <MarkDownDialog
        dialogProps={{
          onDismiss: () => setSelectedSpecification(undefined),
          hidden: !selectedSpecification
        }}
        title={attributeTypeFormatter.formatName()}
        markdownSource={attributeTypeFormatter.formatDescription()}
      />
      <ProductSubsectionHeader title={name} />
      <List items={items} onRenderCell={onRenderCell} />
    </Stack>
  );
};

export interface ProductSpecificationsListItemProps {
  label: string;
  text: string;
  type: DisplayValueType;
  // We don't know the value of an attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onClick: () => void;
  onRenderContent?: () => React.ReactNode;
  index: number;
  tooltipContent?: string | JSX.Element | JSX.Element[] | undefined;
  hideInfoIcon?: boolean;
}

export interface ProductSpecificationsListItemStyles {
  infoIcon: IIconStyles;
  root: (index: number) => IStackStyles;
  title: ITextStyles;
  textWrapper: IStackItemStyles;
}

const messages = defineMessages({
  openLink: {
    id: messageIds.pages.product.sections.specifications.actions.openLink,
    defaultMessage: 'Open Link',
    description: 'Text for the open link action'
  }
});

// eslint-disable-next-line max-len
export const ProductSpecificationListItem: React.FC<
  ProductSpecificationsListItemProps
> = ({
  label,
  text,
  type,
  value,
  index,
  hideInfoIcon,
  onClick,
  onRenderContent,
  tooltipContent
}) => {
  const { spacing, palette, effects } = useTheme();
  const { formatMessage } = useIntl();
  const renderLink = useCallback(
    (linksString: string, separator: string) => {
      const splitLinks = linksString.split(separator);
      return (
        <Stack horizontal grow wrap tokens={{ childrenGap: spacing.s1 }}>
          {splitLinks.map((link, index) => {
            return (
              <Link
                target="#blank"
                onClick={ev => ev.stopPropagation()}
                key={link}
                href={link}
              >
                {formatMessage(messages.openLink, { index })}
              </Link>
            );
          })}
        </Stack>
      );
    },
    [formatMessage, spacing.s1]
  );
  const renderContent = useCallback(() => {
    if (onRenderContent) {
      return onRenderContent();
    }
    switch (type) {
      case DisplayValueType.Boolean: {
        const iconStyles: IIconStyles = {
          root: {
            color: !value ? palette.neutralPrimary : palette.green
          }
        };
        return (
          <Icon
            styles={iconStyles}
            iconName={!value ? 'SkypeMinus' : 'SkypeCheck'}
          />
        );
      }
      case DisplayValueType.Url:
        return renderLink(text, ', ');

      default:
        return <Text>{text}</Text>;
    }
  }, [
    onRenderContent,
    type,
    renderLink,
    text,
    value,
    palette.neutralPrimary,
    palette.green
  ]);

  const styles: ProductSpecificationsListItemStyles = {
    infoIcon: {
      root: {
        color: palette.themePrimary,
        height: 19,
        visibility: hideInfoIcon ? 'hidden' : 'visible',
        paddingTop: 2,
        fontSize: 17,
        width: 19
      }
    },
    title: {
      root: {
        flex: 2
      }
    },
    textWrapper: {
      root: {
        flex: 3
      }
    },
    root: (index: number) => ({
      root: {
        cursor: 'pointer',
        borderRadius: effects.roundedCorner2,
        padding: spacing.s1,
        backgroundColor:
          index % 2 === 0 ? palette.white : palette.neutralLighterAlt,
        selectors: {
          '&:active': {
            padding: rem(6),
            border: `2px solid ${palette.themeDark}`
          }
        }
      }
    })
  };
  return (
    <Stack
      horizontal
      wrap
      tokens={{
        childrenGap: spacing.s1
      }}
      onClick={onClick}
      styles={styles.root(index || 0)}
      verticalAlign="start"
    >
      <Icon iconName="Info" styles={styles.infoIcon} />

      <Text styles={styles.title}>{label}</Text>
      <Stack.Item styles={styles.textWrapper}>
        <TooltipHost
          content={tooltipContent}
          hidden={tooltipContent?.toString().localeCompare(text) === 0}
          calloutProps={{ gapSpace: 0 }}
          directionalHint={DirectionalHint.topCenter}
        >
          {renderContent()}
        </TooltipHost>
      </Stack.Item>
    </Stack>
  );
};
