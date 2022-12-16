import React from "react";


import Loadable from 'react-loadable'

export default (loader) => {
    return Loadable({
        loader,
        loading: ()=>{
        	return <div>正在加载组件</div>
    	},
        delay: 200
                
    })
}
