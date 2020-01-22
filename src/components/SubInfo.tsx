import React from 'react';
import Flag from '../images/flag-us.jpg';
import { ReactComponent as IconSkull } from '../images/icon-skull.svg';
import { Image, List } from 'semantic-ui-react';

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
      <div className="flag">
        <Image src={Flag} alt='flag' size='medium' circular />
      </div>
      <span>{props.productSku}</span>
      <List horizontal className='icons'>
        <List.Item>
          <IconSkull />
        </List.Item>
        <List.Item>
          <IconSkull />
        </List.Item>
        <List.Item>
          <IconSkull />
        </List.Item>
        <List.Item>
          <IconSkull />
        </List.Item>
      </List>      

    </div>
  );
}

SubInfo.defaultProps = defaultProps;
export default SubInfo;
