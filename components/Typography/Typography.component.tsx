import React from 'react';
import { Typography as AntTypography } from "antd"
import { TypographyProps } from './Typography.types';

const Typography: React.FC<TypographyProps> = (props) => {

  return (
    <AntTypography {...props as any} />
  )
};

export const { Title, Text } = AntTypography

export default Typography;