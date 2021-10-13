import React from 'react'
import { InsuranceBrands } from '../../utils/data.js'

export default function SectionInsuranceBrands(){

    const getBrandsFirstLine = ()=>{
        let brands = InsuranceBrands
        return brands.slice(0,6).map( (item, i) => <img key ={i} src={item.img} alt={item.name} className="brand-logo"/>)
    }
    const getBrandsSecondLine = ()=>{
      let brands = InsuranceBrands
      return brands.slice(6).map( (item, i) => <img key ={i} src={item.img} alt={item.name} className="brand-logo"/>)
  }
        return (

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 brands-div grey fourth-section">
                <h2 className="third-title">Nuestras <span className="span2">aseguradoras</span></h2>
                <div className="brands-container">
                  {getBrandsFirstLine()}
                </div>
                <div className="brands-container">
                  {getBrandsSecondLine()}
                </div>
        </div>
        )
}
