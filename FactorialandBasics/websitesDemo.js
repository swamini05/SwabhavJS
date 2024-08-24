let websites = [
    ['Google', 'https://www.google.co.in/'],
    ['YouTube', 'https://www.youtube.com/'],
    ['Facebook', 'https://www.facebook.com/'],
    ['Amazon', 'https://www.amazon.com/']
];
let webList = document.getElementById('links');
let html = ``;
websites.forEach((website) => {
    html += `<a href="${website[1]}">${website[0]}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </a><br>`;
});
webList.innerHTML = html