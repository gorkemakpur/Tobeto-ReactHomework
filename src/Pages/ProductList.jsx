import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import axios from 'axios';
import { Link } from "react-router-dom";
//import ProductService from "../Services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);


    useEffect(() => {
      //let productService = new ProductService();
        const fetchData = async () => {
            try {
              //bu kısım servicede yazılması lazım fakat serviste yazdığım zaman apiyi okuyamıyor bu kısıma tekrar bakılacak
              //const response = productService.getProducts();
                const response = await axios.get('https://dummyjson.com/products'); 
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Hata durumunu işleyin
            }
        };

        fetchData();

        // Cleanup function (if necessary)
        return () => {
            // Gerekirse temizlik işlemini burada gerçekleştirin
        };
    }, []); // Boş dependency array, bu effect'in sadece bir kez çalışmasını sağlar, componentDidMount gibi

    // Component'iniz burada render ediliyor olmalı

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.id}`}>{product.title}</Link></Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
}