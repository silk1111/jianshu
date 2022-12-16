import React, { Component } from 'react'
import {DownLoadWrapper, DownloadInfo, DownloadQrcodeBig} from '../style'
import QRcode from '../../../statics/assets/二维码.png'
export default class DownloadApp extends Component {
  render() {
    return (
      <div>
        <DownLoadWrapper> 
          <DownloadQrcodeBig className='download-qrcode-big'>

          </DownloadQrcodeBig>
          <img class="qrcode" src={QRcode} alt="Download index side qrcode"></img>
          <DownloadInfo>
            <div className='title'>
              下载简书手机APP
              <span className="iconfont">&#xe662;</span>
            </div>
            <div className='description'>随时随地发现和创作内容</div>
           
          </DownloadInfo>
          </DownLoadWrapper>
      </div>
    )
  }
}
