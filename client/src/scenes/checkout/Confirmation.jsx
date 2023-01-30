import { Box, Alert, AlertTitle } from "@mui/material";



function Confirmation() {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success!</AlertTitle>
        You Have Successfully made an Order - {" "}
        <strong>Congrats on makin your purchasing!</strong>
      </Alert>
    </Box>
  )
}

export default Confirmation