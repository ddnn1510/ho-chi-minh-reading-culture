/* eslint-disable react/prop-types */
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/Category';
import CategoryInfo from './CategoryInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
import { TITLE_OF_POST_STATUS } from '../../../../utils/constants';

const Category = ({ _id, createdAt, status, name, intro_image }) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <img className="main-icon" src={intro_image} alt={name} />
        <div className="info">
          <h5>{name}</h5>
          {/* <p>{company}</p> */}
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          {/* <JobInfo icon={<FaLocationArrow />} text={jobLocation} /> */}
          <CategoryInfo icon={<FaCalendarAlt />} text={date} />
          {/* <JobInfo icon={<FaBriefcase />} text={jobType} /> */}
          <div className={`status ${status}`}>
            {TITLE_OF_POST_STATUS[status]}
          </div>
        </div>
        <footer className="actions">
          <Link to={`../edit-category/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-category/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Category;
