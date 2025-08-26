// blog.js

// Sample blog data (can also be fetched from a JSON file or API)
const blogPosts = {
  // top rated place
  1: {
    title: "Cox’s Bazar Tour: The Complete Travel Guide to the World’s Longest Sea Beach",
    image: "image/Cox's Bazar.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>Cox’s Bazar, in southeastern Bangladesh, boasts the world’s longest natural sea beach, stretching over 120 km along the Bay of Bengal. Famous for its golden sands, rolling waves, and spectacular sunsets, it’s a top destination for both relaxation and adventure. Travelers can reach it by air, bus, or soon by train.<br>Key attractions include Laboni Beach, Himchari National Park, Inani Beach, Saint Martin’s Island, and Maheshkhali Island. Visitors can enjoy water sports, beach activities, seafood dining, and local shopping at the Burmese Market. The best time to visit is from November to March for pleasant weather, with December to February offering the most comfortable climate.<br>
    Cox’s Bazar offers accommodation ranging from luxury resorts to budget hotels, making it accessible for all types of travelers. With its natural beauty, rich culture, and variety of activities, it remains one of Bangladesh’s most beloved travel destinations.</p>
    `
  },

  2: {
    title: "Sajek Valley Tour: A Complete Travel Guide to the Land of Clouds",
    image: "image/Sajek Valley.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>Sajek Valley, often called the “Queen of Hills” in Bangladesh, is a breathtaking hill station located in the Rangamati District, close to the Bangladesh–India border. Known for its rolling green hills, endless sea of clouds, and tribal culture, Sajek has become one of the most popular tourist spots in recent years. It’s an ideal destination for nature lovers, adventure seekers, and anyone looking to escape the chaos of city life.</p>
    <h3>Why Visit Sajek Valley?</h3>
    <p><b>Cloud-Kissed Hills –</b> Feel like you’re walking among the clouds.<br>
    <b>Tribal Culture –</b> Experience the unique lifestyle of indigenous communities like Chakma, Marma, and Tripuri.<br>
    <b>Peaceful Environment –</b> Calm, pollution-free, and away from the noise.<br>
    <b>Adventure & Photography –</b> Perfect for trekking, biking, and scenic photography.<br>
    <b>Year-Round Beauty –</b> Sajek is beautiful in every season.</p><br>
    <p>Sajek Valley offers accommodation ranging from luxury resorts to budget hotels, making it accessible for all types of travelers. With its natural beauty, rich culture, and variety of activities, it remains one of Bangladesh’s most beloved travel destinations.</p>
    `
  },

  3: {
    title: "Jaflong Tour 2025 – Land of Stones & Mist",
    image: "image/Jaflong.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
      <p>Jaflong, nestled in the Sylhet district, is a magical escape where the emerald-green hills of Meghalaya meet the crystal-clear waters of the Piyain River. In 2025, the area has become even more welcoming to travelers—better roads, eco-friendly resorts, and an untouched charm that makes it perfect for vloggers, photographers, and nature lovers alike.<br>
    Imagine starting your vlog with a drone shot over the river, mist curling over the hills in the early morning light. The scene shifts to a boat ride across calm waters, capturing the daily life of locals collecting stones from the riverbed. The air is filled with the scent of fresh tea leaves as you pass through lush gardens, and every frame feels like a postcard.</p>
    <br><p>The beauty of Jaflong isn’t just in the landscapes—it’s in the rhythm of life. From the slow-moving fishing boats to the warm greetings of the Khasi villagers, every moment offers a chance to connect with the place and its people.</p>
    `
  },

  4: {
    title: "Debotakhum Tour 2025 – The Hidden Gem of Bandarban",
    image: "image/Debotakhum.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>Tucked away in the lush hills of Bandarban, Debotakhum is one of Bangladesh’s most enchanting natural wonders. Imagine a narrow water canyon surrounded by towering rock walls, where the emerald water is so calm it mirrors the sky. In 2025, improved trekking trails and eco-boat services have made it easier for adventurers to experience this magical spot without losing its untouched charm.<br>
    Your vlog could open with a sunrise over the Bandarban hills, then shift to the adventurous journey—trekking through bamboo forests, crossing hanging bridges, and finally boarding a small wooden boat that glides silently through Debotakhum’s still waters. The echoes of bird calls and the gentle splash of the oar create a soundscape that feels like another world.</P>
    <br><p>The beauty of Jaflong isn’t just in the landscapes—it’s in the rhythm of life. From the slow-moving fishing boats to the warm greetings of the Khasi villagers, every moment offers a chance to connect with the place and its people.</p>
    <h3>Two must-do experiences here:</h3><br>
    <p>The boat ride through the khum itself, where the cliffs rise dramatically on both sides and sunlight dances on the water.<br>
    A short hike to Amiyakhum and Velakhum, two nearby waterfalls that add even more beauty to the journey.</p>
    `
  },

  5: {
    title: "Kaptai Lake 1-Day Tour 2025 – A Day in the Heart of the Hillsn",
    image: "image/Kaptai Lake.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>Just an hour’s drive from Rangamati town, Kaptai Lake offers a perfect day trip where turquoise waters meet rolling green hills. In 2025, the lake has become even more traveler-friendly, with clean boat stations, upgraded resorts, and guided boat tours that make every moment feel cinematic.<br>
    Your vlog could start with the early morning sun casting golden light over the lake, followed by boarding a wooden boat that slowly glides between tiny green islands. The breeze carries the scent of fresh water and forest leaves, while fishermen cast their nets in the distance—each scene ready for your camera.</P>
    <br><p>The beauty of Jaflong isn’t just in the landscapes—it’s in the rhythm of life. From the slow-moving fishing boats to the warm greetings of the Khasi villagers, every moment offers a chance to connect with the place and its people.</p>
    <h3><b>Two must-do moments for a one-day trip:</b></h3><br>
    <p><li>Boat ride to Shuvolong Waterfall, where you can capture both slow-motion splashes and drone shots of the falls surrounded by hills.<br>
    <li>Lunch at a floating restaurant, enjoying fresh fish while the lake ripples around you.s</p>
    `
  },

  6: {
    title: "Kuakata Tour 2025 – The Daughter of the Sea",
    image: "image/kuakata.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>TKuakata, known as the “Daughter of the Sea”, is one of the rare beaches in the world where you can watch both sunrise and sunset over the ocean. In 2025, this charming coastal town in Patuakhali has become even more inviting, with cleaner beaches, improved roads, and new beachfront cafés perfect for travelers and vloggers alike.<br>
    Your vlog could open with the first rays of dawn spilling over the Bay of Bengal, waves gently brushing the shore. The morning scenes shift to fishermen returning with fresh catches, colorful fishing boats lining the coast, and the laughter of locals preparing for the day. By afternoon, you could explore nearby spots like the Rakhine Village to capture their unique culture, or ride along the sandy stretch to Fatrar Char for pristine, untouched beauty.</P>
    <br><p>The beauty of Jaflong isn’t just in the landscapes—it’s in the rhythm of life. From the slow-moving fishing boats to the warm greetings of the Khasi villagers, every moment offers a chance to connect with the place and its people.</p>
    <h3>Two must-do experiences here:</h3><br>
    <p>Sunset over the Bay of Bengal, with golden light reflecting off the water—perfect for cinematic timelapse shots<br>
    Fresh seafood dinner by the beach, with the sound of waves as your background audio.<br><br>Kuakata in 2025 isn’t just a beach—it’s a story of sun, sea, and culture. Every frame you capture here will feel like a memory you’ll want to relive.</p>
    `
  },

  7: {
    title: "Sundarbans Tour 2025 – Into the Wild Heart of Bangladesh",
    image: "image/Sundarbans.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
    <p>The Sundarbans, the world’s largest mangrove forest, is where land, water, and wildlife meet in a breathtaking harmony. In 2025, this UNESCO World Heritage Site is even more accessible to travelers, with eco-friendly boat cruises, guided wildlife tours, and stricter conservation measures keeping its beauty intact.<br>
    Your vlog could start with the soft light of dawn over the river, your boat cutting gently through the mist. Mangrove trees lean over the water, and the air is alive with bird calls. The camera shifts to glimpses of spotted deer grazing on the riverbank, playful monkeys swinging from branches, and if you’re lucky—a fleeting sight of the majestic <b>Royal Bengal Tiger.</b></P>
    <br><p>The beauty of Jaflong isn’t just in the landscapes—it’s in the rhythm of life. From the slow-moving fishing boats to the warm greetings of the Khasi villagers, every moment offers a chance to connect with the place and its people.</p>
    <h3>Two must-do experiences here:</h3><br>
    <p>Cruising through narrow canals, where sunlight filters through mangrove leaves, creating magical reflections on the water.<br>
    Night stay on a houseboat, listening to the symphony of the forest under a sky full of stars.</p>
    `
  },

  // underrated place 
  8: {
    title: "Bailakhali Red Crabs Sea Beach Tour 2025",
    image: "image/Bailakhali Red Crabs Sea Beach.jpeg",
    author: "MD Habibullah Sanjid",
    date: "July 15, 2025",
    content: `
      <P>Far from the crowds of the big tourist beaches, Bailakhali Sea Beach in Cox’s Bazar offers a rare and magical sight—thousands of bright red crabs carpeting the golden sand. In 2025, this hidden gem remains peaceful and untouched, perfect for travelers seeking beauty away from the noise. Your vlog could open with a drone shot sweeping over the endless shoreline, the waves rhythmically touching the sand.<br> As you walk closer, the camera captures hundreds of tiny red crabs scurrying in unison, creating a natural spectacle few have ever seen. Later, the sound of the sea blends with shots of fishing boats, distant hills, and a sky that turns orange during sunset.</p>
      <h3><b>Two unmissable moments here:</b></h3>
      <p>JCapturing the crab waves as they move across the beach—best shot from a low angle for a cinematic feel.</p><br>
      <p>Evening golden hour, when the beach glows under the setting sun, perfect for both photos and timelapse.</p>
      <p>... and more.</p>
    `
  },
  9: {
    title: "Saka Haphong – Touching the Roof of Bangladesh",
    image: "image/Saka Haphong.webp.jpg",
    author: "Sadia Islam",
    date: "August 2, 2025",
    content: `
      <p>Saka Haphong, often regarded as the highest peak of Bangladesh, stands deep within the Bandarban hill tracts on the Myanmar border. In 2025, this destination remains a true adventure—remote, challenging, and breathtaking—reserved for those who are ready to trek through untouched nature.<br>
      Your vlog could start with shots of the early morning mist rolling over the hills, your group preparing for the long trek. The journey takes you through dense bamboo forests, narrow ridges, and remote tribal villages where life moves at a slower, more peaceful pace. Every step uphill brings wider views—rolling green mountains stretching into the horizon</p>
      <h3>Two highlights of this journey:</h3>
      <p>Summit sunrise, when the sky bursts into shades of gold and pink, revealing the endless sea of hills.<br>
      Evening campfire at a hilltop base, sharing stories with fellow trekkers under a star-filled sky.<br><br>
      Best time to visit: November to February, when the air is clear, and trekking is safer. A good pair of hiking boots, a reliable backpack, and plenty of stamina are essential—you’ll be walking for hours each day.</p>
    `
  },
  10: {
    title: "Nijhum Dwip Tour – The Silent Island of Bangladesh",
    image: "image/Nijhumdwip.jpeg",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p>Far in the Bay of Bengal lies Nijhum Dwip, a serene island where time seems to stand still. In 2025, this paradise remains unspoiled—long stretches of empty beaches, dense mangrove forests, and thousands of migratory birds filling the sky in winter. It’s the kind of place where your vlog can breathe with slow, cinematic shots.<br>
    Your vlog could open with the boat ride from Hatia, waves sparkling under the morning sun. As the island comes into view, you capture fishermen pulling in their nets, wild deer grazing near the forest edge, and flocks of birds taking flight over the wetlands. By sunset, the beach turns golden, and the only sound is the rhythmic crash of waves.
    <br><br> <b>Two moments you can’t miss here:</b>
    <br><br><li> Bird-watching at dawn, when migratory species create a living cloud over the island.<br>
    <li> Cycling along the empty shoreline, the sea breeze in your face and nothing but horizon ahead.<br><br>
    Best time to visit: November to February, when the weather is mild and the migratory birds arrive. Bring binoculars, a drone for wide shots, and a power bank—there’s no rush here, so you’ll film for hours.</p>
     `
  },
  11: {
    title: "Sandwip Tour 2025 – The Island of Sun, Sea & Stories",
    image: "image/Sandwip.jpg",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p>Off the coast of Chattogram, Sandwip is a living blend of history, culture, and raw coastal beauty. In 2025, the island still carries its timeless charm—vast sandy beaches, fishing villages, and the warm smiles of locals. Reached by boat across the Meghna River, Sandwip offers a travel experience where your vlog can capture both scenic beauty and authentic island life.<br>
    Your vlog could open with shots of the river crossing—fishermen’s nets catching the light, seabirds gliding overhead, and the first glimpse of the island’s green shoreline. On land, narrow paths lead you past palm groves, salt farms, and traditional wooden boats resting on the sand. Every turn is a new scene, from bustling local bazaars to quiet, untouched beaches.
    <br><br><b>Two moments you can’t miss here: </b> 
    <br><br><li>Sunset on Sandwip Beach, when the sky turns gold and crimson over the Bay of Bengal.<br>
    <li>Exploring coastal villages, where life moves with the tides and traditions are still alive. 
    <br><brBest time to visit: November to March, when the sea is calm and the weather is pleasant. A waterproof bag for your gear is a must, as boat rides can get splashy.</p>
    `
  },
  12: {
    title: "Marayon Thong Tour – The Hidden Hilltop of Bandarban",
    image: "image/Marayon Thong.jpeg",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p>High in the Bandarban hill tracts, Marayon Thong remains one of Bangladesh’s most untouched and breathtaking viewpoints. In 2025, this spot is still a well-kept secret among trekkers—offering rolling green hills, endless cloudscapes, and a silence so deep you can hear the wind moving through the bamboo groves.<br>
    Your vlog could open with dawn breaking over the hills, golden light spilling across layers of mist. The trek begins through winding jungle trails, with the sounds of birdsong and rustling leaves guiding your way. As you climb higher, the view widens—deep valleys below and endless ridges fading into the horizon. The summit rewards you with a panoramic view that feels like standing at the edge of the world.
    <br><br><b>Two moments you can’t miss here:</b> 
    <br><br><li>Sunrise above the clouds, when the entire valley is covered in a white sea.<br>
    <li>Evening campfire under the stars, sharing stories with fellow travelers in the crisp mountain air.
    <br><br>Best time to visit: October to February, when skies are clear and trekking conditions are ideal. Good hiking boots, layered clothing, and enough water are essential for the journey.</p>
    `
  },
  13: {
    title: "Melkhum Tour – The Wild Water Canyon of Bandarban",
    image: "image/Melkhum.jpg",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p>Hidden deep within Bandarban’s rugged hills, Melkhum is a striking natural wonder—a narrow canyon of emerald water framed by steep rock walls. In 2025, it remains one of the least-explored “khums,” perfect for adventurers and vloggers seeking rare, untouched beauty.<br>
    Your vlog could open with the trek through thick bamboo forests and rocky streams, the sound of rushing water getting louder as you approach. Then, the camera reveals the narrow passage of Melkhum, sunlight filtering down through the cliffs, and your boat gliding through glassy green water. Every echo, every ripple feels like part of a hidden world.
    <br><br><b>Two unforgettable moments here:</b> 
    <br><br><li>The boat ride through the canyon, where the walls rise high on both sides and the water feels endless.<br>
    <li>Swimming in the clear pool at the end of the khum, surrounded by untouched forest. 
    <br><br>Best time to visit: November to March, when water is calm and trekking trails are safe. Lightweight waterproof gear is a must—both for your safety and your camera.</p> 
    `
  },
  14: {
    title: "Akilpur Beach - The Quiet Shore of Chattogram",
    image: "image/Akilpur Beach.webp",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p>Away from the busy crowds of Cox’s Bazar, Akilpur Beach in Chattogram offers a calm and untouched stretch of coastline where the sea meets golden sand in peaceful harmony. In 2025, the beach remains a favorite for those who prefer solitude, soft waves, and endless horizon views.<br>
    Your vlog could open with the soft morning light spilling over the shoreline, gentle waves rolling in, and fishermen preparing their nets. The camera can move along the coast, capturing seashells glistening in the sun, children playing by the water, and the rhythmic pull of the tide. By late afternoon, the setting sun paints the sky in shades of orange and pink, turning the beach into a perfect cinematic backdrop.
    <br><br><b>Two experiences you can’t miss here:</b> 
    <br><br><li>A walk along the untouched sandbars during low tide, with only the sound of waves around you.<br>
    <li>A walk along the untouched sandbars during low tide, with only the sound of waves around you.
    <br><br>Best time to visit: October to March, when the weather is pleasant, and the sea is calm. A wide-angle lens will make your beach shots feel even more expansive.</p> 
    `
  },
    //template
  15: {
    title: "",
    image: "",
    author: "Tanvir Rahman",
    date: "August 5, 2025",
    content: `
    <p> <br>

    <br><br><b> </b> 
    <br><br><li> <br>
    <li> 
    <br><br> </p>
    `
  },
};


// Helper to get URL parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load blog content
window.onload = () => {
  const blogId = getQueryParam('id');
  const post = blogPosts[blogId];

  const container = document.getElementById('blogContent');

  if (!post) {
    container.innerHTML = `<h2 class="text-xl font-bold">Post not found</h2>`;
    return;
  }

  container.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="w-full h-[480px] object-cover rounded-lg mb-6 shadow-md">
    <h1 class="text-3xl font-bold mb-2">${post.title}</h1>
    <div class="text-sm text-gray-500 mb-4">✍️ ${post.author} | 📅 ${post.date}</div>
    <div class="prose prose-blue max-w-none">${post.content}</div>
  `;
};

// comment section

// Comment section logic
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('commentName').value.trim();
  const text = document.getElementById('commentText').value.trim();
  const commentList = document.getElementById('commentList');

  if (name && text) {
    const initials = name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
    const time = new Date().toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const commentEl = document.createElement('div');
    commentEl.className = 'flex items-start gap-4';
    commentEl.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">${initials}</div>
      <div>
        <p class="font-semibold">${name} <span class="text-sm text-gray-500 ml-2">🕒 ${time}</span></p>
        <p class="text-gray-700">${text}</p>
      </div>
    `;

    commentList.prepend(commentEl);

    // Reset form
    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';
  }
});

