const moment = require('moment');
// Moment complains about RFC2822/ISO date not being correct
moment.suppressDeprecationWarnings = true;

const numeral = require('numeral');

// const criteria = require('./views/data/dynamic-list-criteria.json');
// const mimetypes = require('./views/data/mimetypes.json');

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
   let filters = {}

   /* ------------------------------------------------------------------
     date filter for use in Nunjucks
     example: {{ params.date | date("DD/MM/YYYY") }}
     outputs: 01/01/1970
   ------------------------------------------------------------------ */
   filters.date = function(timestamp, format) {
     return moment(timestamp).format(format);
   }

   /* ------------------------------------------------------------------
     utility date functions
   ------------------------------------------------------------------ */
   filters.govDate = function(timestamp) {
     return moment(timestamp).format('D MMMM YYYY');
   }

   filters.govShortDate = function(timestamp) {
     return moment(timestamp).format('D MMM YYYY');
   }

   filters.govTime = function(timestamp) {
     let t = moment(timestamp);
     if(t.minutes() > 0) {
       return t.format('h:mma');
     } else {
       return t.format('ha');
     }
   }

  /* ------------------------------------------------------------------
   numeral filter for use in Nunjucks
   example: {{ params.number | numeral("0,00.0") }}
   outputs: 1,000.00
  ------------------------------------------------------------------ */
  filters.numeral = function(number, format) {
   return numeral(number).format(format);
  }


  /* ------------------------------------------------------------------
   utility functions to determine file size
  ------------------------------------------------------------------ */
  filters.fileSizeFormat = function(input, binary) {
  	let kwargs = getKwargs(arguments);
  	binary = (kwargs.binary !== undefined) ? kwargs.binary : binary;

  	let base = binary ? 1024 : 1000;
  	let bytes = parseFloat(input);
  	let units = [
  		'Bytes',
  		(binary ? 'KiB' : 'KB'),
  		(binary ? 'MiB' : 'MB'),
  		(binary ? 'GiB' : 'GB'),
  		(binary ? 'TiB' : 'TB'),
  		(binary ? 'PiB' : 'PB'),
  		(binary ? 'EiB' : 'EB'),
  		(binary ? 'ZiB' : 'ZB'),
  		(binary ? 'YiB' : 'YB')
  	];

  	if (bytes === 1) {
  		return '1 Byte';
  	} else if (bytes < base) {
  		return bytes + ' Bytes';
  	} else {
  		return units.reduce(function (match, unit, index) {
  			let size = Math.pow(base, index);
  			if (bytes >= size) {
  				return (bytes/size).toFixed(1) + ' ' + unit;
  			}
  			return match;
  		});
  	}
  }

  function getKwargs(args) {
  	let kwargs = [].pop.call(args);
  	return (typeof kwargs === 'object' && kwargs.__keywords) ? kwargs : {};
  }

  /* ------------------------------------------------------------------
   get ready for brexit criteria
  ------------------------------------------------------------------ */
  filters.parseCriteria = function(key) {

    if (!key)
      return null;

    return criteria.filter( (obj) =>
      !!~obj.key.indexOf(key.toLowerCase())
    )[0].text;

  }

  /* ------------------------------------------------------------------
    utility functions to determine document type
  ------------------------------------------------------------------ */
  filters.parseContentType = function(type, attribute = 'abbreviation') {

    if (!type)
      return null;

    let mimetype = mimetypes.filter( (obj) =>
      obj.type == type
    )[0];

    return mimetype[attribute];

  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
