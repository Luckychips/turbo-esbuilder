'use client';

import React from 'react';
import * as S from './styles';

interface Props {
  text: String;
  onClick: () => void;
}

const WrappedButton = ({ text, onClick }: Props) => {
  return <S.Wrapper onClick={onClick}>{text}</S.Wrapper>;
};

export default WrappedButton;
