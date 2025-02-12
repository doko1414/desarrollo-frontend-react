import Logo from './_components/Logo';
import Description from './_components/Description';
//import Content from './_components/Content';
// import Github from './_components/Github';
import OpenLink from '../components/OpenLink';

const Default =()=>{
return (
    <>
    <header className="App-header">
        <Logo />
        <Description />

        <OpenLink Title='Learn React' url='https://reactjs.org'/>
        <OpenLink Title='Mi Proyecto React(GitHub)' url='https://github.com/doko1414/desarrollo-frontend-react'/>
    {/* <Content />
        <Github/> */}
        
    </header>
    </>
    
);
}
export default Default;