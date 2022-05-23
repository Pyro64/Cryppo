import React from 'react';
import { Select } from 'antd';
import { NavLink, useParams } from "react-router-dom";

const { Option } = Select;

const SearchWithTag = (props) => {
    function handleChange(value) {
    }
    const { category, subcategory } = useParams();
    let url = `/cryppo/lk/event/${props.category}`;
    if (category !== undefined) {
      url = `/cryppo/lk/event/${category}/${props.category}`;
    }

    const options = [];
    props.props.expenses.forEach((item) =>{
        options.push(item.category)
    })
    props.props.arrival.forEach((item) =>{
        options.push(item.category)
    })

    return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Найдите любые события и операции"
            onChange={handleChange}
            defaultValue={[]}
            optionLabelProp="label"
        >
            {options.map((item) => (
                <Option value={item} label={item}>
                <div className="demo-option-label-item">
                    {item}
                </div>
            </Option>
        ))}
            
        </Select>
    );
}

export default SearchWithTag;
