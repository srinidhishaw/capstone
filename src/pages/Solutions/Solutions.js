import "./Solutions.scss"
import SolutionList from "../../components/Solution/Solution"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
function Solutions({solList}){
    return(
        <>
        <Header/>
        <Hero/>
        <SolutionList/>
        </>
    )
}
export default Solutions