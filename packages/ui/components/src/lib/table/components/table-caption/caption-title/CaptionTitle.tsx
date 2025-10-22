'use client';

import { Title } from '../../../../typography';
import { CaptionTitleProps } from './CaptionTitle.types';

const CaptionTitleBase: React.FC<CaptionTitleProps> = ({ title }) => {
  return <Title title={title} />;
};

export const CaptionTitle = CaptionTitleBase;
