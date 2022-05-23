import React from "react";
import { Select } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const { Option } = Select;

const SearchWithTag = (props) => {
    let child = props.child;
    const navigate = useNavigate();
    function handleChange(e){
        if(e.lenght===0){
            navigate(`/cryppo/lk/event}`);
        }
        let category =props.props.expenses.filter((item)=> item.category === e[0])
        if (category === undefined){
            category = props.props.expenses.filter((item)=> item.category === e[1])
        }
        if (category !== undefined) {
            props.props.updateChart(category[0].childExpensesStatistics);
            navigate(`/cryppo/lk/event/${category[0].category}`);
        }
    }

    const options = [];
    props.props.expenses.forEach((item) => {
        options.push(item);
    });
    props.props.arrival.forEach((item) => {
        options.push(item);
    });

    return (
        <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Найдите любые события и операции"
            defaultValue={[]}
            optionLabelProp="label"
            onChange={(e)=>handleChange(e)}
        >
            {options.map((item) => (
                <Option value={item.category} label={item.category}>
                    {item.category}
                </Option>
            ))}
        </Select>
    );
};

export default SearchWithTag;
