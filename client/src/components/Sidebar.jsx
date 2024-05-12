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

const Sidebar = () => {
  const { categoryId } = useParams();

  const { data: relatedPosts } = useQuery({
    queryKey: ['relatedPosts', { categoryId, limit: 5 }],
    queryFn: fetchRelatedPosts,
  });
  const { data: newestPosts } = useQuery({
    queryKey: ['newestPosts', { limit: 5 }],
    queryFn: fetchNewestPosts,
  });

  return (
    <Wrapper>
      {}
      <div className="widget">
        <div className="widget-title">Bài viết cùng mục</div>
        <div className="widget-list">
          {relatedPosts && relatedPosts.length !== 0 ? (
            relatedPosts.map((item, index) => (
              <div className="post-item" key={index}>
                <div className="post-no">{index + 1}.</div>
                <Link to={`/post/${item._id}`} className="post-title">
                  {item.title}
                </Link>
              </div>
            ))
          ) : (
            <div>Không có bài viết cùng mục</div>
          )}
        </div>
      </div>
      <div className="widget">
        <div className="widget-title">Bài viết mới nhất</div>
        <div className="widget-list">
          {newestPosts && newestPosts.length !== 0
            ? newestPosts.map((item, index) => (
                <>
                  <div className="post-item" key={index}>
                    <div className="post-no">{index + 1}.</div>
                    <Link to={`/post/${item._id}`} className="post-title">
                      {item.title}
                    </Link>
                  </div>
                  <Link to="/" className="view-more">
                    Xem tất cả
                  </Link>
                </>
              ))
            : 'Không có bài viết nào'}
        </div>
      </div>
      <div className="widget">
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
