'use client';
import { useContext } from 'react';
import { AppBar, Box, IconButton, Tooltip } from '@mui/material';
import {
  Favorite,
  School,
  ShoppingCart,
  Notifications,
  LightMode,
  DarkMode,
  AccountCircle,
} from '@mui/icons-material';
import { ThemeContext } from '@/app/theme';
import Search from '@/components/search';

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

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
          <img src="/icon.svg" alt="Custom Courseware Icon" />
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
        <Tooltip title="Favorites" arrow>
          <IconButton>
            <Favorite />
          </IconButton>
        </Tooltip>

        <Tooltip title="Current Courses" arrow>
          <IconButton>
            <School />
          </IconButton>
        </Tooltip>

        <Tooltip title="Cart" arrow>
          <IconButton>
            <ShoppingCart />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications" arrow>
          <IconButton>
            <Notifications />
          </IconButton>
        </Tooltip>

        <IconButton>
          {theme === 'dark' ? (
            <LightMode onClick={() => setTheme('light')} />
          ) : (
            <DarkMode onClick={() => setTheme('dark')} />
          )}
        </IconButton>

        <IconButton>
          <AccountCircle />
        </IconButton>
      </Box>
    </AppBar>
  );
}
