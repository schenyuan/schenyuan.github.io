const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true, //自动播放
  audio: [
    {
      name: 'Take me hand',
      artist: 'Cecile Corbel',
      url: 'https://m10.music.126.net/20231217220719/248105b5db09cd443777a8ad788d0996/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2746026796/160d/0789/f690/643cc36b0e9ac6d9590aba43bb25063e.m4a',
      cover: 'https://p2.music.126.net/KSsA5Ik_EchOVPM57DuYJQ==/109951165035087426.jpg?param=200y200',
    },
  ]
});
