

import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

function TimeAgo({ timestamp }) {

    let timeAgo = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        // console.log('timestamp', { timestamp, date, timePeriod })
        timeAgo = `${timePeriod} ago`
    }
    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo