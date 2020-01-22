import React from 'react';
import Flag from '../images/flag-us.jpg';
import { ReactComponent as IconSkull } from '../images/icon-skull.svg';

interface SubInfo { }

interface SubInfo {
  productSku?: string,
  country?: string
}

const defaultProps: SubInfo = {
  country: 'us'
}

const SubInfo: React.SFC<SubInfo> = (props) => {
  return (
    <div className='SubInfo'>
      <img src={Flag} alt='flag' />
      <span>{props.productSku}</span>
      <ul className='icons'>
        <li><IconSkull /></li>
        <li><IconSkull /></li>
        <li><IconSkull /></li>
        <li><IconSkull /></li>
      </ul>
    </div>
  );
}

SubInfo.defaultProps = defaultProps;
export default SubInfo;
