import React from 'react';
import { IconLogo, IconLogoMini } from '../../../../common/icons';
import useDebounced from '../../../../common/hooks/useDebounce';

export default function Logo() {
  const [w] = useDebounced();
  return (
    <>
      <a href="/">{w > 768 ? <IconLogo /> : <IconLogoMini />}</a>
    </>
  );
}
