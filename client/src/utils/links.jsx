import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';

const adminLinks = [
  {
    text: 'Thêm bài viết',
    path: '',
    icon: <FaWpforms />,
  },
  {
    text: 'Quản lý bài viết',
    path: 'posts',
    icon: <MdQueryStats />,
  },
];

export { adminLinks };
