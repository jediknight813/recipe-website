import React from "react";
import '../index.css'


const MainPageRecipes = () =>{ 
    const popular_recipes = [{image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F06%2F08%2F236817.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Creamy Pasta Salads for Summer"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F06%2F1165358-Sassy-Sangria-Photo-by-LilSnoo-650x465.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Sangria Recipes"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2FParty-Pinwheels-by-Allrecipes-Magazine-2000.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "30 Graduation Party Foods For an A+ Celebration"}, {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F06%2Fcampfirebreakfast_423165.jpg&w=80&h=80&c=sc&poi=face&q=60", name: "Camping Recipes"}]


    return (
        <div className="w-full h-auto flex flex-col items-center gap-6 tb:gap-0">
            
            <div className="h-auto w-full flex flex-col items-center gap-4">
                <img alt="recipe" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2018%2F05%2F687379.jpg&w=640&h=428&c=sc&poi=face&q=60"/>
                <h1 className=" max-w-[95%] font-['Rock_Salt'] text-2xl">15 Greek Grilled Chicken Recipes</h1>
                <p className=" max-w-[95%] font-light">Want an easy crowd-pleasing recipe to make on the grill? These Greek-inspired grilled chicken dishes are sure to satisfy everyone at your dinner table.</p>
            </div>

            <div className=" h-auto w-[95%] flex flex-col gap-2">

                <div className=" max-w-full h-auto flex flex-row-reverse">
                    <img className=" max-w-[140px] ml-5" alt="food img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F15%2F5692569_grilled-german-potato-salad_chef-john.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                    <h1 className=" font-bold">Chef John's Best Side Dishes for Grilling Season</h1>
                </div>

                <div className=" max-w-full h-auto flex flex-row-reverse">
                    <img className=" max-w-[140px] ml-5" alt="food img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F4511165-2000.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                    <h1 className=" font-bold">12 Rhubarb Recipes That Aren't Pie</h1>
                </div>

            </div>

            <div className=" w-[95%] h-auto text-center">
                <h1 className=" font-bold text-2xl"> Most Popular </h1>
                <div className=" flex overflow-x-scroll">
                    {popular_recipes.map(item => 
                        <div key={item.name} className=" min-w-[280px] flex">
                            <img alt={item.name} src={item.image} />
                            <h1 className=" font-light">{item.name}</h1>
                        </div>    
                    )}
                 </div>

            </div>

        </div>
    )
}


export default MainPageRecipes

