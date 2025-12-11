const blogPosts = [
  {
    id: 1,
    title: "A Dreamy Beachside Wedding in Bali",
    image: "images/13.jpeg",
    author: "Elena Rodriguez",
    date: "March 15, 2024",
    content: `
      <p>Imagine exchanging vows with the turquoise waves of Bali as your backdrop. This beachside wedding captured the essence of romance and adventure.</p>
      <p>The bride wore a flowing white gown that danced in the ocean breeze, while the groom's suit was tailored to perfection. The ceremony was intimate, with only close family and friends in attendance.</p>
      <blockquote>"Our love story began on these very shores, and it felt poetic to say our vows here too."</blockquote>
      <p>The reception featured local Balinese cuisine, fresh seafood, and tropical fruits. The couple's first dance was under a canopy of stars, with lanterns floating gently in the water.</p>
      <p>This wedding reminds us that love knows no boundaries and can flourish in the most beautiful places on earth.</p>
    `
  },
  {
    id: 2,
    title: "Rustic Vineyard Elopement in Napa Valley",
    image: "images/14.jpeg",
    author: "Michael Chen",
    date: "February 28, 2024",
    content: `
      <p>In the heart of Napa Valley, surrounded by rolling vineyards and golden hills, this couple chose to elope in the most intimate way possible.</p>
      <p>The bride's bouquet was made from wildflowers picked from the vineyard grounds, and the groom wore a simple linen suit that matched the rustic elegance of their surroundings.</p>
      <blockquote>"We wanted our wedding to reflect who we are - simple, authentic, and deeply connected to nature."</blockquote>
      <p>The ceremony was brief but meaningful, with personalized vows that brought tears to the eyes of their small gathering. Afterward, they enjoyed a private picnic with local wines and cheeses.</p>
      <p>This elopement proves that the most memorable weddings don't need grand gestures - just love and the perfect setting.</p>
    `
  },
  {
    id: 3,
    title: "Garden Party Wedding in Charleston",
    image: "images/15.jpeg",
    author: "Sarah Thompson",
    date: "April 5, 2024",
    content: `
      <p>Charleston's historic gardens provided the perfect backdrop for this elegant garden party wedding. The venue was transformed into a fairytale with thousands of twinkling lights and fresh floral arrangements.</p>
      <p>The bride's gown featured delicate lace details that echoed the intricate ironwork of the garden gates. The groom and groomsmen wore classic navy suits with boutonnieres made from garden roses.</p>
      <blockquote>"Our wedding felt like stepping into a living painting - every detail was more beautiful than we could have imagined."</blockquote>
      <p>The reception included Southern classics like shrimp and grits, along with a dessert bar featuring local pecan pies and lemon bars. The couple's first dance was to their favorite song, played by a live string quartet.</p>
      <p>This wedding captured the charm and hospitality that Charleston is known for, creating memories that will last a lifetime.</p>
    `
  },
  {
    id: 4,
    title: "Mountain Lodge Winter Wedding",
    image: "images/a.JPG",
    author: "David Park",
    date: "January 20, 2024",
    content: `
      <p>High in the Rocky Mountains, this winter wedding combined the magic of snow-covered peaks with the warmth of a cozy lodge. The contrast created an unforgettable atmosphere.</p>
      <p>The bride wore a velvet gown with fur accents, perfect for the chilly mountain air. The groom's suit was complemented by a wool overcoat and leather boots.</p>
      <blockquote>"The snow falling outside our windows made our wedding day feel like a dream."</blockquote>
      <p>The ceremony took place by a massive stone fireplace, with guests bundled in blankets and sipping hot cocoa. The reception featured hearty comfort foods and plenty of wine to warm everyone up.</p>
      <p>This wedding proved that winter can be just as romantic as summer, especially when surrounded by the majesty of nature.</p>
    `
  },
  {
    id: 5,
    title: "Urban Rooftop Romance in New York",
    image: "images/b11.JPG",
    author: "Jessica Liu",
    date: "May 12, 2024",
    content: `
      <p>Overlooking the glittering skyline of Manhattan, this rooftop wedding combined urban sophistication with romantic elegance. The city lights served as the perfect backdrop.</p>
      <p>The bride's gown was modern and sleek, with clean lines that reflected the city's architecture. The groom wore a tailored suit that spoke to his corporate background.</p>
      <blockquote>"Getting married above the city that brought us together felt incredibly special."</blockquote>
      <p>The reception included craft cocktails and small plates, allowing guests to mingle while enjoying the panoramic views. The couple's first dance was accompanied by a live jazz band.</p>
      <p>This wedding showed that even in the busiest city, you can find intimate moments of pure magic.</p>
    `
  },
  {
    id: 6,
    title: "Tropical Paradise Wedding in Hawaii",
    image: "images/c11.JPG",
    author: "Ryan Johnson",
    date: "June 8, 2024",
    content: `
      <p>On the lush islands of Hawaii, this couple celebrated their love with a traditional luau wedding that honored both their heritage and their new beginning.</p>
      <p>The bride wore a crown of tropical flowers, and the groom was dressed in traditional Hawaiian attire. The ceremony included cultural elements that made it deeply meaningful.</p>
      <blockquote>"Our wedding was a celebration of love, family, and the beautiful culture that brought us together."</blockquote>
      <p>The reception featured hula dancing, fire shows, and an abundance of fresh tropical fruits and seafood. The couple's first dance was barefoot on the warm sand.</p>
      <p>This wedding captured the spirit of aloha and showed how different cultures can come together in celebration.</p>
    `
  },
  {
    id: 6,
    title: "Tropical Paradise Wedding in Hawaii",
    image: "images/c11.JPG",
    author: "Ryan Johnson",
    date: "June 8, 2024",
    content: `
      <p>On the lush islands of Hawaii, this couple celebrated their love with a traditional luau wedding that honored both their heritage and their new beginning.</p>
      <p>The bride wore a crown of tropical flowers, and the groom was dressed in traditional Hawaiian attire. The ceremony included cultural elements that made it deeply meaningful.</p>
      <blockquote>"Our wedding was a celebration of love, family, and the beautiful culture that brought us together."</blockquote>
      <p>The reception featured hula dancing, fire shows, and an abundance of fresh tropical fruits and seafood. The couple's first dance was barefoot on the warm sand.</p>
      <p>This wedding captured the spirit of aloha and showed how different cultures can come together in celebration.</p>
    `
  },
  {
    id: 6,
    title: "Tropical Paradise Wedding in Hawaii",
    image: "images/c11.JPG",
    author: "Ryan Johnson",
    date: "June 8, 2024",
    content: `
      <p>On the lush islands of Hawaii, this couple celebrated their love with a traditional luau wedding that honored both their heritage and their new beginning.</p>
      <p>The bride wore a crown of tropical flowers, and the groom was dressed in traditional Hawaiian attire. The ceremony included cultural elements that made it deeply meaningful.</p>
      <blockquote>"Our wedding was a celebration of love, family, and the beautiful culture that brought us together."</blockquote>
      <p>The reception featured hula dancing, fire shows, and an abundance of fresh tropical fruits and seafood. The couple's first dance was barefoot on the warm sand.</p>
      <p>This wedding captured the spirit of aloha and showed how different cultures can come together in celebration.</p>
    `
  },
  {
    id: 6,
    title: "Tropical Paradise Wedding in Hawaii",
    image: "images/c11.JPG",
    author: "Ryan Johnson",
    date: "June 8, 2024",
    content: `
      <p>On the lush islands of Hawaii, this couple celebrated their love with a traditional luau wedding that honored both their heritage and their new beginning.</p>
      <p>The bride wore a crown of tropical flowers, and the groom was dressed in traditional Hawaiian attire. The ceremony included cultural elements that made it deeply meaningful.</p>
      <blockquote>"Our wedding was a celebration of love, family, and the beautiful culture that brought us together."</blockquote>
      <p>The reception featured hula dancing, fire shows, and an abundance of fresh tropical fruits and seafood. The couple's first dance was barefoot on the warm sand.</p>
      <p>This wedding captured the spirit of aloha and showed how different cultures can come together in celebration.</p>
    `
  }
];

export default blogPosts;
