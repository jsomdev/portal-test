import { IButtonStyles, IStackStyles, ITextStyles } from '@fluentui/react';
import { MatchedCustomer } from '@services/portal-api/models/MatchCustomerResponse';

export interface CustomerSuggestionsProps {
  customers: MatchedCustomer[];
  onSelect: (customer: MatchedCustomer) => void;
  selectedCustomer: MatchedCustomer | undefined;
}

export interface CustomerSuggestionsStyles {
  customerCardsContainer: IStackStyles;
  buttonStyles: IButtonStyles;
  accountNumberText: ITextStyles;
  companyName: ITextStyles;
}

export interface CustomerSuggestionCardProps {
  customer: MatchedCustomer;
  onSelect: (customer: MatchedCustomer) => void | undefined;
}

export interface CustomerSuggestionCardStyles {
  customerCard: IStackStyles;
  accountNumberText: ITextStyles;
}
