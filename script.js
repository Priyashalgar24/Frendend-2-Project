const headers = ['ID', 'Name', 'Email', 'Gender', 'Class', 'Marks', 'Passing'];
const jsonData =  [

    { 'id': 1, 'Name': 'Chadwick', 'email': 'cayre0@cam.ac.uk', 'gender': 'Male', 'class': 11, 'marks': 18, 'passing': false },
    { 'id': 2, 'Name': 'Abrahan', 'email': 'aseabrocke1@ocn.ne.jp', 'gender': 'Male', 'class': 3, 'marks': 27, 'passing': true },
    { 'id': 3, 'Name': 'Nathanael', 'email': 'nlaye2@typepad.com', 'gender': 'Male', 'class': 10, 'marks': 89, 'passing': false },
    { 'id': 4, 'Name': 'Luigi', 'email': 'lbalcers3@reverbnation.com', 'gender': 'Agender', 'class': 8, 'marks': 30, 'passing': false },
    { 'id': 5, 'Name': 'Adam', 'email': 'agurg4@xrea.com', 'gender': 'Male', 'class': 3, 'marks': 10, 'passing': true },
    { 'id': 6, 'Name': 'Kev', 'email': 'khaitlie5@booking.com', 'gender': 'Male', 'class': 1, 'marks': 59, 'passing': true },
    { 'id': 7, 'Name': 'Reinhard', 'email': 'rroyl6@sun.com', 'gender': 'Male', 'class': 4, 'marks': 60, 'passing': true },
    { 'id': 8, 'Name': 'Nonah', 'email': 'nkilmartin7@washington.edu', 'gender': 'Female', 'class': 9, 'marks': 4, 'passing': false },
    { 'id': 9, 'Name': 'Clo', 'email': 'cfalkinder8@mysql.com', 'gender': 'Female', 'class': 6, 'marks': 9, 'passing': false },
    { 'id': 10, 'Name': 'Clyve', 'email': 'cdedney9@europa.eu', 'gender': 'Male', 'class': 12, 'marks': 57, 'passing': false },
    { 'id': 11, 'Name': 'Vincenz', 'email': 'vsurphlissa@soup.io', 'gender': 'Male', 'class': 4, 'marks': 2, 'passing': true },
    { 'id': 12, 'Name': 'Helene', 'email': 'hgriffittsb@umn.edu', 'gender': 'Female', 'class': 12, 'marks': 80, 'passing': true },
    { 'id': 13, 'Name': 'Lydia', 'email': 'lpamphilonc@mit.edu', 'gender': 'Female', 'class': 5, 'marks': 81, 'passing': false },
    { 'id': 14, 'Name': 'Dov', 'email': 'dcubbinid@theguardian.com', 'gender': 'Genderqueer', 'class': 12, 'marks': 25, 'passing': true },
    { 'id': 15, 'Name': 'Mimi', 'email': 'mmonksfielde@mapquest.com', 'gender': 'Female', 'class': 4, 'marks': 52, 'passing': true },
    { 'id': 16, 'Name': 'Marguerite', 'email': 'mevansonf@huffingtonpost.com', 'gender': 'Female', 'class': 10, 'marks': 96, 'passing': true },
    {'id': 17, 'Name': 'Michele', 'email': 'mharesnaipg @networkadvertising.org', 'gender': 'Male', 'class': 9, 'marks': 46, 'passing': true},
    { 'id': 18, 'Name': 'Johnna', 'email': 'jbriarsh@behance.net', 'gender': 'Agender', 'class': 9, 'marks': 77, 'passing': false },
    { 'id': 19, 'Name': 'Debee', 'email': 'dbonnieri@opensource.org', 'gender': 'Female', 'class': 2, 'marks': 35, 'passing': false },
    { 'id': 20, 'Name': 'Gunther', 'email': 'gtaverinerj@google.ca', 'gender': 'Male', 'class': 1, 'marks': 72, 'passing': true },
    { 'id': 21, 'Name': 'Dominick', 'email': 'dcoppockk@mlb.com', 'gender': 'Genderqueer', 'class': 9, 'marks': 10, 'passing': false },
    { 'id': 22, 'Name': 'Harp', 'email': 'hcolebrookl@gravatar.com', 'gender': 'Male', 'class': 4, 'marks': 83, 'passing': false },
    { 'id': 23, 'Name': 'Carlen', 'email': 'cbakeupm@craigslist.org', 'gender': 'Female', 'class': 2, 'marks': 28, 'passing': false },
    { 'id': 24, 'Name': 'Mario', 'email': 'mcrambien@so-net.ne.jp', 'gender': 'Male', 'class': 9, 'marks': 33, 'passing': true },
    { 'id': 25, 'Name': 'Maribel', 'email': 'mhindenburgo@squarespace.com', 'gender': 'Female', 'class': 3, 'marks': 24, 'passing': true },
    { 'id': 26, 'Name': 'Merilee', 'email': 'mlukockp@rambler.ru', 'gender': 'Female', 'class': 6, 'marks': 25, 'passing': false },
    { 'id': 27, 'Name': 'Carroll', 'email': 'cwaterfieldq@paypal.com', 'gender': 'Male', 'class': 5, 'marks': 93, 'passing': false },
    { 'id': 28, 'Name': 'Sandor', 'email': 'smuldoonr@usda.gov', 'gender': 'Male', 'class': 9, 'marks': 52, 'passing': true },
    { 'id': 29, 'Name': 'Hagan', 'email': 'hghidinis@upenn.edu', 'gender': 'Male', 'class': 8, 'marks': 100, 'passing': true },
    { 'id': 30, 'Name': 'Odetta', 'email': 'omcnamarat@hugedomains.com', 'gender': 'Genderfluid', 'class': 11, 'marks': 48, 'passing': false },
    { 'id': 31, 'Name': 'Rozelle', 'email': 'rmelleru@uol.com.br', 'gender': 'Bigender', 'class': 6, 'marks': 81, 'passing': true },
    { 'id': 32, 'Name': 'Burnaby', 'email': 'bhebbronv@toplist.cz', 'gender': 'Male', 'class': 10, 'marks': 6, 'passing': false },
    { 'id': 33, 'Name': 'Tommy', 'email': 'tsowleyw@drupal.org', 'gender': 'Male', 'class': 10, 'marks': 42, 'passing': true },
    { 'id': 34, 'Name': 'Cristen', 'email': 'cvigiettix@cnn.com', 'gender': 'Female', 'class': 6, 'marks': 13, 'passing': false },
    { 'id': 35, 'Name': 'Kipp', 'email': 'kshipseyy@wunderground.com', 'gender': 'Male', 'class': 8, 'marks': 72, 'passing': true },
    { 'id': 36, 'Name': 'Willi', 'email': 'wdeeprosez@youku.com', 'gender': 'Female', 'class': 1, 'marks': 50, 'passing': false },
    { 'id': 37, 'Name': 'Julita', 'email': 'jcoverdale10@etsy.com', 'gender': 'Female', 'class': 7, 'marks': 9, 'passing': false },
    { 'id': 38, 'Name': 'Kippy', 'email': 'kdysart11@springer.com', 'gender': 'Male', 'class': 2, 'marks': 77, 'passing': true },
    { 'id': 39, 'Name': 'Xena', 'email': 'xcleen12 @usatoday.com', 'gender': 'Female', 'class': 11, 'marks': 25, 'passing': false },
    { 'id': 40, 'Name': 'Deane', 'email': 'dhallbird13@reference.com', 'gender': 'Male', 'class': 2, 'marks': 99, 'passing': false },
    { 'id': 41, 'Name': 'Brigham', 'email': 'bboggish14@xinhuanet.com', 'gender': 'Male', 'class': 4, 'marks': 96, 'passing': false },
    { 'id': 42, 'Name': 'Arliene', 'email': 'astubbins15@yellowpages.com', 'gender': 'Female', 'class': 6, 'marks': 39, 'passing': false },
    { 'id': 43, 'Name': 'Keefer', 'email': 'kmensler16@moonfruit.com', 'gender': 'Male', 'class': 10, 'marks': 9, 'passing': false },
    { 'id': 44, 'Name': 'De witt', 'email': 'dlethby17@biblegateway.com', 'gender': 'Male', 'class': 5, 'marks': 15, 'passing': true },
    { 'id': 45, 'Name': 'Karry', 'email': 'kalflat18@eepurl.com', 'gender': 'Female', 'class': 9, 'marks': 28, 'passing': false },
    { 'id': 46, 'Name': 'Etan', 'email': 'ewardell19@usgs.gov', 'gender': 'Male', 'class': 11, 'marks': 26, 'passing': false },
    { 'id': 47, 'Name': 'Corney', 'email': 'ckollaschek1a@discuz.net', 'gender': 'Male', 'class': 3, 'marks': 34, 'passing': true },
    { 'id': 48, 'Name': 'Robenia', 'email': 'rscain1b@yelp.com', 'gender': 'Female', 'class': 4, 'marks': 30, 'passing': true },
    { 'id': 49, 'Name': 'Marj', 'email': 'mcheltnam1c@wunderground.com', 'gender': 'Female', 'class': 2, 'marks': 7, 'passing': false },
    { 'id': 50, 'Name': 'Graham', 'email': 'glethem1d@hp.com', 'gender': 'Bigender', 'class': 4, 'marks': 10, 'passing': true },
    { 'id': 51, 'Name': 'Mathew', 'email': 'msadry1e@alexa.com', 'gender': 'Male', 'class': 2, 'marks': 88, 'passing': true },
    { 'id': 52, 'Name': 'Alberta', 'email': 'adalessio1f@dagondesign.com', 'gender': 'Polygender', 'class': 2, 'marks': 82, 'passing': true },
    { 'id': 53, 'Name': 'Reube', 'email': 'rbrabyn1g@jugem.jp', 'gender': 'Male', 'class': 10, 'marks': 71, 'passing': true },
    { 'id': 54, 'Name': 'Rab', 'email': 'rcluney1h@slate.com', 'gender': 'Male', 'class': 6, 'marks': 59, 'passing': false },
    { 'id': 55, 'Name': 'Honey', 'email': 'hfrissell1i@senate.gov', 'gender': 'Female', 'class': 2, 'marks': 82, 'passing': true },
    { 'id': 56, 'Name': 'Leda', 'email': 'ljehan1j@feedburner.com', 'gender': 'Female', 'class': 5, 'marks': 13, 'passing': false },
    { 'id': 57, 'Name': 'Whitby', 'email': 'wgrogono1k@paypal.com', 'gender': 'Male', 'class': 4, 'marks': 44, 'passing': true },
    { 'id': 58, 'Name': 'Amalea', 'email': 'asainz1l@miitbeian.gov.cn', 'gender': 'Female', 'class': 2, 'marks': 58, 'passing': true },
    { 'id': 59, 'Name': 'Abbe', 'email': 'aguerner1m@4shared.com', 'gender': 'Male', 'class': 8, 'marks': 71, 'passing': false },
    { 'id': 60, 'Name': 'Sholom', 'email': 'spouck1n@house.gov', 'gender': 'Male', 'class': 9, 'marks': 68, 'passing': true },
    { 'id': 61, 'Name': 'Flor', 'email': 'fqueenborough1o@fc2.com', 'gender': 'Female', 'class': 6, 'marks': 77, 'passing': true },
    { 'id': 62, 'Name': 'Rupert', 'email': 'rbrien1p@princeton.edu', 'gender': 'Male', 'class': 3, 'marks': 62, 'passing': false },
    { 'id': 63, 'Name': 'Loralee', 'email': 'lpetrasch1q@uol.com.br', 'gender': 'Polygender', 'class': 4, 'marks': 43, 'passing': false },
    { 'id': 64, 'Name': 'Christoffer',  'email': 'cstain1r@vk.com', 'gender': 'Male', 'class': 8, 'marks': 77, 'passing': true },
    { 'id': 65, 'Name': 'Iver', 'email': 'ifeldmark1s@cpanel.net', 'gender': 'Male', 'class': 4, 'marks': 99, 'passing': true },
    { 'id': 66, 'Name': 'Mikol', 'email': 'mdoherty1t@ning.com', 'gender': 'Male', 'class': 4, 'marks': 3, 'passing': false },
    { 'id': 67, 'Name': 'Alysia', 'email': 'adudhill1u@oracle.com', 'gender': 'Genderfluid', 'class': 12, 'marks': 21, 'passing': false },
    { 'id': 68, 'Name': 'Silvio', 'email': 'syegoshin1v@github.io', 'gender': 'Male', 'class': 5, 'marks': 38, 'passing': true },
    { 'id': 69, 'Name': 'Darbie', 'email': 'dstarkey1w@cbc.ca', 'gender': 'Female', 'class': 3, 'marks': 52, 'passing': false },
    { 'id': 70, 'Name': 'Sophi', 'email': 'sfucher1x@wikia.com', 'gender': 'Female', 'class': 12, 'marks': 31, 'passing': true },
    { 'id': 71, 'Name': 'Warner', 'email': 'wdirkin1y@nydailynews.com', 'gender': 'Male', 'class': 6, 'marks': 56, 'passing': false },
    { 'id': 72, 'Name': 'Randal', 'email': 'rsalmons1z@cargocollective.com', 'gender': 'Male', 'class': 12, 'marks': 5, 'passing': true },
    { 'id': 73, 'Name': 'Ogden', 'email': 'orowthorne20@state.tx.us', 'gender': 'Male', 'class': 3, 'marks': 12, 'passing': false },
    { 'id': 74, 'Name': 'Adelaide', 'email': 'abrewster21@phpbb.com', 'gender': 'Female', 'class': 5, 'marks': 82, 'passing': true },
    { 'id': 75, 'Name': 'Maximilian', 'email': 'mberesfore22@ox.ac.uk', 'gender': 'Male', 'class': 1, 'marks': 51, 'passing': true },
    { 'id': 76, 'Name': 'Gill', 'email': 'gdoneld23@cnn.com', 'gender': 'Male', 'class': 9, 'marks': 35, 'passing': true },
    { 'id': 77, 'Name': 'Garrick', 'email': 'gferreo24@fastcompany.com', 'gender': 'Male', 'class': 8, 'marks': 87, 'passing': true },
    { 'id': 78, 'Name': 'Bartel', 'email': 'blugard25@typepad.com', 'gender': 'Male', 'class': 12, 'marks': 37, 'passing': false },
    { 'id': 79, 'Name': 'Herve', 'email': 'hbeller26@geocities.com', 'gender': 'Male', 'class': 1, 'marks': 70, 'passing': false },
    { 'id': 80, 'Name': 'Janenna', 'email': 'jpallesen27@shinystat.com', 'gender': 'Female', 'class': 3, 'marks': 68, 'passing': true },
    { 'id': 81, 'Name': 'Karly', 'email': 'kbelmont28@booking.com', 'gender': 'Female', 'class': 6, 'marks': 52, 'passing': true },
    { 'id': 82, 'Name': 'Yanaton', 'email': 'ygrasser29@bravesites.com', 'gender': 'Male', 'class': 5, 'marks': 43, 'passing': true },
    { 'id': 83, 'Name': 'Giordano', 'email': 'gstanlack2a@wordpress.org', 'gender': 'Male', 'class': 2, 'marks': 17, 'passing': false },
    { 'id': 84, 'Name': 'Vergil', 'email': 'vkelner2b@ihg.com', 'gender': 'Male', 'class': 10, 'marks': 85, 'passing': true },
    { 'id': 85, 'Name': 'Marjorie', 'email': 'mcrimes2c@lulu.com', 'gender': 'Female', 'class': 10, 'marks': 76, 'passing': false },
    { 'id': 86, 'Name': 'Cullen', 'email': 'clawlings2d@ow.ly', 'gender': 'Male', 'class': 9, 'marks': 66, 'passing': false },
    { 'id': 87, 'Name': 'Shayla', 'email': 'stuft2e@plala.or.jp', 'gender': 'Polygender', 'class': 11, 'marks': 67, 'passing': false },
    { 'id': 88, 'Name': 'Martguerita', 'email': 'mseyffert2f@springer.com', 'gender': 'Female', 'class': 12, 'marks': 70, 'passing': false },
    { 'id': 89, 'Name': 'Valera', 'email': 'vscullard2g@europa.eu', 'gender': 'Female', 'class': 10, 'marks': 85, 'passing': true },
    { 'id': 90, 'Name': 'Saleem', 'email': 'spocklington2h@time.com', 'gender': 'Male', 'class': 9, 'marks': 79, 'passing': false },
    { 'id': 91, 'Name': 'Vincenz', 'email': 'vmangeney2i@studiopress.com', 'gender': 'Male', 'class': 2, 'marks': 15, 'passing': true },
    { 'id': 92, 'Name': 'Hildy', 'email': 'hskrzynski2j@1und1.de', 'gender': 'Female', 'class': 10, 'marks': 93, 'passing': true },
    { 'id': 93, 'Name': 'Devan', 'email': 'dcuer2k@jigsy.com', 'gender': 'Female', 'class': 5, 'marks': 71, 'passing': false },
    { 'id': 94, 'Name': 'Samuele', 'email': 'swoodward2l@prweb.com', 'gender': 'Male', 'class': 1, 'marks': 51, 'passing': true },
    { 'id': 95, 'Name': 'Skell', 'email': 'soxby2m@1688.com', 'gender': 'Male', 'class': 10, 'marks': 53, 'passing': false },
    { 'id': 96, 'Name': 'Doria', 'email': 'dlabbe2n@sun.com', 'gender': 'Female', 'class': 7, 'marks': 95, 'passing': false },
    { 'id': 97, 'Name': 'Livy', 'email': 'lmaccleay2o@bravesites.com', 'gender': 'Female', 'class': 6, 'marks': 50, 'passing': true },
    { 'id': 98, 'Name': 'Drugi', 'email': 'dbordone2p@slate.com', 'gender': 'Male', 'class': 4, 'marks': 63, 'passing': true },
    { 'id': 99, 'Name': 'Gordon', 'email': 'gvieyra2q@geocities.com', 'gender': 'Male', 'class': 11, 'marks': 59, 'passing': false },
    { 'id': 100, 'Name': 'Zoe', 'email': 'zmoorhead2r @sfgate.com', 'gender': 'Female', 'class': 8, 'marks': 43, 'passing': true },


];

function generateTable() {
    const tableHead = document.querySelector('#studentTable thead');
    const tableBody = document.querySelector('#studentTable tbody');

    // Generate table headers
    let headerRow = '<tr>';
    for (const header of headers) {
        headerRow += `<th>${header}</th>`;
    }
    headerRow += '</tr>';
    tableHead.innerHTML = headerRow;

    // Generate table rows
    let tableRows = '';
    for (const data of jsonData) {
        tableRows += '<tr>';
        for (const header of headers) {
            tableRows += `<td>${data[header]}</td>`;
        }
        tableRows += '</tr>';
    }
    tableBody.innerHTML = tableRows;
}

function searchData() {
    const searchInput = document.querySelector('#searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = jsonData.filter(data => {
        return headers.some(header => {
            return data[header].toLowerCase().includes(searchTerm);
        });
    });
    // Update the table with filtered data
    // You can use generateTable() to render the filtered data
}

// Call generateTable() to initially populate the table
generateTable();
