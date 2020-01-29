const intervals = 7
const reloadTime = 7000

;(function() {
  const progressBar = document.getElementById('load-progress')

  let i = 0
  setInterval(() => {
    i = (i + 1) % (intervals + 1)

    if (i === 0 && Math.random() > 0.9) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }

    progressBar.style.width = `${i * (100 / intervals)}%`
  }, reloadTime / intervals)
})()
