import Weather from './lib/weatherFetch';
import moment from 'moment';

const location = {
				state: 'GA',
				city: 'Marietta'
};

const threshold = [
	moment().subtract(11, 'day').format('YYYYMMDD'),
	moment().subtract(12, 'day').format('YYYYMMDD'),
	moment().subtract(13, 'day').format('YYYYMMDD')
]

const date = moment().subtract(1, 'day').format('YYYYMMDD'); //'20170331';

// Weather.fetchRainPast(date, location);
Weather.fetchPrecipSum(threshold, location);
