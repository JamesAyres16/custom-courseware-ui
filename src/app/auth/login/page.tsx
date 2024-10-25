import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <Box>
        <Typography variant="h2" color="primary" paddingY={2}>
          Login
        </Typography>
        <Typography variant="h6" color="textSecondary">
          New to Custom Courseware? Sign Up
        </Typography>
      </Box>

      <Box paddingY={6}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" type="email" aria-describedby="email-helper-text" />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            aria-describedby="password-helper-text"
          />
          <FormHelperText id="password-helper-text">
            SSSShhhhh. Don't share this with anyone.
          </FormHelperText>
        </FormControl>
      </Box>

      <Typography variant="caption">Forgot password?</Typography>
    </>
  );
}
