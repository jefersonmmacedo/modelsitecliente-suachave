import "./home.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { TopHeadHome } from "../../components/TopHeadHome/TopHeadHome";
import {  PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";
import { ExploreIconsProperties } from "../../components/ExploreIconsProperties/ExploreIconsProperties";
import { ProcessProperty } from "../../components/ProcessProperty/ProcessProperty";
import { BlockHome } from "../../components/BlockHome/BlockHome";


export function Home() {

    return (
        <div className="Home">
            <Navbar2 />
            <TopHeadHome />
            <ProcessProperty />
            <div className="textFeature">
            <h3>Imóveis à venda</h3>
            </div>
            <div className="carroussel">
            <PropertyCarroussel status={"Venda"}/>
            </div>

                <BlockHome />

            <div className="textHome">
            <h3>Imóveis para alugar</h3>
            </div>
            <div className="carroussel">
            <PropertyCarroussel status={"Aluguel"}/>
            </div>
            <ExploreIconsProperties />
            <Footer />

        </div>
    )
}