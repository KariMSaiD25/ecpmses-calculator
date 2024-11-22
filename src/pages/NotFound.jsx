import { Box, Typography, useTheme } from "@mui/material"

 
function NotFound() {
   const theme =useTheme()
  return (
    <Box>

      <Typography variant="h4"  color={theme.palette.error.main}>
        Theres is no Design yet .....
      </Typography>
    </Box>
  )
}

export default NotFound
