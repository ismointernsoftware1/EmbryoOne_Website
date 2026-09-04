export interface DropdownSubItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface DropdownColumn {
  title: string;
  items: DropdownSubItem[];
}

export interface MegaMenuData {
  id: string;
  triggerLabel: string;
  columns?: DropdownColumn[];
  layout?: "grid-3-col" | "grid-2-col";
  dropdownClass?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface ActionButton {
  label: string;
  href: string;
  variant: "ghost" | "primary";
}

export interface NavigationData {
  megaMenus: {
    products: MegaMenuData;
    solutions: MegaMenuData;
    ai: MegaMenuData;
  };
  directLinks: NavLinkItem[];
  actions: {
    login: ActionButton;
    bookDemo: ActionButton;
  };
}
