'use client';

import React from 'react';
import { createPortal } from 'react-dom';

import { FloatingWrapperProps } from './FloatingWrapper.types';

const FloatingWrapperBase: React.FC<FloatingWrapperProps> = ({
  portal,
  children,
}) => {
  return portal ? createPortal(children, document.body) : children;
};

export const FloatingWrapper = React.memo(FloatingWrapperBase);
