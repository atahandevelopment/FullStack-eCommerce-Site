import { Box, Typography, TextField } from "@mui/material"

function Payment({ values, touched, errors, handleBlur, handleChange}) {
  return (
    <Box m="30px 0">
       {/* CONTACT INFO */}

       <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
                İletişim Bilgisi
            </Typography>
            <TextField 
            fullWidth
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{ gridCloumn: "span 4", marginBottom:"15px"}}
            />
               <TextField 
            fullWidth
            type="text"
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
            name="phoneNumber"
            error={!!touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber}
            sx={{ gridCloumn: "span 4", marginBottom:"15px"}}
            />
       </Box>

    </Box>
    

    
  )
}

export default Payment