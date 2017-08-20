export function titleize(str) {
	return String(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(strStart) {
    	return strStart.toUpperCase();
  	});
}