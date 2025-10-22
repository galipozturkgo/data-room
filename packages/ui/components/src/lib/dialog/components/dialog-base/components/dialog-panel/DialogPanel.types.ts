type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type DialogPanelProps = {
  children: React.ReactNode;
  size?: Size;
  className?: string;
};
