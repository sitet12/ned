export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'panel' | 'pump' | 'inverter' | 'heater';
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}