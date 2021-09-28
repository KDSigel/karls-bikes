const { app } = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('get routes', () => {
    it('the karlsbikes endpoint returns all bikes', async() => {
        const myData = [
            {
                id: 1,
                year: '2007',
                make: 'Trek',
                model: '1600 WSD',
                color: 'Mineral Blue',
                type: 'Road',
                img: 'https://archive.trekbikes.com/images/bikes/2007/large/1600wsd_mineralblue.jpg',
                ridable: false
                },
                {
                id: 2,
                year: '2006',
                make: 'Fuji',
                model: 'Absolute 3.0',
                color: 'Black',
                type: 'Road',
                img: 'https://www.insideasi.com/downloads/bikes/Fuji/2006/absolute-30/absolute-30-lowres.jpg',
                ridable: true
                },
                {
                id: 3,
                year: '1976',
                make: 'Sekai',
                model: '2500 Grand Tour',
                color: 'Black (now white)',
                type: 'Road',
                img: 'https://1.bp.blogspot.com/-UQOVL6nUhck/W6pf97lsptI/AAAAAAAArwk/bGDKwHufUV8lBOIGrEFRGxDxcy3rW7FLQCLcBGAs/s1600/Gary%2BFisher%2BReview.jpg',
                ridable: false
                },
                {
                id: 4,
                year: '2004',
                make: 'Cannondale',
                model: 'F800 Furio',
                color: 'Blue w/ flames',
                type: 'Mountain',
                img: 'https://figinibike.com/wp-content/uploads/2018/03/37-F800-ALL-MOUNTAIN-FURIO-750.jpg',
                ridable: false
                },
                {
                id: 5,
                year: '1988',
                make: 'Apollo',
                model: 'Everest',
                color: 'Yellow (now black)',
                type: 'Mountain',
                img: 'https://digitalhippie.net/wp-content/uploads/2011/05/1988-mtb-tour-ernst-apollo3.jpg',
                ridable: false
                },
                {
                id: 6,
                year: '2005',
                make: 'Electra',
                model: 'Townie',
                color: 'Silver',
                type: 'Cruiser',
                img: 'https://m.media-amazon.com/images/I/71jUDoq5XRL._AC_SL1465_.jpg',
                ridable: false
                },
                {
                id: 7,
                year: '?',
                make: 'San Eagle',
                model: '?',
                color: 'Blue',
                type: 'Folding',
                img: 'https://3.bp.blogspot.com/-cgr3v3ZzHQM/UilJMLMYphI/AAAAAAAADOI/zeN2DDCwCu0/s1600/2028-blue+2.JPG',
                ridable: true
                }
        ];
        const response = await request.get('/karlsbikes');

        expect(response.body).toEqual(myData);
    });

    it('the karlsbikes/id endpoint returns all specific bike', async() => {
        const myData = {
            id: 3,
                year: '1976',
                make: 'Sekai',
                model: '2500 Grand Tour',
                color: 'Black (now white)',
                type: 'Road',
                img: 'https://1.bp.blogspot.com/-UQOVL6nUhck/W6pf97lsptI/AAAAAAAArwk/bGDKwHufUV8lBOIGrEFRGxDxcy3rW7FLQCLcBGAs/s1600/Gary%2BFisher%2BReview.jpg',
                ridable: false
        };
        const response = await request.get('/karlsbikes/3');

        expect(response.body).toEqual(myData);
    });
});