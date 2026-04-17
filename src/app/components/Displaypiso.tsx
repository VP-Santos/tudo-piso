import { Box, Paper } from "@mui/material";

export default function Displaypiso() {
  return (
    <Box flex={1} mt={{ xs: 4, md: 0 }} ml={{ md: 4 }}>
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          height: 300,
          backgroundImage: "url('/assets/piso.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  )
}