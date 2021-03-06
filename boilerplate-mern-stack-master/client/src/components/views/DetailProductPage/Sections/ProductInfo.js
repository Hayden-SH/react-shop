import React from 'react'
import { Button, Descriptions } from 'antd'

function ProductInfo(props) {






    return(
        <div>
            <Descriptions title="Product Info" bordered>
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
                <Descriptions.Item label="Continents">{props.detail.continents}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger">
                    구독하기
                </Button>
            </div>
        </div>
    )
}


export default ProductInfo