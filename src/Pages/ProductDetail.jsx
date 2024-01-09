import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import axios from 'axios';
//import ProductService from '../Services/productService';


export default function ProductDetail() {

  let {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
      //let productService = new ProductService();
      const fetchData = async () => {
          try {
            
            const response = await axios.get(`https://dummyjson.com/products/${id}`); 
            setProduct(response.data);
          //const response = productService.getByProductId().then(res=>setProduct(res.data)); 
              
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchData();
      return () => {
      };
  }, []); 
 
  return (
   
    <div>
   <Card.Group>
   <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>{product.title}</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>

  </Card.Group>
  </div>
  )
}
