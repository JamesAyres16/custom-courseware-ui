'use client';
import Image from 'next/image';
import { Box } from '@mui/material';

import jumbotronImage from '@/images/jumbotron.jpg';

export default function Page() {
  return (
    <>
      <Box>
        <Image
          src={jumbotronImage}
          alt="Rocket Taking Off"
          style={{ width: '100%', height: 'auto', borderRadius: '1.5rem' }}
        />
      </Box>
    </>
  );
}
