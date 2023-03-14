function calculateCartPrice(userId) {
  return db.users[userId].cart.reduce((acc, val) => acc + (db.products[val.productId].priceCents * val.amount), 0) * ((100 - db.users[userId].discountPercentage) / 100)
}

const db = JSON.parse(`{
	"products": {
		"bf8h4ct34gbt2v9jhhk0": {
			"name": "Furious 5 UNS",
			"priceCents": 800
		},
		"bilo6fdfck0se40gvn2g": {
			"name": "Volador Bestia",
			"priceCents": 5000
		},
		"bfepahl34gbs92g34apg": {
			"name": "Mecha algodón para encendido",
			"priceCents": 50
		},
		"bf8h4e534gbt2v9jhhu0": {
			"name": "Barreno Cubanito",
			"priceCents": 1400
		},
		"bfi2mdt34gbs03u5mqlg": {
			"name": "Batería 25 misiles",
			"priceCents": 300
		}
	},
	"users": {
		"30361018Y": {
			"birthYear": 1990,
			"accountNumber": "1234567890",
			"cart": [
				{
					"productId": "bf8h4ct34gbt2v9jhhk0",
					"amount": 1
				},
				{
					"productId": "bilo6fdfck0se40gvn2g",
					"amount": 3
				}
			],
			"discountPercentage": 20,
			"paymentMethod": "credit",
			"paymentDate": "2025-01-01T12:00:00"
		},
		"80241940T": {
			"birthYear": 2002,
			"accountNumber": "0123456789",
			"cart": [
				{
					"productId": "bilo6fdfck0se40gvn2g",
					"amount": 10
				},
				{
					"productId": "bfepahl34gbs92g34apg",
					"amount": 1
				},
				{
					"productId": "bf8h4e534gbt2v9jhhu0",
					"amount": 7
				}
			],
			"discountPercentage": 0,
			"paymentMethod": "cash"
		},
		"29687363K": {
			"birthYear": 1754,
			"accountNumber": "1029384756",
			"cart": [
				{
					"productId": "bfi2mdt34gbs03u5mqlg",
					"amount": 1
				}
			],
			"discountPercentage": 95,
			"paymentMethod": "credit",
			"paymentDate": "2023-12-31T23:59:59"
		}
	}
}`)
