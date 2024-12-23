let isRedYellow = true;

        function toggleBackgroundColor() {
            if (isRedYellow) {
                document.body.style.background = 'linear-gradient(90deg, #07037a, #086903, #07037a)';

                document.querySelector('.header-top').style.backgroundColor = 'black';
                document.querySelector('.header-top').style.color = 'white';
                document.querySelector('.dropdown-line1').style.backgroundColor = 'white';
                document.querySelector('.dropdown-line2').style.backgroundColor = 'white';
                document.querySelector('.dropdown-line3').style.backgroundColor = 'white';

                document.querySelector('footer').style.backgroundColor = 'black';
                document.querySelectorAll('.right a').forEach(link => {
                    link.style.color = 'white';
                });
                document.querySelector('footer').style.color = 'white';

                document.querySelector('.footernav1').style.borderTop = '2px solid white';

                document.querySelector('.nav1').style.borderBottom = '2px solid white';
                document.querySelector('.nav2').style.borderBottom = '2px solid white';
                document.querySelector('.nav3').style.borderBottom = '2px solid white';
                document.querySelector('.nav4').style.borderBottom = '2px solid white';
                document.querySelector('.nav5').style.borderBottom = '2px solid white';

                document.querySelector('.mobile-menu').style.backgroundColor = 'black';

                document.querySelector('.nav1 a').style.color = 'white';
                document.querySelector('.nav2 a').style.color = 'white';
                document.querySelector('.nav3 a').style.color = 'white';
                document.querySelector('.nav4 a').style.color = 'white';
                document.querySelector('.nav5 a').style.color = 'white';
                document.querySelector('.nav6 a').style.color = 'white';
            } else {
                document.body.style.background = 'linear-gradient(90deg, #b90529, #ed6104, #b90529)';

                document.querySelector('.header-top').style.backgroundColor = '#ececec';
                document.querySelector('.header-top').style.color = 'black';
                document.querySelector('.dropdown-line1').style.backgroundColor = 'black';
                document.querySelector('.dropdown-line2').style.backgroundColor = 'black';
                document.querySelector('.dropdown-line3').style.backgroundColor = 'black';

                document.querySelector('footer').style.backgroundColor = '#ececec';
                document.querySelectorAll('.right a').forEach(link => {
                    link.style.color = 'black';
                });
                document.querySelector('footer').style.color = 'black';

                document.querySelector('.footernav1').style.borderTop = '2px solid black';

                document.querySelector('.nav1').style.borderBottom = '2px solid black';
                document.querySelector('.nav2').style.borderBottom = '2px solid black';
                document.querySelector('.nav3').style.borderBottom = '2px solid black';
                document.querySelector('.nav4').style.borderBottom = '2px solid black';
                document.querySelector('.nav5').style.borderBottom = '2px solid black';

                document.querySelector('.mobile-menu').style.backgroundColor = 'white';

                document.querySelector('.nav1 a').style.color = 'black';
                document.querySelector('.nav2 a').style.color = 'black';
                document.querySelector('.nav3 a').style.color = 'black';
                document.querySelector('.nav4 a').style.color = 'black';
                document.querySelector('.nav5 a').style.color = 'black';
                document.querySelector('.nav6 a').style.color = 'black';
            }
            isRedYellow = !isRedYellow;
        }