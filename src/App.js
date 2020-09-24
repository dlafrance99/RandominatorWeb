import React from 'react';
import './App.css';
import styled from "styled-components"

const HomeStyle = styled.div`
font-family: 'Kailasa-Bold';
color: white;
text-shadow: 2px 2px 4px white;
background-color: #09090a;
a{
  background-color: #09090a;
  padding: 15px;
  color: white;
  border-radius: 25px;
}
p{
  width: 60%;
  margin: auto
}
h1{
  text-align: center;
}
img{
  height: 350px;
  margin-bottom: 10px;
}
.header{
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #04005e;
}
.footer{
  text-align: center;
  background-color: #04005e;
  padding-bottom: 10px;
}
.row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
hr{
  width: 81%
}
.container-main{
  background-color: #0e111b;
  padding-top: 10px;
  color: #08f7fe;
  text-shadow: 2px 2px 4px #08f7fe;
}
.main{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body1{
  background-color: #09090a;
  color: #fe53bb;
  text-shadow: 2px 2px 4px #fe53bb;
}
.body1{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body2{
  background-color: #0e111b;
  padding-top: 10px;
  color: #09fbd3;
  text-shadow: 2px 2px 4px #09fbd3;
}
.body2{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body3{
  background-color: #09090a;
  color: #7122fa;
  text-shadow: 2px 2px 4px #7122fa;
}
.body3{
  display: flex;
  width: 80%;
  margin: auto
}
`


function App() {
  return (
    <>
      <HomeStyle>
        <div className='header'>

          <h1>
            Randominator
          </h1>

          <div>
            <a href='' target='_blank' rel="noopener noreferrer">
              DOWNLOAD ON THE APP STORE!
            </a>
          </div>

        </div>

        <div className='container-main'>
          <h1>
            Randomize Your Life!
          </h1>

          <div className='main'>

            {/* <img
              src={require('./ScreenShots/Iphone/01_login.png')}
              alt='Home Page'
            /> */}

            <p>
              Do you have problems making decisions? Would you prefer your life to be a little more random? Well look no further, Randominator is here to make all your decisons for you!
            </p>


          </div>
        </div>


        <div className='container-body1'>
          <h1>
            Create Re-Usable Lists!
          </h1>

          <div className='body1'>

            {/* <img
              src={require('./ScreenShots/Iphone/06_PracticeScreen.png')}
              alt='Blackjack Screen'
            /> */}

            <p>
              Do you constantly find yourself wanting to randomize the same set of items? Randominator makes that easy by allowing you to save your lists and revisit them as often as you want! What if you want to randomize it again? Easy after you Randominate through your items and get your random item, if you don't like it, simply hit the 'try again' button and it will cycle through your options again!
            </p>

            {/* <img
              src={require('./ScreenShots/Iphone/07_PracticeScreenResults.png')}
              alt='Blackjack Screen'
            /> */}

          </div>
        </div>

        <div className='container-body2'>
          <h1>
            Edit Lists!
          </h1>

          <div className='body2'>

            {/* <img
              src={require('./ScreenShots/Iphone/11_GameSelection.png')}
              alt='Blackjack Screen'
            /> */}

            <p>
              Forget to add something to your list? Or would you rather remove something from your list? Or are you kind of a wild child? Maybe considering deleting a whole list? No problem! Simply head to our 'Edit Lists' section and add/remove items from lists or simply delete the whole list!
            </p>

            {/* <img
              src={require('./ScreenShots/Iphone/02_GameDescription.png')}
              alt='Blackjack Screen'
            /> */}

          </div>
        </div>


        <div className='container-body3'>
          <h1>
            Rando Number Generator!
          </h1>

          <div className='body3'>

            <p>
              We get it, sometimes you just need a random number. Obviously you don't want to write in ALL the possible number options, so we'll take care of that for you! Simply head to our Rando Number section and enter the minimum number and maximum number and we'll give you your random number! It also works with negative numbers!
            </p>

            {/* <img
              src={require('./ScreenShots/Iphone/08_Records.png')}
              alt='Blackjack Screen'
            /> */}

          </div>
        </div>

        <div className='footer'>

          <div className='row'>

            <h1>
              NAW Putter
            </h1>

            <div>
              <a href='' target='_blank' rel="noopener noreferrer">
                DOWNLOAD ON THE APP STORE!
              </a>
            </div>

          </div>

          <hr />

          <div className='row'>

            <p>
              nawdevelopment@gmail.com
            </p>

            <p>
              Built in Colorado | Copyright © 2020 NAW Development LLC.
            </p>

          </div>

        </div>
      </HomeStyle>
    </>
  );
}

export default App;
