const template = (variables, { tpl }) => {
  return tpl`
  import { classes, classNames, IconProps } from '@dataroom/ui-utils';
  import type { SVGProps } from 'react';
  import { forwardRef, Ref } from 'react';

  ${variables.interfaces};

  const ${variables.componentName} = (${variables.props}) => (
    ${variables.jsx}
  );

  const ${`${variables.componentName}ForwardRef`} = forwardRef(${variables.componentName});

  const ${`${variables.componentName}Wrapper`} = (
    { size = 'base', className, ...props }: IconProps,
    ref: React.Ref<SVGSVGElement>,
  ) => (
    ${`<${variables.componentName}ForwardRef
        ref={ref}
          className={classNames(size && styles.sizes[size], className)}
          {...props}
        />
    `}
      
  );

  const styles = {
    sizes: {
      xs: classes('w-2.5', 'h-2.5'),
      sm: classes('w-3.5', 'h-3.5'),
      base: classes('w-4.5', 'h-4.5'),
      md: classes('w-5.5', 'h-5.5'),
      lg: classes('w-6.5', 'h-6.5'),
    },
  };

  export const ${`${variables.componentName.replace(/^Svg/, '')}Icon`} = forwardRef(${`${variables.componentName}Wrapper`});

`;
};

module.exports = template;
