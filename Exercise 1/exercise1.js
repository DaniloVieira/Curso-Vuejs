new Vue({
    el: '#exercise',
    data: {
        name: 'Danilo',
        age: 36,
        //img:'https://www.google.com/search?q=floresta+vermelha&rlz=1C1CHBD_pt-PTBR847BR847&tbm=isch&source=iu&ictx=1&fir=4-unPxYHNtllCM%253A%252CvDeG91AQRaQudM%252C_&vet=1&usg=AI4_-kSDJ1ij3zoJqoI2nh1xfXFhp3DTWw&sa=X&ved=2ahUKEwjTrN3XldLiAhWtJLkGHWj5CbEQ9QEwAnoECAAQCA#imgrc=4-unPxYHNtllCM:'
        img:'C:/Users/supero/Pictures/milky-way.jpg'

    },
    methods: {
        random: function () {
            return Math.random();
        }
    }
});