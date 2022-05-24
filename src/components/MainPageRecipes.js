import React from "react";
import '../index.css'


const MainPageRecipes = () =>{ 
    const popular_recipes = [{image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F06%2F08%2F236817.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Creamy Pasta Salads for Summer"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F06%2F1165358-Sassy-Sangria-Photo-by-LilSnoo-650x465.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Sangria Recipes"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2FParty-Pinwheels-by-Allrecipes-Magazine-2000.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "30 Graduation Party Foods For an A+ Celebration"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F06%2Fcampfirebreakfast_423165.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Camping Recipes"}]


    return (
        <div className="w-full h-auto flex flex-col items-center gap-8 tb:w-[690px] tb:flex-row tb:flex-wrap tb:justify-between mdt:w-[85%] mdt:flex-nowrap dt:w-[80%]">
            
            <div className="h-auto w-full flex flex-col items-center gap-4 mdt:order-2 mdt:max-w-[34%] cursor-pointer">
                <img alt="recipe" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2018%2F05%2F687379.jpg&w=640&h=428&c=sc&poi=face&q=60"/>
                <h1 className=" max-w-[95%] font-['Rock_Salt'] text-2xl">15 Greek Grilled Chicken Recipes</h1>
                <p className=" max-w-[95%] font-light">Want an easy crowd-pleasing recipe to make on the grill? These Greek-inspired grilled chicken dishes are sure to satisfy everyone at your dinner table.</p>
            </div>

            <div className=" h-auto w-[95%] flex flex-col gap-2 tb:w-[46%] mdt:order-1 mdt:w-[300px]">

                <div className=" max-w-full h-auto flex flex-row-reverse tb:flex-col cursor-pointer">
                    <img className=" max-w-[140px] ml-5 tb:ml-0 tb:min-w-full" alt="food img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F15%2F5692569_grilled-german-potato-salad_chef-john.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                    <h1 className=" font-bold">Chef John's Best Side Dishes for Grilling Season</h1>
                </div>

                <div className=" max-w-full h-auto flex flex-row-reverse tb:flex-col cursor-pointer">
                    <img className=" max-w-[140px] ml-5 tb:ml-0 tb:min-w-full" alt="food img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F4511165-2000.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                    <h1 className=" font-bold">12 Rhubarb Recipes That Aren't Pie</h1>
                </div>

            </div>

            <div className=" w-[95%] h-auto text-center tb:w-[48%] border-solid border-2 border-gray-500 p-5 rounded-md mdt:order-3 mdt:max-w-[320px]">
                <h1 className=" font-bold text-2xl mb-2"> Most Popular </h1>
                <div className=" flex overflow-x-scroll tb:flex-col tb:gap-8 mdt:overflow-hidden">
                    {popular_recipes.map(item => 
                        <div key={item.name} className=" min-w-[280px] flex tb:gap-3 cursor-pointer">
                            <img alt={item.name} src={item.image} />
                            <h1 className=" font-light break-normal">{item.name}</h1>
                        </div>    
                    )}
                 </div>

            </div>

        </div>
    )
}


export default MainPageRecipes

