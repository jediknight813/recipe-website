import React from "react";
import '../index.css'


const Search = () => {
    const search_items = [{name: "Slow Cooker Recipes", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F01%2F501396_original-2000.jpg&w=100&h=100&c=sc&poi=face&q=60"}, {name: "Air Fryer Recipes", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F09%2F6960703.jpg&w=100&h=100&c=sc&poi=%5B318%2C232%5D&q=60"}, {name: "Appetizers and Snacks", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F01%2F1015406_original.jpg&w=100&h=100&c=sc&poi=%5B634%2C677%5D&q=60"}, {name: "BBQ & Grilling", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F05%2F100492_Kathys-Award-Winning-Barbeque-Sauce_Photo-by-GodivaGirl.jpg&w=100&h=100&c=sc&poi=%5B318%2C223%5D&q=60"}, {name: "Breakfast and Brunch Recipes", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F07%2F5079227.jpg&w=100&h=100&c=sc&poi=face&q=60"},]


    return (
        <div className=" w-screen h-[310px] max-h-auto bg-[#f5f6ea] flex flex-col items-center dt:h-[180px] max-w-full">

            <div className=" w-[95%] h-full  flex flex-col items-center justify-around dt:flex-wrap dt:w-[80%] max-w-screen">

                <div className=" w-[95%] flex items-center tb:w-[620px] dt:w-[35%] dt:h-[50%] ">
                    <input placeholder="Find a Recipe" className="outline-none w-full p-[20px] h-10"/>
                    <div className=" bg-orange-700 h-[42px] w-[55px] flex flex-col justify-center items-center text-lg cursor-pointer text-white"><i class="fa fa-search"></i></div>
                </div>
                <div className="dt:h-[50%] flex items-start dt:w-[35%] "><h1 className=" font-sans font-bold text-[14px] underline underline-offset-4 decoration-orange-500 cursor-pointer"> SEARCH BY INGREDIENT </h1></div>
                <div className=" h-[150px] w-full flex dt:w-[60%] dt:h-full overflow-x-hidden gap-5 items-center justify-around"> 
                    {search_items.map(item => 
                        <div className=" max-w-[70px] h-[80px] cursor-pointer" key={item.name}>
                            <img className=" min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-full" alt={item.name} src={item.image}/>
                            <h1 className=" font-extralight text-[9px]">{item.name}</h1>
                        </div>    
                    )}
                </div>

            </div>
        </div>
    )
}


export default Search

