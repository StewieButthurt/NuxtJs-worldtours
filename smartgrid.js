const smartgrid = require('smart-grid'); 

smartgrid('./assets', {
	outputStyle: 'sass',
	mobileFirst: false,
	columns: 12,
	offset: "10px",
	container: {
		maxWidth: "1320px"
	},
    breakPoints: {
    	lg: {
    		width: "1200px"
    	},
        md: {
            width: "992px",
            fields: "15px"
        },
        ms: {
        	width: "778px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "320px"
        }
    }
});
 