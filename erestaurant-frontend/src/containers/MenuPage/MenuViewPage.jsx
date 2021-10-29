import React from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import SnailImg from "../../images/snails sized.jpg";
import DessertImg from "../../images/MilleFeuille sized.jpg";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer
  } from "../../components/commonStyle/commonStyle";
import { ProductTitle } from '../../components/products/ProductsElements';  

const MenuViewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: white;
  margin-bottom: 20px;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  margin-top: 30px;
  justify-content: center;
`;

const MenuItemContainer = styled.div`
  height: 85px;
  width: 80%%;
  display: flex;
  justify-content: center;
  align-items: center ; 
  margin: 20px;
`;

const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center ; 
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`;

const styles = {
  tabs: {
    width: '1000px',
    display: 'block',
    justifyContent: 'center',
  },
  links: {
    margin: 0,
    padding: 0,
  },
  tabLink: {
    height: '40px',
    width: '200px',
    lineHeight: '30px',
    padding: '0 15px',
    cursor: 'pointer',
    border: 'none',
    borderBottom: '2px solid transparent',
    display: 'inline-block',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontSize: '1rem',
    fontFamily: 'Arial',
  },
  activeLinkStyle: {
    borderBottom: '2px solid red',
    fontWeight: 'bold',
  },
  visibleTabStyle: {
    display: 'inline-block',
  },
  content: {
    justifyContent: 'center',
  },
};

export function MenuViewPage() {
  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <Navbar useTransparent />
          <TopSectionInnerContainer>
            <MenuViewContainer>
              <MenuContainer>
                <img src={SnailImg} alt="snails" style={{ width: 250, height: 550, marginRight: 20, marginLeft: 20 }} />
                <Tabs
                  activeLinkStyle={styles.activeLinkStyle}
                  visibleTabStyle={styles.visibleTabStyle}
                  style={styles.tabs}>
                  <TabLink to="entree" style={styles.tabLink} >Entree</TabLink>
                  <TabLink to="main" style={styles.tabLink}>Main</TabLink>
                  <TabLink to="desserts" style={styles.tabLink} >Dessert</TabLink>
                  <TabLink to="drinks" style={styles.tabLink}>Drink</TabLink>

                  <TabContent for="entree" style={styles.content}>
                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Baguette & Salted Butter $5</ProductTitle>
                        <ItemDescription>Gluten free available</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Pate De Foie $10</ProductTitle>
                        <ItemDescription>Chicken Liver pate, served with baguette</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>French Onion Soup $12</ProductTitle>
                        <ItemDescription>Topped with Cheesy croutons</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Croqe Monsieur $14</ProductTitle>
                        <ItemDescription>Ham and cheese toastie with fried egg on top</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Beef Tartare $20</ProductTitle>
                        <ItemDescription>Raw Beef with Mayonaise and served with Grilled Bread </ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                  <TabContent for="main" style={styles.content}>
                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Bacon and Leek Quiche $24</ProductTitle>
                        <ItemDescription>Bacon, Leek, egg in a creamy quiche sauce.</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Tomato Quiche $21</ProductTitle>
                        <ItemDescription>Delicious fresh tomatoes</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Mushroom Risotto $28</ProductTitle>
                        <ItemDescription>Mushroom Mix with Herbs and Parmesan Cheese</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Salmon en Papillote $37</ProductTitle>
                        <ItemDescription>Fresh Salmon Fillet with Green Beans and Carrots</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Chicken Confit $34</ProductTitle>
                        <ItemDescription>Free Range Chicken with Tomato Puree</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Steak Frites $34</ProductTitle>
                        <ItemDescription>Rib Eye Steak with Herb Fries</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Beef Bourguignon $39</ProductTitle>
                        <ItemDescription>Beef burgundy, slow cooked in Red Wine with Mushrooms, Carrots and Thyme</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Bouillabaisse $40</ProductTitle>
                        <ItemDescription>Mussels, Crab, Mullet, Bass, Barramundi in a slow cooked Tomato Sauce</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                  <TabContent for="desserts" style={styles.content}>
                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Vanilla créme brûlèe $14</ProductTitle>
                        <ItemDescription>Vanilla créme brûlèe, Pistachio crumble , Mandarin sorbet</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Profiteroles $12</ProductTitle>
                        <ItemDescription>Vanilla ice cream, Salted caramel, Hot chocolate sauce</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Ice Cream $10</ProductTitle>
                        <ItemDescription>Vanilla, Chocolate, Strawberry</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Raspberry souffle $15</ProductTitle>
                        <ItemDescription>With Pistachio Ice Cream</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Mille-feuille of Banana $16</ProductTitle>
                        <ItemDescription>Hazelnut and Creme Chantilly, Mango, Passionfruit Sorbet</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                  <TabContent for="drinks" style={styles.content}>
                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Fresh Juice $8</ProductTitle>
                        <ItemDescription>Apple, Orange, Pineapple</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Soft Drinks $8</ProductTitle>
                        <ItemDescription>Coke, Diet Coke, Sprite, Fanta, Pepsi, Ginger Beer</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Sparkling Water $5</ProductTitle>
                        <ItemDescription>It sure is sparkly</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Le Fraise Spritz $23</ProductTitle>
                        <ItemDescription>Absolut Vodka, Alba Luna Prosecco, Citrus, Strawberry Shrub</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>Paris l' Appel $23</ProductTitle>
                        <ItemDescription>Beefeater Gin, Navados Sherry, Grapefruit, Violette, Citrus</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>2018 Domaine de Beauvernay 'Terroir de Jullié' Julienas (RED) $27</ProductTitle>
                        <ItemDescription>Bright,supple Gamay with cherries and violets on a smooth, juicy palate.</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>2019 Terre a Terre 'Piccadilly Red' Trousseau Cabernet Franc (RED) $27</ProductTitle>
                        <ItemDescription>Light and fresh Australian twist on Jura: cherry, pomegranate and spices.</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>2018 Domaine de la Loge ‘Silex’ Pouilly-Fumé – Loire Valley, Fr (WHITE) $28</ProductTitle>
                        <ItemDescription>Light and fresh Australian twist on Jura: cherry, pomegranate and spices.</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                      <ItemContainer>
                        <ProductTitle>2018 Domaine de Belle-vue, Clos des bouquinardieres – Pays Nantais, Fr (WHITE) $37</ProductTitle>
                        <ItemDescription>Very mineral and vibrant, tastes of wet stone, this is one of the best Muscadet.</ItemDescription>
                      </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                </Tabs>
                <img src={DessertImg} alt="snails" style={{ width: 250, height: 550, marginRight: 20, marginLeft: 20 }} />
              </MenuContainer>

            </MenuViewContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}