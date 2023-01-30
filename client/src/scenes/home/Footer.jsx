import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }} = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={shades.neutral[300]}>
            <Box 
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
                >
                    <Box
                        width="clamp(20%, 30%, 40%)"
                        display="block"
                        >
                            <Typography 
                                variant="h4" 
                                fontWeight="bold" 
                                mb="30px" 
                                color={shades.secondary[500]}
                                >ZAMASON
                            </Typography>
                                <div>Açıklama</div>
                             </Box>
                             
                    <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                                Hakkımızda
                            </Typography>
                            <Typography mb="30px">Tarihçemiz</Typography>
                            <Typography mb="30px">Mağazalarımız</Typography>
                            <Typography mb="30px">Şartlar ve Koşullar</Typography>
                            <Typography mb="30px">Gizlilik Politikası</Typography>
                   
                    </Box>
                    <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                                Müşteri Hakları
                            </Typography>
                            <Typography mb="30px">Yardım Merkezi</Typography>
                            <Typography mb="30px">Sipariş Takibi</Typography>
                            <Typography mb="30px">Kurumsal ve Toptan Satış</Typography>
                            <Typography mb="30px">İade Politikası</Typography>
                   
                    </Box>
                    <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                                İletişim
                            </Typography>
                            <Typography mb="30px">Aşağı Yahyalar, Aydan Cd. NO:9/B, 06210 Yenimahalle/Ankara</Typography>
                            <Typography mb="30px">uskudarfirin@gmail.com</Typography>
                            <Typography mb="30px">(0312) 346 95 00</Typography>
                            
                    </Box>
            </Box>
        </Box>
    )
}


export default Footer;