import './menu-item.styles.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({title,imageUrl,size, history, linkUrl, match}) => (
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`} onClick={function() {
     
      return history.push(`${match.url}${linkUrl}`);
    }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}

      ></div>
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
);


export default withRouter(MenuItem);