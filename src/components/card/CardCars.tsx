
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import axios from 'axios'

type Root = Root2[]

interface Root2 {
  metadata: Metadata
  sys: Sys
  fields: Fields
}

interface Metadata {
  tags: any[]
}

interface Sys {
  space: Space
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment
  revision: number
  contentType: ContentType
  locale: string
}

interface Space {
  sys: Sys2
}

interface Sys2 {
  type: string
  linkType: string
  id: string
}

interface Environment {
  sys: Sys3
}

interface Sys3 {
  id: string
  type: string
  linkType: string
}

interface ContentType {
  sys: Sys4
}

interface Sys4 {
  type: string
  linkType: string
  id: string
}

interface Fields {
  title: string
  price: number
  photo: string
}


export default function MediaCard() {

  const [posts, setPosts] = useState<Root2[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  console.log(posts)


const fetchData = async (url: string, headers: Record<string, string>) => {
  try {
    setIsLoading(true);

    const response = await axios.get(url, { headers });
    // Assuming the data you want to map is in the 'items' property of the response data
    const postsData = response.data?.items || [];
    setPosts(response.data?.items || []);
  } catch (error: any) {
    console.log(error.response?.data?.message);
    setError(error.response?.data?.message || error.message);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    const accessToken = 'VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o';
    const url = `http://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car`
  
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

  fetchData(url, headers);
    
  
  }, [])

  return (
    <Grid container spacing={2} sx={{ py: 4}}>
      {posts.map((item: Root2) => (
        <Grid xs={12} md={3} key={item.sys.id}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ width: '100%', height: 'auto', minHeight: '200px' }}
            image={item.fields.photo}
            title={item.fields.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.fields.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.fields.price.toLocaleString()} THB/Day
            </Typography>
          </CardContent>
          <CardActions>
          <Button variant="contained" fullWidth size="large">Add to cart</Button>
          </CardActions>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}