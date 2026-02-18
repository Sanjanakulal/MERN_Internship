import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import image1 from '../../assets/scarlet.jpg'
import image2 from '../../assets/kingfisher.jpg'
import image3 from '../../assets/toucan.jpg'
import image4 from '../../assets/peacock.jpg'
import image5 from '../../assets/flamingo.jpg'
import image6 from '../../assets/mandarinduck.jpg'

export default function MediaCard() {
  const birds = [
  {
    name: 'Scarlet Macaw',
    profileimage: image1,
    description:'Scarlet Macaw is a vibrant parrot with bright red, blue, and yellow feathers. It is colorful, intelligent, and very eye-catching.'
  },
  {
    name: 'Kingfisher',
    profileimage: image2,
    description:'Kingfisher has bright blue and orange feathers. It looks small, sharp, and very attractive near water bodies.'
  },
  {
    name: 'Toucan',
    profileimage: image3,
    description:'Toucan is famous for its large, colorful beak and black body with bright accents. It looks unique and stylish.'
  },
  {
    name: 'Peacock',
    profileimage: image4,
    description:'Peacock is known for its stunning blue and green feathers. It looks royal and spreads its feathers beautifully.'
  },
  {
    name: 'Flamingo',
    profileimage: image5,
    description:'Flamingo has bright pink feathers and long elegant legs. It looks graceful and very aesthetic.'
  },
  {
    name: 'Mandarin Duck',
    profileimage: image6,
    description:'Mandarin Duck has orange, blue, and green feathers. It is one of the most colorful and beautiful birds.'
  }
];
      
return (
    <div style={{display:'flex', flexWrap:'wrap',margin:'30px',gap:'40px'}}>
      {birds.map((info)=>(
    <Card style={{ width:345 }}>
        <CardMedia 
         style={{height:200}}
        image={info.profileimage}
        title={info.name}
        />
        <CardContent>
        <Typography variant="h5" style={{fontFamily:'Poppins, serif'}}>{info.name}</Typography>
        <Typography variant="body2">{info.description}</Typography>
        </CardContent>
        <CardActions>
            <Button  variant='text' size='small'>Share</Button>
            <Button  variant='text' size='small'>Learn more</Button>
        </CardActions>
    </Card>
    ))}
    </div>
    

  )
}