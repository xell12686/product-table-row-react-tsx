import React from 'react';
import { List } from 'semantic-ui-react';
import { ReactComponent as IconFolder } from '../images/icon-folder.svg';
import { ReactComponent as IconBell } from '../images/icon-bell.svg';
import { ReactComponent as IconBellSlash } from '../images/icon-bell-slash.svg';
import { ReactComponent as IconVertical } from '../images/icon-vertical.svg';


interface RowButtons {
    isBellActive?: boolean
}
  
const defaultProps: RowButtons = {
    isBellActive: false
}

const RowButtons: React.SFC<RowButtons> = (props) => {
  return (
    <div className='RowButtons'>
      <List verticalAlign='middle' className='icons'>
        <List.Item>
          <IconFolder />
        </List.Item>
        <List.Item className={props.isBellActive ? 'active' : ''}>
            { props.isBellActive ? <IconBell /> :<IconBellSlash /> }
        </List.Item>
        <List.Item>
          <IconVertical />
        </List.Item>
      </List>      

    </div>
  );
}

RowButtons.defaultProps = defaultProps;
export default RowButtons;
