// function getCompany(companyId) {
//     if (true)
//         return Promise.resolve({ name: "NIC Co" });
//     else
//         return Promise.reject("company not found");
// }

// function getUser(userId) {
//     if (0)
//         return Promise.resolve({ companyId: 10 });
//     else
//         return Promise.reject("user not found");
// }

// function getOrder(orderId) {
//     if (true)
//         return Promise.resolve({ userId: 20 });
//     else
//         return Promise.reject("order not found");
// }

// getOrder(3).then(function (order) {
//     return getUser(order.userId);
// }).then(function (user) {
//     return getCompany(user.companyId)
// }).then(function (company) {
//     console.log(company);
// }).catch(function (err) {
//     console.log(err);
// });






// // 3. Object.defineProperty
// // Set properties
// Object.defineProperty( newObject, "someKey", {
// value: "for more control of the property's behavior",
// writable: true,
// enumerable: true,
// configurable: true
// });
// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function ( obj, key, value ){
var config = {
value: value,
writable: true,
enumerable: true,
configurable: true
};
Object.defineProperty( obj, key, config );
};
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
console.log(person);

