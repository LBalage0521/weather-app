import express from 'express';
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

let forecasts = [
    {
      city: 'Seattle',
      location: 'Washington, United States',
      weather: [
        { temp: 11, icon: 'cloudy', message: 'Complete Grey', date: '05:00 AM' },
        { temp: 11, icon: 'cloudy', message: 'Just stay in bed.', date: '09:00 AM' },
        { temp: 13, icon: 'cloudy', message: 'Meh...', date: '13:00 PM' },
        { temp: 12, icon: 'cloudy', message: 'Still meh...', date: '17:00 PM' },
        { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.', date: '21:00 PM' },
      ],
    },
    {
      city: 'Miami',
      location: 'Florida, United States',
      weather: [
        { temp: 33, icon: 'sunny', message: 'Hot.', date: '05:00 AM' },
        { temp: 35, icon: 'sunny', message: 'Too hot!', date: '09:00 AM' },
        { temp: 34, icon: 'sunny', message: 'Sunny.', date: '13:00 PM'  },
        { temp: 34, icon: 'sunny', message: 'Beach time!', date: '17:00 PM' },
        { temp: 35, icon: 'sunny', message: 'Here comes the sun.', date: '21:00 PM'  },
      ],
    },
    {
      city: 'Barcelona',
      location: 'Spain',
      weather: [
        { temp: 19, icon: 'sunny', message: 'Sunny.', date: '05:00 AM' },
        { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.', date: '09:00 AM' },
        { temp: 17, icon: 'sunny', message: 'So far so good.', date: '13:00 PM'  },
        { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella', date: '17:00 PM' },
        { temp: 18, icon: 'sunny', message: 'Here comes the sun.', date: '21:00 PM'  },
      ],
    },
    {
      city: 'London',
      location: 'United Kingdom',
      weather: [
        { temp: 4, icon: 'snowy', message: 'Go home winter.', date: '05:00 AM' },
        { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?', date: '09:00 AM' },
        { temp: 10, icon: 'rainy', message: 'It\'s rainy.', date: '13:00 PM'  },
        { temp: 9, icon: 'rainy', message: 'Meh...', date: '17:00 PM' },
        { temp: 11, icon: 'rainy', message: 'Meh... Again.', date: '21:00 PM'  },
      ],
    },
    {
      city: 'Budapest',
      location: 'Hungary',
      weather: [
        { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.', date: '05:00 AM' },
        { temp: 16, icon: 'rainy', message: 'Sooo... Wet.', date: '09:00 AM' },
        { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.', date: '13:00 PM'  },
        { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.', date: '17:00 PM' },
        { temp: 19, icon: 'partly_cloudy', message: 'So far so good.', date: '21:00 PM'  },
      ],
    },
];

app.get('/', (req, res) => {
    res.render('dashboard', {
      forecasts: forecasts
    });
});

app.get('/city/:city', (req, res) => {
  let pickedCity = forecasts.find((item) => item.city === req.params.city);
  res.render('details', {
    forecast: pickedCity
  });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});