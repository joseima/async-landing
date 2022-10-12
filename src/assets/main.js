// const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&filter=uploads_latest&maxResults=9'

// const content = null || document.getElementById('content');

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'de690f4184msh4bcea83068b0d1fp1d29c4jsna7151656550c',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

// async function fetchData(urlAPI) {
//     const response = await fetch(urlAPI, options);
//     const data = await response.json();
//     return data;
// }

// (async () => {
//     try {
//         const videos = await fetchData(API);
//         console.log(videos);
//         let view = `
//         ${videos.items.map(video => `
//         <div class="group relative">
//         <div
//         class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//         <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
//         </div>
//         <div class="mt-4 flex justify-between">
//         <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//             ${video.snippet.title}
//         </h3>
//             </div>
//         </div>
//         `).slice(0,4).join('')}
       
//         `;
//         content.innerHTML= view;
//     } catch (error) {
//         console.log(error);
//     }
// })();

// // fetch('', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));


const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();