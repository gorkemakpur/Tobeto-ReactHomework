import React, { useState,useEffect } from "react";
import { Icon,  Menu, Table } from "semantic-ui-react";
import ProductService from "../Services/productService";

export default function ProductList() {
  //destructor işlemi yapıyoruz fonksiyondaki arrayi tek tek değişkenlere atıyor
  //    default = boş       bunu değiştirmek için bunu kullanıyoruz -> hook
  const [announcementTypes, setAnnouncementTypes] = useState([]);

  useEffect(()=>{
    let productService = new ProductService()
    //then başarılı olursa catch hata varsa
        productService.getProducts().then(result => setAnnouncementTypes(result.data.data));
    }
  )
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Duyuru Tipi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {announcementTypes.map((announcementTypes) => (
            <Table.Row>
              <Table.Cell>{announcementTypes.Id}</Table.Cell>
              <Table.Cell>{announcementTypes.Type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
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
    </div>
  );
}
