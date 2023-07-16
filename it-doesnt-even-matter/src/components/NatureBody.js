import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{

const {nature} = React.useContext(MyContext);

const allNature = nature.map((nature) => <Cards nature={nature} key={nature.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allNature}
            </div>  
        </div>
    </div>
        );
};
  
export default Body;

