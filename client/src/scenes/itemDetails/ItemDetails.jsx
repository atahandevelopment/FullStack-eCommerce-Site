import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import Navbar from "../global/Navbar";
import Footer from "../home/Footer";

function ItemDetails() {
  const dispatch = useDispatch();
  const {itemId} = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    async function getItem () {
      const item = await fetch (
        `http://localhost:1337/api/items/${itemId}?populate=image`,
        {method: "GET"}
      );
      const itemJson = await item.json();
      setItem(itemJson.data);
    }

    async function getItems () {
      const items=await fetch (
        "http://localhost:1337/api/items?populate=image",

      );
      const itemsJson = await items.json();
      setItems(itemsJson.data);
    }

    useEffect(()=>{
      getItem();
      getItems();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[itemId]);
  return (
    <div className="details">
      <Navbar/>
    <Box
      width="80%"
      m="80px auto"
      >
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item?.name}
              width="100%"
              height="100%"
              src= {`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} 
              sx={{ objecFit: "contain"}}/>
            
          </Box>
          {/* ACTIONS */}
          <Box flex="1 1 50%" mb="40px">
            <Box display="flex" justifyContent="space-between">
                <Box>Home/Item</Box>
                <Box>Prev/Next</Box>
            </Box>
            <Box m="65px 0 25px 0" >
              <Typography variant="h3">{item?.attributes?.name}</Typography>
              <Typography variant="h2" fontWeight="bold" sx={{ mt:"20px"}}>${item?.attributes?.price}</Typography>
              <Typography sx={{ mt: "20px"}}>{item?.attributes?.longDescription}</Typography>
            </Box>
            <Box 
                        display="flex" 
                        flexWrap="wrap"
                        justifyContent="left"
                        alignItems="center" 
                        borderRadius="3px"
                        >
                          <Box 
                          display="flex" 
                          flexWrap="wrap"
                          justifyContent="space-between"
                          alignItems="center"
                          backgroundColor={shades.neutral[100]}
                          borderRadius="3px"
                          p="0 10px"
                          height="50px">
                          
                          <IconButton
                            onClick={()=>setCount(Math.max(count -1, 1))}
                            >
                                <RemoveIcon/>
                                </IconButton>
                                <Typography color={shades.primary[300]}>{count}</Typography>
                            <IconButton
                            onClick={()=> setCount(count +1)}
                            >
                                <AddIcon/>
                         </IconButton>
                          </Box>
                        
                         <Box ml="10px" height="50px">
              <Button
                        onClick={()=> {dispatch(addToCart({item: {...item, count} }));
                        }}
                        sx={{ backgroundColor:"#222222", color:"white", height:"50px", p:"0 15px"}}
                        >
                            Sepete Ekle
              </Button>
            </Box>
                        </Box>
            
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <FavoriteBorderOutlinedIcon/>
                <Typography sx={{ml:"10px"}}>Favorilerine Ekle</Typography>
                <Typography sx={{ml:"10px"}}>KATEGORİ: {item?.attributes?.category}</Typography>
              </Box>
            </Box>
          </Box>

          <Box m="20px 0">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="DESCRIPTION" value="description" />
                    <Tab label="REVIEWS" value="reviews" />
                </Tabs>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="15px">
            {
              value === "description" && (
                <div>{item?.attributes?.longDescription}</div>
              )
            }
            {
              value === "reviews" &&  <div>Reviews</div>
            }
          </Box>

          {/* RELATED ITEMS */}
          <Box mt="50px" width="100%">
            <Typography variant="h3">
              İlişkili Ürünler
            </Typography>
            <Box 
              mt="20px"
              display="flex"
              flexWrap="wrap"
              columnGap="1"
              justifyContent="space-between"
              >
                {items.slice(0,4).map((item, i) => (
                  <Item key={`${item.name}-${i}`} item={item} />
                ))}
            </Box>
          </Box>
        </Box>
    </Box>
    <Footer/>
  </div>
  )
}

export default ItemDetails;