// // const heading = document.getElementById('heading');
// // console.log(heading);
// // const button  = document.getElementsByTagName('button');
// // console.log(button);

// // const bd= document.querySelector('#heading');
// // console.log(bd);
// // const bad =document.querySelector('.bd')
   
// // text.addEventListener('keypress', ()=>{
   

// // } )


// // const btn = document.querySelector('#btn');
// // btn.addEventListener('click',()=>{
// //     bd.innerHTML =text.value;
    
// // })


// // console.log(location);
// // console.log(history.length);






// // setTimeout(()=>{
// //     console.log("Hi");
// //     console.log("hello");
// // },  4000);




// setInterval(() => {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
    
    
// }, 1000);


// const userApi= async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }

// userApi();
const userApi = async () => {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    const data = await response.json();

    const card = document.getElementById('card');

    data.map((user) => {

        card.innerHTML += `
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

                <h2 class="text-xl font-bold text-gray-800 mb-2">
                    ${user.name}
                </h2>

                <p class="text-gray-600 mb-2">
                    <span class="font-semibold">Username:</span>
                    ${user.username}
                </p>

                <p class="text-gray-600 mb-2">
                    <span class="font-semibold">Email:</span>
                    ${user.email}
                </p>

                <p class="text-gray-600 mb-2">
                    <span class="font-semibold">Phone:</span>
                    ${user.phone}
                </p>

                <p class="text-gray-600">
                    <span class="font-semibold">Website:</span>
                    ${user.website}
                </p>

            </div>
        `;
    });
};

userApi();