// import React from 'react';

// const Button = () => {
//   return (
//     <div>
//       Button
//     </div>
//   );
// }

// export default Button;

import React, { forwardRef } from "react";
import styled, { StyledProps } from "styled-components";
// import { themeGet } from "@styled-system/theme-get";
// import { variant, border, typography, color, space, compose } from "styled-system";
// import { boolean } from "yargs";

// // variants
// const variants = {
//   buttonVariant: variant({
//     scale: 'buttons.variantMapping',
//   }),
// };

export interface ButtonProps extends StyledProps<any> {
  variant?: 'light.primary' | 'light.secondary';
  size?: 'small' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonWrapper: React.FC<ButtonProps> = styled.button<ButtonProps>`
  padding: 0;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  border-radius: 0;
  transition:width 2s;
`;

const Button = forwardRef(
  ({ disabled = false, children, variant = 'light.primary', ...rest }: ButtonProps, ref) => {
    const [mode] = variant.split('.');

    return (
      <ButtonWrapper
        ref={ref}
        mode={mode}
        aria-disabled={disabled || null}
        disabled={disabled}
        variant={variant}
        {...rest}
      >
        ButtonTitle
      </ButtonWrapper>
    );
  },
);

Button.defaultProps = {
  variant: 'light.primary',
  size: 'large',
  disabled: false,
  type: 'button',
};

Button.displayName = 'Button';

export default Button;