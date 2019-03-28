const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hongxiu';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  	//Insert a Dcoment
  	// Get the documents collection
  	const collection = db.collection('users');

  	collection.insertMany([{name:"Tom",age:18,major:'sport'},{name:"Jack",age:18,major:'sport'}],(err,result)=>{
  		if(err){
  			console.log('insertMany err:::',err)
  		}else{
  			console.log(result)
  		}


  		client.close();
  	})

});







