import { Link, useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Sidebar';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const fetchNewestPosts = async ({ queryKey }) => {
  const [, { limit }] = queryKey;

  const { data } = await customFetch.get(`/posts/newest?limit=${limit}`);
  return data;
};

const fetchRelatedPosts = async ({ queryKey }) => {
  const [, { categoryId, limit }] = queryKey;

  const { data } = await customFetch.get(
    `/posts/category/${categoryId}?limit=${limit}`
  );
  return data;
};

const Sidebar = ({ categoryId }) => {
  const { categoryId: categoryIdParam } = useParams();

  categoryId = categoryId || categoryIdParam;

  const { data: relatedPosts } = categoryId
    ? useQuery({
        queryKey: ['relatedPosts', { categoryId, limit: 5 }],
        queryFn: fetchRelatedPosts,
      })
    : [];

  const { data: newestPosts } = categoryId
    ? useQuery({
        queryKey: ['newestPosts', { limit: 5 }],
        queryFn: fetchNewestPosts,
      })
    : [];

  const handleViewMoreNewest = () => {};

  return (
    <Wrapper>
      <div className="widget">
        <div className="widget-title">Bài viết cùng mục</div>
        <div className="widget-list">
          {relatedPosts && relatedPosts.length !== 0 ? (
            <>
              {relatedPosts.map((item, index) => (
                <div className="post-item" key={'related post ' + index}>
                  <div className="post-no">{index + 1}.</div>
                  <Link to={`/post/${item._id}`} className="post-title">
                    {item.title}
                  </Link>
                </div>
              ))}
              <Link to="" className="view-more">
                Xem thêm
              </Link>
            </>
          ) : (
            <div className="widget-empty">Không có bài viết nào</div>
          )}
        </div>
      </div>
      <div className="widget">
        <div className="widget-title">Bài viết mới nhất</div>
        <div className="widget-list">
          {newestPosts && newestPosts.length !== 0 ? (
            <>
              {newestPosts.map((item, index) => (
                <div className="post-item" key={'newest posts ' + index}>
                  <div className="post-no">{index + 1}.</div>
                  <Link to={`/post/${item._id}`} className="post-title">
                    {item.title}
                  </Link>
                </div>
              ))}
              <Link to="" className="view-more">
                Xem thêm
              </Link>
            </>
          ) : (
            <div className="widget-empty">Không có bài viết nào</div>
          )}
        </div>
      </div>
      <div className="widget widget-qr">
        <div className="widget-title">Quét QR bài viết</div>
        <img
          className="qr-code"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
          alt="category qr"
        />
      </div>
    </Wrapper>
  );
};
export default Sidebar;
