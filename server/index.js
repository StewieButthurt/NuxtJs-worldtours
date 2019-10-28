const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const request = require('request');
const consola = require('consola');
const validator = require('validator');
const nodemailer = require('nodemailer');
const { Nuxt, Builder } = require('nuxt');



const app = express();


// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

function weatherForecast(req, res) {
  let lat = req.body.lat;
  let lon = req.body.lon;
  request({url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d916680774dc56e400315de090fc45d`}, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       var info = JSON.parse(body);
       res.send({
         temp: info.main.temp,
         icon: info.weather[0].icon
       })
     } 
  });
}

app.post('/tours', function(req, res) {
  weatherForecast(req, res);
})


// считываем и возвращаем нужный файл
class Course {
  static getAll(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '.', 'data', `${file}`),
        'utf-8',
        (err, content) => {
          if(err) {
            reject(err) 
          } else {
            resolve(JSON.parse(content))
          }

        }
      )
    })
  
  }
}

// делаем запрос на считывание файла и возврщаем контент
async function getTour({req, res}, {tour}) {
    let result = await Course.getAll(tour)
    res.send({
      result
    })
}


app.get('/infoTourUAE', function(req, res) {
  let tour = 'tour-uae.json'
  getTour({req, res}, {tour})
})

app.get('/infoTourGreece', function(req, res) {
  let tour = 'tour-greece.json'
  getTour({req, res}, {tour})
})

app.get('/infoTourEgypt', function(req, res) {
  let tour = 'tour-egypt.json'
  getTour({req, res}, {tour})
})

app.get('/infoTourItaly', function(req, res) {
  let tour = 'tour-italy.json'
  getTour({req, res}, {tour})
})

app.get('/infoTourThailand', function(req, res) {
  let tour = 'tour-thailand.json'
  getTour({req, res}, {tour})
})

app.get('/infoTourTurkey', function(req, res) {
  let tour = 'tour-turkey.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/abuDhabiHotels', function(req, res) {
  let tour = 'hotels-abu-dhabi.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/athensHotels', function(req, res) {
  let tour = 'hotels-athens.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/bangkokHotels', function(req, res) {
  let tour = 'hotels-bangkok.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/cairoHotels', function(req, res) {
  let tour = 'hotels-cairo.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/dubaiHotels', function(req, res) {
  let tour = 'hotels-dubai.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/florenceHotels', function(req, res) {
  let tour = 'hotels-florence.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/huttaHotels', function(req, res) {
  let tour = 'hotels-hutta.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/luxorHotels', function(req, res) {
  let tour = 'hotels-luxor.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/pattayaHotels', function(req, res) {
  let tour = 'hotels-pattaya.json'
  getTour({req, res}, {tour})
})


app.get('/hotels/phuketHotels', function(req, res) {
  let tour = 'hotels-phuket.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/rethymnoHotels', function(req, res) {
  let tour = 'hotels-rethymno.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/romeHotels', function(req, res) {
  let tour = 'hotels-rome.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/tabaHotels', function(req, res) {
  let tour = 'hotels-taba.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/thessalonikiHotels', function(req, res) {
  let tour = 'hotels-thessaloniki.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/milanHotels', function(req, res) {
  let tour = 'hotels-milan.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/istanbulHotels', function(req, res) {
  let tour = 'hotels-istanbul.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/alanyaHotels', function(req, res) {
  let tour = 'hotels-alanya.json'
  getTour({req, res}, {tour})
})

app.get('/hotels/antalyaHotels', function(req, res) {
  let tour = 'hotels-antalya.json'
  getTour({req, res}, {tour})
})

// обработка формы и отправка формы на почту
app.post('/form', async (req, res) => {
  if(!req.body.recaptchaToken) {
    return res.status(400).json({message: "recaptchaToken is required"});
  }
  let counter = 0;
  let locale =  ['ru-RU'];
  for(let i = 0; i < req.body.info.length; i++) {
    if(req.body.info[i].title === 'ИМЯ') {
      if( validator.isAlpha(req.body.info[i].value, locale) === true) {
        counter++
      } 
    } else if(req.body.info[i].title === 'E-MAIL') {
      if( validator.isEmail(req.body.info[i].value) === true) {
        counter++
      }
    } else if(req.body.info[i].title === '+7XXXXXXXXXX') {
      if( validator.isNumeric(req.body.info[i].value) === true) {
        counter++
      }
    }
  }
  if(req.body.info.length === counter) {
    const verifyCaptchaOptions = {
           uri: "https://www.google.com/recaptcha/api/siteverify",
           json: true,
           form: {
               secret: '6LfaJb4UAAAAAE80O_2nSLZqZn6TbfcdTFoAVTqP',
               response: req.body.recaptchaToken
           }
    };

    request.post(verifyCaptchaOptions, function(err, response, body) {
                if (err) {
                    return res.status(500).json({message: "oops, something went wrong on our side"});
                }

                if (!body.success) {
                    return res.status(500).json({message: body["error-codes"].join(".")});
                }

               if(res.status(201)) {
                  const output = `
                    <p>Заявка на туар</p>
                    <h3>Детали</h3>
                    <ul>
                      <li>Имя: ${req.body.info[0].value}</li>
                      <li>Почта: ${req.body.info[1].value}</li>
                      <li>Телефон: ${req.body.info[2].value}</li>
                      <li>Поездка из ${req.body.OutTown} в ${req.body.InTown} (${req.body.country})</li>
                      <li>Желаемая дата приезда: ${req.body.coming}</li>
                      <li>Желаемая дата отъезда: ${req.body.departure}</li>
                      <li>Кол-во человек: ${req.body.numberPeople}</li>
                      <li>Выбранный отель: ${req.body.hotel}</li>
                  `;

                  let smtpTransport;

                  try {
                    smtpTransport = nodemailer.createTransport({
                      host: 'smtp.mail.ru',
                      port: 465,
                      secure: true,
                      auth: {
                        user: "ckotieika@mail.ru",
                        pass: "Iron1996"
                      }
                    });
                  } catch (e) {
                    let message = false;
                    console.log('cath(e)')
                    res.send({
                      message
                    })

                    return console.log('Error: ' + e.name + ":" + e.message);
                  }

                  let mailOptions = {
                    from: 'ckotieika@mail.ru',
                    to: 'nosoff.slawa@yandex.ru',
                    subject: 'Заявка на тур',
                    text: 'Заявка на тур',
                    html: output
                  };

                  smtpTransport.sendMail(mailOptions, (error, info) => {
                    if( error ) {
                      console.log(' smtpTransport.sendMail(')
                      let message = false;
                      console.log('error')

                      res.send({
                        message
                      })

                      return console.log('Error');
                    } else {
                      console.log('Message sent: %s', info.messageId);
                      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    }
                  let message = true
                      res.send({
                        message
                      })
                  })
               }
               

             
            }
        );

  
  }
  
})
async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
