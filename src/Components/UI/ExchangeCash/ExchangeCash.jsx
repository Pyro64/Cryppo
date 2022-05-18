import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
export default function ExchangeCash(props) {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div className='block'>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    )
}
