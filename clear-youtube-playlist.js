// This code is heavily dependent on YouTube not changing their UI.... So it will break one day :p 

setInterval( () => {
  document.querySelector('.style-scope .ytd-playlist-video-list-renderer #button').click()
  ​
  document.querySelector('#items > ytd-menu-service-item-renderer:nth-child(3) > tp-yt-paper-item').click()
  }, 200 )
  