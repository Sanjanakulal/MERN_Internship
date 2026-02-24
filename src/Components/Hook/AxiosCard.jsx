import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function AxiosCard() {
    const [data ,setData] = useState([]);

    const handlefetch =()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
     console.log(res.data.products)

     //setData (used to display on screen)
     setData(res.data.products)
    })
    .catch((error)=>{
    console.log(error)
    })
    }

    useEffect(()=>{
        handlefetch()
    },[])
   

  return (
    
    <div style={{ padding: "20px" }}>
      <button onClick={handlefetch}>click</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
  {data.map((item)=>{
  return(
    <Card key={item.id} sx={{ width: 300, margin: 2 }}>

      <CardHeader
        title={item.title}
        subheader={item.category}
      />

      <CardMedia
        component="img"
        height="180"
        image={item.thumbnail}
        alt={item.title}
      />

      <CardContent>
        <Typography variant="body2">
          {item.description}
        </Typography>
        <Typography variant="h6">
          ₹{item.price}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
})}
    </div>
    </div>
   
  )
}
