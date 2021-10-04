import React from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import SnailImg from "../../images/snails sized.jpg";
import DessertImg from "../../images/MilleFeuille sized.jpg";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";


const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  background-color: white;
`;

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
//   border: 1px solid black;
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
  font-style: italic;
`;

const styles = {
    tabs: {
      width: '1000px',
      display: 'block',
    //   marginRight: '30px',
    //   verticalAlign: 'top',
      justifyContent: 'center',
    //   border: '1px solid black',
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
      fontSize: '18px',
      fontFamily:'Arial',
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
  const accessibilityMarginSize = 50;

  return (
    <PageWrapper>
    <TopSectionContainer>
        <BackgroundFilter>
            <Navbar useTransparent />
            <TopSectionInnerContainer>
                <MenuViewContainer>
                <MenuContainer>
                    <img src={SnailImg} alt="snails" style={{width: 250,height: 550, marginRight: 20,marginLeft: 20}}/>
            
                {/* <h1>Menu</h1> */}
                <Tabs
                  activeLinkStyle={styles.activeLinkStyle}
                  visibleTabStyle={styles.visibleTabStyle}
                  style={styles.tabs}>
                  <TabLink to="entree" style={styles.tabLink} >ENTREES</TabLink>
                  <TabLink to="main" style={styles.tabLink}>MAINS</TabLink>
                  <TabLink to="desserts" style={styles.tabLink} >DESSERTS</TabLink>
                  <TabLink to="drinks" style={styles.tabLink}>DRINKS</TabLink>

                  <TabContent for="entree" style={styles.content}> 
                    {/* Placeholder */}
                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Baguette & Salted Butter $5</p>
                        <ItemDescription>Gluten free available</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Pate De Foie $10</p>
                        <ItemDescription>Chicken Liver pate, served with baguette</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>French Onion Soup $12</p>
                        <ItemDescription>Topped with Cheesy croutons</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Croqe Monsieur $14</p>
                        <ItemDescription>Ham and cheese toastie with fried egg on top</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Beef Tartare $20</p>
                        <ItemDescription>Raw Beef with Mayonaise and served with Grilled Bread </ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>
                    
                    </TabContent>
                  <TabContent for="main" style={styles.content}>
                      {/* Placeholder */}
                      <MenuItemContainer>
                        <ItemContainer>
                        <p>Bacon and Leek Quiche $24</p>
                        <ItemDescription>Bacon, Leek, egg in a creamy quiche sauce.</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Tomato Quiche $21</p>
                        <ItemDescription>Delicious fresh tomatoes</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Mushroom Risotto $28</p>
                        <ItemDescription>Mushroom Mix with Herbs and Parmesan Cheese</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Salmon en Papillote $37</p>
                        <ItemDescription>Fresh Salmon Fillet with Green Beans and Carrots</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Chicken Confit $34</p>
                        <ItemDescription>Free Range Chicken with Tomato Puree</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Steak Frites $34</p>
                        <ItemDescription>Rib Eye Steak with Herb Fries</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Beef Bourguignon $39</p>
                        <ItemDescription>Beef burgundy, slow cooked in Red Wine with Mushrooms, Carrots and Thyme</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Bouillabaisse $40</p>
                        <ItemDescription>Mussels, Crab, Mullet, Bass, Barramundi in a slow cooked Tomato Sauce</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                  <TabContent for="desserts" style={styles.content}>
                    {/* Placeholder */}
                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Vanilla créme brûlèe $14</p>
                        <ItemDescription>Vanilla créme brûlèe, Pistachio crumble , Mandarin sorbet</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Profiteroles $12</p>
                        <ItemDescription>Vanilla ice cream, Salted caramel, Hot chocolate sauce</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Ice Cream $10</p>
                        <ItemDescription>Vanilla, Chocolate, Strawberry</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Raspberry souffle $15</p>
                        <ItemDescription>With Pistachio Ice Cream</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Mille-feuille of Banana $16</p>
                        <ItemDescription>Hazelnut and Creme Chantilly, Mango, Passionfruit Sorbet</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                  </TabContent>
                  <TabContent for="drinks" style={styles.content}> 
                    {/* Placeholder */}
                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Fresh Juice $8</p>
                        <ItemDescription>Apple, Orange, Pineapple</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Soft Drinks $8</p>
                        <ItemDescription>Coke, Diet Coke, Sprite, Fanta, Pepsi, Ginger Beer</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Sparkling Water $5</p>
                        <ItemDescription>It sure is sparkly</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Le Fraise Spritz $23</p>
                        <ItemDescription>Absolut Vodka, Alba Luna Prosecco, Citrus, Strawberry Shrub</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>Paris l' Appel $23</p>
                        <ItemDescription>Beefeater Gin, Navados Sherry, Grapefruit, Violette, Citrus</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>2018 Domaine de Beauvernay 'Terroir de Jullié' Julienas (RED) $27</p>
                        <ItemDescription>Bright,supple Gamay with cherries and violets on a smooth, juicy palate.</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>2019 Terre a Terre 'Piccadilly Red' Trousseau Cabernet Franc (RED) $27</p>
                        <ItemDescription>Light and fresh Australian twist on Jura: cherry, pomegranate and spices.</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <ItemContainer>
                        <p>2018 Domaine de la Loge ‘Silex’ Pouilly-Fumé – Loire Valley, Fr (WHITE) $28</p>
                        <ItemDescription>Light and fresh Australian twist on Jura: cherry, pomegranate and spices.</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>
                    
                    <MenuItemContainer>
                        <ItemContainer>
                        <p>2018 Domaine de Belle-vue, Clos des bouquinardieres – Pays Nantais, Fr (WHITE) $37</p>
                        <ItemDescription>Very mineral and vibrant, tastes of wet stone, this is one of the best Muscadet.</ItemDescription>
                        </ItemContainer>
                    </MenuItemContainer>

                     </TabContent>
                </Tabs>
                <img src={DessertImg} alt="snails" style={{width: 250,height: 550, marginRight: 20,marginLeft: 20}}/>

                </MenuContainer>

                </MenuViewContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
    </PageWrapper>
  );
}