import React from 'react';
import Flag from '../images/flag-us.jpg';
import { ReactComponent as IconSkull } from '../images/icon-skull.svg';
import { ReactComponent as IconLock } from '../images/icon-lock.svg';
import { ReactComponent as IconList } from '../images/icon-list.svg';
import { ReactComponent as IconCubes } from '../images/icon-cubes.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';
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
      <span className="sku">{props.productSku}</span>
      <List horizontal className='icons'>
        <List.Item className='active'>
          <IconSkull />
        </List.Item>
        <List.Item className='active'>
          <IconLock />
        </List.Item>
        <List.Item>
          <IconList />
        </List.Item>
        <List.Item>
          <IconCubes />
        </List.Item>
        <List.Item>
          <IconComment />
        </List.Item>
      </List>      

    </div>
  );
}

SubInfo.defaultProps = defaultProps;
export default SubInfo;
