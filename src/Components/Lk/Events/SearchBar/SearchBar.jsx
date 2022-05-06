import React, {useEffect} from "react";
import style from "./SearchBar.module.scss";
import arrow from "../../../../Images/icon/arrow2.svg";
import search from "../../../../Images/icon/search.svg";
import {Tag} from "antd";
import AnimIndexAtom from "../../../AnimIndex/AnimIndexAtom";
import {useLocation} from "react-router-dom";
import {addTag} from "../../../../Redux/cryppoLk-reducer";


// const months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
// ];

const Searchbar = (props) => {
    // const dateNow = new Date();
    // let index = dateNow.getMonth();
    // useEffect(() => {
    //
    //     let input = document.querySelector("input[type=button]");
    //     if (props.operationsFilter.type === "initial") {
    //         input.value = months[index];
    //     }
    //     if (props.operationsFilter.type === "Tags") {
    //
    //     }
    // }, []);




    const RemoveTag = (e) => {
        const tag = props.operationsFilter.tags.filter((item) => {
            return item === e;
        });
        props.removeTag(tag[0]);
    };

    // const changeMounth = (e) => {
    //     let input = document.querySelector("input[type=button]");
    //     if (e === "add") {
    //         if (index === dateNow.getMonth()) {
    //             return;
    //         }
    //         index++;
    //         if (index === 12) {
    //             index = 0;
    //         }
    //         input.value = months[index];
    //     }
    //     if (e === "dis") {
    //         index--;
    //         if (index === -1) {
    //             index = 11;
    //         }
    //         input.value = months[index];
    //     }
    // };
    const inputChange = (e) => {
        let value = e.target.value
        props.inputChange(value)
    }

    const inputKeyDown = (e) => {
        if (e.key === "Enter") {
            props.addTag();
        }
    };

    let location = useLocation();
    let title = location.state;
    console.log(location)
    return (
        <div className={style.container}>
            <div className={style.block}>
                {/*<div className={style.calendar}>*/}
                {/*    <button*/}
                {/*        className={`${style.button} ${style.buttonLeft}`}*/}
                {/*        onClick={() => {*/}
                {/*            changeMounth("dis");*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <img src={arrow} alt="arrow"/>*/}
                {/*    </button>*/}
                {/*    <div>*/}
                {/*        <input className={style.calendarInput} type="button"/>*/}
                {/*    </div>*/}
                {/*    <button*/}
                {/*        className={`${style.button} ${style.buttonRight}`}*/}
                {/*        // onClick={() => {*/}
                {/*        //     changeMounth("add");*/}
                {/*        // }}*/}
                {/*    >*/}
                {/*        <img src={arrow} alt="arrow"/>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className={style.input}>
                    {props.operationsFilter.tags.map((e) => (
                        <Tag
                            className={style.tag}
                            closable
                            onClose={() => {
                                RemoveTag(e);
                            }}
                        >
                            {e.name}
                        </Tag>
                    ))}
                    <input
                        className={style.inputItem}
                        placeholder="Найдите любые события и операции"
                        type="text"
                        onKeyDown={inputKeyDown}
                        onChange={inputChange}
                    />
                </div>
                <div className={style.icon} onClick={props.addTag}>
                    <img src={search} alt="search"/>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
