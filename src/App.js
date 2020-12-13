import React, { Component } from 'react';
import { CONTRACT_ADDRESS, CONTRACT_ABI, PUNKS_JSON_GEN1, PUNKS_JSON_GEN2, DOOMED_DEGENS } from "./config.js"
import Web3 from 'web3';
import './App.css';
import "./textsize.css";
import tachyons from 'tachyons';
// import bganvideo from "./components/Output-21.mp4"
import bganvideo from "./components/Output-21comp.mp4"
import bgansuperrare from './components/latent14mus.mp4'
// import lootboxcube from './components/Lootboxcube.mp4'

import PunkCard from "./card.js"

class App extends Component {


  constructor(props) {
    super(props);
    this.srvolume = React.createRef();
    this.state = {
      totalSupply: 44,
      punksLoaded: true,
      punks: [],
      // punks: PUNKS_JSON,
      contractaddress: CONTRACT_ADDRESS.toLowerCase()
    }
  }


  
  render() {
    return (
    <div className="App">
          <video  autoPlay="autoplay" loop="loop" muted className="videocontainer" >
                <source src={bganvideo} type="video/mp4"  />
                Your browser does not support the video tag.
          </video>
        <div className=" header charriot">
          
          {/* <video ref={videoRef} autoPlay="autoplay" loop="loop" muted className="videocontainer" > */}
          

        
            <div className="pv4 flex flex-column justify-center items-center">
              <div className="flex flex-column pa3 bg-black-90 w-80"> 
                <span  className="charriot shadowred vw7 white tc">
                BASTARD GAN PUNKS
                </span>
                <span  className="charriot shadowred vw5 white tc">
                (B·G·A·N·P·U·N·K·S)
                </span>
              </div>

              <div className="mv2 flex justify-center  items-center center w-90 tc">

              <span className="charriot bg-black-90 ma2 pa4 vw3  white">
                ALL 10000 <a className="link red" href="https://github.com/larvalabs/cryptopunks/blob/master/punks.png">CRYPTOPUNKS</a> ARE PUT INTO <a className="link yellow" href="https://github.com/NVlabs/stylegan2">STYLEGAN2</a> TO GIVE BIRTH TO BASTARD CHILDREN
              </span>
              <br/>
              <span className="charriot ma2 pa4 vw3 white bg-black-90">B·G·A·N·P·U·N·K·S ARE MINTED AS ERC721 COLLECTIBLES ON ETHEREUM NETWORK WAITING FOR THEIR ADOPTERS</span>
              </div>
              <div className="flex justify-around flex-wrap">
                <div className="pa2 pt3 mh3 ph4 mv0-l mv2 bg-black-90 ">
                  <span className="pl3 mt2 vw2-5  near-white">View the collection on:</span>
                  <div className="flex justify-center">
                  <a className="dib vw2 grow link dim ph3 pv2 ma3 dib white bg-dark-pink" target="_blank" rel="noreferrer" href="https://opensea.io/storefront/bastard-gan-punks">OpenSea</a>
                  <a className="dib vw2 grow link dim ph3 pv2 ma3 dib near-black bg-yellow" target="_blank" rel="noreferrer" href="https://app.rarible.com/bganpunks">Rarible</a>
                  <a className="nowrap dib vw2 grow link dim ph3 pv2 ma3 dib near-black bg-green" target="_blank" rel="noreferrer" href="https://etherscan.io/token/0x9126b817ccca682beaa9f4eae734948ee1166af1#readContract">Smart Contract</a>
                  </div>
                </div>
                
                <div className="pa2 pt3 mv3-m mh3 ph3 mv0-l mv2 bg-black-90 ">
                  <span className="vw2-5 pl3 near-white">Follow on:</span>
                  <div className="flex justify-center">
                  <a className="dib vw2 grow link dim ph3 pv2 ma3 dib near-white bg-blue" target="_blank" rel="noreferrer" href="https://twitter.com/bganpunks">Twitter</a>
                  <a className="dib vw2 grow link dim ph3 pv2 ma3 dib near-black bg-orange" target="_blank" rel="noreferrer" href="https://instagram.com/bganpunks">Instagram</a>
                  </div>
                </div>
              </div>

              
           </div>

{/* 
          <div id="itallstarted" className="vh-100 flex flex-column justify-center">
            <span className="center f-6-l f-5">it all started here:</span>
          </div> */}



          <div id="superrare" className="bg-green">

            <div className="pv4 flex h-100 flex-column justify-center items-center bg-black-80">

                <span className="dib vw5 z-1 shadowred white tc ph5 mb4">BASTARD GAN PUNK INCUBATION AUTOMATION UNIT #10947</span>

                <video ref={this.srvolume} controls autoPlay="autoplay" loop="loop" muted className="w-50 h-50 center bg-black " >
                      <source src={bgansuperrare} type="video/mp4"  />
                      Your browser does not support the video tag.
                </video>
                <div>
                   <a className="dib vw3 grow link dim ph3 pv2 ma3 dib white bg-dark-pink center" target="_blank" rel="noreferrer" href="https://superrare.co/artwork-v2/bastard-gan-punk-incubation-automation-unit-10947-9281">on SuperRare.co</a>
                </div>
          </div>

          </div>
          <div className="flex vh-25 flex-column justify-center bg-black-90">

              

                <span className="dib  vw8 z-1 white shadowred tc">
              GEN #1 BASTARDS: <br/>
                </span>

          </div>
          <div id="otherstuff" className="bg-dark-red flex flex-column">
              
                          
              <div className="gen2">
              
              <PunkCard className="center" min={0} max={10} punksName={"GEN #1 BASTARD GAN PUNKS"} punksList={PUNKS_JSON_GEN1} contract={this.state.contractaddress} punksLoaded={this.state.punksLoaded}/>
              </div>
              

              <div className=" bg-black-80 flex flex-column justify-center items-start">
                
             
                <span className="vw6 z-1 bg-black-50 shadowred center pa4 mv4 white tc">
                SECOND GENERATION BASTARDS: <br/>
                CØLØRED B·G·A·N CRYPTOPUNKS
                </span>
                <span className=" vw3 z-1 w-60 center lh-title white mb5">> "BASTARD GAN PUNK INCUBATION AUTOMATION UNIT #10947" was trained with an image dataset of cryptopunks which all had a single fixed background color. <br/><br/> 
                > For the next iteration for BGPIAU, a new dataset prepared, this time all cryptopunks each having random <span className="red">R</span><span className="green">G</span><span className="blue">B</span> colors in the background. <br/><br/>
                
                > Therefore second generation "colored background bastard gan cryptopunks" are born very CØLØRFUL, FUN, BADA$$ && ADØRABLE. </span>
              </div>
              <div id="" className="flex flex-column gen2">
                <PunkCard min={11} max={this.state.totalSupply} punksName={"GEN #2 BASTARD GAN PUNKS"} punksList={PUNKS_JSON_GEN2} contract={this.state.contractaddress} punksLoaded={this.state.punksLoaded}/>

              </div>


          </div> 

          
        </div>
 

          <div id="lootbox" className=" pv0 charriot">
            <div className="pt3">
            {/* <p className="vw6 white red mv2 pv2 tc bg-black-90 center">B·G·A·N·P·U·N·K LØØTBØX</p> */}
            <p className="vw6 white red mv2 pv2 tc bg-black-90 center">DØØMΞD DΞGΞNS</p>
            </div>
            <div className="h-75">

            <div className="pa2 flex flex-wrap justify-center items-center">
                <span className="vw3 pa3 near-white  mv3 w-70 lh-title bg-black-90"> 
                > <span className="grow orange">DØØMΞD DΞGΞNS</span> is a subcollection of <span className="grow " style={{color: "#ff006e"}}>B·G·A·N·P·U·N·K·S</span> which consists of only <span className="underline " style={{color: "#d00000"}}>30 special B·G·A·N·P·U·N·K·S.</span><br/><br/>
                "WE ARE <span className="orange">DØØMΞD DΞGΞNS</span> | WHO GOT RΞKT AGAIN AND AGAIN BY: <br/> <span style={{color: "#ff006e"}}>FUDDERS</span>, <span style={{color: "#F5B700"}}>RUGPULLERS</span>, <span style={{color: "#00A1E4"}}>VALUELESS $HIT YIELDFARMS</span>, <span style={{color: "#DC0073"}}>NEGATIVE REBASES</span>, <span style={{color: "#89FC00"}}>VAMPIRIC ARBITRAGE BOTS</span>, <span style={{color: "#F7E8A4"}}>FAKE SCAM AIRDROPS</span> && <span style={{color: "#ff006e"}}>UGLY STINKY WHALES</span>"<br/>
                </span>

            </div>
                  
              <div id="" className="flex flex-column">
                <PunkCard min={11} max={this.state.totalSupply} punksName={"DOOMED DEGENS"} punksList={DOOMED_DEGENS} contract={this.state.contractaddress} punksLoaded={this.state.punksLoaded}/>
              </div>

                {/* <div className="pa2 flex flex-column justify-center items-center">
                  <video  autoPlay="autoplay" loop="loop" muted className="w-70 h-70 center bg-black " >
                        <source src={lootboxcube} type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>
                 

                

              </div> */}
            

              
                </div >

      <div className="bg-black flex tc pv4 ph3">
        <span className="vw6 white">Made by <a className="link yellow" target="_blank" rel="noreferrer" href="http://berkozdemir.com">berk</a> aka <a className="link dark-red" target="_blank" rel="noreferrer" href="https://www.princesscamel.com">Princess Camel (.eth)</a></span>
      </div>

          </div >
      
    </div >
  );
  }
}

export default App;
