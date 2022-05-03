import React from 'react';
import Button from './Button.js';
import Product from "./Product";
import Tile from "./Tile";
import './App.css';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png.png';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
            innerText="to the collection"
            type="button"
            disabledValue={false}
            />
        <Button
            innerText="shop all bags"
            type="button"
            disabledValue={false}
        />
        <Button
            innerText="pre-order"
            type="button"
            disabledValue={true}
        />
      </nav>

      <main>
         <Product
             productCollection="Best seller"
             productImage={bag1}
             productName="The handy bag"
             productPrice="&euro;400"
          />
          <Product
              productCollection="Best seller"
              productImage={bag2}
              productName="The stylish bag"
              productPrice="&euro;250"
          />
          <Product
              productCollection="New collection"
              productImage={bag3}
              productName="The simple bag"
              productPrice="&euro;300"
          />
          <Product
              productCollection="New collection"
              productImage={bag4}
              productName="The trendy bag"
              productPrice="&euro;150"
          />
      </main>
      <footer>
          <Tile
              image={brand}
              title="The brand"
              totalParagraphsText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
              />


      </footer>
      </>
  );
}

export default App;



