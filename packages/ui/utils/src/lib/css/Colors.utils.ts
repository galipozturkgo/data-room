export type Color =
  | 'primary'
  | 'muted'
  | 'accent'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'yellow';

export type Colors = {
  background: {
    default: { [key in Color]: string };
    hover: { [key in Color]: string };
    active: { [key in Color]: string };
    contained: {
      hover: { [key in Color]: string };
      active: { [key in Color]: string };
    };
  };
  text: {
    default: { [key in Color]: string };
    contained: { [key in Color]: string };
    hover: { [key in Color]: string };
    active: { [key in Color]: string };
  };
  border: { [key in Color]: string };
  fill: { [key in Color]: string };
  icon: { [key in Color]: string };
};

export const COLORS: Colors = {
  background: {
    default: {
      primary: 'bg-skin-primary',
      muted: 'bg-skin-muted',
      accent: 'bg-skin-accent',
      red: 'bg-skin-red',
      green: 'bg-skin-green',
      blue: 'bg-skin-blue',
      orange: 'bg-skin-orange',
      yellow: 'bg-skin-yellow',
    },
    hover: {
      primary: 'hover:bg-skin-muted/10',
      muted: 'hover:bg-skin-muted/10',
      accent: 'hover:bg-skin-accent/10',
      red: 'hover:bg-skin-red/10',
      green: 'hover:bg-skin-green/10',
      blue: 'hover:bg-skin-blue/10',
      orange: 'hover:bg-skin-orange/10',
      yellow: 'hover:bg-skin-yellow/10',
    },
    active: {
      primary: 'hover:active:bg-skin-muted/20',
      muted: 'hover:active:bg-skin-muted/20',
      accent: 'hover:active:bg-skin-accent/20',
      red: 'hover:active:bg-skin-red/20',
      green: 'hover:active:bg-skin-green/20',
      blue: 'hover:active:bg-skin-blue/20',
      orange: 'hover:active:bg-skin-orange/20',
      yellow: 'hover:active:bg-skin-yellow/20',
    },
    contained: {
      hover: {
        primary: 'hover:bg-skin-primary/70',
        muted: 'hover:bg-skin-muted/70',
        accent: 'hover:bg-skin-accent/70',
        red: 'hover:bg-skin-red/70',
        green: 'hover:bg-skin-green/70',
        blue: 'hover:bg-skin-blue/70',
        orange: 'hover:bg-skin-orange/70',
        yellow: 'hover:bg-skin-yellow/70',
      },
      active: {
        primary: 'hover:active:bg-skin-primary/90',
        muted: 'hover:active:bg-skin-muted/90',
        accent: 'hover:active:bg-skin-accent/90',
        red: 'hover:active:bg-skin-red/90',
        green: 'hover:active:bg-skin-green/90',
        blue: 'hover:active:bg-skin-blue/90',
        orange: 'hover:active:bg-skin-orange/90',
        yellow: 'hover:active:bg-skin-yellow/90',
      },
    },
  },
  text: {
    default: {
      primary: 'text-skin-primary',
      muted: 'text-skin-muted',
      accent: 'text-skin-accent',
      red: 'text-skin-red',
      green: 'text-skin-green',
      blue: 'text-skin-blue',
      orange: 'text-skin-orange',
      yellow: 'text-skin-yellow',
    },
    contained: {
      primary: 'text-skin-inverted',
      muted: 'text-skin-inverted',
      accent: 'text-skin-inverted',
      red: 'text-skin-inverted',
      green: 'text-skin-inverted',
      blue: 'text-skin-inverted',
      orange: 'text-skin-inverted',
      yellow: 'text-skin-inverted',
    },
    hover: {
      primary: 'hover:text-skin-primary/70',
      muted: 'hover:text-skin-muted/70',
      accent: 'hover:text-skin-accent/70',
      red: 'hover:text-skin-red/70',
      green: 'hover:text-skin-green/70',
      blue: 'hover:text-skin-blue/70',
      orange: 'hover:text-skin-orange/70',
      yellow: 'hover:text-skin-yellow/70',
    },
    active: {
      primary: 'hover:active:text-skin-primary/90',
      muted: 'hover:active:text-skin-muted/90',
      accent: 'hover:active:text-skin-accent/90',
      red: 'hover:active:text-skin-red/90',
      green: 'hover:active:text-skin-green/90',
      blue: 'hover:active:text-skin-blue/90',
      orange: 'hover:active:text-skin-orange/90',
      yellow: 'hover:active:text-skin-yellow/90',
    },
  },
  border: {
    primary: 'border-skin-primary/20',
    muted: 'border-skin-muted/20',
    accent: 'border-skin-accent/20',
    red: 'border-skin-red/20',
    green: 'border-skin-green/20',
    blue: 'border-skin-blue/20',
    orange: 'border-skin-orange/20',
    yellow: 'border-skin-yellow/20',
  },
  fill: {
    primary: 'fill-skin-primary',
    muted: 'fill-skin-muted',
    accent: 'fill-skin-accent',
    red: 'fill-skin-red',
    green: 'fill-skin-green',
    blue: 'fill-skin-blue',
    orange: 'fill-skin-orange',
    yellow: 'fill-skin-yellow',
  },
  icon: {
    primary: 'text-skin-primary',
    muted: 'text-skin-primary',
    accent: 'text-skin-accent',
    green: 'text-skin-inverted',
    red: 'text-skin-inverted',
    blue: 'text-skin-inverted',
    orange: 'text-skin-inverted',
    yellow: 'text-skin-inverted',
  },
} as const;

export type PredefinedColor =
  | 'accent'
  | 'blue'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'
  | 'muted'
  | 'silent'
  | 'inverted';

export type PredefinedColors = {
  text: { [key in PredefinedColor]: string };
  fill: { [key in PredefinedColor]: string };
  icon: { [key in PredefinedColor]: string };
  border: { [key in PredefinedColor]: string };
  background: { [key in PredefinedColor]: string };
};

export const PREDEFINED_COLORS: PredefinedColors = {
  text: {
    blue: 'text-skin-blue',
    green: 'text-skin-green',
    red: 'text-skin-red',
    accent: 'text-skin-accent',
    pink: 'text-skin-pink',
    purple: 'text-skin-purple',
    orange: 'text-skin-orange',
    muted: 'text-skin-muted',
    silent: 'text-skin-silent',
    inverted: 'text-skin-primary',
  },
  fill: {
    blue: 'fill-skin-blue',
    green: 'fill-skin-green',
    red: 'fill-skin-red',
    accent: 'fill-skin-accent',
    pink: 'fill-skin-pink',
    purple: 'fill-skin-purple',
    orange: 'fill-skin-orange',
    muted: 'fill-skin-muted',
    silent: 'fill-skin-silent',
    inverted: 'fill-skin-primary',
  },
  icon: {
    blue: 'text-skin-inverted',
    red: 'text-skin-inverted',
    green: 'text-skin-inverted',
    accent: 'text-skin-accent',
    pink: 'text-skin-inverted',
    orange: 'text-skin-inverted',
    purple: 'text-skin-inverted',
    muted: 'text-skin-primary',
    silent: 'text-skin-silent',
    inverted: 'text-skin-inverted',
  },
  border: {
    blue: 'border-skin-blue',
    green: 'border-skin-green',
    red: 'border-skin-red',
    accent: 'border-skin-accent',
    pink: 'border-skin-pink',
    purple: 'border-skin-purple',
    orange: 'border-skin-orange',
    muted: 'border-skin-muted',
    silent: 'border-skin-silent',
    inverted: 'border-skin-primary',
  },
  background: {
    blue: 'bg-skin-blue',
    green: 'bg-skin-green',
    red: 'bg-skin-red',
    accent: 'bg-skin-accent',
    pink: 'bg-skin-pink',
    purple: 'bg-skin-purple',
    orange: 'bg-skin-orange',
    muted: 'bg-skin-muted',
    silent: 'bg-skin-silent',
    inverted: 'bg-skin-inverted',
  },
} as const;
