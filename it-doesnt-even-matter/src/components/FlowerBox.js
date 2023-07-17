import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{
const {flower} = React.useContext(MyContext);


const allFlowers = flower.map((flower) => <Cards flower={flower} key={flower.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allFlowers}
            </div>  
        </div>
    </div>
        );
};
  
export default Body;


