import React, { Component } from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import p1 from '../../../statics/assets/Recommend1.png'
import p2 from '../../../statics/assets/Recommend2.png'
import p3 from '../../../statics/assets/Recommend3.png'
import p4 from '../../../statics/assets/Recommend4.png'
export default class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendWrapper>
          <RecommendItem >
            <img src={p1} alt='Recommend error'></img>
          </RecommendItem>
          <RecommendItem>
            <img src={p2} alt='Recommend error'></img>
          </RecommendItem>
          <RecommendItem>
            <img src={p3} alt='Recommend error'></img>
          </RecommendItem>
          <RecommendItem>
            <img src={p4} alt='Recommend error'></img>
          </RecommendItem>
        </RecommendWrapper>
      </div>
    )
  }
}
