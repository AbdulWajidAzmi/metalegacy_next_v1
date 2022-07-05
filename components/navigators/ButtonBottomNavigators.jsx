import ButtonBottomNavigator from "./ButtonBottomNavigator"


const ButtonBottomNavigators =({navigators})=>{
    // console.log("navigators",navigators)
   
    return     <div className="banner_navigators">
        {
            navigators?.map(({text,link})=> <ButtonBottomNavigator key={text+link} text={text}link={link}/>)
        }


</div>
}

export default ButtonBottomNavigators