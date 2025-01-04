let testimonial_data = [{
    testimonial_img: "https://www.shutterstock.com/image-vector/luffy-skull-vector-illustration-anime-600nw-2514318757.jpg",
    testimonial_text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque perferendis est non quis animi esse earum doloremque in, repudiandae aliquid eos ut, placeat eius vel harum ab laborum nulla ducimus illo numquam suscipit dicta pariatur ea. Labore delectus quisquam, odio ipsam praesentium, quam temporibus soluta consequatur molestias, nam quas!",
    testimonial_name: "One Piece",
},
{
    testimonial_img: "https://i.pinimg.com/736x/d7/bb/2d/d7bb2d4eafad2155085d0f339b7a0ee7.jpg",
    testimonial_text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque perferendis est non quis animi esse earum doloremque in, repudiandae aliquid eos ut, placeat eius vel harum ab laborum nulla ducimus illo numquam suscipit dicta pariatur ea. Labore delectus quisquam, odio ipsam praesentium, quam temporibus soluta consequatur molestias, nam quas!",
    testimonial_name: "Zoro",
},
{
    testimonial_img:"https://img.freepik.com/premium-photo/luffy-cartoon-image-illustration_1230721-4082.jpg?w=740",
    testimonial_text: " Labore delectus quisquam, odio ipsam praesentium, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque perferendis est non quis animi esse earum doloremque in, repudiandae aliquid eos ut, placeat eius vel harum ab laborum nulla ducimus illo numquam suscipit dicta pariatur ea.quam temporibus soluta consequatur molestias, nam quas!",
    testimonial_name: " Monkey. D.Luffy"
},
{
    testimonial_img: "https://i.pinimg.com/originals/18/0a/c3/180ac3e3f839ce8c183299ae01269844.jpg",
    testimonial_text: " doloremque in, repudiandae aliquid eos ut,Lorem ipsum, dolor sit amet consectetu  placeat eius vel harum ab laborum nulla ducimus illo numquam suscipit dicta pariatur ea. Labore delectus quisquam, odio ipsam praesentium, quam  adipisicing elit. Consequatur eaque perferendis est non quis animi esse earum temporibus soluta consequatur molestias, nam quas!",
    testimonial_name: "White Bread"
}];

// let i = 0; 

function testimonail() {
    let randomIndex = Math.floor(Math.random() * testimonial_data.length);


    document.querySelector('.testi-img').src = testimonial_data[randomIndex].testimonial_img;
    document.querySelector('.testi-para').textContent = testimonial_data[randomIndex].testimonial_text;
    document.querySelector('.testi-name').textContent = testimonial_data[randomIndex].testimonial_name;


    setTimeout(testimonail, 2000); 
}


testimonail();
