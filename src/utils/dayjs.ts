import dayjs from 'dayjs';
import zh from 'dayjs/locale/zh';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime).locale(zh);
export default dayjs as any;
