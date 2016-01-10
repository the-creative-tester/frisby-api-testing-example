var frisby = require('frisby');

frisby.create('GET: International Space Station Current Location')
          .get('http://api.open-notify.org/iss-now')
          .expectStatus(200)
          .expectHeaderContains('content-type', 'application/json')
          .expectJSONTypes({
          	message: String,
          	timestamp: Number,
			iss_position: {
				latitude: Number,
   				longitude: Number
   			}
          })
          .expectJSON({
          	message: "success"
          })
          .toss();