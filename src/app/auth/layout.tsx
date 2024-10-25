import { Box, Paper, Typography } from '@mui/material';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Paper sx={{ padding: 8 }}>
        <Typography variant="h4" color="primary">
          Welcome to Custom Courseware
        </Typography>
        <Box>{children}</Box>
      </Paper>
    </>
  );
}
