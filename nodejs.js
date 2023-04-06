const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pokemon</title>
      <style>
      *{
        margin: 0px;
        padding: 0px;
    
    }
    
    
    
    
    /*NAVBAR*/
    .navbar{
        display: flex;
        background-color: #160040;
        align-items: center;
    }
    #logo{
        width: 25%;
    }
    .navbar img{
        width: 15%;
        margin: 0.2rem 2rem;
    }
    .navbar ul{
        display: flex;
    }
    .navbar li{
        list-style: none;
        margin: 1rem;
    }
    .navbar li > a{
        color: white;
        text-decoration: none;
        font-family: Georgia, 'Times New Roman', Times;
    }
    .navbar li > a:after{
        content: "";
        display: block;
        border-bottom: 0.1rem solid white;
        width: 0%;
        transition: ease-in 0.5s;
    }
    .dropdown-content a{
        display: block;
        border:2px solid black;
        margin: 1px;
        padding: 2px;
        text-align: center;
        text-decoration: none;
        color:black;
        background-color: gray;
        border-radius: 6px;
        transition: all 0.5s ease;
    }
    .navbar li > a:hover::after{
        width: 100%;
    }
    .dropdown-content{
        display:none;
        position:absolute;
        min-width: auto;
    }
    #type:hover + .dropdown-content{
        display:block;
    }
    .dropdown-content:hover {
        display: block;
    }
    #l1:hover{
        color: rgb(94, 46, 8);
        background-color:rgb(241, 161, 94);
        border-color: rgb(94, 46, 8);
        font-weight: bold;
    }
    #l2:hover{
        color: red;
        background-color:rgb(236, 109, 109);
        border-color: red;
        font-weight: bold;
    }
    #l3:hover{
        color: rgb(0, 78, 102);
        background-color:rgb(114, 216, 247);
        border-color: rgb(0, 78, 102);
        font-weight: bold;
    }
    #l4:hover{
        color: rgb(70, 2, 70);
        background-color:rgb(184, 104, 184);
        border-color: rgb(70, 2, 70);
        font-weight: bold;
    }
    #l5:hover{
        color: rgb(78, 57, 3);
        background-color:rgb(250, 210, 110);
        border-color: rgb(78, 57, 3);
        font-weight: bold;
    }
    #l6:hover{
        color: rgb(78, 33, 3);
        background-color:rgb(182, 124, 85);
        border-color: rgb(78, 33, 3);
        font-weight: bold;
    }
    #l7:hover{
        color: rgb(40, 59, 3);
        background-color:rgb(185, 255, 46);
        border-color: rgb(40, 59, 3);
        font-weight: bold;
    }
    #l8:hover{
        color: rgb(70, 3, 64);
        background-color:rgb(121, 63, 116);
        border-color: rgb(70, 3, 64);
        font-weight: bold;
    }
    #l9:hover{
        color: rgb(44, 44, 44);
        background-color:rgb(184, 184, 184);
        border-color: rgb(44, 44, 44);
        font-weight: bold;
    }
    #l10:hover{
        color: rgb(194, 3, 3);
        background-color:rgb(253, 74, 74);
        border-color: rgb(194, 3, 3);
        font-weight: bold;
    }
    #l11:hover{
        background-color: rgba(87, 185, 241, 0.6);
        border-color: rgb(2,2,59);
        color: rgb(2, 2, 59);
        font-weight: bold;
    }
    #l12:hover{
        background-color: rgba(91, 248, 91,0.6);
        border-color: rgb(5, 59, 5);
        color: rgb(5, 59, 5);
        font-weight: bold;
    }
    #l13:hover{
        color: rgb(85, 85, 2);
        background-color:rgb(196, 238, 46);
        border-color: rgb(85, 85, 2);
        font-weight: bold;
    }
    #l14:hover{
        background-color: rgb(255, 0, 98);
        color:rgb(68, 2, 27);
        border-color: rgb(68, 2, 27);
        font-weight: bold;
    }
    #l15:hover{
        background-color: rgba(176, 232, 247,0.6);
        border-color: rgb(5, 32, 68);
        color: rgb(5, 32, 68);
        font-weight: bold;
    }
    #l16:hover{
        background-color: rgb(131, 57, 180);
        color:rgb(35, 0, 58);
        border-color: rgb(35, 0, 58);
        font-weight: bold;
    }
    #l17:hover{
        background-color: rgba(77, 73, 73,0.6);
        border-color: black;
        color: black;
        font-weight: bold;
    }
    #l18:hover{
        background-color: rgba(253, 182, 194,0.6);
        border-color: rgb(78,4,17);
        color: rgb(78, 4, 17);
        font-weight: bold;
    }
    #game:hover + .dropdown-content{
        display:block;
    }
    #searchbar{
        padding-left: 12rem;
        padding-right: 0.5rem;
    }
    #searchbar input{
        padding: 0.2rem;
    }
    #btn input{
        padding: 0.2rem;
        cursor: pointer;
    }
    
    
    /*HOME*/
    .home{
        text-align: center;
        background-image: url(images/temp\ home.jpg); 
        background-position-y: 6%;
    }
    .home h1{
        font-size: 3rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
        color:rgb(24, 1, 46);
    }
    
    .home p{
        font-size: 1.5rem;
        color: rgb(46, 2, 87);
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    #ques{
        margin-top: 1rem;
    }
    #choice button{
        padding: 0.2rem;
        margin:0.1rem 0rem 1rem 0.1rem;
        cursor: pointer;
        background-color: rgb(93, 39, 145);
        border: 2px solid rgb(46, 2, 87);
        border-radius: 0.2rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-weight: bold;
        color:beige;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
    #yes:hover{
        background-color: rgb(12, 238, 12);
        border-color:rgb(10, 68, 10);
    }
    #no:hover{
        background-color: rgb(236, 30, 30);
        border-color:rgb(153, 0, 0);
    }
    
    
    /*EEVEE*/
    .Eve{
        background-image: url(images/temp\ evees2.jpg); 
        background-size:contain;
        margin-bottom: -1rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .Eve h1{
        color:white;
        padding-top: 1rem;;
        font-size: 3rem;
        text-align: center;
    }
    .eevee{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin:1rem;
        grid-template-areas: "a a a a"
                             "b c d e"
                             "f g h i";
    }
    .eevee img{
        width:7rem;
    }
    .eevee div{
        border-radius: 2rem;
        margin:0.5rem 1rem;
        text-align: center;
        padding:1rem;
    }
    #Eevee{
        grid-area: a;
        padding-top: 0rem;
        background-color: rgba(244, 164, 96,0.6);
        border: 3px solid rgb(63, 2, 2);
        color: rgb(63, 2, 2);
    }
    #Vaporeon{
        grid-area: b;
        background-color: rgba(87, 185, 241, 0.6);
        border: 3px solid rgb(2,2,59);
        color: rgb(2, 2, 59);
    }
    #Jolteon{
        grid-area: c;
        background-color: rgba(245, 245, 91,0.6);
        border: 3px solid rgb(48,48,2);
        color: rgb(48, 48, 2);
    }
    #Flareon{
        grid-area: d;
        background-color: rgba(252, 76, 76,0.6);
        border: 3px solid rgb(59,1,1);
        color:  rgb(59, 1, 1);
    }
    #Sylveon{
        grid-area: e;
        background-color: rgba(253, 182, 194,0.6);
        border: 3px solid rgb(78,4,17);
        color: rgb(78, 4, 17);
    }
    #Espeon{
        grid-area: f;
        background-color: rgba(252, 32, 252, 0.3);
        border: 3px solid rgb(230, 188, 230);
        color: rgb(241, 159, 241);
    }
    #Glaceon{
        grid-area: g;
        background-color: rgba(176, 232, 247,0.6);
        border: 3px solid rgb(5, 32, 68);
        color: rgb(5, 32, 68);
    }
    #Leafeon{
        grid-area: h;
        background-color: rgba(91, 248, 91,0.6);
        border: 3px solid rgb(5, 59, 5);
        color: rgb(5, 59, 5);
    }
    #Umbreon{
        grid-area: i;
        background-color: rgba(77, 73, 73,0.6);
        border: 3px solid black;
        color: black;
    }
    
    
    
    /*team*/
    .team{
        display: inline-block; 
        background-color: black;
    }
    .team h1{
        color:white;
        font-family: Georgia, 'Times New Roman', Times;
        padding-top: 1rem;;
        font-size: 3rem;
        text-align: center;
    }
    .myteam{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin:1rem;
    }
    .myteam div{
        margin:0.5rem;
    }
    #Lucario img,#Greninja img{
        width: 10rem;
    }
    #Gardevoir img{
        width:14rem;
    }
    #Dragonite img,#Garchomp img,#Charizard img{
        width:12rem;
    }
    .info1,.info2,.info3,.info4,.info5,.info6{
        background-color: #f9f9f9;
        display: none;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
        padding: 12px 16px;
        position: absolute;
        width: 9rem;
    }
    #Garchomp img:hover + .info1{
        display:block;
    }
    #Dragonite img:hover + .info2{
        display:block;
    }
    #Greninja img:hover + .info3{
        display:block;
    }
    #Lucario img:hover + .info4{
        display:block;
    }
    #Charizard img:hover + .info5{
        display:block;
    }
    #Gardevoir img:hover + .info6{
        display:block;
    }
    
    
    
    /*Final*/
    .final{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        grid-gap: 1rem;
        color:white;
        background-color: black;
        align-items: center;
        padding-top: 1rem;
    }
    #about{
        text-align: right;
        padding: 1rem;
    }
    #right{
        width:15rem;
    }
    #contact h1{
        font-size: xx-large;
    }
    #about h1{
        font-size: xx-large;
    }
    #about p{
        font-size: larger;
    }
    #contact input, #contact button{
        padding-right: 4.1rem;
        margin-bottom: 0.3rem;
    }
    #contact button{
        padding-right:8.9rem ;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    #contact button:hover{
        background-color: black;
        border: 2px solid white;
        color:white;
    }
    #contact {
        padding-left: 1.9rem;
        border-left:2px solid #ffffff;
        display:block;
    }
    #left{
        width:10rem;
        margin-left: 3rem;
    }
      </style>
  
  </head>
  <body>
      <section class="navbar">
          <div id="logo">
              <a href="#" target="_blank"><img src="images/logo.png" alt="Pikachu!!"></a>
          </div>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Eevee</a></li>
              <li><a href="#">My Team</a></li>
              <li>
                  <a id="type" href="#">Types</a>
                  <div class="dropdown-content">
                      <a href="" id="l1" target="_blank">Normal</a>
                      <a href="" id="l2" target="_blank">Fighting</a>
                      <a href="" id="l3" target="_blank">Flying</a>
                      <a href="" id="l4" target="_blank">Poison</a>
                      <a href="" id="l5" target="_blank">Ground</a>
                      <a href="" id="l6" target="_blank">Rock</a>
                      <a href="" id="l7" target="_blank">Bug</a>
                      <a href="" id="l8" target="_blank">Ghost</a>
                      <a href="" id="l9" target="_blank">Steel</a>
                      <a href="" id="l10" target="_blank">Fire</a>
                      <a href="" id="l11" target="_blank">Water</a>
                      <a href="" id="l12" target="_blank">Grass</a>
                      <a href="" id="l13" target="_blank">Electric</a>
                      <a href="" id="l14" target="_blank">Psychic</a>
                      <a href="" id="l15" target="_blank">Ice</a>
                      <a href="" id="l16" target="_blank">Dragon</a>
                      <a href="" id="l17" target="_blank">Dark</a>
                      <a href="" id="l18" target="_blank">Fairy</a>
                    </div>
              </li>
              <li>
                  <a id="game" href="#">Games</a>
                  <!-- <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div> -->
              </li>
              <li><a href="#">Get in touch</a></li>
          </ul>
          <div id="searchbar">
              <input type="text" placeholder="Search Pokemon">
          </div>
          <div id="btn">
              <input type="submit" value="Let's Go!!">
          </div>
      </section>
      <section class="home">
          <h1>Gotta catch'em all!!-POKEMON</h1>
          <p id="one">
              Get into the universe where some special beings reside alongside you.
          </p>
          <p id="two">
              Choice is yours...Catch them..Train them..AND...
          </p>
          <p id="three">
              BECOME THE BEST TRAINER
          </p>
          <p id="ques">
              Are you ready to start this marvelous journey!??
          </p>
          <div id="choice">
              <a href="#"><button id="yes">I'm in!!</button></a>
              <button id="no" onclick="self.close()">Seems rough..</button>
          </div>
      </section>
      <section class="Eve">
          <h1>Ultra Evolution!!</h1>
          <div class="eevee">
              <div id="Eevee">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)" target="_blank"><img src="images/eevee.png" alt="Eevee.png"></a>
                  <h3>Eevee</h3>
                  <p>Normal Eevee-Evolves into 8 types!!</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis hic dolores, odit velit animi unde ullam quos quae accusamus! Eius magni sapiente, sint id esse fuga repellat architecto, quo, odit ipsa placeat.</p>
              </div>
              <div id="Vaporeon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)" target="_blank"><img src="images/vaporeon.png" alt="Vaporeon.png"></a>
                  <h3>Vaporeon</h3>
                  <p>Water-type evolution of Eevee</p>
              </div>
              <div id="Jolteon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)" target="_blank"><img src="images/jolteon.png" alt="Jolteon.png"></a>
                  <h3>Jolteon</h3>
                  <p>Electric-type evolution of Eevee</p>
              </div>
              <div id="Flareon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)" target="_blank"><img src="images/flareon.png" alt="Flareon.png"></a>
                  <h3>Flareon</h3>
                  <p>Fire-type evolution of Eevee</p>
              </div>
              <div id="Sylveon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pok%C3%A9mon)" target="_blank"><img src="images/sylveon.png" alt="Sylveon.png"></a>
                  <h3>Sylveon</h3>
                  <p>Fairy-type evolution of Eevee</p>
              </div>
              <div id="Espeon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)" target="_blank"><img src="images/espeongif.gif" alt="Espeon.png"></a>
                  <h3>Espeon</h3>
                  <p>Psychic-type evolution of Eevee</p>
              </div>
              <div id="Glaceon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)" target="_blank"><img src="images/glaceon.png" alt="Glaceon.png"></a>
                  <h3>Glaceon</h3>
                  <p>Ice-type evolution of Eevee</p>
              </div>
              <div id="Leafeon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)" target="_blank"><img src="images/leafeon.png" alt="Leafeon.png"></a>
                  <h3>Leafeon</h3>
                  <p>Grass-type evolution of Eevee</p>
              </div>
              <div id="Umbreon">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)" target="_blank"><img src="images/umbreon.png" alt="Umbreon.png"></a>
                  <h3>Umbreon</h3>
                  <p>Dark-type evolution of Eevee</p>
              </div>
          </div>
      </section>
      <section class="team">
          <h1>My Team</h1>
          <div class="myteam">
              <div id="Garchomp">
                  <img src="images/garchomp.png" alt="Garchomp.png">
                  <div class="info1">
                      <p><b>Garchomp</b> is a dual-type Dragon/Ground pseudo-legendary Pokémon. Garchomp is a Power-type playable character in Pokkén. Moves he can use include Dragon Claw, Dig, Dragon Rush, Stone Edge, Earthquake, and Sand Tomb.</p>
                  </div>
              </div>
              
  
  
              <div id="Dragonite"><img src="images/dragonite.png" alt="Dragonite.png">
                  <div class="info2">
                      <p><b>Dragonite</b> is a draconic, bipedal reptilian Pokémon with light orange skin. It has large, grayish-green eyes and a round snout with small nostrils. This Pokémon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships. It's a kindhearted Pokémon.</p>
                  </div>
              </div>
  
  
  
              <div id="Greninja"><img src="images/greninja.png" alt="Greninja.png">
                  <div class="info3">
                      <p><b>Greninja</b> evolves with the Battle Bond. Greninja is a bipedal, frog. Greninja moves with the speed and grace of a ninja. It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.</p>
                  </div>
              </div>
  
  
  
              <div id="Lucario"><img src="images/lucario.png" alt="Lucario.png">
                  <div class="info4">
                      <p><b>Lucario</b> is a bipedal, canine-like Pokémon with predominantly blue and black fur. Lucario can read auras to understand how living beings are feeling from more than half a mile away.  It also has the power to manipulate this energy in an offensive manner, in the form of explosive spheres of energy.</p>
                  </div>
              </div>
  
  
  
              <div id="Charizard"><img src="images/charizard.png" alt="Charizard.png">
                  <div class="info5">
                      <p><b>Charizard</b> flies around the sky in search of powerful opponents. Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures. It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.</p>
                  </div>
              </div>
  
  
  
              <div id="Gardevoir">
                  <img src="images/gardevoir.png" alt="Gardevoir.png">
                  <div class="info6">
                      <p><b>Gardevoir</b> is a Technique-type playable character in Pokkén Tournament. Moves it can use include Psyshock, Future Sight, Energy Ball, Stored Power, Moonblast. It has the power to predict the future. Its power peaks when it is protecting its Trainer.</p>
                  </div>
              </div>
  
      </div>
      </section>
      <hr>
      <section class="final">
          <img id="left" src="images/left.png" alt="Serena.png">
          <!-- <div class="pair"> -->
              <div id="about">
                  <h1>About Me</h1>
                  <p>Ankit Kumar</p>
                  <p>Studying in IIITDM Kurnool</p>
                  <p>B.Tech, CSE</p>
              </div>
              <div id="contact">
                  <h1>Feel free to contact me...</h1>
                  <input type="text" placeholder="Name">
                  <input type="email" placeholder="E-Mail">
                  <textarea name="" id="" cols="30" rows="3" placeholder="Enter your message.."></textarea>
                  <button>Send Response</button>
              </div>
          <!-- </div> -->
          <img id="right" src="images/right.png" alt="Red.png">
      </section>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});