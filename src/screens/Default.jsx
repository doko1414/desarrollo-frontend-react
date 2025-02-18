import Logo from './_components/Logo';
import Description from './_components/Description';
//import Content from './_components/Content';
// import Github from './_components/Github';
import OpenLink from '../components/OpenLink';
import Lessoninfo from '../components/Lessoninfo';

const Default =()=>{
return (
    <>
    <header className="App-header">
        <Logo />
        <Description />

        <OpenLink Title='Learn React' url='https://reactjs.org'/>
        <OpenLink Title='Mi Proyecto React(GitHub)' url='https://github.com/doko1414/desarrollo-frontend-react'/>
        <Lessoninfo unitNumber="1" title="Introduccion a React y estructura de proyecto"/>
        <Lessoninfo unitNumber="2" title="Context API para la gestion del estado global en aplicaciones Reaxt"/>
    {/* <Content />
        <Github/> */}
        
    </header>
    </>
    
);
}
export default Default;