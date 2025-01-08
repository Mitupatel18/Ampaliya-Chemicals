import React from "react";
import InsecticidePage from "./InsecticidePage";
import FertilizerPage from "./FertilizerPage";
import PGRPage from "./PGRPage";
import HerbicidePage from "./HerbicidePage";
import FungicidePage from "./FungicidePage";

const ProductsPage = () => {
    return(
        <>
            <InsecticidePage />
            <FungicidePage />
            <HerbicidePage />
            <PGRPage />
            <FertilizerPage />
        </>
    );
}

export default ProductsPage;