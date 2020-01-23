import React from 'react';
import { Checkbox, Table, Icon } from 'semantic-ui-react';
import './ProductRow.scss';

import ProductImg from '../images/product-img.jpg';
import SubInfo from './SubInfo';
import RowButtons from './RowButtons';

interface ProductRowProps { }

interface ProductRowProps {
  sku?: string,
  name?: string,
  isNotify?: boolean
}

const defaultProps: ProductRowProps = {
  sku: 'B078WLH42J',
  name: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and …',
  isNotify: false
}

const toCurrency = (val: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(val);
}

const ProductRow: React.SFC<ProductRowProps> = (props) => {
  return (
      <div className={'ProductRow ' + props.sku}>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell className='check'>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <img src={ProductImg} alt='product'/>
              </Table.Cell>
              <Table.Cell className="productTextCol">
                <span className="name">{props.name}</span>
                <SubInfo productSku={props.sku}/>
              </Table.Cell>
              <Table.Cell className="kpi">
                {/* KPI value here */}
              </Table.Cell>
              <Table.Cell>
                <span>{toCurrency(5.68)}</span>
              </Table.Cell>
              <Table.Cell>
                <span>{toCurrency(5.68)}</span>
              </Table.Cell>
              <Table.Cell>
                <span>29%</span>
              </Table.Cell>
              <Table.Cell>
                <span>192</span>
              </Table.Cell>
              <Table.Cell>
                <span>{toCurrency(32813.36)}</span>
              </Table.Cell>
              <Table.Cell>
                <span>100%</span>
              </Table.Cell>
              <Table.Cell>
                <span>9.3</span>
              </Table.Cell>
              <Table.Cell>
                <span>9.3</span>
              </Table.Cell>
              <Table.Cell>
                <span>9.3</span>
              </Table.Cell>
              <Table.Cell>
                <span>9.3</span>
              </Table.Cell>
              <Table.Cell>
                <RowButtons isBellActive={props.isNotify}/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Icon disabled name='caret down' />
    </div>
  );
}

ProductRow.defaultProps = defaultProps;
export default ProductRow;
