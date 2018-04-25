var paginate = require('../lib/jw-paginate');

var totalItems = 150;
var currentPage = 7;

console.log('demo with default page size and max pages:\n');
console.log(paginate(totalItems, currentPage));

var pageSize = 15;
var maxPages = 5;

console.log('\n\ndemo with custom page size and max pages:\n');
console.log(paginate(totalItems, currentPage, pageSize, maxPages));