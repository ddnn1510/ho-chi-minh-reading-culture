/* eslint-disable react/prop-types */
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/Post';
import PostInfo from './PostInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
import { TITLE_OF_POST_STATUS } from '../../../../utils/constants';

const Post = ({ _id, category, title, createdAt, status }) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{title}</h5>
          <p>{category.name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          {/* <PostInfo icon={<FaLocationArrow />} text={jobLocation} /> */}
          <PostInfo icon={<FaCalendarAlt />} text={date} />
          {/* <PostInfo icon={<FaBriefcase />} text={jobType} /> */}
          <div className={`status ${status}`}>
            {TITLE_OF_POST_STATUS[status]}
          </div>
        </div>
        <footer className="actions">
          <Link to={`../edit-post/${_id}`} className="btn edit-btn">
            Sửa
          </Link>
          <Form method="post" action={`../delete-post/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Xoá
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Post;
