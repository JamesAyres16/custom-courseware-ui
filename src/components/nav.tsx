'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { AppBar, Box, IconButton, Tooltip } from '@mui/material';
import {
  Favorite,
  School,
  ShoppingCart,
  Notifications,
  AccountCircle,
} from '@mui/icons-material';
import { ThemeBtn } from '@/app/theme';
import Search from '@/components/search';

export default function Nav() {
  const icons = [
    { title: 'Favorites', value: <Favorite /> },
    { title: 'Current Courses', value: <School /> },
    { title: 'Cart', value: <ShoppingCart /> },
    { title: 'Notifications', value: <Notifications /> },
    { title: 'Change Theme', value: <ThemeBtn /> },
    {
      title: 'Sign In',
      value: <AccountCircle onClick={() => signIn('keycloak')} />,
    },
  ].map((icon, index) => (
    <Tooltip key={`tray-icon-${index}`} title={icon.title} arrow>
      <IconButton>{icon.value}</IconButton>
    </Tooltip>
  ));

  return (
    <AppBar
      sx={{
        position: 'sticky',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mx: 0,
        px: 3,
        py: 1,
      }}
    >
      <Box width={1 / 5}>
        <IconButton sx={{ width: 56, height: 56 }}>
          <Image
            src="/icon.svg"
            alt="Custom Courseware Icon"
            width={56}
            height={56}
          />
        </IconButton>
      </Box>

      <Box width={3 / 5} px={5}>
        <Search placeholder="search for anything..." />
      </Box>

      <Box
        width={1 / 5}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {icons}
      </Box>
    </AppBar>
  );
}
