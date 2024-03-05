//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
        function(response) {
            response.json().then ( function(json) {
                console.log(json);
                const div = document.getElementById("container");
                // for(const i in json)
                // {
                //     div.innerHTML += `
                //     <div class="astronaut">
                //         <div class="bio">
                //             <h3>${json[i].firstName}&nbsp${json[i].lastName}</h3>
                //             <ul>
                //                 <li>Hours in space: ${json[i].hoursInSpace}</li>
                //                 <li>Active: ${json[i].active}</li>
                //                 <li>Skills: ${json[i].skills}</li>
                //             </ul>
                //         </div>
                //         <img class="avatar" src=${json[i].picture}>
                //     </div>
                //     `;
                // }
                div.innerHTML+=`<p>Total Astronauts: ${json.length}</p>`;
                let sortObj = {};
                let hoursInSpaceArr = [];
                for(const i in json)
                {
                   hoursInSpaceArr.push(json[i].hoursInSpace);
                   sortObj[json[i].id]=json[i].hoursInSpace;
                }
                hoursInSpaceArr.sort().reverse();
                for(let i=0;i<hoursInSpaceArr.length;i++)
                {
                    for(const key in sortObj)
                    {
                        if(sortObj[key] === hoursInSpaceArr[i])
                        {
                            const activeClass = json[key - 1].active === true ? "active" : "inactive";
                            
                            div.innerHTML += `
                            <div class="astronaut">
                            <div class="bio">
                            <h3>${json[key-1].firstName}&nbsp${json[key-1].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[key-1].hoursInSpace}</li>
                                <li class="${activeClass}">Active: ${json[key-1].active}</li>
                                <li>Skills: ${json[key-1].skills}</li>
                            </ul>
                            </div>
                            <img class="avatar" src=${json[key-1].picture}/>
                            </div>`;
                            break;
                        }
                    }  
                }
                
        });
    });
});