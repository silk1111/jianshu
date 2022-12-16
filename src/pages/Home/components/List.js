import React, { PureComponent } from 'react'
import {ListInfo , ListItem, ListAdv, PicClosed, LoadMore, ListBottom, BottomItem} from '../style'
import {connect} from 'react-redux'
import {getMoreArtListAction} from '../store/action'
import {Link} from 'react-router-dom'
 class List extends PureComponent {
  render() {
    const {articleList, loadMore, page} = this.props;

    return (
      <div>
      {
        // <ListAdv >
      // <img src='	https://unmc.bj.bcebos.com/1660814226153_627323266.jpg' alt='广告图片加载失败' />

      //   <PicClosed>
      //     <img class="logo-link" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAUCAYAAAA0nZtFAAAAAXNSR0IArs4c6QAAA/lJREFUWAnNmFmIjlEYx2esIyTGvlMijezDhYixZ7lhFMp6IbmQrShbcSESibhAslO2C4oRLpQbI5ms2YaJplD2iPH7f86j83297/st8w2e+s0553n+5znnfc95z5yZnJwAq6qqyoejUC8gXKMuxiyCcpiR6UD0XQ8rrD/1RnAQJpovrZKOm0B2Nq2OWRAzZj3QCynNJB39esJP2Gz9qTcD2SrzhZV1QgITnH8SSYpyc3Mvh+gycpOzKR2jdsBd4mPQbaB8HTLIF+a1NyC2HF8uBMUC5PEudYwzJlEfxxew2EkGLpaIWAeK/tAS3sMjKCVeRZmykacH4nspdwgWVjJuKz/k8t7Gp/lc8mL69EfDA9Ccg+ww+Y4F7ZDvqO1lPKSu73E85VoohER7RXwbzh0k1ItMxxYh3p9OB08btwjMoTWxC/AD7oAWzcyesyEO329xlYoFG8lfwk1oAXshFbuDqGtwxngvuh4u4fz4SGYtcjWGUvgOWrw4w1ftM2QfGcVOmOpl/0j9JmgF2sNAaAeyArjG4IXslFcxz9/70ZehesNcxj5fI8PyYAvBtyM08v3BaNeCxfAJzEp8TVAdYVZ3iMYgZ7+gsVwsvR1CsiI6LgWt+FMYBuvAbBeV3ZB4L+mE7ypMhougs0f3iFGslH+o4a45YzxdD/TZhA1S1wXmoRkZJpJfK7yaUqs6DprDDdCJ3AJkekHLQedDBfrXcA/e0H4C+Ty8+u8Bs5lWCSnznP9zSDzbbv2iuALPkybmwUbAIdD3fwoGwBYw26EkNFqaI6GMPRy+4Z7/cdTA6IY4rd13ouT/PsZkD3sPN0czoq3dpBugb+9stjibeIHIX7/oxjrtUOv/v5S1Qibib2V9RjLdLu1+EnPwQ9+t5TCdYn5/0/plW9eo9J3VrTOX3vAtA2bZ2HZhsbaV/pYvdM4+FvTK2tR7QhkM8vx+f8/9p6rz6CfoDMqmacF0gB4F3ViTmRZxGdiiBut5wwVgpsuOzpWJoL9tOkADaOfagynz4C6YrQnO/NuL6Dg8i9JkEiNnHzeBaan0R9vN6WPHQmQfhCVOrOI+dA7qgL8+7Aezj1TaBGnNR/wFnLF2tkpyVvuFRG2VxUz0k5tsd0pdzZdBL6gD2ilT8N+C2WC2JuqmSp8uCNvDVevwP5VhZ0gOD1XG5Kcz2ROgv4Abgf7HIH6Azo9E20O/rYnOhHaxa+teUFO2kbkvSSG53Yf+SENfiBQ83DkSD6N6ALRLzBJfxgcCq9FvN0FEOZtYGdpUDr2INJGht0QrIhW/g1rk9I2Xok9kBpyGcvgKlXAdVoLdapMmR1sMC5IKMxCQtzvcAt20kxq6jk6vPz1i9gtqG09/SO6d3QAAAABJRU5ErkJggg==" alt='error'/>
      //       <img class="logo-close-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAARVJREFUOBF9kzGWwjAMRGNKOEdSc6G9xzahoOIe1LkLPe1egW3DfOHxcxIHv6dne2Y0lkTo5nkeOi9dJp9Xuyntt0PmnnnvO6FHJ+g8BgCI3ATgDTAAMwBEysxd7E9K6d9pFqYKwAJhVCDxL5zL4nxRQF4VfXbuKGC0nYiyECimEBS0OmTBwBOntQOkcOr5ixwEFkEqJnbIugtPphdeWq67iOpFPut5hCDbxbCw1d1ucVm8aYFFjJrfubyJgJUFLwSj7mdFTLF+H+F6SU93TJ1mHtHlCmwa7WnKmHipJQLX8osb84XBR7sxAt4kWrsxaFSBln6bJsWgkXj1QL9x/kfs9uhS2VtGgIOCbz4+vjph74w25wxv9VjxEc3jX7MAAAAASUVORK5CYII=" alt='删除加载失败' />
      //   </PicClosed>
      // </ListAdv>
      }
      {
        articleList.map((item, index) => {
          
          return(
            <Link to={`/detail/${item.get('id')}`} key={item.get('id')} style={{textDecoration: "none"}}>

              <ListItem className={item.get('haveImg')==='have-img' ? 'have-img' : ''} >
             {
              item.get('haveImg')=='have-img' ? <img  src={item.get('imgURL')} alt="" /> : ''
             } 
            <ListInfo className='content'>
                 <h3 className='title'>{item.get('title')}</h3>
                 <p className='desc'>{item.get('desc')}</p>
               </ListInfo>
               <ListBottom>
                 <BottomItem className='hot'>
                   <i className='iconfont'>&#xe60d;</i>
                   {item.get('hot')}
                 </BottomItem>
                 <a className='authorName'>{item.get('authorName')}</a>
                 <BottomItem>
                   <i className='iconfont'>&#xe685;</i>
                   {item.get('comment')}
                 </BottomItem>
                 <BottomItem>
                   <i className='iconfont'>&#xe635;</i>
                   {item.get('like')}
                 </BottomItem>   
                   <BottomItem className={ item.get('reward') ? '' : 'notshow'}>
                     <i className='iconfont'>&#xe611;</i>
                     {item.get('reward')}
                   </BottomItem>                   
               </ListBottom>
            </ListItem>
            </Link>
            
         
         )
          {/* if(item.get('haveImg') === 'have-img'){
            return(
               <ListItem className='have-img' key={item.get('id')}>
                  <img src={item.get('imgURL')} alt="文章图片加载失败" />
                  <ListInfo className='content'>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                  <ListBottom>
                    <BottomItem className='hot'>
                      <i className='iconfont'>&#xe60d;</i>
                      {item.get('hot')}
                    </BottomItem>
                    <a className='authorName'>{item.get('authorName')}</a>
                    <BottomItem>
                      <i className='iconfont'>&#xe685;</i>
                      {item.get('comment')}
                    </BottomItem>
                    <BottomItem>
                      <i className='iconfont'>&#xe635;</i>
                      {item.get('like')}
                    </BottomItem>   
                      <BottomItem className={ item.get('reward') ? '' : 'notshow'}>
                        <i className='iconfont'>&#xe611;</i>
                        {item.get('reward')}
                      </BottomItem>                   
                  </ListBottom>
               </ListItem>
            )
          }
          else{
            return(
               <ListItem key={item.get('id')}>
                <ListInfo className='content'>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
                <ListBottom>
                    <BottomItem className='hot'>
                      <i className='iconfont'>&#xe60d;</i>
                      {item.get('hot')}
                    </BottomItem>
                    <a className='authorName'>{item.get('authorName')}</a>
                    <BottomItem>
                      <i className='iconfont'>&#xe685;</i>
                      {item.get('comment')}
                    </BottomItem>
                    <BottomItem>
                      <i className='iconfont'>&#xe635;</i>
                      {item.get('like')}
                    </BottomItem>   
                      <BottomItem className={ item.get('reward') ? '' : 'notshow'}>
                        <i className='iconfont'>&#xe611;</i>
                        {item.get('reward')}
                      </BottomItem>                   
                </ListBottom>
               </ListItem>
            )
          } */}
          
        
      })
      }
      <LoadMore onClick={() => {loadMore(page)} }>阅读更多</LoadMore>
      </div>
    )
  }
  componentDidMount (){
    this.bindScroll();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.sendPageToLoad);
  }
  bindScroll(){
    window.addEventListener('scroll',this.sendPageToLoad);
  }
  sendPageToLoad= () => {
    this.props.autoLoadMore(this.props.page);
    
  }
}


const mapStateToProps = (state) => {
  return {
    articleList : state.get('home').get('articleList'),
    page : state.get('home').get('articlePage')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (page) => {      
      dispatch(getMoreArtListAction(page))
    },
    autoLoadMore: (page) => {
      if(document.body.offsetHeight - 200 < window.screen.height + document.documentElement.scrollTop && page <= 3 ){   
        console.log(document.documentElement.scrollTop);
        dispatch(getMoreArtListAction(page));
       }

    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(List)
