import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/AdminFormPage';
import { FormRow } from '../../components';
import MarkedInput from '../../components/admin/MarkedInput';

const AddPost = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Tạo mới bài viết</h4>
        <div className="form-center">
          <FormRow type="text" name="title" labelText="Tiêu đề" />
          <MarkedInput name="content" labelText="Nội dung" />
          <div className="form-btn-container">
            <button className="btn btn-block form-btn" disabled>
              Đăng bài
            </button>
            <button className="btn btn-block form-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Đang lưu bài' : 'Lưu bài'}
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddPost;
