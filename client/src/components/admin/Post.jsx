/* eslint-disable react/prop-types */
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/Post';
import PostInfo from './PostInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Post = ({ _id, category, title, createdAt, postStatus }) => {
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
          <div className={`status ${postStatus}`}>{postStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../posts/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../posts/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Post;
