import { ChangeEvent } from 'react';
import { Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function Search({ placeholder, onChange }: { 
  placeholder?: string, 
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void 
}) {
  return (
    <Box display='flex' alignItems='center'>
      <SearchIcon sx={{ px: 2 }} />
      <Input 
        placeholder={placeholder}
        onChange={onChange}
        sx={{ px: 2 }}
      />
    </Box>
  )
}