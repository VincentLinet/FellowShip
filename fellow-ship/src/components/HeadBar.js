import React from "react";

import FellowShip from "./logo/FellowShip";
import SearchBar from "./SearchBar";
import data from "../dataTest";

const HeadBar = ({ ...props }) => {

    const search = (value) => {
        if (value.length < 3)
            return [];
        //actuellement avec donnée en dure
        //à remplacer par des appels comme suit, supprimer les conditions if
        //const res = search(value);
        const users = data.users.length > 0 ? data.users.filter(user => {
            return user.name.toUpperCase().includes(value.toUpperCase());
        }) : [];

        const cities = data.cities.length > 0 ? data.cities.filter(city => {
            return city.name.toUpperCase().includes(value.toUpperCase());
        }) : [];

        return {users: users, cities: cities};
    };

    return (
        <div className="headbar">
            <div className="title">
                <div className="logo">
                    <FellowShip height="16px" width="16px"/>
                </div>
                <div className="name">FellowShip</div>
            </div>
            <SearchBar search={search} searchResult={props.searchResult}/>
            {/*<SearchBar data={data} searchResult={props.searchResult}/>*/}
        </div>
    );
};

export default HeadBar;
