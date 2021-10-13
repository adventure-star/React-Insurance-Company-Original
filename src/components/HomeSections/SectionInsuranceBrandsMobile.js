import React from 'react'
import { InsuranceBrands } from '../../utils/data.js'

export default function SectionInsuranceBrands(){

    const getBrandsLine = ()=>{
        let brands = InsuranceBrands
        return brands.map( (item, i) => <li className="brand-slide" key ={i}><img key ={i} src={item.img} alt={item.name} className="brand-logo"/></li>)
    }
    const getBrandsSecondaryLine = ()=>{
      let brands = InsuranceBrands
      return brands.slice(0,7).map( (item, i) => <li className="brand-slide" key ={i}><img key ={`second${i}`} src={item.img} alt={item.name} className="brand-logo"/></li>)
  }
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 brands-div grey fourth-section-tablet">
                <h2 className="third-title">Nuestras <span className="span2">aseguradoras</span></h2>
              <div className="brands-scroll-container" direction="left">
                <ul className="brands-scroll-content">
                  {getBrandsLine()}
                  {getBrandsSecondaryLine()}
                </ul>
              </div>
          </div>
        )
}
