'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { Box } from '@mui/material';

import darkImage from '@/images/jumbotron-night.jpg';
import lightImage from '@/images/jumbotron-day.jpg';
import { ThemeContext } from '@/app/theme';

export default function Page() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Box>
        <Image
          src={theme === 'dark' ? darkImage : lightImage}
          alt="Rocket Taking Off"
          style={{ width: '100%', height: 'auto', borderRadius: '1.5rem' }}
        />
      </Box>
    </>
  );
}
