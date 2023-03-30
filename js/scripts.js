const lifeImage = '<img src="https://static01.nyt.com/images/2023/03/29/multimedia/nashville-guns-01-wtbp/nashville-guns-01-wtbp-superJumbo.jpg?quality=75&auto=webp" />'

const libertyImage = '<img src="https://static01.nyt.com/images/2022/06/24/us/24evening-briefing-abortion5/24evening-briefing-abortion5-superJumbo.jpg?quality=75&auto=webp" />'

const happinessImage = '<img src="https://static01.nyt.com/images/2021/09/14/nyregion/00rikers-explainer/00rikers-explainer-superJumbo.jpg?quality=75&auto=webp" />'

function setImage(imageHtml) {
    $('#right').empty().prepend(imageHtml)
}

$('.Life').on('click', function () {
    setImage(lifeImage)
})

$('.Liberty').on('click', function () {
    setImage(libertyImage)
})

$('.Happiness').on('click', function () {
    setImage(happinessImage)
})
