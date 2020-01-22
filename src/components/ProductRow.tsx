import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
import './ProductRow.scss';

import ProductImg from '../images/product-img.jpg';
import SubInfo from './SubInfo';

interface ProductRowProps { }

interface ProductRowProps {
  sku?: string,
  name?: string
}

const defaultProps: ProductRowProps = {
  sku: 'B078WLH42J',
  name: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and …'
}

const ProductRow: React.SFC<ProductRowProps> = (props) => {
  return (
      <div className={'ProductRow ' + props.sku}>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell className='check'>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <img src={ProductImg} alt='product'/>
              </Table.Cell>
              <Table.Cell>
                <span>{props.name}</span>
                <SubInfo productSku={props.sku}/>
              </Table.Cell>
              <Table.Cell>
                <span>$5.68</span>
              </Table.Cell>
              <Table.Cell>
                <span>$5.68</span>
              </Table.Cell>
              <Table.Cell>
                <span>29%</span>
              </Table.Cell>
              <Table.Cell>
                <span>192</span>
              </Table.Cell>
              <Table.Cell>
                <span>$32,813.36</span>
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
                {/* row buttons heres */}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  );
}

ProductRow.defaultProps = defaultProps;
export default ProductRow;
