import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { AppTheme } from '@/app/theme';
import { Box, Container, CssBaseline } from '@mui/material';
import Nav from '@/components/nav';

export const metadata: Metadata = {
  title: 'Custom Courseware',
  description: 'Courses made by Learners for Learners.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <AppTheme>
            <CssBaseline enableColorScheme />
            <Box>
              <Nav />
              <Container sx={{ paddingY: 6 }}>{children}</Container>
            </Box>
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
