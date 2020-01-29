const intervals = 7
const intervalTime = 1000

;(function() {
  const progressBar = document.getElementById('load-progress')

  let i = 0
  setInterval(() => {
    i = (i + 1) % (intervals + 1)

    progressBar.style.width = `${i * (100 / intervals)}%`

    if (Math.random() > 0.94) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  }, intervalTime)
})()
