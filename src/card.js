import React, { Component } from 'react';

class PunkCard extends Component {
    constructor(props) {
        super();
    }       

    render() {

        
        return(
        <div>
        <div className="flex justify-center flex-wrap">
        {this.props.punksLoaded ? '' : <div className="ph4 pv3 tc">
               <span className="vw5 white">LOADING {this.props.punksName} FROM THE SMART CONRACT. BE PATIENT PLS</span>
        </div>}

        {/* <div className="ph4 pv3">
               <span className="vw5 white tc">{this.props.punksLoaded ? '' : 'LOADING PUNK DATA FROM THE SMART CONRACT. BE PATIENT PLS'}</span>
        </div> */}
        {
        // if(this.props.punksLoaded === false) {
        //     return(<p className='white'>LOADING</p>)
        //   } else {

        //   }  
                
                this.props.punksList.map((punk,index) => {
                return(
                        <div key={"div" + this.props.punksName + index} className="pa2 bg-red b--solid b--white mv2 mh2 flex flex-column justify-center align-center" style={{width: "280px"}}>
                          <span key={"span" + this.props.punksName + index} className="white wordbreak f4" id="name">{punk.name}</span>
                          <img  key={"img" + this.props.punksName + index}
                                src={punk.image} 
                                alt={punk.name}
                                width="250"
                                height="250"/>
                            <a key={"a1" + this.props.punksName + index} className="dib mt1 f3-l f4 grow link dim ph3 pv2  dib near-white bg-blue" target="_blank" rel="noreferrer" href={"https://app.rarible.com/token/" + this.props.contract + ":" + punk.tokenid}>Rarible</a>
                            <a key={"a2" + this.props.punksName + index} className="dib f3-l f4 grow link dim ph3 pv2  dib near-black bg-orange" target="_blank" rel="noreferrer" href={"https://opensea.io/assets/" + this.props.contract + "/" + punk.tokenid}>Opensea</a>
                        </div>
                      ) 

                })
        }

        {/* {this.loading()} */}

        </div>


        </div>

            
        //   for (let id = this.props.min; id <= this.props.max; id++) {
        //       console.log(id)
        //       console.log(this.props.max)
        //       console.log(this.props.punksList)
        //       let punk = this.props.punksList[id];
        //       console.log(punk)

        //       return(
        //         <div className="">
        //           <span key={"punk" + id} className="white" id="name">{punk.name}</span>
        //           <img  src={punk.image} 
        //                 alt=""
        //                 width="250"
        //                 height="250"/>
        //         </div>
        //       )
      
        //   }
        //   }
        // }
        
    )

    }
}

export default PunkCard;
