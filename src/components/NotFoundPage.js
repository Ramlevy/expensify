import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    {/* Client side routing to prevent refreshes by getting pages from Server side(using <a> tag for example) */}
    404 - <Link to="/">Go to homepage</Link>
  </div>
);

export default NotFoundPage;